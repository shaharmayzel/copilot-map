import React from 'react';

interface DarkModeToggleProps {
  darkMode: boolean;
  toggleDark: () => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ darkMode, toggleDark }) => (
  <button
    onClick={toggleDark}
    className={`font-medium px-4 py-2 rounded ${
      darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'
    }`}
  >
    Toggle Dark Mode
  </button>
);

export default DarkModeToggle;