import { identity, formattingGuidelines } from '../const/strings';
import { promptTypes, PromptTypeKey } from '../const/promptTypes';

export const generateFullPrompt = (
  includeIdentity: boolean,
  includeFormatting: boolean,
  contextCode: string,
  type: PromptTypeKey,
  name: string
): string => {
  const config = promptTypes[type];

  const identitySection = includeIdentity ? identity : '';
  const formattingSection = includeFormatting ? formattingGuidelines : '';
  const systemInstruction = config.systemInstruction
    .replaceAll('{name}', name.toLowerCase())
    .replaceAll('{Name}', name.charAt(0).toUpperCase() + name.slice(1));
  const outputFormat = config.outputFormat
    .replaceAll('{name}', name.toLowerCase())
    .replaceAll('{Name}', name.charAt(0).toUpperCase() + name.slice(1));
  const contextSection = contextCode
    ? `Here is the existing code context:\n\n\`\`\`ts\n${contextCode.trim()}\n\`\`\``
    : '';

  return [identitySection, systemInstruction, formattingSection, outputFormat, contextSection]
    .filter(Boolean) 
    .join('\n\n'); 
};