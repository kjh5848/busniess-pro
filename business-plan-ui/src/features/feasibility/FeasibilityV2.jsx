import React from 'react';
import ComparisonTable from '../../shared/ui/ComparisonTable';
import uiImage1 from '../../assets/new_step1.png';
import uiImage2 from '../../assets/new_step2.png';
import uiImage3 from '../../assets/new_step3.png';
import flowAsis from '../../assets/flow_asis.png';
import flowEngine from '../../assets/flow_engine.png';
import flowTobe from '../../assets/flow_tobe.png';

const ACCENT = '#dfe6f7';

/* ── 경쟁 비교 테이블 데이터 ── */
const compHeaders = [
  '구분',
  '기존 방식 (해외 S/W 전문가용)',
  '단순 클라우드 (SaaS 플랫폼)',
  '동사 솔루션 (설치형 하이브리드)',
];
const compRows = [
  { label: '활용/의존성', cells: ['코딩/스크립트 기반 조작', '결과 해석 및 변형 한계', '코딩 없이 (1-Click) 모든 화면 연동'] },
  { label: '내부 보안망', cells: ['사내 구축 허용 (On-premise)', '모든 데이터를 외부 서버 전송 (유출 위험)', '완전 인터넷 차단/독립 구축 지원 (보안유지)'] },
  { label: '도입 진입비', cells: ['수억 원대/라이선스당 유지비', '사용량 비례 종량 과금', '구축비 대폭 절감 / 소비자용 GPU 최적화'] },
];

/* ── 포지셔닝 배열 삭제됨 (2x2 매트릭스로 대체) ── */

/* ── 3대 핵심 기술 (구체화) ── */
const techCards = [
  {
    num: '01', keyword: '통합 자동화 파이프라인',
    title: '분산된 AI 모델을 원스톱 시퀀스로 연결',
    points: ['단백질 3D 예측 → 도킹 → 자유에너지 계산 병렬 처리', '단일 패키징 모듈화 (Pipeline Orchestration)'],
  },
  {
    num: '02', keyword: 'On-premise 구축 (폐쇄망)',
    title: '신약 기업의 1순위 조건인 100% 보안 보호',
    points: ['어플리케이션 설치만으로 단독망 환경 내부 구동', '타사 클라우드(웹)로 기밀 화합물 데이터 연결 제로'],
  },
  {
    num: '03', keyword: '비전문가 대상 대시보드 UI',
    title: '복잡한 리눅스(명령어) 대신 브라우저 화면 조작',
    points: ['모든 예측결과 브라우저 차트/3D뷰어 통합', 'IT나 코딩 배경지식 없이 모든 분자 설계 및 분석 실행'],
  },
];

/* ── 사업비 예산 ── */
const budgetItems = [
  { category: '인건비', amount: '4,500', ratio: '45%', desc: '인공지능 파이프라인 검수 및 구조생물학 전담 연구원 1인(핵심 R&D) 채용 (월 500 * 9개월)' },
  { category: '외주용역비', amount: '2,000', ratio: '20%', desc: '비연구원을 위한 노코드(No-code) 시각화 웹 대시보드(Frontend) 프레임워크 연동 외주 비용' },
  { category: '기계장치', amount: '1,000', ratio: '10%', desc: 'AI 모델(딥러닝) 훈련 및 FEP 병렬 시뮬레이션 서버 연동 테스트용 하이엔드 로컬 워크스테이션' },
  { category: '지급수수료', amount: '1,000', ratio: '10%', desc: '초기 클라우드 임차 비용, 데이터베이스 호스팅 비용 및 개발에 필수적인 엔터프라이즈 SW 구독료' },
  { category: '광고선전비', amount: '1,000', ratio: '10%', desc: '시범 사용을 위한 B2B 제약사 영업 랜딩페이지 디자인 및 SaaS 동작 시연 프로모션 영상물' },
  { category: '무형자산 취득', amount: '500', ratio: '5%', desc: '핵심 AI 통합 래핑 자동화 방법 1종 특허 출원비 및 기업 브랜딩 패키지 상표권 신규 출원비' },
];

/* ── 단계별 도형 타임라인 데이터 (시각화용) ── */
const phaseTimeline = [
  {
    phase: '1단계\n기획/설계',
    period: '4월 ~ 5월',
    color: '#3b82f6',
    tasks: ['정부 지원 협약 체결', '오픈소스 엔진 모듈 분석']
  },
  {
    phase: '2단계\n핵심 개발',
    period: '6월 ~ 7월',
    color: '#10b981',
    tasks: ['통합 파이프라인 래핑', 'UI/UX 대시보드 구조화']
  },
  {
    phase: '3단계\n최적화(PoC)',
    period: '8월 ~ 9월',
    color: '#f59e0b',
    tasks: ['사내 독립망 패키징', '비공개 내부 실증 테스트']
  },
  {
    phase: '4단계\n상용화/보호',
    period: '10월 ~ 11월',
    color: '#ef4444',
    tasks: ['연구원 피드백 보완', 'V1.0 정식 런칭 및 특허']
  }
];

