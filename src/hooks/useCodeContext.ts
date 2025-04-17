import { useAppContext } from './useAppContext';

export const useCodeContext = () => {
  const { contextCode, setContextCode, darkMode, fullPrompt, setFullPrompt } = useAppContext();

  const updateContextCode = (newCode: string) => {
    setContextCode(newCode);
  };

  return {
    contextCode,
    updateContextCode,
    darkMode,
    fullPrompt,
    setFullPrompt,
  };
};