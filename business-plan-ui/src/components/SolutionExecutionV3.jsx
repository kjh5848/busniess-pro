import React from 'react';
import '../index.css';

export default function SolutionExecutionV3() {
  return (
    <div className="hwp-section">
      <h2 className="hwp-section-title">2-2. 창업아이템 실현 및 제품 고도화 방안</h2>
      <div className="hwp-instruction-box">
        ※ 2-2. 아이템 실현 방안 (구체적인 개발 수준, 제품화 로드맵)
      </div>

      <div style={{ borderLeft: '4px solid #333', paddingLeft: '14px', marginBottom: '24px' }}>
        <p style={{ fontWeight: 'bold', margin: '0', fontSize: '15.5px', color: '#000', lineHeight: '1.4' }}>
          "액상 천연 왁스, 버려진 폐커피박(커피 찌꺼기), 소성 굴패각 가루를 결합하여 화학 결합제 제로(0%)의 완벽한 융합 원료 순환경제를 창출함"
        </p>
      </div>

      <p style={{ fontSize: '15.5px', color: '#000', fontWeight: 'bold', marginBottom: '8px' }}>가. 독자적 하이엔드 무가압 열성형 공법 도입 양산 현황</p>
      <ul style={{ listStyleType: "'ㅇ '", paddingLeft: '20px', fontSize: '14.5px', color: '#000', lineHeight: '1.6', marginBottom: '24px', letterSpacing: '-0.3px', wordBreak: 'keep-all' }}>
        <li style={{ marginBottom: '8px' }}><strong>(100% 무화학 접착제 양산 달성)</strong> 밀가루 풀이나 공업용 접착제를 투입하는 기존 대형 블록 공장장 양산 방식과 기술적 전면 차별화. 별도의 공업용수나 유해 화학반응 없이 점도 높은 '천연 액상 왁스'만을 유일한 화학적 촉매 유화제로 배합함</li>
        <li><strong>(무가압 친환경 덩어리 성형)</strong> 바짝 마른 폐커피박과 굴 껍데기 분말을 단단히 뭉쳐 굳히는 신소재 무가압 열성형 방식을 마스터하여 환경 오염 스트레스를 제조 공정 단계 자체에서 완전히 압살시킴</li>
      </ul>

      <p style={{ fontSize: '15.5px', color: '#000', fontWeight: 'bold', marginBottom: '8px' }}>나. 원료 시너지 극대화 및 친환경 전방위 순환 경제(Circular Economy) 궤도표</p>
      <table className="hwp-table" style={{ marginBottom: '40px', color: '#000' }}>
        <thead>
          <tr>
            <th style={{ width: '22%', textAlign: 'center', color: '#000', borderRight: '1px solid #000' }}>고도화 T/F 마일스톤</th>
            <th style={{ width: '78%', textAlign: 'center', color: '#000' }}>상세 융합 가이드라인 및 시너지 기대효과 (Expected Result)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ textAlign: 'center', fontWeight: 'bold' }}>[Phase 1]<br/>이종 폐기물 결합 베이스<br/>화학적 듀얼 텐션 창출</td>
            <td style={{ padding: '12px', lineHeight: '1.6' }}><strong>(극강 화력 vs 탄소 배출 방어)</strong> 폐커피박은 화력이 압도적이지만 단독 연소 시 이산화탄소가 대량 발생함. 이에 굴패각 '생석회 가루'를 2:1 황금 비율로 배합 혼합하여 작동시킴. 커피박이 연소하며 내뿜는 독특한 독성 배기가스를 굴 껍데기의 강알칼리 필터가 곧바로 중화 억제시키는 완벽한 상호 보완 기믹 세팅 완료.</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center', fontWeight: 'bold' }}>[Phase 2]<br/>연소 직후 잔여물(재)의<br/>천연 비료 100% 완전 환원</td>
            <td style={{ padding: '12px', lineHeight: '1.6' }}><strong>(종량제 폐기 면제 혜택 및 농가 지력 상승 환원)</strong> 연소 후 남은 찌꺼기 재를 맨 땅바닥 흙에 그대로 털어 버려도 법적 제한이나 생태계 지장 전무함. 오히려 농촌진흥청에서 산성화된 토양 원상 복구를 위해 적극 파종을 인센티브로 지원 중인 '천연 패화석(석회질) 비료'와 원자재 구성 성분이 소수점 아래까지 정확히 100% 일치하여 최상위 등급의 친환경 가설 도달 완료.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
