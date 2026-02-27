import React from 'react';

import ComparisonTable from './ui/ComparisonTable';
import uiImage1 from '../assets/step1_alphafold.png';
import uiImage2 from '../assets/step2_diffdock.png';
import uiImage3 from '../assets/step3_rfdiffusion.png';
import dashboardUI from '../assets/메인 대시보드 UI.png';
import onpremiseUI from '../assets/온프레미스_설치패키지.png';
import techDocsIP from '../assets/기술문서_IP.png';

const ACCENT = '#dfe6f7';

/* ── 경쟁 비교 테이블 데이터 ── */
const compHeaders = [
  '구분',
  '기존 방식 (해외 CADD SW)',
  '단순 AI 클라우드 (결과만 제공)',
  '동사 솔루션 (정밀+편리+보안)',
];
const compRows = [
  { label: '핵심 가치', cells: ['정밀도 중심', '속도 중심', '정밀도 + 속도 + 편의성'] },
  { label: '사용성', cells: ['명령어 입력 방식으로 복잡함', '결과 해석이 어려움', '마우스 클릭만으로 완전 자동화'] },
  {
    label: '보안',
    cells: [
      '사내 설치형 (보안 양호)',
      '외부 클라우드 업로드 필수<br/><span style="font-size:0.75rem;color:#c0392b">→ 데이터 유출 위험</span>',
      '사내 서버 설치형<br/><span style="font-size:0.75rem;color:#2c3e8c">→ 외부 유출 제로 보장</span>',
    ],
  },
  {
    label: '비용/시간',
    cells: [
      '고비용 라이선스 / 수일',
      '클라우드 종량제 / 수초',
      '합리적 (기존 대비 1/10)<br/><span style="font-size:0.75rem;color:#2c3e8c">사내 PC 유휴 자원 활용</span>',
    ],
  },
];

/* ── 3대 핵심 기술 카드 데이터 ── */
const techCards = [
  {
    num: '01',
    keyword: '오픈소스 통합 자동화',
    title: 'GitHub 최신 AI 신약 도구를 통합 UI에서 원클릭 실행',
    points: [
      'AlphaFold·DiffDock·RFdiffusion 등 GitHub 공개 오픈소스를 자동 패키징하여 제공',
      '연구자가 원하는 모듈만 골라 조합 — 약물·펩타이드·단백질 디자인 등 취향에 맞게 구성',
      '코딩 없이 마우스 클릭만으로 사용 가능한 No-Code 통합 대시보드 제공',
    ],
  },
  {
    num: '02',
    keyword: '사내 설치형',
    title: '외부 인터넷 없이 사내 서버에서 독립 운영',
    points: [
      '인터넷이 차단된 사내 보안 환경에서도 완전히 독립적으로 작동',
      '기밀 신약 데이터가 외부 서버로 유출될 위험을 원천 차단',
      '보안 규정이 엄격한 제약사도 도입 가능',
    ],
  },
  {
    num: '03',
    keyword: '사내 PC 활용',
    title: '비용 절감 — 사내 PC를 모아 고성능 컴퓨터처럼 활용',
    points: [
      '수십억 원 대의 슈퍼컴퓨터를 따로 구매할 필요가 없음',
      '사내에 있는 일반 PC 수백 대의 여유 성능을 묶어 고속 연산 수행',
      '자체 개발한 자원 분배 기능으로 효율 극대화',
    ],
  },
];

/* ── 2-2 고객 요구사항 대응 방안 (3축 통합 테이블) ── */
const improvementTable = [
  {
    category: '기능·성능',
    painPoints: [
      '여러 AI 도구를 개별 설치·연결하는 데 며칠 소요',
      '사내 보안 규정상 외부 클라우드 업로드 불가',
    ],
    gaps: [
      'AI 도구 간 입출력 불일치 → 수동 전환 필수, 연구 시간 낭비',
      '대부분 클라우드 SaaS 방식 → 망분리 환경 사용 불가',
    ],
    actions: [
      'AI 엔진 간 데이터 자동 전달 통합 파이프라인(Pipeline SDK) 개발',
      'Docker 기반 온프레미스 완결형 설치 패키지 개발 (폐쇄망 독립 구동)',
    ],
  },
  {
    category: '디자인',
    painPoints: [
      'CLI(코딩) 모르면 AI 도구 사용 자체 불가',
      '결과 확인에 별도 시각화 SW 재설치 필요',
    ],
    gaps: [
      '시제품이 CLI 기반 → 비전공 연구자 접근 불가',
      '3D 구조·차트 확인에 외부 도구(PyMol 등) 별도 필요',
    ],
    actions: [
      'No-Code Web GUI 대시보드 개발 (마우스 클릭만으로 분석 수행)',
      '대시보드 내 3D 분자 뷰어 + 결합 친화도 차트 내장',
    ],
  },
  {
    category: '사업화',
    painPoints: [
      '효과 미검증 상태에서 도입 비용 선투자 부담',
      'GPU 종량 과금 → 비용 예측 불가, 예산 편성 곤란',
    ],
    gaps: [
      '실 데이터 기반 시범(PoC) 검증 프로그램 없음',
      '과금 모델 미정립(라이선스만 검토) → 월별 예산 배정 부적합',
    ],
    actions: [
      '부산 바이오 기업 대상 무상 PoC 파일럿 운영',
      'SaaS 월 정액 구독 + 온프레미스 연간 라이선스 이중 모델',
    ],
  },
];

/* ── 2-3 VS 대결 비교 데이터 ── */
const vsData = [
  {
    icon: '🔒',
    axis: '보안',
    compName: '해외 SaaS AI',
    compPain: '외부 클라우드에 신약 데이터 강제 업로드',
    compRisk: '데이터 유출 위험 → 제약사 도입 불가',
    ourName: '사내 서버 독립 설치형',
    ourStrength: '망분리 폐쇄망에서 완전 독립 구동',
    ourResult: '외부 유출 제로(0) 보장',
  },
  {
    icon: '🖱️',
    axis: '편의성',
    compName: '기존 CADD SW',
    compPain: 'CLI(명령어) 기반 — 전문 IT 인력 필수',
    compRisk: '비전문 연구자 사용 불가',
    ourName: 'No-Code 웹 대시보드',
    ourStrength: '마우스 클릭만으로 즉시 실행',
    ourResult: '비전문가도 즉시 사용 가능',
  },
  {
    icon: '💰',
    axis: '가격',
    compName: '퍼블릭 클라우드 AI',
    compPain: 'GPU 사용량 비례 종량 과금',
    compRisk: '중소기업 연간 수천만 원 부담',
    ourName: '사내 PC 그리드 연산',
    ourStrength: '사내 유휴 PC를 묶어 고성능 연산',
    ourResult: '도입 비용 기존 대비 1/10 이하',
  },
];

