import React from 'react';
import { useCodeContext } from '../hooks/useCodeContext';

const CodeContextInput: React.FC = () => {
  const { contextCode, updateContextCode, darkMode } = useCodeContext();

  return (
    <div className="mb-4">
      <label className="block mb-1 text-sm">Code Context (optional):</label>
      <textarea
        value={contextCode}
        onChange={(e) => updateContextCode(e.target.value)}
        rows={8}
        placeholder="Paste relevant code here..."
        className={`w-full rounded px-4 py-3 text-sm font-mono leading-snug resize-y shadow-inner border ${
          darkMode
            ? 'bg-gray-800 text-white border-gray-700 placeholder-gray-500'
            : 'bg-gray-100 text-black border-gray-300 placeholder-gray-400'
        }`}
      />
    </div>
  );
};

export default CodeContextInput;