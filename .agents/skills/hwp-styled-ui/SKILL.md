---
name: hwp-styled-ui
description: Guide for creating HWP (Hangul Word Processor) styled React UI components for Korean government/corporate documents. Supports both basic monochromatic layouts and advanced data-driven layouts with charts. Use when asked to generate business plan (사업계획서) interfaces.
---

# HWP (한글) Styled UI Skill

This skill defines the methodology for replicating the aesthetic of official Korean government or corporate HWP (Hangul Word Processor) documents directly within a web browser using React and standard CSS. 

## Core Principles
1. **Monochrome Constraint**: Completely ban the use of colors other than black, white, and varying shades of gray (`#333`, `#666`, `#e5e5e5`). (Exception: Recharts may use muted dark grey colors, but never bright neon colors).
2. **Strict Geometry**: Ban `border-radius` (rounded corners) and `box-shadow` (shadows). Use sharp 1px or 2px solid borders.
3. **Typography**: Use standard HWP-like fonts. Combine a clean sans-serif (e.g., Noto Sans KR, Malgun Gothic) for headings, and a classic serif (e.g., Noto Serif KR, Batang) for body text. Enforce `word-break: keep-all;` and `line-height: 1.6;` on all paragraphs.
4. **Table-Driven Design**: Mimic HWP's table and text box (`글상자`) UI extensively.

---

## 🚀 Creating UI Components (Progressive Disclosure)

Depending on the complexity required by the user, choose **ONE** of the following implementation approaches. Do NOT load both assets into your context, pick the one that matches the user's need.

### Option A: Basic HWP UI (Simple Layouts)
Use this option when the user requests a simple Table, Text-Box (`글상자`), or a classic monochrome wireframe without complex data visualizations.

* **Reference Asset**: Read `assets/hwp-theme.css` within this skill directory.
* **Implementation**:
  * Mimic HWP tables: thick outer border (2px), thin inner borders (1px dotted/solid), and a gray background for the header row.
  * Flowcharts: Avoid complex SVG icons. Use text boxes and simple html arrows (`→`).
  * CSS Variables: Utilize the `--hwp-black`, `--hwp-gray` variables defined in the asset.

### Option B: Advanced V3 Data-Driven UI (Charts & Complex Execution Plans)
Use this option when the user explicitly needs a "Data-Driven" UI, or asks to visualize market sizes, problem recognition (문제인식), or growth strategies (성장전략) with evidence and quantitative metrics.

* **Reference Asset**: Read `assets/ExampleV3.jsx` within this skill directory.
* **Implementation Rules (The V3 6-Mandatory Rules)**:
  1. **Evidence-Based Text**: Every major claim MUST have a source citation (e.g., `* 출처: 통계청(2025)`).
  2. **Upward Trending Charts**: MUST use `recharts` to represent visual data showing an upward trend (흑백톤 유지).
  3. **Meaningful Execution Tables**: Tables must contain quantifiable details (Unit Price, Quantity, Total).
  4. **UI Concept Placeholders**: Provide two side-by-side rectangular boxes representing UI screen mockups, along with `lucide-react` icons inside them.
  5. **Key Message Quotes**: Deliver core summaries at the top of sections using a thick left-bordered quote block.
  6. **Concise Typography**: Strictly control line breaks and use bullet points (개조식).
  7. **Persona-Driven Terminology & Ranking**: Before generating the UI, analyze the user's business plan item and score the suitability of each of the 3 persona levels below out of 100. **You MUST present the result in the exact Markdown format below for the user to select:**

     ```markdown
     ### 🏆 [아이템명] 맞춤형 "용어 전략" 랭킹 및 득점
     [현재 작성 중인 사업계획서 문맥(예: 예비창업패키지 등)을 감안한 1~3줄 요약 평]

     #### 🥇 1위: [Level X] [페르소나명] 타겟 (추천도: [00]점 / [한줄평])
     - **측정 및 선정 이유:** [왜 이 타겟이 현재 사업 아이템에 가장 적합한지 상세 설명]
     - **적용 기대 효과:** [이 용어 방식을 채택했을 때 문서(UI)가 가져올 극적인 효과]

     #### 🥈 2위: [Level Y] [페르소나명] 타겟 (추천도: [00]점 / [한줄평])
     ... (동일 포맷)

     #### 🥉 3위: [Level Z] [페르소나명] 타겟 (추천도: [00]점 / [한줄평])
     ... (동일 포맷)

     **💡 멘토의 행동 제안 (Action Item)**
     [1-2위를 혼합하거나, 1위에 맞추어 즉시 UI 코드 생성을 진행할지 묻는 제안]
     ```

     Once the user selects a level, you must translate deep-tech jargon accordingly:
     * **[Level 1] 전문가/딥테크 (Expert)**: Keep precise academic terminology.
     * **[Level 2] VC/투자심사역 (Investor)**: Translate into business impacts (ROI, time, CapEx).
     * **[Level 3] 초보자/공무원 (Public/Gov)**: Use analogies and emphasize ESG/social value.
  8. **Korean-First Language (불필요한 영단어 자제)**: Avoid unnecessary English business jargon (e.g., BM, Pain Point, GTM, Scale-up, Target). Translate them into natural Korean equivalents (e.g., 수익 모델, 핵심 문제, 시장 진입, 성장 전략, 핵심 고객) unless it is an unavoidable technical standard.

## When to use this skill:
- When generating templates for government grants, business plans (사업계획서), or official reports in Korea.
- When you are executing the `/hwp-to-react-ui` workflow.
- When generating UI components based on extracted Korean `.hwp` text.