/* ── 2-3 자사 보유역량 기반 경쟁력 확보 방안 데이터 ── */
const capabilityData = [
  {
    capability: '대표자 MLOps·DevOps 실무 경력',
    plan: '온프레미스 패키징·자동 설치 핵심 엔진(Auto-Setup Engine) 직접 개발',
    effect: '외주 의존 없이 핵심 기술 내재화 — 유지보수·업데이트 자체 대응 가능',
  },
  {
    capability: '오픈소스 AI 엔진 래핑 기술 확보 완료',
    plan: 'AlphaFold·DiffDock·RFdiffusion 간 14종 분자 파일 호환 Pipeline SDK 개발',
    effect: '후발 주자 대비 6개월 이상 개발 선점 우위 확보',
  },
  {
    capability: 'Docker/컨테이너 기반 배포 역량',
    plan: '망분리 폐쇄망 원클릭 설치 패키지 + 사내 PC Grid 분산연산 모듈 구현',
    effect: '클라우드 경쟁사가 진입 불가능한 온프레미스 시장 독점 공략',
  },
  {
    capability: '특허 출원 2건 예정 (사업비 反映)',
    plan: 'Auto-Setup Engine 알고리즘 + Grid Job Sharding 프로토콜 특허 출원',
    effect: '핵심 알고리즘 법적 보호 → 경쟁사 기술 모방 법적 차단',
  },
];

/* ── 2-3 경쟁사 포지셔닝 맵 데이터 ── */
const positioningData = [
  { name: 'Schrödinger', x: 25, y: 20, desc: '고가·CLI 전문가용', color: '#bbb' },
  { name: 'MOE/CCG', x: 18, y: 30, desc: '고가·CLI 전문가용', color: '#bbb' },
  { name: 'Galaxy', x: 35, y: 75, desc: '쉬운 사용·클라우드', color: '#aaa' },
  { name: 'DeepChem', x: 45, y: 15, desc: '무료·CLI 전문가용', color: '#bbb' },
  { name: '동사', x: 82, y: 88, desc: 'No-Code + 온프레미스', color: '#1e293b', highlight: true },
];

