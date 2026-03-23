import React from 'react';
import { AlertTriangle, CheckCircle, TrendingUp, ShieldCheck } from 'lucide-react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, CartesianGrid, LabelList } from 'recharts';
import '../indexV3.css';

// 차트 데이터 (투자 심사역 대상: 폐기물 보조금을 통한 단위 단가 절감 효과 시각화)
const costData = [
  { 단계: '기존 착화재', 단가: 1000, 마진: 200, label: '관행 원가' },
  { 단계: '초기 양산', 단가: 800, 마진: 400, label: '20% 절감' },
  { 단계: '보조금 적용(목표)', 단가: 600, 마진: 600, label: '40% 절감' }
];

export default function BusinessPlanV3() {
  return (
    <div className="hwp-document">
      {/* 타이틀 영역 */}
      <h1 className="hwp-title">
        폐굴껍데기의 다공성 구조를 활용해 유해 가스와 악취를 잡은 친환경 안심 캠핑 착화재
      </h1>
      
      {/* 1. 요약 인용구 */}
      <div className="hwp-quote-box">
        폐기물 문제를 혁신적 수익 구조로 해결하여 환경(ESG) 가치와 압도적인 수익성을 동시에 달성합니다.
      </div>

      <div className="hwp-section">
        <h2 className="hwp-section-title">1. 핵심 문제점 및 해결 방안</h2>
        
        <div className="hwp-grid-2">
           {/* 문제점 블록 */}
           <div className="hwp-box">
             <h3 className="hwp-box-title">
                <AlertTriangle size={18} className="hwp-icon" />
                기존 시장의 심각한 문제점
             </h3>
             <ul className="hwp-list">
               <li><strong>지역 사회 문제:</strong> 매년 해안가에 버려지는 30만 톤 굴껍데기로 인한 갯벌 악취 및 해양 생태계 파괴 현상 발생.</li>
               <li><strong>캠핑 시설 안전 문제:</strong> 시중 저렴한 캠핑 착화재에서 1군 발암물질 및 기준치 9배 이상의 메탄올 검출 (한국소비자원 공식 발표).</li>
               <li><strong>호흡기 위협:</strong> 밀폐된 텐트 내부나 야외 조리 시 발생하는 맹독성 연기와 화학적 악취로 인해 호흡기 질환 유발.</li>
             </ul>
           </div>

           {/* 해결책 블록 */}
           <div className="hwp-box">
             <h3 className="hwp-box-title">
               <CheckCircle size={18} className="hwp-icon" />
               자사 개발 해결책: 20% 황금 배합비
             </h3>
             <ul className="hwp-list">
               <li><strong>자연 친화적 흡착제:</strong> 고온으로 구운 굴껍데기(다공성 산화칼슘)를 20% 배합하여, 연소 중 발생하는 매연과 악취 분자를 완벽히 포집 및 분해.</li>
               <li><strong>안전한 연소 구조:</strong> 검증된 원료와 결합하여 텐트 주변에서도 눈이나 코의 매움 없이 안전하게 활동 및 조리가 가능.</li>
               <li><strong>천연 여과망 원리:</strong> 열에 구워낸 굴껍데기의 무수한 구멍들이 화학 물질을 머금고 중화시키는 천연 필터 역할 수행.</li>
             </ul>
           </div>
        </div>
      </div>

      <div className="hwp-section">
        <h2 className="hwp-section-title">2. 실현 가능성 및 수익 구조 방어력</h2>
        
        <div className="hwp-grid-2">
          {/* 재무 데이터 시각화 */}
          <div className="hwp-box">
            <h3 className="hwp-box-title">
               <TrendingUp size={18} className="hwp-icon" />
               압도적인 단위 단가 방어 추이
            </h3>
            <p className="hwp-desc">통영시 폐기물 자원화 기관 협약을 바탕으로 폐기물 처리 보조금 수령 시, 마이너스 원가에 가까운 강력한 수익 방어선 구축이 가능합니다.</p>
            <div className="hwp-chart-container">
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={costData} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e5e5" />
                  <XAxis dataKey="단계" tick={{ fill: '#666', fontSize: 12 }} axisLine={{ stroke: '#999' }} tickLine={false} />
                  <Tooltip cursor={{ fill: '#f5f5f5' }} />
                  <Bar dataKey="단가" fill="#666" radius={[0, 0, 0, 0]}>
                    <LabelList dataKey="label" position="top" style={{ fill: '#333', fontSize: 11, fontWeight: 'bold' }} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* 비즈니스 모델(BM) 인터페이스 목업 */}
          <div className="hwp-box">
             <h3 className="hwp-box-title">
               <ShieldCheck size={18} className="hwp-icon" />
               소비자 직거래 판매 연동 구조
             </h3>
             <p className="hwp-desc">독자적인 온라인 자사몰 구축을 통해 중간 유통 절차를 배제하고 주력 타겟인 가족 단위 야영객에게 직접 도달합니다.</p>
             <div className="hwp-mockup-flex">
                <div className="hwp-mockup-screen">
                   <div className="hwp-header-mock">브랜드 쇼핑몰 메인</div>
                   <div className="hwp-body-mock">
                     <div className="hwp-img-mock">제품 이미지</div>
                     <div className="hwp-line-mock"></div>
                     <div className="hwp-line-mock short"></div>
                     <div className="hwp-btn-mock">구매 진행하기</div>
                   </div>
                </div>
                <div className="hwp-mockup-screen">
                   <div className="hwp-header-mock">정기 배송 서비스</div>
                   <div className="hwp-body-mock">
                     <div className="hwp-box-mock">매월 지정 장소 배송</div>
                     <div className="hwp-line-mock"></div>
                     <div className="hwp-btn-mock outline">배송 서비스 신청</div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>

      <div className="hwp-section">
        <h2 className="hwp-section-title">3. 시장 진입 및 실행 계획</h2>
        <table className="hwp-table">
          <thead>
            <tr>
              <th>진입 시장 명칭</th>
              <th>주요 공략 대상</th>
              <th>초기 시장 진입 상세 전략</th>
              <th>예상 수익률</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>일반 소비자(개인) 직거래</strong></td>
              <td>안전에 민감한 가족 단위 캠핑족</td>
              <td>초기 대국민 펀딩을 활용한 브랜드 안착 및 전용 쇼핑몰 개설</td>
              <td>약 45%</td>
            </tr>
            <tr>
              <td><strong>기업 간 정기 거래</strong></td>
              <td>대규모 야영장 및 고급 야외 전문 식당</td>
              <td>무상 시제품 제공 기법 후 대량 정기 납품 계약 체결 (연 단위 계약 목표)</td>
              <td>약 35%</td>
            </tr>
            <tr>
              <td><strong>산업용 특수 납품</strong></td>
              <td>화력 발전소 및 대형 제철소</td>
              <td>제조 과정 후 남은 가루 자재를 산업 규격 매연 저감제로 납품하여 추가 수익 창출</td>
              <td>약 20%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
