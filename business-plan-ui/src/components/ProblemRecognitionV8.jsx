import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const ACCENT = '#dfe6f7';

const roiData = [
  { method: '해외 소프트웨어', cost: 100 },
  { method: '사내 고가 서버', cost: 150 },
  { method: '자사 그리드', cost: 15 },
];

/* ── 4대 진입장벽 데이터 ── */
const barriers = [
  {
    num: '01',
    title: '상용 라이선스의 살인적 과금',
    problem: '해외 독점 AI 소프트웨어 라이선스가 수억~수십억 원 과금을 강제함.',
    impact: '중소 연구 단위는 예산 확보 불가로 연구 시작 전부터 자본 한계에 봉착.',
  },
  {
    num: '02',
    title: '전문 IT 인력(MLOps) 부재',
    problem: 'AlphaFold 등 무료 AI가 공개되어도 리눅스 망 구축·Python 환경 설정·GPU 배포를 생물학 연구원이 병행 불가.',
    impact: '전담 MLOps 인력 채용 역시 예산·인식 부재로 현실적으로 불가능한 상태.',
  },
  {
    num: '03',
    title: '강력한 데이터 외부 유출(보안) 우려',
    problem: '신약 후보 물질 구조는 초격차 기밀 자산(특허)임.',
    impact: '기존 SaaS AI 플랫폼은 외부 서버로 데이터를 전송하므로, 보안에 보수적인 제약사는 도입 자체를 전면 거부.',
  },
  {
    num: '04',
    title: '단일 슈퍼 인프라 독점 부담',
    problem: '단백질 3D 모델링 등 고사양 연산을 위해 대당 수천만 원의 AI 인프라(H100·A100) 세트 필요.',
    impact: '중소 기관은 해당 예산 확보 자체가 불가능한 상태.',
  },
];

/* ── 3대 가치 제안 ── */
const valueProps = [
  {
    num: '가',
    title: '1-Click AI 인프라 보급',
    desc: 'IT 엔지니어가 없는 제약사에서도 연구원이 마우스 클릭만으로 글로벌 검증 AI를 대시보드 내에서 즉각 셋업·구동할 수 있도록 자동화 파이프라인(Bio-MLOps) 보급.',
  },
  {
    num: '나',
    title: '온프레미스(망 분리) 환경',
    desc: '외부 인터넷을 완전히 차단한 사내 폐쇄망 설치형(Appliance) 모델 제공으로 기밀 데이터 유출 리스크를 제로(0) 수준으로 통제.',
  },
  {
    num: '다',
    title: '사내 PC 유휴 자원 연계(Grid)',
    desc: '수십억 원의 단일 GPU 세트 구매 대신, 인트라넷에 연결된 사내 연구용 PC 자원을 그리드로 묶어 중앙 연산 부하를 1/10 수준으로 절감.',
  },
];

