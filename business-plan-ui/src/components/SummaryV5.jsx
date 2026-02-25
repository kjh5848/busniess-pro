import React from 'react';
import uiImage from '../assets/3d 분자구조 UI.png';
import archImage from '../assets/architecture_diagram.png';

const SummaryV5 = () => {
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
                  <li><strong>핵심기능:</strong> 연합학습(Federated Learning) 기반 초정밀 신약 결합력 예측(FEP) 클라우드 플랫폼</li>
                  <li><strong>소비자층:</strong> 자체 거대 서버 인프라 구축 여력이 없는 초기 바이오 벤처기업, 국공립 대학 연구실, 중소 제약사</li>
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
                  현재 단계 : 플랫폼 핵심 요소 기술 확보 및 시제품(MVP) 정식 개발 중
                </div>
                <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.85rem', color: '#111', lineHeight: '1.6' }}>
                  <li><strong>아이디어 기획:</strong> 3D 물리 기반(Physics-based) AI 시뮬레이션 융합 아키텍처로 수개월이 걸리던 '설계-합성-테스트' 주기를 주 단위로 단축하는 로직 검증 완료</li>
                  <li><strong>핵심 기술 확보:</strong> 자체 PDBbind 후향적 검증을 통한 코어 알고리즘 설계 및 원천 기술 특허 1건 출원 진행 중</li>
                  <li><strong>시제품 제작:</strong> 본 정부과제 자본을 활용하여 보안망 통신 모듈 외주 이식, 패키징 고도화 및 첫 B2B 솔루션 정식 출시를 목표로 개발 중</li>
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
                  <li><strong>경쟁제품 대비 차별성 1 (제로 트러스트 보안):</strong> 중앙 집중식 데이터 수집 관행을 타파하고 원본 화합물 교환 없이 가중치만 교환하는 '연합학습' 모델로 기밀 유출 차단</li>
                  <li><strong>경쟁제품 대비 차별성 2 (오차율 신뢰성):</strong> 화합물 1,000종 대상 후향적 검증(Retrospective validation) 실시로 1.0 kcal/mol 예측 오차율 달성 예정</li>
                  <li><strong>경쟁력 (매진율 확보 및 비용 통제 역량):</strong> 클라우드 스케일링 최적화 노하우를 접목하여 외산 솔루션 대비 라이선스 절감 수익 및 높은 서비스 매출 총이익률 방어 동시 구현</li>
                </ul>
              </div>
            </div>

            <div className="v2-info-box" style={{ flexDirection: 'column', height: '100%', padding: '0', border: '1px solid #333' }}>
              <div style={{ backgroundColor: '#e5e5e5', padding: '0.5rem 1rem', borderBottom: '1px solid #333', fontWeight: 'bold', color: '#111' }}>
                4. 국내외 목표시장
              </div>
              <div style={{ padding: '1rem' }}>
                <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.85rem', color: '#111', lineHeight: '1.6' }}>
                  <li><strong>목표시장 1 (초기 진입 - SOM):</strong> 예산이 한정적인 국내 산학기반 바이오 스타트업 및 주요 대학 랩실 200여 곳 최우선 공략</li>
                  <li><strong>목표시장 2 (성장 거점 - SAM):</strong> '특허 절벽(Patent Cliff)' 극복을 위해 조 단위 AI 약물 탐색 비용을 쏟는 글로벌 빅파마 및 보수적인 중견 제약사 파트너 유치</li>
                  <li><strong>판매 전략:</strong> 기업 환경에 맞는 맞춤형 연합 노드를 설치 무상 지원한 뒤, FEP 연산 사용 횟수에 비례하는 클라우드 종량 빌링(Billing) 모델로 유도하는 락-인(Lock-in) 장벽 구축</li>
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
                &lt; 비전문가 친화형 분자 구조 랜더링 대시보드 화면 &gt;
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: '100%', height: '160px', backgroundColor: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #999', overflow: 'hidden' }}>
                <img src={archImage} alt="연합학습 아키텍처" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ fontSize: '0.8rem', color: '#111', marginTop: '0.5rem', fontWeight: 'bold' }}>
                &lt; 타겟 프라이버시 원천 보호를 위한 연합 네트워크 개념도 &gt;
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SummaryV5;
