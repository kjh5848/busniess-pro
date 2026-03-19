import React from 'react';
import BoxPlusLayout from './BoxPlusLayout';
import ArrowFlowLayout from './ArrowFlowLayout';
import YearRoadmap from './YearRoadmap';
import ComparisonTable from './ComparisonTable';

/**
 * UIComponentsDemo
 *
 * ui/ 폴더의 공통 컴포넌트 4종을 한눈에 확인하는 데모 갤러리입니다.
 * App.jsx 등에 임시로 삽입하여 Preview/Review 용도로 활용하세요.
 * 실제 사용 시에는 각 컴포넌트를 개별 import 하여 사용하세요.
 */

/* ─── 샘플 데이터 ─── */

const bmItems = [
  {
    title: 'SaaS 구독 (Main)',
    main: '월 요금',
    sub: '초기 스타트업/연구소 타겟',
  },
  {
    title: 'On-Demand 연산',
    main: 'GPU 시간당 과금',
    sub: '대규모 시뮬레이션 수행 시',
  },
  {
    title: 'Enterprise API',
    main: '연간 라이선스 계약',
    sub: '보안/커스텀이 필요한 대기업',
  },
];

const gtmSteps = [
  { label: '초기 레퍼런스 확보', sub: '(대학/연구소 무상 배포)' },
  { label: '국내 B2B 실증',      sub: '(바이오 벤처 유료화)' },
  { label: '아시아/중견 확장',    sub: '(SaaS 구독 모델 확산)' },
  { label: '글로벌 스케일업',     sub: '(Big Pharma 파트너십)' },
];

const roadmapYears = [
  {
    year: '1년차 (도입기)',
    subtitle: 'MVP 검증 및 초기 진입',
    sections: [
      {
        title: '기술 고도화',
        bullets: [
          'AI 전하 예측 엔진 v1',
          '웹 시각화 에디터 구축',
        ],
      },
      {
        title: '사업화',
        bullets: [
          '국내 대학/연구소 베타 오픈',
          '초기 레퍼런스(논문 등) 확보',
        ],
      },
    ],
    footers: [
      {
        title: '(비즈니스 모델)',
        items: ['Credit 기반 과금(GPU)', 'SaaS Freemium (무료+유료)'],
      },
      {
        title: '(지식재산권)',
        items: ['핵심 특허 1건 출원'],
      },
    ],
  },
  {
    year: '2년차 (성장기)',
    subtitle: '자동화 및 SaaS 확산',
    sections: [
      {
        title: '기술 고도화',
        bullets: [
          'Auto-MD 프로토콜 완성',
          '클라우드 병렬 연산 최적화',
        ],
      },
      {
        title: '사업화',
        bullets: [
          '국내 바이오벤처 구독 전환',
          '아시아 시장(일본/싱가포르) 진출',
        ],
      },
    ],
    footers: [
      {
        title: '(비즈니스 모델)',
        items: ['SaaS 구독 패키지(Basic/Pro)', '대규모 연산 On-Demand 과금'],
      },
      {
        title: '(지식재산권)',
        items: ['자동화 알고리즘 PCT 출원', '상표권 확보'],
      },
    ],
  },
  {
    year: '3년차 (도약기)',
    subtitle: '글로벌 플랫폼 도약',
    sections: [
      {
        title: '기술 고도화',
        bullets: [
          '거대 분자(항체) 지원 확장',
          '글로벌 표준 데이터셋 호환',
        ],
      },
      {
        title: '사업화',
        bullets: [
          '글로벌 제약사 API 공급',
          '신약 공동개발 파이프라인 확보',
        ],
      },
    ],
    footers: [
      {
        title: '(비즈니스 모델)',
        items: ['Enterprise 라이선싱', 'API 연동 수익 (B2B)'],
      },
      {
        title: '(지식재산권)',
        items: ['글로벌 IP 포트폴리오 구축', '하이브리드 모델링 기술 특허'],
      },
    ],
  },
];

const compHeaders = ['구분', '기존 방식 (CADD SW)', '단순 AI 모델 (Black-box)', '동사 (Hybrid Engine)'];
const compRows = [
  {
    label: '핵심가치',
    cells: ['정밀도 중심', '속도 중심', '정밀도 + 속도 + 편의성'],
  },
  {
    label: '사용성',
    cells: ['명령어(CLI) 기반 복잡함', '블랙박스로 해석 난해', 'Web GUI (No-Code)'],
  },
  {
    label: '기술 특징',
    cells: ['수동 파라미터 튜닝 필요', '물리 법칙 무시 가능성', 'AI 초기값 + 물리 검증<br/><span style="font-size:0.75rem;color:#2c3e8c">(Physics-Informed AI)</span>'],
  },
  {
    label: '비용/시간',
    cells: ['고비용 / 수일 소요', '저비용 / 수초 소요', '합리적 비용 / 수시간 내<br/><span style="font-size:0.75rem;color:#2c3e8c">(기존 대비 50% 이상 절감)</span>'],
  },
];

/* ─── 데모 컴포넌트 ─── */

const UIComponentsDemo = () => {
  const sectionStyle = {
    marginBottom: '2rem',
    padding: '1.2rem',
    border: '1px dashed #aaa',
    borderRadius: '4px',
    backgroundColor: '#fafafa',
  };

  const labelStyle = {
    fontSize: '0.78rem',
    color: '#666',
    marginBottom: '0.5rem',
    fontFamily: 'monospace',
    letterSpacing: '0.03em',
  };

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem', fontFamily: 'sans-serif' }}>
      <h2 style={{ borderBottom: '2px solid #333', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
        🧩 UI 공통 컴포넌트 갤러리
      </h2>

      {/* 1. BoxPlusLayout */}
      <div style={sectionStyle}>
        <div style={labelStyle}>{'<BoxPlusLayout /> — 박스 + 연산자 레이아웃'}</div>
        <BoxPlusLayout items={bmItems} />
      </div>

      {/* 2. ArrowFlowLayout */}
      <div style={sectionStyle}>
        <div style={labelStyle}>{'<ArrowFlowLayout /> — 화살표 단계 흐름'}</div>
        <ArrowFlowLayout steps={gtmSteps} />
      </div>

      {/* 3. YearRoadmap */}
      <div style={sectionStyle}>
        <div style={labelStyle}>{'<YearRoadmap /> — 연도별 로드맵'}</div>
        <YearRoadmap years={roadmapYears} />
      </div>

      {/* 4. ComparisonTable */}
      <div style={sectionStyle}>
        <div style={labelStyle}>{'<ComparisonTable highlightCol={3} /> — 강조 열 비교 테이블'}</div>
        <ComparisonTable
          headers={compHeaders}
          rows={compRows}
          highlightCol={3}
        />
      </div>
    </div>
  );
};

export default UIComponentsDemo;
