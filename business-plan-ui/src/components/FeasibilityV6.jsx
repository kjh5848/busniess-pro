import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import uiImage1 from '../assets/3d 분자구조 UI.png';
import uiImage2 from '../assets/메인 대시보드 UI.png';

const roiData = [
  { category: '초기 유효물질 도출', 기존방식: 12, FEP도입: 3 },
  { category: '선도물질 최적화', 기존방식: 18, FEP도입: 6 },
  { category: '전임상 성공률(%)', 기존방식: 10, FEP도입: 45 },
];

const FeasibilityV6 = () => {
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
              "정부의 'K-멜로디 프로젝트' 방향성에 발맞춰, 제약 데이터의 사일로화(Silo Effect)를 근본적으로 타파한다. 국가 차원의 통합 데이터 연동을 위한 '데이터 아키텍처 및 형식 표준화' 기술을 내장한 FEP(자유에너지 섭동) 원격 시뮬레이터."
            </p>
          </div>

          <p className="v2-box-desc" style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
            ■ 자체 성능 우위 입증 (1.0 kcal/mol 이하) 및 데이터 아키텍처 인프라 혁신
          </p>
          <div className="v2-info-box" style={{ flexDirection: 'column', backgroundColor: '#fcfcfc', border: '1px solid #333', marginBottom: '1.5rem', padding: '0' }}>
            <div style={{ padding: '1rem' }}>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#111', wordBreak: 'keep-all', lineHeight: '1.6' }}>
                <strong>[후향적 성능 검증(Retrospective Validation) 백서 발간]</strong><br/>
                제안된 엔진의 신뢰성을 객관적으로 증빙하기 위해, 공공 데이터셋(PDBbind 등) 1,000종을 활용한 대규모 블라인드 백테스트를 수행하여 성능 우위에 대한 공식 백서를 글로벌 학회에 발표할 예정입니다.
              </p>
              <p style={{ margin: '0.8rem 0 0 0', fontSize: '0.9rem', color: '#111', wordBreak: 'keep-all', lineHeight: '1.6', borderTop: '1px dashed #999', paddingTop: '0.8rem' }}>
                <strong>[데이터 형식/지표 표준화 파이프라인 구축 선도]</strong><br/>
                이질적인 비정형 바이오 의료 데이터(임상, 분자구조 등)를 일관성 있게 표준화하는 전처리 엔진을 함께 배포하여, 모델 적용 시 발생하던 불일치 단점을 해결하고 국가 통합데이터(K-멜로디 등)와의 호환성을 극대화합니다.
              </p>
            </div>
          </div>

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
              <div style={{ textAlign: 'center', fontSize: '0.8rem', color: '#6b7280', marginTop: '0.5rem' }}>[그림 1] 연합학습 & FEP 시뮬레이션 활용 시 소요 기간(개월) 및 성공률 비교</div>
            </div>
            
            <div style={{ flex: 1 }}>
              <p className="v2-box-desc" style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
                [Environment] 언드러거블 표적 등 난치성 질환 실패 리스크 감축
              </p>
              <p style={{ fontSize: '0.9rem', color: '#4b5563', margin: '0 0 1rem 0', wordBreak: 'keep-all', lineHeight: '1.6' }}>
                기존 언드러거블(Undruggable)로 분류되어 개발이 지연됐던 표적에도 3D 물리 기반 예측을 통한 '설계-합성-테스트' 주기를 주 단위로 단축합니다. 다수의 파이프라인 보유로 인한 막대한 초기 실패율을 제어하고, 실효성 없는 <strong>전임상 동물 실험 단계의 희생을 40% 이상 경감</strong>하는 강력한 ESG 성과를 창출합니다.
              </p>
              
              <p style={{ fontSize: '0.75rem', color: '#6b7280', margin: '0' }}>
                * 시간/비용 절감 산출 근거: 자사 FEP 엔진 프로토타입 비교 백테스트 추정치<br/>
                * (기존 단순 도킹 소프트웨어의 2~4 Kcal/mol 오차율 대비 획기적 개선치 반영)
              </p>
            </div>
          </div>

          <p className="v2-box-desc" style={{ fontWeight: 'bold', marginBottom: '0.5rem', marginTop: '2rem' }}>
            ■ 초기 시제품(MVP) UI 구현 방향성
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: '100%', height: '220px', backgroundColor: '#fff', border: '1px solid #999', padding: '0.5rem', overflow: 'hidden' }}>
                <img src={uiImage2} alt="메인 대시보드 UI" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ fontSize: '0.8rem', color: '#111', marginTop: '0.5rem', fontWeight: 'bold' }}>
                &lt; FEP 프로젝트 시뮬레이션 통합 관리 대시보드 &gt;
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: '100%', height: '220px', backgroundColor: '#fff', border: '1px solid #999', padding: '0.5rem', overflow: 'hidden' }}>
                <img src={uiImage1} alt="3D 분자구조 UI" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ fontSize: '0.8rem', color: '#111', marginTop: '0.5rem', fontWeight: 'bold' }}>
                &lt; 웹 브라우저 기반 3D 분자 구조 결합 렌더링 화면 &gt;
              </div>
            </div>
          </div>

        </section>

        <section>
          <h2 className="v2-sub-title" style={{ marginTop: '3rem'}}>2-2. 고객 요구사항 대응 방안</h2>
          
          <p className="v2-box-desc" style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
            ■ 주요 핵심 문제(Pain Point) 돌파 전략 전략
          </p>

          <div className="v2-table-wrapper" style={{ marginTop: '0.5rem' }}>
            <table className="v2-table" style={{ wordBreak: 'keep-all', lineHeight: '1.6' }}>
              <thead>
                <tr>
                  <th style={{width: '20%'}}>고객 핵심 불만족 요소</th>
                  <th style={{width: '40%'}}>제약/바이오 업계의 기존 한계점</th>
                  <th style={{width: '40%'}}>자사 혁신 솔루션 (표준화 & 연합학습)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center font-bold">1. 구조 유출 두려움<br/>(Silo Effect 현상)</td>
                  <td>핵심 기밀인 물질 구조를 외부에 전송하는 것을 극히 꺼려하여 제약 기업 간 <strong>데이터 사일로화(Silo Effect)</strong>가 심각수준에 달함.</td>
                  <td><strong>연합학습(Federated Learning) 구조 설계</strong><br/> 원본 데이터는 제약사 내부 PC(로컬)에만 머무르며, 파라미터(학습 가중치)만 클라우드와 교환하여 근본적 원천 보안 달성.</td>
                </tr>
                <tr>
                  <td className="text-center font-bold">2. 비구조화 데이터<br/>(AI 학습 불가)</td>
                  <td>기관마다 각기 다른 포맷, 용어, 지표를 사용하여 불일치나 오류가 속출, AI 플랫폼에 직접적으로 활용하기엔 큰 한계가 존재함.</td>
                  <td><strong>접근 가능한 "데이터 표준화" 모듈 지원</strong><br/> 수집 시점부터 데이터 구조 형식을 자체 알고리즘으로 표준화하여, 국가 빅데이터 구축 사업 등 외부 인프라와의 API 확장을 지원.</td>
                </tr>
                <tr>
                  <td className="text-center font-bold">3. 단순 예측의 오차<br/>(낮은 신뢰성)</td>
                  <td>기존 단순 도킹 소프트웨어는 유연한 단백질 결합 환경을 무시해 위양성이 과다, 신약 개발 현장의 신뢰를 상실함.</td>
                  <td><strong>초정밀 FEP 계산 클라우드 컴퓨팅 결합</strong><br/> 1.0 kcal/mol 이하의 엄밀한 열역학 추적 알고리즘(엔진)을 자사가 구축한 클라우드에서 저렴하게 구독/분산 처리할 수 있도록 지원.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

      </div>
    </div>
  );
};

export default FeasibilityV6;
