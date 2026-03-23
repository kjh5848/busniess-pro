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

export default function MarketAnalysisV2() {
  return (
    <div className="hwp-section">
      <h2 className="hwp-section-title">1-2. 창업아이템 목표시장(고객) 현황 분석</h2>
      <div className="hwp-instruction-box">
        ※ 본 사업이 타겟하는 명확한 고객(시장)의 특징 및 최근 동향 기재
      </div>

      <div style={{ borderLeft: '4px solid #333', paddingLeft: '14px', marginBottom: '24px' }}>
        <p style={{ fontWeight: 'bold', margin: '0', fontSize: '16px', color: '#000', lineHeight: '1.4' }}>
          "가족의 호흡기 건강을 최우선시하는 '가족 단위 캠퍼'들이 늘어나면서, 냄새가 적고 유해 성분이 전면 배제된 무매연 천연 착화재 시장이 폭발적으로 팽창하고 있습니다."
        </p>
      </div>

      <p style={{ fontSize: '15.5px', color: '#000', lineHeight: '1.6', marginBottom: '24px', wordBreak: 'keep-all' }}>
        <strong>가. 친환경 안전 캠핑에 대한 강력한 시장 수요 폭발</strong><br />
        기존 야외 바비큐나 글램핑장에 보급되던 대부분의 고체 연료와 번개탄들은 유해성 검증 체계 없이 오직 '빠른 인화성'에만 몰두해 생산되었습니다. 하지만 최근 산림청의 유해 착화탄 공식 규제가 본격적으로 발효되면서 해당 산업의 패러다임이 완전히 뒤집히고 있습니다. 특히 영유아를 동반한 가족 단위 캠퍼들을 중심으로 텐트 주변에 가득 차는 매운 연기와 눈매움 증상을 치명적인 위협으로 인지하는 분위기가 뚜렷하게 형성되었습니다. 본 제품은 이러한 핵심 결핍을 정확하게 겨냥하여 강력한 우위를 점유할 것입니다.
      </p>

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
          * 통계 출처: 네이버 데이터랩 검색어 트렌드 분석 종합 (2025)
        </div>
      </div>
    </div>
  );
}
