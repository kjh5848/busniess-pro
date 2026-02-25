import React from 'react';

const FeasibilityV2 = () => {
  return (
    <div className="v2-theme v2-container">
      <div className="v2-paper">
        
        {/* Header Section */}
        <h1 className="v2-section-title">
          2. 실현 가능성 (Solution)
        </h1>

        {/* 2-1 */}
        <section>
          <h2 className="v2-sub-title">2-1. 창업 아이템의 개발 계획</h2>
          
          <div className="v2-table-wrapper">
            <table className="v2-table">
              <tbody>
                <tr>
                  <td className="v2-th-col" style={{width: '20%'}}>최종목표</td>
                  <td>기존 물리 기반 시뮬레이션(FEP)의 한계를 넘는 <strong>AI-물리 하이브리드 신약 개발 엔진 구축</strong></td>
                </tr>
                <tr>
                  <td className="v2-th-col">핵심지표</td>
                  <td>예측 오차(RMSE) ≤ 1.0 kcal/mol, 환경 설정 소요 시간 ≤ 10분, 초기 구축 비용 80% 절감</td>
                </tr>
                <tr>
                  <td className="v2-th-col">비전</td>
                  <td>실험실 수준의 정밀도를 웹상에 완전 구현하는 <strong>'Lab-on-Web' 분자 설계 자동화 OS</strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="v2-box-desc" style={{ marginTop: '1.5rem', fontWeight: 'bold' }}>
            ■ 핵심 구현 모듈 (AI-Physics Hybrid Engine) 프로세스
          </p>

          <div className="v2-process-diagram">
            <div className="v2-process-step">
              <div className="v2-step-num">Step 1</div>
              <div className="v2-step-title">Topology Builder</div>
              <div className="v2-step-desc">데이터 전처리<br/>(구조 추출)</div>
            </div>
            <div className="v2-arrow">→</div>
            <div className="v2-process-step">
              <div className="v2-step-num">Step 2</div>
              <div className="v2-step-title">Charge AI Predictor</div>
              <div className="v2-step-desc">AI 추론 연산<br/>(Transformer)</div>
            </div>
            <div className="v2-arrow">→</div>
            <div className="v2-process-step">
              <div className="v2-step-num">Step 3</div>
              <div className="v2-step-title">Auto-MD Protocol</div>
              <div className="v2-step-desc">물리 시뮬레이션<br/>최적화 루프</div>
            </div>
            <div className="v2-arrow">→</div>
            <div className="v2-process-step">
              <div className="v2-step-num">Step 4</div>
              <div className="v2-step-title">Web Analysis</div>
              <div className="v2-step-desc">결과 분석 보고서<br/>웹 시각화</div>
            </div>
          </div>
        </section>

        {/* 2-2 */}
        <section>
          <h2 className="v2-sub-title">2-2. 창업 아이템의 차별성 및 경쟁력 확보 전략</h2>
          
          <div className="v2-table-wrapper">
            <table className="v2-table">
              <thead>
                <tr>
                  <th style={{width: '15%'}}>구분</th>
                  <th style={{width: '28%'}}>기존 방식 (CADD SW)</th>
                  <th style={{width: '28%'}}>단순 AI 모델</th>
                  <th>동사 (Hybrid Engine)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="v2-th-col">핵심가치</td>
                  <td className="text-center">정밀도 중심</td>
                  <td className="text-center">속도 중심</td>
                  <td className="text-center" style={{fontWeight:'bold'}}>정밀도 + 속도 + 편의성</td>
                </tr>
                <tr>
                  <td className="v2-th-col">사용성</td>
                  <td className="text-center">명령어(CLI) 기반 복잡성</td>
                  <td className="text-center">블랙박스로 해석 난해</td>
                  <td className="text-center" style={{fontWeight:'bold'}}>Web GUI (No-Code)</td>
                </tr>
                <tr>
                  <td className="v2-th-col">비율/시간</td>
                  <td className="text-center">고비용 / 수일 소요</td>
                  <td className="text-center">저비용 / 수초 소요</td>
                  <td className="text-center" style={{fontWeight:'bold'}}>합리적 비용 / 수시간 내</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <p className="v2-box-desc" style={{ fontWeight: 'bold' }}>■ 기술 고도화 로드맵 (R&D Roadmap)</p>
            <div className="v2-box-grid" style={{ marginTop: '0.5rem' }}>
              <div className="v2-info-box">
                <div className="v2-box-title-area"><span>STEP 1</span><span>Validation</span></div>
                <p className="v2-box-desc"><strong>AI 엔진 + 웹 에디터 검증:</strong> 엔진 정밀도 벤치마크 테스트 완료(RMSE 1.0 이하) 및 GUI 프로토타입.</p>
              </div>
              <div className="v2-info-box">
                <div className="v2-box-title-area"><span>STEP 2</span><span>Automation</span></div>
                <p className="v2-box-desc"><strong>자동화 + SaaS 구독:</strong> 클라우드 병렬 연산을 연동하여 서비스를 자동화하고 B2B 과금 모델 런칭.</p>
              </div>
              <div className="v2-info-box">
                <div className="v2-box-title-area"><span>STEP 3</span><span>Expansion</span></div>
                <p className="v2-box-desc"><strong>API + 글로벌 파트너십:</strong> 글로벌 대형 제약사의 기존 인프라에 직접 호출 가능한 API 공급, 해외 지사 설립.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Funds */}
        <section>
          <h2 className="v2-sub-title">1단계 정부지원사업비 집행 계획</h2>
          
          <div className="v2-table-wrapper">
            <table className="v2-table">
              <thead>
                <tr>
                  <th style={{width: '20%'}}>비 목</th>
                  <th>산출 근거</th>
                  <th style={{width: '30%'}}>정부지원비 (원)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="v2-th-col">재료비</td>
                  <td>서버 모의 테스트용 인프라 / GPU 대여비</td>
                  <td className="text-center">10,000,000</td>
                </tr>
                <tr>
                  <td className="v2-th-col">외주용역비</td>
                  <td>시뮬레이션 대시보드 Web UI 시제품 제작</td>
                  <td className="text-center">10,000,000</td>
                </tr>
                <tr>
                  <td className="v2-th-col" style={{ borderBottom: 'none'}}>합 계</td>
                  <td style={{ borderBottom: 'none'}}></td>
                  <td className="text-center" style={{ borderBottom: 'none', fontWeight:'bold'}}>20,000,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

      </div>
    </div>
  );
};

export default FeasibilityV2;
