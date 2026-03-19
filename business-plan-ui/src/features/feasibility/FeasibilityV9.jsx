import React from 'react';
import ComparisonTable from '../../shared/ui/ComparisonTable';
import uiImage1 from '../assets/step1_alphafold.png';
import uiImage2 from '../assets/step2_diffdock.png';
import uiImage3 from '../assets/step3_rfdiffusion.png';
import dashboardUI from '../assets/메인 대시보드 UI.png';

const ACCENT = '#dfe6f7';

/* ── 경쟁 비교 테이블 데이터 ── */
const compHeaders = [
  '구분',
  '기존 방식 (해외 CADD)',
  '단순 AI 클라우드',
  '동사 솔루션',
];
const compRows = [
  { label: '사용성', cells: ['CLI 명령어 방식', '결과 해석 어려움', 'No-Code 원클릭'] },
  { label: '보안', cells: ['사내 설치형', '외부 클라우드 필수 → 유출 위험', '사내 서버 설치 → 유출 제로'] },
  { label: '비용', cells: ['수억 원 라이선스', '종량제 과금', '기존 대비 1/10'] },
];

/* ── 3대 핵심 기술 ── */
const techCards = [
  {
    num: '01', keyword: '오픈소스 통합 자동화',
    title: 'GitHub 최신 AI를 통합 UI에서 원클릭 실행',
    points: [
      'AlphaFold·DiffDock·RFdiffusion 등 오픈소스 자동 패키징',
      '연구자가 원하는 모듈만 골라 조합 — 약물·펩타이드·단백질 디자인',
      'No-Code 통합 대시보드 제공',
    ],
  },
  {
    num: '02', keyword: '사내 설치형',
    title: '망분리 폐쇄망에서 완전 독립 운영',
    points: ['인터넷 차단 환경 독립 작동', '기밀 데이터 유출 원천 차단', '보안 규정 엄격한 제약사 도입 가능'],
  },
  {
    num: '03', keyword: '사내 PC Grid',
    title: '사내 PC를 모아 고성능 컴퓨터처럼 활용',
    points: ['슈퍼컴 별도 구매 불필요', '유휴 PC 수백 대의 자원 묶어 고속 연산', '자체 자원 분배 기능 효율 극대화'],
  },
];

/* ── 고객 요구사항 통합 ── */
const improvementRows = [
  { pain: 'AI 도구 개별 설치 며칠 소요', action: '통합 파이프라인(Pipeline SDK) 원클릭 설치', cat: '기능' },
  { pain: '사내 보안 규정상 클라우드 불가', action: 'Docker 기반 온프레미스 완결형 패키지', cat: '기능' },
  { pain: 'CLI 모르면 AI 도구 사용 불가', action: 'No-Code Web GUI 대시보드', cat: '디자인' },
  { pain: '도입 비용 선투자 부담', action: '무상 PoC 파일럿 + SaaS 월정액 모델', cat: '사업화' },
];

/* ── 포지셔닝 데이터 ── */
const positioningData = [
  { name: 'Schrödinger', x: 25, y: 20, desc: '고가·CLI', color: '#bbb' },
  { name: 'MOE/CCG', x: 18, y: 30, desc: '고가·CLI', color: '#bbb' },
  { name: 'Galaxy', x: 35, y: 75, desc: '쉬움·클라우드', color: '#aaa' },
  { name: 'DeepChem', x: 45, y: 15, desc: '무료·CLI', color: '#bbb' },
  { name: '동사', x: 82, y: 88, desc: 'No-Code+온프레미스', color: '#1e293b', highlight: true },
];

