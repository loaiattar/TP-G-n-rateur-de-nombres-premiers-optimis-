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
    <header className="flex flex-col md:flex-row md:items-center md:justify-between p-4 bg-white shadow-md sticky top-0 z-50">
      <h1 className="text-2xl font-bold mb-2 md:mb-0">My App</h1>

      <nav className="flex gap-4">
        {tabs.map((tab) => (
          <Link
            key={tab.label}
            to={tab.path}
            className={`px-3 py-2 rounded-md font-medium transition ${
              location.pathname === tab.path
                ? 'bg-blue-500 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            {tab.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
