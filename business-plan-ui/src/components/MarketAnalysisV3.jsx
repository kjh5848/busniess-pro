import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from 'recharts';
import '../index.css';

const marketDemandData = [
  { year: '21년', demand: 25 },
  { year: '22년', demand: 32 },
  { year: '23년', demand: 55 },
  { year: '24년', demand: 78 },
  { year: '25년', demand: 110 }
];

const tamSamSomData = [
  { name: 'TAM(전체시장)', value: 1500 },
  { name: 'SAM(유효시장)', value: 450 },
  { name: 'SOM(수익시장)', value: 120 }
];

export default function MarketAnalysisV3() {
  return (
    <div className="hwp-section">
      <h2 className="hwp-section-title">1-2. 창업아이템 목표시장(고객) 현황 분석</h2>
      <div className="hwp-instruction-box">
        ※ 창업 아이템 개발 목적에 따라 정의된 핵심 시장(고객) 규모, 경쟁 강도, 향후 성장성, 고객 요구사항 등 기재
      </div>

      <div style={{ borderLeft: '3px solid #333', paddingLeft: '14px', marginBottom: '24px' }}>
        <p style={{ fontWeight: 'bold', margin: '0', fontSize: '15.5px', color: '#000', lineHeight: '1.5' }}>
          "국가 기관(산림청) 규제 발효에 따른 '유해 화학 착화탄' 퇴출 패러다임 도래, 영유아 동반 캠핑족의 '무독성 연료' 수요 폭발적 팽창 시장 선점"
        </p>
      </div>

      <p style={{ fontSize: '15.5px', color: '#000', fontWeight: 'bold', marginBottom: '8px' }}>가. 목표 고객 특성 및 텐트 내 쾌적/안전 보장 핵심 요구사항</p>
      <ul style={{ listStyleType: "'ㅇ '", paddingLeft: '20px', fontSize: '14.5px', color: '#000', lineHeight: '1.6', marginBottom: '20px', letterSpacing: '-0.3px', wordBreak: 'keep-all' }}>
        <li style={{ marginBottom: '8px' }}><strong>(빠른 발화성에서 '무독성'으로의 극적인 인식 전환)</strong> 과거 신속한 점화에만 집중하던 소비 행태가 가족 단위 여가 트렌드로 넘어오면서 연기 매움/악취 억제 니즈로 완전히 이동함 (자사 핵심 타겟: 3040 영유아 동반 가족 단위 캠퍼)</li>
        <li style={{ marginBottom: '8px' }}><strong>(국가 기관 공식 규제 발효와 경쟁사 도태)</strong> 산림청 등 정부 부처의 유해 불모양탄/착화탄 강력 규제가 연달아 시작되며, 기존 화학 물질 첨가 연료 제품들이 시장에서 즉각 퇴출 당하는 강력한 반사이익 발생 구도</li>
      </ul>

      <p style={{ fontSize: '15.5px', color: '#000', fontWeight: 'bold', marginBottom: '8px' }}>나. 타겟 시장(TAM-SAM-SOM) 진입 시나리오 및 성장성 종합 전망</p>
      <ul style={{ listStyleType: "'- '", paddingLeft: '20px', fontSize: '14.5px', color: '#000', lineHeight: '1.6', marginBottom: '24px', letterSpacing: '-0.3px', wordBreak: 'keep-all' }}>
        <li style={{ marginBottom: '8px' }}><strong>(단기 점유율 절대 우위 확신)</strong> 호흡기 치명 위협 인지 및 무독성 갈증을 정확하게 겨냥하여, '가장 안전하고 강력한 친환경 불꽃'이라는 브랜딩으로 ESG 캠핑 소모품 틈새 시장을 폭발적으로 점유</li>
        <li><strong>(기대 효과 및 진입 전략)</strong> 출시 후 1차 연도 120억 원 규모의 수익시장(SOM) 내 10% 이상 점유를 목표로 하여 즉각적인 매출 창출 및 지역 사회 폐기물의 압도적 순환 동시 달성</li>
      </ul>

      <div style={{ display: 'flex', gap: '20px', marginBottom: '30px', alignItems: 'stretch' }}>
        <div style={{ flex: 1, border: '2px solid #333', padding: '16px', background: '#fff' }}>
          <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '13.5px', marginBottom: '16px', color: '#000' }}>
            &lt; 무독성 캠핑 연료 시장 규모 (단위: 억 원) &gt;
          </div>
          <div style={{ width: '100%', height: '160px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={tamSamSomData} layout="vertical" margin={{ top: 0, right: 30, left: 10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" horizontal={false} />
                <XAxis type="number" stroke="#333" fontSize={12} tickLine={false} axisLine={{ stroke: '#333' }} />
                <YAxis dataKey="name" type="category" stroke="#333" fontSize={11.5} tickLine={false} axisLine={{ stroke: '#333' }} fontWeight="bold" />
                <Tooltip cursor={{ fill: '#f5f5f5' }} contentStyle={{ border: '1px solid #333', borderRadius: '0', color: '#000' }} />
                <Bar dataKey="value" fill="#666" barSize={22}>
                   <LabelList dataKey="value" position="right" style={{ fill: '#000', fontSize: '11.5px', fontWeight: 'bold' }} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div style={{ fontSize: '11.5px', color: '#555', textAlign: 'right', marginTop: '10px' }}>
            * 통계 기반 자사 TAM-SAM-SOM 추정 (2025)
          </div>
        </div>

        <div style={{ flex: 1, border: '2px solid #333', padding: '16px', background: '#fff' }}>
          <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '13.5px', marginBottom: '16px', color: '#000' }}>
            &lt; 친환경/안전 무연 연료 검색 지수 트렌드 &gt;
          </div>
          <div style={{ width: '100%', height: '160px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={marketDemandData} margin={{ top: 20, right: 20, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                <XAxis dataKey="year" stroke="#333" fontSize={12} tickLine={false} axisLine={{ stroke: '#333' }} />
                <YAxis stroke="#333" fontSize={12} tickLine={false} axisLine={{ stroke: '#333' }} />
                <Tooltip contentStyle={{ border: '1px solid #333', borderRadius: '0', color: '#000' }} />
                <Line type="monotone" dataKey="demand" stroke="#333" strokeWidth={3} dot={{ fill: '#333', r: 4 }}>
                  <LabelList dataKey="demand" position="top" style={{ fill: '#000', fontSize: '11.5px', fontWeight: 'bold' }} />
                </Line>
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div style={{ fontSize: '11.5px', color: '#555', textAlign: 'right', marginTop: '10px' }}>
            * 통계 출처: 포털 검색 지수 추이 변환 (2025)
          </div>
        </div>
      </div>
    </div>
  );
}
