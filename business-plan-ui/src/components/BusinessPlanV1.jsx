import React from 'react';
import ProblemBackgroundV1 from './ProblemBackgroundV1';
import MarketAnalysisV1 from './MarketAnalysisV1';
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
        폐기물 문제를 혁신적 사업 구조로 해결하여 기후환경 가치와 압도적인 수익성을 동시에 당성합니다.
      </div>

      {/* 모듈 분리된 1-1 파트: 문제 인식 및 배경 */}
      <ProblemBackgroundV1 />

      {/* 모듈 분리된 1-2 파트: 시장 분석 및 데이터 검증 */}
      <MarketAnalysisV1 />

    </div>
  );
}
