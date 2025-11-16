import { Link, useLocation } from '@tanstack/react-router';

const Header = () => {
  const location = useLocation();

  const tabs = [
    { label: 'Home', path: '/' },
    { label: 'Prime Numbers Check', path: '/primes' },
    { label: 'Prime Numbers Generator', path: '/primes-gen' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <header className="backdrop-blur-lg bg-white/70 shadow-lg sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between p-4">
        <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          My App
        </h1>

        <nav className="flex gap-2 mt-2 md:mt-0">
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
                    : "text-gray-700 hover:text-blue-600 hover:bg-blue-50 hover:shadow-sm"
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
      </div>
    </header>
  );
};

export default Header;
