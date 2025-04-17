
export const promptTypes = {
  state: {
    label: "State Slice",
    inputLabel: "Slice name",
    systemInstruction: "Add a state slice called {name}. Include:\n- type\n- initial value\n- update function\n- selector.\nUse named exports. Types first. No export default.",
    outputFormat: "export type {Name} = { ... };\nexport const initial{Name}: {Name} = { ... };\nexport function update{Name}(state: {Name}, data: Partial<{Name}>): {Name} {\n  return { ...state, ...data };\n}\nexport const select{Name} = (state: { {name}: {Name} }) => state.{name};"
  },
  test: {
    label: "Test Driver",
    inputLabel: "Component name",
    systemInstruction: "Generate a driver file for {name}. Include setup, act, and assert functions. Use named exports.",
    outputFormat: "// {name}.driver.ts\nexport const setup = (...) => ...\nexport const act = async (...) => ...\nexport const assert = (...) => ({ ... });"
  },
  util: {
    label: "Utility Function",
    inputLabel: "Function name",
    systemInstruction: "Create a pure utility function called {name}. Include full type annotations. Avoid side effects.",
    outputFormat: "export function {name}(args): ReturnType {\n  // ...\n}"
  }
} as const;

export type PromptTypeKey = keyof typeof promptTypes;
