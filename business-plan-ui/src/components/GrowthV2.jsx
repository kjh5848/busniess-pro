import React from 'react';

const GrowthV2 = () => {
  return (
    <div className="v2-theme v2-container">
      <div className="v2-paper">
        
        {/* Header Section */}
        <h1 className="v2-section-title">
          4. 성장전략 (Scale-up)
        </h1>

        <section>
          <h2 className="v2-sub-title">4-1. 목표 시장 진입 및 창업아이템 사업화 전략</h2>
          
          <p className="v2-box-desc" style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
            ■ 목표 시장 진입 전략 (Go-to-Market)
          </p>

          <div className="v2-process-diagram" style={{ marginBottom: '2rem' }}>
            <div className="v2-process-step">
              <div className="v2-step-title">1단계: 무상 배포</div>
              <div className="v2-step-desc">대학/연구소 대상<br/>초기 레퍼런스 확보</div>
            </div>
            <div className="v2-arrow">→</div>
            <div className="v2-process-step">
              <div className="v2-step-title">2단계: 국내 B2B</div>
              <div className="v2-step-desc">바이오 벤처 대상<br/>SaaS 유료화 실증</div>
            </div>
            <div className="v2-arrow">→</div>
            <div className="v2-process-step">
              <div className="v2-step-title">3단계: 아시아 확장</div>
              <div className="v2-step-desc">중견 제약사 맞춤형<br/>API 모델 확산</div>
            </div>
            <div className="v2-arrow">→</div>
            <div className="v2-process-step">
              <div className="v2-step-title">4단계: Global 진출</div>
              <div className="v2-step-desc">글로벌 Big Pharma<br/>신약 공동 개발</div>
            </div>
          </div>

          <p className="v2-box-desc" style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
            ■ 비즈니스 모델 (수익화 모델)
          </p>
          <div className="v2-table-wrapper" style={{ marginTop: '0.5rem' }}>
            <table className="v2-table">
              <thead>
                <tr>
                  <th style={{width: '33%'}}>SaaS 구독 (Main)</th>
                  <th style={{width: '33%'}}>On-Demand 연산 과금</th>
                  <th style={{width: '33%'}}>Enterprise API</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">월 기본 요금 (초기 스타트업 타겟)</td>
                  <td className="text-center">GPU 시간당 인프라 과금 (대규모 연산)</td>
                  <td className="text-center">연간 라이선스 (보안/대기업 파이프라인)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="v2-box-desc" style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
            ■ 세부 시장별 맞춤형 접근 전략
          </p>
          <div className="v2-table-wrapper" style={{ marginTop: '0.5rem' }}>
            <table className="v2-table">
              <thead>
                <tr>
                  <th style={{width: '20%'}}>목표 시장</th>
                  <th style={{width: '20%'}}>성장 트리거 (니즈)</th>
                  <th style={{width: '60%'}}>제품 적합성 및 판매 전략</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="v2-th-col">대학 / 연구소</td>
                  <td className="text-center">고가 S/W 예산 부족</td>
                  <td>
                    <strong>PLG (제품 주도 성장) 전략: </strong><br/>
                    웹 기반 체험판 배포로 사용자를 확보(Lock-in)하고, 교육용 무상 라이선스로 저변을 확대함.
                  </td>
                </tr>
                <tr>
                  <td className="v2-th-col">국내 바이오 벤처</td>
                  <td className="text-center">즉시 사용 툴 선호</td>
                  <td>
                    <strong>SaaS 구독 모델: </strong><br/>
                    월 구독형 도입으로 초기 인프라 구축 비용(GPU 구매 등) 장벽을 제거하고 팀 협업 기능 제공.
                  </td>
                </tr>
                <tr>
                  <td className="v2-th-col">중견/대형 제약사</td>
                  <td className="text-center">내부 보안 및 DX</td>
                  <td>
                    <strong>Private SaaS / API: </strong><br/>
                    사외망 반출이 불가능한 핵심 약물 데이터 처리를 위해 기업 전용 사내망 연동형 솔루션 제공.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </section>

        <section>
          <h2 className="v2-sub-title">4-2. 자금 확보 및 중장기 사회적 가치</h2>

          <p className="v2-box-desc" style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
            ■ 단계별 자금 조달 계획 (Funding)
          </p>
          <div className="v2-table-wrapper" style={{ marginTop: '0.5rem' }}>
            <table className="v2-table">
              <thead>
                <tr>
                  <th style={{width: '15%'}}>단계</th>
                  <th style={{width: '20%'}}>예상 시기</th>
                  <th style={{width: '20%'}}>목표 금액</th>
                  <th style={{width: '45%'}}>주요 활용 계획</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="v2-th-col">Seed</td>
                  <td className="text-center">협약기간 내</td>
                  <td className="text-center">1억 원</td>
                  <td>시제품(MVP) 제작 및 핵심 알고리즘 특허 출원</td>
                </tr>
                <tr>
                  <td className="v2-th-col">Pre-A</td>
                  <td className="text-center">협약 종료 후 (TIPS)</td>
                  <td className="text-center">7~10억 원</td>
                  <td>Auto-MD 기술 고도화 R&D 및 S/W 전문 인력 확충</td>
                </tr>
                <tr>
                  <td className="v2-th-col">Series A</td>
                  <td className="text-center">서비스 정식 런칭 후</td>
                  <td className="text-center">30억 원 이상</td>
                  <td>다국어 글로벌 마케팅 전개 및 해외(미국) 영업망 확보</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="v2-box-desc" style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
            ■ ESG 혁신: 중장기 사회적 가치 기여 전략
          </p>
          <div className="v2-box-grid" style={{ marginTop: '0.5rem' }}>
            <div className="v2-info-box">
              <div className="v2-box-title-area"><span>[Environment]</span><span>동물실험 축소<br/>(Ethical)</span></div>
              <p className="v2-box-desc">
                정밀한 컴퓨터 시뮬레이션(In-silico) 도입을 통하여 초기 타겟 물질의 오류를 조기 검출함으로써, <strong>무분별한 화학 합성 폐기물을 줄이고 윤리적 문제인 동물 실험(In-vivo) 횟수를 획기적으로 감축</strong>합니다.
              </p>
            </div>
            <div className="v2-info-box">
              <div className="v2-box-title-area"><span>[Social]</span><span>연구 생태계<br/>민주화 기여</span></div>
              <p className="v2-box-desc">
                매년 수억 원에 달하는 프리미엄 예측 도구를 합리화하여 중소 벤처기업 및 학계 연구자들에게 시장 <strong>정보 접근의 불평등을 해소하고, "돈이 없어 연구를 포기하는 일이 없도록" 제약산업 생태계를 평탄화</strong>합니다.
              </p>
            </div>
          </div>

        </section>

      </div>
    </div>
  );
};

export default GrowthV2;
