const Footer = () => {
  return (
    <footer className="bg-[#1f1f1f] py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-2">
          <div className="text-sm text-gray-300">
            © {new Date().getFullYear()} Cashfolio Advisory. All rights
            reserved.
          </div>
          <div className="text-sm text-gray-300 flex items-center">
            Made with
            <svg
              className="w-4 h-4 mx-1 text-red-500 animate-pulse"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            by Tech Team of Cashfolio Advisory
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
