import React from 'react';

interface CodeContextInputProps {
  contextCode: string;
  setContextCode: (value: string) => void;
  darkMode: boolean;
}

const CodeContextInput: React.FC<CodeContextInputProps> = ({ contextCode, setContextCode, darkMode }) => (
  <div className="mb-4">
    <label className="block mb-1 text-sm">Code Context (optional):</label>
    <textarea
      value={contextCode}
      onChange={(e) => setContextCode(e.target.value)}
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

export default CodeContextInput;