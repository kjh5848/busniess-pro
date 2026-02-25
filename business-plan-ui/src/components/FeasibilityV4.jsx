import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const roiData = [
  { category: '초기 유효물질 도출', 기존방식: 12, FEP도입: 3 },
  { category: '선도물질 최적화', 기존방식: 18, FEP도입: 6 },
  { category: '전임상 성공률(%)', 기존방식: 10, FEP도입: 45 },
];

const FeasibilityV4 = () => {
  return (
    <div className="v2-theme v2-container">
      <div className="v2-paper">
        
        <h1 className="v2-section-title">
          2. 실현가능성 (Feasibility)
        </h1>

        <section>
          <h2 className="v2-sub-title">2-1. 제품‧서비스의 개발 방안 및 핵심 기술</h2>

          {/* Rule 5: Key Message Quote */}
          <div className="v2-info-box" style={{ borderLeft: '4px solid #333', marginBottom: '1.5rem', backgroundColor: '#fcfcfc' }}>
            <p style={{ fontWeight: 'bold', margin: '0', fontSize: '1.05rem', wordBreak: 'keep-all', lineHeight: '1.6' }}>
              "천문학적인 서버 인프라 비용 때문에 상위 1%의 글로벌 빅파마만 누리던 초정밀 약물 결합력 예측(FEP) 시뮬레이션을, '연합학습(Federated Learning)' 기반의 분산 처리 기술을 통해 노트북에서도 안전하게 구독할 수 있는 클라우드 SaaS 형태로 보급합니다."
            </p>
          </div>

          <p className="v2-box-desc" style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
            ■ FEP(자유에너지 섭동) 기술 도입에 따른 비즈니스 임팩트 (ROI 제고)
          </p>
          <p className="v2-box-desc" style={{ marginBottom: '1rem', wordBreak: 'keep-all', lineHeight: '1.6' }}>
            기존 단순 구조 기반(3D Docking)의 한계를 넘어, 컴퓨터 가상 공간(In Silico)에서 원자 수준의 움직임(Molecular Dynamics)을 모사하여 실제 실험실(Wet Lab) 수준의 정확도로 후보물질을 사전 스크리닝합니다. 
          </p>

          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', marginBottom: '2rem' }}>
            {/* Rule 2: Upward Trending Chart (BarChart) */}
            <div style={{ flex: 1, height: 200, border: '1px solid #e5e5e5', backgroundColor: '#fff', padding: '1rem 1rem 0 0' }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={roiData} margin={{ top: 20, right: 20, bottom: 20, left: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" vertical={false} />
                  <XAxis dataKey="category" fontSize={11} stroke="#6b7280" tick={{ fill: '#6b7280' }} interval={0} />
                  <YAxis fontSize={11} stroke="#6b7280" tick={{ fill: '#6b7280' }} />
                  <Tooltip cursor={{ fill: '#f3f4f6' }} contentStyle={{ fontSize: '0.85rem' }} formatter={(value, name) => [name.includes('성공률') ? `${value}%` : `${value}개월`, name]} />
                  <Legend wrapperStyle={{ fontSize: '11px', color: '#4b5563' }} />
                  <Bar dataKey="기존방식" fill="#9ca3af" barSize={30} radius={[2, 2, 0, 0]} />
                  <Bar dataKey="FEP도입" fill="#374151" barSize={30} radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
              <div style={{ textAlign: 'center', fontSize: '0.8rem', color: '#6b7280', marginTop: '0.5rem' }}>[그림 1] FEP 시뮬레이션 활용 시 소요 기간(개월) 및 성공률 비교</div>
            </div>
            
            <div style={{ flex: 1 }}>
              <p className="v2-box-desc" style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
                [Environment] 동물 실험의 획기적 축소
              </p>
              <p style={{ fontSize: '0.9rem', color: '#4b5563', margin: '0 0 1rem 0', wordBreak: 'keep-all', lineHeight: '1.6' }}>
                실패가 뻔한 구조의 화합물을 실험 전에 미리 걸러냅니다. 이는 수많은 화학 시약 조달 비용(CAPEX)을 아껴줄 뿐만 아니라, 실효성 없는 <strong>전임상 동물 실험 단계의 불필요한 희생을 40% 이상 경감</strong>하는 강력한 ESG 성과를 창출합니다.
              </p>
              
              {/* Evidence Rule */}
              <p style={{ fontSize: '0.75rem', color: '#6b7280', margin: '0' }}>
                * 시간/비용 절감 산출 근거: 자사 FEP 엔진 프로토타입 비교 테스트 결과<br/>
                * 일반적인 Hit-to-Lead 구조 최적화 과정의 소요 시간 대비 (자체 분석)
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="v2-sub-title" style={{ marginTop: '3rem'}}>2-2. 고객 요구사항 대응 방안</h2>
          
          <p className="v2-box-desc" style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
            ■ 주요 핵심 문제(Pain Point) 파악 및 자체 솔루션 포지셔닝
          </p>

          <div className="v2-table-wrapper" style={{ marginTop: '0.5rem' }}>
            <table className="v2-table" style={{ wordBreak: 'keep-all', lineHeight: '1.6' }}>
              <thead>
                <tr>
                  <th style={{width: '20%'}}>고객 핵심 불만족 요소</th>
                  <th style={{width: '40%'}}>기존 대안재의 한계점</th>
                  <th style={{width: '40%'}}>자사 개선 솔루션 (연합학습 & FEP 적용)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center font-bold">1. 구조 유출 사고 두려움<br/>(보안 문제)</td>
                  <td>핵심 기밀인 '신약 후보 물질 구조'를 외부에 있는 클라우드 AI 서버로 전송해야 하므로, 대형 제약사는 도입을 전면 거부함.</td>
                  <td><strong>연합학습(Federated Learning) 구조 설계</strong><br/> 원본 데이터는 제약사 내부 PC(로컬)에만 머무르며, 학습 결과 값(파라미터 가중치)만 클라우드와 교환하여 근본적인 보안 문제를 해결함.</td>
                </tr>
                <tr>
                  <td className="text-center font-bold">2. 쓸모없는 예측 결과<br/>(부정확도)</td>
                  <td>기존 단순 도킹 소프트웨어는 유연한 단백질의 결합력을 단순화하여 계산하므로, 실제 실험과 오차가 커 수많은 위양성(과장된 결과)이 발생함.</td>
                  <td><strong>FEP(초정밀 열역학 계산) 엔진 내재화</strong><br/> 깁스 자유 에너지(ΔG)를 엄밀히 추적하는 알고리즘으로 상대 결합력 오류율을 1.0 kcal/mol 이하로 낮춰 실험 결과와의 오차를 획기적으로 불식시킴.</td>
                </tr>
                <tr>
                  <td className="text-center font-bold">3. 천문학적인 H/W<br/>투자 비용 (CAPEX)</td>
                  <td>FEP 수준의 연산을 돌리기 위해선 억 단위의 엔터프라이즈급 GPU 클러스터를 제약사 내부에 직접 구축(On-Premise)해야 함.</td>
                  <td><strong>비용 최적화 분산 연산 프레임워크 지원</strong><br/> 연합학습의 성과물을 모아 글로벌 공용 AI 모델로 제공하되, 무거운 FEP 연산은 자사가 구축한 저렴한 클라우드에서 종량제로 빌려 쓰는 구독 모델 제공.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

      </div>
    </div>
  );
};

export default FeasibilityV4;
