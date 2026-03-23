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
             <li><strong>발암물질 및 메탄올 9배 초과:</strong> 한국소비자원 검사 결과, 시중 저가형 캠핑 착화재에서 1군 발암물질(카드뮴) 및 허용 기준치의 9배를 초과하는 메탄올 적발.</li>
             <li><strong>치명적인 호흡기 질환 유발:</strong> 밀폐된 텐트나 야외 직화 조리 중 발생하는 맹독성 화학 연기로 인해 안심해야 할 캠핑장에서 소비자의 중대한 안전사고 위험 상존.</li>
           </ul>
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
