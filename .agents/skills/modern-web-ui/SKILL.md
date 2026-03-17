---
name: modern-web-ui
description: Guide for creating modern, premium web UI components with React and Vanilla CSS.
---

# Premium Web Design Skill

This skill provides guidelines and patterns for building highly visual, modern, and animated React components without relying on external CSS frameworks like Tailwind (unless specified).

## Core Principles
1. **Aesthetics First**: Use vibrant colors, linear gradients, and engaging micro-animations (like hover scaling and pulse effects).
2. **Vanilla CSS (Variables)**: Always define a robust `:root` token system for consistency (`--primary-color`, `--shadow-md`, `--radius-lg`).
3. **Icons & Visuals**: Rely heavily on `lucide-react` or similar clean SVG icons. Never leave a card or section looking like an empty box.
4. **Layout**: Favor CSS Grid (`grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`) for responsive card layouts.

## Implementation Guidelines

Reference the `assets/modern-theme.css` file within this skill directory for the complete set of CSS variables and structural styling required for this design.

### 1. The Design System
Always define the necessary root CSS variables (see `assets/modern-theme.css`) to ensure a modern look.

### 2. Component Structure (The 'Paper' Approach)
Wrap main components in a 'document paper' that stands out from the background with a premium gradient top-border accent.

### 3. Interactive Cards
Cards should elevate and add border coloring on hover.

### 4. Animations
Include classes like `.animate-fade-in` with staggered delays (`.delay-100`, `.delay-200`) using simple keyframes to make the initial load feel dynamic.

## When to use this skill:
- When the user asks for a "modern", "premium", "colorful", or "dashboard" style React page.
- When creating consumer-facing landing pages or pitch decks ported to the web.
