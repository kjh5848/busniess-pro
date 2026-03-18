---
description: An end-to-end workflow to analyze an HWP (Hangul) document and convert it into a reference-ready React UI component mimicking standard HWP formats.
---

# Workflow: HWP Application to HWP-Styled React UI

This workflow outlines the exact steps needed to assist users who provide Korean HWP application forms (e.g. 사업계획서, 정부지원 양식) and request a UI design based on them.

## Prerequisites
- You must understand the skills detailed in `.agents/skills/hwp-extractor/SKILL.md` and `.agents/skills/hwp-styled-ui/SKILL.md`.
- **CRITICAL:** You must understand the `.agents/skills/official-toc-mapper/SKILL.md` skill to ensure the UI strictly follows the official document outline.

## Steps

### 1. Extract the Text from the HWP Document
You must safely extract text from the proprietary HWP format to read the document.
- Use the script located at `.agents/skills/hwp-extractor/scripts/extract_hwp.py`.
- Edit the correct target `.hwp` and output `.txt` paths in the script and execute it via `run_command` in powershell: `python <path_to_script>`.

### 2. Read and Analyze the Document
- Use `view_file` to read the extracted `.txt` file.
- **CRITICAL:** Refer to `목차.md` (or the `official-toc-mapper` skill). Understand the exact sections the user wants to convert. You MUST map your UI structure 1:1 to the subsections defined in the official TOC. Do not invent or abbreviate chapter titles.
- Note any specific layout requirements (e.g. Comparison Tables, Text Boxes).

### 3. Initialize a React Interface
- Create a `Vite + React` project (or use an existing one if the user provides it).
- **CRITICAL:** Do NOT use the `modern-web-ui` skill unless explicitly requested. You MUST default to the `hwp-styled-ui` skill.

### 4. Evaluate Persona & Terminology Strategy
- **CRITICAL:** Before generating any UI code, review Rule 7 in `.agents/skills/hwp-styled-ui/SKILL.md`.
- Analyze the user's business item and output the 🏆 Persona Ranking Markdown template. 
- Wait for the user to select the appropriate Persona Level (Level 1, 2, or 3).
- Apply the chosen terminology level (e.g., translating deep-tech jargon into public-friendly analogies if Level 3 is chosen) and Rule 8 (Korean-First Language) throughout the UI text.

### 5. Apply The HWP Style (Progressive Disclosure)
Depending on what the user asks for, load the corresponding asset from the `hwp-styled-ui` skill:
- **For simple wireframes/forms**: Open the global CSS file (e.g. `index.css`), establish the Monochromatic Design constraints by referencing `.agents/skills/hwp-styled-ui/assets/hwp-theme.css`. Apply the CSS classes and variables.
- **For data-driven/pitch-deck style forms**: Reference the V3 React Example `.agents/skills/hwp-styled-ui/assets/ExampleV3.jsx` to build a layout featuring charts (`recharts`), citations, and UI mockups.

### 6. Build the React Component
- Create the layout using strict HTML structures suitable for HWP drawing tools.
- **CRITICAL:** Follow the UI design rules laid out in `rules.md` (R-09 to R-11) for Table design, Text Boxes layout, correctly handling "작성 예정" empty placeholders without hallucination, and avoiding blocked dependencies (no `lucide-react`, no `border-radius`).

### 7. Verify and Notify
- Add the component to `App.jsx`.
- Run the local dev server using `npm run dev` and test it with the `browser_subagent`.
- Inform the user that the UI is available on `http://localhost:5173/` and serves as a direct, structural reference for their HWP authoring.
