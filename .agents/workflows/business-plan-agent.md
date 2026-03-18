---
description: 예비창업패키지 사업계획서 전체 작성 에이전트 (프로젝트 생성 → 킥오프 → 섹션 작성 → 평가 → UI 생성)
---

# Business Plan Agent Workflow

이 워크플로는 예비창업패키지 사업계획서를 **프로젝트 단위로 관리**하면서 처음부터 끝까지 작성하는 종합 에이전트 파이프라인입니다.  
`rules.md`의 운영 규칙을 항상 준수하며, `business-plan-writer` 스킬을 핵심으로 여러 전문 스킬과 연계합니다.

---

## ⚡ 시작 멘트

워크플로가 시작되면 **반드시 이 멘트부터** 사용자에게 전달:

```
🚀 사업계획서 생성을 시작합니다.

먼저 기존 프로젝트를 확인하겠습니다...
```

이후 바로 **Step-00**으로 진입.

---

## Step-00: 프로젝트 선택 / 생성

**목적**: 모든 작업을 프로젝트 폴더 안에서 관리 (rules.md R-01)

// turbo
```powershell
python d:\workspace\strayCat\.agents\skills\business-plan-writer\scripts\init_project.py --list
```

### 분기 처리

**[A] 기존 프로젝트가 있는 경우**
```
📋 기존 사업계획서 프로젝트 목록입니다:

{--list 출력 결과}

기존 프로젝트를 이어서 작성하시겠습니까?
아니면 새 프로젝트를 생성하시겠습니까?

  1. 기존 프로젝트 선택 (번호 입력)
  2. 새 프로젝트 생성
```

사용자가 번호 선택 → `projects/{폴더명}/context/context-card.md` 로드 → Step-02로 점프  
사용자가 "2" 선택 → Step-00-B 진행

**[B] 신규 프로젝트 생성**
```
새 사업계획서 프로젝트를 생성합니다.
아래 정보를 입력해주세요.
```

사용자에게 **7가지 질문을 한 번에** 전달:

```
1. 아이템명 — 창업 아이템의 공식 명칭
2. 한줄 소개 — 무엇을 하는 서비스인지 1문장
3. 핵심 기술 — 주요 기술 스택 또는 방법론
4. 타겟 고객 — 1차 고객군 (가능하면 구체적으로)
5. 산업 분야 — 바이오 / AI / FinTech / SaaS 등
6. 개발 단계 — 아이디어 / PoC / 프로토타입 / MVP 중 선택
7. 지원사업명 — 예: 2025 예비창업패키지 (부산)
```

답변 수집 후 스크립트 실행:

```powershell
python d:\workspace\strayCat\.agents\skills\business-plan-writer\scripts\init_project.py
```

생성된 프로젝트 경로 확인 후 **Step-01**로 진행.

---

## Step-01: 컨텍스트 로드

**목적**: 최소 파일만 선별 로드 (rules.md R-12)

로드 파일 목록 (순서 중요):

1. `projects/{프로젝트}/project.json` → 진행 상태 & 완료 섹션 확인
2. `projects/{프로젝트}/context/context-card.md` → 아이템 컨텍스트 복원
3. `projects/{프로젝트}/references/toc.md` (있는 경우) → 공식 목차 확인
   - 없으면 루트의 `목차.md` 확인
4. 작성할 섹션의 기존 초안:
   - `projects/{프로젝트}/sections/{해당섹션}.md`

> ⚠️ 다른 섹션 파일 및 구버전 컴포넌트 동시 로드 금지 (rules.md R-12)

완료 섹션 현황 표시:
```
📊 {아이템명} 진행 현황

✅ 완료: {완료된 섹션 목록}
🔄 진행중: {현재 섹션}
⬜ 미시작: {남은 섹션 목록}

다음 작업 섹션: {첫 번째 미완성 섹션}
```

---

## Step-02: 시장 데이터 웹 검색

**목적**: 최신 시장 현황·경쟁사 데이터 확보 (증거 기반 작성 지원)

검색 순서:
```
검색 1: "{산업 분야} 시장 규모 성장률 2024 2025 통계"
검색 2: "{아이템명 또는 핵심 기술} 경쟁사 현황 한국"
검색 3: "{산업 분야} 정부 정책 지원 2025 2026"
```

검색 결과 → 수치와 출처만 추출 → `projects/{프로젝트}/context/market-data.md`에 저장:

```markdown
# 시장 조사 데이터
수집일: YYYY-MM-DD

## 시장 규모
- 글로벌 TAM: $X억 (출처: XXX, 연도)
- 국내 SAM: X억원 (출처: XXX, 연도)
- CAGR: X% (출처: XXX, 연도)

## 경쟁사
- A사: 특징, 한계점
- B사: 특징, 한계점

## 관련 정책
- XXX: 내용 요약
```

---

## Step-03: 섹션 초안 작성 (Writer Mode)

