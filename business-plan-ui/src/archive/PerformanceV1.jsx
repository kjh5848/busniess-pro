import React from 'react';

const PerformanceV1 = () => {
  return (
    <div className="v2-theme v2-container">
      <div className="v2-paper">
        
        <h1 className="v2-section-title">
          3. 창업아이템의 사업화성과 (~2026. 11. 30.까지)
        </h1>

        <section>
          <h2 className="v2-sub-title">3-1. 제품·서비스 목표 및 성과지표</h2>

          {/* Rule 5: Key Message Quote */}
          <div className="v2-info-box" style={{ borderLeft: '4px solid #333', marginBottom: '1.5rem', backgroundColor: '#fcfcfc' }}>
            <p style={{ fontWeight: 'bold', margin: '0', fontSize: '1.05rem', wordBreak: 'keep-all', lineHeight: '1.6' }}>
              ▶ 단백질 구조 스크리닝(Boltz-2) 및 결합 자유 에너지 정밀 검수(OpenFE) 연계 하이브리드 파이프라인의 핵심인 노코드(코딩 불필요) 자체 구축형(폐쇄망) 패키지 MVP 최종 확보
            </p>
          </div>

          <p className="v2-box-desc" style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
            ■ 주요 달성 지표 (사업 평가 기준 - 기술 표준화 및 엔진 개발 중심)
          </p>

          <div className="v2-table-wrapper" style={{ marginTop: '0.5rem', marginBottom: '2rem' }}>
            <table className="v2-table" style={{ wordBreak: 'keep-all', lineHeight: '1.4', fontSize: '0.85rem' }}>
              <thead>
                <tr>
                  <th style={{ width: '10%' }}>구 분</th>
                  <th style={{ width: '70%' }}>성 과 지 표</th>
                  <th style={{ width: '20%' }}>일 정</th>
                </tr>
              </thead>
              <tbody>
                {/* 공통 지표 */}
                <tr>
                  <td rowSpan="3" className="text-center font-bold" style={{ backgroundColor: '#fcfcfc' }}>공<br/>통</td>
                  <td>
                    <strong>바이오 인공지능 운영관리 및 시각화 화면 엔진 통합 고도화</strong><br/>
                    - Boltz-2 구조 예측 및 OpenFE 결합 시뮬레이션을 연결하는 오프라인 패키징 셋업 (개발자용 명령어 환경)<br/>
                    - 웹 브라우저 기반으로 접근하는 노코드(코딩 불필요) 대시보드(PoC버전) 배포<br/>
                    - 제약사 내부 망분리(오프라인) 워크스테이션에서 데모 구동 성공
                  </td>
                  <td className="text-center">
                    '26. 06. 30.<br/>
                    '26. 09. 30.<br/>
                    '26. 11. 30.
                  </td>
                </tr>
                <tr>
                  <td><strong>매출목표(원)</strong> (비공개 제약 파트너사 대상 B2B 자체 구축형(폐쇄망) POC 계약 1건 이상 진행)</td>
                  <td className="text-center font-bold">'26. 11. 30.</td>
                </tr>
                <tr>
                  <td><strong>고용목표(명)</strong><br/>기존(0)명 / 신규(1)명 / 총(1)명 (계산화학 도메인 전문 연구원 1명 채용)</td>
                  <td className="text-center font-bold">'26. 06. 30.</td>
                </tr>
                
                {/* 선택 지표 */}
                <tr>
                  <td rowSpan="5" className="text-center font-bold" style={{ backgroundColor: '#fcfcfc' }}>선<br/>택</td>
                  <td><strong>투자유치 금액(원)</strong> (바이오·AI 특화 엔젤/시드 투자 유치 활동 — IR 자료 배포 및 투자자 미팅 5건 이상)</td>
                  <td className="text-center">'26. 11. 30.</td>
                </tr>
                <tr>
                  <td><strong>타지원사업 선정</strong> (창업성장기술개발사업 또는 TIPS 프로그램 지원 신청)</td>
                  <td className="text-center">'26. 09. 30.</td>
                </tr>
                <tr>
                  <td><strong>인증서 등 취득</strong> (벤처기업 인증 취득 및 기술보증기금 기술평가 완료)</td>
                  <td className="text-center">'26. 11. 30.</td>
                </tr>
                <tr>
                  <td><strong>지재권(출원, 등록)</strong> (오프라인 환경 AI 종속성 자동 해소 방법 — 국내 특허 출원 1건)</td>
                  <td className="text-center">'26. 09. 30.</td>
                </tr>
                <tr>
                  <td><strong>기타</strong> (대학 연구실·바이오 벤처 대상 MVP 테스트베드 MOU 3개 기관 체결 + 서울 데모데이 참여)</td>
                  <td className="text-center">'26. 10. 30.</td>
                </tr>
              </tbody>
            </table>
          </div>

        </section>

        <section>
          <h2 className="v2-sub-title" style={{ marginTop: '3rem'}}>3-2. 성과지표 달성계획</h2>

          <p className="hwp-guide-text" style={{ marginBottom: '1.5rem' }}>
            ※ 사업기간(~26.11) 동안 목표를 달성하기 위한 구체적인 계획 기재
          </p>

          <div className="v2-table-wrapper" style={{ marginTop: '0.5rem' }}>
            <table className="v2-table" style={{ wordBreak: 'keep-all', lineHeight: '1.6', fontSize: '0.88rem' }}>
              <thead>
                <tr>
                  <th style={{ width: '18%' }}>목표 구분</th>
                  <th style={{ width: '52%' }}>구체적 달성 방안</th>
                  <th style={{ width: '30%' }}>일정 및 KPI</th>
                </tr>
              </thead>
              <tbody>
                {/* 아이템 고도화 목표 */}
                <tr>
                  <td className="text-center font-bold" rowSpan="3" style={{ backgroundColor: '#fcfcfc' }}>
                    아이템<br/>고도화<br/>목표
                  </td>
                  <td>
                    <strong>1단계 — MVP 핵심 엔진 통합</strong><br/>
                    · Boltz-2, OpenFE 최적화 로컬 래핑 패키징 완료<br/>
                    · 자동설치 패키지 기반 원클릭 폐쇄망 셋업 스크립트 작성
                  </td>
                  <td className="text-center">
                    '26. 04. ~ 06.<br/>
                    <strong>엔진 3종 오프라인 구동 성공</strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>2단계 — 노코드(코딩 불필요) 대시보드 UI 구축</strong><br/>
                    · 비개발 연구원 대상 웹 시각화 화면 프론트엔드 개발 (React)<br/>
                    · 분자구조 3D 뷰어 / 작업큐 모니터링 / 결과리포트 화면 탑재
                  </td>
                  <td className="text-center">
                    '26. 07. ~ 09.<br/>
                    <strong>대시보드 베타 배포 완료</strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>3단계 — H/W 인프라 제휴 및 환경 최적화</strong><br/>
                    · 소비자용 장비(RTX 4090) 기반 시뮬레이션 환경 최적화<br/>
                    · 대학원생·연구원 대상 사용성 테스트(UT) 및 피드백 반영
                  </td>
                  <td className="text-center">
                    '26. 10. ~ 11.<br/>
                    <strong>최적화 환경 POC 완료</strong>
                  </td>
                </tr>
                {/* 매출목표 */}
                <tr>
                  <td className="text-center font-bold" style={{ backgroundColor: '#fcfcfc' }}>
                    매출<br/>목표
                  </td>
                  <td>
                    · B2C 클라우드 서비스(웹) 얼리버드 유료 전환 (무료 베타 → 월 구독 전환)<br/>
                    · B2B 비공개 파트너스 대상 FEP(Front-End Premium) 1차 실증 과금<br/>
                    · 데모데이·바이오 컨퍼런스 B2B 리드 확보 후 POC 계약 추진
                  </td>
                  <td className="text-center">
                    '26. 11. 30.<br/>
                    <strong>매출 발생 실증 완료</strong>
                  </td>
                </tr>
                {/* 고용목표 */}
                <tr>
                  <td className="text-center font-bold" style={{ backgroundColor: '#fcfcfc' }}>
                    고용<br/>목표
                  </td>
                  <td>
                    · 기존(0)명 → 신규(1)명 정규 채용<br/>
                    · 단백질 3D 구조 및 표적 결합 검수를 위한 계산화학 혹은 AI 전문가 채용<br/>
                    · 대표(인공지능 운영관리 아키텍트)와 딥테크 연구원(모델링) 간의 투트랙 분업
                  </td>
                  <td className="text-center">
                    '26. 06. 30.<br/>
                    <strong>2명 채용 완료</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

      </div>
    </div>
  );
};

export default PerformanceV1;
