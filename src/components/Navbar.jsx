import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 96; // 24 * 4 = 96px (h-24)
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
    setNav(false);

    // Map menu items to section IDs
    const sectionMap = {
      Home: "hero",
      Features: "features",
      Contact: "contact",
    };

    scrollToSection(sectionMap[item]);
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const NavItem = ({ children }) => (
    <li
      className="p-4 cursor-pointer relative group"
      onClick={() => handleItemClick(children)}
    >
      <span
        className={`${
          activeItem === children ? "text-emerald-400" : "text-white"
        }`}
      >
        {children}
      </span>
      <span
        className={`absolute bottom-2 left-4 right-4 h-0.5 transform origin-left transition-transform duration-300 ${
          activeItem === children
            ? "bg-emerald-400 scale-x-100"
            : "bg-emerald-400 scale-x-0 group-hover:scale-x-100"
        }`}
      />
    </li>
  );

  const Logo = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 100"
      className="h-12 w-auto"
    >
      <text
        x="10"
        y="50"
        fontFamily="Inter, sans-serif"
        fontSize="48"
        fontWeight="700"
        fill="#2dd4bf"
      >
        Cashfolio
      </text>
      <text
        x="10"
        y="80"
        fontFamily="Inter, sans-serif"
        fontSize="24"
        fill="#64748b"
      >
        advisory
      </text>
    </svg>
  );

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center h-24 px-4 transition-all duration-300 ${
        isScrolled ? "bg-[#0f0f0f]/80" : "bg-[#0f0f0f]"
      }`}
    >
      <div className="max-w-[1240px] mx-auto w-full flex justify-between items-center">
        {/* <h1 className="w-full text-3xl font-bold text-emerald-400">
          CashFolio
        </h1> */}
        <div className="w-full">
          <Logo />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex">
          <NavItem>Home</NavItem>
          <NavItem>Features</NavItem>
          <NavItem>Contact</NavItem>
        </ul>

        {/* Mobile Menu Container */}
        <div className="md:hidden relative">
          {/* Mobile Menu Icon */}
          <div onClick={handleNav} className="cursor-pointer">
            {nav ? (
              <X size={20} color={isScrolled ? "black" : "white"} />
            ) : (
              <Menu size={20} color={isScrolled ? "black" : "white"} />
            )}
          </div>

          {/* Mobile Menu Dropdown */}
          <ul
            className={`absolute right-0 top-12 w-48 py-2 bg-[#0B192C] rounded-lg shadow-lg ${
              nav ? "opacity-100 visible" : "opacity-0 invisible"
            } transition-all duration-300 ease-in-out`}
          >
            {["Home", "Features", "Contact"].map((item) => (
              <li
                key={item}
                className={`px-4 py-2 hover:bg-[#1f1f1f] cursor-pointer ${
                  activeItem === item ? "text-emerald-400" : "text-white"
                }`}
                onClick={() => handleItemClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