**목적**: `business-plan-writer` 스킬 + 컨텍스트로 섹션 초안 생성

작성 순서 (권장):
| 순서 | 섹션 | 파일명 |
|-----|------|-------|
| 1 | □ 창업아이템 개요(요약) | `sections/00-summary.md` |
| 2 | 1. 문제인식 | `sections/01-problem.md` |
| 3 | 2. 실현가능성 | `sections/02-feasibility.md` |
| 4 | 3. 성과목표 | `sections/03-performance.md` |
| 5 | 4. 성장전략 | `sections/04-growth.md` |
| 6 | 5. 팀 구성 | `sections/05-team.md` |

**작성 시 rules.md 의무 적용**:
- R-02: 모든 수치에 출처 태그
- R-06: 개조식 문체 (영어 비즈니스 용어 자제)
- R-07: 1개 섹션 완성 → 사용자 검토 → 다음 섹션

각 섹션 완성 후 → 파일에 저장 → `project.json` 업데이트:

```powershell
# 섹션 완료 상태 업데이트 예시 (에이전트가 직접 project.json 수정)
# completed_sections 배열에 섹션명 추가
# updated_at 갱신
```

---

## Step-04: Critic 검토 (Critic Mode)

**목적**: 심사위원 관점에서 섹션 품질 점검

`business-plan-evaluator` 스킬 + `references/evaluation-criteria.md` 연계:

3개 페르소나 평가:
- 기술 전문가 (기술 실현가능성 중점)
- 투자 심사역 (ROI, 확장성 중점)
- 정부 공무원 (공공성, 규정 준수 중점)

출력 형식:
```markdown
## 🏆 [{섹션명}] 심사 평가 결과

| 페르소나 | 점수 | 핵심 피드백 |
|---------|-----|-----------|
| 기술 전문가 | X/30 | ... |
| 투자 심사역 | X/30 | ... |
| 정부 공무원 | X/20 | ... |
| **합계** | **X/80** | |

### ⚡ 즉시 개선 Action Item (Top 3)
1. ...
2. ...
3. ...
```

---

## Step-05: UI 생성 (UI-Generator Mode)

**목적**: 텍스트 초안을 HWP 스타일 React 컴포넌트로 변환

`hwp-styled-ui` 스킬 (Option B, V3) + `official-toc-mapper` 스킬 연계.

**컴포넌트 저장 위치 (rules.md R-05)**:
```
projects/{프로젝트명}/ui/{섹션식별자}V1.jsx
```

**명명 규칙 (rules.md R-09)**:
- `SummaryV1.jsx`, `ProblemRecognitionV1.jsx`, `FeasibilityV1.jsx`
- `PerformanceV1.jsx`, `GrowthV1.jsx`, `TeamV1.jsx`
- 수정 시 버전 번호 증가: V1 → V2 → V3 ...

**UI 생성 체크리스트 (rules.md R-09)**:
- [ ] 흑백 모노크롬 (컬러 0개)
- [ ] `border-radius: 0` 적용
- [ ] Recharts 포함 시 흑백 팔레트
- [ ] 모든 수치에 `* 출처:` 태그
- [ ] `official-toc-mapper`로 목차 정합성 확인

생성 후 `projects/{프로젝트}/ui/App.jsx`의 import 구문 업데이트.

// turbo
```powershell
cd d:\workspace\strayCat\business-plan-ui && npm run dev
```

---

## Step-06: 통합 검토 & 프로젝트 완료

**목적**: 전체 일관성 확인 + 프로젝트 상태 `완료`로 갱신

통합 체크리스트:
- [ ] 모든 섹션의 시장 수치가 `market-data.md`의 동일 데이터 사용
- [ ] 문제인식 Pain Point ↔ 실현가능성 솔루션 논리 연결 확인
- [ ] KPI(성과목표) ↔ 성장전략 매출 추정 일치 확인
- [ ] 팀 구성이 기술 개발 역량 보유 확인
- [ ] 전체 분량 규정 페이지 수 이내 확인
- [ ] `ui/App.jsx` import 전체 활성화 확인

완료 후 `project.json` status → `"완료"` 업데이트.

---

## 스킬·파일 연계 맵

```
business-plan-agent (이 워크플로)
│
├── [Step-00] init_project.py          → projects/{프로젝트}/ 생성
├── [Step-01] project.json             → 진행 상태 복원
│            context-card.md          → 아이템 컨텍스트
│
├── [Step-02] 웹 검색                   → market-data.md 저장
│
├── [Step-03] business-plan-writer     → sections/*.md 저장
│            fund-execution-guidelines → 사업비 섹션
│            hwp-extractor             → references/에서 HWP 분석
│
├── [Step-04] business-plan-evaluator  → 점수 & 개선 제안
│
└── [Step-05] hwp-styled-ui            → ui/*.jsx 저장
             official-toc-mapper      → 목차 정합성
```
