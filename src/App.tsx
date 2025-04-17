import React, { useEffect } from 'react';
import Header from './components/Header';
import CodeContextInput from './components/CodeContextInput';
import PromptControls from './components/PromptControls';
import PromptOutput from './components/PromptOutput';
import FormattingToggle from './components/FormattingToggle';
import CopyPromptButton from './components/CopyPromptButton';
import { useAppContext } from './hooks/useAppContext';
import { generateFullPrompt } from './utils/generatePrompt';

const App = () => {
  const {
    includeIdentity,
    includeFormatting,
    contextCode,
    type,
    name,
    setFullPrompt,
  } = useAppContext();

  useEffect(() => {
    const fullPrompt = generateFullPrompt(
      includeIdentity,
      includeFormatting,
      contextCode,
      type,
      name
    );
    setFullPrompt(fullPrompt);
  }, [includeIdentity, includeFormatting, contextCode, setFullPrompt, type, name]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <Header />
      <PromptControls />
      <div className="mb-4 flex gap-6 flex-wrap">
        <FormattingToggle />
        <CopyPromptButton />
      </div>
      <CodeContextInput />
      <PromptOutput />
    </div>
  );
};

export default App;