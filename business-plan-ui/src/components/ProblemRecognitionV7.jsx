import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const ACCENT = '#dfe6f7';

const roiData = [
  { method: '해외 소프트웨어', cost: 100 },
  { method: '사내 고가 서버', cost: 150 },
  { method: '자사 그리드', cost: 15 }
];

const ProblemRecognitionV7 = () => {
  return (
    <div className="v2-theme v2-container">
      <div className="v2-paper">

        <div className="hwp-section-title-tag">
          1. 문제 인식 (Problem)_창업 아이템의 필요성
        </div>

        <section>
          <h2 className="hwp-subsection-title">1-1. 창업아이템의 개발동기 (외적 동기 및 내적 동기)</h2>

          <div className="v2-info-box" style={{ borderLeft: '4px solid #333', marginBottom: '1.5rem', backgroundColor: '#fcfcfc' }}>
            <p style={{ fontWeight: 'bold', margin: '0', fontSize: '1rem', wordBreak: 'keep-all', lineHeight: '1.6' }}>
              ▶ 우수한 글로벌 AI가 쏟아져도 중소 제약사는 도입 불가능한 상황임. — 전문 IT 인력 부족, 수십억 서버 구매 불가, 신약 기밀 구조의 클라우드 업로드 불가 등이 주요 원인임.
            </p>
          </div>

          <p className="hwp-guide-text">
            ※ 글로벌 제약 AI 도입 현실과 중소/벤처 하위 90% 생태계 간의 극심한 자원 양극화 상황임.
          </p>

          <p style={{ fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '1rem' }}>
            글로벌 빅파마들은 AI 기술에 수조 원대 자본을 투입하며 'AI 신약 개발 플랫폼' 시장을 잠식 중임. 반면 국내외 중소·중견 제약사 및 학술 연구기관은 비용·인력·보안 장벽으로 혁신에서 완전히 소외된 상태임.
          </p>

          <table className="hwp-table" style={{ marginBottom: '2rem' }}>
            <thead>
              <tr>
                <th style={{ width: '22%', backgroundColor: ACCENT }}>핵심 진입 장벽</th>
                <th style={{ backgroundColor: ACCENT }}>발생 형태 및 벤처/대학 연구실의 핵심 문제</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="label">1. 상용 라이선스의<br/>살인적 과금</td>
                <td>
                  · 해외 독점 AI 소프트웨어 라이선스가 <strong>수억~수십억 원 과금</strong>을 강제함.<br/>
                  · 중소 연구 단위는 예산 확보 불가로 연구 시작 전부터 자본 한계에 봉착.
                </td>
              </tr>
              <tr>
                <td className="label">2. 전문 IT 인력<br/>(MLOps) 부재</td>
                <td>
                  · AlphaFold 등 무료 AI가 공개되어도 리눅스 망 구축·Python 환경 설정·GPU 배포·MLOps 관리를 생물학·화학 연구원이 병행하는 것은 물리적으로 불가능함.<br/>
                  · 전담 MLOps 인력 채용 역시 예산·인식 부재로 현실적으로 불가능한 상태임.
                </td>
              </tr>
              <tr>
                <td className="label">3. 강력한 데이터<br/>외부 유출(보안) 우려</td>
                <td>
                  · 신약 후보 물질 구조는 초격차 기밀 자산(특허)임.<br/>
                  · 기존 <strong>SaaS AI 플랫폼은 외부 서버로 데이터를 필연적으로 전송</strong>하므로, 보안에 극도로 보수적인 제약사는 도입 자체를 전면 거부함.
                </td>
              </tr>
              <tr>
                <td className="label">4. 단일 슈퍼 인프라<br/>독점 부담</td>
                <td>
                  · 단백질 3D 모델링 등 고사양 연산을 위해 대당 수천만 원의 AI 인프라(H100·A100) 세트가 필요함.<br/>
                  · 중소 기관은 해당 예산 확보 자체가 불가능한 상태임.
                </td>
              </tr>
            </tbody>
          </table>

        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2 className="hwp-subsection-title">1-2. 창업아이템의 사업화 목적 및 필요성</h2>

          <p className="hwp-guide-text" style={{ marginBottom: '1.5rem' }}>
            ※ Pick and Shovel(곡괭이) 전략: 진입 장벽의 혁신적 해체를 위한 인프라 보급 생태계 조성.
          </p>

          {/* 그래프 — 전체 너비 */}
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
                    type="number"
                    domain={[0, 180]}
                    tickCount={5}
                    fontSize={15}
                    stroke="#9ca3af"
                    tick={{ fill: '#6b7280' }}
                    tickFormatter={(v) => `${v}`}
                    label={{ value: '비용 지수', position: 'insideBottom', offset: -8, fontSize: 12, fill: '#9ca3af' }}
                  />
                  <YAxis
                    type="category"
                    dataKey="method"
                    fontSize={16}
                    stroke="#333"
                    width={150}
                    tick={{ fill: '#374151', fontWeight: '600' }}
                  />
                  <Tooltip
                    cursor={{ fill: '#f3f4f6' }}
                    contentStyle={{ fontSize: '0.9rem', borderRadius: '4px', border: '1px solid #d1d5db' }}
                    formatter={(val) => [`${val} (지수)`, '비용']}
                  />
                  <Bar
                    dataKey="cost"
                    fill="#4b5563"
                    barSize={60}
                    radius={[0, 4, 4, 0]}
                    label={{
                      position: 'right',
                      fill: '#1f2937',
                      fontSize: 20,
                      fontWeight: 'bold',
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

          {/* 필요성 본문 — 가/나/다 형식 */}
          <div style={{ marginTop: '1.8rem' }}>
            <div style={{ fontWeight: 'bold', fontSize: '0.82rem', color: '#374151', marginBottom: '1rem', paddingLeft: '4px' }}>
              ■ 본 아이템이 필요한 3가지 핵심 이유
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', paddingLeft: '1rem' }}>

              <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                <span style={{
                  minWidth: '1.6rem', height: '1.6rem', borderRadius: '50%',
                  backgroundColor: '#374151', color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.78rem', fontWeight: 'bold', flexShrink: 0, marginTop: '1px'
                }}>가</span>
                <div style={{ fontSize: '0.9rem', lineHeight: '1.75', wordBreak: 'keep-all' }}>
                  <strong>1-Click AI 인프라 보급:</strong>{' '}
                  IT 엔지니어가 없는 제약사에서도 연구원이 마우스 클릭만으로 글로벌 검증 AI를 대시보드 내에서 즉각 셋업·구동할 수 있도록 자동화 파이프라인(Bio-MLOps) 보급.
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                <span style={{
                  minWidth: '1.6rem', height: '1.6rem', borderRadius: '50%',
                  backgroundColor: '#374151', color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.78rem', fontWeight: 'bold', flexShrink: 0, marginTop: '1px'
                }}>나</span>
                <div style={{ fontSize: '0.9rem', lineHeight: '1.75', wordBreak: 'keep-all' }}>
                  <strong>온프레미스(망 분리) 환경:</strong>{' '}
                  외부 인터넷을 완전히 차단한 사내 폐쇄망 설치형(Appliance) 모델 제공으로 기밀 데이터 유출 리스크를 제로(0) 수준으로 통제.
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                <span style={{
                  minWidth: '1.6rem', height: '1.6rem', borderRadius: '50%',
                  backgroundColor: '#374151', color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.78rem', fontWeight: 'bold', flexShrink: 0, marginTop: '1px'
                }}>다</span>
                <div style={{ fontSize: '0.9rem', lineHeight: '1.75', wordBreak: 'keep-all' }}>
                  <strong>사내 PC 유휴 자원 연계(Grid):</strong>{' '}
                  수십억 원의 단일 GPU 세트 구매 대신, 인트라넷에 연결된 사내 연구용 PC 자원을 그리드로 묶어 중앙 연산 부하를 1/10 수준으로 절감.
                </div>
              </div>

            </div>
          </div>

        </section>

      </div>
    </div>
  );
};

export default ProblemRecognitionV7;
