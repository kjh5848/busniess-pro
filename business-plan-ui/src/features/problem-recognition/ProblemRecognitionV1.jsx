import React from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, LabelList } from 'recharts';
import newsClippingsImg from '../../assets/news_clippings.png';

const ACCENT = '#dfe6f7';

/* ── 시장 규모 데이터 ── */
const marketChartData = [
  { year: '2021', size: 3.2, label: '3.2조' },
  { year: '2023', size: 5.9, label: '' },
  { year: '2025(E)', size: 11.0, label: '11.0조' },
  { year: '2027(E)', size: 22.0, label: '' },
  { year: '2030(E)', size: 41.5, label: '41.5조' },
];

/* ── 4대 진입장벽 ── */
const barriers = [
  { num: '01', title: '살인적 라이선스 과금', desc: '해외 독점 AI SW 수억~수십억 원 → 중소 연구 단위 예산 확보 불가' },
  { num: '02', title: 'IT 전문인력(인공지능 운영관리) 부재', desc: '무료 AI 공개되어도 리눅스·GPU 세팅을 생물학 연구원이 병행 불가' },
  { num: '03', title: '데이터 유출(보안) 우려', desc: '신약 기밀 자산을 클라우드 서비스(웹) 외부 서버에 업로드 → 보수적 제약사 도입 거부' },
  { num: '04', title: '고가 GPU 인프라 독점', desc: '고사양 AI 인프라(H100) 대당 수천만 원 → 중소 기관 확보 불가' },
];

/* ── 3대 가치 제안 ── */
const valueProps = [
  { num: '가', title: '1-Click AI 인프라', desc: 'GitHub 최신 오픈소스를 원클릭 셋업·모듈 조합' },
  { num: '나', title: '자체 구축형 폐쇄망', desc: '폐쇄망 완전 독립 구동, 유출 제로(0)' },
  { num: '다', title: '사내 PC Grid 연산', desc: '유휴 PC 자원 묶어 비용 1/10 절감' },
];

