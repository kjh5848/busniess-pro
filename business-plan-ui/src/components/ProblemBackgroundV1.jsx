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
             <li><strong>지역 사회 폐기물 문제:</strong> 매년 해안가에 버려지는 30만 톤 이상의 굴껍데기로 인한 심각한 갯벌 악취 및 해양 생태계 파괴 현상 발생.</li>
             <li><strong>야외 여가 시설 안전 위협:</strong> 기존 저가형 캠핑 착화재에서 1군 발암물질 및 허용 기준치 9배를 초과하는 메탄올이 검출됨 (한국소비자원 공식 발표).</li>
             <li><strong>치명적인 호흡기 질환 유발:</strong> 텐트 내부 등 밀폐 공간이나 야외 바비큐 조리 중에 발생하는 맹독성 화학 연기로 인해 소비자의 호흡기 질환 및 중대한 안전사고 유발 위험 상존.</li>
           </ul>
         </div>

         {/* 내부적 솔루션 (필요성 파트) */}
         <div className="hwp-box">
           <h3 className="hwp-box-title">
             <CheckCircle size={18} className="hwp-icon" />
             내부적 배경: 자사 해결 솔루션의 시급성
           </h3>
           <ul className="hwp-list">
             <li><strong>자연 친화적 대체 기술 개발:</strong> 고온으로 특수 가공한 소성 굴껍데기(다공성 산화칼슘)를 20% 황금 비율로 배합하여, 연소 중 발생하는 유해 가스와 악취 분자를 원천적으로 포집함.</li>
             <li><strong>독성 없는 안전한 연소 방식 도입:</strong> 검증된 천연 원료 기반의 결합 특허 기술을 활용하여, 텐트 주변 조리 시 눈 매움이나 유독성 매연 흡입 걱정 없이 완벽하게 안전한 친환경 캠핑 활동을 보장함.</li>
             <li><strong>강력한 다공성 천연 필터 효과:</strong> 800도 고열에 구워진 굴껍데기의 무수한 미세 기공(구멍)이 가진 화학적 흡착 원리를 활용하여, 기존 화학 기반 제품의 치명적인 문제점을 완벽히 해소하는 시장 내 필수재로 기능함.</li>
           </ul>
         </div>
      </div>
    </div>
  );
}
