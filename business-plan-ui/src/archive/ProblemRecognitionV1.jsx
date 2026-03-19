import React from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, LabelList } from 'recharts';
import { FlaskConical, Settings, HeartPulse, Zap, ArrowRight, ArrowDownToLine } from 'lucide-react';
import newsClippingsImg from '../assets/news_clippings.png';
const ACCENT = 'var(--hwp-light)';

/* ── 시장 규모 데이터 ── */
const marketChartData = [
  { year: '2021', size: 3.2, label: '3.2조' },
  { year: '2023', size: 5.9, label: '' },
  { year: '2025(E)', size: 11.0, label: '11.0조' },
  { year: '2027(E)', size: 22.0, label: '' },
  { year: '2030(E)', size: 41.5, label: '41.5조' },
];

/* ── 4대 진입장벽 (명확한 문장형 서술) ── */
const barriers = [
  { num: '01', title: '클라우드 인프라 유지비 폭증', desc: 'R&D 대비 고정비 성격인 IT 인프라 지출(2024년 3분기 115.3% 급증)이 중소 제약사의 치명적인 재무적 부담 가중' },
  { num: '02', title: '슈뢰딩거 등 폐쇄형 솔루션 독점 과금', desc: '보안 문제로 온프레미스 망분리를 고집하나, 연간 수천만 원~수억 원에 달하는 슈뢰딩거 등 외산 상용 소프트웨어 라이선스에 강제 종속' },
  { num: '03', title: 'AI 전산 전문 인력의 부재', desc: 'Boltz-2, AlphaFold 등 최고 수준(SOTA) 최첨단 AI 예측 모델 도입이 필수적이나, 오픈소스를 설치·구동할 AI 전산 전문 인력 확보 절대 불가' },
  { num: '04', title: '비용 폭탄에 의한 기술 소외 장벽', desc: '막대한 자본이 있어야만 AI를 쓸 수 있는 살인적인 소프트웨어 라이선스 관행이, 중소 제약사 신약 개발의 가장 높은 초기 진입 장벽 고착화' },
];

/* ── 3대 가치 제안 (원문 기반) ── */
const valueProps = [
  { num: '가', title: '하이브리드 통합', desc: 'Boltz-2 초고속 스크리닝과 OpenFE 정밀 검증 융합' },
  { num: '나', title: '연구자 친화형 GUI', desc: '파편화된 알고리즘을 하나로 연결하는 사용자 친화적 프로토콜 빌더' },
  { num: '다', title: 'RTX 4090 최적화', desc: '소비자용 GPU 장비 기반 구축으로 인프라 경제성 확보 및 망분리 완결' },
];

