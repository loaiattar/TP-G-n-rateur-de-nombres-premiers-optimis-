import { Link } from '@tanstack/react-router';

const Footer = ({ className = '' }) => {
  return (
    <footer className={`bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300 transition-colors duration-300 p-4 mt-8 ${className}`}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} My App. All rights reserved.</p>

        <div className="flex gap-4 mt-2 md:mt-0">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/primes" className="hover:underline">
            Prime Numbers Check
          </Link>
          <Link to="/primes-gen" className="hover:underline">
            Prime Numbers Generator
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;