import React from 'react';

const CurationCardV1 = () => {
  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto', fontFamily: 'sans-serif', padding: '0 1rem' }}>
       {/* Card Container - 모바일 대응 flex-col 구조 */}
       <div style={{ 
         border: '1px solid #e0e0e0', 
         borderRadius: '12px', 
         padding: '1.5rem', 
         display: 'flex', 
         flexDirection: 'column', 
         gap: '1.5rem',
         backgroundColor: '#fff',
         boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
       }}>
         
         {/* Top Headings / Badges */}
         <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
           <div style={{ display: 'inline-block', backgroundColor: '#1a1a1a', color: '#fff', padding: '0.4rem 0.8rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold', alignSelf: 'flex-start' }}>
             🏆 종합 성능 비교 1위
           </div>
           <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '0 0 0.5rem 0', color: '#111' }}>스트레이캣 하이브리드 자동화 시스템</h2>
         </div>

         {/* Main Image (사용자 요청: 비교분석 간소화 & 메인 대표이미지 가장 위로) */}
         <div style={{ 
           width: '100%', 
           maxWidth: '280px', 
           margin: '0 auto', 
           backgroundColor: '#f8f9fa', 
           borderRadius: '12px', 
           display: 'flex', 
           justifyContent: 'center', 
           alignItems: 'center',
           padding: '1rem'
         }}>
           <img 
             src="https://via.placeholder.com/200?text=Stray+Cat+Hybrid" 
             alt="Stray Cat Engine" 
             style={{ width: '100%', height: 'auto', objectFit: 'contain', borderRadius: '8px' }} 
           />
         </div>
         
         {/* Core Value Headline */}
         <div style={{ textAlign: 'center', fontSize: '1.6rem', fontWeight: '900', color: '#111', marginBottom: '0.2rem' }}>
           연구 소요시간 65% 압축
         </div>

         {/* Short Intro - 짧은 PASQ 카피라이팅 (전환율 최적화, 100단어 이내 숏 폼) */}
         <div style={{ backgroundColor: '#f9fafb', borderRadius: '8px', padding: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', border: '1px solid #f1f5f9' }}>
           <p style={{ margin: 0, fontSize: '0.95rem', color: '#334155', lineHeight: '1.6', wordBreak: 'keep-all' }}>
             <strong>[Problem] 기존 인프라 한계:</strong> 느린 연산 속도 및 단순 AI의 환각 오류로 인한 막대한 연구 예산 낭비 지속<br/><br/>
             <strong>[Agitation] 비용 및 실패 리스크 가중:</strong> 전임상 실패율 90% 임박 및 매년 수억 원대 외산 독점 라이선스 지출 고충 심화<br/><br/>
             <strong>[Solution] 고효율 하이브리드 공정 도입:</strong> 1차 초고속 선별 및 오차 없는 물리 검증망을 단일 장비에 묶은 압도적 정밀도 지원<br/><br/>
             <strong>[Question] 실효성 즉각 사전 검증:</strong> 데모 우선 도입을 통한 파이프라인 생존율 향상 및 연구 과정 65% 압축 효과 직접 증명 권장
           </p>
         </div>

         {/* Checkpoint List (에어론 체험단처럼 기능 요약) */}
         <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', padding: '0.5rem 0' }}>
            <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
              <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#e0e7ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4f46e5', fontSize: '0.8rem', fontWeight: 'bold', flexShrink: 0, marginTop: '2px' }}>✓</div>
              <div>
                <div style={{ fontWeight: 'bold', fontSize: '0.95rem', marginBottom: '0.3rem', color: '#0f172a' }}>초정밀 하이브리드 통합 설계</div>
                <div style={{ color: '#64748b', fontSize: '0.85rem' }}> Boltz-2 초고속 선별 + OpenFE 초정밀 물리 검증</div>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
              <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#e0e7ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4f46e5', fontSize: '0.8rem', fontWeight: 'bold', flexShrink: 0, marginTop: '2px' }}>✓</div>
              <div>
                <div style={{ fontWeight: 'bold', fontSize: '0.95rem', marginBottom: '0.3rem', color: '#0f172a' }}>인프라 경제성 및 망분리 1위</div>
                <div style={{ color: '#64748b', fontSize: '0.85rem' }}>개인용 GPU(RTX 4090) 단 1대 내에서 오프라인 자생 구동 완벽 지원</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
              <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#e0e7ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4f46e5', fontSize: '0.8rem', fontWeight: 'bold', flexShrink: 0, marginTop: '2px' }}>✓</div>
              <div>
                <div style={{ fontWeight: 'bold', fontSize: '0.95rem', marginBottom: '0.3rem', color: '#0f172a' }}>에디터의 추천 타겟 대상</div>
                <div style={{ color: '#64748b', fontSize: '0.85rem' }}>치솟는 클라우드 유지비와 구인난에 허덕이는 중소·중견 제약사</div>
              </div>
            </div>
         </div>

         {/* CTA Button */}
         <button style={{ 
           width: '100%', 
           backgroundColor: '#3b82f6', 
           color: '#fff', 
           padding: '1.2rem', 
           borderRadius: '8px', 
           border: 'none', 
           fontSize: '1.1rem', 
           fontWeight: 'bold', 
           cursor: 'pointer',
           boxShadow: '0 4px 6px rgba(59, 130, 246, 0.3)'
         }}>
           데모 신청 & 무상 도입 검토하기
         </button>
         
         <div style={{ backgroundColor: '#eff6ff', padding: '0.8rem', borderRadius: '6px', textAlign: 'center', fontSize: '0.85rem', fontWeight: 'bold', color: '#1e40af' }}>
           🔥 오늘 한정 MVP 컨설팅 세션 무료 우대
         </div>
       </div>
    </div>
  );
};

export default CurationCardV1;
