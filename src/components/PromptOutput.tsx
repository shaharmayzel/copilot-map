
import React, { FC } from 'react';

const PromptOutput: FC<{ prompt: string }> = ({ prompt }) => (
  <pre className="whitespace-pre-wrap bg-gray-800 p-4 rounded text-sm overflow-auto">{prompt}</pre>
);

export default PromptOutput;
