---
description: 예비창업패키지 사업계획서 전체 작성 에이전트 (루트 기반 관리 → 킥오프 → 초안 작성 → 평가 → UI 생성)
---

# Business Plan Agent Workflow

이 워크플로는 별도의 하위 폴더 분리 없이 **현재 Git 브랜치의 워크스페이스 루트**를 기준으로 예비창업패키지 사업계획서 작업을 전개하는 종합 에이전트 파이프라인입니다.  

---

## ⚡ 시작 멘트

워크플로가 시작되면 **반드시 이 멘트부터** 사용자에게 전달:

```
🚀 현재 브랜치에서 사업계획서 생성을 시작합니다.
먼저 프로젝트 설정 현황을 점검하겠습니다.
```

이후 **Step-00**으로 진입.

---

## Step-00: 프로젝트 킥오프 (루트 상태 점검)

**목적**: 프로젝트 정보가 있는지 `project.json` (또는 `docs/context/context-card.md`)으로 확인.

**[A] 기존 데이터가 있는 경우**
`project.json`을 기준으로 진행 현황 브리핑 및 사용자에게 "어디부터 작업하시겠습니까?" 묻고 **Step-02** 로 직행.

**[B] 신규 프로젝트 (데이터가 없는 경우)**
루트 폴더 환경이 비어있다면, 사업 킥오프 기본 정보 수집:
```
현재 브랜치에 초기화된 사업계획서 데이터가 없습니다. 기본 정보를 입력해주세요:

1. 아이템 공식 명칭
2. 서비스 1줄 요약
3. 핵심 적용 기술 
4. 메인 타겟 고객
5. 진행 단계 (아직 아이디어 / 현재 MVP 존재 등)
```
답변 수집 후, `project.json` 과 `docs/context/context-card.md` 파일을 생성하여 기본 틀을 잡고 **Step-01**로 넘어감.

---

## Step-01: 컨텍스트 로드

**목적**: 최소 파일만 선별 로드 (R-12 준수)

로드 파일 순서:
1. `project.json` → 완료된 섹션 현황 파악
2. `docs/context/context-card.md` → 핵심 맥락 로드
3. `docs/references/toc.md` (있을 경우에만)
4. 현재 작성해야 할 타겟 섹션 초안 (예: `docs/sections/01-problem.md`)

---

## Step-02: 시장 데이터 웹 검색

**목적**: 시장 규모/경쟁사 등 근거 수집하여 문서화

검색 키워드 생성 및 웹 브라우징(search_web 등 활용):
- 시장 규모 및 성장률 (TAM/SAM/SOM 수치 확보)
- 핵심 경쟁사 분석
결과를 정리하여 `docs/context/market-data.md` 에 기록.

---

## Step-03: 섹션 초안 작성 (Writer Mode)

**목적**: `write-business-plan.md` 워크플로우를 서브 실행하여 섹션별 문서를 순차 작성.

세부 작성 요령은 `business-plan-guide` 스킬(R-14~R-19 규정 내장)을 전적으로 엄수합니다.
파일 저장 위치(루트 기준):
- `docs/sections/00-summary.md`
- `docs/sections/01-problem.md`
- `docs/sections/02-feasibility.md`
- ...

**기본 rules.md 적용**:
- R-02: 모든 수치에 출처 태그
- R-06: 개조식 문체 (비즈니스 은어 및 과도한 영단어 자제)
각 섹션이 완료될 때마다 반드시 `project.json` 에 완료 태그를 업데이트.

---

## Step-04: Critic 검토 (Critic Mode)

**목적**: 객관적 검증. `business-plan-evaluator` 스킬 활용.
기술 전문가 / 투자 심사역 / 정부 심사위원 세 페르소나 입장에서 100점 만점 평가 및 핵심 액션 아이템 3가지 도출.

---

## Step-05: UI 생성 (UI-Generator Mode)

**목적**: `hwp-styled-ui` 스킬 활용하여 HWP 특화 React 컴포넌트 변환.

세부 UI 관련 R-09~R-11 규칙(모노크롬, 둥근테두리 제거, 출처 태그 등)을 준수.
- 생성/저장 경로: `business-plan-ui/src/features/{섹션명}/` (또는 ui 폴더)
- 목차가 주어졌다면 `official-toc-mapper` 스킬로 누락 없는 1:1 매핑 확인.

테스트:
```bash
cd business-plan-ui && npm run dev
```

---

## Step-06: 통합 검토 & 완료

- (R-19 체크리스트 적용) 문제-솔루션 간 1:1 무결성, 추측성 데이터 배제 등 점검.
- 최종 `project.json` 의 status 를 `"완료"` 로 업데이트하고 종료.
