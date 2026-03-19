import React from 'react';

const EvaluationReport = () => {
  return (
    <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1.5rem', position: 'sticky', top: '5rem', maxHeight: 'calc(100vh - 6rem)', overflowY: 'auto', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
      <h3 style={{ marginTop: 0, color: '#0f172a', borderBottom: '2px solid #cbd5e1', paddingBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span>📋</span> 종합 심사 결과 리포트 (V4)
      </h3>
      
      <div style={{ marginBottom: '1.5rem' }}>
        <p style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}><strong>종합 평균 점수:</strong> <span style={{ color: '#2563eb', fontWeight: 'bold' }}>88 / 100</span></p>
        <p style={{ margin: 0, fontSize: '0.9rem', color: '#334155', lineHeight: '1.6' }}>
          <strong>종합 심사평:</strong> '연합학습'을 통한 보안 문제 해결과 'FEP' 결합은 매우 우수하나, 총 이익률(마진) 및 고가치 고객(빅파마) 대상 전환 영업 전략 보완이 필요함.
        </p>
      </div>

      <div style={{ padding: '1rem', backgroundColor: '#eff6ff', borderRadius: '6px', marginBottom: '1.5rem', borderLeft: '4px solid #3b82f6' }}>
        <h4 style={{ marginTop: 0, marginBottom: '0.5rem', color: '#1e3a8a' }}>💡 멘토 핵심 보완 가이드 (Action Items)</h4>
        
        <div style={{ marginBottom: '1rem' }}>
          <strong style={{ display: 'block', fontSize: '0.9rem', color: '#111' }}>1. FEP 종량제 마진율 및 BEP 타임라인 (성장전략 4-1/4-4)</strong>
          <span style={{ fontSize: '0.85rem', color: '#475569', lineHeight: '1.5', display: 'block' }}>
            클라우드 업체(AWS 등) 수수료를 제외하고 영업 이익이 얼마나 남는지 불투명. 최소 30~40% 이상의 Gross Margin 방어가 가능한 인프라 설계(Spot Instance 등) 문구를 추가할 것.
          </span>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <strong style={{ display: 'block', fontSize: '0.9rem', color: '#111' }}>2. 빅파마 전환 영업 전략 사다리 (성장전략 4-5)</strong>
          <span style={{ fontSize: '0.85rem', color: '#475569', lineHeight: '1.5', display: 'block' }}>
            기본 구독(월 9만원)만으로는 스케일업 불가. 초기 대학 연구실의 성공 사례(Reference)를 바탕으로, 글로벌 CRO 기구의 '검증 리포트 발행'을 통해 빅파마 신뢰를 뚫어내는 로직 서술.
          </span>
        </div>

        <div>
          <strong style={{ display: 'block', fontSize: '0.9rem', color: '#111' }}>3. 성능 오차율 1.0 이하 증빙 시나리오 (실현가능성 2-1 / 성과지표 3-2)</strong>
          <span style={{ fontSize: '0.85rem', color: '#475569', lineHeight: '1.5', display: 'block' }}>
            오차율 목표를 증명할 방법이 부재함. PDBbind 등 1,000종 화합물 데이터셋을 활용한 후향적 성능 검증(Retrospective validation) 백서 발간을 핵심 KPI로 명문화할 것.
          </span>
        </div>
      </div>

      <h4 style={{ borderBottom: '1px solid #cbd5e1', paddingBottom: '0.5rem', marginBottom: '1rem' }}>👨‍⚖️ 심사위원별 코멘트</h4>
      
      <div style={{ fontSize: '0.85rem', color: '#334155', marginBottom: '1rem' }}>
        <strong style={{ color: '#0f172a' }}>[전문가형 심사역] (86점)</strong><br/>
        연합학습 보안 아이디어 훌륭. 단, 연산 클라우드 비용 대비 마진율(Margin) 계산 누락과 R&D 1.0 오차율 증빙 프로토타입 백테스트 지표가 아쉬움.
      </div>
      
      <div style={{ fontSize: '0.85rem', color: '#334155', marginBottom: '1rem' }}>
        <strong style={{ color: '#0f172a' }}>[스케일업 VC] (90점)</strong><br/>
        락인(Lock-in) 전략 스케일업 구조 좋음. 초기 학계 시장만으론 BEP 불가. 빅파마 타겟 캐즘(Chasm) 극복을 위한 영업 파트너십(CRO 등) 전략 보완 요망.
      </div>
      
      <div style={{ fontSize: '0.85rem', color: '#334155' }}>
        <strong style={{ color: '#0f172a' }}>[공공/초보자형] (88점)</strong><br/>
        동물 실험 경감 스토리는 정부지원 명분에 100% 부합. 기술 용어의 비유적 설명이 직관적임. 시드 투자 1억 명분에 대한 연결고리를 더 구체화하면 완벽함.
      </div>

    </div>
  );
};

export default EvaluationReport;
