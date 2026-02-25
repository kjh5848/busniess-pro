import React from 'react';

const TeamV2 = () => {
  return (
    <div className="v2-theme v2-container">
      <div className="v2-paper">
        
        {/* Header Section */}
        <h1 className="v2-section-title">
          5. 팀 구성 (Team)
        </h1>

        <section>
          <h2 className="v2-sub-title">5-1. 대표자 및 팀원 보유 역량</h2>
          
          <p className="v2-box-desc" style={{ marginBottom: '1rem' }}>
            <strong>[조직 구성 원칙]</strong><br />
            AI 엔진 시스템 개발자(Transformer 모델 전문가)를 필두로, 계산화학 박사수료 연구원(SCI급 논문 다수 게재 경험자), 
            그리고 제약 마케팅 전문가로 이루어진 <strong>하이브리드 신약 예측 S/W 특화 정예 조직</strong>입니다.
          </p>

          <p className="v2-box-desc" style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
            ■ 팀 구성(안) 및 담당 업무
          </p>
          <div className="v2-table-wrapper" style={{ marginTop: '0.5rem' }}>
            <table className="v2-table">
              <thead>
                <tr>
                  <th style={{width: '10%'}}>순번</th>
                  <th style={{width: '15%'}}>직위</th>
                  <th style={{width: '20%'}}>담당 업무</th>
                  <th style={{width: '40%'}}>보유 역량(경력 및 학력 등)</th>
                  <th style={{width: '15%'}}>구성 상태</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">1</td>
                  <td className="text-center">공동대표</td>
                  <td className="text-center"><strong>S/W 개발 총괄</strong></td>
                  <td>OO학 박사 (AI 딥러닝 아키텍처 전공) <br/>OO학과 교수 재직 중 (관련 R&D O년)</td>
                  <td className="text-center">완료</td>
                </tr>
                <tr>
                  <td className="text-center">2</td>
                  <td className="text-center">팀장/대리</td>
                  <td className="text-center"><strong>홍보 및 B2B 영업</strong></td>
                  <td>OO학 학사 (생명공학 백그라운드) <br/>제약 S/W 솔루션 B2B 영업/마케팅 (O년)</td>
                  <td className="text-center">예정('26.06)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="v2-sub-title" style={{ marginTop: '3rem' }}>5-2. 협력 기관 현황 및 협업 방안</h2>

          <p className="v2-box-desc" style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
            ■ 기술 및 인프라 협력 네트워크
          </p>

          <div className="v2-table-wrapper" style={{ marginTop: '0.5rem' }}>
            <table className="v2-table">
              <thead>
                <tr>
                  <th style={{width: '10%'}}>구분</th>
                  <th style={{width: '20%'}}>파트너명</th>
                  <th style={{width: '25%'}}>보유 역량</th>
                  <th style={{width: '30%'}}>협업 방안 (세부내용)</th>
                  <th style={{width: '15%'}}>협력 시기</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">1</td>
                  <td className="text-center">OO전자</td>
                  <td className="text-center">대규모 H/W 인프라 역량</td>
                  <td>AI 시제품 모델 연산 구동을 위한 <strong>서버/GPU 등 테스트 인프라 환경망 무상 지원</strong></td>
                  <td className="text-center">'26.06</td>
                </tr>
                <tr>
                  <td className="text-center">2</td>
                  <td className="text-center">OO기업 (웹 에이전시)</td>
                  <td className="text-center">Web UI/UX 개발 능력</td>
                  <td>비전문가용 노코드 환경을 위한 <strong>분자 시뮬레이션 웹 대시보드 화면 제작 외주 용역</strong></td>
                  <td className="text-center">'26.08</td>
                </tr>
              </tbody>
            </table>
          </div>

        </section>

      </div>
    </div>
  );
};

export default TeamV2;
