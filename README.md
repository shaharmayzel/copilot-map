# Copilot Prompt Generator

I got tired of writing the same AI prompts over and over, and I wanted ChatGPT to just get my vibe already. So I built this.

This thing builds prompts like I would (In theory) — clean, typed, minimal nonsense.

## What It Does

You pick a thing:
- state slice
- test driver
- utility function

You give it a name.  
It gives you back a full AI-ready prompt with:
- your style
- your standards
- your structure
- optional code context (wrapped in backticks, like it should be)

Then you just copy it and paste it into ChatGPT (or Claude or whatever robot u prefer) and let it write code the way *you* write code.

## How to Run

Clone this.  
Then:

```bash
npm install
npm run dev
```

Then open it in localhost (No place like home)
That's it.

## How to Use It

1. Choose what you're generating (state, test, util)
2. Type the name (like `Theme`)
3. Toggle on/off whether to include your coding identity
4. (Optional) Paste in some code that the AI should know about
5. Copy the result and slap it into ChatGPT

## Make It Your Own

If you're picky (you are), the app is super configurable.

You can change:
- your dev identity → in `src/const/strings.ts`
- prompt templates → in `src/const/promptTypes.ts`
- add new types, change the way outputs are formatted, etc.

The templates use `{name}` and `{Name}` placeholders — lowercase and capitalized versions of the name you enter.

Want to add a `component` template? Go for it.  
Want to change the default phrasing to match your mood? Easy.  
This is your prompt engine now. Tell Copilot who is the BOSS.

## Why

Because I don't want to tell AI how I like my code every single time.  
This does it for me. It tells Copilot what kind of dev it's working with.
