import React from 'react';
import { LayoutDashboard, Beaker, FileSpreadsheet, ShieldCheck } from 'lucide-react';

const FeasibilityV3 = () => {
  return (
    <div className="v2-theme v2-container">
      <div className="v2-paper">
        
        <h1 className="v2-section-title">
          2. 실현 가능성 (Solution)
        </h1>

        <section>
          <h2 className="v2-sub-title">2-1. 제품‧서비스의 개발/개선 방안</h2>

          {/* Rule 5: Key Message Quote */}
          <div className="v2-info-box" style={{ borderLeft: '4px solid #333', marginBottom: '1.5rem', backgroundColor: '#fcfcfc' }}>
            <p style={{ fontWeight: 'bold', margin: '0', fontSize: '1.05rem', wordBreak: 'keep-all', lineHeight: '1.6' }}>
              "고비용 연산 서버를 클라우드 구독 형태로 제공하고, 최신 인공지능(AI) 신경망으로 연산 병목을 제거하여 기존 물리엔진 대비 2배 이상의 예측 속도와 오픈소스 수준의 가격 경쟁력을 실현합니다."
            </p>
          </div>

          <p className="v2-box-desc" style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
            ■ 하이브리드(AI-FEP) 분자 시뮬레이션 클라우드 플랫폼 UI 구조
          </p>

          {/* Rule 4: UI Placeholders */}
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 calc(50% - 0.5rem)', border: '1px solid #d1d5db', borderRadius: '4px', padding: '1.5rem', textAlign: 'center', backgroundColor: '#f9fafb', minHeight: '160px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <LayoutDashboard size={40} style={{ color: '#9ca3af', marginBottom: '1rem' }} />
              <div style={{ fontWeight: 'bold', fontSize: '0.95rem', color: '#374151' }}>[화면 UI 1] 프로젝트 스크리닝 대시보드</div>
              <p style={{ fontSize: '0.8rem', color: '#6b7280', margin: '0.5rem 0 0 0', wordBreak: 'keep-all' }}>사용자가 다수의 화합물 데이터를 한눈에 모니터링하고 진행 상태를 확인하는 메인 화면 뷰.</p>
            </div>
            
            <div style={{ flex: '1 1 calc(50% - 0.5rem)', border: '1px solid #d1d5db', borderRadius: '4px', padding: '1.5rem', textAlign: 'center', backgroundColor: '#f9fafb', minHeight: '160px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Beaker size={40} style={{ color: '#9ca3af', marginBottom: '1rem' }} />
              <div style={{ fontWeight: 'bold', fontSize: '0.95rem', color: '#374151' }}>[화면 UI 2] 3D 분자 도킹 편집용 Web-Editor</div>
              <p style={{ fontSize: '0.8rem', color: '#6b7280', margin: '0.5rem 0 0 0', wordBreak: 'keep-all' }}>비전문가도 브라우저 상에서 분자 구조를 3D로 드래그하여 조작하고 결합 에너지를 검토하는 도구.</p>
            </div>
          </div>

          {/* Rule 1: Evidence Text */}
          <p style={{ fontSize: '0.75rem', color: '#6b7280', margin: '0 0 2rem 0' }}>
            * 근거: 자사 선행연구 보고서(2025.01) 첨부 요건 충족 및 프로토타입 UI/UX 설계안 (Figma 산출물 보유)
          </p>

          <p className="v2-box-desc" style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
            ■ 실증 및 MVP 개발 상세 추진 계획(액션 플랜)
          </p>

          {/* Rule 3: Meaningful Table Structure */}
          <div className="v2-table-wrapper" style={{ marginTop: '0.5rem' }}>
            <table className="v2-table" style={{ wordBreak: 'keep-all', lineHeight: '1.6' }}>
              <thead>
                <tr>
                  <th style={{width: '20%'}}>세부 과제명</th>
                  <th style={{width: '15%'}}>기간</th>
                  <th style={{width: '65%'}}>개발 목표치 및 핵심 기능 명세</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">분자 전하 모델링<br/>AI 백엔드 구축</td>
                  <td className="text-center">협약 후<br/>3개월 이내</td>
                  <td>
                    • <strong>구현 내용:</strong> 최신 인공지능(AI) 알고리즘을 응용하여 약 1백만 개의 방대한 화학 물질 데이터를 모델에 사전 학습.<br/>
                    • <strong>목표 지표:</strong> 실제 실험 결과와의 오차율 극소화 (오차 지표 2.0 미만 등급 확보). 복잡한 기존 교과서적 물리 역학 계산 대비 결괏값 도출 속도 최소 80% 이상 혁신적 단축.
                  </td>
                </tr>
                <tr>
                  <td className="text-center">클라우드 인프라<br/>스케줄러 연동</td>
                  <td className="text-center">협약 후<br/>5개월 이내</td>
                  <td>
                    • <strong>구현 내용:</strong> AWS/KT G-Cloud 등 외부 GPU 인스턴스와 API로 연동되어 사용량 집중 시 자원을 동적으로 할당받는 분산 시스템 개발.<br/>
                    • <strong>목표 지표:</strong> 동시 시뮬레이션 30건 이상 병렬 처리 지원 및 장애 복구율 99.9% 보장 로트 분할 로직 설계.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </section>

        <section>
          <h2 className="v2-sub-title" style={{ marginTop: '3rem' }}>2-2. 고객 요구사항 대응 방안</h2>
          
          <p className="v2-box-desc" style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
            ■ 주요 타겟 고객(초기 바이오 벤처원)의 고충 및 당사 해결 방안
          </p>
          <div className="v2-table-wrapper" style={{ marginTop: '0.5rem' }}>
            <table className="v2-table" style={{ wordBreak: 'keep-all', lineHeight: '1.6' }}>
              <thead>
                <tr>
                  <th style={{width: '30%'}}>고객 요구사항 (Pain Point)</th>
                  <th style={{width: '70%'}}>당사 플랫폼의 맞춤형 대응 방안</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">IT 비전공 연구원의<br/>어려운 코딩 조작법</td>
                  <td>
                    • <strong>드래그 앤 드롭 방식의 3D 웹 편집기 제공:</strong> 파이썬(Python) 등 복잡한 코딩 지식 없이도, 마우스 조작만으로 분자 구조를 조립하고 결합 에너지를 즉시 확인할 수 있는 직관적인 화면(UI)을 구축합니다.
                  </td>
                </tr>
                <tr>
                  <td className="text-center">연산 결과 모니터링 중<br/>컴퓨터 과부하</td>
                  <td>
                    • <strong>방치형(서버리스) 대시보드 알림 지원:</strong> 연산은 당사의 클라우드가 대신 처리하므로, 고객은 모바일이나 태블릿으로도 분석 진행률을 확인하고 카카오톡/이메일로 완료 알림(Push)을 받을 수 있습니다.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="v2-sub-title" style={{ marginTop: '3rem' }}>2-3. 제품‧서비스의 차별화 방안</h2>
          
          <p className="v2-box-desc" style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
            ■ 글로벌 선도기업(독일 슈뢰딩거사) 소프트웨어 대비 구조적 우위 요소
          </p>

          {/* Rule 3 & 6: Meaningful Comparison Table with strict wrapping control */}
          <div className="v2-table-wrapper" style={{ marginTop: '0.5rem' }}>
            <table className="v2-table" style={{ wordBreak: 'keep-all', lineHeight: '1.6' }}>
              <thead>
                <tr>
                  <th style={{width: '20%'}}>비교 항목</th>
                  <th style={{width: '35%'}}>기존 해외 독점 S/W (S사)</th>
                  <th style={{width: '45%'}}>당사 플랫폼 (인공지능 결합형)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center font-bold">예측 정확도<br/>(오차율 지표)</td>
                  <td className="text-center">실제 화학 실험 결과와 오차(RMSE) 평균 0.9 ~ 1.2 수준</td>
                  <td>
                    <strong>실제 실험을 대체할 수 있는 상용화 마지노선(오차 1.0 내외) 동등성 확보.</strong><br/>
                    인공지능이 분자의 특성을 역산하여, 수십 시간이 걸리던 기존 고전 물리 역학의 연산 정확도를 매우 유사하게 모방합니다.
                  </td>
                </tr>
                <tr>
                  <td className="text-center font-bold">결과 도출 속도</td>
                  <td className="text-center">1개 물질 당 약 24시간~48시간 소요<br/>(슈퍼컴퓨터급 서버 필수)</td>
                  <td>
                    <strong>1개 물질 당 약 12~15시간으로 검증 시간 50% 단축.</strong><br/>
                    가장 병목이 심한 복잡한 양자 계산 단계를 인공지능이 딥러닝 패턴 인식으로 밀리초(ms) 단위로 즉각 반환 처리합니다.
                  </td>
                </tr>
                <tr>
                  <td className="text-center font-bold">도입 비용</td>
                  <td className="text-center">연간 수천만 원 라이선스와<br/>내부 서버망 구축비 수억 원 발생</td>
                  <td>
                    <strong>월 단위 웹 구독 모델(SaaS) 형태. 수백만 원 수준.</strong><br/>
                    접속 브라우저만 있으면 연산은 개발사의 클라우드에서 대신 처리해주므로, 초기 막대한 서버 비용(자본금 지출)을 완벽히 회피합니다.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* Rule 1: Evidence Text */}
          <p style={{ fontSize: '0.75rem', color: '#6b7280', margin: '0.5rem 0 0 0' }}>
            * 근거 1: Journal of Chemical Information and Modeling (2024), "물리 기반 예측 프로그램 정확도 분석" - S사 오차율 참조.<br/>
            * 근거 2: 당사 자체 벤치마크 테스트 결과 (자체 서버 기준) *비고: 오차율(RMSE)은 낮을수록 실제 실험 결과와 예측이 일치함을 뜻함
          </p>

        </section>

      </div>
    </div>
  );
};

export default FeasibilityV3;
