import React from 'react';
import '../index.css';

export default function SolutionPreparationV1() {
  return (
    <div className="hwp-section">
      <h2 className="hwp-section-title" style={{ marginTop: '30px' }}>2-1. 창업아이템의 개발·개선 준비 현황</h2>
      
      {/* HWP 스타일 가로 타임라인 진행도 컨테이너 */}
      <div style={{ position: 'relative', margin: '30px 0', padding: '0 20px' }}>
        
        {/* 가로 관통선 (배경 선) */}
        <div style={{ position: 'absolute', top: '24px', left: '40px', right: '40px', height: '2px', backgroundColor: '#cccccc', zIndex: 0 }}></div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', zIndex: 1 }}>
          
          {/* 단계 1 */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '30%' }}>
            <div style={{ width: '50px', height: '50px', backgroundColor: '#e0e0e0', border: '2px solid #333333', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 'bold', color: '#333', marginBottom: '10px' }}>
              완료
            </div>
            <h4 style={{ margin: '0 0 5px 0', fontSize: '14px', fontWeight: 'bold', color: '#111', wordBreak: 'keep-all', textAlign: 'center' }}>
              현장 실사 및 MOU
            </h4>
            <div style={{ fontSize: '12px', color: '#555', textAlign: 'center', lineHeight: '1.4', wordBreak: 'keep-all' }}>
              160억 규모 통영 자원화 시설 방문, 생석회 원료 공급 협의 수립
            </div>
          </div>

          {/* 단계 2 */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '30%' }}>
            <div style={{ width: '50px', height: '50px', backgroundColor: '#e0e0e0', border: '2px solid #333333', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 'bold', color: '#333', marginBottom: '10px' }}>
              완료
            </div>
            <h4 style={{ margin: '0 0 5px 0', fontSize: '14px', fontWeight: 'bold', color: '#111', wordBreak: 'keep-all', textAlign: 'center' }}>
              이종 폐기물 R&D
            </h4>
            <div style={{ fontSize: '12px', color: '#555', textAlign: 'center', lineHeight: '1.4', wordBreak: 'keep-all' }}>
              커피박, 액상 천연 왁스(핫멜트), 소성 굴패각 가루 결합 테스트 검증
            </div>
          </div>

          {/* 단계 3 */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '30%' }}>
            <div style={{ width: '50px', height: '50px', backgroundColor: '#333333', border: '2px solid #333333', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 'bold', color: '#ffffff', marginBottom: '10px' }}>
              달성
            </div>
            <h4 style={{ margin: '0 0 5px 0', fontSize: '14px', fontWeight: 'bold', color: '#111', wordBreak: 'keep-all', textAlign: 'center' }}>
              배합 수율 최적화
            </h4>
            <div style={{ fontSize: '12px', color: '#555', textAlign: 'center', lineHeight: '1.4', wordBreak: 'keep-all' }}>
              탈황 흡착 및 발열량 저하를 방어하는 마지노선(20%) 비율 도출
            </div>
          </div>

        </div>
      </div>
      <p style={{ fontSize: '12px', color: '#333', marginTop: '10px', padding: '10px', backgroundColor: '#f5f5f5', borderLeft: '3px solid #333' }}>
        ※ 단순 아이디어 차원에 머물지 않고 현장 실사와 강력한 추진력을 바탕으로 사업 신청 시점 이전까지의 실질적인 개발/개선 스텝을 입증했습니다.
      </p>
    </div>
  );
}
