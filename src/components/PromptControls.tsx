import React, { ChangeEvent, FC } from 'react';
import { useAppContext } from '../hooks/useAppContext';
import { PromptTypeKey, promptTypes } from '../const/promptTypes';

const PromptControls: FC = () => {
  const { type, setType, name, setName, darkMode } = useAppContext();

  const handleTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value as PromptTypeKey);
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <>
      <div className="mb-4">
        <label className="block mb-1">Prompt Type:</label>
        <select
          value={type}
          onChange={handleTypeChange}
          className={`p-2 rounded ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`}
        >
          {Object.entries(promptTypes).map(([key, config]) => (
            <option key={key} value={key}>
              {config.label}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-1">Function name:</label>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          className={`p-2 rounded w-full ${
            darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'
          }`}
        />
      </div>
    </>
  );
};

export default PromptControls;