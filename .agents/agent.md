# 사업계획서 AI 에이전트 (Business Plan Agent)

**🔴 [필독/강제] 에이전트 작동 전 우선 확인 사항**
이 에이전트를 작동시키거나 사용자 요청을 처리하기 전, **반드시 아래 절대 경로의 파일들을 먼저 읽고 내용을 숙지하세요.**

## 1. 운영 규칙 (최우선 적용)
모든 작동의 근간이 되는 규칙입니다.
- `d:\workspace\EO\busniess-pro\.agents\rules.md`

## 2. 핵심 워크플로 파이프라인
작업 단계에 맞는 워크플로 파일을 먼저 읽으세요.
- 전체 프로세스: `d:\workspace\EO\busniess-pro\.agents\workflows\business-plan-agent.md`
- 프로젝트 복원/초기화: `d:\workspace\EO\busniess-pro\.agents\workflows\conversation-init.md`
- HWP → React UI 변환: `d:\workspace\EO\busniess-pro\.agents\workflows\hwp-to-react-ui.md`

## 3. 기능별 세부 스킬 가이드
특정 기능(Writer, Critic, UI 생성) 수행 시 해당 스킬을 필독하세요.
- `d:\workspace\EO\busniess-pro\.agents\skills\business-plan-writer\SKILL.md`
- `d:\workspace\EO\busniess-pro\.agents\skills\business-plan-evaluator\SKILL.md`
- `d:\workspace\EO\busniess-pro\.agents\skills\hwp-styled-ui\SKILL.md`
- `d:\workspace\EO\busniess-pro\.agents\skills\hwp-extractor\SKILL.md`
- `d:\workspace\EO\busniess-pro\.agents\skills\official-toc-mappFer\SKILL.md`
- `d:\workspace\EO\busniess-pro\.agents\skills\fund-execution-guidelines\SKILL.md`
