---
name: hwp-extractor
description: Guide for extracting plain text from Korean HWP (한글) documents using Python for use as context in prompting.
---

# Python HWP Extractor Skill

This skill allows agents to extract text from a `.hwp` file robustly to feed into the context window for document understanding, UI generation, or data extraction.

## Core Principles
1. **Never generate DOCX or HWP manually**: AI cannot safely generate or modify `.hwp` or `.docx` formats reliably without breaking internal XML/OLE structures. Thus, we only *read* them or generate web UIs based on them.
2. **Use olefile for extraction**: The safest and most robust way to extract text from an HWP 5.0 file without requiring an actual Hancom Office installation is by reading the OLE structure using Python.
3. **Save Extracted Text**: Always save the extracted text to a `.txt` file so you, the agent, can parse it using the `view_file` tool.

## Implementation Guidelines

### 1. Requirements
Ensure you install the `olefile` library first.
```powershell
pip install olefile
```

### 2. The Python Extraction Script (`extract_hwp.py`)

Run the `scripts/extract_hwp.py` script included in this skill's directory when asked to read an HWP document. Provide the correct absolute paths in the script before running.

### 3. Workflow Use Case
1. Read the `scripts/extract_hwp.py` script.
2. Edit the paths in the script to match your target `.hwp` file and output `.txt` file, then execute the script: `python d:\workspace\strayCat\.agents\skills\hwp-extractor\scripts\extract_hwp.py`.
3. Use the `view_file` tool on the output `.txt` file to read the document contents into your context window.

## When to use this skill:
- When a user uploads or references a `.hwp` document and asks you to summarize, read, or analyze it.
- Before trying to convert a Korean document into a React UI.
