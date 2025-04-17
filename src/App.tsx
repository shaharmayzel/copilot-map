import React, { useState } from 'react';
import { identity, formattingGuidelines } from './const/strings';
import { promptTypes, PromptTypeKey } from './const/promptTypes';
import Header from './components/Header';
import PromptControls from './components/PromptControls';
import PromptOutput from './components/PromptOutput';
import DarkModeToggle from './components/DarkModeToggle';
import FormattingToggle from './components/FormattingToggle';
import CodeContextInput from './components/CodeContextInput';
import CopyPromptButton from './components/CopyPromptButton';

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
        <FormattingToggle
          includeFormatting={includeFormatting}
          toggleFormatting={() => setIncludeFormatting(!includeFormatting)}
        />
        <CopyPromptButton fullPrompt={fullPrompt} />
      </div>

      <CodeContextInput
        contextCode={contextCode}
        setContextCode={setContextCode}
        darkMode={darkMode}
      />

      {fullPrompt && <PromptOutput prompt={fullPrompt} />}
    </div>
  );
};

export default App;