const FeasibilityV9 = () => {
  return (
    <div className="v2-theme v2-container">
      <div className="v2-paper">

        <div className="hwp-section-title-tag">
          2. 실현 가능성 (Solution)_창업 아이템의 개발 계획
        </div>

        {/* ══════════════════ 2-1. 개발/개선 방안 ══════════════════ */}
        <section>
          <h2 className="hwp-subsection-title">2-1. 제품·서비스의 개발/개선 방안</h2>

          <div style={{
            background: '#1e293b', color: '#fff', padding: '0.8rem 1.2rem',
            marginBottom: '1.2rem', lineHeight: '1.5', fontWeight: '700',
            fontSize: '0.88rem', wordBreak: 'keep-all',
          }}>
            ▶ 약물/단백질/펩타이드 디자인에 필요한 Bio/Chem informatics 기술을 자동화하여, 일반 연구자·실험자들이 쉽게 사용할 수 있도록 하는 <strong>AI 신약개발 Process 자동화 플랫폼 (Bio-MLOps)</strong>
          </div>

          {/* ── 자동화 대상과 범위 ── */}
          <div style={{ fontWeight: 'bold', fontSize: '0.85rem', marginBottom: '0.5rem', paddingLeft: '2px', fontFamily: 'var(--hwp-font-heading)' }}>
            ■ 자동화 대상과 범위 — '초기 후보 물질 발굴·최적화' 단계를 컴퓨터 시뮬레이션으로 대체
          </div>
          <table className="hwp-table" style={{ marginBottom: '1.2rem' }}>
            <tbody>
              {[
                { label: '커버 분야', val: '단백질 3D 구조 예측, 분자 도킹(Docking), 자유에너지 섭동(FEP) 시뮬레이션' },
                { label: '구체적 설계', val: '표적 단백질(Target Proteins)과 저분자 화합물(Ligands) 사이의 에너지·효능 계산 자동화' },
                { label: '핵심 가치', val: <>컴퓨터 상에서 수만 개 화합물을 사전 결합시켜 <strong style={{ color: '#c0392b' }}>80% 이상 사전 필터링</strong> → 수백억 원 매몰비용 절감</> },
                { label: '우선 공략', val: <>단가 최고인 <strong>FEP 분야</strong> 우선 자동화 → 이후 펩타이드·단백질 디자인으로 확장</> },
                { label: '기술 접근', val: <>글로벌 최상위 AI 엔진(AlphaFold·DiffDock 등)을 <strong>자동화 파이프라인으로 통합</strong>하고, 온프레미스 패키징하여 턴키 솔루션으로 제공</> },
              ].map((row, i) => (
                <tr key={i}>
                  <td className="label" style={{ backgroundColor: ACCENT, fontWeight: '700', fontSize: '0.78rem', fontFamily: 'var(--hwp-font-heading)', width: '100px', textAlign: 'center' }}>{row.label}</td>
                  <td style={{ fontSize: '0.82rem', lineHeight: '1.6' }}>{row.val}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* ── 핵심 오픈소스 모듈 활용 방안 ── */}
          <div style={{ fontWeight: 'bold', fontSize: '0.85rem', marginBottom: '0.5rem', paddingLeft: '2px', fontFamily: 'var(--hwp-font-heading)' }}>
            ■ GitHub 오픈소스 모듈별 활용 방안
          </div>
          <table className="hwp-table" style={{ marginBottom: '1.2rem' }}>
            <thead>
              <tr>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '14%' }}>오픈소스 모듈</th>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '26%' }}>플랫폼 내 역할</th>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '28%' }}>원래 용도</th>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '32%' }}>동사의 래핑·자동화 방식</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: 'AlphaFold 3', src: 'DeepMind',
                  role: '표적 단백질의 3D 원자 구조를 AI로 예측',
                  platform: 'STEP 1 — 단백질 이름/서열 입력 → 자동 구조 예측·PDB 생성',
                  wrap: 'Docker 패키징 + REST API 래퍼 → GUI에서 검색/업로드만으로 실행',
                },
                {
                  name: 'DiffDock', src: 'MIT CSAIL',
                  role: '약물 후보(리간드)가 단백질 어디에 결합하는지 예측',
                  platform: 'STEP 2 — AlphaFold 출력에 후보 화합물 자동 도킹·순위 리포팅',
                  wrap: '입출력 파일 자동 변환(PDB↔SDF) + 배치 처리 큐',
                },
                {
                  name: 'RFdiffusion', src: 'UW Baker Lab',
                  role: '자연에 없는 신규 단백질/펩타이드 구조 생성',
                  platform: 'STEP 3 — 목표 기능 명세 → de novo 단백질 후보 자동 설계',
                  wrap: 'GPU 자원 자동 할당(Grid) + 3D 뷰어 즉시 시각화',
                },
                {
                  name: 'OpenMM', src: 'Stanford',
                  role: '분자역학(MD) 시뮬레이션 / FEP 계산',
                  platform: '고급 모듈 — 도킹 결과의 결합 안정성·에너지 정밀 검증',
                  wrap: 'Grid 분산연산으로 수백 개 FEP 사내 PC에서 병렬 처리',
                },
                {
                  name: 'RDKit', src: 'Open-Source',
                  role: '분자 구조 변환·물성 계산·화학 정보학 도구',
                  platform: '공통 유틸리티 — 분자 파일(SDF/MOL/SMILES) 자동 변환·필터링',
                  wrap: 'Pipeline SDK 핵심 미들웨어로 전처리·후처리 자동화',
                },
              ].map((mod, i) => (
                <tr key={i}>
                  <td className="label" style={{ backgroundColor: i < 3 ? ACCENT : '#f5f5f5', fontWeight: '700', fontSize: '0.78rem', fontFamily: 'var(--hwp-font-heading)', textAlign: 'center', lineHeight: '1.3' }}>
                    {mod.name}<br/><span style={{ fontSize: '0.65rem', fontWeight: '400', color: '#888' }}>{mod.src}</span>
                  </td>
                  <td style={{ fontSize: '0.78rem', lineHeight: '1.4' }}>{mod.platform}</td>
                  <td style={{ fontSize: '0.78rem', lineHeight: '1.4' }}>{mod.role}</td>
                  <td style={{ fontSize: '0.78rem', lineHeight: '1.4', color: '#1e293b', fontWeight: '600' }}>{mod.wrap}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{
            background: '#1e293b', color: '#fff', padding: '0.4rem 0.8rem', marginBottom: '1.2rem', marginTop: '-1.2rem',
            fontSize: '0.78rem', fontWeight: '700', lineHeight: '1.5',
          }}>
            ▶ 글로벌 최상위 AI 엔진을 <strong>자동화 파이프라인으로 통합·래핑·패키징</strong>하여, 비전문 연구자도 즉시 활용 가능한 턴키 AI 인프라로 제공
          </div>

          {/* ── 3대 핵심 기술 카드 ── */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem', marginBottom: '1.2rem' }}>
            {techCards.map((tc, i) => (
              <div key={i} style={{ border: '1.5px solid #000', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{
                  backgroundColor: '#1e293b', color: '#fff', padding: '0.4rem 0.6rem',
                  display: 'flex', alignItems: 'center', gap: '0.4rem',
                }}>
                  <span style={{ border: '1px solid #fff', padding: '0.05rem 0.3rem', fontSize: '0.7rem', fontWeight: '700' }}>{tc.num}</span>
                  <span style={{ fontWeight: '700', fontSize: '0.78rem', fontFamily: 'var(--hwp-font-heading)' }}>{tc.keyword}</span>
                </div>
                <div style={{
                  backgroundColor: ACCENT, padding: '0.35rem 0.6rem',
                  fontWeight: '700', fontSize: '0.78rem', fontFamily: 'var(--hwp-font-heading)',
                  borderBottom: '1px solid #000', lineHeight: '1.3',
                }}>{tc.title}</div>
                <div style={{ padding: '0.4rem 0.6rem', fontSize: '0.78rem', lineHeight: '1.5', flex: 1 }}>
                  {tc.points.map((p, j) => (
                    <div key={j} style={{ display: 'flex', gap: '0.3rem', marginBottom: j < tc.points.length - 1 ? '0.15rem' : 0 }}>
                      <span style={{ flexShrink: 0 }}>·</span><span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* ── STEP 시각화 (1행) ── */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem', marginBottom: '1.2rem' }}>
            {[
              { img: uiImage1, label: 'STEP 1: 구조 해독 (AlphaFold)' },
              { img: uiImage2, label: 'STEP 2: 후보 결합 (DiffDock)' },
              { img: uiImage3, label: 'STEP 3: 신물질 창조 (RFdiffusion)' },
            ].map((s, i) => (
              <div key={i} style={{ border: '1.5px solid #000', overflow: 'hidden' }}>
                <div style={{
                  backgroundColor: ACCENT, padding: '0.25rem 0.5rem',
                  fontWeight: '700', fontSize: '0.72rem', fontFamily: 'var(--hwp-font-heading)',
                  borderBottom: '1px solid #000', textAlign: 'center',
                }}>{s.label}</div>
                <div style={{ height: '130px', overflow: 'hidden' }}>
                  <img src={s.img} alt={s.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
            ))}
          </div>

          {/* ── 개발 현황 + 산출물 (2열 압축) ── */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0', marginBottom: '1.2rem' }}>
            {/* 현재 개발단계 */}
            <div style={{ border: '1.5px solid #000', borderRight: 'none', overflow: 'hidden' }}>
              <div style={{
                backgroundColor: '#1e293b', color: '#fff', padding: '0.35rem 0.6rem',
                fontWeight: '700', fontSize: '0.82rem', fontFamily: 'var(--hwp-font-heading)',
                borderBottom: '1px solid #000', textAlign: 'center',
              }}>현재 개발단계</div>
              <div style={{ padding: '0.5rem 0.6rem', fontSize: '0.8rem', lineHeight: '1.6' }}>
                <div style={{ marginBottom: '0.2rem' }}>✓ <strong>아이디어 기획</strong> — 완료</div>
                <div style={{ marginBottom: '0.2rem' }}>✓ <strong>핵심 기술 확보</strong> — 완료 (래퍼 개발, Docker 패키징)</div>
                <div>▶ <strong>시제품 제작</strong> — 진행중 60% (CLI 파이프라인 완료, Web UI 설계 중)</div>
              </div>
            </div>
            {/* 최종 산출물 */}
            <div style={{ border: '1.5px solid #000', overflow: 'hidden' }}>
              <div style={{
                backgroundColor: '#1e293b', color: '#fff', padding: '0.35rem 0.6rem',
                fontWeight: '700', fontSize: '0.82rem', fontFamily: 'var(--hwp-font-heading)',
                borderBottom: '1px solid #000', textAlign: 'center',
              }}>사업기간 내 최종 산출물 (~2026.11)</div>
              <div style={{ padding: '0.5rem 0.6rem', fontSize: '0.8rem', lineHeight: '1.6' }}>
                <div style={{ marginBottom: '0.2rem' }}>① <strong>Web Dashboard v1.0</strong> — No-Code GUI SaaS 제품</div>
                <div style={{ marginBottom: '0.2rem' }}>② <strong>온프레미스 설치 패키지</strong> — Docker 원클릭 + Grid 모듈</div>
                <div>③ <strong>기술 문서·IP</strong> — 특허 출원 1건 + 사용자 매뉴얼</div>
              </div>
            </div>
          </div>

          {/* ── 개발 방법 테이블 (압축) ── */}
          <table className="hwp-table" style={{ marginBottom: '1.2rem' }}>
            <thead>
              <tr>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '28%' }}>개발 항목</th>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '12%' }}>주체</th>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '38%' }}>내용</th>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '22%' }}>일정/비용</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="label" style={{ backgroundColor: ACCENT, fontWeight: '700', fontSize: '0.8rem' }}>Bio-MLOps 핵심 엔진</td>
                <td style={{ textAlign: 'center', fontWeight: '700', fontSize: '0.8rem' }}>대표자</td>
                <td style={{ fontSize: '0.8rem', lineHeight: '1.4' }}>오픈소스 래핑·자동화·온프레미스 패키징·Grid 오케스트레이션</td>
                <td style={{ fontSize: '0.8rem', textAlign: 'center' }}>'26.4~11 (전 기간)</td>
              </tr>
              <tr>
                <td className="label" style={{ backgroundColor: ACCENT, fontWeight: '700', fontSize: '0.8rem' }}>웹 프론트엔드 UI/UX</td>
                <td style={{ textAlign: 'center', fontWeight: '700', fontSize: '0.8rem', color: '#c0392b' }}>외주</td>
                <td style={{ fontSize: '0.8rem', lineHeight: '1.4' }}>No-Code 대시보드 설계·개발·QA·UT</td>
                <td style={{ fontSize: '0.8rem', textAlign: 'center' }}>'26.5~10 (13,500,000원)</td>
              </tr>
              <tr>
                <td className="label" style={{ backgroundColor: ACCENT, fontWeight: '700', fontSize: '0.8rem' }}>특허 출원</td>
                <td style={{ textAlign: 'center', fontWeight: '700', fontSize: '0.8rem', color: '#c0392b' }}>외주</td>
                <td style={{ fontSize: '0.8rem', lineHeight: '1.4' }}>AI 파이프라인 자동화 방법 특허 — 변리사 위탁</td>
                <td style={{ fontSize: '0.8rem', textAlign: 'center' }}>'26.Q3 (3,500,000원)</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* ══════════════════ 2-2. 고객 요구사항 ══════════════════ */}
        <section>
          <h2 className="hwp-subsection-title">2-2. 고객 요구사항 대응 방안</h2>

          <table className="hwp-table" style={{ marginBottom: '1.2rem' }}>
            <thead>
              <tr>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '10%' }}>분류</th>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '45%' }}>고객 Pain Point</th>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '45%' }}>개선 방안</th>
              </tr>
            </thead>
            <tbody>
              {improvementRows.map((r, i) => (
                <tr key={i}>
                  <td className="label" style={{ backgroundColor: ACCENT, fontWeight: '700', fontSize: '0.8rem', textAlign: 'center' }}>{r.cat}</td>
                  <td style={{ fontSize: '0.8rem', lineHeight: '1.5', color: '#c0392b' }}>❌ {r.pain}</td>
                  <td style={{ fontSize: '0.8rem', lineHeight: '1.5', fontWeight: '600' }}>✔ {r.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* ══════════════════ 2-3. 차별화 방안 ══════════════════ */}
        <section>
          <h2 className="hwp-subsection-title">2-3. 제품‧서비스의 차별화 방안 (경쟁력 확보 방안)</h2>

          {/* 경쟁 비교 테이블 */}
          <div style={{ fontWeight: 'bold', fontSize: '0.85rem', marginBottom: '0.5rem', paddingLeft: '2px', fontFamily: 'var(--hwp-font-heading)' }}>
            ■ 경쟁사 비교
          </div>
          <ComparisonTable headers={compHeaders} rows={compRows} />
          <div style={{ marginBottom: '1.2rem' }} />

          {/* 포지셔닝 맵 + 역량 (2열) */}
          <div style={{ display: 'grid', gridTemplateColumns: '55% 45%', gap: '0', marginBottom: '1rem' }}>
            {/* 포지셔닝 맵 */}
            <div style={{ border: '1.5px solid #000', borderRight: 'none', overflow: 'hidden' }}>
              <div style={{
                backgroundColor: '#1e293b', color: '#fff', padding: '0.35rem 0.6rem',
                fontWeight: '700', fontSize: '0.82rem', fontFamily: 'var(--hwp-font-heading)',
                textAlign: 'center', borderBottom: '1px solid #000',
              }}>경쟁사 포지셔닝 맵</div>
              <div style={{ position: 'relative', width: '100%', height: '240px', backgroundColor: '#fafafa' }}>
                {/* White Space */}
                <div style={{
                  position: 'absolute', top: 0, right: 0, width: '50%', height: '50%',
                  backgroundColor: 'rgba(223,230,247,0.35)',
                  borderLeft: '1.5px dashed #b0bdd4', borderBottom: '1.5px dashed #b0bdd4',
                }} />
                <div style={{ position: 'absolute', top: '6px', right: '8px', fontSize: '0.65rem', color: '#1e293b', fontWeight: '700', backgroundColor: 'rgba(223,230,247,0.7)', padding: '0.1rem 0.4rem', border: '1px solid #b0bdd4', zIndex: 5 }}>★ White Space</div>
                {/* 축 라벨 */}
                <div style={{ position: 'absolute', bottom: '3px', left: '50%', transform: 'translateX(-50%)', fontSize: '0.6rem', fontWeight: '700', color: '#999' }}>보안 →</div>
                <div style={{ position: 'absolute', left: '3px', top: '50%', transform: 'translateY(-50%) rotate(-90deg)', fontSize: '0.6rem', fontWeight: '700', color: '#999' }}>편의성 →</div>
                {/* 십자선 */}
                <div style={{ position: 'absolute', top: '50%', left: '30px', right: '8px', height: '1px', backgroundColor: '#ddd' }} />
                <div style={{ position: 'absolute', left: '50%', top: '8px', bottom: '16px', width: '1px', backgroundColor: '#ddd' }} />
                {/* dots */}
                {positioningData.map((p, i) => (
                  <div key={i} style={{
                    position: 'absolute',
                    left: `calc(30px + ${p.x / 100} * (100% - 38px))`,
                    bottom: `calc(16px + ${p.y / 100} * (100% - 24px))`,
                    transform: 'translate(-50%, 50%)', textAlign: 'center', zIndex: p.highlight ? 10 : 2,
                  }}>
                    <div style={{
                      width: p.highlight ? '36px' : '22px', height: p.highlight ? '36px' : '22px',
                      borderRadius: '50%', backgroundColor: p.color,
                      border: p.highlight ? '2.5px solid #000' : '1.5px solid #ccc',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto',
                      boxShadow: p.highlight ? '0 0 0 4px rgba(30,41,59,0.12)' : 'none',
                    }}>
                      {p.highlight && <span style={{ color: '#fff', fontWeight: '700', fontSize: '0.6rem' }}>★</span>}
                    </div>
                    <div style={{ fontSize: p.highlight ? '0.7rem' : '0.55rem', fontWeight: p.highlight ? '800' : '500', marginTop: '2px', fontFamily: 'var(--hwp-font-heading)', color: p.highlight ? '#1e293b' : '#999' }}>{p.name}</div>
                  </div>
                ))}
              </div>
              <div style={{ backgroundColor: ACCENT, padding: '0.35rem 0.6rem', borderTop: '1.5px solid #000', fontSize: '0.78rem', fontWeight: '600' }}>
                → <strong>No-Code + 온프레미스</strong> 우상단에 유일 포지셔닝
              </div>
            </div>

            {/* 보유역량 기반 경쟁력 */}
            <div style={{ border: '1.5px solid #000', overflow: 'hidden' }}>
              <div style={{
                backgroundColor: '#1e293b', color: '#fff', padding: '0.35rem 0.6rem',
                fontWeight: '700', fontSize: '0.82rem', fontFamily: 'var(--hwp-font-heading)',
                textAlign: 'center', borderBottom: '1px solid #000',
              }}>자사 보유역량 기반 경쟁력</div>
              <div style={{ padding: '0.5rem 0.6rem', fontSize: '0.8rem', lineHeight: '1.6' }}>
                {[
                  { cap: 'MLOps·DevOps 경력', plan: '온프레미스 Auto-Setup Engine 직접 개발', effect: '핵심 기술 내재화' },
                  { cap: '오픈소스 래핑 기술', plan: 'Pipeline SDK 14종 파일 호환', effect: '6개월 이상 선점 우위' },
                  { cap: 'Docker 배포 역량', plan: '폐쇄망 원클릭 설치 + Grid 모듈', effect: '온프레미스 시장 독점 공략' },
                  { cap: '특허 2건 예정', plan: 'Auto-Setup + Grid Sharding 출원', effect: '법적 보호 → 모방 차단' },
                ].map((c, i) => (
                  <div key={i} style={{ marginBottom: i < 3 ? '0.5rem' : 0, borderBottom: i < 3 ? '1px dashed #ccc' : 'none', paddingBottom: i < 3 ? '0.5rem' : 0 }}>
                    <div style={{ fontWeight: '700', fontSize: '0.78rem', fontFamily: 'var(--hwp-font-heading)', color: '#1e293b' }}>{c.cap}</div>
                    <div style={{ fontSize: '0.78rem' }}>→ {c.plan}</div>
                    <div style={{ fontSize: '0.75rem', color: '#666', fontWeight: '600' }}>⇒ {c.effect}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default FeasibilityV9;
