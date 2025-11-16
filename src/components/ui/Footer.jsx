const Footer = ({ className = '' }) => {
  return (
    <footer className={`bg-gray-100 text-gray-700 p-4 mt-8 ${className}`}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} My App. All rights reserved.</p>

        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#home" className="hover:underline">
            Home
          </a>
          <a href="#prime" className="hover:underline">
            Prime Numbers Check
          </a>
          <a href="#generator" className="hover:underline">
            Prime Numbers Generator
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;