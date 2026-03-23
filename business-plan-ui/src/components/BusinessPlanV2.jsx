import React from 'react';
import ProblemBackgroundV2 from './ProblemBackgroundV2';
import MarketAnalysisV2 from './MarketAnalysisV2';
import SolutionPreparationV2 from './SolutionPreparationV2';
import SolutionExecutionV2 from './SolutionExecutionV2';
import BusinessModelStrategyV2 from './BusinessModelStrategyV2';
import FundExecutionPlanV2 from './FundExecutionPlanV2';
import '../index.css';

export default function BusinessPlanV2() {
  return (
    <div className="hwp-document">
      {/* 0. 문서 머리말 고정 타이틀 영역 */}
      <h1 className="hwp-title">
        폐굴껍데기의 다공성 구조를 활용해 유해 가스와 악취를 잡은 친환경 안심 캠핑 착화재
      </h1>
      
      {/* 사업 전체의 명분을 담은 서두 인용구 */}
      <div className="hwp-quote-box">
        통영 폐껍데기 수산 폐기물을 강력한 경쟁 무기로 치환하여, 캠퍼들의 안전할 권리와 글로벌 ESG 의제를 동시에 해결합니다.
      </div>

      {/* ======================================= */}
      {/* 챕터 1: 문제 인식 모듈들                */}
      {/* ======================================= */}
      <div className="hwp-chapter-divider" style={{ borderBottom: '3px solid #000', paddingBottom: '12px', marginBottom: '30px', marginTop: '40px' }}>
        <h1 style={{ fontSize: '26px', fontWeight: '900', color: '#000', margin: 0 }}>1. 문제인식 (Problem)</h1>
      </div>
      <ProblemBackgroundV2 />
      <MarketAnalysisV2 />

      {/* ======================================= */}
      {/* 챕터 2: 실현 가능성 모듈들              */}
      {/* ======================================= */}
      <div className="hwp-chapter-divider" style={{ borderBottom: '3px solid #000', paddingBottom: '12px', marginBottom: '30px', marginTop: '60px' }}>
        <h1 style={{ fontSize: '26px', fontWeight: '900', color: '#000', margin: 0 }}>2. 실현가능성 (Solution)</h1>
      </div>
      <SolutionPreparationV2 />
      <SolutionExecutionV2 />

      {/* ======================================= */}
      {/* 챕터 3: 성장 전략 모듈들                */}
      {/* ======================================= */}
      <div className="hwp-chapter-divider" style={{ borderBottom: '3px solid #000', paddingBottom: '12px', marginBottom: '30px', marginTop: '60px' }}>
        <h1 style={{ fontSize: '26px', fontWeight: '900', color: '#000', margin: 0 }}>3. 성장전략 (Scale-up)</h1>
      </div>
      <BusinessModelStrategyV2 />
      <FundExecutionPlanV2 />
    </div>
  );
}
