import React from 'react';
import { useAppContext } from '../hooks/useAppContext';

const FormattingToggle: React.FC = () => {
  const { includeFormatting, setIncludeFormatting } = useAppContext();

  const toggleFormatting = () => {
    setIncludeFormatting(!includeFormatting);
  };

  return (
    <label className="text-sm">
      <input
        type="checkbox"
        checked={includeFormatting}
        onChange={toggleFormatting}
        className="mr-1"
      />
      Include Formatting Instructions
    </label>
  );
};

export default FormattingToggle;