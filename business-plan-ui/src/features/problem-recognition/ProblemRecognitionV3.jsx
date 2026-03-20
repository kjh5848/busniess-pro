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

/* ── 4대 진입장벽 (시장 문제점) ── */
const barriers = [
  { num: '01', title: '살인적 라이선스 과금', desc: '해외 독점 AI SW 수억~수십억 원 → 중소 제약사 예산 확보 절대 불가' },
  { num: '02', title: '전문 IT 운영인력 부재', desc: '무료 AI가 공개되어도 리눅스 및 GPU 서버를 직접 구축할 수 있는 전산 인력 전무' },
  { num: '03', title: '데이터 유출(보안) 우려', desc: '기밀 자산을 외부 클라우드(웹)에 업로드 불가능 → 보수적 제약사의 도입 거부' },
  { num: '04', title: '고가 장비 인프라 독점', desc: '고사양 학습용 AI 서버(H100 등) 대당 수천만 원 → 중소 연구 기관 확보 불가' },
];

/* ── 3대 가치 제안 (해결책) ── */
const valueProps = [
  { num: '가', title: '1-Click AI 설치', desc: '코딩 없이 버튼 한 번으로 최신 딥러닝 설치 완료' },
  { num: '나', title: '자체 구축형 폐쇄망', desc: '인터넷 없이 회사 내부에 독립 구동 (기밀 보호)' },
  { num: '다', title: '소비자용 GPU 최적화', desc: '수억 원대 서버 대신 RTX 4090 등 보급형 장비로 구동' },
];

const ProblemRecognitionV3 = () => {
  return (
    <div className="v2-theme v2-container">
      <div className="v2-paper">

        <div className="hwp-section-title-tag">
          1. 문제 인식 (Problem)_창업 아이템의 필요성
        </div>

        {/* 1-1. 창업 아이템의 국내·외 시장 현황 및 문제점 */}
        <section>
          <h2 className="hwp-subsection-title">1-1. 창업 아이템의 국내·외 시장 현황 및 문제점</h2>

          {/* ── 뉴스 기사 + 시장 그래프 (2열) 압축 배치 ── */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem', marginBottom: '1.2rem' }}>
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

            <div style={{ border: '1.5px solid #000', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{
                backgroundColor: '#1e293b', color: '#fff', padding: '0.35rem 0.6rem',
                fontWeight: '700', fontSize: '0.8rem', fontFamily: 'var(--hwp-font-heading)',
                textAlign: 'center', borderBottom: '1px solid #000',
              }}>
                글로벌 시장 규모 전망 (CAGR 30%+)
              </div>
              <div style={{ backgroundColor: '#fafbfc', flex: 1, position: 'relative', minHeight: '190px' }}>
                <div style={{ position: 'absolute', top: '15px', left: 0, right: 0, bottom: '15px', padding: '0 0.5rem' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={marketChartData} margin={{ top: 20, right: 20, bottom: 5, left: 5 }}>
                      <defs>
                        <linearGradient id="mg9" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#1e293b" stopOpacity={0.3} />
                          <stop offset="100%" stopColor="#dfe6f7" stopOpacity={0.1} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="year" fontSize={12} tick={{ fill: '#374151', fontWeight: '700' }} />
                      <YAxis fontSize={11} tick={{ fill: '#6b7280', fontWeight: '600' }} tickFormatter={(v) => `${v}조`} domain={[0, 48]} tickCount={5} />
                      <Tooltip formatter={(val) => [`${val}조 원`, '시장 규모']} />
                      <Area type="monotone" dataKey="size" stroke="#1e293b" strokeWidth={2} fill="url(#mg9)"
                        dot={{ r: 3, fill: '#1e293b', stroke: '#fff', strokeWidth: 1.5 }}>
                        <LabelList dataKey="label" position="top" style={{ fontSize: '0.85rem', fontWeight: '800', fill: '#1e293b' }} offset={8} />
                      </Area>
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>

          {/* ── 4대 진입장벽 (2×2 그리드 압축) ── */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '1.2rem' }}>
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
                <div style={{ padding: '0.4rem 0.6rem', fontSize: '0.78rem', lineHeight: '1.4' }}>
                  {b.desc}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 1-2. 문제 해결을 위한 창업 아이템의 개발 필요성 */}
        <section>
          <h2 className="hwp-subsection-title">1-2. 문제 해결을 위한 창업 아이템의 개발 필요성</h2>

          {/* ── 사업화 목적 (압축) ── */}
          <div style={{ border: '1.5px solid #000', marginBottom: '1rem', overflow: 'hidden' }}>
            <div style={{
              backgroundColor: '#1e293b', color: '#fff', padding: '0.5rem 0.8rem',
              fontWeight: '700', fontSize: '0.86rem', lineHeight: '1.4',
              borderBottom: '1px solid #000', wordBreak: 'keep-all',
            }}>
              "AI 신약개발의 민주화" — 글로벌 대형 제약사들이 독점하던 AI 기술을 중소기업에 보급하여 양극화 해소
            </div>
            <div style={{ padding: '0.5rem 0.8rem', fontSize: '0.82rem', lineHeight: '1.6' }}>
              <div style={{ marginBottom: '0.2rem' }}>· <strong>거대한 미충족 수요:</strong> 중소·중견 제약사의 90% 이상이 비용·인력·보안 장벽으로 AI 신약 개발 도입에 실패 중</div>
              <div style={{ marginBottom: '0.2rem' }}>· <strong>인프라(도구) 공급 전략:</strong> 신약을 직접 개발하는 대신, 다른 기업이 스스로 약을 개발할 수 있도록 강력한 도구(소프트웨어)를 확정적으로 공급해 수익을 냄</div>
              <div>· <strong>적기 타이밍:</strong> 알파폴드 등 훌륭한 오픈소스가 쏟아지지만, 일반 연구원이 이를 쉽게 구동할 자동화 도구는 현재 전무함</div>
            </div>
          </div>

          {/* ── 3대 가치 제안 (가로형 1단 3열 압축) ── */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', marginBottom: '0.5rem' }}>
            {valueProps.map((vp, i) => (
              <div key={i} style={{ border: '1.5px solid #000', overflow: 'hidden' }}>
                <div style={{
                  backgroundColor: '#1e293b', color: '#fff',
                  padding: '0.35rem 0.5rem', display: 'flex', alignItems: 'center', gap: '0.3rem',
                }}>
                  <span style={{ border: '1px solid #fff', padding: '0.02rem 0.2rem', fontSize: '0.65rem', fontWeight: '700' }}>{vp.num}</span>
                  <span style={{ fontWeight: '700', fontSize: '0.75rem', fontFamily: 'var(--hwp-font-heading)' }}>{vp.title}</span>
                </div>
                <div style={{ padding: '0.35rem 0.5rem', fontSize: '0.76rem', lineHeight: '1.4' }}>
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

export default ProblemRecognitionV3;
