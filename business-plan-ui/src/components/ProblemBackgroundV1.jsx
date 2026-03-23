import React from 'react';
import { AlertTriangle, CheckCircle } from 'lucide-react';
import '../index.css';

export default function ProblemBackgroundV1() {
  return (
    <div className="hwp-section">
      <h2 className="hwp-section-title">1-1. 창업아이템 배경 및 필요성</h2>
      
      <div className="hwp-grid-2">
         {/* 외부적 배경 (문제점 파트) */}
         <div className="hwp-box">
           <h3 className="hwp-box-title">
              <AlertTriangle size={18} className="hwp-icon" />
              외부적 배경: 기존 시장의 심각한 문제점
           </h3>
           <ul className="hwp-list">
             <li><strong>지역 사회 폐기물 방치:</strong> 매년 해안가에 버려지는 30만 톤 이상의 통영/거제 굴껍데기로 인한 갯벌 악취 및 해양 생태계 훼손 문제 심화.</li>
             <li><strong>발암물질 및 유해가스 배출:</strong> 시중 저가형 캠핑 착화재에서 1군 발암물질(카드뮴) 적발 및 치명적인 호흡기 질환 유발.</li>
           </ul>

           {/* HWP 스타일: 신문 기사/뉴스 스크랩 증빙 UI */}
           <div style={{ margin: '15px 10px 10px 10px', border: '1px solid #666', backgroundColor: '#fff', padding: '12px', position: 'relative', boxShadow: '2px 2px 0px rgba(0,0,0,0.05)' }}>
             {/* 스크랩 테이프 장식 */}
             <div style={{ position: 'absolute', top: '-6px', left: '50%', transform: 'translateX(-50%)', width: '35px', height: '10px', backgroundColor: '#e5e5e5', border: '1px solid #aaa', opacity: 0.9 }}></div>
             
             <div style={{ borderBottom: '1px solid #000', paddingBottom: '3px', marginBottom: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
               <span style={{ fontSize: '11px', fontWeight: 'bold', fontFamily: 'serif', letterSpacing: '-0.5px', color: '#111' }}>[사회/안전] 관련 보도 주요 발췌</span>
               <span style={{ fontSize: '9px', color: '#555' }}>한국소비자원 검사 기반</span>
             </div>
             
             <h4 style={{ margin: '0 0 8px 0', fontSize: '13px', fontWeight: 'bold', lineHeight: '1.3', letterSpacing: '-0.5px', color: '#000' }}>
               "겨울 캠핑장 '메탄올 겔' 착화재 중독 비상...<br/>밀폐 텐트서 일가족 가스 질식 위기"
             </h4>
             
             <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
               {/* 뉴스 보도 사진 대체 박스 */}
               <div style={{ width: '45px', height: '35px', backgroundColor: '#eee', border: '1px solid #aaa', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                 <span style={{ fontSize: '8px', color: '#666', textAlign: 'center', lineHeight: '1.2' }}>관련<br/>보도<br/>사진</span>
               </div>
               <p style={{ margin: 0, fontSize: '10px', color: '#333', lineHeight: '1.4', wordBreak: 'keep-all', textAlign: 'justify' }}>
                 최근 오토캠핑 인구가 증가한 가운데, 허용 기준치의 9배를 초과하는 공업용 메탄올 착화재를 텐트 안에서 연소시켰다가 심각한 호흡기 질환 및 두통을 호소하는 안전사고가 속출하고 있다. 전문가들은 "맹독성 화학 연기가 호흡기에 치명적..." <span style={{ color: '#888' }}>[기사 중략]</span>
               </p>
             </div>
           </div>
         </div>

         {/* 내부적 솔루션 (필요성 파트) */}
         <div className="hwp-box">
           <h3 className="hwp-box-title">
             <CheckCircle size={18} className="hwp-icon" />
             내부적 배경: 자사 해결 솔루션의 시급성
           </h3>
           <ul className="hwp-list">
             <li><strong>압도적인 다공성(329m²/g) 구조:</strong> 굴패각을 900℃ 이상 고온에서 소성 처리하여 형성된 산화칼슘(CaO) 다공체의 강력한 화학적 흡착 특성 확보.</li>
             <li><strong>천연 탈황제 메커니즘 적용:</strong> 화력발전소 배기가스(SOx)를 잡는 생석회의 원리를 캠핑장에 도입, 점화 시 발생하는 연기와 악취를 즉각적으로 포집 및 중화함.</li>
             <li><strong>안전한 연소 및 마이너스 원가:</strong> 통영 폐기물 자원화 시설(160억 규모)과 연계하여 초기 시설 투자비를 'Zero화'하고 100% 천연 안심 성분의 착화재를 압도적 원가로 생산.</li>
           </ul>
         </div>
      </div>
    </div>
  );
}
