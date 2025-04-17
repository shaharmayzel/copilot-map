import React from 'react';
import { useAppContext } from '../hooks/useAppContext';

const PromptOutput: React.FC = () => {
  const { fullPrompt } = useAppContext();

  return (
    <pre className="whitespace-pre-wrap bg-gray-800 p-4 rounded text-sm overflow-auto">
      {fullPrompt}
    </pre>
  );
};

export default PromptOutput;