const FeasibilityV2 = () => {
  return (
    <div className="v2-theme v2-container">
      <div className="v2-paper">

        <div className="hwp-section-title-tag">
          2. 실현 가능성 (Solution)_창업 아이템의 개발 계획
        </div>

        {/* ══════════════════ 2-1. 구체화 계획 및 일정 ══════════════════ */}
        <section>
          <h2 className="hwp-subsection-title">2-1. 아이디어를 제품·서비스로 개발 또는 구체화 계획</h2>

          <div style={{
            background: '#1e293b', color: '#fff', padding: '0.6rem 1.2rem',
            marginBottom: '1rem', lineHeight: '1.5', fontWeight: '700',
            fontSize: '0.88rem', wordBreak: 'keep-all',
          }}>
            ▶ 흩어진 오픈소스 인공지능(AI) 모델들을 하나의 흐름으로 융합(Orchestration)하여, 컴퓨터 전공자가 아닌 일반 바이오 연구원도 브라우저 클릭만으로 구동 가능한 <strong>'사내 구축형 IT 인프라 솔루션'</strong> 구체화
          </div>

          {/* ── 아키텍처 및 구체화 핵심 시각화 (그래픽 형태) ── */}
          <div style={{ display: 'flex', alignItems: 'stretch', justifyContent: 'space-between', gap: '0.8rem', marginBottom: '1.5rem', marginTop: '0.5rem' }}>
            {/* 기존 환경 */}
            <div style={{ flex: 1, backgroundColor: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '12px', padding: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#64748b', marginBottom: '0.8rem' }}>AS-IS (기존 환경)</div>
              {/* AS-IS 실사 이미지 */}
              <div style={{ width: '100%', height: '80px', marginBottom: '0.6rem', borderRadius: '6px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.05)' }}>
                <img src={flowAsis} alt="AS-IS 복잡한 터미널" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ backgroundColor: '#fff', border: '1px dashed #94a3b8', borderRadius: '8px', padding: '0.6rem', width: '100%', marginBottom: 'auto' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: '700', color: '#475569' }}>오픈소스 모듈 분산</span><br/>
                <span style={{ fontSize: '0.6rem', color: '#64748b' }}>(AlphaFold, DiffDock 등)</span>
              </div>
              <div style={{ fontSize: '0.7rem', color: '#ef4444', fontWeight: '700', marginTop: '0.8rem', wordBreak: 'keep-all' }}>
                복잡한 리눅스 명령어로 인해 일반 연구원 접근 불가
              </div>
            </div>

            {/* 화살표 및 엔진 대상 도형 */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ color: '#94a3b8', fontSize: '1.2rem', marginBottom: '0.2rem' }}>▶</div>
              {/* 엔진 실사 이미지 */}
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', overflow: 'hidden', border: '3px solid #1e293b', marginBottom: '0.4rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.2)' }}>
                <img src={flowEngine} alt="고성능 파이프라인 엔진" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ backgroundColor: '#1e293b', color: '#fff', borderRadius: '50px', padding: '0.4rem 0.8rem', fontWeight: '800', fontSize: '0.7rem', textAlign: 'center', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                파이프라인<br/>통합 엔진
              </div>
              <div style={{ color: '#94a3b8', fontSize: '1.2rem', marginTop: '0.2rem' }}>▶</div>
            </div>

            {/* TO-BE (Target Point) */}
            <div style={{ flex: 1, backgroundColor: '#eff6ff', border: '2px solid #3b82f6', borderRadius: '12px', padding: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: '0 4px 6px -1px rgba(59,130,246,0.2)' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#1d4ed8', marginBottom: '0.8rem' }}>TO-BE (솔루션 도입)</div>
              {/* TO-BE 실사 이미지 */}
              <div style={{ width: '100%', height: '80px', marginBottom: '0.6rem', borderRadius: '6px', overflow: 'hidden', border: '1px solid #bfdbfe', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.05)' }}>
                <img src={flowTobe} alt="TO-BE 깔끔한 웹 대시보드" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ backgroundColor: '#fff', borderRadius: '8px', padding: '0.6rem', width: '100%', marginBottom: 'auto', border: '1px solid #bfdbfe' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: '800', color: '#1e3a8a' }}>웹 1-Click GUI</span><br/>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginTop: '4px' }}>
                  <span style={{ backgroundColor: '#dbeafe', color: '#1e40af', fontSize: '0.6rem', padding: '2px 6px', borderRadius: '10px', fontWeight: 'bold' }}>#노코드</span>
                  <span style={{ backgroundColor: '#dbeafe', color: '#1e40af', fontSize: '0.6rem', padding: '2px 6px', borderRadius: '10px', fontWeight: 'bold' }}>#사내망보안</span>
                </div>
              </div>
              <div style={{ fontSize: '0.7rem', color: '#2563eb', fontWeight: '700', marginTop: '0.8rem', wordBreak: 'keep-all' }}>
                누구나 웹 패널에서 타겟 검증 즉시 완료
              </div>
            </div>
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
                  fontWeight: '700', fontSize: '0.76rem', fontFamily: 'var(--hwp-font-heading)',
                  borderBottom: '1px solid #000', lineHeight: '1.3',
                }}>{tc.title}</div>
                <div style={{ padding: '0.4rem 0.6rem', fontSize: '0.76rem', lineHeight: '1.5', flex: 1 }}>
                  {tc.points.map((p, j) => (
                    <div key={j} style={{ display: 'flex', gap: '0.3rem', marginBottom: j < tc.points.length - 1 ? '0.2rem' : 0 }}>
                      <span style={{ flexShrink: 0 }}>·</span><span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* ── 단계별 실제 시각화 이미지 ── */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem', marginBottom: '1.2rem' }}>
            {[
              { img: uiImage1, label: '【STEP 1】: 서열 예측 해독 단계' },
              { img: uiImage2, label: '【STEP 2】: 스크리닝 도킹 매칭' },
              { img: uiImage3, label: '【STEP 3】: 시뮬레이션 에너지 계산' },
            ].map((s, i) => (
              <div key={i} style={{ border: '1.5px solid #000', overflow: 'hidden' }}>
                <div style={{
                  backgroundColor: ACCENT, padding: '0.25rem 0.5rem',
                  fontWeight: '700', fontSize: '0.72rem', fontFamily: 'var(--hwp-font-heading)',
                  borderBottom: '1px solid #000', textAlign: 'center',
                }}>{s.label}</div>
                <div style={{ height: '110px', overflow: 'hidden' }}>
                  <img src={s.img} alt={s.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
            ))}
          </div>

          {/* ── 부가 시각화: 단계별 도형 타임라인 (�          {/* ── (위 표: 사용자 스크린샷 4열 표) 실현가능성 확보 상세 계획 ── */}
          {/* ── 현재 개발단계 (본 사업 신청 시점 기준) ── */}
          <div style={{ fontWeight: 'bold', fontSize: '0.85rem', marginBottom: '0.4rem', paddingLeft: '2px', fontFamily: 'var(--hwp-font-heading)' }}>
            ■ 현재 개발단계 (본 사업 신청 시점 기준)
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', borderTop: '2px solid #000', borderBottom: '2px solid #000', fontSize: '0.8rem', textAlign: 'center', fontFamily: 'var(--hwp-font-body), "Malgun Gothic", sans-serif' }}>
              <thead>
                <tr style={{ backgroundColor: '#e2e2e2', color: '#000', borderBottom: '1px solid #000' }}>
                  <th style={{ padding: '0.5rem', borderRight: '1px solid #000', width: '20%', fontWeight: '500' }}>아이디어 기획</th>
                  <th style={{ padding: '0.5rem', borderRight: '1px solid #000', width: '20%', fontWeight: '500', color: '#1d4ed8' }}>핵심 기술 확보</th>
                  <th style={{ padding: '0.5rem', borderRight: '1px solid #000', width: '20%', fontWeight: '500' }}>시제품 제작</th>
                  <th style={{ padding: '0.5rem', borderRight: '1px solid #000', width: '20%', fontWeight: '500' }}>테스트·검증</th>
                  <th style={{ padding: '0.5rem', width: '20%', fontWeight: '500' }}>상용화</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #000', backgroundColor: '#fff' }}>
                  <td style={{ padding: '0.4rem', borderRight: '1px solid #000' }}>✓ 완료</td>
                  <td style={{ padding: '0.4rem', borderRight: '1px solid #000', fontWeight: 'bold' }}>▶ 진행중 (60%)</td>
                  <td style={{ padding: '0.4rem', borderRight: '1px solid #000' }}>○ 예정</td>
                  <td style={{ padding: '0.4rem', borderRight: '1px solid #000' }}>○ 예정</td>
                  <td style={{ padding: '0.4rem' }}>○ 예정</td>
                </tr>
                <tr>
                  <td colSpan={5} style={{ padding: '0.6rem 0.8rem', textAlign: 'left', lineHeight: '1.6', fontSize: '0.78rem' }}>
                    1. 아이디어 기획 (완료): AI 신약개발 자동화 플랫폼 컨셉 설계, 타겟 시장·고객군(중소 제약사·연구소) 분석 완료<br/>
                    2. 핵심 기술 확보 (진행중, 60%): Boltz-2(3D 구조 예측) 및 OpenFE(초정밀 시뮬레이션) 등 SOTA 파이프라인 설계 진행 중<br/>
                    3. 시제품 제작 (예정): CLI 기반 백엔드 아키텍처, 웹 기반 No-Code 대시보드 UI는 와이어프레임 설계
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── (위 표: 사용자 스크린샷 4열 표) 실현가능성 확보 상세 계획 ── */}
          <div style={{ fontWeight: 'bold', fontSize: '0.85rem', marginBottom: '0.4rem', paddingLeft: '2px', fontFamily: 'var(--hwp-font-heading)' }}>
            ■ 실현가능성 확보 및 창업 아이템 구체화 세부 추진 계획
          </div>
          <div style={{ marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', borderTop: '2px solid #000', borderBottom: '2px solid #000', fontSize: '0.8rem', textAlign: 'center', fontFamily: 'var(--hwp-font-body), "Malgun Gothic", sans-serif' }}>
              <thead>
                <tr style={{ backgroundColor: '#e2e2e2', color: '#000', borderBottom: '1px solid #000' }}>
                  <th style={{ padding: '0.6rem 0.2rem', borderRight: '1px solid #000', borderLeft: '1px solid #000', width: '8%', fontWeight: '500' }}>구분</th>
                  <th style={{ padding: '0.6rem 0.2rem', borderRight: '1px solid #000', width: '30%', fontWeight: '500' }}>추진 내용</th>
                  <th style={{ padding: '0.6rem 0.2rem', borderRight: '1px solid #000', width: '22%', fontWeight: '500' }}>추진 기간</th>
                  <th style={{ padding: '0.6rem 0.2rem', borderRight: '1px solid #000', fontWeight: '500' }}>세부 내용</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { no: '1', title: '기획 및 엔진 구조화 설계', period: '26.04.01 ~ 26.05.31', detail: '사업 협약 체결 및 오픈소스 모듈 분석/가공' },
                  { no: '2', title: '통합 파이프라인 및 UI구축', period: '26.06.01 ~ 26.07.31', detail: '도커 기반 엔진 래핑 및 노코드 GUI 대시보드 연동' },
                  { no: '3', title: '소프트웨어 폐쇄망 포팅', period: '26.08.01 ~ 26.09.30', detail: '사내 구축용 패키징(Beta) 및 내부 파일럿 테스트' },
                  { no: '4', title: '솔루션 상용화 및 특허출원', period: '26.10.01 ~ 26.11.30', detail: '피드백 보완형 V1.0 런칭 및 보호 특허 1건 출원' },
                  ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #000', backgroundColor: '#fff' }}>
                    <td style={{ padding: '0.7rem 0.4rem', borderRight: '1px solid #000', borderLeft: '1px solid #000', color: 'blue', fontStyle: 'italic', fontSize: '0.85rem' }}>{row.no}</td>
                    <td style={{ padding: '0.7rem 0.4rem', borderRight: '1px solid #000', color: 'blue', fontStyle: 'italic', fontSize: '0.85rem' }}>{row.title}</td>
                    <td style={{ padding: '0.7rem 0.4rem', borderRight: '1px solid #000', color: 'blue', fontStyle: 'italic', fontSize: '0.85rem' }}>{row.period}</td>
                    <td style={{ padding: '0.7rem 0.4rem', borderRight: '1px solid #000', color: 'blue', fontStyle: 'italic', fontSize: '0.85rem' }}>{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── 일정표: < 사업추진 일정(협약기간 내) > Gantt 차트 형식 ── */}
          <div style={{ fontWeight: 'bold', fontSize: '0.85rem', marginBottom: '0.4rem', paddingLeft: '2px', fontFamily: 'var(--hwp-font-heading)' }}>
            {'< 사업추진 일정(협약기간 내) >'}
          </div>
          <div style={{ marginBottom: '1.5rem', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', border: '1.5px solid #000', fontSize: '0.75rem', textAlign: 'center', minWidth: '600px', fontFamily: 'var(--hwp-font-body), "Malgun Gothic", sans-serif' }}>
              <thead>
                <tr style={{ backgroundColor: '#e2e2e2', color: '#000', borderBottom: '1px solid #000' }}>
                  <th style={{ padding: '0.5rem', borderRight: '1px solid #ccc', width: '16%', fontWeight: '700' }}>추진 단계</th>
                  <th style={{ padding: '0.5rem', borderRight: '1px solid #ccc', width: '28%', fontWeight: '700' }}>주요 목표</th>
                  {[4, 5, 6, 7, 8, 9, 10, 11].map(m => (
                    <th key={m} style={{ padding: '0.5rem', borderRight: '1px solid #ccc', width: '7%', fontWeight: '700' }}>{m}월</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {phaseTimeline.map((row, i) => {
                  const startMonth = 4 + (i * 2);
                  const endMonth = 5 + (i * 2);
                  const qLabel = `Q${i+1}`;
                  
                  return (
                    <tr key={i} style={{ borderBottom: '1px solid #ccc', backgroundColor: '#fff' }}>
                      <td style={{ padding: '0.5rem', borderRight: '1px solid #ccc', fontWeight: '800', color: '#1e3a8a', whiteSpace: 'pre-line' }}>{qLabel}\n{row.phase.split('\n')[1]}</td>
                      <td style={{ padding: '0.5rem', borderRight: '1px solid #ccc', textAlign: 'left', lineHeight: '1.4' }}>
                        {row.tasks.map((t, j) => <div key={j} style={{ color: '#1e3a8a' }}>· {t}</div>)}
                      </td>
                      {[4, 5, 6, 7, 8, 9, 10, 11].map(m => {
                        const isActive = m >= startMonth && m <= endMonth;
                        return (
                          <td key={m} style={{ borderRight: '1px solid #ccc', padding: '0.3rem', verticalAlign: 'middle' }}>
                            {isActive ? (
                              <div style={{ backgroundColor: '#1e3a8a', height: '14px', borderRadius: '3px', width: '100%' }}></div>
                            ) : null}
                          </td>
                        );
                      })}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          </section>




        {/* ══════════════════ 2-2. 차별성 및 경쟁력 확보 전략 ══════════════════ */}
        <section>
          <h2 className="hwp-subsection-title" style={{ marginBottom: '1.2rem' }}>2-2. 창업 아이템의 차별성 및 경쟁력 확보 전략</h2>
          
          <div style={{ marginBottom: '2.5rem' }}>
            
            {/* ── 시장 내 혁신적 포지셔닝 (2x2 Matrix) ── */}
            <div style={{
              backgroundColor: '#e2e2e2', color: '#000', padding: '0.4rem 0.6rem',
              fontWeight: 'bold', fontSize: '0.85rem', fontFamily: 'var(--hwp-font-heading)',
              borderTop: '2px solid #000', borderBottom: '1px solid #000', marginBottom: '1.2rem',
              textAlign: 'center'
            }}>시장 내 혁신적 포지셔닝 및 초격차(Super Gap) 전략</div>
            
            <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem', alignItems: 'stretch' }}>
              
              {/* 왼쪽: 2x2 Matrix */}
              <div style={{ flex: '1.2', border: '1.5px solid #000', backgroundColor: '#fff', position: 'relative', display: 'flex', flexDirection: 'column', padding: '1.5rem 1.5rem 2.5rem 2.5rem' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '1rem', textAlign: 'center', fontFamily: 'var(--hwp-font-heading)' }}>[솔루션 패러다임 전환 2x2 Matrix]</div>
                
                {/* Y축 레이블 */}
                <div style={{ position: 'absolute', top: '55%', left: '-10px', transform: 'translateY(-50%) rotate(-90deg)', fontWeight: 'bold', fontSize: '0.75rem', color: '#444' }}>
                  사내망 보호 및 보수성 ➔
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '6px', flex: 1, backgroundColor: '#cbd5e1', padding: '6px', position: 'relative', minHeight: '200px' }}>
                  
                  {/* Q1: 높은 보안, 낮은 경제성 */}
                  <div style={{ backgroundColor: '#f8fafc', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '1rem', textAlign: 'center' }}>
                    <div style={{ fontSize: '0.9rem', fontWeight: '900', color: '#64748b' }}>기존 S/W (S사)</div>
                    <div style={{ fontSize: '0.7rem', color: '#64748b', marginTop: '0.4rem' }}>보안 강력 / 초고가·CLI</div>
                  </div>
                  
                  {/* Q2: 타겟 블루오션 */}
                  <div style={{ backgroundColor: '#eff6ff', border: '3px solid #1d4ed8', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '1rem', textAlign: 'center', position: 'relative', boxShadow: 'inset 0 0 15px rgba(29,78,216,0.15)' }}>
                    <div style={{ position: 'absolute', top: '-10px', backgroundColor: '#ef4444', color: '#fff', fontSize: '0.65rem', fontWeight: 'bold', padding: '2px 8px', borderRadius: '12px' }}>Target Blue Ocean</div>
                    <div style={{ fontSize: '1.1rem', fontWeight: '900', color: '#1d4ed8', marginTop: '0.2rem' }}>동사 솔루션</div>
                    <div style={{ fontSize: '0.75rem', color: '#1e3a8a', marginTop: '0.5rem', fontWeight: 'bold' }}>100% 보안 / No-code / 저비용</div>
                  </div>
                  
                  {/* Q3: 낮은 보안, 낮은 경제성 */}
                  <div style={{ backgroundColor: '#f8fafc', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>(해당 없음)</span>
                  </div>
                  
                  {/* Q4: 낮은 보안, 높은 경제성 */}
                  <div style={{ backgroundColor: '#f8fafc', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '1rem', textAlign: 'center' }}>
                    <div style={{ fontSize: '0.9rem', fontWeight: '900', color: '#64748b' }}>퍼블릭 클라우드</div>
                    <div style={{ fontSize: '0.7rem', color: '#64748b', marginTop: '0.4rem' }}>저비용 / 기밀 유출 위험</div>
                  </div>
                  
                  {/* 축 크로스 라인 */}
                  <div style={{ position: 'absolute', top: '50%', left: '0', right: '0', borderTop: '2px dashed #94a3b8' }}></div>
                  <div style={{ position: 'absolute', top: '0', bottom: '0', left: '50%', borderLeft: '2px dashed #94a3b8' }}></div>
                </div>
                
                {/* X축 레이블 */}
                <div style={{ position: 'absolute', bottom: '8px', left: '0', right: '0', textAlign: 'center', fontWeight: 'bold', fontSize: '0.75rem', color: '#444' }}>
                  사용자 접근성 및 경제성 ➔
                </div>
              </div>

              {/* 오른쪽: 3대 핵심 초격차 카드 */}
              <div style={{ flex: '1.8', display: 'flex', flexDirection: 'column', gap: '0.8rem', justifyContent: 'space-between' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#1e3a8a', textAlign: 'center', fontFamily: 'var(--hwp-font-heading)', paddingBottom: '0.3rem', borderBottom: '1.5px solid #000' }}>[3대 핵심 초격차 역량 (Super Gap)]</div>
                
                {/* Card 1 */}
                <div style={{ display: 'flex', border: '1px solid #94a3b8', backgroundColor: '#f8fafc', height: '100%' }}>
                  <div style={{ width: '70px', backgroundColor: '#1e3a8a', color: '#fff', padding: '0.4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                    <div style={{ fontSize: '1rem', fontWeight: '900' }}>01</div>
                    <div style={{ fontSize: '0.7rem', fontWeight: 'bold', marginTop: '0.2rem' }}>완벽 보안</div>
                  </div>
                  <div style={{ padding: '0.6rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#000', marginBottom: '0.2rem' }}>기밀 데이터 유출(Data Leak) 원천 차단</div>
                    <div style={{ fontSize: '0.75rem', color: '#444', lineHeight: '1.4', wordBreak: 'keep-all' }}>퍼블릭 클라우드의 치명적 단점인 데이터 탈취 리스크를 원천 해결. 외부망이 차단된 <strong style={{color:'#1e3a8a'}}>100% On-premise(사내구축형) 아키텍처</strong> 적용.</div>
                  </div>
                </div>

                {/* Card 2 */}
                <div style={{ display: 'flex', border: '1px solid #94a3b8', backgroundColor: '#f8fafc', height: '100%' }}>
                  <div style={{ width: '70px', backgroundColor: '#2563eb', color: '#fff', padding: '0.4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                    <div style={{ fontSize: '1rem', fontWeight: '900' }}>02</div>
                    <div style={{ fontSize: '0.7rem', fontWeight: 'bold', marginTop: '0.2rem' }}>조작 혁신</div>
                  </div>
                  <div style={{ padding: '0.6rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#000', marginBottom: '0.2rem' }}>비전공 연구원의 진입장벽 완전 해소</div>
                    <div style={{ fontSize: '0.75rem', color: '#444', lineHeight: '1.4', wordBreak: 'keep-all' }}>블랙박스형 리눅스(CLI) 시대를 종결. 코딩 지식 없이 브라우저 <strong style={{color:'#2563eb'}}>1-Click 클릭</strong>만으로 복잡한 파이프라인 즉각 제어 (No-code UI).</div>
                  </div>
                </div>

                {/* Card 3 */}
                <div style={{ display: 'flex', border: '1px solid #94a3b8', backgroundColor: '#f8fafc', height: '100%' }}>
                  <div style={{ width: '70px', backgroundColor: '#3b82f6', color: '#fff', padding: '0.4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                    <div style={{ fontSize: '1rem', fontWeight: '900' }}>03</div>
                    <div style={{ fontSize: '0.7rem', fontWeight: 'bold', marginTop: '0.2rem' }}>비용 파괴</div>
                  </div>
                  <div style={{ padding: '0.6rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#000', marginBottom: '0.2rem' }}>초기 원천 기술 확보 시간 및 비용 급감</div>
                    <div style={{ fontSize: '0.75rem', color: '#444', lineHeight: '1.4', wordBreak: 'keep-all' }}>연간 억대 라이선스 및 초고가 서버 족쇄 탈피. 자체 엔진 경량화를 통해 <strong style={{color:'#3b82f6'}}>소비자급 단일 GPU 워크스테이션</strong>에서도 완벽 구동.</div>
                  </div>
                </div>

              </div>
            </div>

            {/* 글상자 UI (결론) */}
            <div style={{ border: '1.5px solid #000', padding: '0.8rem 1rem', display: 'flex', alignItems: 'center', gap: '1rem', backgroundColor: '#fcfcfc' }}>
              <div style={{ fontWeight: 'bold', fontSize: '0.9rem', borderRight: '1px solid #ccc', paddingRight: '1rem', whiteSpace: 'nowrap', fontFamily: 'var(--hwp-font-heading)', color: '#1e3a8a' }}>결론 및 시사점</div>
              <div style={{ fontSize: '0.8rem', lineHeight: '1.6', wordBreak: 'keep-all', fontFamily: 'var(--hwp-font-body)' }}>
                기존 시장에서는 <strong>'완벽한 사내 보안(On-premise)'</strong>과 <strong>'사용자 편의성(웹 GUI)'</strong>이 구조상 상호 배타적(Trade-off) 한계로 작용해왔음. 본 아이템은 <strong>독립 폐쇄망 포팅 기술과 노코드(No-code) 파이프라인 제어 기술을 융합</strong>하여 이러한 물리적 한계를 기술적으로 해결함. 기밀 유지가 절대적인 타겟 시장에서 타 솔루션이 단기간에 모방하기 어려운 <strong>확고한 기술적 진입장벽(Super Gap)</strong> 구축이 가능함.
              </div>
            </div>
          </div>
        </section>





        {/* ══════════════════ 2-3. 정부지원사업비 집행 계획 ══════════════════ */}
        <section>
          <h2 className="hwp-subsection-title" style={{ marginBottom: '1.2rem' }}>2-3. 정부지원사업비 집행 계획</h2>

          {/* 1단계 집행계획 */}
          <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '0.6rem', fontFamily: 'var(--hwp-font-heading)' }}>
            &lt; 1단계 정부지원사업비 집행계획 &gt;
          </div>
          <div style={{ border: '1px dotted #3b82f6', padding: '0.6rem', marginBottom: '1rem', backgroundColor: '#f8faff' }}>
            <span style={{ color: '#2563eb', fontSize: '0.85rem', fontWeight: 'bold' }}>※ 1단계 정부지원사업비는 20백만원 내외로 작성</span>
          </div>

          <table style={{ width: '100%', borderCollapse: 'collapse', borderTop: '2px solid #000', borderBottom: '2px solid #000', marginBottom: '2.5rem', fontSize: '0.85rem', fontFamily: 'var(--hwp-font-body)' }}>
            <thead>
              <tr style={{ backgroundColor: '#e2e2e2', borderBottom: '1px solid #000' }}>
                <th style={{ padding: '0.6rem', borderRight: '1px solid #000', width: '20%', fontWeight: 'bold' }}>비 목</th>
                <th style={{ padding: '0.6rem', borderRight: '1px solid #000', width: '55%', fontWeight: 'bold' }}>산출 근거</th>
                <th style={{ padding: '0.6rem', width: '25%', fontWeight: 'bold' }}>정부지원사업비(원)</th>
              </tr>
            </thead>
            <tbody>
              {/* Row 1: 무형자산취득비 */}
              <tr style={{ borderBottom: '1px solid #000' }}>
                <td style={{ padding: '0.6rem', borderRight: '1px solid #000', textAlign: 'center', color: '#1e3a8a', fontStyle: 'italic', fontWeight: 'bold' }}>무형자산취득비</td>
                <td style={{ padding: '0.6rem', borderRight: '1px solid #000', color: '#1d4ed8', fontStyle: 'italic', lineHeight: '1.5' }}>
                  <div>• 파이프라인 통합 아키텍처 및 1-Click UI 특허 출원비 (1건 × 5,000,000원)</div>
                </td>
                <td style={{ padding: '0.6rem', textAlign: 'right', color: '#1d4ed8', fontStyle: 'italic', letterSpacing: '0.5px' }}>
                  <div>5,000,000</div>
                </td>
              </tr>
              {/* Row 2: 지급수수료 */}
              <tr style={{ borderBottom: '1px solid #000' }}>
                <td style={{ padding: '0.6rem', borderRight: '1px solid #000', textAlign: 'center', color: '#1e3a8a', fontStyle: 'italic', fontWeight: 'bold' }}>지급수수료</td>
                <td style={{ padding: '0.6rem', borderRight: '1px solid #000', color: '#1d4ed8', fontStyle: 'italic', lineHeight: '1.5' }}>
                  <div>• 초기 테스트 아키텍처 AWS 클라우드 임차료 (500,000원 × 6개월)</div>
                </td>
                <td style={{ padding: '0.6rem', textAlign: 'right', color: '#1d4ed8', fontStyle: 'italic', letterSpacing: '0.5px' }}>
                  <div>3,000,000</div>
                </td>
              </tr>
              {/* Row 3: 기계장치 */}
              <tr style={{ borderBottom: '1px solid #000' }}>
                <td style={{ padding: '0.6rem', borderRight: '1px solid #000', textAlign: 'center', color: '#1e3a8a', fontStyle: 'italic', fontWeight: 'bold' }}>기계장치</td>
                <td style={{ padding: '0.6rem', borderRight: '1px solid #000', color: '#1d4ed8', fontStyle: 'italic', lineHeight: '1.5' }}>
                  <div>• 시뮬레이션 구조 검증용 고성능 GPU 로컬 서버 부품 (1세트 × 12,000,000원)</div>
                </td>
                <td style={{ padding: '0.6rem', textAlign: 'right', color: '#1d4ed8', fontStyle: 'italic', letterSpacing: '0.5px' }}>
                  <div>12,000,000</div>
                </td>
              </tr>
              {/* Total */}
              <tr style={{ backgroundColor: '#e2e2e2', fontWeight: 'bold' }}>
                <td colSpan={2} style={{ padding: '0.6rem', borderRight: '1px solid #000', textAlign: 'center', letterSpacing: '2rem', paddingLeft: '2.6rem' }}>합계</td>
                <td style={{ padding: '0.6rem', textAlign: 'right', letterSpacing: '0.5px' }}>20,000,000</td>
              </tr>
            </tbody>
          </table>

          {/* 2단계 집행계획 */}
          <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '0.6rem', fontFamily: 'var(--hwp-font-heading)' }}>
            &lt; 2단계 정부지원사업비 집행계획 &gt;
          </div>
          <div style={{ border: '1px dotted #3b82f6', padding: '0.6rem', marginBottom: '1rem', backgroundColor: '#f8faff' }}>
            <span style={{ color: '#2563eb', fontSize: '0.85rem', fontWeight: 'bold' }}>※ 2단계 정부지원사업비는 20백만원 내외로 작성</span>
          </div>

          <table style={{ width: '100%', borderCollapse: 'collapse', borderTop: '2px solid #000', borderBottom: '2px solid #000', marginBottom: '1.5rem', fontSize: '0.85rem', fontFamily: 'var(--hwp-font-body)' }}>
            <thead>
              <tr style={{ backgroundColor: '#e2e2e2', borderBottom: '1px solid #000' }}>
                <th style={{ padding: '0.6rem', borderRight: '1px solid #000', width: '20%', fontWeight: 'bold' }}>비 목</th>
                <th style={{ padding: '0.6rem', borderRight: '1px solid #000', width: '55%', fontWeight: 'bold' }}>산출 근거</th>
                <th style={{ padding: '0.6rem', width: '25%', fontWeight: 'bold' }}>정부지원사업비(원)</th>
              </tr>
            </thead>
            <tbody>
              {/* Row 1: 재료비 */}
              <tr style={{ borderBottom: '1px solid #000' }}>
                <td style={{ padding: '0.6rem', borderRight: '1px solid #000', textAlign: 'center', color: '#1e3a8a', fontStyle: 'italic', fontWeight: 'bold' }}>재료비</td>
                <td style={{ padding: '0.6rem', borderRight: '1px solid #000', color: '#1d4ed8', fontStyle: 'italic', lineHeight: '1.5' }}>
                  <div style={{ marginBottom: '0.3rem' }}>• 시뮬레이션용 상용 DB 라이브러리 구입 (1식 × 3,000,000원)</div>
                  <div>• 단독망 연동 패키징 서버용 필수 모듈 구입 (1식 × 5,000,000원)</div>
                </td>
                <td style={{ padding: '0.6rem', textAlign: 'right', color: '#1d4ed8', fontStyle: 'italic', letterSpacing: '0.5px' }}>
                  <div style={{ marginBottom: '0.3rem' }}>3,000,000</div>
                  <div>5,000,000</div>
                </td>
              </tr>
              {/* Row 2: 외주용역비 */}
              <tr style={{ borderBottom: '1px solid #000' }}>
                <td style={{ padding: '0.6rem', borderRight: '1px solid #000', textAlign: 'center', color: '#1e3a8a', fontStyle: 'italic', fontWeight: 'bold' }}>외주용역비</td>
                <td style={{ padding: '0.6rem', borderRight: '1px solid #000', color: '#1d4ed8', fontStyle: 'italic', lineHeight: '1.5' }}>
                  <div>• 통합 엔진 노코드 웹 프론트엔드 연동 개발 (1건 × 10,000,000원)</div>
                </td>
                <td style={{ padding: '0.6rem', textAlign: 'right', color: '#1d4ed8', fontStyle: 'italic', letterSpacing: '0.5px' }}>
                  <div>10,000,000</div>
                </td>
              </tr>
              {/* Row 3: 지급수수료 */}
              <tr style={{ borderBottom: '1px solid #000' }}>
                <td style={{ padding: '0.6rem', borderRight: '1px solid #000', textAlign: 'center', color: '#1e3a8a', fontStyle: 'italic', fontWeight: 'bold' }}>지급수수료</td>
                <td style={{ padding: '0.6rem', borderRight: '1px solid #000', color: '#1d4ed8', fontStyle: 'italic', lineHeight: '1.5' }}>
                  <div>• B2B 솔루션 홍보용 랜딩페이지 초기 세팅 및 호스팅 비용 (1건 × 2,000,000원)</div>
                </td>
                <td style={{ padding: '0.6rem', textAlign: 'right', color: '#1d4ed8', fontStyle: 'italic', letterSpacing: '0.5px' }}>
                  <div>2,000,000</div>
                </td>
              </tr>
              {/* Total */}
              <tr style={{ backgroundColor: '#e2e2e2', fontWeight: 'bold' }}>
                <td colSpan={2} style={{ padding: '0.6rem', borderRight: '1px solid #000', textAlign: 'center', letterSpacing: '2rem', paddingLeft: '2.6rem' }}>합계</td>
                <td style={{ padding: '0.6rem', textAlign: 'right', letterSpacing: '0.5px' }}>20,000,000</td>
              </tr>
            </tbody>
          </table>
        </section>


      </div>
    </div>
  );
};

export default FeasibilityV2;
