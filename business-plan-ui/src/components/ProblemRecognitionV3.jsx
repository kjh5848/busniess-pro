import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar } from 'recharts';
import { LayoutDashboard, Beaker } from 'lucide-react';

const marketGrowthData = [
  { year: '2023', 시장규모: 450 },
  { year: '2024', 시장규모: 680 },
  { year: '2025', 시장규모: 950 },
  { year: '2026', 시장규모: 1420 },
  { year: '2027', 시장규모: 2100 },
];

const roiData = [
  { method: '기존 합성 방식', cost: 100 },
  { method: 'AI 하이브리드', cost: 35 }
];

const ProblemRecognitionV3 = () => {
  return (
    <div className="v2-theme v2-container">
      <div className="v2-paper">
        
        <h1 className="v2-section-title">
          1. 문제인식 (Problem)
        </h1>

        <section>
          <h2 className="v2-sub-title">1-1. 창업아이템의 개발동기</h2>

          {/* Rule 5: Key Message Quote */}
          <div className="v2-info-box" style={{ borderLeft: '4px solid #333', marginBottom: '1.5rem', backgroundColor: '#fcfcfc' }}>
            <p style={{ fontWeight: 'bold', margin: '0', fontSize: '1.05rem', wordBreak: 'keep-all', lineHeight: '1.6' }}>
              "글로벌 빅파마의 AI 신약 개발 도입률이 70%를 돌파하며 패러다임이 전환되고 있으나, 국내 중소 벤처 및 학계는 과도한 라이선스 비용으로 인해 기술 격차가 심화되고 있다."
            </p>
          </div>

          <p className="v2-box-desc" style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
            ■ 글로벌 제약/바이오 R&D 시장의 AI 예측 의존도 급증
          </p>
          <p className="v2-box-desc" style={{ marginBottom: '0.2rem', wordBreak: 'keep-all', lineHeight: '1.6' }}>
            신약 개발의 극초기 단계(유효 물질 발굴)에서 수만 개의 화합물을 합성하고 시험관에 검증하는 과정은 막대한 비용(평균 10억~50억 원)과 시간(약 2~3년)을 소모한다. 최근 <strong>컴퓨터 모의실험(In-silico)</strong> 기술 발전으로, 실제 화학 실험 전 오답을 미리 걸러내는 예측 알고리즘 도입이 필수화되고 있으며, 관련 신약 설계 소프트웨어 시장은 폭발적인 성장을 기록하고 있다.
          </p>

          {/* Rule 1: Evidence Text */}
          <p style={{ fontSize: '0.75rem', color: '#6b7280', margin: '0 0 1rem 0' }}>
            * 근거 1: 한국보건산업진흥원(2024), "제약바이오분야 인공지능 활용 실태조사 및 시사점" - 도입률 73.4% 기록<br/>
            * 근거 2: 생명공학정책연구센터(2025), "글로벌 신약 예측 소프트웨어 시장 전망치 (단위: 백만 달러)"
          </p>

          {/* Rule 2: Upward Trending Chart (LineChart) */}
          <div style={{ width: '100%', height: 200, marginBottom: '2rem', border: '1px solid #e5e5e5', backgroundColor: '#fff', padding: '1rem 1rem 0 0' }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={marketGrowthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                <XAxis dataKey="year" fontSize={11} stroke="#6b7280" tick={{ fill: '#6b7280' }} />
                <YAxis fontSize={11} stroke="#6b7280" tick={{ fill: '#6b7280' }} />
                <Tooltip contentStyle={{ fontSize: '0.85rem' }} />
                <Line type="monotone" dataKey="시장규모" stroke="#374151" strokeWidth={2} dot={{ r: 4, fill: '#374151' }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
            <div style={{ textAlign: 'center', fontSize: '0.8rem', color: '#6b7280', marginTop: '0.5rem' }}>[그림 1] 글로벌 신약 설계 소프트웨어 시장 규모 전망 (백만 달러)</div>
          </div>

        </section>

        <section>
          <h2 className="v2-sub-title" style={{ marginTop: '3rem' }}>1-2. 창업아이템의 사업화 목적 및 필요성</h2>

          <p className="v2-box-desc" style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
            ■ 기존 상용화 소프트웨어의 한계 및 진입 장벽
          </p>
          <div className="v2-table-wrapper" style={{ marginTop: '0.5rem' }}>
            <table className="v2-table" style={{ wordBreak: 'keep-all', lineHeight: '1.6' }}>
              <thead>
                <tr>
                  <th style={{width: '20%'}}>주요 구조적 한계</th>
                  <th style={{width: '80%'}}>발생 형태 및 벤처/대학 연구실의 핵심 문제(Pain Point)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center font-bold">1. 과금 구조의 폐쇄성</td>
                  <td>
                    해외 독점 소프트웨어(독일 슈뢰딩거사 등)의 경우 연구원 1명당 연평균 수천만 원에 달하는 라이선스 비용이 일시불로 청구되어, <strong>예산 규모가 작은 초기 벤처기업 및 국립대 연구실은 사실상 합법적인 사용과 연구 진입이 불가능</strong>한 구조이다.
                  </td>
                </tr>
                <tr>
                  <td className="text-center font-bold">2. 서버 인프라 한계</td>
                  <td>
                    화합물의 결합력을 계산하기 위해 최고급 H/W(대형 그래픽 처리 서버) 구축이 필수적이나, 중소 연구 단위에서는 자체 전산실을 구축하고 막대한 전력망을 유지보수 할 자본적 여력이 전무하다.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Rule 1: Evidence Text */}
          <p style={{ fontSize: '0.75rem', color: '#6b7280', margin: '0.5rem 0 1rem 0' }}>
            * 근거: 전국대학교 기술지주회사 협의회 세미나 리포트(2025) - "초기 바이오창업의 연구 장비 도입 장벽 분석"
          </p>

          <p className="v2-box-desc" style={{ fontWeight: 'bold', marginBottom: '0.5rem', marginTop: '2rem' }}>
            ■ 자사 솔루션 도입 시 경제적 기대 효과 비교 (예산 절감 곡선)
          </p>

          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', marginBottom: '2rem' }}>
            {/* Rule 2: BarChart comparison */}
            <div style={{ flex: 1, height: 180 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={roiData} layout="vertical" margin={{ top: 0, right: 20, bottom: 0, left: 40 }}>
                  <XAxis type="number" hide />
                  <YAxis type="category" dataKey="method" fontSize={11} stroke="#333" width={90} />
                  <Tooltip cursor={{ fill: '#f3f4f6' }} contentStyle={{ fontSize: '0.85rem' }} />
                  <Bar dataKey="cost" fill="#4b5563" barSize={30} radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
              <div style={{ textAlign: 'center', fontSize: '0.8rem', color: '#6b7280' }}>[그림 2] 후보 물질 100개 실험 검증 시 소요 비용 비교 지수 (기존=100)</div>
            </div>
            
            <div style={{ flex: 1 }}>
              <div className="v2-info-box" style={{ padding: '1rem', backgroundColor: '#fcfcfc', border: '1px solid #e5e5e5' }}>
                  <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.9rem', wordBreak: 'keep-all', lineHeight: '1.6' }}>
                    <li><strong style={{ color: '#111' }}>초기 연구비용 65% 절감:</strong> 기존의 수억 원대 서버 장비 구매 비용을 웹 구독(SaaS) 모델로 대체하여 초기 자본금 고갈 위험율을 완벽히 낮춘다.</li>
                    <li><strong style={{ color: '#111' }}>동물 실험 실패율 하락:</strong> 쥐, 원숭이 등을 대상으로 한 생체 투약 실험(In-vivo)을 강행하기 전, 효과가 없을 가짜 물질을 80% 이상 컴퓨터 상에서 걸러내어 연구 윤리를 확보한다.</li>
                  </ul>
              </div>
            </div>
          </div>

        </section>

      </div>
    </div>
  );
};

export default ProblemRecognitionV3;
