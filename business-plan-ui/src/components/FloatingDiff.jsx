import React from 'react';
import FloatingPanel from './FloatingPanel';
import { Info, ChevronRight } from 'lucide-react';

const FloatingDiff = () => {
  return (
    <FloatingPanel
      title="V5 → V6 주요 변경점 (KISTEP 반영)"
      icon={<Info size={24} />}
      color="#10b981"
      defaultOpen={true}
      buttonPosition={{ bottom: '2rem', right: '1.5rem' }}
    >
      <div style={{ padding: '1.25rem', fontSize: '0.85rem', color: '#374151', lineHeight: '1.6' }}>
        
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ margin: '0 0 0.5rem 0', color: '#059669', display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.95rem' }}>
            <ChevronRight size={18} /> 1. 창업아이템 개요 (Summary)
          </h4>
          <ul style={{ margin: 0, paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <li><strong>추가:</strong> 국가 'K-멜로디 프로젝트(연합학습)' 호환 목표 명시</li>
            <li><strong>강조:</strong> 제약업계의 치명적 한계인 <strong>'사일로화(Silo Effect)'</strong> 극복 수단으로서 연합학습의 당위성 부여</li>
            <li><strong>추가:</strong> 데이터 구조/형식 표준화 전처리 모듈 내재화 강조</li>
          </ul>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ margin: '0 0 0.5rem 0', color: '#059669', display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.95rem' }}>
            <ChevronRight size={18} /> 2. 실현가능성 (Feasibility)
          </h4>
          <ul style={{ margin: 0, paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <li><strong>변경:</strong> 고객 불만족 1번 (단순 보안 문제 &rarr; 정보 단절/사일로화 현상)</li>
            <li><strong>추가:</strong> 고객 불만족 2번 <strong>'비구조화 의료데이터의 AI 학습 불가'</strong> 항목 신설 및 자사 "표준화 모듈 지원"으로 대안 제시</li>
          </ul>
        </div>

        <div>
          <h4 style={{ margin: '0 0 0.5rem 0', color: '#059669', display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.95rem' }}>
            <ChevronRight size={18} /> 3. 성과목표 (Performance)
          </h4>
          <ul style={{ margin: 0, paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <li><strong>변경:</strong> 성과지표 내 <strong>'공공/민간 데이터 표준화 파이프라인 구축'</strong> 항목으로 고도화 (인증서, 특허 부분도 융합 명시)</li>
            <li><strong>변경:</strong> 사업비 집행 외주용역 항목에 '데이터 표준화 및 전처리 외주' 추가 배정</li>
          </ul>
        </div>

      </div>
    </FloatingPanel>
  );
};

export default FloatingDiff;
