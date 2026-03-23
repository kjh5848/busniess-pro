import React from 'react';
import { Package, MonitorSmartphone } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, LabelList } from 'recharts';
import '../index.css';

const marketData = [
  { step: '1년차 (SOM)', 매출목표: 15, name: '글램핑/B2B 집중' },
  { step: '2년차 (SAM)', 매출목표: 45, name: 'D2C/온라인 시판' },
  { step: '3년차 (Scale)', 매출목표: 100, name: '전국 온오프라인 확대' }
];

export default function BusinessModelStrategyV1() {
  return (
    <div className="hwp-section">
      {/* 3-1 비즈니스 모델 */}
      <h2 className="hwp-section-title">3-1. 비즈니스 모델 (수익 창출 전략)</h2>
      <div className="hwp-instruction-box">
        ※ 비즈니스의 수익 모델(단기/중장기 관점), 가격 책정, 타겟 고객, 벨류 체인 등 기재
      </div>

      {/* Rule 5: Key Message Quote */}
      <div style={{ borderLeft: '4px solid #333', paddingLeft: '14px', marginBottom: '24px' }}>
        <p style={{ fontWeight: 'bold', margin: '0', fontSize: '16px', color: '#000', lineHeight: '1.4' }}>
          "버려지는 통영 수산 폐기물(굴패각)을 GPM(매출총이익률) 40% 이상의 프리미엄 캠핑 소비재로 격상시켜, 1년 내 BEP(손익분기점) 조기 달성을 실현합니다."
        </p>
      </div>

      <p style={{ fontSize: '15.5px', color: '#000', lineHeight: '1.6', marginBottom: '4px', letterSpacing: '-0.3px', wordBreak: 'keep-all' }}>
        <strong>가. 핵심 수익 모델 (B2B & B2C 투트랙 로드맵)</strong><br/>
        본 아이템은 유해 물질이 없는 '친환경 프리미엄 착화재' 단일 제품으로 초기 B2B(대형 프리미엄 글램핑장, 캠핑장 연간 계약) 시장을 선점하여 <strong>초기 현금흐름(Cash-Cow)을 확보</strong>합니다. 이후 D2C 자사몰을 통한 B2C 캠퍼 정기구독 및 객단가 확장을 도모합니다.
      </p>
      {/* Rule 1: Evidence Text */}
      <p style={{ fontSize: '13px', color: '#555', margin: '0 0 24px 0', wordBreak: 'keep-all' }}>
        * 단가 설정: B2B 납품 단가: 박스당 3,500원 / B2C 소비자가: 박스당 6,500원 추정
      </p>

      {/* Rule 4: UI Concept Placeholders */}
      <div style={{ display: 'flex', gap: '20px', marginBottom: '40px' }}>
        <div style={{ flex: 1, border: '1px dashed #333', padding: '24px', textAlign: 'center', backgroundColor: '#fafafa' }}>
          <Package size={32} style={{ color: '#333', marginBottom: '12px' }} />
          <div style={{ fontSize: '14px', color: '#000', fontWeight: 'bold' }}>[화면안 1] 오프라인 납품 패키징</div>
          <div style={{ fontSize: '13px', color: '#333', marginTop: '4px' }}>국가공인(KCL 등) 합격 마크 부착 재생지 박스</div>
        </div>
        <div style={{ flex: 1, border: '1px dashed #333', padding: '24px', textAlign: 'center', backgroundColor: '#fafafa' }}>
          <MonitorSmartphone size={32} style={{ color: '#333', marginBottom: '12px' }} />
          <div style={{ fontSize: '14px', color: '#000', fontWeight: 'bold' }}>[화면안 2] D2C 자사 커머스 웹</div>
          <div style={{ fontSize: '13px', color: '#333', marginTop: '4px' }}>B2B 대량 발주 자동 변동 견적 기능 및 B2C 정기배송</div>
        </div>
      </div>

      {/* 3-2 시장 진입 전략 */}
      <h2 className="hwp-section-title">3-2. 창업아이템 시장 진입 및 성장 전략</h2>
      <div className="hwp-instruction-box">
        ※ 정의된 목표시장(고객) 내 세부 고객, 경쟁사 등 분석을 통해 사업 진입·확장 전략 수립 및 달성하고자 하는 재무적 성과 기재
      </div>

      {/* Rule 5: Key Message Quote */}
      <div style={{ borderLeft: '4px solid #333', paddingLeft: '14px', marginBottom: '24px' }}>
        <p style={{ fontWeight: 'bold', margin: '0', fontSize: '16px', color: '#000', lineHeight: '1.4' }}>
          "연간 1,500억 원 규모의 소모성 캠핑 연료(SAM) 시장에서, 친환경 ESG 지표를 선점하여 3년 내 시장점유율 5% (매출 75억)를 선제 달성합니다."
        </p>
      </div>

      <p style={{ fontSize: '15.5px', color: '#000', lineHeight: '1.6', marginBottom: '4px', letterSpacing: '-0.3px', wordBreak: 'keep-all' }}>
        <strong>나. 목표 시장 규모(TAM-SAM-SOM) 및 파이프라인(Traction) 성장 지표</strong><br/>
        ESG 가치 소비를 지향하는 MZ세대 캠퍼와 매연 감축 의무를 가진 대형 글램핑장(SOM)을 거점으로, 점진적으로 전체 소모성 캠핑 연료 시장(SAM)의 파이를 끌어옵니다.
      </p>
      {/* Rule 1: Evidence Text */}
      <p style={{ fontSize: '13px', color: '#555', margin: '0 0 24px 0', wordBreak: 'keep-all' }}>
        * 관련 근거: 한국관광공사 연간 캠핑 이용자 통계(2025) 및 연료 소모 시장 데이터 추산 (TAM=7조, SAM=1500억, SOM=75억)
      </p>

      {/* Rule 2: Upward Trending Chart (Grayscale) */}
      <div style={{ border: '2px solid #333', padding: '20px', marginBottom: '40px', background: '#fff' }}>
        <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '14px', marginBottom: '20px', color: '#000' }}>&lt; 연차별 목표시장 공격 진입 및 타겟 매출 추이(예상) &gt;</div>
        <div style={{ width: '100%', height: '240px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={marketData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" vertical={false} />
              <XAxis dataKey="step" stroke="#333" fontSize={13} tickLine={false} axisLine={{ stroke: '#333' }} />
              <YAxis stroke="#333" fontSize={13} tickLine={false} axisLine={{ stroke: '#333' }} tickFormatter={(val) => `${val}억`} />
              <RechartsTooltip cursor={{ fill: '#f5f5f5' }} contentStyle={{ border: '1px solid #333', borderRadius: '0' }} />
              <Bar dataKey="매출목표" fill="#666" barSize={60}>
                <LabelList dataKey="name" position="top" style={{ fill: '#000', fontSize: '12.5px', fontWeight: 'bold' }} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
}
