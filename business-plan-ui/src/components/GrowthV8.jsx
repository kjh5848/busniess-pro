import React from 'react';
import ArrowFlowLayout from './ui/ArrowFlowLayout';

const ACCENT = '#dfe6f7';

/* ── GTM 4단계 ── */
const gtmSteps = [
  { label: '초기 레퍼런스 확보', sub: '(대학/연구소 무상 배포)' },
  { label: '국내 B2B 실증',      sub: '(바이오 벤처 유료화)' },
  { label: '아시아/중견 확장',    sub: '(SaaS 구독 모델 확산)' },
  { label: '글로벌 스케일업',     sub: '(Big Pharma 파트너십)' },
];

const GrowthV8 = () => {
  return (
    <div className="v2-theme v2-container">
      <div className="v2-paper">

        <div className="hwp-section-title-tag">
          3. 성장전략 (Scale-up)_사업화 추진 전략
        </div>

        {/* ══════════════════ 4-1. 목표시장 — 좌우 패널 ══════════════════ */}
        <section>
          <h2 className="hwp-subsection-title">4-1. 제품·서비스의 목표시장 분석</h2>

          <div style={{
            background: '#1e293b', color: '#fff', padding: '1rem 1.5rem',
            marginBottom: '1.2rem', lineHeight: '1.6', fontWeight: '700',
            fontSize: '0.95rem', wordBreak: 'keep-all',
          }}>
            ▶ B2C(SaaS)로 개인 연구자 생태계를 선점한 후, B2B 망분리 온프레미스 고단가 계약을 확보하는 투트랙(Two-Track) 공략
          </div>

          {/* 좌우 패널 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0', marginBottom: '2rem' }}>
            {/* B2B 패널 */}
            <div style={{ border: '1.5px solid #000', borderRight: 'none' }}>
              <div style={{
                backgroundColor: '#1e293b', color: '#fff',
                padding: '0.55rem 0.8rem', fontWeight: '700', fontSize: '0.9rem',
                fontFamily: 'var(--hwp-font-heading)', textAlign: 'center',
                borderBottom: '1px solid #000',
              }}>
                B2B 타겟 (핵심) — Enterprise·SMB
              </div>
              <div style={{ padding: '0.8rem', fontSize: '0.86rem', lineHeight: '1.7' }}>
                <div style={{ fontWeight: '700', marginBottom: '0.4rem', fontFamily: 'var(--hwp-font-heading)' }}>
                  고객 특징
                </div>
                <div style={{ marginBottom: '0.8rem' }}>
                  국내외 중견·중소 제약사, 국공립 바이오 연구실
                </div>
                <div style={{ fontWeight: '700', marginBottom: '0.4rem', fontFamily: 'var(--hwp-font-heading)' }}>
                  핵심 수요
                </div>
                <div style={{ marginBottom: '0.3rem' }}>· AI 도입 시급하나 클라우드 비용·보안 유출·전담 개발조직 부재</div>
                <div style={{
                  backgroundColor: '#f0f0f0', padding: '0.4rem 0.6rem',
                  fontWeight: '700', fontSize: '0.84rem', marginTop: '0.5rem',
                  borderLeft: '3px solid #000',
                }}>
                  → 외부 유출 없는 설치형 온프레미스 수요 높음
                </div>
              </div>
            </div>

            {/* B2C 패널 */}
            <div style={{ border: '1.5px solid #000' }}>
              <div style={{
                backgroundColor: ACCENT,
                padding: '0.55rem 0.8rem', fontWeight: '700', fontSize: '0.9rem',
                fontFamily: 'var(--hwp-font-heading)', textAlign: 'center',
                borderBottom: '1px solid #000',
              }}>
                B2C 타겟 (확장) — Individuals
              </div>
              <div style={{ padding: '0.8rem', fontSize: '0.86rem', lineHeight: '1.7' }}>
                <div style={{ fontWeight: '700', marginBottom: '0.4rem', fontFamily: 'var(--hwp-font-heading)' }}>
                  고객 특징
                </div>
                <div style={{ marginBottom: '0.8rem' }}>
                  논문·기초연구용 AI 필요한 대학원생·포닥·개인 연구자
                </div>
                <div style={{ fontWeight: '700', marginBottom: '0.4rem', fontFamily: 'var(--hwp-font-heading)' }}>
                  핵심 수요
                </div>
                <div style={{ marginBottom: '0.3rem' }}>· 서버 구축 권한·자금 없이 랩탑으로 AlphaFold 즉시 구동 필요</div>
                <div style={{
                  backgroundColor: '#f0f0f0', padding: '0.4rem 0.6rem',
                  fontWeight: '700', fontSize: '0.84rem', marginTop: '0.5rem',
                  borderLeft: '3px solid #000',
                }}>
                  → 설치 없는 브라우저 즉시 실행 수요 존재
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════ 4-2/4-3. BM — Revenue Flow ══════════════════ */}
        <section>
          <h2 className="hwp-subsection-title">4-2 / 4-3. 비즈니스 모델(BM) 및 핵심 수익 전략</h2>

          <p className="hwp-guide-text" style={{ marginBottom: '1rem' }}>
            ※ 보안 민감도별 고객을 완벽히 분리 대응하는 투트랙 하이브리드 수익 모델
          </p>

          {/* Revenue Flow 다이어그램 */}
          <div style={{ border: '1.5px solid #000', marginBottom: '1.5rem', overflow: 'hidden' }}>
            {/* 플로우 헤더 */}
            <div style={{
              backgroundColor: '#1e293b', color: '#fff',
              padding: '0.5rem 0.8rem', fontWeight: '700',
              fontSize: '0.85rem', fontFamily: 'var(--hwp-font-heading)',
              textAlign: 'center', borderBottom: '1px solid #000',
            }}>
              Revenue Flow — 3대 수익원
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
              {[
                {
                  tag: 'B2C Core',
                  title: 'SaaS 구독',
                  revenue: '월/연 구독료',
                  target: '개인 연구자·대학원생',
                  details: ['클라우드 SaaS 초저가 정기 결제', '브라우저 기반 즉시 실행'],
                },
                {
                  tag: 'GPU On-Demand',
                  title: '연산 종량제',
                  revenue: '시간당 과금',
                  target: '고용량 시뮬레이션 수행 시',
                  details: ['H100 GPU 스팟 대여', 'Pay-As-You-Go 방식'],
                },
                {
                  tag: 'B2B 하이엔드',
                  title: 'Enterprise 온프레미스',
                  revenue: '설치비 + 연간 유지보수',
                  target: '보안·커스텀이 필요한 중견 제약사',
                  details: ['초기 설치·구축 3,000~5,000만 원/건', '글로벌 AI 모델 정기 업데이트 라이선스'],
                },
              ].map((item, i) => (
                <div key={i} style={{
                  borderRight: i < 2 ? '1px solid #000' : 'none',
                  display: 'flex', flexDirection: 'column',
                }}>
                  {/* 태그 */}
                  <div style={{
                    backgroundColor: ACCENT, padding: '0.35rem 0.6rem',
                    fontWeight: '700', fontSize: '0.78rem', fontFamily: 'var(--hwp-font-heading)',
                    textAlign: 'center', borderBottom: '1px solid #000',
                  }}>
                    {item.tag}
                  </div>
                  {/* 타이틀 + 수익 */}
                  <div style={{ padding: '0.6rem', flex: 1, fontSize: '0.84rem', lineHeight: '1.6' }}>
                    <div style={{ fontWeight: '700', fontSize: '0.9rem', marginBottom: '0.3rem', fontFamily: 'var(--hwp-font-heading)' }}>
                      {item.title}
                    </div>
                    <div style={{
                      display: 'inline-block', border: '1.5px solid #000',
                      padding: '0.15rem 0.5rem', fontWeight: '700', fontSize: '0.78rem',
                      marginBottom: '0.4rem', fontFamily: 'var(--hwp-font-heading)',
                    }}>
                      💰 {item.revenue}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#555', marginBottom: '0.4rem' }}>
                      {item.target}
                    </div>
                    {item.details.map((d, j) => (
                      <div key={j} style={{ display: 'flex', gap: '0.3rem', fontSize: '0.8rem' }}>
                        <span>·</span><span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════ 4-4. GTM — Timeline ══════════════════ */}
        <section>
          <h2 className="hwp-subsection-title">4-4. 시장진입(GTM) 및 성과 창출 전략</h2>

          <p className="hwp-guide-text" style={{ marginBottom: '0.6rem' }}>
            ※ 4단계 순차 시장 침투 전략 — B2C 생태계 선점 → B2B 고단가 전환
          </p>

          <ArrowFlowLayout steps={gtmSteps} accentColor={ACCENT} />

          {/* ── GTM Timeline 다이어그램 ── */}
          <div style={{ border: '1.5px solid #000', marginTop: '0.75rem', overflow: 'hidden' }}>
            {[
              {
                phase: '1단계',
                phaseSub: 'B2C 브랜딩·생태계 침투',
                filled: true,
                actions: [
                  'B2C SaaS 초저가·무료 베타 선출시 후 약대·바이오대학원생 무상 보급',
                  '버그 리포트·튜닝 데이터 수집 및 UX 익숙화로 자발적 락인(Lock-in) 생태계 조성',
                ],
              },
              {
                phase: '2단계',
                phaseSub: 'B2B 하이엔드 강공',
                filled: false,
                actions: [
                  'B2C 검증 안정성을 무기 삼아 중소 제약사·국공립 연구센터 C-Level 집중 타겟',
                  '"학생 연구원과 동일 성능을 사내 폐쇄망 보안으로 구현" 하향식 POC 도입 제안서 배포',
                ],
              },
            ].map((st, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '140px 1fr',
                borderBottom: i === 0 ? '1px solid #000' : 'none',
              }}>
                {/* 단계 레이블 */}
                <div style={{
                  backgroundColor: st.filled ? '#1e293b' : ACCENT,
                  color: st.filled ? '#fff' : '#000',
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center',
                  padding: '0.6rem', borderRight: '1px solid #000',
                  fontFamily: 'var(--hwp-font-heading)',
                }}>
                  <div style={{ fontWeight: '700', fontSize: '0.95rem' }}>{st.phase}</div>
                  <div style={{ fontSize: '0.72rem', marginTop: '0.2rem', textAlign: 'center', lineHeight: '1.3' }}>
                    {st.phaseSub}
                  </div>
                </div>
                {/* 액션 */}
                <div style={{ padding: '0.6rem 0.8rem', fontSize: '0.86rem', lineHeight: '1.7' }}>
                  {st.actions.map((a, j) => (
                    <div key={j} style={{ display: 'flex', gap: '0.4rem', marginBottom: j < st.actions.length - 1 ? '0.2rem' : 0 }}>
                      <span>·</span><span>{a}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="hwp-divider" />

        {/* ══════════════════ 예산 집행 계획 ══════════════════ */}
        <section>
          <div className="hwp-section-title-tag">
            2-3. 정부지원사업비 집행 계획
          </div>

          <div className="hwp-notice-box">
            <p>※ 총 정부 지원금액 : 50,000,000원 (오천만 원)</p>
            <p>※ 예비창업자 본인 인건비는 사업비로 집행 불가 (현물 계상)</p>
            <p>※ 외주용역비 2천만원 초과 시 주관기관 사전 심의 및 2인 이상 견적서 필요</p>
          </div>

          {/* ── 예산 도식화: 비목별 블록 ── */}
          <div style={{ border: '1.5px solid #000', marginTop: '0.8rem', overflow: 'hidden' }}>
            {/* 헤더 */}
            <div style={{
              display: 'grid', gridTemplateColumns: '12% 28% 12% 8% 15% 1fr',
              backgroundColor: ACCENT, fontWeight: '700', fontSize: '0.82rem',
              fontFamily: 'var(--hwp-font-heading)', textAlign: 'center',
              borderBottom: '1.5px solid #000',
            }}>
              {['비목', '세부 항목', '단가 (원)', '수량', '금액 (원)', '집행 목적 및 근거'].map((h, i) => (
                <div key={i} style={{
                  padding: '0.5rem 0.4rem',
                  borderRight: i < 5 ? '1px solid #000' : 'none',
                }}>
                  {h}
                </div>
              ))}
            </div>

            {/* 데이터 행들 */}
            {[
              {
                category: '특허권 등\n무형자산\n취득비',
                rowSpan: 1,
                items: [
                  {
                    name: '국내 특허 출원 (AI 신약 예측 파이프라인 자동화 방법)',
                    unit: '3,500,000', qty: '1식', amount: '3,500,000',
                    note: 'Bio-MLOps 자동화 파이프라인 핵심기술 권리 보호 목적. 창업자 본인 명의 출원.',
                  },
                ],
              },
              {
                category: '외주용역비',
                rowSpan: 4,
                items: [
                  {
                    name: 'UI/UX 와이어프레임 설계 및 디자인 시스템 구축',
                    unit: '12,000,000', qty: '1식', amount: '12,000,000',
                    note: '비전문가 대상 노코드 AI 대시보드 UX Flow·화면 설계·디자인 시스템 외주 제작.',
                  },
                  {
                    name: 'Bio-MLOps 대시보드 웹 프론트엔드 개발 (React)',
                    unit: '19,000,000', qty: '1식', amount: '19,000,000',
                    note: 'AI 파이프라인 조작 대시보드·분자구조 3D 뷰어·작업큐 모니터링·결과리포트 핵심 화면 개발.',
                  },
                  {
                    name: '반응형 웹 최적화 및 크로스브라우저 QA',
                    unit: '8,500,000', qty: '1식', amount: '8,500,000',
                    note: 'Chrome·Firefox·Edge 호환성 검증·접근성(A11y) 개선·번들 경량화 최적화 수행.',
                  },
                  {
                    name: 'UI 사용성 테스트(UT) 설계 및 운영',
                    unit: '7,000,000', qty: '1식', amount: '7,000,000',
                    note: '대학원생·연구원 대상 MVP 프론트엔드 UT 시나리오 설계·관찰 운영·결과 보고서 납품.',
                  },
                ],
              },
            ].map((group, gi) => (
              <React.Fragment key={gi}>
                {group.items.map((item, ii) => (
                  <div key={ii} style={{
                    display: 'grid', gridTemplateColumns: '12% 28% 12% 8% 15% 1fr',
                    fontSize: '0.82rem', borderBottom: '1px solid #ccc',
                  }}>
                    {ii === 0 && (
                      <div style={{
                        padding: '0.5rem 0.4rem', borderRight: '1px solid #000',
                        fontWeight: '700', fontFamily: 'var(--hwp-font-heading)',
                        textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        gridRow: `span ${group.rowSpan}`,
                        backgroundColor: '#f5f5f5', whiteSpace: 'pre-line', lineHeight: '1.4',
                      }}>
                        {group.category}
                      </div>
                    )}
                    <div style={{ padding: '0.45rem 0.5rem', borderRight: '1px solid #ccc', lineHeight: '1.5' }}>
                      {item.name}
                    </div>
                    <div style={{ padding: '0.45rem 0.4rem', borderRight: '1px solid #ccc', textAlign: 'right' }}>
                      {item.unit}
                    </div>
                    <div style={{ padding: '0.45rem 0.4rem', borderRight: '1px solid #ccc', textAlign: 'center' }}>
                      {item.qty}
                    </div>
                    <div style={{ padding: '0.45rem 0.4rem', borderRight: '1px solid #ccc', textAlign: 'right', fontWeight: '700' }}>
                      {item.amount}
                    </div>
                    <div style={{ padding: '0.45rem 0.5rem', lineHeight: '1.5' }}>
                      {item.note}
                    </div>
                  </div>
                ))}
              </React.Fragment>
            ))}

            {/* 합계 행 */}
            <div style={{
              display: 'grid', gridTemplateColumns: '12% 28% 12% 8% 15% 1fr',
              fontSize: '0.85rem', fontWeight: '700', borderTop: '1.5px solid #000',
              backgroundColor: ACCENT, fontFamily: 'var(--hwp-font-heading)',
            }}>
              <div style={{ gridColumn: 'span 4', padding: '0.5rem', textAlign: 'center', borderRight: '1px solid #000' }}>
                합 계
              </div>
              <div style={{ padding: '0.5rem 0.4rem', textAlign: 'right', borderRight: '1px solid #000' }}>
                50,000,000
              </div>
              <div style={{ padding: '0.5rem' }}></div>
            </div>
          </div>

          <p className="hwp-guide-text" style={{ marginTop: '0.5rem' }}>
            ※ 외주용역비 전액을 프론트엔드 개발·설계·검증 항목으로만 구성. 각 항목 2,000만원 미만 분리 발주. 항목별 2인 이상 견적서 사전 징구 예정.
          </p>
        </section>

      </div>
    </div>
  );
};

export default GrowthV8;
