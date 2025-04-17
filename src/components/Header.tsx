import React from 'react';
import DarkModeToggle from './DarkModeToggle';
import { useAppContext } from '../hooks/useAppContext';

const Header: React.FC = () => {
  const { includeIdentity, setIncludeIdentity } = useAppContext();

  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-xl font-semibold">Copilot Prompt Generator</h1>
      <div className="flex items-center gap-4">
        <DarkModeToggle />
        <label className="text-sm">
          <input
            type="checkbox"
            checked={includeIdentity}
            onChange={() => setIncludeIdentity(!includeIdentity)}
            className="mr-1"
          />
          Inject Identity
        </label>
      </div>
    </div>
  );
};

export default Header;