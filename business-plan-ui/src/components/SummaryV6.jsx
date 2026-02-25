import React from 'react';
import uiImage from '../assets/3d 분자구조 UI.png';
import archImage from '../assets/architecture_diagram.png';

const SummaryV6 = () => {
  return (
    <div className="v2-theme v2-container" style={{ marginBottom: '2rem' }}>
      <div className="v2-paper">
        
        <h1 className="v2-section-title" style={{ marginTop: '0', textAlign: 'center' }}>
          □ 창업아이템 개요(요약)
        </h1>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
          
          {/* Left Column: 1. 창업아이템 소개 & 3. 개발단계 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="v2-info-box" style={{ flexDirection: 'column', height: '100%', padding: '0', border: '1px solid #333' }}>
              <div style={{ backgroundColor: '#e5e5e5', padding: '0.5rem 1rem', borderBottom: '1px solid #333', fontWeight: 'bold', color: '#111' }}>
                1. 창업아이템 소개
              </div>
              <div style={{ padding: '1rem' }}>
                <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.85rem', color: '#111', lineHeight: '1.6' }}>
                  <li><strong>핵심기능:</strong> K-멜로디 정책에 부합하는 연합학습 기반 초정밀 신약 결합력 예측(FEP) 클라우드 플랫폼</li>
                  <li><strong>소비자층:</strong> 자체 거대 서버 인프라 구축 여력이 없는 초기 바이오 벤처기업, 국공립 대학 연구실, 중견 제약사</li>
                  <li><strong>사용처:</strong> 신약 유효 물질 도출(Hit-to-Lead) 및 타겟 물질 최적화 단계의 고도화된 컴퓨터 가상(In-silico) 스크리닝</li>
                </ul>
              </div>
            </div>

            <div className="v2-info-box" style={{ flexDirection: 'column', height: '100%', padding: '0', border: '1px solid #333' }}>
              <div style={{ backgroundColor: '#e5e5e5', padding: '0.5rem 1rem', borderBottom: '1px solid #333', fontWeight: 'bold', color: '#111' }}>
                3. 개발단계
              </div>
              <div style={{ padding: '1rem' }}>
                <div style={{ padding: '0.5rem', border: '1px dotted #333', textAlign: 'center', fontWeight: 'bold', color: '#111', marginBottom: '0.5rem' }}>
                  현재 단계 : 핵심 요소 기술 확보 및 시제품(MVP) 정식 제작 중
                </div>
                <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.85rem', color: '#111', lineHeight: '1.6' }}>
                  <li><strong>아이디어 기획:</strong> 3D 물리 기반(Physics-based) AI 시뮬레이션 융합 아키텍처로 수개월의 '설계-합성-테스트' 주기를 주 단위로 단축하는 로직 검증 완료</li>
                  <li><strong>핵심 기술 확보:</strong> 자체 PDBbind 후향적 검증을 통한 3D 예측 코어 알고리즘 개념 정립 및 딥러닝 1.0 kcal/mol 이하 오차율 방어 기술 특허 출원</li>
                  <li><strong>시제품 제작:</strong> 본 사업 자본을 활용하여 보안 통신 연합학습망 이식 및 패키징 고도화를 통한 클라우드 파이프라인 MVP 정식 출시 진행</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: 2. 창업아이템의 차별성 & 4. 국내외 목표시장 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="v2-info-box" style={{ flexDirection: 'column', height: '100%', padding: '0', border: '1px solid #333' }}>
              <div style={{ backgroundColor: '#e5e5e5', padding: '0.5rem 1rem', borderBottom: '1px solid #333', fontWeight: 'bold', color: '#111' }}>
                2. 창업아이템의 차별성
              </div>
              <div style={{ padding: '1rem' }}>
                <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.85rem', color: '#111', lineHeight: '1.6' }}>
                  <li><strong>경쟁제품 대비 차별성 1 (원천 보안성):</strong> 경쟁사들의 중앙 집중식 데이터 수집 방식과 달리, 최초 원본 구조 유출입 없이 파라미터만 분산되어 전송되는 '연합학습형' 보안 레이어로 독보적 신뢰성 제시</li>
                  <li><strong>경쟁제품 대비 차별성 2 (오류 정정 자동화):</strong> 산재된 의료 기관별 비표준 데이터를 자체 통합 API로 일괄 식별하고 전처리하는 AI 모듈 내재화 탑재</li>
                  <li><strong>경쟁력 (도입 효율 및 마진율 방어 역량):</strong> 클라우드 스팟 인스턴스 자동 스케일아웃 기술 도입으로 기존 S사 등 외산 솔루션의 무거운 구독료 대비 초기 도입비용을 약 65% 절감하는 압도적 비용 경쟁 우위 확보</li>
                </ul>
              </div>
            </div>

            <div className="v2-info-box" style={{ flexDirection: 'column', height: '100%', padding: '0', border: '1px solid #333' }}>
              <div style={{ backgroundColor: '#e5e5e5', padding: '0.5rem 1rem', borderBottom: '1px solid #333', fontWeight: 'bold', color: '#111' }}>
                4. 국내외 목표시장
              </div>
              <div style={{ padding: '1rem' }}>
                <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.85rem', color: '#111', lineHeight: '1.6' }}>
                  <li><strong>목표시장 1 (초기 진입 - SOM):</strong> 비용 한계에 부딪힌 국내 산학연 기반 신약 스타트업 및 대학원 랩실 200여 곳 우선 공략</li>
                  <li><strong>목표시장 2 (거점 확장 - SAM):</strong> '특허 절벽(Patent Cliff)' 극복을 위해 조 단위 투자를 단행 중인 국내외 중견 제약사 및 글로벌 빅파마의 신약 파이프라인 수요 타겟</li>
                  <li><strong>판매 전략:</strong> 초기 검증을 위해 무상 '평가용 연합 노드' 무료 파트너 자격 배포 정책을 선행 전개. 이후 FEP 예측 사용 연산량에 완벽히 비례하여 요금이 발생하는 클라우드 종량 빌링(Billing) 시스템으로 점진적 과금제(구독형) 전환 유도 전략</li>
                </ul>
              </div>
            </div>
          </div>
          
        </div>

        {/* 5. 이미지 영역 */}
        <div className="v2-info-box" style={{ flexDirection: 'column', padding: '0', border: '1px solid #333' }}>
          <div style={{ backgroundColor: '#e5e5e5', padding: '0.5rem 1rem', borderBottom: '1px solid #333', fontWeight: 'bold', color: '#111' }}>
            5. 이미지 (참고사진 및 구조 연합 설계도)
          </div>
          
          <div style={{ padding: '1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: '100%', height: '160px', backgroundColor: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #999', overflow: 'hidden' }}>
                <img src={uiImage} alt="비전문가 친화형 대시보드" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ fontSize: '0.8rem', color: '#111', marginTop: '0.5rem', fontWeight: 'bold' }}>
                &lt; 공공 데이터 통합 파이프라인 전처리 시스템 대시보드 화면 &gt;
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: '100%', height: '160px', backgroundColor: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #999', overflow: 'hidden' }}>
                <img src={archImage} alt="연합학습 아키텍처" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ fontSize: '0.8rem', color: '#111', marginTop: '0.5rem', fontWeight: 'bold' }}>
                &lt; 사일로 현상 원천 해결을 위한 암호화 연합학습망 개념도 &gt;
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SummaryV6;
