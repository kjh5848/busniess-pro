import React from 'react';
import '../index.css';

export default function SolutionExecutionV2() {
  return (
    <div className="hwp-section">
      <h2 className="hwp-section-title">2-2. 창업아이템 실현 및 제품 고도화 방안</h2>
      <div className="hwp-instruction-box">
        ※ 2-2. 아이템 실현 방안 (구체적인 개발 수준, 제품화 로드맵)
      </div>

      <div style={{ borderLeft: '4px solid #333', paddingLeft: '14px', marginBottom: '24px' }}>
        <p style={{ fontWeight: 'bold', margin: '0', fontSize: '16px', color: '#000', lineHeight: '1.4' }}>
          "액상 천연 왁스와 버려진 폐커피박(커피 찌꺼기), 그리고 소성 굴 껍데기 가루를 결합하여 화학 접착제 제로(0%)의 완벽한 순환경제를 실현합니다."
        </p>
      </div>

      <p style={{ fontSize: '15.5px', color: '#000', lineHeight: '1.6', marginBottom: '20px', wordBreak: 'keep-all' }}>
        기존의 보편적인 공장형 숯이나 번개탄 블록을 대량으로 찍어내기 위해서는 형태를 잡는 화학 풀, 혹은 본드계 공업 결합제를 필수적으로 써야만 합니다. 하지만 당사가 자랑하는 하이엔드 고도화 공법의 제조 전 과정에는 별도의 공업용수(물)나 해로운 공업용 접착제가 단 한 방울도 들어가지 않습니다. 가장 안전한 방식인 점성이 높은 '천연 액상 왁스'만을 유일한 친환경 촉매제로 삼아, 바짝 마른 폐커피박과 굴 껍데기 분말을 단단히 뭉치고 굳히는 무잔여물 무가압 성형 방식을 도입하여 환경 오염 부담을 원천부터 완벽히 차단했습니다.
      </p>

      <div className="hwp-table-title">{'<'}제품 생산 고도화 전략 및 완전 자연 환원 순환 경제(Circular Economy) 궤도표{'>'}</div>
      <table className="hwp-table" style={{ marginBottom: '40px', color: '#000' }}>
        <thead>
          <tr>
            <th style={{ width: '25%', textAlign: 'center', color: '#000', borderRight: '1px solid #000' }}>고도화 단계</th>
            <th style={{ width: '75%', textAlign: 'center', color: '#000' }}>상세 방법 가이드 및 시너지 효과치</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ textAlign: 'center', fontWeight: 'bold' }}>[Phase 1]<br/>이종 폐기물 결합을 통한<br/>화학적 강력 듀얼 시너지 창출</td>
            <td style={{ padding: '12px', lineHeight: '1.6' }}>폐커피박(커피 찌꺼기)은 기본적으로 화력이 매우 뛰어나고 은은한 향이 좋다는 강력한 장점이 있지만, 100% 단독 원료로 연소시킬 경우 높은 탄소 기반 특성상 이산화탄소와 매운 연기가 다량으로 뿜어져 나옵니다. 바로 이 단점에 착안하여 앞서 가공된 굴 껍데기 '생석회 가루'를 2대 1의 황금 비율로 혼합하여 굳히면, 커피박이 연소하며 내뿜는 독성 배기가스를 굴 껍데기의 강알칼리 필터가 곧바로 중화 억제해 주는 기가 막힌 상호 보완 화학적 시너지가 일어납니다. 이는 원료비 0원의 가장 지속가능한 에너지 융합 공법으로 완성됩니다.</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center', fontWeight: 'bold' }}>[Phase 2]<br/>연소 후 다 타고 남은 재를 천연 비료로<br/>재사용하는 궁극적 100% 완전 자연 환원</td>
            <td style={{ padding: '12px', lineHeight: '1.6' }}>야외 바비큐장에서 고기를 굽고 텐트 옆 화로에서 장시간 다 타고 남은 하얀 뼛가루 같은 재 블록들은 여타 숯 쓰레기처럼 따로 종량제 쓰레기봉투에 분리수거해서 골치 아프게 털어 버릴 필요가 전혀 없습니다. 텐트 철수 시 캠핑장 바닥 흙 땅바닥 텃밭에 훌훌 털어 그대로 거름처럼 섞어 뿌려도 아무런 법적 문제가 없습니다. 연소 직후의 해당 성분은 농촌진흥청에서 수십 년간 병들고 산성화된 토양을 원상 복구하기 위해 국가 지원금까지 살뜰히 챙겨주며 파종을 적극 권장하는 '천연 패화석(석회질) 토양개량 비료'의 화학적 성분과 소수점 아래까지 정확히 일치하여 거짓말처럼 100% 흙으로 되돌아가 자연과 선순환을 이룹니다.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
