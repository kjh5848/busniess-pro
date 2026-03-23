# Business Plan UI Design Spec
**Date:** 2026-03-23
**Topic:** HWP-styled Business Plan React Component (V3 Hybrid Mode)

## 1. Overview
The goal is to render the "폐굴껍데기 기반 캠핑 착화재" business plan as a single-page React UI component. Following the user's direction, it adopts the `hwp-styled-ui` V3 Data-Driven guidelines. It mixes "Public/Gov ESG Storytelling" (Level 3) with "VC/Investor Financial Data Validation" (Level 2).

## 2. Visual & Aesthetic Rules
- **Monochrome Constraint**: Only black (`#333`), white, and shades of gray (`#666`, `#e5e5e5`). (Recharts may use muted dark grey variants).
- **Strict Geometry**: No `border-radius`, no `box-shadow`. Uses sharp 1px/2px solid or dotted borders to mimic official HWP table (`글상자`) interfaces.
- **Typography & Tonality**: 
  - Uses clean Sans-serif (Main/Sub-headers) and Serif (Body).
  - Enforces `word-break: keep-all;` and `line-height: 1.6;`.
  - Content must be heavily bulleted (개조식) and localized into Korean business terminology (e.g., BM -> 수익 구조).

## 3. Data Structure & Component Layout
1. **Header Block ([개요/요약])**
   - Title: 폐굴껍데기의 다공성 구조를 활용해 유해 가스와 악취를 잡은 친환경 안심 캠핑 착화재
   - A pronounced left-bordered quote emphasizing the overarching ESG mission and immediate profitability.

2. **Section 1: 문제인식 및 해결방안 (ESG Story / L3 Persona)**
   - Left Block (Problem): 30만 톤 굴껍데기 해안 방치 리스크 & 시중 캠핑 연료 1군 발암물질/메탄올 검출 안전 문제 (lucide-react Alert/Warning Icons).
   - Right Block (Solution): 20% 황금 배합비 구조를 통해 "왜 구운 굴껍데기가 천연 매연 스펀지가 되는가" 강조.

3. **Section 2: 실현 가능성 및 비즈니스 방어력 (Investor Data / L2 Persona)**
   - Recharts upward-trending chart (`BarChart` or `ComposedChart`) to visually demonstrate the dramatic unit-cost drop due to regional waste-processing subsidy (폐기물 처리 보조금 수령).
   - Dual UI mockups/placeholders represented as clean, sharp rectangles showing early layout ideas for the D2C Commerce App interface.

4. **Section 3: 실행 계획 및 시장 진입 (Tables)**
   - B2B, B2C channel strategies visualized inside a robust HWP-style table with quantitative metrics (Target Sales, Marketing Budget, ROI expectations).

## 4. Dependencies
- React (Next.js default structure)
- `lucide-react` (Strict monochrome usage)
- `recharts` (Grey-scaled upward trending visualization)
- Vanilla CSS (`index.css` or equivalent variables) aligned with `--hwp-black`/`--hwp-gray` standards.
