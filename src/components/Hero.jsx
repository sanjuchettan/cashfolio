import React, { useState, useEffect } from "react";

const Hero = () => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = ["Indian Stock", "Crypto", "BTC"];
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const pauseTime = 2000;

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      const navbarHeight = 96;
      const elementPosition = featuresSection.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (text.length < currentWord.length) {
            setText(currentWord.slice(0, text.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
        } else {
          if (text.length > 0) {
            setText(currentWord.slice(0, text.length - 1));
          } else {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <div className="text-white bg-[#0f0f0f]">
      <div className="max-w-[800px] mt-[-76px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          GROWING WITH REAL TIME MARKET DATA
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 mt-6">
          Grow with {text}
          <span className="animate-blink">|</span>
        </h1>
        <p className="md:text-2xl text-xl font-bold text-gray-500 mt-4">
          Real Time market insights, dedicated support, comprehensive
          educational resources to empower your trading journey
        </p>
        <button
          onClick={scrollToFeatures}
          className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:bg-[#00c589] transition-colors duration-300"
        >
          See Features
        </button>
      </div>
    </div>
  );
};

export default Hero;
