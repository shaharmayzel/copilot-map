import React, { createContext, useState, ReactNode } from 'react';
import { PromptTypeKey } from '../const/promptTypes';

interface AppState {
  contextCode: string;
  setContextCode: (value: string) => void;
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  type: PromptTypeKey;
  setType: (type: PromptTypeKey) => void;
  name: string;
  setName: (name: string) => void;
  includeIdentity: boolean;
  setIncludeIdentity: (value: boolean) => void;
  includeFormatting: boolean;
  setIncludeFormatting: (value: boolean) => void;
  fullPrompt: string;
  setFullPrompt: (value: string) => void;
}

export const AppContext = createContext<AppState | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [contextCode, setContextCode] = useState('');
  const [darkMode, setDarkMode] = useState(true);
  const [type, setType] = useState<PromptTypeKey>('state');
  const [name, setName] = useState('');
  const [includeIdentity, setIncludeIdentity] = useState(true);
  const [includeFormatting, setIncludeFormatting] = useState(true);
  const [fullPrompt, setFullPrompt] = useState('');


  return (
    <AppContext.Provider
      value={{
        fullPrompt,
        setFullPrompt,
        contextCode,
        setContextCode,
        darkMode,
        setDarkMode,
        type,
        setType,
        name,
        setName,
        includeIdentity,
        setIncludeIdentity,
        includeFormatting,
        setIncludeFormatting,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};