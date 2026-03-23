import React from 'react';
import ProblemBackgroundV3 from './ProblemBackgroundV3';
import MarketAnalysisV3 from './MarketAnalysisV3';
import SolutionPreparationV3 from './SolutionPreparationV3';
import SolutionExecutionV3 from './SolutionExecutionV3';
import BusinessModelStrategyV5 from './BusinessModelStrategyV5';
import FundExecutionPlanV5 from './FundExecutionPlanV5';
import TeamCompositionV5 from './TeamCompositionV5';
import '../index.css';

export default function BusinessPlanV3() {
  return (
    <div className="hwp-document">
      {/* 0. 문서 머리말 고정 타이틀 영역 */}
      <h1 className="hwp-title">
        [가제: 쉘파이어(Shell-Fire)] 폐굴껍데기의 다공성 구조를 활용해 유해 가스와 악취를 잡은 친환경 안심 캠핑 착화재
      </h1>
      
      {/* 사업 전체의 명분을 담은 서두 인용구 */}
      <div className="hwp-quote-box">
        통영 폐기물(굴껍데기)을 압도적 탈황 무기로 치환하여, 캠핑 유해 매연 근절과 글로벌 ESG 선순환을 동시 달성함
      </div>

      {/* ======================================= */}
      {/* 챕터 1: 문제 인식 모듈들                */}
      {/* ======================================= */}
      <div className="hwp-chapter-divider" style={{ borderBottom: '3px solid #000', paddingBottom: '12px', marginBottom: '30px', marginTop: '40px' }}>
        <h1 style={{ fontSize: '26px', fontWeight: '900', color: '#000', margin: 0 }}>1. 문제인식 (Problem)</h1>
      </div>
      <ProblemBackgroundV3 />
      <MarketAnalysisV3 />

      {/* ======================================= */}
      {/* 챕터 2: 실현 가능성 모듈들              */}
      {/* ======================================= */}
      <div className="hwp-chapter-divider" style={{ borderBottom: '3px solid #000', paddingBottom: '12px', marginBottom: '30px', marginTop: '60px' }}>
        <h1 style={{ fontSize: '26px', fontWeight: '900', color: '#000', margin: 0 }}>2. 실현가능성 (Solution)</h1>
      </div>
      <SolutionPreparationV3 />
      <SolutionExecutionV3 />

      {/* ======================================= */}
      {/* 챕터 3: 성장 전략 모듈들                */}
      {/* ======================================= */}
      <div className="hwp-chapter-divider" style={{ borderBottom: '3px solid #000', paddingBottom: '12px', marginBottom: '30px', marginTop: '60px' }}>
        <h1 style={{ fontSize: '26px', fontWeight: '900', color: '#000', margin: 0 }}>3. 성장전략 (Scale-up)</h1>
      </div>
      <BusinessModelStrategyV5 />
      <FundExecutionPlanV5 />

      {/* ======================================= */}
      {/* 챕터 4: 조직 구성 (Team) 모듈들         */}
      {/* ======================================= */}
      <div className="hwp-chapter-divider" style={{ borderBottom: '3px solid #000', paddingBottom: '12px', marginBottom: '30px', marginTop: '60px' }}>
        <h1 style={{ fontSize: '26px', fontWeight: '900', color: '#000', margin: 0 }}>4. 팀 구성 (Team)</h1>
      </div>
      <TeamCompositionV5 />
    </div>
  );
}