const ProblemRecognitionV8 = () => {
  return (
    <div className="v2-theme v2-container">
      <div className="v2-paper">

        <div className="hwp-section-title-tag">
          1. 문제 인식 (Problem)_창업 아이템의 필요성
        </div>

        <section>
          <h2 className="hwp-subsection-title">1-1. 창업아이템의 개발동기 (외적 동기 및 내적 동기)</h2>

          {/* ── 핵심 메시지 밴드 ── */}
          <div style={{
            background: '#1e293b', color: '#fff', padding: '1rem 1.5rem',
            marginBottom: '1.5rem', lineHeight: '1.6', fontWeight: '700',
            fontSize: '0.95rem', wordBreak: 'keep-all',
          }}>
            ▶ 우수한 글로벌 AI가 쏟아져도 중소 제약사는 도입 불가능 — 전문 IT 인력 부족, 수십억 서버 구매 불가, 신약 기밀의 클라우드 업로드 불가
          </div>

          <p className="hwp-guide-text" style={{ marginBottom: '1.2rem' }}>
            ※ 글로벌 제약 AI 도입 현실과 중소/벤처 하위 90% 생태계 간의 극심한 자원 양극화
          </p>

          <p style={{ fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
            글로벌 빅파마들은 AI 기술에 수조 원대 자본을 투입하며 'AI 신약 개발 플랫폼' 시장을 잠식 중임. 반면 국내외 중소·중견 제약사 및 학술 연구기관은 비용·인력·보안 장벽으로 혁신에서 완전히 소외된 상태임.
          </p>

          {/* ════════ 타임라인형 진입장벽 ════════ */}
          <div style={{ position: 'relative', paddingLeft: '3.5rem', marginBottom: '2rem' }}>
            {/* 세로 연결선 */}
            <div style={{
              position: 'absolute', left: '1.3rem', top: '0.5rem', bottom: '0.5rem',
              width: '2px', backgroundColor: '#000',
            }} />

            {barriers.map((b, i) => (
              <div key={i} style={{
                display: 'flex', marginBottom: i < barriers.length - 1 ? '1.2rem' : '0',
                position: 'relative',
              }}>
                {/* 번호 원 */}
                <div style={{
                  position: 'absolute', left: '-3.5rem',
                  width: '2.2rem', height: '2.2rem',
                  border: '2px solid #000', backgroundColor: '#1e293b', color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: '700', fontSize: '0.8rem', fontFamily: 'var(--hwp-font-heading)',
                  zIndex: 1,
                }}>
                  {b.num}
                </div>

                {/* 내용 카드 */}
                <div style={{
                  border: '1.5px solid #000', flex: 1, overflow: 'hidden',
                }}>
                  <div style={{
                    backgroundColor: ACCENT, padding: '0.4rem 0.8rem',
                    fontWeight: '700', fontSize: '0.88rem', fontFamily: 'var(--hwp-font-heading)',
                    borderBottom: '1px solid #000',
                  }}>
                    {b.title}
                  </div>
                  <div style={{ padding: '0.6rem 0.8rem', fontSize: '0.86rem', lineHeight: '1.65' }}>
                    <div style={{ marginBottom: '0.3rem' }}>
                      <span style={{ fontWeight: '700', marginRight: '0.4rem' }}>문제:</span>{b.problem}
                    </div>
                    <div style={{ color: '#333' }}>
                      <span style={{ fontWeight: '700', marginRight: '0.4rem' }}>영향:</span>{b.impact}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ════════ 내적 동기 ════════ */}
          <div style={{ marginTop: '2rem' }}>
            <div style={{ fontWeight: 'bold', fontSize: '0.82rem', color: '#374151', marginBottom: '1rem', paddingLeft: '4px' }}>
              ■ 내적 동기 — 대표자 역량 및 창업 비전
            </div>

            <table className="hwp-table">
              <thead>
                <tr><th colSpan={2} style={{ backgroundColor: ACCENT }}>대표자 경험 기반 개발 동기</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td className="label" style={{ width: '22%', verticalAlign: 'top' }}>현장 경험</td>
                  <td style={{ fontSize: '0.86rem', lineHeight: '1.7' }}>
                    대표자는 AI 신약개발 전문기업 <strong>팜캐드(PharmCAD)</strong>에서 프리랜서로 근무하며, AlphaFold·RDKit·AutoDock 등 글로벌 오픈소스 AI 도구를 실제 제약 R&amp;D 파이프라인에 통합·운용한 실무 경험을 보유함.
                  </td>
                </tr>
                <tr>
                  <td className="label" style={{ verticalAlign: 'top' }}>문제 체감</td>
                  <td style={{ fontSize: '0.86rem', lineHeight: '1.7' }}>
                    현장에서 직접 목격한 문제: 우수한 오픈소스 AI가 공개되어도 <strong>리눅스 환경 구축, 의존성 충돌 해결, GPU 드라이버 세팅</strong> 등 IT 기술 장벽이 너무 높아 생물학·화학 전공 연구원이 독자적으로 활용하는 것이 사실상 불가능함을 반복적으로 체감함.
                  </td>
                </tr>
                <tr>
                  <td className="label" style={{ verticalAlign: 'top' }}>기술 축적</td>
                  <td style={{ fontSize: '0.86rem', lineHeight: '1.7' }}>
                    이러한 현장 문제를 해결하고자 <strong>관련 오픈소스 프로젝트에 지속적으로 관심을 두고 직접 참여</strong>하며, 외부 인터넷 연결 없이도 작동하는 오프라인 1-Click 자동화 스크립트, 컨테이너 기반 배포 파이프라인 등 핵심 요소기술을 독자적으로 개발·확보함.
                  </td>
                </tr>
                <tr>
                  <td className="label" style={{ verticalAlign: 'top' }}>가치관 · 비전</td>
                  <td style={{ fontSize: '0.86rem', lineHeight: '1.7' }}>
                    <strong>"AI 신약 기술의 민주화"</strong> — 자본력과 IT 전문 인력이 부족한 중소 제약사·대학 연구소도 빅파마와 동등한 AI 연구 환경을 확보할 수 있어야 한다는 신념으로 창업을 결심함. 오픈소스 기술을 누구나 쉽게 쓸 수 있는 '곡괭이(인프라)'로 가공하여 제공하는 것이 대표자의 핵심 미션임.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2 className="hwp-subsection-title">1-2. 창업아이템의 사업화 목적 및 필요성</h2>

          <p className="hwp-guide-text" style={{ marginBottom: '1.5rem' }}>
            ※ Pick and Shovel(곡괭이) 전략: 진입 장벽의 혁신적 해체를 위한 인프라 보급 생태계 조성.
          </p>

          {/* 그래프 */}
          <div style={{ marginBottom: '0.5rem', paddingBottom: '0.5rem' }}>
            <div style={{ fontWeight: 'bold', fontSize: '0.9rem', color: '#374151', marginBottom: '0.75rem', paddingLeft: '4px' }}>
              ■ 도입 방식별 AI 인프라 비용 비교 (단위: 지수, 해외 소프트웨어 = 100 기준)
            </div>
            <div style={{ height: 450 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={roiData}
                  layout="vertical"
                  margin={{ top: 10, right: 80, bottom: 16, left: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e5e7eb" />
                  <XAxis
                    type="number" domain={[0, 180]} tickCount={5} fontSize={15}
                    stroke="#9ca3af" tick={{ fill: '#6b7280' }}
                    tickFormatter={(v) => `${v}`}
                    label={{ value: '비용 지수', position: 'insideBottom', offset: -8, fontSize: 12, fill: '#9ca3af' }}
                  />
                  <YAxis
                    type="category" dataKey="method" fontSize={16} stroke="#333"
                    width={150} tick={{ fill: '#374151', fontWeight: '600' }}
                  />
                  <Tooltip
                    cursor={{ fill: '#f3f4f6' }}
                    contentStyle={{ fontSize: '0.9rem', borderRadius: '4px', border: '1px solid #d1d5db' }}
                    formatter={(val) => [`${val} (지수)`, '비용']}
                  />
                  <Bar
                    dataKey="cost" fill="#4b5563" barSize={60} radius={[0, 4, 4, 0]}
                    label={{
                      position: 'right', fill: '#1f2937', fontSize: 20, fontWeight: 'bold',
                      formatter: (val) => `${val}`,
                    }}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div style={{ textAlign: 'center', fontSize: '0.82rem', color: '#6b7280', marginTop: '0.4rem', fontWeight: '500' }}>
              [그림 1] 자사 사내 자원 연합 그리드(Grid) 도입 시 인프라 비용 지수 비교
            </div>
          </div>

          {/* ════════ 3대 가치 제안 카드 ════════ */}
          <div style={{ marginTop: '1.8rem' }}>
            <div style={{ fontWeight: 'bold', fontSize: '0.82rem', color: '#374151', marginBottom: '1rem', paddingLeft: '4px' }}>
              ■ 본 아이템이 필요한 3가지 핵심 이유
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.8rem' }}>
              {valueProps.map((vp, i) => (
                <div key={i} style={{ border: '1.5px solid #000', overflow: 'hidden' }}>
                  {/* 상단 넘버 + 타이틀 */}
                  <div style={{
                    backgroundColor: '#1e293b', color: '#fff',
                    padding: '0.6rem 0.8rem',
                    display: 'flex', alignItems: 'center', gap: '0.6rem',
                  }}>
                    <span style={{
                      width: '1.8rem', height: '1.8rem',
                      border: '1.5px solid #fff',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.82rem', fontWeight: '700', flexShrink: 0,
                    }}>
                      {vp.num}
                    </span>
                    <span style={{ fontWeight: '700', fontSize: '0.85rem', fontFamily: 'var(--hwp-font-heading)', lineHeight: '1.3' }}>
                      {vp.title}
                    </span>
                  </div>
                  {/* 설명 */}
                  <div style={{
                    padding: '0.7rem 0.8rem', fontSize: '0.82rem', lineHeight: '1.65',
                    wordBreak: 'keep-all',
                  }}>
                    {vp.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </section>

      </div>
    </div>
  );
};

export default ProblemRecognitionV8;
