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
          
          {/* 단계 1 (아이디어 기획) */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '30%' }}>
            <div style={{ width: '50px', height: '50px', backgroundColor: '#e0e0e0', border: '2px solid #333333', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 'bold', color: '#333', marginBottom: '10px' }}>
              완료
            </div>
            <h4 style={{ margin: '0 0 5px 0', fontSize: '14px', fontWeight: 'bold', color: '#111', wordBreak: 'keep-all', textAlign: 'center' }}>
              솔루션 아이디어 기획
            </h4>
            <div style={{ fontSize: '12px', color: '#555', textAlign: 'center', lineHeight: '1.4', wordBreak: 'keep-all' }}>
              캠핑 무허가 매연 문제 심각성 인지 단위 및 통영 굴껍데기 재활용 메커니즘 최초 설계
            </div>
          </div>

          {/* 단계 2 (이론적 검증) */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '30%' }}>
            <div style={{ width: '50px', height: '50px', backgroundColor: '#e0e0e0', border: '2px solid #333333', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 'bold', color: '#333', marginBottom: '10px' }}>
              완료
            </div>
            <h4 style={{ margin: '0 0 5px 0', fontSize: '14px', fontWeight: 'bold', color: '#111', wordBreak: 'keep-all', textAlign: 'center' }}>
              선행 문헌 및 특허 리서치
            </h4>
            <div style={{ fontSize: '12px', color: '#555', textAlign: 'center', lineHeight: '1.4', wordBreak: 'keep-all' }}>
              산화칼슘(CaO) 329m²/g 다공성의 유해가스 탈황/흡착 기능에 대한 이론적 메카니즘(논문) 검증
            </div>
          </div>

          {/* 단계 3 (현재 상태) */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '30%' }}>
            <div style={{ width: '50px', height: '50px', backgroundColor: '#333333', border: '2px solid #333333', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 'bold', color: '#ffffff', marginBottom: '10px' }}>
              현재
            </div>
            <h4 style={{ margin: '0 0 5px 0', fontSize: '14px', fontWeight: 'bold', color: '#111', wordBreak: 'keep-all', textAlign: 'center' }}>
              R&D 가설 및 제조 계획
            </h4>
            <div style={{ fontSize: '12px', color: '#555', textAlign: 'center', lineHeight: '1.4', wordBreak: 'keep-all' }}>
              시제품 구현을 위해 화학적 발열 저하를 통제하는 이종 소재 결합 20% 마지노선 배합비율(가설) 도출
            </div>
          </div>

        </div>
      </div>
      <p style={{ fontSize: '11px', color: '#333', marginTop: '10px', padding: '10px', backgroundColor: '#f0f0f0', borderLeft: '3px solid #333', lineHeight: '1.5' }}>
        ※ 막연한 하드웨어 조립 수준에 머물지 않고, 기존 시장(착화재)의 유해성을 과학적으로 극복하기 위해 다년간의 학술 문헌(논문) 리서치 및 화학적 역설계 과정을 선행함으로써 사업 신청 시점 이전까지의 아이템 기획 타당성을 확실히 마련했습니다.
      </p>
    </div>
  );
}
