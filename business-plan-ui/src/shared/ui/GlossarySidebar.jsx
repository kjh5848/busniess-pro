import React from 'react';
import FloatingPanel from './FloatingPanel';
import { BookMarked, Landmark, TestTube2, Microscope } from 'lucide-react';

const glossaryData = [
  {
    category: "정책 및 비즈니스 용어",
    icon: <Landmark size={18} />,
    terms: [
      { name: "사일로 현상 (Silo Effect)", desc: "조직 부서나 기관 간에 데이터나 정보를 공유하지 않고 독자적으로만 사용하여 정보가 단절되는 현상. 보안 문제로 제약사들이 원본 데이터를 외부에 절대 공유하지 않는 한계점을 지칭함." },
      { name: "K-멜로디 프로젝트", desc: "국가 주도로 추진되는 '연합학습 기반 신약개발 가속화 프로젝트'. 데이터 노출 없이 여러 병원과 제약사의 데이터를 활용하는 AI 플랫폼 구축이 목표." },
      { name: "클라우드 서비스(웹) (Software as a Service)", desc: "소프트웨어를 직접 구매하여 컴퓨터에 설치하지 않고, 클라우드 기반 플랫폼을 통해 구독 형태로 이용하는 서비스 모델." },
      { name: "SOM / SAM / TAM", desc: "시장 규모 추정 프레임워크. TAM(전체 시장), SAM(유효 시장), SOM(수익 확보 가능 시장)의 순서로 세분화됨." },
    ]
  },
  {
    category: "AI 및 시뮬레이션 기술",
    icon: <TestTube2 size={18} />,
    terms: [
      { name: "연합학습 (Federated Learning)", desc: "원본 데이터를 특정 서버로 전송하지 않고 각 기관의 내부 서버에서 AI 모델을 학습시킨 뒤, 결과물(가중치)만 중앙으로 보내 결합하는 최신 보안 AI 기술." },
      { name: "FEP (자유에너지 섭동)", desc: "컴퓨터 시뮬레이션을 통해 결합 깁스 자유 에너지(ΔG)의 미세한 차이를 엄밀하게 추적, 약물 결합력을 실제 실험실 수준으로 초정밀하게 예측하는 기술." },
      { name: "In-silico (인 실리코)", desc: "세포(In-vitro)나 생체 동물(In-vivo) 조작이 아닌, 컴퓨터 가상 환경(시뮬레이션) 내에서 수행하는 약물 스크리닝 등의 생명과학 실험." },
      { name: "RMSE (평균 제곱근 오차)", desc: "AI 모델이 예측한 값과 실제 정답(실험 결과치) 특성 간의 오차를 통계적으로 나타낸 지표. 숫자가 0에 가까울수록 성능이 우수함을 뜻함." },
    ]
  },
  {
    category: "제약 및 바이오 R&D",
    icon: <Microscope size={18} />,
    terms: [
      { name: "PDBbind", desc: "단백질과 리간드(약물 후보) 간의 실험적인 3차원 결합 친화도 데이터가 모인 글로벌 표준 공개 벤치마크 데이터베이스." },
      { name: "Hit-to-Lead", desc: "수만 개의 화합물 중 특정 질환 타겟에 반응하는 유효물질(Hit)을 찾아내고, 이를 개선하여 가능성 높은 선도물질(Lead)로 발전시키는 극초기 신약탐색 단계." },
      { name: "후향적 검증 (Retrospective)", desc: "과거에 이미 정답(결합력)이 알려진 공공 검증 데이터셋을 제안된 AI 모델에 뒤늦게 입력해, 예측값이 정답과 일치하는지 백테스트하여 알고리즘 객관성을 증명하는 기법." },
    ]
  }
];

const GlossarySidebar = () => {
  return (
    <FloatingPanel
      title="핵심 용어 사전 (Glossary)"
      icon={<BookMarked size={24} />}
      color="#eab308" // Yellow shade
      defaultOpen={false}
      buttonPosition={{ bottom: '6.5rem', right: '1.5rem' }}
    >
      <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {glossaryData.map((section, idx) => (
          <div key={idx}>
            <h3 style={{ 
              fontSize: '1rem', 
              color: '#854d0e', 
              borderBottom: '2px solid #fef08a', 
              paddingBottom: '0.5rem', 
              marginBottom: '1rem',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}>
              {section.icon}
              {section.category}
            </h3>
            
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {section.terms.map((term, tIdx) => (
                <li key={tIdx} style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>
                  <div style={{ fontWeight: 'bold', color: '#854d0e', backgroundColor: '#fefce8', padding: '0.3rem 0.5rem', borderRadius: '4px', border: '1px solid #fde047', display: 'inline-block', marginBottom: '0.4rem' }}>
                    {term.name}
                  </div>
                  <div style={{ color: '#374151', wordBreak: 'keep-all', paddingLeft: '0.2rem' }}>
                    {term.desc}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
        
        <div style={{ fontSize: '0.75rem', color: '#a16207', textAlign: 'center', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px dashed #fde047' }}>
          * 본 용어집은 평가 위원들의 기술적 이해도 및 원활한 심사 진행을 돕기 위해 작성되었습니다.
        </div>
      </div>
    </FloatingPanel>
  );
};

export default GlossarySidebar;
