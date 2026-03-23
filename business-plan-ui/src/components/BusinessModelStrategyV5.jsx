import React from 'react';
import { AreaChart, Area, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from 'recharts';
import '../index.css';

const revenueData = [
  { year: '1년차', 매출: 1.5 },
  { year: '2년차', 매출: 3.8 },
  { year: '3년차', 매출: 8.5 },
  { year: '4년차', 매출: 15.0 },
  { year: '5년차', 매출: 30.0 }
];

const tamSamSomData = [
  { name: 'TAM 전체시장', size: 100, actual: '약 5,000억', color: '#e5e5e5' },
  { name: 'SAM 유효시장', size: 65, actual: '약 500억', color: '#888888' },
  { name: 'SOM 수익시장', size: 35, actual: '약 15억', color: '#111111' }
];

export default function BusinessModelStrategyV5() {
  return (
    <div className="hwp-section">
      <h2 className="hwp-section-title">3-1. 비즈니스 모델 및 성장(Scale-up) 전략</h2>
      <div className="hwp-instruction-box">
        ※ 3-1. 제품/서비스의 수익 창출 전략 및 향후 스케일업(Scale-up) 로드맵
      </div>

      <div style={{ borderLeft: '4px solid #333', paddingLeft: '14px', marginBottom: '24px' }}>
        <p style={{ fontWeight: 'bold', margin: '0', fontSize: '15.5px', color: '#000', lineHeight: '1.4' }}>
          "D2C 자사몰 및 펀딩 기반의 초기 '캠핑용 착화재' 판매를 시작으로, B2B 대량 납품(바비큐용 성형장작/숯) 및 최종 '폐기물 처리 보조금 및 자발적 탄소시장(VCM) 등록 기반 임팩트 모델' 연계 수익까지 3대 명확한 캐시카우를 구축함"
        </p>
      </div>

      <p style={{ fontSize: '15.5px', color: '#000', fontWeight: 'bold', marginBottom: '8px' }}>가. 핵심 고객(Target) 정의 및 명확한 수익 구조</p>
      <ul style={{ listStyleType: "'ㅇ '", paddingLeft: '20px', fontSize: '14.5px', color: '#000', lineHeight: '1.6', marginBottom: '16px', letterSpacing: '-0.3px', wordBreak: 'keep-all' }}>
        <li style={{ marginBottom: '8px' }}><strong>(Main Target Focus)</strong> 호흡기 건강에 민감한 3040 가족 캠퍼 및 냄새 없는 고체 연료를 선호하는 프리미엄 글램핑장/식당</li>
      </ul>
      <table className="hwp-table" style={{ marginBottom: '30px', color: '#000', fontSize: '14.5px' }}>
        <thead>
          <tr>
            <th style={{ width: '20%', textAlign: 'center', backgroundColor: '#333', color: '#fff', borderRight: '1px solid #000' }}>수익 모델 구조</th>
            <th style={{ width: '55%', textAlign: 'center', backgroundColor: '#555', color: '#fff', borderRight: '1px solid #000' }}>세부 타겟 및 과금 구조 (가치 제안: 안심 불쏘시개)</th>
            <th style={{ width: '25%', textAlign: 'center', backgroundColor: '#111', color: '#fff' }}>예상 이익/보조금</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ textAlign: 'center', fontWeight: 'bold', borderRight: '1px solid #000' }}>1. 자사몰(D2C) &<br/>크라우드 펀딩</td>
            <td style={{ padding: '12px', lineHeight: '1.6', borderRight: '1px solid #000' }}>안전성과 감성 중심의 <strong>캠핑용 착화재 및 불멍 소품</strong>을 크라우드 펀딩(와디즈)과 직영 D2C 자사몰을 통해 직접 판매</td>
            <td style={{ textAlign: 'center', fontWeight: 'bold' }}>초기 유통 마진 극대화</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center', fontWeight: 'bold', borderRight: '1px solid #000' }}>2. B2B 대량 납품</td>
            <td style={{ padding: '12px', lineHeight: '1.6', borderRight: '1px solid #000' }}>유해 매연이 없는 프리미엄 품질을 앞세워 <strong>전국 캠핑장, 글램핑장 및 프리미엄 식당(숯불 바비큐용 성형장작/숯)</strong> 위주의 박스 단위 대량 정기 납품 결제 시스템</td>
            <td style={{ textAlign: 'center', fontWeight: 'bold' }}>안정적 정기 구독 이익률</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center', fontWeight: 'bold', borderRight: '1px solid #000' }}>3. 폐기물 보조금 &<br/>VCM 크레딧</td>
            <td style={{ padding: '12px', lineHeight: '1.6', borderRight: '1px solid #000' }}>대규모 투기되는 <strong>해양 폐기물(굴 껍데기) 재활용 공로에 따른 직접적인 폐기물 처리 보조금(톤당 3~4만원)</strong> 및 자발적 탄소시장(VCM)의 민간 크레딧(팝콘 등 연계) 등록을 통한 부가적 임팩트 파이프라인</td>
            <td style={{ textAlign: 'center', fontWeight: 'bold' }}>원가 절감 및 추가수익</td>
          </tr>
        </tbody>
      </table>

      <p style={{ fontSize: '15.5px', color: '#000', fontWeight: 'bold', marginBottom: '8px' }}>나. 타겟 시장(TAM-SAM-SOM) 점유율 확충 및 기대효과 그래픽</p>

      <div style={{ border: '2px solid #f1f1f1', padding: '20px', marginBottom: '30px', background: '#fff' }}>
        <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '14px', marginBottom: '20px', color: '#000', letterSpacing: '-0.3px' }}>
          &lt; 타겟 시장(TAM-SAM-SOM) 3단계 시장 점유율 획득(Obtain) 가설 그래프 &gt;
        </div>
        <div style={{ width: '100%', height: '180px', marginBottom: '20px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={tamSamSomData} layout="vertical" margin={{ top: 5, right: 80, left: 10, bottom: 5 }} barSize={35}>
              <XAxis type="number" hide />
              <YAxis dataKey="name" type="category" width={110} axisLine={false} tickLine={false} style={{ fill: '#000', fontSize: '12.5px', fontWeight: 'bold' }} />
              <Tooltip cursor={{fill: '#f5f5f5'}} formatter={(value, name, props) => [props.payload.actual, '시장 규모']} />
              <Bar dataKey="size" radius={[0, 4, 4, 0]}>
                {tamSamSomData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
                <LabelList dataKey="actual" position="right" style={{ fill: '#000', fontSize: '13px', fontWeight: 'bold' }} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <table style={{ width: '100%', borderTop: '2px solid #ccc', borderBottom: '1px solid #ccc', borderCollapse: 'collapse', fontSize: '13.5px', color: '#333', lineHeight: '1.6', marginTop: '16px' }}>
          <colgroup>
            <col width="10%" />
            <col width="90%" />
          </colgroup>
          <tbody>
            <tr>
              <td style={{ padding: '12px 8px', fontWeight: 'bold', color: '#777', textAlign: 'center', borderBottom: '1px solid #eee' }}>TAM</td>
              <td style={{ padding: '12px 8px', wordBreak: 'keep-all', borderBottom: '1px solid #eee' }}><strong>[야외 바비큐 & 캠핑 시장]</strong> 아웃도어 트렌드 지속 확장에 따른 산업용/가정용 숯 및 연료 전반의 거시 시장 (약 5,000억원)</td>
            </tr>
            <tr>
              <td style={{ padding: '12px 8px', fontWeight: 'bold', color: '#555', textAlign: 'center', borderBottom: '1px solid #eee' }}>SAM</td>
              <td style={{ padding: '12px 8px', wordBreak: 'keep-all', borderBottom: '1px solid #eee' }}><strong>[친환경 안심 고체연료 시장]</strong> 유해 물질 규제로 인해 대체제로 급부상하는 무검출/천연 베이스의 고체 착화재/불멍 장작 시장 (약 500억원)</td>
            </tr>
            <tr>
              <td style={{ padding: '12px 8px', fontWeight: 'bold', color: '#111', textAlign: 'center' }}>SOM</td>
              <td style={{ padding: '12px 8px', wordBreak: 'keep-all' }}><strong>[호흡기 민감 초기 타겟 시장]</strong> 냄새와 유해 가스에 극도로 민감한 3040 가족 캠퍼 및 프리미엄 글램핑/요식업 기반 초기 수요 (약 15억원)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ fontSize: '15.5px', color: '#000', fontWeight: 'bold', marginBottom: '8px' }}>다. 단계별 자생적 스케일업(Scale-up) 전략 및 로드맵</p>
      <ul style={{ listStyleType: "'ㅇ '", paddingLeft: '20px', fontSize: '14.5px', color: '#000', lineHeight: '1.6', marginBottom: '24px', letterSpacing: '-0.3px', wordBreak: 'keep-all' }}>
        <li style={{ marginBottom: '8px' }}><strong>(1단계 인지도 확보)</strong> 초기 자사몰 및 펀딩을 통해 조개껍데기 오가닉 질감이 돋보이는 모던 감성 <strong>'캠핑용 안심 착화재'</strong>로 아웃도어 시장을 빠르게 선점</li>
        <li style={{ marginBottom: '8px' }}><strong>(2단계 원재료 융합 확충)</strong> 표고버섯 폐배지 등을 이질적으로 융합한 농업 폐기물 결합형 고열량 <strong>'프리미엄 바비큐용 성형장작/성형숯'</strong> 모델을 출시하여 B2B 프랜차이즈 식당 및 글램핑장 대량 납품 계약 확보</li>
        <li><strong>(3단계 글로벌 LNT 진출)</strong> <strong>'캠핑용 불멍 오브제'</strong>로 라인업을 고도화하고, 제철소 산업용 탈황제로 피벗(Pivot)하거나 환경 보존(LNT: Leave No Trace) 트렌드에 특화된 글로벌 K-에코테크 기어로 북미 수출 개척</li>
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
          * 당사 자체 B2B 영업권 직접 확보율 및 폐기물 보조금 연계를 기반으로 한 보수적 하이퍼 추정치 적용 산출 근거 (2025)
        </div>
      </div>
    </div>
  );
}