const ProblemRecognitionV1 = () => {
  return (
    <div className="v2-theme v2-container">
      <div className="v2-paper">

        <div className="hwp-section-title-tag">
          1. 문제 인식 (Problem)_창업 아이템의 필요성
        </div>

        <section>
          <h2 className="hwp-subsection-title">1-1. 창업 아이템의 국내·외 시장 현황 및 문제점</h2>

          <div style={{
            background: 'var(--hwp-black)', color: 'var(--hwp-white)', padding: '0.8rem 1.2rem',
            marginBottom: '1.2rem', lineHeight: '1.6', fontWeight: '700',
            fontSize: '0.9rem', wordBreak: 'keep-all',
          }}>
            <div style={{ fontSize: '0.95rem', marginBottom: '0.5rem' }}>▶ [비용 장벽 고착화] 중소 제약사, 독점적 AI 인프라 장벽으로 인한 심각한 '기술 소외 현상' 직면</div>
            <ul style={{ margin: 0, paddingLeft: '1.2rem', fontWeight: 'normal', fontSize: '0.85rem', lineHeight: '1.5' }}>
              <li style={{ marginBottom: '0.2rem' }}><strong>살인적 독점 라이선스:</strong> 보안 문제 명목으로 수억 원대 거대 상용 소프트웨어(슈뢰딩거 등) 필수 종속</li>
              <li style={{ marginBottom: '0.2rem' }}><strong>인프라 유지비 폭증:</strong> 클라우드 모델 구동에 따른 IT 고정 유지비 폭발적 증가 및 재무 한계 도달</li>
              <li><strong>S급 전산 인력난:</strong> 최첨단 최상위 오픈소스(Boltz-2 등) 활용용 전문 구동 인력 수급 절대 불가</li>
            </ul>
          </div>

          {/* ── 스트레이캣의 본질적 가치: 프로세스 도식화 다이어그램 (순수 HWP 스타일) ── */}
          <div style={{ marginBottom: '1.5rem', border: 'var(--hwp-border-thick)', backgroundColor: 'var(--hwp-white)' }}>
            <div style={{ backgroundColor: 'var(--hwp-black)', color: 'var(--hwp-white)', padding: '0.6rem 1rem', fontWeight: 'bold', fontSize: '0.92rem', fontFamily: 'var(--hwp-font-heading)', borderBottom: '1px solid var(--hwp-black)' }}>
               ■ 신약 개발 패러다임 전환: "스트레이캣 시스템 도입에 따른 효용 가치"
            </div>
            
            <div style={{ padding: '1rem' }}>
              
              {/* ── 그리드 기반 도식화 (완벽한 상하/좌우 정렬) ── */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'minmax(0, 1fr) 24px minmax(0, 1fr) 36px minmax(0, 1.2fr)', 
                gap: '0.5rem', 
                alignItems: 'stretch' 
              }}>
                
                {/* [1행] AS-IS 헤더 */}
                <div style={{ gridColumn: '1 / 6', backgroundColor: 'var(--hwp-light)', borderTop: '2px solid var(--hwp-black)', borderBottom: '1px solid var(--hwp-gray)', padding: '0.4rem 0.8rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontWeight: 'bold', fontSize: '0.85rem', color: 'var(--hwp-black)' }}>▶ 기존 아날로그 방식 (AS-IS)</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--hwp-dark)', fontWeight: 'bold' }}>총 소요시간 평균 10년~15년</div>
                </div>

                {/* [2행] AS-IS 노드 */}
                <div style={{ border: 'var(--hwp-border-thin)', padding: '0.6rem 0.2rem', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ fontWeight: 'bold', fontSize: '0.75rem', color: 'var(--hwp-black)' }}>1. 타겟 발굴 & 후보 도출</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ArrowRight size={16} color="var(--hwp-gray)" />
                </div>
                <div style={{ border: 'var(--hwp-border-thin)', padding: '0.6rem 0.2rem', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ fontWeight: 'bold', fontSize: '0.75rem', color: 'var(--hwp-black)' }}>2. 선도 물질 최적화</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ArrowRight size={16} color="var(--hwp-gray)" />
                </div>
                <div style={{ border: '1px solid var(--hwp-gray)', backgroundColor: 'var(--hwp-vlight)', padding: '0.6rem 0.2rem', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ fontWeight: 'bold', fontSize: '0.75rem', color: 'var(--hwp-dark)' }}>3. 전임상 & 임상 진입</div>
                </div>

                {/* [3행] AS-IS 타임라인 */}
                <div style={{ gridColumn: '1 / 4', border: '1px solid var(--hwp-dark)', padding: '0.3rem', textAlign: 'center', fontSize: '0.75rem', color: 'var(--hwp-black)', fontWeight: 'bold', marginBottom: '1.5rem' }}>
                  물리 화학 실험에 전적으로 의존 (4년~5년 증발)
                </div>
                <div style={{ gridColumn: '4 / 6', textAlign: 'center', fontSize: '0.7rem', color: 'var(--hwp-gray)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  (6~10년 소요)
                </div>

                {/* [4행] 연결 화살표 (1px 가로선 + 아래 화살표) */}
                <div style={{ gridColumn: '1 / 6', position: 'relative', height: '20px', borderTop: '1px dashed var(--hwp-gray)', marginBottom: '1.5rem' }}>
                  <div style={{ position: 'absolute', left: '33%', transform: 'translate(-50%, -10px)', backgroundColor: 'var(--hwp-vlight)', padding: '0 10px' }}>
                    <ArrowDownToLine size={24} color="var(--hwp-black)" />
                  </div>
                </div>

                {/* [5행] TO-BE 헤더 */}
                <div style={{ gridColumn: '1 / 6', backgroundColor: 'var(--hwp-black)', color: 'var(--hwp-white)', padding: '0.4rem 0.8rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontWeight: 'bold', fontSize: '0.85rem' }}>▶ 스트레이캣 도입 (TO-BE)</div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>전체 연구 기간 65% 이상 단축 보장</div>
                </div>

                {/* [6행] TO-BE 노드 */}
                <div style={{ gridColumn: '1 / 4', border: 'var(--hwp-border-thick)', padding: '1rem', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ fontWeight: 'bold', fontSize: '0.9rem', color: 'var(--hwp-black)', marginBottom: '0.4rem' }}>
                    스트레이캣 하이브리드 AI 자동화 공정
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--hwp-dark)', lineHeight: '1.4' }}>
                    플라스틱관 화학 실험 통째로 컴퓨터 내부 통합 구현<br/>
                    초고속 디지털 연산 + 초정밀 물리 검증 확정
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ color: 'var(--hwp-black)', fontSize: '0.65rem', fontWeight: 'bold', marginBottom: '0.2rem', whiteSpace: 'nowrap' }}>[신속 통과]</div>
                  <ArrowRight size={20} color="var(--hwp-black)" strokeWidth={2} />
                </div>
                <div style={{ border: '1px solid var(--hwp-gray)', backgroundColor: 'var(--hwp-vlight)', padding: '1.2rem 0.5rem', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ fontWeight: 'bold', fontSize: '0.75rem', color: 'var(--hwp-dark)' }}>3. 전임상 & 임상 진입</div>
                </div>

                {/* [7행] TO-BE 타임라인 */}
                <div style={{ gridColumn: '1 / 4', backgroundColor: 'var(--hwp-black)', color: 'var(--hwp-white)', padding: '0.5rem', textAlign: 'center', fontSize: '0.8rem', fontWeight: 'bold' }}>
                  ▶ 1~2단계 소요 물리적 시간 최대 90% 이상 단축 (수개월 내 압축)
                </div>
                <div style={{ gridColumn: '4 / 6' }}></div>

              </div>

            </div>
          </div>

          {/* ── 4대 진입장벽 & 뉴스 클리핑 (6:4 그리드) ── */}
          <div style={{ display: 'grid', gridTemplateColumns: '6fr 4fr', gap: '0.8rem', marginBottom: '1.5rem' }}>
            {/* 좌측: 4대 진입장벽 (1열) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {barriers.map((b, i) => (
                <div key={i} style={{ border: '1.5px solid var(--hwp-black)', overflow: 'hidden' }}>
                  <div style={{
                    backgroundColor: 'var(--hwp-black)', color: 'var(--hwp-white)',
                    padding: '0.35rem 0.6rem', fontWeight: '700', fontSize: '0.8rem',
                    fontFamily: 'var(--hwp-font-heading)', display: 'flex', alignItems: 'center', gap: '0.4rem',
                  }}>
                    <span style={{ border: '1px solid var(--hwp-white)', padding: '0.05rem 0.3rem', fontSize: '0.7rem' }}>{b.num}</span>
                    {b.title}
                  </div>
                  <div style={{ padding: '0.4rem 0.6rem', fontSize: '0.8rem', lineHeight: '1.5', wordBreak: 'keep-all' }}>
                    {b.desc}
                  </div>
                </div>
              ))}
            </div>

            {/* 우측: 뉴스 기사 보도자료 */}
            <div style={{ border: '1.5px solid var(--hwp-black)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{
                backgroundColor: 'var(--hwp-black)', color: 'var(--hwp-white)', padding: '0.35rem 0.6rem',
                fontWeight: '700', fontSize: '0.8rem', fontFamily: 'var(--hwp-font-heading)',
                textAlign: 'center', borderBottom: '1px solid var(--hwp-black)',
              }}>
                업계 핵심 문제 보도 자료
              </div>
              <div style={{ flex: 1, backgroundColor: 'var(--hwp-vlight)', padding: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={newsClippingsImg} alt="뉴스보도" style={{ width: '100%', display: 'block' }} />
              </div>
            </div>
          </div>

          {/* ── 창업 아이템 개발 필요성 (압축) ── */}
          <div style={{ border: '1.5px solid var(--hwp-black)', marginBottom: '1.5rem', overflow: 'hidden' }}>
            <div style={{
              backgroundColor: ACCENT, padding: '0.4rem 0.8rem', fontWeight: '700',
              fontSize: '0.85rem', fontFamily: 'var(--hwp-font-heading)', borderBottom: '1px solid var(--hwp-black)',
            }}>
              ■ 근본적 해결책 및 타당성
            </div>
            <div style={{ padding: '0.6rem 0.8rem', fontSize: '0.84rem', lineHeight: '1.7' }}>
              <div style={{ marginBottom: '0.3rem' }}>
                · <strong>최첨단 AI 진입 장벽 파괴:</strong> 복잡한 코딩과 설치 에러로 인해 전산 전문가만 쓸 수 있던 AlphaFold 등 조 단위 가치의 최신 AI를, 일반 윈도우 화면에서 마우스 클릭만으로 작동시키는 'No-Code 시스템' 수립 시급
              </div>
              <div style={{ marginBottom: '0.3rem' }}>
                · <strong>인프라 도입 비용 파괴:</strong> 막대한 대형 서버실을 구축하는 대신 단 한 대의 고출력 그래픽 장비(RTX 4090) 안에 모든 AI를 최적화하여 쑤셔 넣어 초기 비용 극단적 축소
              </div>
              <div>
                · <strong>속도와 정밀도의 완벽 결합:</strong> 도출 속도는 빠르지만 치명적 오류가 빈번한 'AI'와 정확하지만 속도가 너무 느린 '물리 계산 로직'을 한 개의 자동화 공정으로 병합
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="hwp-subsection-title">1-2. 문제 해결을 위한 창업 아이템의 개발 필요성</h2>

          {/* ── 시장 그래프 (중앙 정렬 풀 위드스) ── */}
          <div style={{ display: 'block', maxWidth: '600px', margin: '0 auto 1.5rem auto' }}>
            <div style={{ border: '1.5px solid var(--hwp-black)', overflow: 'hidden' }}>
              <div style={{
                backgroundColor: 'var(--hwp-black)', color: 'var(--hwp-white)', padding: '0.35rem 0.6rem',
                fontWeight: '700', fontSize: '0.8rem', fontFamily: 'var(--hwp-font-heading)',
                textAlign: 'center', borderBottom: '1px solid var(--hwp-black)',
              }}>
                글로벌 시장 규모 전망 (CAGR 30%+)
              </div>
              <div style={{ padding: '0.5rem 0.3rem 0.2rem', backgroundColor: 'var(--hwp-vlight)' }}>
                <div style={{ height: 220 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={marketChartData} margin={{ top: 20, right: 20, bottom: 5, left: 5 }}>
                      <defs>
                        <linearGradient id="mg9" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="var(--hwp-black)" stopOpacity={0.3} />
                          <stop offset="100%" stopColor="var(--hwp-light)" stopOpacity={0.1} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="var(--hwp-light)" />
                      <XAxis dataKey="year" fontSize={10} tick={{ fill: 'var(--hwp-dark)', fontWeight: '600' }} />
                      <YAxis fontSize={10} tick={{ fill: 'var(--hwp-gray)' }} tickFormatter={(v) => `${v}조`} domain={[0, 48]} tickCount={5} />
                      <Tooltip formatter={(val) => [`${val}조 원`, '시장 규모']} />
                      <Area type="monotone" dataKey="size" stroke="var(--hwp-black)" strokeWidth={2} fill="url(#mg9)"
                        dot={{ r: 3, fill: 'var(--hwp-black)', stroke: 'var(--hwp-white)', strokeWidth: 1.5 }}>
                        <LabelList dataKey="label" position="top" style={{ fontSize: '0.65rem', fontWeight: '700', fill: 'var(--hwp-black)' }} offset={6} />
                      </Area>
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>

          {/* ── 사업화 목적 (압축) ── */}
          <div style={{ border: '1.5px solid var(--hwp-black)', marginBottom: '1.2rem', overflow: 'hidden' }}>
            <div style={{
              backgroundColor: 'var(--hwp-black)', color: 'var(--hwp-white)', padding: '0.6rem 1rem',
              fontWeight: '700', fontSize: '0.86rem', lineHeight: '1.5',
              borderBottom: '1px solid var(--hwp-black)', wordBreak: 'keep-all',
            }}>
              "하이브리드 통합 + 연구자 친화성 + 저비용 인프라 구현을 통한 기술 진입 장벽 완전 해소"
            </div>
            <div style={{ padding: '0.6rem 0.8rem', fontSize: '0.84rem', lineHeight: '1.7' }}>
              <div style={{ marginBottom: '0.3rem' }}>· <strong>AI + 물리 검증 하이브리드 자동화:</strong> 파편화된 최고 수준의 알고리즘들을 하나로 엮어, 인간의 개입 없이 후보 물질 1차 선별부터 정밀 검증까지 논스톱으로 진행</div>
              <div style={{ marginBottom: '0.3rem' }}>· <strong>약학 연구원 친화형 시각화 환경:</strong> 컴퓨터 전산 언어(코딩)를 모르는 비전문가도 직관적으로 세팅 및 조작할 수 있는 전용 그래픽 화면(GUI) 완비</div>
              <div>· <strong>고성능 저비용 사내 보안망 최적화:</strong> 외부 기밀 유출이 차단된 RTX 4090 환경 전용으로 최적화 배포하여 중소 제약사의 무리한 연간 라이선스 출혈 구제</div>
            </div>
          </div>

          {/* ── 3대 가치 제안 (압축) ── */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem', marginBottom: '0.5rem' }}>
            {valueProps.map((vp, i) => (
              <div key={i} style={{ border: '1.5px solid var(--hwp-black)', overflow: 'hidden' }}>
                <div style={{
                  backgroundColor: 'var(--hwp-black)', color: 'var(--hwp-white)',
                  padding: '0.4rem 0.6rem', display: 'flex', alignItems: 'center', gap: '0.4rem',
                }}>
                  <span style={{ border: '1px solid var(--hwp-white)', padding: '0.05rem 0.3rem', fontSize: '0.7rem', fontWeight: '700' }}>{vp.num}</span>
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
