import React from 'react';
import FloatingPanel from '../../shared/ui/FloatingPanel';
import { ClipboardList, Target, TrendingUp, Globe } from 'lucide-react';

const ReviewReportV5 = () => {
  return (
    <FloatingPanel
      title="심사 피드백 반영 요약 (V5)"
      icon={<ClipboardList size={24} />}
      color="#3b82f6" // Blue shade
      defaultOpen={false}
      buttonPosition={{ bottom: '11rem', right: '1.5rem' }}
    >
      <div style={{ padding: '1.25rem' }}>
        <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: '1.6', marginBottom: '1.5rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '1rem' }}>
          현재 화면의 사업계획서(V5)는 V4 평가 리포트의 <strong>Action Item 3가지</strong>를 완벽하게 수용하여 업데이트된 버전입니다. 문서 본문의 <span style={{color: '#2563eb', fontWeight: 'bold', backgroundColor: '#eff6ff', padding: '2px 6px', borderRadius: '4px'}}>파란색 하이라이트/배경</span> 영역을 확인해 보세요.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          
          <div style={{ borderLeft: '3px solid #3b82f6', paddingLeft: '1rem' }}>
            <h4 style={{ margin: '0 0 0.5rem 0', color: '#1e3a8a', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Target size={18} style={{ color: '#3b82f6' }} />
              1. 오차율 증빙 KPI 명문화
            </h4>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#334155', lineHeight: '1.6' }}>
              <strong>[2-1. 실현가능성] & [3-1, 3-2. 성과목표]</strong><br/>
              막연했던 목표 오차율(1.0 이하)을 타당하게 증명하기 위해, <strong>PDBbind 데이터셋을 활용한 후향적 성능 검증 백서 발간 계획</strong>을 추가했습니다. 또한 예산 집행 표에 GPU 백테스트 렌탈비용(600만원)을 명시하여 실행력을 더했습니다.
            </p>
          </div>

          <div style={{ borderLeft: '3px solid #3b82f6', paddingLeft: '1rem' }}>
            <h4 style={{ margin: '0 0 0.5rem 0', color: '#1e3a8a', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <TrendingUp size={18} style={{ color: '#3b82f6' }} />
              2. 마진율(Margin) 방어 논리 추가
            </h4>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#334155', lineHeight: '1.6' }}>
              <strong>[4-1. 성장전략]</strong><br/>
              FEP 종량제의 수익성을 입증하기 위해, AWS Spot Instance를 활용하여 클라우드 서버 원가 대비 <strong>최소 40% 이상의 매출총이익률(Gross Margin)</strong>을 구조적으로 확보한다는 문구를 수익 추정 근거에 추가했습니다.
            </p>
          </div>

          <div style={{ borderLeft: '3px solid #3b82f6', paddingLeft: '1rem' }}>
            <h4 style={{ margin: '0 0 0.5rem 0', color: '#1e3a8a', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Globe size={18} style={{ color: '#3b82f6' }} />
              3. 글로벌 빅파마 공략 세일즈 전략
            </h4>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#334155', lineHeight: '1.6' }}>
              <strong>[4-5. 성장전략]</strong><br/>
              초기 학계의 마이크로 레퍼런스를 모은 뒤, 공신력 있는 <strong>글로벌 CRO 기구와 "유효성 검증 리포트 협업"</strong>을 진행하여 보수적인 Top-tier 빅파마의 신뢰 캐즘을 극복한다는 사다리꼴(Step-by-step) 영업 로직을 체계화했습니다.
            </p>
          </div>

        </div>
      </div>
    </FloatingPanel>
  );
};

export default ReviewReportV5;
