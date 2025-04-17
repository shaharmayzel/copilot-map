import React from 'react';

interface CopyPromptButtonProps {
  fullPrompt: string;
}

const CopyPromptButton: React.FC<CopyPromptButtonProps> = ({ fullPrompt }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(fullPrompt);
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