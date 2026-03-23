import React from 'react';
import { Target, Users, TrendingUp, DollarSign } from 'lucide-react';
import '../index.css';

export default function BusinessModelStrategyV1() {
  return (
    <div className="hwp-section">
      <h1 className="hwp-chapter-title">3. 성장전략 (Scale-up)</h1>
      
      <h2 className="hwp-section-title">3-1. 창업아이템 비즈니스 모델</h2>
      <div className="hwp-instruction-box">
        ※ 개발/개선/구체화하고자 하는 제품·서비스의 수익 창출을 위한 비즈니스 모델 기재<br/>
        ※ 정의된 목표시장(고객)에 대한 진입 현황과 그간 추진성과 및 전략 기재
      </div>

      {/* 린 창업 BM 박스 */}
      <div style={{
        background: '#f8fafc',
        border: '1px solid #e2e8f0',
        borderRadius: '12px',
        padding: '24px',
        marginBottom: '30px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <div style={{ background: '#3b82f6', color: 'white', padding: '10px', borderRadius: '8px', marginRight: '16px' }}>
            <DollarSign size={24} />
          </div>
          <div>
            <h3 style={{ margin: 0, fontSize: '18px', color: '#1e293b' }}>가벼운 린(Lean) 창업 수익 구조</h3>
            <p style={{ margin: '4px 0 0 0', color: '#64748b', fontSize: '14px' }}>
              초기 생산 설비 투자를 통영 자원화 시설 인프라 제휴로 대체하여 리스크를 없애고, 브랜드 구축과 타겟 마케팅에 핵심 자본을 집중하는 고효율 BM
            </p>
          </div>
        </div>
        
        <div style={{ display: 'flex', gap: '20px' }}>
          <div style={{ flex: 1, background: 'white', padding: '16px', borderRadius: '8px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
            <div style={{ fontWeight: 'bold', color: '#0f172a', marginBottom: '8px' }}>비용(Cost) 헷징</div>
            <div style={{ fontSize: '13px', color: '#475569', lineHeight: '1.5' }}>폐굴껍데기 원료 저가/무상 조달<br/>수억 원대 소성로 설비 투자 Zero</div>
          </div>
          <div style={{ flex: 1, background: 'white', padding: '16px', borderRadius: '8px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
            <div style={{ fontWeight: 'bold', color: '#0f172a', marginBottom: '8px' }}>가치(Value) 창출</div>
            <div style={{ fontSize: '13px', color: '#475569', lineHeight: '1.5' }}>국가공인 성형탄 품질기준 적합 프리미엄<br/>제로웨이스트 토양개량 ESG 포지셔닝</div>
          </div>
          <div style={{ flex: 1, background: 'white', padding: '16px', borderRadius: '8px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
            <div style={{ fontWeight: 'bold', color: '#0f172a', marginBottom: '8px' }}>수익(Revenue) 파이프라인</div>
            <div style={{ fontSize: '13px', color: '#475569', lineHeight: '1.5' }}>크라우드 펀딩을 통한 초기 팬덤 캐시카우<br/>가족형 테마 캠핑장 연간 단위 B2B 계약</div>
          </div>
        </div>
      </div>

      <h2 className="hwp-section-title">3-2. 창업아이템 시장 진입 등 사업화 전략</h2>
      <div className="hwp-instruction-box">
        ※ 정의된 목표시장(고객) 내 세부 고객, 경쟁사, 대체하고자 하는 제품·서비스의 주요 정보 등 분석을 통해 사업 진입·확장 전략 수립<br/>
        ※ 협약 기간 내 달성하고자 하는 사업화 성과(매출, 투자, 고용 등) 및 장기적 성과 창출 계획 기재
      </div>

      {/* 3단계 시장 진입 로드맵 카드 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '30px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
          <div style={{ background: '#eff6ff', color: '#2563eb', padding: '12px', borderRadius: '50%', marginRight: '20px', minWidth: '48px', minHeight: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Target size={24} />
          </div>
          <div>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', color: '#1e293b' }}>1단계 진입: 펀딩 얼리어답터 팬덤 구축</h3>
            <p style={{ margin: 0, color: '#475569', fontSize: '14px', lineHeight: '1.6' }}>친환경 및 가치소비 성향이 매우 강한 와디즈 얼리어답터 플랫폼을 1차 테스트베드로 활용합니다. '안전한 불멍'을 직관적으로 어필하는 콘텐츠를 통해 굿즈 패키징 런칭 및 충성도 높은 초기 브랜드 팬덤 1,000명을 단기 확보합니다.</p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-start', background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
          <div style={{ background: '#f0fdf4', color: '#16a34a', padding: '12px', borderRadius: '50%', marginRight: '20px', minWidth: '48px', minHeight: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Users size={24} />
          </div>
          <div>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', color: '#1e293b' }}>2단계 확장: 수익 안정을 위한 대량 B2B 루트 개척</h3>
            <p style={{ margin: 0, color: '#475569', fontSize: '14px', lineHeight: '1.6' }}>민간 캠핑장 운영자들의 고질적 고충인 매연(VOCs) 민원 스트레스를 타겟팅합니다. 냄새 없는 쾌적한 캠핑장 환경을 약속하며, 가족 단위 글램핑장/대형 캠핑장 위주로 월간 대량 고정 납품 B2B 계약 5건을 조기 세팅합니다.</p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-start', background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
          <div style={{ background: '#fef2f2', color: '#dc2626', padding: '12px', borderRadius: '50%', marginRight: '20px', minWidth: '48px', minHeight: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <TrendingUp size={24} />
          </div>
          <div>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', color: '#1e293b' }}>3단계 스케일업: 토탈 친환경 캠핑 기어 브랜드 도약</h3>
            <p style={{ margin: 0, color: '#475569', fontSize: '14px', lineHeight: '1.6' }}>초기 성공을 발판으로 중장기 산출물을 본격 전개합니다. ①참나무 훈제향 장작(버섯 폐배지 톱밥 결합), ②자연 폐기물 하이브리드 업사이클링 제품군, ③캠핑 전용 기어/도구 디자인 개발 등 토탈 브랜드 라인업으로 다각화합니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