const ProblemRecognitionV1 = () => {
  return (
    <div className="v2-theme v2-container">
      <div className="v2-paper">

        <div className="hwp-section-title-tag">
          1. 문제 인식 (Problem)_창업 아이템의 필요성
        </div>

        <section>
          <h2 className="hwp-subsection-title">1-1. 창업아이템의 개발동기</h2>

          <div style={{
            background: '#1e293b', color: '#fff', padding: '0.8rem 1.2rem',
            marginBottom: '1.2rem', lineHeight: '1.6', fontWeight: '700',
            fontSize: '0.9rem', wordBreak: 'keep-all',
          }}>
            ▶ 우수한 글로벌 AI가 쏟아져도 중소 제약사는 도입 불가능 — 전문 IT 인력 부족, 수십억 서버 구매 불가, 신약 기밀의 클라우드 업로드 불가
          </div>

          {/* ── 4대 진입장벽 (2×2 그리드 압축) ── */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '1.5rem' }}>
            {barriers.map((b, i) => (
              <div key={i} style={{ border: '1.5px solid #000', overflow: 'hidden' }}>
                <div style={{
                  backgroundColor: '#1e293b', color: '#fff',
                  padding: '0.35rem 0.6rem', fontWeight: '700', fontSize: '0.8rem',
                  fontFamily: 'var(--hwp-font-heading)', display: 'flex', alignItems: 'center', gap: '0.4rem',
                }}>
                  <span style={{ border: '1px solid #fff', padding: '0.05rem 0.3rem', fontSize: '0.7rem' }}>{b.num}</span>
                  {b.title}
                </div>
                <div style={{ padding: '0.4rem 0.6rem', fontSize: '0.8rem', lineHeight: '1.5' }}>
                  {b.desc}
                </div>
              </div>
            ))}
          </div>

          {/* ── 대표자 역량 ── */}
          <div style={{ border: '1.5px solid #000', marginBottom: '1.5rem', overflow: 'hidden' }}>
            <div style={{
              backgroundColor: ACCENT, padding: '0.4rem 0.8rem', fontWeight: '700',
              fontSize: '0.85rem', fontFamily: 'var(--hwp-font-heading)', borderBottom: '1px solid #000',
            }}>
              ■ 대표자 역량 및 발굴 배경
            </div>
            <div style={{ padding: '0.6rem 0.8rem', fontSize: '0.84rem', lineHeight: '1.7' }}>
              <div style={{ marginBottom: '0.3rem' }}>
                · <strong>현장 경험:</strong> AI 신약개발 전문기업 팜캐드(PharmCAD)에서 AlphaFold·RDKit·AutoDock 등 오픈소스 AI를 실제 R&amp;D 파이프라인에 통합 운용한 실무 경험 보유
              </div>
              <div style={{ marginBottom: '0.3rem' }}>
                · <strong>문제 체감:</strong> 우수한 AI가 공개되어도 리눅스 환경 구축·의존성 충돌·GPU 세팅 등 IT 장벽이 너무 높아 생물학·화학 전공 연구원이 독자 활용 불가능함을 반복 체감
              </div>
              <div>
                · <strong>가치관:</strong> "AI 신약 기술의 민주화" — 오픈소스를 누구나 쉽게 쓸 수 있는 '곡괭이(인프라)'로 가공·제공하는 것이 핵심 미션
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="hwp-subsection-title">1-2. 창업아이템의 사업화 목적 및 필요성</h2>

          {/* ── 뉴스 기사 + 시장 그래프 (2열) ── */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem', marginBottom: '1.5rem' }}>
            {/* 뉴스 */}
            <div style={{ border: '1.5px solid #000', overflow: 'hidden' }}>
              <div style={{
                backgroundColor: '#1e293b', color: '#fff', padding: '0.35rem 0.6rem',
                fontWeight: '700', fontSize: '0.8rem', fontFamily: 'var(--hwp-font-heading)',
                textAlign: 'center', borderBottom: '1px solid #000',
              }}>
                AI 신약개발 시장 주요 동향
              </div>
              <img src={newsClippingsImg} alt="뉴스" style={{ width: '100%', display: 'block' }} />
            </div>

            {/* 시장 그래프 */}
            <div style={{ border: '1.5px solid #000', overflow: 'hidden' }}>
              <div style={{
                backgroundColor: '#1e293b', color: '#fff', padding: '0.35rem 0.6rem',
                fontWeight: '700', fontSize: '0.8rem', fontFamily: 'var(--hwp-font-heading)',
                textAlign: 'center', borderBottom: '1px solid #000',
              }}>
                글로벌 시장 규모 전망 (CAGR 30%+)
              </div>
              <div style={{ padding: '0.5rem 0.3rem 0.2rem', backgroundColor: '#fafbfc' }}>
                <div style={{ height: 200 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={marketChartData} margin={{ top: 20, right: 20, bottom: 5, left: 5 }}>
                      <defs>
                        <linearGradient id="mg9" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#1e293b" stopOpacity={0.3} />
                          <stop offset="100%" stopColor="#dfe6f7" stopOpacity={0.1} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="year" fontSize={10} tick={{ fill: '#374151', fontWeight: '600' }} />
                      <YAxis fontSize={10} tick={{ fill: '#6b7280' }} tickFormatter={(v) => `${v}조`} domain={[0, 48]} tickCount={5} />
                      <Tooltip formatter={(val) => [`${val}조 원`, '시장 규모']} />
                      <Area type="monotone" dataKey="size" stroke="#1e293b" strokeWidth={2} fill="url(#mg9)"
                        dot={{ r: 3, fill: '#1e293b', stroke: '#fff', strokeWidth: 1.5 }}>
                        <LabelList dataKey="label" position="top" style={{ fontSize: '0.65rem', fontWeight: '700', fill: '#1e293b' }} offset={6} />
                      </Area>
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>

          {/* ── 사업화 목적 (압축) ── */}
          <div style={{ border: '1.5px solid #000', marginBottom: '1.2rem', overflow: 'hidden' }}>
            <div style={{
              backgroundColor: '#1e293b', color: '#fff', padding: '0.6rem 1rem',
              fontWeight: '700', fontSize: '0.86rem', lineHeight: '1.5',
              borderBottom: '1px solid #000', wordBreak: 'keep-all',
            }}>
              "AI 신약개발의 민주화" — 빅파마 독점 AI 인프라를 중소 연구 생태계에 보급하여 기술 양극화를 해소
            </div>
            <div style={{ padding: '0.6rem 0.8rem', fontSize: '0.84rem', lineHeight: '1.7' }}>
              <div style={{ marginBottom: '0.3rem' }}>· <strong>시장 기회:</strong> 중소·중견 제약사의 90% 이상이 비용·인력·보안 장벽으로 AI 전환 실패 중 → 거대한 미충족 수요</div>
              <div style={{ marginBottom: '0.3rem' }}>· <strong>곡괭이(Pick &amp; Shovel) 전략:</strong> AI 파이프라인을 직접 운영하지 않고, 인프라를 팔아 수익을 확보하는 안정적 B2B 모델</div>
              <div>· <strong>타이밍:</strong> AlphaFold 3 등 무료 AI가 쏟아지지만 현장에서 구동할 자동화 도구는 전무 → 지금만 가능한 선점 기회</div>
            </div>
          </div>

          {/* ── 3대 가치 제안 (압축) ── */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem', marginBottom: '0.5rem' }}>
            {valueProps.map((vp, i) => (
              <div key={i} style={{ border: '1.5px solid #000', overflow: 'hidden' }}>
                <div style={{
                  backgroundColor: '#1e293b', color: '#fff',
                  padding: '0.4rem 0.6rem', display: 'flex', alignItems: 'center', gap: '0.4rem',
                }}>
                  <span style={{ border: '1px solid #fff', padding: '0.05rem 0.3rem', fontSize: '0.7rem', fontWeight: '700' }}>{vp.num}</span>
                  <span style={{ fontWeight: '700', fontSize: '0.8rem', fontFamily: 'var(--hwp-font-heading)' }}>{vp.title}</span>
                </div>
                <div style={{ padding: '0.4rem 0.6rem', fontSize: '0.8rem', lineHeight: '1.5' }}>
                  {vp.desc}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default ProblemRecognitionV1;