const FeasibilityV8 = () => {
  return (
    <div className="v2-theme v2-container">
      <div className="v2-paper">

        <div className="hwp-section-title-tag">
          2. 실현 가능성 (Solution)_창업 아이템의 개발 계획
        </div>

        {/* ══════════════════ 2-1. 3대 핵심 기술 ══════════════════ */}
        <section>
          <h2 className="hwp-subsection-title">2-1. 제품·서비스의 개발/개선 방안</h2>

          <div style={{
            background: '#1e293b', color: '#fff', padding: '1rem 1.5rem',
            marginBottom: '1.5rem', lineHeight: '1.6', fontWeight: '700',
            fontSize: '0.95rem', wordBreak: 'keep-all',
          }}>
            ▶ 약물/단백질/펩타이드 디자인에 필요한 Bio/Chem informatics 기술을 자동화하여, 일반 연구자·실험자들이 쉽게 사용할 수 있도록 하는 <strong>AI 신약개발 Process 자동화 플랫폼 (Bio-MLOps 파이프라인)</strong>
          </div>

          {/* ════════ ① 현재 개발단계 현황 ════════ */}
          <div style={{ fontWeight: 'bold', fontSize: '0.88rem', marginBottom: '0.6rem', paddingLeft: '2px', fontFamily: 'var(--hwp-font-heading)' }}>
            ■ 현재 개발단계 (본 사업 신청 시점 기준)
          </div>

          <div style={{ border: '1.5px solid #000', marginBottom: '1.5rem', overflow: 'hidden' }}>
            {/* 단계 프로그레스 바 */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)' }}>
              {[
                { step: '아이디어 기획', status: '완료', done: true },
                { step: '핵심 기술 확보', status: '완료', done: true },
                { step: '시제품 제작', status: '진행중 (60%)', done: 'current' },
                { step: '테스트·검증', status: '예정', done: false },
                { step: '상용화', status: '예정', done: false },
              ].map((s, i) => (
                <div key={i} style={{
                  borderRight: i < 4 ? '1px solid #000' : 'none',
                  textAlign: 'center',
                }}>
                  {/* 상단: 단계명 */}
                  <div style={{
                    backgroundColor: s.done === true ? '#1e293b' : s.done === 'current' ? ACCENT : '#f5f5f5',
                    color: s.done === true ? '#fff' : '#000',
                    padding: '0.5rem 0.3rem',
                    fontWeight: '700', fontSize: '0.78rem',
                    fontFamily: 'var(--hwp-font-heading)',
                    borderBottom: '1px solid #000',
                  }}>
                    {s.step}
                  </div>
                  {/* 하단: 상태 */}
                  <div style={{
                    padding: '0.4rem 0.3rem',
                    fontSize: '0.75rem',
                    fontWeight: s.done === 'current' ? '700' : '400',
                    color: s.done === true ? '#1e293b' : s.done === 'current' ? '#1e293b' : '#999',
                  }}>
                    {s.done === true ? '✓ ' : s.done === 'current' ? '▶ ' : '○ '}
                    {s.status}
                  </div>
                </div>
              ))}
            </div>
            {/* 현재 상태 요약 */}
            <div style={{
              borderTop: '1.5px solid #000', padding: '0.6rem 0.8rem',
              fontSize: '0.84rem', lineHeight: '1.7', backgroundColor: '#fafafa',
            }}>
              <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '0.2rem' }}>
                <span style={{ fontWeight: '700', flexShrink: 0 }}>·</span>
                <span><strong>아이디어 기획 (완료):</strong> AI 신약개발 자동화 플랫폼 컨셉 설계, 타겟 시장·고객군(중소 제약사·연구소) 분석 완료</span>
              </div>
              <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '0.2rem' }}>
                <span style={{ fontWeight: '700', flexShrink: 0 }}>·</span>
                <span><strong>핵심 기술 확보 (완료):</strong> AlphaFold 3·DiffDock·RFdiffusion 등 오픈소스 AI 엔진 통합 래퍼(Wrapper) 개발, Docker 기반 온프레미스 패키징 기술 확보</span>
              </div>
              <div style={{ display: 'flex', gap: '0.4rem' }}>
                <span style={{ fontWeight: '700', flexShrink: 0 }}>·</span>
                <span><strong>시제품 제작 (진행중, 60%):</strong> CLI 기반 백엔드 파이프라인 구동 완료. 웹 기반 No-Code 대시보드 UI는 와이어프레임 설계 단계</span>
              </div>
            </div>
          </div>

          {/* ════════ ② 개발 방법 ════════ */}
          <div style={{ fontWeight: 'bold', fontSize: '0.88rem', marginBottom: '0.6rem', paddingLeft: '2px', fontFamily: 'var(--hwp-font-heading)' }}>
            ■ 개발 방법 (항목별 개발 주체 구분)
          </div>

          <table className="hwp-table" style={{ marginBottom: '1.5rem' }}>
            <thead>
              <tr>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '22%' }}>개발 항목</th>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '14%' }}>개발 방법</th>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '42%' }}>상세 내용</th>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '22%' }}>일정</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="label" style={{ backgroundColor: ACCENT, fontWeight: '700', fontSize: '0.82rem' }}>
                  Bio-MLOps 핵심 엔진<br/><span style={{ fontSize: '0.75rem', fontWeight: '400' }}>(Auto-Setup, Pipeline SDK, Grid Orchestrator)</span>
                </td>
                <td style={{ textAlign: 'center', fontWeight: '700', fontSize: '0.84rem', color: '#1e293b' }}>대표자<br/>직접 개발</td>
                <td style={{ fontSize: '0.82rem', lineHeight: '1.55' }}>
                  오픈소스 AI 엔진 래핑·자동화 코어, 온프레미스 패키징, 분산 그리드 오케스트레이션 — 대표자의 MLOps·DevOps 전문역량으로 직접 개발
                </td>
                <td style={{ fontSize: '0.82rem', textAlign: 'center' }}>'26.4 ~ '26.11<br/>(전 사업기간)</td>
              </tr>
              <tr>
                <td className="label" style={{ backgroundColor: ACCENT, fontWeight: '700', fontSize: '0.82rem' }}>
                  웹 프론트엔드 UI/UX<br/><span style={{ fontSize: '0.75rem', fontWeight: '400' }}>(No-Code 대시보드)</span>
                </td>
                <td style={{ textAlign: 'center', fontWeight: '700', fontSize: '0.84rem', color: '#c0392b' }}>외주용역</td>
                <td style={{ fontSize: '0.82rem', lineHeight: '1.55' }}>
                  UI/UX 와이어프레임 설계·디자인 시스템·React 프론트엔드·반응형 QA·사용성 테스트(UT) — 전문 디자인·개발 업체 분리 발주
                </td>
                <td style={{ fontSize: '0.82rem', textAlign: 'center' }}>'26.5 ~ '26.10<br/>(외주 13,500,000원)</td>
              </tr>
              <tr>
                <td className="label" style={{ backgroundColor: ACCENT, fontWeight: '700', fontSize: '0.82rem' }}>
                  특허 출원<br/><span style={{ fontSize: '0.75rem', fontWeight: '400' }}>(AI 자동화 핵심기술)</span>
                </td>
                <td style={{ textAlign: 'center', fontWeight: '700', fontSize: '0.84rem', color: '#c0392b' }}>외주용역</td>
                <td style={{ fontSize: '0.82rem', lineHeight: '1.55' }}>
                  AI 신약 예측 파이프라인 자동화 방법 특허 출원 — 변리사 사무소 위탁
                </td>
                <td style={{ fontSize: '0.82rem', textAlign: 'center' }}>'26.Q3<br/>(외주 3,500,000원)</td>
              </tr>
            </tbody>
          </table>

          {/* ════════ ③ 사업기간 내 최종 산출물 ════════ */}
          <div style={{ fontWeight: 'bold', fontSize: '0.88rem', marginBottom: '0.6rem', paddingLeft: '2px', fontFamily: 'var(--hwp-font-heading)' }}>
            ■ 사업기간 내 최종 산출물 (~2026.11)
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0', marginBottom: '2rem' }}>
            {[
              {
                num: '산출물 ①',
                title: '(SaaS 제품)',
                subtitle: '(Web Dashboard v1.0)',
                img: dashboardUI,
                details: [
                  'No-Code 웹 GUI 기반 AI 신약개발 대시보드',
                  'AlphaFold·DiffDock·RFdiffusion 통합 파이프라인',
                  '3D 분자구조 뷰어·작업큐·결과 시각화 포함',
                ],
              },
              {
                num: '산출물 ②',
                title: '(설치형 솔루션)',
                subtitle: '(온프레미스 설치 패키지 v1.0)',
                img: onpremiseUI,
                details: [
                  'Docker 기반 원클릭 자동 셋업 엔진 탑재',
                  '망분리 폐쇄망 독립 설치 가능',
                  '사내 PC Grid 분산연산 모듈 포함',
                ],
              },
              {
                num: '산출물 ③',
                title: '(무형자산)',
                subtitle: '(기술 문서·IP 확보)',
                img: techDocsIP,
                details: [
                  'API 레퍼런스 및 사용자 매뉴얼',
                  'Auto-Setup Engine 특허 출원 1건',
                  '기술보안 매뉴얼 수립 완료',
                ],
              },
            ].map((item, i) => (
              <div key={i} style={{
                border: '1.5px solid #000',
                borderLeft: i === 0 ? '1.5px solid #000' : 'none',
                display: 'flex', flexDirection: 'column',
              }}>
                {/* 헤더: 산출물 번호 + 타입 */}
                <div style={{
                  backgroundColor: ACCENT,
                  padding: '0.45rem 0.6rem', textAlign: 'center',
                  fontWeight: '700', fontSize: '0.82rem',
                  fontFamily: 'var(--hwp-font-heading)',
                  borderBottom: '1px solid #000',
                  lineHeight: '1.4',
                }}>
                  <div>{item.num}</div>
                  <div style={{ fontSize: '0.78rem' }}>{item.title}</div>
                </div>
                {/* 이미지 */}
                <div style={{
                  height: '130px', overflow: 'hidden',
                  borderBottom: '1px solid #000',
                  backgroundColor: '#0a0a1a',
                }}>
                  <img src={item.img} alt={item.num} style={{
                    width: '100%', height: '100%', objectFit: 'cover',
                  }} />
                </div>
                {/* 서브타이틀 (캡션) */}
                <div style={{
                  padding: '0.3rem 0.6rem', textAlign: 'center',
                  borderBottom: '1px solid #ccc',
                  fontSize: '0.75rem', fontWeight: '600',
                  fontFamily: 'var(--hwp-font-heading)',
                  color: '#333',
                }}>
                  {item.subtitle}
                </div>
                {/* 상세 내용 */}
                <div style={{ padding: '0.5rem 0.6rem', fontSize: '0.8rem', lineHeight: '1.6', flex: 1 }}>
                  {item.details.map((d, j) => (
                    <div key={j} style={{ display: 'flex', gap: '0.3rem', marginBottom: j < item.details.length - 1 ? '0.2rem' : 0 }}>
                      <span style={{ flexShrink: 0 }}>·</span>
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* ════════ 3대 핵심 기술 헤더 ════════ */}
          <div style={{ fontWeight: 'bold', fontSize: '0.88rem', marginBottom: '0.6rem', paddingLeft: '2px', fontFamily: 'var(--hwp-font-heading)' }}>
            ■ 3대 핵심 기술 — 기술 격차 해소 방안
          </div>

          <p className="hwp-guide-text" style={{ marginBottom: '1rem' }}>
            ※ 자동화, 온프레미스, 그리드 병렬 3축으로 기존 제품 한계를 돌파
          </p>

          {/* ── 카드 매트릭스 (3열) ── */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.8rem', marginBottom: '1.5rem' }}>
            {techCards.map((tc, i) => (
              <div key={i} style={{ border: '1.5px solid #000', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                {/* 넘버 + 키워드 헤더 */}
                <div style={{
                  backgroundColor: '#1e293b', color: '#fff',
                  padding: '0.6rem 0.8rem',
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                }}>
                  <span style={{
                    border: '1.5px solid #fff', width: '1.6rem', height: '1.6rem',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.75rem', fontWeight: '700', flexShrink: 0,
                  }}>{tc.num}</span>
                  <span style={{ fontWeight: '700', fontSize: '0.82rem', fontFamily: 'var(--hwp-font-heading)' }}>
                    {tc.keyword}
                  </span>
                </div>
                {/* 제목 */}
                <div style={{
                  backgroundColor: ACCENT, padding: '0.5rem 0.8rem',
                  fontWeight: '700', fontSize: '0.82rem', fontFamily: 'var(--hwp-font-heading)',
                  borderBottom: '1px solid #000', lineHeight: '1.4',
                }}>
                  {tc.title}
                </div>
                {/* 설명 포인트 */}
                <div style={{ padding: '0.6rem 0.8rem', fontSize: '0.82rem', lineHeight: '1.6', flex: 1 }}>
                  {tc.points.map((p, j) => (
                    <div key={j} style={{ display: 'flex', gap: '0.4rem', marginBottom: j < tc.points.length - 1 ? '0.3rem' : 0 }}>
                      <span style={{ flexShrink: 0 }}>·</span>
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* ════════ Bio-MLOps 솔루션이 자동화하는 대상과 범위 ════════ */}
          <div style={{ fontWeight: 'bold', fontSize: '0.88rem', marginBottom: '0.6rem', paddingLeft: '2px', fontFamily: 'var(--hwp-font-heading)' }}>
            ■ Bio-MLOps 솔루션이 자동화하는 대상과 범위
          </div>

          <div style={{ border: '1.5px solid #000', marginBottom: '1.5rem', overflow: 'hidden' }}>
            {/* 헤더 밴드 */}
            <div style={{
              backgroundColor: '#1e293b', color: '#fff', padding: '0.7rem 1rem',
              fontWeight: '700', fontSize: '0.88rem', lineHeight: '1.6',
              borderBottom: '1px solid #000', wordBreak: 'keep-all',
            }}>
              본 아이템은 전체 과정 중 가장 첫 관문인 <strong>'초기 후보 물질 발굴·최적화'</strong> 단계를 컴퓨터 시뮬레이션으로 대체하는 인프라를 제공함.
            </div>

            {/* 커버 분야 */}
            <div style={{ display: 'flex', borderBottom: '1px solid #000' }}>
              <div style={{
                width: '130px', fontWeight: '700', padding: '0.6rem 0.8rem',
                backgroundColor: ACCENT, borderRight: '1px solid #000',
                fontFamily: 'var(--hwp-font-heading)', fontSize: '0.82rem',
                display: 'flex', alignItems: 'center',
              }}>커버하는 분야</div>
              <div style={{ padding: '0.6rem 0.8rem', flex: 1, fontSize: '0.84rem', lineHeight: '1.7' }}>
                단백질 <strong>3D 구조 예측</strong>, 분자 <strong>도킹(Docking)</strong>, <strong>자유에너지 섭동(FEP)</strong> 시뮬레이션
              </div>
            </div>

            {/* 구체적인 설계 */}
            <div style={{ display: 'flex', borderBottom: '1px solid #000' }}>
              <div style={{
                width: '130px', fontWeight: '700', padding: '0.6rem 0.8rem',
                backgroundColor: ACCENT, borderRight: '1px solid #000',
                fontFamily: 'var(--hwp-font-heading)', fontSize: '0.82rem',
                display: 'flex', alignItems: 'center',
              }}>구체적인 설계</div>
              <div style={{ padding: '0.6rem 0.8rem', flex: 1, fontSize: '0.84rem', lineHeight: '1.7' }}>
                질병의 원인이 되는 <strong>표적 단백질(Target Proteins)</strong>과 약물 후보군 <strong>저분자 화합물(Small Molecules / Ligands)</strong> 사이의 에너지를 계산하여 가상의 효능을 계산함.
              </div>
            </div>

            {/* 핵심 가치 제안 */}
            <div style={{ display: 'flex', borderBottom: '1px solid #000' }}>
              <div style={{
                width: '130px', fontWeight: '700', padding: '0.6rem 0.8rem',
                backgroundColor: ACCENT, borderRight: '1px solid #000',
                fontFamily: 'var(--hwp-font-heading)', fontSize: '0.82rem',
                display: 'flex', alignItems: 'center',
              }}>핵심 가치 제안<br/><span style={{ fontSize: '0.72rem', fontWeight: '400' }}>(필터 역할)</span></div>
              <div style={{ padding: '0.6rem 0.8rem', flex: 1, fontSize: '0.84rem', lineHeight: '1.7' }}>
                동물 실험이나 사람 대상의 임상 시험으로 넘어가기 전, 오직 <strong>컴퓨터 상에서 수만 개의 화합물을 미리 결합시켜</strong> 보고 약효가 없거나 독성이 의심되는 가짜 물질들을 <strong style={{ color: '#c0392b' }}>사전에 80% 이상 걸러냄</strong>. 이를 통해 수백억 원의 매몰 비용과 수 년의 물리적 실험 시간을 극적으로 구원함.
              </div>
            </div>

            {/* 우선 공략 분야 */}
            <div style={{ display: 'flex', borderBottom: '1px solid #000' }}>
              <div style={{
                width: '130px', fontWeight: '700', padding: '0.6rem 0.8rem',
                backgroundColor: ACCENT, borderRight: '1px solid #000',
                fontFamily: 'var(--hwp-font-heading)', fontSize: '0.82rem',
                display: 'flex', alignItems: 'center',
              }}>우선 공략 분야</div>
              <div style={{ padding: '0.6rem 0.8rem', flex: 1, fontSize: '0.84rem', lineHeight: '1.7' }}>
                단가가 가장 높은 <strong>FEP(자유에너지 섭동)</strong> 분야 자동화·패키징을 최우선 구현 → 이후 펩타이드 디자인, 단백질 디자인 등 타 분야로 순차 확장
              </div>
            </div>

            {/* 기술 접근 방식 */}
            <div style={{ display: 'flex' }}>
              <div style={{
                width: '130px', fontWeight: '700', padding: '0.6rem 0.8rem',
                backgroundColor: ACCENT, borderRight: '1px solid #000',
                fontFamily: 'var(--hwp-font-heading)', fontSize: '0.82rem',
                display: 'flex', alignItems: 'center',
              }}>기술 접근 방식</div>
              <div style={{ padding: '0.6rem 0.8rem', flex: 1, fontSize: '0.84rem', lineHeight: '1.7' }}>
                글로벌 최상위 AI 엔진(AlphaFold·DiffDock 등)을 <strong>자동화 파이프라인으로 통합</strong>하고, 온프레미스 패키징하여 비전문 연구자도 즉시 사용 가능한 턴키 솔루션으로 제공하는 것이 핵심 역량
              </div>
            </div>
          </div>

          {/* ── STEP 시각화 이미지 ── */}
          <p className="hwp-guide-text" style={{ marginBottom: '0.5rem' }}>
            ※ 시각화: Bio-MLOps 파이프라인 핵심 결과물 (Storytelling)
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.6rem', marginBottom: '2rem' }}>
            {[
              { img: uiImage1, label: 'STEP 1: 타겟 단백질 구조 해독', sub: 'AlphaFold' },
              { img: uiImage2, label: 'STEP 2: 신약 후보 물질 결합', sub: 'DiffDock' },
              { img: uiImage3, label: 'STEP 3: 세상에 없던 신물질 창조', sub: 'RFdiffusion' },
            ].map((s, i) => (
              <div key={i} style={{ border: '1.5px solid #000', overflow: 'hidden' }}>
                <div style={{
                  backgroundColor: ACCENT, padding: '0.35rem 0.6rem',
                  fontWeight: '700', fontSize: '0.78rem', fontFamily: 'var(--hwp-font-heading)',
                  borderBottom: '1px solid #000', textAlign: 'center',
                }}>
                  {s.label} ({s.sub})
                </div>
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img src={s.img} alt={s.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
            ))}
          </div>

          {/* ════════ 최종목표/비전 + 핵심지표 (참조 이미지 스타일) ════════ */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0', marginBottom: '1rem' }}>

            {/* 좌측: 최종목표/비전 */}
            <div style={{ border: '1.5px solid #000', borderRight: 'none' }}>
              <div style={{
                backgroundColor: '#1e293b', color: '#fff', padding: '0.45rem 0.8rem',
                fontWeight: '700', fontSize: '0.88rem', fontFamily: 'var(--hwp-font-heading)',
                borderBottom: '1px solid #000',
              }}>
                최종목표 / 비전
              </div>
              <div style={{ fontSize: '0.84rem', lineHeight: '1.7' }}>
                <div style={{ display: 'flex', borderBottom: '1px dashed #ccc' }}>
                  <div style={{
                    width: '70px', fontWeight: '700', padding: '0.5rem 0.6rem',
                    backgroundColor: '#f5f5f5', borderRight: '1px solid #ccc',
                    fontFamily: 'var(--hwp-font-heading)', fontSize: '0.8rem',
                    display: 'flex', alignItems: 'center',
                  }}>최종목표</div>
                  <div style={{ padding: '0.5rem 0.6rem', flex: 1 }}>
                    기존 CLI 기반 AI 신약 도구의 한계를 넘는<br/>
                    <strong>No-Code 온프레미스 Bio-MLOps 통합 플랫폼</strong> 구축
                  </div>
                </div>
                <div style={{ display: 'flex', borderBottom: '1px dashed #ccc' }}>
                  <div style={{
                    width: '70px', fontWeight: '700', padding: '0.5rem 0.6rem',
                    backgroundColor: '#f5f5f5', borderRight: '1px solid #ccc',
                    fontFamily: 'var(--hwp-font-heading)', fontSize: '0.8rem',
                    display: 'flex', alignItems: 'center',
                  }}>비전</div>
                  <div style={{ padding: '0.5rem 0.6rem', flex: 1 }}>
                    연구실 수준의 AI 정밀도를 웹상에서 구현하는<br/>
                    <strong>'Lab-on-Web'</strong> 플랫폼 OS화
                  </div>
                </div>
                <div style={{ display: 'flex' }}>
                  <div style={{
                    width: '70px', fontWeight: '700', padding: '0.5rem 0.6rem',
                    backgroundColor: '#f5f5f5', borderRight: '1px solid #ccc',
                    fontFamily: 'var(--hwp-font-heading)', fontSize: '0.8rem',
                    display: 'flex', alignItems: 'center',
                  }}>가치제안</div>
                  <div style={{ padding: '0.5rem 0.6rem', flex: 1 }}>
                    · '복잡한 설정' 병목을 <strong>Auto-Setup</strong> 기술로 제거<br/>
                    · 비전문가도 신약·후보물질 탐색 가능
                  </div>
                </div>
              </div>
            </div>

            {/* 우측: 핵심지표 */}
            <div style={{ border: '1.5px solid #000' }}>
              <div style={{
                backgroundColor: '#1e293b', color: '#fff', padding: '0.45rem 0.8rem',
                fontWeight: '700', fontSize: '0.88rem', fontFamily: 'var(--hwp-font-heading)',
                borderBottom: '1px solid #000',
              }}>
                핵심지표
              </div>
              <div style={{ padding: '0.8rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {[
                  { label: '자동화 소요시간', value: '≤ 10 분', desc: '설정 자동화 소요시간' },
                  { label: '비용 절감', value: '-80%', desc: '도입/구축 비용 절감' },
                  { label: '보안 수준', value: '유출 제로(0)', desc: '외부 통신 완전 차단' },
                ].map((kpi, i) => (
                  <div key={i} style={{
                    border: '1.5px solid #000', padding: '0.5rem 0.7rem',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  }}>
                    <div>
                      <div style={{ fontWeight: '700', fontSize: '0.82rem', fontFamily: 'var(--hwp-font-heading)' }}>
                        {kpi.label}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#666' }}>{kpi.desc}</div>
                    </div>
                    <div style={{
                      fontWeight: '700', fontSize: '1.1rem', fontFamily: 'var(--hwp-font-heading)',
                      color: '#1e293b', whiteSpace: 'nowrap',
                    }}>
                      {kpi.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 기술 요약 불릿 */}
          <div style={{
            border: '1.5px solid #000', padding: '0.6rem 0.8rem',
            marginBottom: '1.2rem', fontSize: '0.84rem', lineHeight: '1.7',
          }}>
            <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '0.2rem' }}>
              <span style={{ fontWeight: '700', flexShrink: 0 }}>·</span>
              <span><strong>Workflow 통합:</strong> 데이터전처리→전하예측→시뮬레이션→분석을 원클릭 수행</span>
            </div>
            <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '0.2rem' }}>
              <span style={{ fontWeight: '700', flexShrink: 0 }}>·</span>
              <span><strong>하이브리드 엔진:</strong> AI 속도 + 물리 정밀도 결합 (Transformer 기반 전하 예측 모듈)</span>
            </div>
            <div style={{ display: 'flex', gap: '0.4rem' }}>
              <span style={{ fontWeight: '700', flexShrink: 0 }}>·</span>
              <span><strong>접근성 혁신:</strong> CLI(명령어) 없는 완전 GUI 기반 SaaS 환경 제공</span>
            </div>
          </div>

          {/* ════════ 핵심 구현 모듈 명세 테이블 ════════ */}
          <div style={{ fontWeight: 'bold', fontSize: '0.88rem', marginBottom: '0.6rem', paddingLeft: '2px', fontFamily: 'var(--hwp-font-heading)' }}>
            ■ 핵심 구현 모듈 (Bio-MLOps Automation Engine)
          </div>

          <table className="hwp-table" style={{ marginBottom: '1rem' }}>
            <tbody>
              <tr>
                <td className="label" style={{ width: '12%', backgroundColor: ACCENT }}>목표</td>
                <td colSpan={3} style={{ fontSize: '0.86rem', lineHeight: '1.6' }}>
                  AI의 속도와 물리 엔진의 정밀함을 결합하여 신약·후보물질의 <strong>결합 친화도(Binding Affinity)</strong>를 초고속으로 정확히 예측하는 자동화 파이프라인
                </td>
              </tr>
              <tr>
                <td className="label" style={{ backgroundColor: ACCENT }}>핵심기능</td>
                <td colSpan={3} style={{ fontSize: '0.86rem', lineHeight: '1.6' }}>
                  AlphaFold 기반 구조 예측 및 Auto-MD 프로토콜을 통한 <strong>원클릭 시뮬레이션 파이프라인</strong>(전처리→계산→분석) 통합
                </td>
              </tr>
              <tr>
                <td className="label" style={{ backgroundColor: ACCENT }}>결과</td>
                <td colSpan={3} style={{ fontSize: '0.86rem', lineHeight: '1.6' }}>
                  비전문가용 웹 <strong>시뮬레이션 대시보드(SaaS)</strong> — 마우스 클릭만으로 분자 구조 입력부터 결과 시각화까지 완전 자동 수행
                </td>
              </tr>
              <tr>
                <td className="label" style={{ backgroundColor: ACCENT }}>검증</td>
                <td colSpan={3} style={{ fontSize: '0.86rem', lineHeight: '1.6' }}>
                  공인 데이터셋(FreeSolv) 벤치마크 달성 및 실험값(Experimental Data)과 <strong>상관계수(R²) 0.9 이상</strong> 확보 목표
                </td>
              </tr>
            </tbody>
          </table>

          {/* ════════ 4단 파이프라인 (참조 이미지 하단) ════════ */}
          <div style={{ fontSize: '0.78rem', color: '#666', marginBottom: '0.5rem' }}>
            *구현 프로세스: 분자 구조 입력 → 전하 예측 모델 → 분자동역학 시뮬레이션 자동화 → 결과 분석 시각화
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '0', marginBottom: '2rem' }}>
            {[
              {
                num: '①',
                title: 'Topology Builder',
                desc: '분자 구조 자동 인식 및\n토폴로지 생성',
                img: uiImage1,
                caption: 'Data Preprocessing',
              },
              {
                num: '②',
                title: 'AI Predictor',
                desc: 'Transformer 기반\n전하·에너지 예측',
                img: uiImage2,
                caption: 'AI Inference',
              },
              {
                num: '③',
                title: 'Auto-MD Protocol',
                desc: 'FEP/MD 시뮬레이션\n파라미터 자동 최적화',
                img: uiImage3,
                caption: 'Simulation Loop',
              },
              {
                num: '④',
                title: 'Web Analysis GUI',
                desc: '웹 기반 마우스 클릭형\n결과 분석 시각화',
                img: uiImage1,
                caption: 'Result Visualization',
              },
            ].map((mod, i) => (
              <div key={i} style={{
                border: '1.5px solid #000',
                borderLeft: i === 0 ? '1.5px solid #000' : 'none',
                overflow: 'hidden', display: 'flex', flexDirection: 'column',
              }}>
                {/* 모듈 헤더 */}
                <div style={{
                  backgroundColor: '#1e293b', color: '#fff',
                  padding: '0.4rem 0.5rem', textAlign: 'center',
                  fontFamily: 'var(--hwp-font-heading)', fontWeight: '700',
                  fontSize: '0.78rem', borderBottom: '1px solid #000',
                }}>
                  {mod.num} {mod.title}
                </div>
                {/* 설명 */}
                <div style={{
                  padding: '0.4rem 0.5rem', fontSize: '0.75rem', lineHeight: '1.45',
                  textAlign: 'center', whiteSpace: 'pre-line', borderBottom: '1px solid #ccc',
                  minHeight: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {mod.desc}
                </div>
                {/* 이미지 */}
                <div style={{ height: '120px', overflow: 'hidden' }}>
                  <img src={mod.img} alt={mod.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                {/* 캡션 */}
                <div style={{
                  padding: '0.3rem 0.5rem', textAlign: 'center',
                  fontSize: '0.72rem', fontStyle: 'italic', color: '#555',
                  borderTop: '1px solid #ccc', fontFamily: 'var(--hwp-font-heading)',
                }}>
                  {mod.caption}
                </div>
              </div>
            ))}
          </div>

        </section>

        {/* ══════════════════ 2-2. 고객 요구사항 ══════════════════ */}
        <section>
          <h2 className="hwp-subsection-title">2-2. 고객 요구사항 대응 방안</h2>

          <p className="hwp-guide-text" style={{ marginBottom: '1rem' }}>
            ※ 고객 요구사항 분석을 통해 파악된 제품(서비스)의 문제점에 대한 기능·성능, 디자인, 사업화 활동 등을 개선하기 위한 방안
          </p>

          {/* ── ① 요구사항 수집 방법 ── */}
          <div style={{ fontWeight: 'bold', fontSize: '0.88rem', marginBottom: '0.6rem', paddingLeft: '2px', fontFamily: 'var(--hwp-font-heading)' }}>
            ■ 고객 요구사항 수집 및 분석 근거
          </div>

          <div style={{
            border: '1.5px solid #000', marginBottom: '1.5rem', overflow: 'hidden',
          }}>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            }}>
              {[
                { method: '연구자 심층 인터뷰', detail: '바이오·제약 분야 연구자 5인 대상 1:1 인터뷰를 통해 기존 도구의 불편사항과 니즈 파악', icon: '🎤' },
                { method: '기존 제품 리뷰 분석', detail: '해외 CADD SW(Schrödinger, MOE) 및 클라우드 AI(Galaxy) 사용자 리뷰·불만 사례 수집·분석', icon: '📋' },
                { method: '잠재 고객사 미팅', detail: '부산 지역 바이오 기업·대학 연구실 3곳과 미팅, 도입 의사결정 기준 및 장벽 요인 청취', icon: '🤝' },
              ].map((item, i) => (
                <div key={i} style={{
                  borderRight: i < 2 ? '1px solid #000' : 'none',
                }}>
                  <div style={{
                    backgroundColor: '#1e293b', color: '#fff',
                    padding: '0.5rem 0.6rem', textAlign: 'center',
                    fontWeight: '700', fontSize: '0.82rem',
                    fontFamily: 'var(--hwp-font-heading)',
                    borderBottom: '1px solid #000',
                  }}>
                    {item.icon} {item.method}
                  </div>
                  <div style={{
                    padding: '0.6rem', fontSize: '0.8rem', lineHeight: '1.55',
                  }}>
                    {item.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── ② 고객 요구사항 대응 통합 테이블 ── */}
          <div style={{ fontWeight: 'bold', fontSize: '0.88rem', marginBottom: '0.6rem', paddingLeft: '2px', fontFamily: 'var(--hwp-font-heading)' }}>
            ■ 고객 요구사항 대비 문제점 및 개선 방안
          </div>

          {improvementTable.map((group, gi) => (
            <div key={gi} style={{ marginBottom: gi < improvementTable.length - 1 ? '1rem' : '1.5rem' }}>
              {/* 축 헤더 밴드 */}
              <div style={{
                backgroundColor: '#1e293b', color: '#fff',
                padding: '0.45rem 0.8rem',
                fontWeight: '700', fontSize: '0.84rem',
                fontFamily: 'var(--hwp-font-heading)',
                display: 'flex', alignItems: 'center', gap: '0.5rem',
              }}>
                <span style={{
                  border: '1.5px solid #fff', padding: '0.1rem 0.45rem',
                  fontSize: '0.72rem', fontWeight: '700',
                }}>{gi + 1}</span>
                {group.category}
              </div>

              {/* 2열: Pain Point / 개선 방안 */}
              <table className="hwp-table" style={{ borderTop: 'none' }}>
                <thead>
                  <tr>
                    <th style={{ backgroundColor: ACCENT, width: '50%', fontWeight: '700', fontSize: '0.8rem', fontFamily: 'var(--hwp-font-heading)' }}>
                      고객 요구사항 (Pain Point)
                    </th>
                    <th style={{ backgroundColor: ACCENT, width: '50%', fontWeight: '700', fontSize: '0.8rem', fontFamily: 'var(--hwp-font-heading)' }}>
                      개선 방안 (Action Plan)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {group.painPoints.map((pt, pi) => (
                    <tr key={pi}>
                      <td style={{ fontSize: '0.82rem', lineHeight: '1.55', padding: '0.5rem 0.6rem', color: '#c0392b' }}>
                        <span style={{ fontWeight: '700', marginRight: '0.3rem' }}>❌</span> {pt}
                      </td>
                      <td style={{ fontSize: '0.82rem', lineHeight: '1.55', padding: '0.5rem 0.6rem', fontWeight: '600' }}>
                        <span style={{ fontWeight: '700', marginRight: '0.3rem', color: '#2c7a3f' }}>✔</span> {group.actions[pi]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}

          {/* 종합 요약 */}
          <div style={{
            background: '#1e293b', color: '#fff', padding: '0.8rem 1.2rem',
            fontWeight: '700', fontSize: '0.88rem', wordBreak: 'keep-all', lineHeight: '1.7',
          }}>
            ▶ 연구자 인터뷰·기존 제품 리뷰·잠재 고객사 미팅으로 수집한 요구사항을 <strong>기능·성능 / 디자인 / 사업화</strong> 3축으로 분류하고, 각 문제점에 대한 기술적·사업적 개선 방안을 사업기간('26.4~11) 내 체계적으로 추진
          </div>
        </section>

        {/* ══════════════════ 2-3. 차별화 방안 (리디자인) ══════════════════ */}
        <section>
          <h2 className="hwp-subsection-title">2-3. 제품‧서비스의 차별화 방안 (경쟁력 확보 방안)</h2>

          {/* 핵심 선언 밴드 */}
          <div style={{
            background: '#1e293b', color: '#fff', padding: '0.8rem 1.2rem',
            marginBottom: '1.5rem', lineHeight: '1.6', fontWeight: '700',
            fontSize: '0.9rem', wordBreak: 'keep-all',
          }}>
            ▶ <strong>보안(온프레미스) × 편의성(No-Code) × 가격(Grid)</strong> — 3축 동시 충족으로 경쟁사가 점유하지 못한 공백 시장(White Space) 선점
          </div>

          {/* ── ① 3축 VS 대결 비교 ── */}
          <div style={{ fontWeight: 'bold', fontSize: '0.88rem', marginBottom: '0.6rem', paddingLeft: '2px', fontFamily: 'var(--hwp-font-heading)' }}>
            ■ 경쟁사 vs 자사 — 3축 핵심 비교
          </div>

          {/* VS 대결 테이블 */}
          <table className="hwp-table" style={{ marginBottom: '1.5rem' }}>
            <thead>
              <tr>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '8%', textAlign: 'center' }}>축</th>
                <th style={{ backgroundColor: '#c0392b', color: '#fff', width: '18%', textAlign: 'center' }}>경쟁사</th>
                <th style={{ backgroundColor: '#c0392b', color: '#fff', width: '24%' }}>한계점</th>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '18%', textAlign: 'center' }}>자사</th>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '24%' }}>강점</th>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '8%', textAlign: 'center' }}>결과</th>
              </tr>
            </thead>
            <tbody>
              {vsData.map((vs, i) => (
                <tr key={i}>
                  {/* 축 아이콘 */}
                  <td style={{
                    backgroundColor: ACCENT, textAlign: 'center', fontWeight: '700',
                    fontSize: '0.82rem', fontFamily: 'var(--hwp-font-heading)',
                  }}>
                    <div style={{ fontSize: '1.2rem', marginBottom: '0.15rem' }}>{vs.icon}</div>
                    <div>{vs.axis}</div>
                  </td>
                  {/* 경쟁사명 */}
                  <td style={{
                    fontSize: '0.82rem', fontWeight: '700', textAlign: 'center',
                    color: '#c0392b', backgroundColor: '#fef2f2',
                  }}>
                    ✗ {vs.compName}
                  </td>
                  {/* 경쟁사 한계 */}
                  <td style={{
                    fontSize: '0.8rem', lineHeight: '1.5', backgroundColor: '#fef2f2',
                    color: '#666',
                  }}>
                    <div>{vs.compPain}</div>
                    <div style={{ color: '#c0392b', fontWeight: '600', marginTop: '0.15rem', fontSize: '0.78rem' }}>
                      → {vs.compRisk}
                    </div>
                  </td>
                  {/* 자사명 */}
                  <td style={{
                    fontSize: '0.82rem', fontWeight: '700', textAlign: 'center',
                    color: '#1e293b', backgroundColor: '#f0f4ff',
                  }}>
                    ✓ {vs.ourName}
                  </td>
                  {/* 자사 강점 */}
                  <td style={{
                    fontSize: '0.8rem', lineHeight: '1.5', backgroundColor: '#f0f4ff',
                  }}>
                    {vs.ourStrength}
                  </td>
                  {/* 결과 */}
                  <td style={{
                    fontSize: '0.75rem', fontWeight: '700', textAlign: 'center',
                    color: '#1e293b', backgroundColor: ACCENT, lineHeight: '1.3',
                  }}>
                    {vs.ourResult}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* ── ② 자사 보유역량 기반 경쟁력 확보 방안 ── */}
          <div style={{ fontWeight: 'bold', fontSize: '0.88rem', marginBottom: '0.6rem', paddingLeft: '2px', fontFamily: 'var(--hwp-font-heading)' }}>
            ■ 자사 보유역량 기반 경쟁력 확보 방안
          </div>

          <table className="hwp-table" style={{ marginBottom: '1.5rem' }}>
            <thead>
              <tr>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '24%' }}>자사 보유역량</th>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '40%' }}>경쟁력 확보 방안</th>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '36%' }}>기대 효과</th>
              </tr>
            </thead>
            <tbody>
              {capabilityData.map((c, i) => (
                <tr key={i}>
                  <td className="label" style={{
                    backgroundColor: ACCENT, fontWeight: '700', fontSize: '0.82rem',
                    fontFamily: 'var(--hwp-font-heading)', textAlign: 'center',
                    lineHeight: '1.45',
                  }}>
                    {c.capability}
                  </td>
                  <td style={{ fontSize: '0.82rem', lineHeight: '1.55' }}>
                    {c.plan}
                  </td>
                  <td style={{ fontSize: '0.82rem', lineHeight: '1.55', fontWeight: '600', color: '#1e293b' }}>
                    {c.effect}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* ── ③ 포지셔닝 매트릭스 (2×2) ── */}
          <div style={{ fontWeight: 'bold', fontSize: '0.88rem', marginBottom: '0.5rem', paddingLeft: '2px', fontFamily: 'var(--hwp-font-heading)' }}>
            ■ 경쟁사 포지셔닝 맵 — 공백 시장(White Space) 선점
          </div>

          <div style={{ border: '1.5px solid #000', marginBottom: '1.5rem', overflow: 'hidden' }}>
            <div style={{ position: 'relative', width: '100%', height: '340px', backgroundColor: '#fafafa' }}>
              {/* 우상단 White Space 강조 영역 */}
              <div style={{
                position: 'absolute', top: '0', right: '0',
                width: '50%', height: '50%',
                backgroundColor: 'rgba(223,230,247,0.35)',
                borderLeft: '1.5px dashed #b0bdd4',
                borderBottom: '1.5px dashed #b0bdd4',
                zIndex: 0,
              }} />
              <div style={{
                position: 'absolute', top: '8px', right: '10px',
                fontSize: '0.72rem', color: '#1e293b', fontWeight: '700',
                backgroundColor: 'rgba(223,230,247,0.7)', padding: '0.15rem 0.5rem',
                border: '1px solid #b0bdd4', zIndex: 5,
              }}>
                ★ White Space
              </div>

              {/* X축 라벨 */}
              <div style={{
                position: 'absolute', bottom: '4px', left: '50%', transform: 'translateX(-50%)',
                fontSize: '0.73rem', fontWeight: '700', color: '#888', whiteSpace: 'nowrap',
              }}>
                보안 수준 → (클라우드 ──── 온프레미스)
              </div>
              {/* Y축 라벨 */}
              <div style={{
                position: 'absolute', left: '4px', top: '50%', transform: 'translateY(-50%) rotate(-90deg)',
                fontSize: '0.73rem', fontWeight: '700', color: '#888', whiteSpace: 'nowrap',
              }}>
                편의성 → (CLI ──── No-Code)
              </div>
              {/* 사분면 라벨 */}
              <div style={{ position: 'absolute', top: '30px', right: '14px', fontSize: '0.65rem', color: '#aaa', fontWeight: '600', zIndex: 1 }}>No-Code + 온프레미스</div>
              <div style={{ position: 'absolute', top: '30px', left: '44px', fontSize: '0.65rem', color: '#ccc', fontWeight: '600' }}>No-Code + 클라우드</div>
              <div style={{ position: 'absolute', bottom: '22px', right: '14px', fontSize: '0.65rem', color: '#ccc', fontWeight: '600' }}>CLI + 온프레미스</div>
              <div style={{ position: 'absolute', bottom: '22px', left: '44px', fontSize: '0.65rem', color: '#ccc', fontWeight: '600' }}>CLI + 클라우드</div>
              {/* 십자선 */}
              <div style={{ position: 'absolute', top: '50%', left: '40px', right: '10px', height: '1px', backgroundColor: '#ddd' }} />
              <div style={{ position: 'absolute', left: '50%', top: '10px', bottom: '22px', width: '1px', backgroundColor: '#ddd' }} />

              {/* 경쟁사 및 자사 dot */}
              {positioningData.map((p, i) => {
                const mapLeft = 40;
                const mapRight = 10;
                const mapTop = 10;
                const mapBottom = 22;
                return (
                  <div key={i} style={{
                    position: 'absolute',
                    left: `calc(${mapLeft}px + ${p.x / 100} * (100% - ${mapLeft + mapRight}px))`,
                    bottom: `calc(${mapBottom}px + ${p.y / 100} * (100% - ${mapTop + mapBottom}px))`,
                    transform: 'translate(-50%, 50%)',
                    textAlign: 'center',
                    zIndex: p.highlight ? 10 : 2,
                  }}>
                    <div style={{
                      width: p.highlight ? '46px' : '28px',
                      height: p.highlight ? '46px' : '28px',
                      borderRadius: '50%',
                      backgroundColor: p.color,
                      border: p.highlight ? '3px solid #000' : '2px solid #ccc',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      margin: '0 auto',
                      boxShadow: p.highlight ? '0 0 0 6px rgba(30,41,59,0.15), 0 2px 8px rgba(0,0,0,0.2)' : 'none',
                    }}>
                      {p.highlight && <span style={{ color: '#fff', fontWeight: '700', fontSize: '0.7rem' }}>★</span>}
                    </div>
                    <div style={{
                      fontSize: p.highlight ? '0.78rem' : '0.66rem',
                      fontWeight: p.highlight ? '800' : '500',
                      marginTop: '3px',
                      fontFamily: 'var(--hwp-font-heading)',
                      color: p.highlight ? '#1e293b' : '#999',
                      whiteSpace: 'nowrap',
                    }}>{p.name}</div>
                    <div style={{
                      fontSize: '0.6rem',
                      color: p.highlight ? '#1e293b' : '#bbb',
                      fontWeight: p.highlight ? '600' : '400',
                    }}>{p.desc}</div>
                  </div>
                );
              })}
            </div>
            {/* 결론 밴드 */}
            <div style={{ backgroundColor: ACCENT, padding: '0.5rem 0.8rem', borderTop: '1.5px solid #000', fontSize: '0.82rem', fontWeight: '600' }}>
              → 동사만 <strong>No-Code + 온프레미스</strong> 우상단(White Space)에 유일 포지셔닝 — 독점적 경쟁 지위 확보
            </div>
          </div>

          {/* ── ④ IP 확보 전략 타임라인 ── */}
          <div style={{ fontWeight: 'bold', fontSize: '0.88rem', marginBottom: '0.6rem', paddingLeft: '2px', fontFamily: 'var(--hwp-font-heading)' }}>
            ■ 지식재산권(IP) 확보 로드맵
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0', marginBottom: '1.5rem' }}>
            {[
              {
                q: "'26.Q2",
                title: '기술 보안 체계 구축',
                items: [
                  '핵심 소스코드 접근 통제 체계',
                  '코드 리뷰 프로세스 수립',
                  'NDA(비밀유지) 체계 정비',
                ],
                color: '#f5f5f5',
              },
              {
                q: "'26.Q3",
                title: '특허 출원 ①',
                items: [
                  'Auto-Setup Engine 알고리즘 특허 출원',
                  '온프레미스 자동 설치 핵심 기술',
                  '변리사 사무소 위탁 (3,500,000원)',
                ],
                color: ACCENT,
              },
              {
                q: "'26.Q4",
                title: '특허 출원 ②',
                items: [
                  'Grid Job Sharding 프로토콜 특허 출원',
                  'PC 그리드 분산연산 핵심 기술',
                  '기술보안 매뉴얼 완성·배포',
                ],
                color: '#f5f5f5',
              },
            ].map((step, i) => (
              <div key={i} style={{
                border: '1.5px solid #000',
                borderLeft: i === 0 ? '1.5px solid #000' : 'none',
                display: 'flex', flexDirection: 'column',
              }}>
                {/* Q 헤더 */}
                <div style={{
                  backgroundColor: '#1e293b', color: '#fff',
                  padding: '0.4rem 0.6rem', textAlign: 'center',
                  fontWeight: '700', fontSize: '0.82rem',
                  fontFamily: 'var(--hwp-font-heading)',
                  borderBottom: '1px solid #000',
                }}>
                  {step.q}
                </div>
                {/* 제목 */}
                <div style={{
                  backgroundColor: step.color, padding: '0.35rem 0.6rem',
                  fontWeight: '700', fontSize: '0.82rem', textAlign: 'center',
                  fontFamily: 'var(--hwp-font-heading)',
                  borderBottom: '1px solid #000', lineHeight: '1.4',
                }}>
                  {step.title}
                </div>
                {/* 상세 */}
                <div style={{ padding: '0.5rem 0.6rem', fontSize: '0.8rem', lineHeight: '1.6', flex: 1 }}>
                  {step.items.map((item, j) => (
                    <div key={j} style={{ display: 'flex', gap: '0.3rem', marginBottom: j < step.items.length - 1 ? '0.2rem' : 0 }}>
                      <span style={{ flexShrink: 0 }}>·</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* ── 기술보호 전략 요약 (1줄) ── */}
          <div style={{
            border: '1.5px solid #000', padding: '0.6rem 0.8rem',
            marginBottom: '1rem', fontSize: '0.84rem', lineHeight: '1.7',
            backgroundColor: '#fafafa',
          }}>
            <div style={{ display: 'flex', gap: '0.4rem' }}>
              <span style={{ fontWeight: '700', flexShrink: 0 }}>·</span>
              <span><strong>하이브리드 전략:</strong> AI 엔진은 글로벌 오픈소스 활용하여 최신 성능 확보 + 자동화·오케스트레이션 코어는 독자 개발하여 핵심 기술 내재화</span>
            </div>
          </div>

          {/* ── 차별화 종합 요약 ── */}
          <div style={{
            background: '#1e293b', color: '#fff', padding: '0.8rem 1.2rem',
            fontWeight: '700', fontSize: '0.9rem', wordBreak: 'keep-all', lineHeight: '1.6',
          }}>
            ▶ <strong>보안 × 편의성 × 가격</strong> 3축 동시 충족 → 자사 보유역량 기반 핵심 기술 내재화 → 공백 시장 선점 → 특허 2건 출원으로 <strong>독점적 경쟁력 확보</strong>
          </div>

        </section>

      </div>
    </div>
  );
};

export default FeasibilityV8;
