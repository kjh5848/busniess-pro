import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LabelList } from 'recharts';
import ArrowFlowLayout from './ui/ArrowFlowLayout';

const ACCENT = '#dfe6f7';

/* ── GTM 4단계 ── */
const gtmSteps = [
  { label: '초기 레퍼런스 확보', sub: '(대학/연구소 무상 배포)' },
  { label: '국내 B2B 실증',      sub: '(바이오 벤처 유료화)' },
  { label: '아시아/중견 확장',    sub: '(SaaS 구독 모델 확산)' },
  { label: '글로벌 스케일업',     sub: '(Big Pharma 파트너십)' },
];

/* ── 시장 규모 TAM/SAM/SOM ── */
const marketSize = [
  { tier: 'TAM', label: '글로벌 AI 신약개발 시장', value: '41.5조 원', year: '2030(E)', color: '#1e293b' },
  { tier: 'SAM', label: '아시아 중소제약사·연구소 대상', value: '4.2조 원', year: '2030(E)', color: '#34495e' },
  { tier: 'SOM', label: '국내 온프레미스·SaaS 초기 침투', value: '420억 원', year: '2028 목표', color: '#5b7fa5' },
];

/* ── TAM/SAM/SOM 차트 데이터 ── */
const tamChartData = [
  { name: 'SOM', value: 420, label: '420억 (국내 초기 침투)' },
  { name: 'SAM', value: 42000, label: '4.2조 (아시아 중소제약사)' },
  { name: 'TAM', value: 415000, label: '41.5조 (글로벌 AI 신약)' },
];

/* ── 경쟁 강도 분석 ── */
const competitionData = [
  { competitor: 'Schrödinger', strength: '물리 엔진 정밀도 최고, GUI(Maestro) 제공', weakness: '고가 라이선스(학술 $7,500~/년), 폐쇄형 자체 엔진(오픈소스 AI 미통합)', threat: '중' },
  { competitor: '히츠(HITS)', strength: '자체 AI 엔진(11조 화합물 DB), 대형 제약사 레퍼런스', weakness: '클라우드 SaaS 전용(온프레미스 미지원), 오픈소스 AI 미지원', threat: '높음' },
  { competitor: '국내 CADD 업체', strength: '한국어 지원', weakness: 'AI 미탑재, 기능 제한적', threat: '낮음' },
];

/* ── 예상 매출 테이블 ── */
const revenueProjection = [
  { period: "'26 하반기", b2c: '0 (무료 베타)', b2b: '0 (PoC)', total: '0', note: '레퍼런스 확보기' },
  { period: "'27 상반기", b2c: '600만', b2b: '3,000만', total: '3,600만', note: 'SaaS 유료 전환' },
  { period: "'27 하반기", b2c: '1,200만', b2b: '8,000만', total: '9,200만', note: 'B2B 1차 계약' },
  { period: "'28", b2c: '3,600만', b2b: '2.4억', total: '2.76억', note: '아시아 확장' },
];

