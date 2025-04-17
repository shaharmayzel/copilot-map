import React, { useState } from 'react';
import { identity, formattingGuidelines } from './const/strings';
import { promptTypes, PromptTypeKey } from './const/promptTypes';
import Header from './components/Header';
import PromptControls from './components/PromptControls';
import PromptOutput from './components/PromptOutput';

const App = () => {
  const [type, setType] = useState<PromptTypeKey>('state');
  const [name, setName] = useState('');
  const [includeIdentity, setIncludeIdentity] = useState(true);
  const [includeFormatting, setIncludeFormatting] = useState(true);
  const [contextCode, setContextCode] = useState('');
  const [darkMode, setDarkMode] = useState(true);

  const capitalize = (s: string): string => s.charAt(0).toUpperCase() + s.slice(1);
  const lowercase = (s: string): string => s.charAt(0).toLowerCase() + s.slice(1);

  const config = promptTypes[type];

  const systemInstruction = config.systemInstruction
    .replaceAll('{name}', lowercase(name))
    .replaceAll('{Name}', capitalize(name));

  const outputFormat = config.outputFormat
    .replaceAll('{name}', lowercase(name))
    .replaceAll('{Name}', capitalize(name));

  const contextSection = contextCode
    ? `Here is the existing code context:\n\n\`\`\`ts\n${contextCode.trim()}\n\`\`\``
    : '';

  const sections = [
    includeIdentity ? identity : null,
    systemInstruction,
    includeFormatting ? formattingGuidelines : null,
    outputFormat,
    contextSection,
  ];

  const fullPrompt = name ? sections.filter(Boolean).join('\n\n').trim() : '';

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} p-6`}>
      <Header
        darkMode={darkMode}
        toggleDark={() => setDarkMode(!darkMode)}
        includeIdentity={includeIdentity}
        toggleIdentity={() => setIncludeIdentity(!includeIdentity)}
      />

      <PromptControls
        type={type}
        name={name}
        darkMode={darkMode}
        setType={setType}
        setName={setName}
      />

      <div className="mb-4 flex gap-6 flex-wrap">
        <label className="text-sm">
          <input
            type="checkbox"
            checked={includeFormatting}
            onChange={() => setIncludeFormatting(!includeFormatting)}
            className="mr-1"
          />
          Include Formatting Instructions
        </label>

        <button
          onClick={() => navigator.clipboard.writeText(fullPrompt)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded"
        >
          Copy Prompt
        </button>
      </div>

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
      {fullPrompt && <PromptOutput prompt={fullPrompt} />}
    </div>
  );
};

export default App;
