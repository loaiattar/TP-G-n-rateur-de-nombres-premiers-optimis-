import { Link, useLocation } from '@tanstack/react-router';
import ThemeToggle from './ThemeToggle';

import { motion } from "framer-motion";

const Header = () => {
  const location = useLocation();

  const tabs = [
    { label: 'Home', path: '/' },
    { label: 'Prime Numbers Check', path: '/primes' },
    { label: 'Prime Numbers Generator', path: '/primes-gen' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <header className="backdrop-blur-lg bg-white/70 dark:bg-gray-900/70 shadow-lg sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between p-4">
        <Link to="/" className="group">
          <motion.h1
            className="text-2xl md:text-3xl font-black tracking-tighter bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Check Prime
          </motion.h1>
        </Link>

        <div className="flex items-center gap-4 mt-2 md:mt-0">
          <nav className="flex gap-2">
            {tabs.map((tab) => {
              const active = location.pathname === tab.path;

              return (
                <Link
                  key={tab.label}
                  to={tab.path}
                  className={`
                    relative px-4 py-2 rounded-lg font-medium transition-all
                    ${active
                      ? "bg-blue-600 text-white shadow-md scale-105"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 hover:shadow-sm"
                    }
                  `}
                >
                  {tab.label}

                  {/* Underline animation */}
                  {!active && (
                    <span className="absolute left-0 bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
                  )}
                </Link>
              );
            })}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
