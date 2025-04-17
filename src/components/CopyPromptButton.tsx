import React, { useState } from 'react';
import { useAppContext } from '../hooks/useAppContext';

const CopyPromptButton: React.FC = () => {
  const { fullPrompt } = useAppContext();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    if (fullPrompt) {
      navigator.clipboard.writeText(fullPrompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={copyToClipboard}
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded"
      >
        Copy Prompt
      </button>
      {copied && (
        <div className="absolute top-1/2 left-full ml-2 transform -translate-y-1/2 bg-green-500 text-white text-sm px-3 py-1 rounded shadow">
          Copied!
        </div>
      )}
    </div>
  );
};

export default CopyPromptButton;