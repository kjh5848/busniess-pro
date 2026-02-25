import React from 'react';

const PerformanceV2 = () => {
  return (
    <div className="v2-theme v2-container">
      <div className="v2-paper">
        
        {/* Header Section */}
        <h1 className="v2-section-title">
          3. 성과목표 (~2026. 11. 30.까지)
        </h1>

        <section>
          <h2 className="v2-sub-title">3-1. 성과지표</h2>
          
          <div className="v2-table-wrapper">
            <table className="v2-table">
              <thead>
                <tr>
                  <th style={{width: '10%'}}>구 분</th>
                  <th style={{width: '25%'}}>성 과 지 표</th>
                  <th style={{width: '65%'}}>일정 및 목표 세부내용</th>
                </tr>
              </thead>
              <tbody>
                {/* 공통 항목 */}
                <tr>
                  <td className="v2-th-col" rowSpan="3">공 통</td>
                  <td className="text-center" style={{fontWeight: 'bold'}}>아이템 고도화 목표</td>
                  <td>
                    <div style={{ marginBottom: '0.3rem' }}>▶ <strong>‘26.06:</strong> 필수 S/W 백엔드, AI 전하 예측 핵심 인력 채용</div>
                    <div style={{ marginBottom: '0.3rem' }}>▶ <strong>‘26.08:</strong> 노코드 방식 시뮬레이션 웹 대시보드 UI/UX 구축</div>
                    <div style={{ marginBottom: '0.3rem' }}>▶ <strong>‘26.11:</strong> AI-물리 하이브리드 엔진 MVP 시제품 제작 완료</div>
                  </td>
                </tr>
                <tr>
                  <td className="text-center" style={{fontWeight: 'bold'}}>매출목표(원)</td>
                  <td>
                    <div>▶ <strong>‘26.11:</strong> 0원 (초기 점유율 파이를 위한 무상 베타 테스터 배포)</div>
                  </td>
                </tr>
                <tr>
                  <td className="text-center" style={{fontWeight: 'bold'}}>고용목표(명)</td>
                  <td>
                    <div>▶ <strong>‘26.06:</strong> 기존( 1 )명 / 신규( 1 )명 ➞ 총( 2 )명 달성</div>
                  </td>
                </tr>

                {/* 선택 항목 */}
                <tr>
                  <td className="v2-th-col" rowSpan="3">선 택</td>
                  <td className="text-center" style={{fontWeight: 'bold'}}>투자유치 금액(원)</td>
                  <td>
                    <div>▶ <strong>‘26.11:</strong> 정부지원금 100,000,000원 상당 시드(Seed) 확보</div>
                  </td>
                </tr>
                <tr>
                  <td className="text-center" style={{fontWeight: 'bold'}}>타지원사업 선정</td>
                  <td>
                    <div>▶ <strong>‘26.12 (이후):</strong> TIPS 창업성장기술개발사업 목표 및 액셀러레이팅 연계</div>
                  </td>
                </tr>
                <tr>
                  <td className="text-center" style={{fontWeight: 'bold'}}>지재권(출원/등록)</td>
                  <td>
                    <div>▶ <strong>‘26.11:</strong> AI-FEP 하이브리드 자동화 프로토콜 관련 특허 1건 출원</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="v2-sub-title" style={{ marginTop: '3rem'}}>3-2. 목표 달성계획</h2>
          
          <div className="v2-box-grid">
            <div className="v2-info-box" style={{ flexDirection: 'column' }}>
              <p className="v2-box-desc" style={{ marginBottom: '0.5rem' }}>
                <span className="v2-keyword">아이템 고도화</span>
                <strong>[하이브리드 엔진 백엔드 완성 및 프론트엔드 통합]</strong>
              </p>
              <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.9rem', color: 'var(--hwp-dark)' }}>
                <li>자체 분자 모델(Transformer) 학습 및 성능 평가 (FreeSolv 데이터셋 기준 RMSE 오차 테스트 진행)</li>
                <li>오픈소스 분자동력학 엔진(OpenMM 등) 제어 컨테이너 파이프라인 자동화 모듈 작성</li>
                <li>전문 외주 용역을 통한 비전문가용 화학 구조 Web View Editor 및 결과 시각화 UI 개발</li>
              </ul>
            </div>

            <div className="v2-info-box" style={{ flexDirection: 'column' }}>
              <p className="v2-box-desc" style={{ marginBottom: '0.5rem' }}>
                <span className="v2-keyword">베타 테스터 확보</span>
                <strong>[초기 공공 인프라 롱테일 시장 공략을 통한 레퍼런스 확립]</strong>
              </p>
              <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.9rem', color: 'var(--hwp-dark)' }}>
                <li>외산 S/W 예산이 부족한 국내 주요 약학 대학/연구소/초기 바이오 벤처에 데모 버전 무상 배포(약 10개 팀 타겟)</li>
                <li>사용자 UI/UX 피드백을 빠르게 수집하고, 논문 상의 "사용한 예측 도구 레퍼런스" 표기를 통한 마케팅 확산 채널 형성</li>
              </ul>
            </div>

            <div className="v2-info-box" style={{ flexDirection: 'column' }}>
              <p className="v2-box-desc" style={{ marginBottom: '0.5rem' }}>
                <span className="v2-keyword">후속 성장 동력</span>
                <strong>[TIPS R&D 과제 연계 및 Pre-A 단계 투자 유치]</strong>
              </p>
              <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.9rem', color: 'var(--hwp-dark)' }}>
                <li>협약기간 내 예측 오차(RMSE), 동작 시간 단축 등의 정량 목표 지표 달성을 증빙하는 외부 검증 평가 진행</li>
                <li>달성된 지표를 기반으로 제약 분야 전문 액셀러레이터(AC) 및 벤처캐피탈(VC) 네트워킹, '27년 기업부설연구소 인증 및 7억 규모 자금 조달</li>
              </ul>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default PerformanceV2;
