import React from 'react';
import FloatingPanel from './FloatingPanel';
import { ClipboardList, Star, UserCheck, User, AlertCircle, Lightbulb, TrendingUp, CheckCircle, Target } from 'lucide-react';

const ReviewReportV4 = () => {
  return (
    <FloatingPanel
      title="종합 심사 결과 리포트 (V4)"
      icon={<ClipboardList size={24} />}
      color="#3b82f6" // Blue
      defaultOpen={false}
      buttonPosition={{ bottom: '11rem', right: '1.5rem' }}
    >
      <div style={{ padding: '1.25rem', backgroundColor: '#f8fafc' }}>
        
        {/* Overall Score */}
        <div style={{ backgroundColor: '#eff6ff', borderRadius: '8px', padding: '1.25rem', marginBottom: '1.5rem', border: '1px solid #bfdbfe' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <span style={{ fontSize: '1rem', fontWeight: 'bold', color: '#1e3a8a' }}>종합 평균 점수</span>
            <div style={{ display: 'flex', alignItems: 'baseline' }}>
              <span style={{ fontSize: '2rem', fontWeight: '800', color: '#2563eb' }}>88</span>
              <span style={{ fontSize: '1.1rem', color: '#64748b', marginLeft: '4px' }}>/ 100</span>
            </div>
          </div>
          <div style={{ borderTop: '1px solid #dbeafe', paddingTop: '1rem' }}>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <Star size={18} style={{ color: '#3b82f6', flexShrink: 0, marginTop: '2px' }} />
              <span style={{ fontWeight: 'bold', color: '#1e40af' }}>종합 심사평</span>
            </div>
            <p style={{ margin: 0, fontSize: '0.85rem', lineHeight: '1.6', color: '#334155' }}>
              '연합학습'을 통한 데이터 보안 문제 해결과 'FEP' 기반의 초정밀 예측을 결합한 아이디어가 매우 우수합니다. 종량제 과금 논리도 타당하나, 서버 마진 구조 등에서 일부 보완점이 지적되었습니다.
            </p>
          </div>
        </div>

        {/* Mentor Deep Feedback */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: '#0f172a' }}>
            <Lightbulb size={20} style={{ color: '#f59e0b' }} />
            <h3 style={{ fontSize: '1.05rem', fontWeight: 'bold', margin: 0 }}>멘토/어드바이저 심층 피드백</h3>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ borderLeft: '3px solid #ef4444', paddingLeft: '1rem' }}>
              <div style={{ fontWeight: 'bold', color: '#1e293b', marginBottom: '0.5rem', fontSize: '0.95rem' }}>1. FEP 종량제 마진율 구체화</div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem' }}>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}><AlertCircle size={14} style={{ color: '#ef4444', marginTop: '3px' }}/> <span><strong>문제:</strong> 외부 클라우드 비용을 제외한 실제 영업 이익이 불투명합니다.</span></li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}><CheckCircle size={14} style={{ color: '#10b981', marginTop: '3px' }}/> <span style={{ color: '#047857' }}><strong>해결:</strong> 매출 로드맵에 Spot Instance 활용을 통한 마진 방어 논리를 기재하세요.</span></li>
              </ul>
            </div>

            <div style={{ borderLeft: '3px solid #f59e0b', paddingLeft: '1rem' }}>
              <div style={{ fontWeight: 'bold', color: '#1e293b', marginBottom: '0.5rem', fontSize: '0.95rem' }}>2. 글로벌 빅파마 공략 세일즈 전략</div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem' }}>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}><AlertCircle size={14} style={{ color: '#ef4444', marginTop: '3px' }}/> <span><strong>문제:</strong> 학계 소액 구독만으로는 BEP 돌파가 어렵습니다. 대기업 영업 논리가 약합니다.</span></li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}><TrendingUp size={14} style={{ color: '#10b981', marginTop: '3px' }}/> <span style={{ color: '#047857' }}><strong>해결:</strong> 글로벌 CRO 기구를 통한 유효성 시범 검증 리포트 발행 등 스텝업 로직을 추가하세요.</span></li>
              </ul>
            </div>

            <div style={{ borderLeft: '3px solid #3b82f6', paddingLeft: '1rem' }}>
              <div style={{ fontWeight: 'bold', color: '#1e293b', marginBottom: '0.5rem', fontSize: '0.95rem' }}>3. 성능 오차율 백테스트 증빙</div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem' }}>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}><AlertCircle size={14} style={{ color: '#ef4444', marginTop: '3px' }}/> <span><strong>문제:</strong> 목표 오차율 1.0 kcal/mol 에 대한 객관적인 사전 실험적 근거, 신뢰도가 부족합니다.</span></li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}><Target size={14} style={{ color: '#10b981', marginTop: '3px' }}/> <span style={{ color: '#047857' }}><strong>해결:</strong> 성과지표(KPI)에 PDBbind 데이터 등을 통한 성능 검증(백서 발간)을 명시하세요.</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Judges Summary */}
        <div>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 'bold', color: '#334155', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid #e2e8f0' }}>개별 심사위원 요약</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <div style={{ fontWeight: 'bold', color: '#4f46e5', display: 'flex', alignItems: 'center', gap: '0.4rem' }}><UserCheck size={16}/> 전문가형 심사위원 (86점)</div>
              </div>
              <div style={{ fontSize: '0.85rem', color: '#475569', lineHeight: '1.5' }}>보안 페인포인트 도출은 정확하나, 오차율을 증명할 MVP 선행 데이터 및 인프라 마진 구조 계산이 미흡함.</div>
            </div>

            <div style={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <div style={{ fontWeight: 'bold', color: '#059669', display: 'flex', alignItems: 'center', gap: '0.4rem' }}><User size={16}/> 일반형/VC 심사위원 (90점)</div>
              </div>
              <div style={{ fontSize: '0.85rem', color: '#475569', lineHeight: '1.5' }}>비용 타당성이 확고하고 학계 락인(Lock-in) 모델이 훌륭하나, 영업 전문 책임자가 없다는 것이 아쉬움.</div>
            </div>

            <div style={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <div style={{ fontWeight: 'bold', color: '#d97706', display: 'flex', alignItems: 'center', gap: '0.4rem' }}><User size={16}/> 공공예창패 심사위원 (88점)</div>
              </div>
              <div style={{ fontSize: '0.85rem', color: '#475569', lineHeight: '1.5' }}>연구 불평등 해소 및 동물 희생 감소라는 대의에 공감하나, 1억 원 액셀러레이터 유치 관문이 불분명함.</div>
            </div>
          </div>
        </div>

      </div>
    </FloatingPanel>
  );
};

export default ReviewReportV4;
