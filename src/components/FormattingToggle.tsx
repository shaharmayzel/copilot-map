import React from 'react';

interface FormattingToggleProps {
  includeFormatting: boolean;
  toggleFormatting: () => void;
}

const FormattingToggle: React.FC<FormattingToggleProps> = ({ includeFormatting, toggleFormatting }) => (
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

export default FormattingToggle;