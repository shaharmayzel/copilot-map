
import React, { FC } from 'react';

interface HeaderProps {
  darkMode: boolean;
  toggleDark: () => void;
  includeIdentity: boolean;
  toggleIdentity: () => void;
}

const Header: FC<HeaderProps> = ({ darkMode, toggleDark, includeIdentity, toggleIdentity }) => (
  <div className="flex justify-between items-center mb-6">
    <h1 className="text-xl font-semibold">Copilot Prompt Generator</h1>
    <div className="flex items-center gap-4">
      <label className="text-sm">
        <input type="checkbox" checked={darkMode} onChange={toggleDark} className="mr-1" />
        Dark Mode
      </label>
      <label className="text-sm">
        <input type="checkbox" checked={includeIdentity} onChange={toggleIdentity} className="mr-1" />
        Inject Identity
      </label>
    </div>
  </div>
);

export default Header;
