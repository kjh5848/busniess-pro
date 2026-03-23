import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from 'recharts';
import '../index.css';

const marketDemandData = [
  { year: '21년', demand: 25 },
  { year: '22년', demand: 32 },
  { year: '23년', demand: 55 },
  { year: '24년', demand: 78 },
  { year: '25년(예계)', demand: 110 }
];

export default function MarketAnalysisV3() {
  return (
    <div className="hwp-section">
      <h2 className="hwp-section-title">1-2. 창업아이템 목표시장(고객) 현황 분석</h2>
      <div className="hwp-instruction-box">
        ※ 본 사업이 타겟하는 명확한 고객(시장)의 특징 및 최근 동향 기재
      </div>

      <div style={{ borderLeft: '4px solid #333', paddingLeft: '14px', marginBottom: '24px' }}>
        <p style={{ fontWeight: 'bold', margin: '0', fontSize: '15.5px', color: '#000', lineHeight: '1.4' }}>
          "영유아 동반 가족 단위 캠퍼들의 호흡기 보호 니즈 급증과 국가(산림청) 규제 발효에 따른 무독성 천연 착화재 팽창 도래"
        </p>
      </div>

      <p style={{ fontSize: '15.5px', color: '#000', fontWeight: 'bold', marginBottom: '8px' }}>가. 텐트 내 쾌적/안전 보장 니즈 기반 프리미엄 캠핑 소비 트렌드</p>
      <ul style={{ listStyleType: "'ㅇ '", paddingLeft: '20px', fontSize: '14.5px', color: '#000', lineHeight: '1.6', marginBottom: '24px', letterSpacing: '-0.3px', wordBreak: 'keep-all' }}>
        <li style={{ marginBottom: '8px' }}><strong>(빠른 발화성에서 '무독성'으로의 인식 전환)</strong> 과거 오직 신속한 불꽃 점화에만 집중하던 소비 행태가 가족 단위 여가 트렌드로 넘어오면서 연기 매움/악취 억제 니즈로 180도 선회함</li>
        <li style={{ marginBottom: '8px' }}><strong>(국가 기관 공식 규제 발효)</strong> 산림청 등 정부 부처 차별화된 유해 착화탄 공식 강력 규제가 연달아 시작되며, 기존 화학 물질 첨가 연료 제품들이 시장에서 즉각 퇴출당하는 패러다임 도래</li>
        <li><strong>(고효율 틈새 시장 겨냥)</strong> 해당 호흡기 치명 위협 인지 및 무독성 갈증 결핍을 정확하게 겨냥하여 '가장 안전한 강력 발화'라는 캐치프레이즈로 단기 점유율 절대 우위 점유 확신</li>
      </ul>

      <div style={{ border: '2px solid #333', padding: '20px', marginBottom: '30px', background: '#fff' }}>
        <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '14px', marginBottom: '20px', color: '#000' }}>
          &lt; 국내 친환경/안전 캠핑 장비 및 무연 연료 검색 지수 트렌드 (100 기준) &gt;
        </div>
        <div style={{ width: '100%', height: '220px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={marketDemandData} margin={{ top: 20, right: 30, left: 10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
              <XAxis dataKey="year" stroke="#333" fontSize={13} tickLine={false} axisLine={{ stroke: '#333' }} />
              <YAxis stroke="#333" fontSize={13} tickLine={false} axisLine={{ stroke: '#333' }} />
              <Tooltip contentStyle={{ border: '1px solid #333', borderRadius: '0', color: '#000' }} />
              <Line type="monotone" dataKey="demand" stroke="#333" strokeWidth={3} dot={{ fill: '#333', r: 5 }}>
                <LabelList dataKey="demand" position="top" style={{ fill: '#000', fontSize: '12.5px', fontWeight: 'bold' }} />
              </Line>
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div style={{ fontSize: '12.5px', color: '#555', textAlign: 'right', marginTop: '10px' }}>
          * 통계 출처: 네이버 데이터랩 검색 지수 동향 추출 (2025)
        </div>
      </div>
    </div>
  );
}
