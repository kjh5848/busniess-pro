import React from 'react';
import '../indexV2.css';
import '../AppV2.css';

const ProblemRecognitionV2 = () => {
  return (
    <div className="v2-theme v2-container">
      <div className="v2-paper">
        
        {/* Header Section */}
        <h1 className="v2-section-title">
          1. 문제 인식 (Problem)
        </h1>

        {/* 1-1. Background & Current Status */}
        <section>
          <h2 className="v2-sub-title">1-1. 창업아이템의 배경 및 현황</h2>
          
          {/* HWP Style Info Boxes */}
          <div className="v2-box-grid">
            <div className="v2-info-box">
              <div className="v2-box-title-area">
                <span>[경제성 한계]</span>
                <span>신약 R&D<br/>비용 임계점</span>
              </div>
              <p className="v2-box-desc">
                <span className="v2-keyword">비용 병목</span>
                외산 소프트웨어(Schrödinger 등)는 사용자당 <strong>연간 1.4억 원</strong> 이상의 과도한 라이선스를 요구하여 국내 바이오 벤처의 90%가 도입을 포기함.
              </p>
            </div>

            <div className="v2-info-box">
              <div className="v2-box-title-area">
                <span>[기술성 한계]</span>
                <span>전통적<br/>예측 기술 한계</span>
              </div>
              <p className="v2-box-desc">
                <span className="v2-keyword">블랙박스 이슈</span>
                명령어(CLI) 기반의 높은 진입장벽과 블랙박스 AI 모델로 인해 <strong>결과 해석이 난해</strong>하고 오차가 커서 신뢰도 하락.
              </p>
            </div>

            <div className="v2-info-box">
              <div className="v2-box-title-area">
                <span>[보안성 한계]</span>
                <span>클라우드 종속<br/>기술 안보 위협</span>
              </div>
              <p className="v2-box-desc">
                <span className="v2-keyword">데이터 주권</span>
                핵심 자산인 신약 후보물질의 데이터가 <strong>해외 서버로 전송</strong>되어, 국가적 기술 안보와 데이터 유출 우려 존재.
              </p>
            </div>
          </div>

          {/* HWP Style Table */}
          <div className="v2-table-wrapper">
            <table className="v2-table">
              <thead>
                <tr>
                  <th style={{ width: '20%' }}>구분</th>
                  <th style={{ width: '40%' }}>글로벌 선도 기업 (외산 A사)</th>
                  <th style={{ width: '40%' }}>국내 바이오 벤처 현황</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="v2-th-col">도입 비용</td>
                  <td className="text-center text-bold">연간 라이선스 약 1.4억 원</td>
                  <td className="text-center">예산 부족으로 도입 포기 및 수작업</td>
                </tr>
                <tr>
                  <td className="v2-th-col">기술 장벽</td>
                  <td className="text-center text-bold">전문 전산화학 인력 필수</td>
                  <td className="text-center">연구 인력 부족으로 합성 실험 지연</td>
                </tr>
                <tr>
                  <td className="v2-th-col">데이터 보안</td>
                  <td className="text-center text-bold">해외 클라우드 종속</td>
                  <td className="text-center">보안망 외부 망분리 한계 노출</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 1-2. Necessity */}
        <section>
          <h2 className="v2-sub-title">1-2. 창업아이템의 개발 필요성</h2>
          
          {/* HWP Style Blockquote */}
          <div className="v2-quote-box">
            <div className="v2-quote-text">
              "비싼 S/W가 없어서 연구를 포기하는 기업이 없어야 한다.<br/>
              기술의 민주화를 통해 K-바이오 생태계에 기여할 것"
            </div>
            <div className="v2-quote-author">
              - 대표자 핵심 비전 및 개발 동기 -
            </div>
          </div>

          <p className="v2-box-desc" style={{ marginBottom: '2rem' }}>
            본 대표자는 트랜스포머(Transformer) 기술과 분자동력학(MD)을 연구하여 <strong>AI-물리 하이브리드 예측 엔진</strong>을 자체 설계할 수 있는 실무적 역량을 보유함. 이를 바탕으로 고정밀/비용 효율적인 예측 시뮬레이터 완전 국산화를 추진함.
          </p>
        </section>

        {/* 1-3. Solution Workflow Diagram */}
        <section>
          <h2 className="v2-sub-title">1-3. 문제 해결을 위한 핵심 프로세스 (해결방안)</h2>
          
          <div className="v2-process-diagram">
            <div className="v2-process-step">
              <div className="v2-step-num">Step 1</div>
              <div className="v2-step-title">토폴로지 전처리</div>
              <div className="v2-step-desc">구조 자동 인식 및<br/>전처리 생성</div>
            </div>
            
            <div className="v2-arrow">→</div>
            
            <div className="v2-process-step">
              <div className="v2-step-num">Step 2</div>
              <div className="v2-step-title">전하 AI 예측</div>
              <div className="v2-step-desc">Transformer 기반<br/>부분 전하 예측</div>
            </div>

            <div className="v2-arrow">→</div>

            <div className="v2-process-step">
              <div className="v2-step-num">Step 3</div>
              <div className="v2-step-title">자동 시뮬레이션</div>
              <div className="v2-step-desc">물리 엔진 기반<br/>FEP 변수 검증</div>
            </div>

            <div className="v2-arrow">→</div>

            <div className="v2-process-step">
              <div className="v2-step-num">Step 4</div>
              <div className="v2-step-title">웹 대시보드</div>
              <div className="v2-step-desc">노코드 환경 기반<br/>결과 분석 리포트</div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ProblemRecognitionV2;
