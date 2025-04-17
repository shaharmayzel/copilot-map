import React from 'react';
import { useAppContext } from '../hooks/useAppContext';

const DarkModeToggle: React.FC = () => {
  const { darkMode, setDarkMode } = useAppContext();

  const toggleDark = () => {
    setDarkMode(!darkMode);
  };

  return (
    <label className="flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={darkMode}
        onChange={toggleDark}
        className="hidden"
      />
      <span
        className={`w-10 h-6 flex items-center bg-gray-300 rounded-full p-1 transition-colors ${
          darkMode ? 'bg-gray-700' : 'bg-gray-200'
        }`}
      >
        <span
          className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
            darkMode ? 'translate-x-4' : 'translate-x-0'
          }`}
        ></span>
      </span>
      <span className="ml-2 text-sm">{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
    </label>
  );
};

export default DarkModeToggle;