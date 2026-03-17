# 컴포넌트 커스터마이징 가이드

> 이 가이드는 템플릿 컴포넌트를 새 아이템에 맞게 수정할 때 참조하세요.

## 빠른 시작

```powershell
# 프로젝트에 전체 컴포넌트 한 번에 설치
python .agents/skills/business-plan-components/scripts/install_components.py --project {폴더명}

# 특정 섹션만 설치
python .agents/skills/business-plan-components/scripts/install_components.py --project {폴더명} --sections problem growth

# 기존 컴포넌트 덮어쓰기 (새 버전으로)
python .agents/skills/business-plan-components/scripts/install_components.py --project {폴더명} --overwrite
```

---

## 섹션별 커스터마이징 포인트

### 1. SummaryTemplate.jsx (창업아이템 개요)
수정할 데이터 블록 위치: 파일 상단 `const SUMMARY_DATA = { ... }`

```jsx
const SUMMARY_DATA = {
  itemName: "YOUR_ITEM_NAME",      // ← 아이템명
  oneLiner: "YOUR_ONE_LINER",     // ← 한줄 소개
  features: [                      // ← 핵심 기능 3가지
    "기능 1",
    "기능 2",
    "기능 3",
  ],
  differentiation: "YOUR_DIFF",   // ← 차별성
  devStage: "PoC",                 // ← 개발 단계
  targetMarket: "YOUR_MARKET",    // ← 목표 시장
};
```

### 2. ProblemRecognitionTemplate.jsx (문제인식)
수정할 데이터:
- `MARKET_DATA`: TAM/SAM/SOM 수치 배열 (Recharts용)
- `PAIN_POINTS`: Pain Point 배열 (제목 + 설명 + 출처)
- `MARKET_STATS`: 시장 통계 카드 3개

```jsx
const MARKET_DATA = [
  { year: '2022', value: 150 },   // ← 연도별 시장 규모 (억원)
  { year: '2023', value: 210 },
  { year: '2024', value: 290 },
  { year: '2025', value: 390 },
];

const PAIN_POINTS = [
  {
    title: "문제 1 제목",
    desc: "문제 설명",
    source: "출처(연도)",
  },
  // ...
];
```

### 3. FeasibilityTemplate.jsx (실현가능성)
수정할 데이터:
- `ROADMAP`: 개발 로드맵 (월별 마일스톤)
- `DIFF_TABLE`: 차별성 비교 테이블 (자사 vs 경쟁사)
- `BUDGET_ITEMS`: 사업비 집행 명세

```jsx
const ROADMAP = [
  { period: "2025.01~03", milestone: "PoC 개발", output: "프로토타입 v0.1" },
  { period: "2025.04~06", milestone: "파일럿 테스트", output: "검증 보고서" },
];

const BUDGET_ITEMS = [
  { category: "재료비", item: "서버 비용", unitPrice: 100000, qty: 12, total: 1200000 },
];
```

### 4. PerformanceTemplate.jsx (성과목표)
수정할 데이터:
- `KPI_COMMON`: 공통 KPI (아이템 고도화, 매출, 고용)
- `KPI_OPTIONAL`: 선택 KPI (투자유치, 인증, 특허 등)

```jsx
const KPI_COMMON = [
  { indicator: "MVP 완성도", target: "핵심기능 3종 구현", deadline: "'25.12" },
  { indicator: "시범 고객", target: "5개사 파일럿", deadline: "'25.09" },
];
```

### 5. GrowthTemplate.jsx (성장전략)
수정할 데이터:
- `BM_STREAMS`: 수익원 배열 (이름 + 설명 + 단가 + 예상 매출)
- `MARKET_SIZE`: TAM/SAM/SOM 데이터
- `MARKETING_STEPS`: 시장 진입 3단계

### 6. TeamTemplate.jsx (팀 구성)
수정할 데이터:
- `LEADER`: 대표자 정보 객체
- `MEMBERS`: 팀원 배열
- `HIRING_PLANS`: 채용 계획 배열

```jsx
const LEADER = {
  name: "홍길동",
  role: "대표",
  education: "XX대학교 XX학과",
  expertise: ["전문분야1", "전문분야2"],
  achievements: ["성과1", "성과2"],
  relevance: "아이템과의 연관성 서술",
};
```

---

## 공통 수정 사항 (모든 컴포넌트)

### 출처 업데이트
```jsx
// 모든 * 출처: 태그를 실제 출처로 교체
// 예:
<span style={{ fontSize: '0.75rem', color: '#666' }}>
  * 출처: IQVIA(2024), 글로벌 AI 신약개발 시장 리포트
</span>
```

### 차트 데이터 교체
- Recharts 컴포넌트의 `data` prop을 실제 시장 데이터로 교체
- 흑백 팔레트 유지: `fill="#333"`, `stroke="#666"`
- y축 unit은 사업 특성에 맞게 변경 (억원, 조원, $M 등)
