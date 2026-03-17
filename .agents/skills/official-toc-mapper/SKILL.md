---
name: official-toc-mapper
description: Guide for ensuring React UI generations strictly follow the official Table of Contents from a source document.
---

# Skill: Official Table of Contents Mapper (`official-toc-mapper`)

This skill defines the rules for ensuring that AI-generated UIs (especially for formal documents like business plans) **strictly adhere** to a predefined or officially extracted Table of Contents (TOC), rather than skipping, summarizing, or inventing sections.

## Core Principle (The Golden Rule)
**Do not invent, merge, or abbreviate section titles.** If an official `목차.md` exists, you MUST map your UI structure 1:1 to it.

## Implementation Guidelines

### 1. Locate the Reference TOC
Before building a layout, check if a reference TOC file exists. Usually, the user provides it, or it is extracted into a file like `목차.md`. Always `view_file` on `목차.md` first.

### 2. Strict Section Mapping
When generating code for a specific main section (e.g., "4. 성장전략"), you must include **ALL subsections** listed under it in the official TOC file.
- If `목차.md` lists `4-1, 4-2, 4-3, 4-4, 4-5`, your generated React component MUST contain exact structural blocks (`<section>`, `<h2 className="...">`) for `4-1`, `4-2`, `4-3`, `4-4`, and `4-5`.
- Do not skip `4-3` just because there isn't enough extracted text. If text is missing, provide a visually distinct placeholder or mock layout appropriate for that specific subsection's topic.

### 3. Exact Naming Convention
Use the exact characters, spacing, and numbering from the official TOC.
- **Incorrect:** `<h2>4-1. 목표 시장 분석</h2>` (If the original was `4-1. 제품‧서비스의 목표시장 분석`)
- **Correct:** `<h2>4-1. 제품‧서비스의 목표시장 분석</h2>`

### 4. Handling Empty or Missing Data
If the source text extraction does not provide content for a specific subsection mandated by the TOC:
- create an empty `v2-info-box` or `v2-table` with a placeholder description.
- Example: "본 항목(4-3. 창업아이템 경쟁력 확보 방안)에 대한 세부 내용은 작성 전입니다."

## Workflow Integration
Combine this skill seamlessly with `hwp-styled-ui` or `hwp-styled-data-ui`. The "look and feel" comes from the styled UI skills, but the "structural outline" MUST come strictly from the application of this `official-toc-mapper` skill based on `목차.md`.

## Specific Component Mapping Rules

### A. 창업아이템 개요(요약) (Summary Section)

If the user requests to generate the "□ 창업아이템 개요(요약)" section, you MUST structure it exactly as defined in `목차.md`, including the following 5 sub-items:

1. **창업아이템 소개** (핵심기능, 소비자층, 사용처 등)
2. **창업아이템의 차별성** (경쟁제품 대비 차별성, 경쟁력 등)
3. **개발단계** (아이디어 기획, 핵심 기술 확보, 시제품 제작 등)
4. **국내외 목표시장** (목표시장, 판매 전략 등)
5. **이미지** (참고사진 또는 설계도 2개 이상 배치, 제목 포함)

Use a formal summary layout (like a large bordered table or a grid of cards) to present this effectively.

### B. 성과목표 (KPI Table in Section 3)

When generating "3. 성과목표" or "3-1. 성과지표", you MUST include the official KPI Table format natively defined in `목차.md`.

- Ensure the table has columns strictly matching: `구분 | 성과지표 | 일정`.
- The rows must include **Common (공통)** KPIs (아이템 고도화 목표, 매출목표, 고용목표) and **Optional (선택)** KPIs (투자유치 금액, 타지원사업 선정, 인증서, 지재권, 기타).
- If specific target data is missing, use placeholders like `'26. . .` or `( )명` as defined in the official table template.
