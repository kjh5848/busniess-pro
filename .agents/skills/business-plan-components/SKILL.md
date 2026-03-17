---
name: business-plan-components
description: 예비창업패키지 사업계획서용 HWP 스타일 React 컴포넌트 6종 (문제인식/실현가능성/성과목표/성장전략/팀구성/요약) 템플릿 스킬. 어떤 사업계획서 프로젝트에도 바로 복사·적용 가능한 최종 검증 컴포넌트 제공. 다음 상황에서 사용: (1) 새 프로젝트에 UI 컴포넌트 초기 셋업 요청, (2) "컴포넌트 넣어줘 / UI 만들어줘" 등 React 컴포넌트 생성 요청, (3) 기존 컴포넌트를 다른 아이템에 맞게 커스터마이징 요청.
---

# Business Plan Components Skill

이 프로젝트에서 수십 번의 반복 검증을 거친 **최종 HWP 스타일 React 컴포넌트 6종**을 어느 사업계획서 프로젝트에나 재사용할 수 있도록 패키지화한 스킬입니다.

## 제공 컴포넌트 (assets/templates/)

| 파일명 | 섹션 | 원본 버전 | 주요 특징 |
|--------|------|---------|---------|
| `SummaryTemplate.jsx` | □ 창업아이템 개요(요약) | SummaryV8 | 5항목 표 형식, 개발단계 표시 |
| `ProblemRecognitionTemplate.jsx` | 1. 문제인식 | ProblemRecognitionV9 | 시장현황 + Recharts 차트, Pain Point 매핑 |
| `FeasibilityTemplate.jsx` | 2. 실현가능성 | FeasibilityV9 | 개발로드맵, 차별성 테이블, 사업비 명세 |
| `PerformanceTemplate.jsx` | 3. 성과목표 | PerformanceV6 | 공식 KPI 테이블, 공통/선택 구분 |
| `GrowthTemplate.jsx` | 4. 성장전략 | GrowthV9 | BM + TAM/SAM/SOM 차트 + 예산표 |
| `TeamTemplate.jsx` | 5. 팀 구성 | TeamV3 | 산문체, 채용계획 포함 |
| `hwp-theme.css` | 공통 스타일 | App.css | HWP 흑백 모노크롬 테마 |

---

## 🚀 새 프로젝트에 적용하기

### 방법 1: 설치 스크립트 사용 (권장)

```powershell
python .agents/skills/business-plan-components/scripts/install_components.py --project {프로젝트폴더명}
```

이 스크립트는:
1. `projects/{폴더명}/ui/` 에 6개 컴포넌트 복사
2. 컴포넌트 내 placeholder(`YOUR_ITEM_NAME` 등)를 프로젝트 `project.json` 값으로 자동 치환
3. `App.jsx` import 구문 자동 업데이트

### 방법 2: 수동 복사 후 커스터마이징

```powershell
Copy-Item .agents/skills/business-plan-components/assets/templates/*.jsx projects/{폴더명}/ui/
Copy-Item .agents/skills/business-plan-components/assets/templates/hwp-theme.css projects/{폴더명}/ui/
```

커스터마이징 포인트는 `references/customization-guide.md` 참조.

---

## 컴포넌트 설계 원칙 (변경 금지)

1. **흑백 모노크롬**: 컬러 사용 절대 금지 (`#333`, `#666`, `#e5e5e5`만 허용)
2. **날카로운 모서리**: `border-radius: 0` 유지
3. **출처 필수**: 모든 수치 옆 `* 출처: XXX(YYYY)` 태그
4. **Recharts 차트**: 흑백 팔레트 + 상승 트렌드 표현
5. **개조식 텍스트**: `word-break: keep-all`, `line-height: 1.6`

---

## 커스터마이징 시 반드시 읽을 파일

- **`references/customization-guide.md`**: 섹션별 수정 포인트 상세 가이드
- **`references/data-schema.md`**: 각 컴포넌트에 넣어야 할 데이터 구조
