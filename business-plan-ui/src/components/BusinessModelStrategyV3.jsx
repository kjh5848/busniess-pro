import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from 'recharts';
import '../index.css';

const revenueData = [
  { year: '1년차', 매출: 1.5 },
  { year: '2년차', 매출: 3.8 },
  { year: '3년차', 매출: 8.5 },
  { year: '4년차', 매출: 15.0 },
  { year: '5년차', 매출: 30.0 }
];

export default function BusinessModelStrategyV3() {
  return (
    <div className="hwp-section">
      <h2 className="hwp-section-title">3-1. 비즈니스 모델 및 성장(Scale-up) 전략</h2>
      <div className="hwp-instruction-box">
        ※ 3-1. 제품/서비스의 수익 창출 전략 및 향후 스케일업(Scale-up) 로드맵
      </div>

      <div style={{ borderLeft: '4px solid #333', paddingLeft: '14px', marginBottom: '24px' }}>
        <p style={{ fontWeight: 'bold', margin: '0', fontSize: '15.5px', color: '#000', lineHeight: '1.4' }}>
          "D2C 중심의 감성 굿즈 단품 판매를 시작으로 프리미엄 B2B 글램핑장 대량 정기 납품 및 최종 '탄소 배출권(CERs)' 거래 수익까지 3대 메인 캐시카우를 구축함"
        </p>
      </div>

      <p style={{ fontSize: '15.5px', color: '#000', fontWeight: 'bold', marginBottom: '8px' }}>가. 핵심 고객(Target) 정의 및 3대 메인 수익 파이프라인</p>
      <ul style={{ listStyleType: "'ㅇ '", paddingLeft: '20px', fontSize: '14.5px', color: '#000', lineHeight: '1.6', marginBottom: '16px', letterSpacing: '-0.3px', wordBreak: 'keep-all' }}>
        <li style={{ marginBottom: '8px' }}><strong>(Main Target Focus)</strong> 영유아 동반 및 호흡기 민감성이 매우 높은 3040 메인 가족 단위 오토 캠퍼 및 전국 프리미엄 대형 캠핑장/글램핑장 운영 관리사</li>
      </ul>
      <table className="hwp-table" style={{ marginBottom: '30px', color: '#000', fontSize: '14.5px' }}>
        <thead>
          <tr>
            <th style={{ width: '25%', textAlign: 'center', backgroundColor: '#333', color: '#fff', borderRight: '1px solid #000' }}>수익 모델 (BM) 구조</th>
            <th style={{ width: '50%', textAlign: 'center', backgroundColor: '#555', color: '#fff', borderRight: '1px solid #000' }}>핵심 타겟 및 과금 구조 (Monetization 징수 모델)</th>
            <th style={{ width: '25%', textAlign: 'center', backgroundColor: '#111', color: '#fff' }}>예상 이익률 (GPM)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ textAlign: 'center', fontWeight: 'bold', borderRight: '1px solid #000' }}>단기: D2C 기어 판매</td>
            <td style={{ padding: '12px', lineHeight: '1.6', borderRight: '1px solid #000' }}>자사몰/와디즈/스마트스토어 스마트 스토어 기반 B2C 단품 판매 및 세트 구독 매달 정기 결제 플랜 시스템 가동</td>
            <td style={{ textAlign: 'center', fontWeight: 'bold' }}>약 65% 수익 보존율</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center', fontWeight: 'bold', borderRight: '1px solid #000' }}>중기: B2B 대량 납품</td>
            <td style={{ padding: '12px', lineHeight: '1.6', borderRight: '1px solid #000' }}>'국가공인 친환경 무검출' 인증 마크를 강력한 무기로 전국 지역구 프리미엄 글램핑장에 박스 묶음 대량 정기 납품 연간 계약 체결</td>
            <td style={{ textAlign: 'center', fontWeight: 'bold' }}>약 45% (박리다매형)</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center', fontWeight: 'bold', borderRight: '1px solid #000' }}>장기: CERs 탄소 거래증</td>
            <td style={{ padding: '12px', lineHeight: '1.6', borderRight: '1px solid #000' }}>공식 해양 폐기물(굴껍데기) 및 자영업 폐커피박의 적극적 완전 무해 자원 순환 공로 인정으로 정부 연계 탄소배출권(CERs) 무상 획득 및 기업간 B2B 매각 창출</td>
            <td style={{ textAlign: 'center', fontWeight: 'bold' }}>약 95% 이상 프리미엄</td>
          </tr>
        </tbody>
      </table>

      <p style={{ fontSize: '15.5px', color: '#000', fontWeight: 'bold', marginBottom: '8px' }}>나. 단계별 자생적 스케일업(Scale-up) 전략 및 예상 매출액 성장성 지표</p>
      <ul style={{ listStyleType: "'ㅇ '", paddingLeft: '20px', fontSize: '14.5px', color: '#000', lineHeight: '1.6', marginBottom: '24px', letterSpacing: '-0.3px', wordBreak: 'keep-all' }}>
        <li style={{ marginBottom: '8px' }}><strong>(1단계 제품 라인업 다각화)</strong> 화로대 고광택 세척제, 캠핑 전용 비누 등 '무독성과 세정' 핵심 키워드를 완전히 확장한 토탈 라이프스타일 굿즈 라인업 무한 증식 설계</li>
        <li style={{ marginBottom: '8px' }}><strong>(2단계 원재료 융합 확충)</strong> 표고버섯 폐배지 등을 이질적으로 융합한 농업 폐기물 추가 결합형 신규 모델을 출시하여 경쟁사가 따라오지 못할 지적재산권(특허) 보호 장벽 조기 구축</li>
        <li><strong>(3단계 글로벌 LNT 진출)</strong> 환경 보존의 최고 등급인 LNT(Leave No Trace) 문화가 완벽히 오랫동안 100% 정착된 북미/유럽 선진 캠핑 시장으로의 수출 판로 적극 개척 및 수출액 타겟팅 수립</li>
      </ul>

      <div style={{ border: '2px solid #333', padding: '20px', marginBottom: '30px', background: '#fff' }}>
        <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '14px', marginBottom: '20px', color: '#000' }}>
          &lt; 예상 연차별 스케일업 자생 프론티어 전체 매출액 추이 지표 (단위: 억 원) &gt;
        </div>
        <div style={{ width: '100%', height: '220px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={revenueData} margin={{ top: 20, right: 30, left: 10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" vertical={false} />
              <XAxis dataKey="year" stroke="#333" fontSize={13} tickLine={false} axisLine={{ stroke: '#333' }} />
              <YAxis stroke="#333" fontSize={13} tickLine={false} axisLine={{ stroke: '#333' }} />
              <Tooltip cursor={{ fill: '#f5f5f5' }} contentStyle={{ border: '1px solid #333', borderRadius: '0', color: '#000' }} />
              <Area type="monotone" dataKey="매출" stroke="#333" fill="#666" fillOpacity={0.6} strokeWidth={3}>
                <LabelList dataKey="매출" position="top" style={{ fill: '#000', fontSize: '12.5px', fontWeight: 'bold' }} />
              </Area>
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div style={{ fontSize: '12.5px', color: '#555', textAlign: 'right', marginTop: '10px' }}>
          * 당사 자체 B2B 영업권 직접 확보율 및 국가 통계 기준을 기반으로 한 보수적 하이퍼 추정치 적용 산출 근거 (2025)
        </div>
      </div>
    </div>
  );
}
