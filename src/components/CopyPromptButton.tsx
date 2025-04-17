import React from 'react';
import { useAppContext } from '../hooks/useAppContext';

const CopyPromptButton: React.FC = () => {
  const { fullPrompt } = useAppContext();

  const copyToClipboard = () => {
    if (fullPrompt) {
      navigator.clipboard.writeText(fullPrompt);
    }
  };

  return (
    <button
      onClick={copyToClipboard}
      className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded"
    >
      Copy Prompt
    </button>
  );
};

export default CopyPromptButton;