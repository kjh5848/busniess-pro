import React from 'react';
import ProblemBackgroundV1 from './ProblemBackgroundV1';
import MarketAnalysisV1 from './MarketAnalysisV1';
import SolutionPreparationV1 from './SolutionPreparationV1';
import SolutionExecutionV1 from './SolutionExecutionV1';
import BusinessModelStrategyV1 from './BusinessModelStrategyV1';
import FundExecutionPlanV1 from './FundExecutionPlanV1';
import '../index.css';

export default function BusinessPlanV1() {
  return (
    <div className="hwp-document">
      {/* 0. 문서 머리말 고정 타이틀 영역 */}
      <h1 className="hwp-title">
        폐굴껍데기의 다공성 구조를 활용해 유해 가스와 악취를 잡은 친환경 안심 캠핑 착화재
      </h1>
      
      {/* 사업 전체의 명분을 담은 서두 인용구 */}
      <div className="hwp-quote-box">
        폐기물 문제를 혁신적 사업 구조로 해결하여 기후환경 가치와 압도적인 수익성을 동시에 달성합니다.
      </div>

      {/* ======================================= */}
      {/* 챕터 1: 문제 인식 모듈들                */}
      {/* ======================================= */}
      <ProblemBackgroundV1 />
      <MarketAnalysisV1 />

      {/* ======================================= */}
      {/* 챕터 2: 실현 가능성 모듈들              */}
      {/* ======================================= */}
      <SolutionPreparationV1 />
      <SolutionExecutionV1 />

      {/* ======================================= */}
      {/* 챕터 3: 성장 전략 모듈들                */}
      {/* ======================================= */}
      <BusinessModelStrategyV1 />
      <FundExecutionPlanV1 />
    </div>
  );
}
