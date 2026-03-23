import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import '../index.css';

const growthData = [
  { step: '1년차', 매출: 3, label: '초기 크라우드 펀딩' },
  { step: '2년차', 매출: 15, label: '자사몰 및 국내 B2B 납품' },
  { step: '3년차', 매출: 45, label: '프리미엄 숯불 바비큐/글로벌' }
];

export default function BusinessModelStrategyV2() {
  return (
    <div className="hwp-section">
      <h2 className="hwp-section-title">3-1. 비즈니스 모델 (수익 창출 전략)</h2>
      <div className="hwp-instruction-box">
        ※ 비즈니스의 메인 타깃, 가치 제안 및 구체적인 돈 버는 방법(수익 모델) 기재
      </div>

      <div style={{ borderLeft: '4px solid #333', paddingLeft: '14px', marginBottom: '24px' }}>
        <p style={{ fontWeight: 'bold', margin: '0', fontSize: '16px', color: '#000', lineHeight: '1.4' }}>
          "화학 매연 걱정 없이 안전하게 불멍과 바비큐를 안심하고 즐길 수 있는 천연 불쏘시개로서, 뚜렷한 시장 내 확고한 캐시카우 채널 세 곳을 즉시 구축합니다."
        </p>
      </div>

      <p style={{ fontSize: '15.5px', color: '#000', lineHeight: '1.6', marginBottom: '10px', wordBreak: 'keep-all' }}>
        당사의 메인 타깃 수요층은 호흡기 건강에 극도로 민감한 영유아 동반 3040 오토 캠퍼 계층과, 냄새 없고 깔끔한 고체 연료 대량 공급을 선호하는 럭셔리 프리미엄 글램핑장 및 대형 펜션업체입니다. 제품의 강력한 기술 우위를 발판으로 확신을 심어주어 아래의 세 가지 명확하고 파괴적인 투트랙 수익 파이프라인 구조를 가동합니다.
      </p>

      <div className="hwp-table-title">{'<'}3대 핵심 수익 창출 파이프라인 포트폴리오{'>'}</div>
      <table className="hwp-table" style={{ marginBottom: '40px', color: '#000' }}>
        <thead>
          <tr>
            <th style={{ width: '25%', textAlign: 'center', color: '#000', borderRight: '1px solid #000' }}>수익 창출망</th>
            <th style={{ width: '75%', textAlign: 'center', color: '#000' }}>고객 획득 및 매출화 세부 전략 체계</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ textAlign: 'center', fontWeight: 'bold' }}>① 단기 초기 매출 거점<br/>(D2C 및 펀딩 커머스)</td>
            <td style={{ padding: '12px', lineHeight: '1.6' }}>감각적이고 세련된 K-에코테크 브랜딩을 장착한 자사 웹사이트(D2C) 직접 직거래 판매와, 초기 얼리어답터 반응 테스트를 목적으로 하는 와디즈/텀블벅 대규모 크라우드 펀딩으로 이목을 집중시켜 런칭 첫 달부터 강력한 현금흐름 흑자를 유입시킵니다.</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center', fontWeight: 'bold' }}>② 중기 대규모 CashCow<br/>(B2B 도매 단가 납품 체인)</td>
            <td style={{ padding: '12px', lineHeight: '1.6' }}>오프라인 거점 영업망을 가동하여 전국의 대형 글램핑 체인, 오토 캠핑장 매점, 그리고 연기 발판이 잦아 민원이 폭주하는 실내 프리미엄 도심 숯불 바비큐 식당과 월간 박스 묶음 대량 정기 납품(B2B) 계약을 전면 체결하여 사계절 고정 매출 인프라를 독식합니다.</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center', fontWeight: 'bold' }}>③ 장기 스케일업 파이낸싱<br/>(탄소배출권 및 공공지원)</td>
            <td style={{ padding: '12px', lineHeight: '1.6' }}>추후 지속가능한 ESG 인증 절차 확립을 통해 지자체 탄소배출권(CERs) 거래소를 연계한 금융 수익을 실현하고, 공정상 필요한 굴껍데기 원재료 수급 트럭 한 대당 지자체에서 의무 지급되는 '수산폐기물 처리 보조금' 규정을 법적으로 확보하여 원재료비 완전 무상 0원 체제를 영구 달성합니다.</td>
          </tr>
        </tbody>
      </table>


      <h2 className="hwp-section-title">3-2. 창업아이템 시장 진입 등 사업화 전략</h2>
      <div className="hwp-instruction-box">
        ※ 3-2. 구체적인 성장 로드맵 및 시장 장악 단계 기재
      </div>

      <div style={{ borderLeft: '4px solid #333', paddingLeft: '14px', marginBottom: '24px' }}>
        <p style={{ fontWeight: 'bold', margin: '0', fontSize: '16px', color: '#000', lineHeight: '1.4' }}>
          "초기 인지도를 확실히 각인시키고, '표고버섯 폐배지' 융합 등 카테고리 킬러 하이엔드 라인업으로 확장하여 북미와 유럽의 바이오 연료 수출 시장으로 뻗어 나갑니다."
        </p>
      </div>

      <p style={{ fontSize: '15.5px', color: '#000', lineHeight: '1.6', marginBottom: '20px', wordBreak: 'keep-all' }}>
        기존 투박한 철물점 포장지 디자인 일색이던 고리타분한 착화재 시장에서 벗어나, 하얀 조개껍데기 특유의 오가닉한 질감이 돋보이는 모던하고 감성적인 로고 타이포그래피를 전면에 입혀 '프리미엄 감성 캠핑 소품'으로 시장에 역포지셔닝할 확고한 전략을 품고 있습니다. 
        <br/><br/>
        나아가, 일반 캠핑 기어를 넘어 농가에서 처치 곤란으로 버려지는 '표고버섯 참나무 폐배지 톱밥' 재료를 당사의 굴 껍데기와 결합한 고급 버전도 출시를 앞두고 있습니다. 통나무를 베어내지 않고도 진짜 전통 참나무 훈제 바비큐의 참향을 숯불에 낼 수 있어, 프리미엄 다이닝 시장 진입은 물론이고, 엄격한 산림 벌목 규제로 인해 LNT(Leave No Trace) 친환경 기어가 각광받는 북미/유럽 해외 아웃도어 트렌드 쇼 참가 및 초대형 해외 벤더와의 수출 거래 활로를 매우 자신 있게 확신합니다.
      </p>

      <div style={{ border: '2px solid #333', padding: '20px', marginBottom: '30px', background: '#fff' }}>
        <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '14px', marginBottom: '20px', color: '#000' }}>
          &lt; 글로벌 K-에코테크 브랜드 성장에 따른 스케일업 매출 추이 (단위: 억 원) &gt;
        </div>
        <div style={{ width: '100%', height: '220px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={growthData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" vertical={false} />
              <XAxis dataKey="step" stroke="#333" fontSize={13} tickLine={false} axisLine={{ stroke: '#333' }} />
              <YAxis stroke="#333" fontSize={13} tickLine={false} axisLine={{ stroke: '#333' }} tickFormatter={(val) => `${val}억`} />
              <Tooltip cursor={{ fill: '#f5f5f5' }} contentStyle={{ border: '1px solid #333', borderRadius: '0', color: '#000' }} />
              <Area type="monotone" dataKey="매출" fill="#ccc" stroke="#333" strokeWidth={3} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div style={{ fontSize: '12.5px', color: '#555', textAlign: 'right', marginTop: '10px' }}>
          * 통계 출처: 자사 수출 바이어 협상 및 성장 보수 회계 추산 (2025)
        </div>
      </div>

    </div>
  );
}
