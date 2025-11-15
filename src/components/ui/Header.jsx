import { useState } from 'react';

const Header = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const tabs = ['Home', 'Prime Numbers Check', 'Contact'];

  return (
    <header className="flex flex-col md:flex-row md:items-center md:justify-between p-4 bg-white shadow-md sticky top-0 z-50">
      <h1 className="text-2xl font-bold mb-2 md:mb-0">My App</h1>

      <nav className="flex gap-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-2 rounded-md font-medium transition ${
              activeTab === tab
                ? 'bg-blue-500 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;
