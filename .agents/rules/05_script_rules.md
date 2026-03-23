# 05. 스크립트 사용 및 시스템 파일 구조 규칙 (Scripts & System Structure)

## 📁 에이전트 시스템 파일 구조 및 참조 기준 (역할별 파이프라인)

초기 킥오프 파이썬 스크립트(projects 생성 구조)는 사용자의 Git 브랜치 관리 철학에 맞춰 **전면 폐기**되었습니다.  
모든 에이전트는 작업 수행 전, 역할에 맞는 기준 워크플로우와 스킬 가이드 파일을 우선 로드(`view_file`)해야 합니다.

### 1. 기준 워크플로우 (Workflows)
작업의 전체 흐름과 단계별 실행을 위해 정의된 파일들입니다. 
경로: `.agents/workflows/파일명.md`
* **`business-plan-agent.md`**: 사업계획서 전체 작성 파이프라인 (킥오프 질문 → 섹션 작성 → 평가 → UI 생성)
* **`conversation-init.md`**: 새 대화 시작 시 현재 브랜치의 프로젝트 컨텍스트 점검 및 복원 절차
* **`hwp-to-react-ui.md`**: HWP(한글) 문서를 React UI 컴포넌트로 변환하기 위한 구조 파악 및 생성 가이드
* **`write-business-plan.md`**: 세부 사업계획서 순차 작성(R-14~R-19 적용) 워크플로우

### 2. 핵심 스킬 가이드 (Skills)
세부 작업별 구체적인 로직, 스크립트, 구현 규칙을 담은 안내서입니다. 
경로: `.agents/skills/{스킬명}/SKILL.md`

#### 가. 사업계획서 기획 및 평가 (Plan & Evaluate)
* **`business-plan-guide`**: 예비창업패키지 사업계획서 본문의 전체 전략(R-14~R-19 탑재) 등 상세 구조화 가이드
* **`business-plan-evaluator`**: 심사역 관점의 정량적/정성적 타당성 평가 기준
* **`fund-execution-guidelines`**: 부산 예비창업패키지 사업비 집행 규정 한도 및 제약 원칙

#### 나. UI 설계 및 구현 (UI Design)
* **`hwp-styled-ui`**: 공공기관 문서(HWP) 스타일, 모노크롬 특화 React UI 컴포넌트 생성 지침
* **`modern-web-ui`**: 세련되고 동적인 프리미엄 프론트엔드 모던 웹 프레임워크 기반 프롬프팅 지침

#### 다. 데이터 연동 (Extend)
* **`hwp-extractor`**: Python 파싱 스크립트를 활용하여 HWP 확장자의 문서 내용을 Plain Text로 분석 추출하는 가이드