const GrowthV8 = () => {
  return (
    <div className="v2-theme v2-container">
      <div className="v2-paper">

        <div className="hwp-section-title-tag">
          3. 성장전략 (Scale-up)_사업화 추진 전략
        </div>

        {/* ══════════════════ 4-1. 목표시장 분석 ══════════════════ */}
        <section>
          <h2 className="hwp-subsection-title">4-1. 제품·서비스의 목표시장 분석</h2>

          <p className="hwp-guide-text" style={{ marginBottom: '0.8rem' }}>
            ※ 현재 진입한 또는 진출하려는 목표시장의 규모·상황 및 특성, 경쟁 강도, 향후 전망(성장성), 주요 고객 특성 등
          </p>

          {/* ── ① 시장 규모 TAM/SAM/SOM ── */}
          <div style={{ fontWeight: 'bold', fontSize: '0.88rem', marginBottom: '0.6rem', paddingLeft: '2px', fontFamily: 'var(--hwp-font-heading)' }}>
            ■ 목표시장 규모 (TAM → SAM → SOM)
          </div>

          {/* TAM/SAM/SOM 까때기형 바 차트 */}
          <div style={{ border: '1.5px solid #000', marginBottom: '0.8rem', overflow: 'hidden' }}>
            <div style={{
              backgroundColor: '#1e293b', color: '#fff',
              padding: '0.45rem 0.8rem', fontWeight: '700', fontSize: '0.82rem',
              fontFamily: 'var(--hwp-font-heading)', textAlign: 'center',
              borderBottom: '1px solid #000',
            }}>
              TAM → SAM → SOM 시장 규모 (단위: 억 원)
            </div>
            <div style={{ padding: '0.8rem 0.5rem 0.3rem', backgroundColor: '#fff' }}>
              <ResponsiveContainer width="100%" height={160}>
                <BarChart data={tamChartData} layout="vertical" margin={{ top: 5, right: 80, left: 5, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                  <XAxis type="number" hide />
                  <YAxis type="category" dataKey="name" width={45}
                    tick={{ fontSize: 13, fontWeight: 700, fontFamily: 'var(--hwp-font-heading)' }} />
                  <Tooltip formatter={(val) => `${val.toLocaleString()}억 원`} />
                  <Bar dataKey="value" radius={[0, 6, 6, 0]} barSize={32} fill="#1e293b">
                    <LabelList dataKey="label" position="right"
                      style={{ fontSize: '0.78rem', fontWeight: '600', fill: '#1e293b' }} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* TAM/SAM/SOM 카드 (그래프 하단 요약) */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0', marginBottom: '0.8rem' }}>
            {marketSize.map((m, i) => (
              <div key={i} style={{ border: '1.5px solid #000', borderLeft: i === 0 ? '1.5px solid #000' : 'none' }}>
                <div style={{
                  backgroundColor: m.color, color: '#fff',
                  padding: '0.35rem 0.6rem', textAlign: 'center',
                  fontWeight: '700', fontSize: '0.78rem', fontFamily: 'var(--hwp-font-heading)',
                  borderBottom: '1px solid #000',
                }}>
                  {m.tier}
                </div>
                <div style={{ padding: '0.4rem', textAlign: 'center' }}>
                  <div style={{ fontWeight: '700', fontSize: '1rem', fontFamily: 'var(--hwp-font-heading)', color: '#1e293b' }}>{m.value}</div>
                  <div style={{ fontSize: '0.72rem', color: '#555' }}>{m.year}</div>
                  <div style={{ fontSize: '0.72rem', marginTop: '0.1rem', lineHeight: '1.3' }}>{m.label}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ fontSize: '0.78rem', color: '#666', marginBottom: '1.5rem', lineHeight: '1.5' }}>
            *출처: Grand View Research 2024, Markets and Markets AI in Drug Discovery Report. TAM은 글로벌 AI 신약개발 소프트웨어 시장(2030), SAM은 아시아 지역 중소 제약사·연구소 대상, SOM은 국내 온프레미스 + SaaS 초기 침투 가능 시장.
          </div>

          {/* ── ② 경쟁 강도 분석 ── */}
          <div style={{ fontWeight: 'bold', fontSize: '0.88rem', marginBottom: '0.6rem', paddingLeft: '2px', fontFamily: 'var(--hwp-font-heading)' }}>
            ■ 경쟁 강도 분석
          </div>

          <table className="hwp-table" style={{ marginBottom: '1.5rem' }}>
            <thead>
              <tr>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '18%' }}>경쟁자</th>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '30%' }}>강점</th>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '35%' }}>약점</th>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '17%' }}>위협도</th>
              </tr>
            </thead>
            <tbody>
              {competitionData.map((c, i) => (
                <tr key={i}>
                  <td className="label" style={{ backgroundColor: ACCENT, fontWeight: '700', fontSize: '0.82rem' }}>{c.competitor}</td>
                  <td style={{ fontSize: '0.82rem', lineHeight: '1.55' }}>{c.strength}</td>
                  <td style={{ fontSize: '0.82rem', lineHeight: '1.55', color: '#c0392b' }}>{c.weakness}</td>
                  <td style={{ textAlign: 'center', fontWeight: '700', fontSize: '0.82rem' }}>{c.threat}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{
            border: '1.5px solid #000', padding: '0.6rem 0.8rem', marginBottom: '1.5rem',
            fontSize: '0.84rem', lineHeight: '1.7', backgroundColor: '#fafafa',
          }}>
            <span style={{ fontWeight: '700' }}>▶ 경쟁 공백:</span> Schrödinger는 고가 라이선스·폐쇄형 엔진, 히츠(HITS)는 클라우드 전용으로 보안 민감 기관 도입 곤란. <strong>최신 오픈소스 AI 통합 + No-Code 원클릭 + 온프레미스 + 그리드 저비용 연산을 동시 충족하는 제품은 전무</strong>한 상태로, 동사가 공략할 수 있는 명확한 시장 틈새가 존재함.
          </div>

          {/* ── ③ 향후 전망 (성장성) ── */}
          <div style={{ fontWeight: 'bold', fontSize: '0.88rem', marginBottom: '0.6rem', paddingLeft: '2px', fontFamily: 'var(--hwp-font-heading)' }}>
            ■ 향후 전망 (시장 성장성)
          </div>

          <div style={{ border: '1.5px solid #000', marginBottom: '1.5rem', overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: '1px solid #000' }}>
              <div style={{ padding: '0.6rem 0.8rem', borderRight: '1px solid #000', fontSize: '0.84rem', lineHeight: '1.7' }}>
                <div style={{ fontWeight: '700', fontFamily: 'var(--hwp-font-heading)', marginBottom: '0.3rem' }}>시장 성장률</div>
                · 글로벌 AI 신약개발 시장 CAGR <strong>29.4%</strong> (2024~2030)
                <br/>· 국내 바이오 AI R&D 투자 전년 대비 <strong>42% 증가</strong> (2025)
              </div>
              <div style={{ padding: '0.6rem 0.8rem', fontSize: '0.84rem', lineHeight: '1.7' }}>
                <div style={{ fontWeight: '700', fontFamily: 'var(--hwp-font-heading)', marginBottom: '0.3rem' }}>성장 동력</div>
                · 정부 바이오헬스 R&D 예산 <strong>2.3조 원</strong> 편성 (2026)
                <br/>· 제약사 AI 전환 가속 — 대형사 100%, 중소사 45% 도입 의향
              </div>
            </div>
            <div style={{ padding: '0.6rem 0.8rem', fontSize: '0.84rem', lineHeight: '1.7' }}>
              <div style={{ fontWeight: '700', fontFamily: 'var(--hwp-font-heading)', marginBottom: '0.3rem' }}>동사에 미치는 영향</div>
              · 대형사는 자체 개발 가능하나, <strong>중소·중견 제약사와 대학 연구소는 "플러그앤플레이" 형태의 턴키 솔루션</strong>을 필요로 함 → 동사의 핵심 타겟
            </div>
          </div>

          {/* ── ④ 주요 고객 특성 (기존 B2B/B2C 패널) ── */}
          <div style={{ fontWeight: 'bold', fontSize: '0.88rem', marginBottom: '0.6rem', paddingLeft: '2px', fontFamily: 'var(--hwp-font-heading)' }}>
            ■ 주요 고객 특성 (투트랙 공략)
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0', marginBottom: '1.5rem' }}>
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
                <div style={{ fontWeight: '700', marginBottom: '0.4rem', fontFamily: 'var(--hwp-font-heading)' }}>고객 특징</div>
                <div style={{ marginBottom: '0.8rem' }}>국내외 중견·중소 제약사, 국공립 바이오 연구실</div>
                <div style={{ fontWeight: '700', marginBottom: '0.4rem', fontFamily: 'var(--hwp-font-heading)' }}>핵심 수요</div>
                <div style={{ marginBottom: '0.3rem' }}>· AI 도입 시급하나 클라우드 비용·보안 유출·전담 개발조직 부재</div>
                <div style={{ backgroundColor: '#f0f0f0', padding: '0.4rem 0.6rem', fontWeight: '700', fontSize: '0.84rem', marginTop: '0.5rem', borderLeft: '3px solid #000' }}>
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
                <div style={{ fontWeight: '700', marginBottom: '0.4rem', fontFamily: 'var(--hwp-font-heading)' }}>고객 특징</div>
                <div style={{ marginBottom: '0.8rem' }}>논문·기초연구용 AI 필요한 대학원생·포닥·개인 연구자</div>
                <div style={{ fontWeight: '700', marginBottom: '0.4rem', fontFamily: 'var(--hwp-font-heading)' }}>핵심 수요</div>
                <div style={{ marginBottom: '0.3rem' }}>· 서버 구축 권한·자금 없이 랩탑으로 AlphaFold 즉시 구동 필요</div>
                <div style={{ backgroundColor: '#f0f0f0', padding: '0.4rem 0.6rem', fontWeight: '700', fontSize: '0.84rem', marginTop: '0.5rem', borderLeft: '3px solid #000' }}>
                  → 설치 없는 브라우저 즉시 실행 수요 존재
                </div>
              </div>
            </div>
          </div>

          {/* ── ⑤ 고객 요구사항 객관적 근거 ── */}
          <div style={{ fontWeight: 'bold', fontSize: '0.88rem', marginBottom: '0.6rem', paddingLeft: '2px', fontFamily: 'var(--hwp-font-heading)' }}>
            ■ 고객 요구사항 검증 근거 (고객 인터뷰 결과)
          </div>

          <table className="hwp-table" style={{ marginBottom: '1rem' }}>
            <thead>
              <tr>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '15%' }}>검증 방법</th>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '15%' }}>대상</th>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '40%' }}>주요 발견</th>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '30%' }}>시사점</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="label" style={{ backgroundColor: ACCENT, fontWeight: '700', fontSize: '0.82rem' }}>심층 인터뷰</td>
                <td style={{ fontSize: '0.82rem' }}>바이오 연구자 5인</td>
                <td style={{ fontSize: '0.82rem', lineHeight: '1.55' }}>"AI 도구 설치에 2~3일 소요, CLI 사용 불편" (5인 공통)</td>
                <td style={{ fontSize: '0.82rem', lineHeight: '1.55' }}>No-Code GUI + 원클릭 설치 핵심 가치 확인</td>
              </tr>
              <tr>
                <td className="label" style={{ backgroundColor: ACCENT, fontWeight: '700', fontSize: '0.82rem' }}>기업 미팅</td>
                <td style={{ fontSize: '0.82rem' }}>부산 바이오 3사</td>
                <td style={{ fontSize: '0.82rem', lineHeight: '1.55' }}>"클라우드 AI 도입 검토했으나 보안 규정으로 무산" (3사 공통)</td>
                <td style={{ fontSize: '0.82rem', lineHeight: '1.55' }}>온프레미스 설치형 차별화 방향 검증</td>
              </tr>
              <tr>
                <td className="label" style={{ backgroundColor: ACCENT, fontWeight: '700', fontSize: '0.82rem' }}>경쟁사 분석</td>
                <td style={{ fontSize: '0.82rem' }}>사용자 리뷰 50건</td>
                <td style={{ fontSize: '0.82rem', lineHeight: '1.55' }}>Schrödinger 불만 1위: "비용 부담", Galaxy 불만 1위: "보안 우려"</td>
                <td style={{ fontSize: '0.82rem', lineHeight: '1.55' }}>저비용 + 보안 동시 해결 시 경쟁 우위</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* ══════════════════ 4-2. 창업아이템의 개발 사업화 전략 ══════════════════ */}
        <section>
          <h2 className="hwp-subsection-title">4-2. 창업아이템의 개발 사업화 전략</h2>

          <p className="hwp-guide-text" style={{ marginBottom: '0.8rem' }}>
            ※ 창업아이템의 사업화 전략을 구체적으로 기재
          </p>

          {/* ── ① 사업화 로드맵 ── */}
          <div style={{ fontWeight: 'bold', fontSize: '0.88rem', marginBottom: '0.6rem', paddingLeft: '2px', fontFamily: 'var(--hwp-font-heading)' }}>
            ■ 사업화 로드맵
          </div>

          <div style={{ border: '1.5px solid #000', marginBottom: '1.5rem', overflow: 'hidden' }}>
            {[
              { phase: '1단계 (\'26 하반기)', title: '무료 베타 → 레퍼런스 확보', detail: 'B2C SaaS 무료 베타 배포 → 약대·바이오 대학원 연구실 10곳 이상 도입 → 사용 데이터 수집·UX 개선', filled: true },
              { phase: '2단계 (\'27 상반기)', title: 'SaaS 유료화 + B2B PoC', detail: 'B2C 월 구독 전환 (월 3~5만원) → B2B 온프레미스 PoC 파일럿 3사 운영 → 비용 절감 효과 실증', filled: true },
              { phase: '3단계 (\'27 하반기~)', title: 'B2B 계약 본격화', detail: 'PoC 실증 기반 → 중소 제약사 연간 계약 체결 (3,000~5,000만원/건) → 아시아 시장 SaaS 확장', filled: false },
            ].map((st, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '140px 1fr', borderBottom: i < 2 ? '1px solid #000' : 'none' }}>
                <div style={{
                  backgroundColor: st.filled ? '#1e293b' : ACCENT,
                  color: st.filled ? '#fff' : '#000',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  padding: '0.6rem', borderRight: '1px solid #000', fontFamily: 'var(--hwp-font-heading)',
                }}>
                  <div style={{ fontWeight: '700', fontSize: '0.82rem', textAlign: 'center' }}>{st.phase}</div>
                </div>
                <div style={{ padding: '0.6rem 0.8rem', fontSize: '0.84rem', lineHeight: '1.7' }}>
                  <div style={{ fontWeight: '700', marginBottom: '0.2rem' }}>{st.title}</div>
                  <div>{st.detail}</div>
                </div>
              </div>
            ))}
          </div>

          {/* ── ② Revenue Flow (기존) ── */}
          <div style={{ fontWeight: 'bold', fontSize: '0.88rem', marginBottom: '0.6rem', paddingLeft: '2px', fontFamily: 'var(--hwp-font-heading)' }}>
            ■ 수익 모델 — 3대 수익원 (Revenue Flow)
          </div>

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

        {/* ══════════════════ 4-3. 경쟁력 확보 방안 ══════════════════ */}
        <section>
          <h2 className="hwp-subsection-title">4-3. 창업아이템 경쟁력 확보 방안</h2>

          <p className="hwp-guide-text" style={{ marginBottom: '0.8rem' }}>
            ※ 성과지표 달성을 위한 경쟁력 확보 및 방안을 구체적으로 기재
          </p>

          <table className="hwp-table" style={{ marginBottom: '1.5rem' }}>
            <thead>
              <tr>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '18%' }}>성과지표</th>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '28%' }}>경쟁력 확보 전략</th>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '30%' }}>구체적 실행 방안</th>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '24%' }}>기대 효과</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="label" style={{ backgroundColor: ACCENT, fontWeight: '700', fontSize: '0.82rem' }}>아이템<br/>고도화</td>
                <td style={{ fontSize: '0.82rem', lineHeight: '1.55' }}>No-Code GUI + 온프레미스 설치형이라는 유일한 포지션 선점</td>
                <td style={{ fontSize: '0.82rem', lineHeight: '1.55' }}>· Auto-Setup Engine 직접 개발 (대표자 MLOps 역량)<br/>· Pipeline SDK 14종 분자 파일 호환 구현</td>
                <td style={{ fontSize: '0.82rem', lineHeight: '1.55' }}>후발주자 대비 6개월 이상 개발 선점 우위</td>
              </tr>
              <tr>
                <td className="label" style={{ backgroundColor: ACCENT, fontWeight: '700', fontSize: '0.82rem' }}>매출 목표</td>
                <td style={{ fontSize: '0.82rem', lineHeight: '1.55' }}>B2C 생태계 락인 후 B2B 전환으로 고단가 매출 확보</td>
                <td style={{ fontSize: '0.82rem', lineHeight: '1.55' }}>· 무료 베타 → 구독 전환률 30% 목표<br/>· PoC 실증 → B2B 연간 계약 체결</td>
                <td style={{ fontSize: '0.82rem', lineHeight: '1.55' }}>'27년 누적 매출 1.28억 원 달성</td>
              </tr>
              <tr>
                <td className="label" style={{ backgroundColor: ACCENT, fontWeight: '700', fontSize: '0.82rem' }}>지재권<br/>확보</td>
                <td style={{ fontSize: '0.82rem', lineHeight: '1.55' }}>핵심 알고리즘 법적 보호로 경쟁사 모방 차단</td>
                <td style={{ fontSize: '0.82rem', lineHeight: '1.55' }}>· Auto-Setup Engine 특허 출원 1건<br/>· Grid Job Sharding 프로토콜 특허 출원 1건</td>
                <td style={{ fontSize: '0.82rem', lineHeight: '1.55' }}>기술 장벽 구축 + IP 자산 가치 확보</td>
              </tr>
              <tr>
                <td className="label" style={{ backgroundColor: ACCENT, fontWeight: '700', fontSize: '0.82rem' }}>고용 목표</td>
                <td style={{ fontSize: '0.82rem', lineHeight: '1.55' }}>핵심 인력 조기 확보로 제품 개발 속도 가속</td>
                <td style={{ fontSize: '0.82rem', lineHeight: '1.55' }}>· 클라우드 인프라 엔지니어 1명 채용<br/>· 데이터 전처리 전문 인재 1명 채용</td>
                <td style={{ fontSize: '0.82rem', lineHeight: '1.55' }}>'26.06까지 2명 채용 완료</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* ══════════════════ 4-4. 자금 조달 계획 ══════════════════ */}
        <section>
          <h2 className="hwp-subsection-title">4-4. 자금 조달 계획</h2>

          <p className="hwp-guide-text" style={{ marginBottom: '0.8rem' }}>
            ※ 자금의 필요성, 금액의 적정성 여부를 판단할 수 있도록 사업비(정부지원금+대응자금)의 사용계획 등을 기재
          </p>

          {/* 자금 필요성 및 적정성 근거 */}
          <div style={{ fontWeight: 'bold', fontSize: '0.88rem', marginBottom: '0.6rem', paddingLeft: '2px', fontFamily: 'var(--hwp-font-heading)' }}>
            ■ 자금 필요성 및 적정성 근거
          </div>

          <div style={{ border: '1.5px solid #000', marginBottom: '1.5rem', overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
              <div style={{ borderRight: '1px solid #000' }}>
                <div style={{ backgroundColor: '#1e293b', color: '#fff', padding: '0.45rem 0.6rem', fontWeight: '700', fontSize: '0.82rem', fontFamily: 'var(--hwp-font-heading)', textAlign: 'center', borderBottom: '1px solid #000' }}>
                  자금 필요성
                </div>
                <div style={{ padding: '0.6rem 0.8rem', fontSize: '0.84rem', lineHeight: '1.7' }}>
                  · 예비창업자로 자체 자금 한계 — 핵심 기술은 대표자가 직접 개발하나, <strong>UI/UX 외주 및 특허 출원</strong>은 전문 업체 위탁 필수<br/>
                  · 외주 없이는 비전문 연구자 대상 대시보드 UI 품질 확보 불가<br/>
                  · 특허 미출원 시 경쟁사 모방에 법적 대응 불가능
                </div>
              </div>
              <div>
                <div style={{ backgroundColor: '#1e293b', color: '#fff', padding: '0.45rem 0.6rem', fontWeight: '700', fontSize: '0.82rem', fontFamily: 'var(--hwp-font-heading)', textAlign: 'center', borderBottom: '1px solid #000' }}>
                  금액 적정성
                </div>
                <div style={{ padding: '0.6rem 0.8rem', fontSize: '0.84rem', lineHeight: '1.7' }}>
                  · 외주용역비 항목별 <strong>2,000만원 미만</strong> 분리 발주 → 심의 기준 충족<br/>
                  · 항목별 <strong>2인 이상 견적서</strong> 사전 징구 예정<br/>
                  · 시중 외주 단가 대비 적정 수준 (프론트엔드 개발 시세 반영)
                </div>
              </div>
            </div>
          </div>

          {/* 대응자금 */}
          <div style={{ fontWeight: 'bold', fontSize: '0.88rem', marginBottom: '0.6rem', paddingLeft: '2px', fontFamily: 'var(--hwp-font-heading)' }}>
            ■ 자금 구성 (정부지원금 + 대응자금)
          </div>

          <table className="hwp-table" style={{ marginBottom: '1.5rem' }}>
            <thead>
              <tr>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '25%' }}>구분</th>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '25%' }}>금액</th>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '50%' }}>세부 내용</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="label" style={{ backgroundColor: ACCENT, fontWeight: '700', fontSize: '0.82rem' }}>정부지원금</td>
                <td style={{ fontSize: '0.82rem', fontWeight: '700', textAlign: 'center' }}>20,000,000원</td>
                <td style={{ fontSize: '0.82rem', lineHeight: '1.55' }}>외주용역비 13,500,000원 + 특허출원 3,500,000원 + 광고선전비 3,000,000원</td>
              </tr>
              <tr>
                <td className="label" style={{ backgroundColor: ACCENT, fontWeight: '700', fontSize: '0.82rem' }}>대응자금<br/>(현물)</td>
                <td style={{ fontSize: '0.82rem', fontWeight: '700', textAlign: 'center' }}>대표자 인건비<br/>(현물 계상)</td>
                <td style={{ fontSize: '0.82rem', lineHeight: '1.55' }}>대표자 본인이 Bio-MLOps 핵심 엔진(Auto-Setup, Pipeline SDK, Grid Orchestrator) 직접 개발 — 전 사업기간 풍타임 투입</td>
              </tr>
            </tbody>
          </table>

          <p className="hwp-guide-text" style={{ marginBottom: '0.6rem' }}>
            ※ 사업비(정부지원금+대응자금)의 세부 집행 계획
          </p>

          <div className="hwp-notice-box">
            <p>※ 총 정부 지원금액 : 20,000,000원 (이천만 원)</p>
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
                rowSpan: 3,
                items: [
                  {
                    name: 'UI/UX 와이어프레임 설계 및 디자인 시스템 구축',
                    unit: '4,500,000', qty: '1식', amount: '4,500,000',
                    note: '비전문가 대상 노코드 AI 대시보드 UX Flow·화면 설계·디자인 시스템 외주 제작.',
                  },
                  {
                    name: 'Bio-MLOps 대시보드 웹 프론트엔드 개발 (React)',
                    unit: '6,500,000', qty: '1식', amount: '6,500,000',
                    note: 'AI 파이프라인 조작 대시보드·분자구조 3D 뷰어·작업큐 모니터링·결과리포트 핵심 화면 개발.',
                  },
                  {
                    name: '반응형 웹 최적화 및 사용성 테스트(UT)',
                    unit: '2,500,000', qty: '1식', amount: '2,500,000',
                    note: '크로스브라우저 QA + 대학원생·연구원 대상 MVP UT 시나리오 설계·운영·결과 보고서.',
                  },
                ],
              },
              {
                category: '광고선전비',
                rowSpan: 3,
                items: [
                  {
                    name: '제품 소개 홈페이지 제작',
                    unit: '1,500,000', qty: '1식', amount: '1,500,000',
                    note: 'SaaS 제품 랜딩 페이지·기능 소개·요금제 안내·고객 문의 페이지 제작.',
                  },
                  {
                    name: '제품 홍보 영상 제작',
                    unit: '1,000,000', qty: '1식', amount: '1,000,000',
                    note: '데모데이·바이오 컨퍼런스 발표용 제품 시연 영상(60초) 기획·촬영·편집.',
                  },
                  {
                    name: '온라인 디지털 마케팅 (LinkedIn·학술 SNS)',
                    unit: '500,000', qty: '1식', amount: '500,000',
                    note: '바이오 연구자 타겟 LinkedIn 광고·학술 커뮤니티 스폰서 게시 집행.',
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
                20,000,000
              </div>
              <div style={{ padding: '0.5rem' }}></div>
            </div>
          </div>

          <p className="hwp-guide-text" style={{ marginTop: '0.5rem' }}>
            ※ 외주용역비 전액을 프론트엔드 개발·설계·검증 항목으로만 구성. 각 항목 2,000만원 미만 분리 발주. 항목별 2인 이상 견적서 사전 징구 예정.
          </p>
        </section>

        {/* ══════════════════ 4-5. 시장진입 및 성과 창출 전략 ══════════════════ */}
        <section>
          <h2 className="hwp-subsection-title">4-5. 시장진입 및 성과 창출 전략</h2>

          <p className="hwp-guide-text" style={{ marginBottom: '0.8rem' }}>
            ※ 목표시장에 진출하기 위한 구체적인 방안(생산·출시, 홍보·마케팅, 유통·판매, 인력·네트워크 확보 등) 및 예상 매출금액(표) 등 기재
          </p>

          {/* ── ① GTM 4단계 ── */}
          <div style={{ fontWeight: 'bold', fontSize: '0.88rem', marginBottom: '0.6rem', paddingLeft: '2px', fontFamily: 'var(--hwp-font-heading)' }}>
            ■ GTM(Go-To-Market) 4단계 전략
          </div>

          <ArrowFlowLayout steps={gtmSteps} accentColor={ACCENT} />

          {/* ── ② 세부 진입 전략 테이블 ── */}
          <div style={{ fontWeight: 'bold', fontSize: '0.88rem', marginBottom: '0.6rem', marginTop: '1.5rem', paddingLeft: '2px', fontFamily: 'var(--hwp-font-heading)' }}>
            ■ 세부 시장진입 방안
          </div>

          <table className="hwp-table" style={{ marginBottom: '1.5rem' }}>
            <thead>
              <tr>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '18%' }}>영역</th>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '42%' }}>구체적 방안</th>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '40%' }}>일정 및 KPI</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="label" style={{ backgroundColor: ACCENT, fontWeight: '700', fontSize: '0.82rem' }}>생산·출시</td>
                <td style={{ fontSize: '0.82rem', lineHeight: '1.55' }}>· B2C SaaS 무료 베타 선출시 → 유료 전환<br/>· B2B 온프레미스 패키지 PoC 배포</td>
                <td style={{ fontSize: '0.82rem', lineHeight: '1.55' }}>'26 하반기 베타 출시 / '27 상반기 정식 출시<br/>PoC 파일럿 3사 이상 운영</td>
              </tr>
              <tr>
                <td className="label" style={{ backgroundColor: ACCENT, fontWeight: '700', fontSize: '0.82rem' }}>홍보·<br/>마케팅</td>
                <td style={{ fontSize: '0.82rem', lineHeight: '1.55' }}>· 바이오 학회·컨퍼런스(데모데이) 발표 참가<br/>· LinkedIn·학술 SNS 타겟 디지털 마케팅<br/>· 약대·바이오 대학원 무상 배포 프로그램</td>
                <td style={{ fontSize: '0.82rem', lineHeight: '1.55' }}>'26 데모데이 참가 / '27 바이오 컨퍼런스 2회<br/>LinkedIn 팔로워 500+ 목표<br/>대학원 10곳 이상 도입</td>
              </tr>
              <tr>
                <td className="label" style={{ backgroundColor: ACCENT, fontWeight: '700', fontSize: '0.82rem' }}>유통·판매</td>
                <td style={{ fontSize: '0.82rem', lineHeight: '1.55' }}>· B2C: 자사 웹사이트 직접 판매 (SaaS 구독)<br/>· B2B: 직접 영업 + 바이오 인큐베이터 연계</td>
                <td style={{ fontSize: '0.82rem', lineHeight: '1.55' }}>B2C 구독자 100명+ 목표 ('27)<br/>B2B 연간 계약 3건+ 목표 ('27)</td>
              </tr>
              <tr>
                <td className="label" style={{ backgroundColor: ACCENT, fontWeight: '700', fontSize: '0.82rem' }}>인력·<br/>네트워크</td>
                <td style={{ fontSize: '0.82rem', lineHeight: '1.55' }}>· 클라우드 인프라 엔지니어 + 데이터 전처리 전문 인재 채용<br/>· 부산 바이오 기업·대학 연구실 네트워크 구축<br/>· 창투원·AC 투자 프로그램 참여</td>
                <td style={{ fontSize: '0.82rem', lineHeight: '1.55' }}>'26.06 2명 채용 완료<br/>파트너 기업 5곳 이상 확보<br/>엔젤투자 유치 목표</td>
              </tr>
            </tbody>
          </table>

          {/* ── ③ 예상 매출금액 (표) ── */}
          <div style={{ fontWeight: 'bold', fontSize: '0.88rem', marginBottom: '0.6rem', paddingLeft: '2px', fontFamily: 'var(--hwp-font-heading)' }}>
            ■ 예상 매출금액 (표)
          </div>

          <table className="hwp-table" style={{ marginBottom: '1rem' }}>
            <thead>
              <tr>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '15%' }}>시기</th>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '18%' }}>B2C (SaaS)</th>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '22%' }}>B2B (온프레미스)</th>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '18%' }}>합계</th>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '27%' }}>비고</th>
              </tr>
            </thead>
            <tbody>
              {revenueProjection.map((r, i) => (
                <tr key={i}>
                  <td className="label" style={{ backgroundColor: ACCENT, fontWeight: '700', fontSize: '0.82rem' }}>{r.period}</td>
                  <td style={{ fontSize: '0.82rem', textAlign: 'center' }}>{r.b2c}</td>
                  <td style={{ fontSize: '0.82rem', textAlign: 'center' }}>{r.b2b}</td>
                  <td style={{ fontSize: '0.82rem', textAlign: 'center', fontWeight: '700' }}>{r.total}</td>
                  <td style={{ fontSize: '0.82rem' }}>{r.note}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{
            border: '1.5px solid #000', padding: '0.6rem 0.8rem', marginBottom: '1rem',
            fontSize: '0.84rem', lineHeight: '1.7', backgroundColor: '#fafafa',
          }}>
            <span style={{ fontWeight: '700' }}>▶ 매출 전략 요약:</span> '26년 하반기 무료 베타로 레퍼런스 확보 후, '27년부터 SaaS 유료화 + B2B PoC 실증 → 연간 계약 전환으로 <strong>'28년 누적 매출 2.76억 원</strong> 달성 목표. B2B 온프레미스 계약 단가(3,000~5,000만원/건)가 주요 매출 드라이버.
          </div>
        </section>

      </div>
    </div>
  );
};

export default GrowthV8;
