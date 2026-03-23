import React from 'react';
import '../index.css';

export default function FundExecutionPlanV1() {
  return (
    <div className="hwp-section" style={{ color: '#000' }}>
      <h2 className="hwp-section-title">3-3. 사업 추진 일정 및 자금 운용 계획</h2>
      
      {/* 3-3-1 사업 전체 로드맵 */}
      <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#000', margin: '20px 0 10px 0' }}>3-3-1. 사업 전체 로드맵</h3>
      <div className="hwp-instruction-box">
        ※ 전체 사업단계에서 추진하고자 하는 종합적인 목표 및 추진 일정 등 기재
      </div>
      
      {/* Rule 5: Key Message Quote */}
      <div style={{ borderLeft: '4px solid #333', paddingLeft: '14px', marginBottom: '20px' }}>
        <p style={{ fontWeight: 'bold', margin: '0', fontSize: '16px', color: '#000', lineHeight: '1.4' }}>
          "초기 단계 와디즈 펀딩으로 핵심 타겟층의 실검증을 마치고, 양산 라인 최적화(Cost 절감) 구축을 통해 전국 단위 글램핑장(B2B) 공급망을 독점 선점합니다."
        </p>
      </div>

      <p style={{ fontSize: '15.5px', color: '#000', lineHeight: '1.6', marginBottom: '15px', letterSpacing: '-0.3px', wordBreak: 'keep-all' }}>
        본 사업의 <strong>최종 목표는 유해 물질(VOCs 등)이 전면 차단된 고효율 친환경 착화재를 시작으로, 100% 자연 유래 소재의 '캠핑 기어 토탈 브랜드' 밸류체인을 구축</strong>하는 것입니다.<br />
        초기 단일 품목 런칭 후, 장기적으로는 버섯 폐배지를 결합한 프리미엄 참나무 훈제향 장작 등 굴패각 신소재 특화 라인업으로 확장해 카테고리 킬러 커머스 앱(App/Web)으로 스케일업(Scale-up)할 계획입니다.
      </p>

      {/* 전체 사업단계 표 */}
      <div className="hwp-table-title">{'<'}사업 추진 일정(전체 사업단계){'>'}</div>
      <table className="hwp-table" style={{ marginBottom: '40px', color: '#000' }}>
        <thead>
          <tr>
            <th style={{ width: '8%', textAlign: 'center', borderRight: '1px solid #000', color: '#000' }}>순번</th>
            <th style={{ width: '25%', textAlign: 'center', borderRight: '1px solid #000', color: '#000' }}>추진 내용</th>
            <th style={{ width: '25%', textAlign: 'center', borderRight: '1px solid #000', color: '#000' }}>추진 기간</th>
            <th style={{ width: '42%', textAlign: 'center', color: '#000' }}>세부 내용</th>
          </tr>
        </thead>
        <tbody style={{ color: '#000' }}>
          <tr>
            <td style={{ textAlign: 'center' }}>1</td>
            <td style={{ textAlign: 'center' }}>R&amp;D 및 양산 라인가설</td>
            <td style={{ textAlign: 'center' }}>'26. 상반기</td>
            <td>통영 소성로 설비 업체 연계 및 핫멜트 왁스 최적 배합비율(20%) 도출</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }}>2</td>
            <td style={{ textAlign: 'center' }}>안전성 획득 및 시제품 양산</td>
            <td style={{ textAlign: 'center' }}>'26. 05. ~ '26. 12.</td>
            <td>국가 공인 기관(KTR, KCL 등) 의뢰 유해물질 불검출 검증 확립</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }}>3</td>
            <td style={{ textAlign: 'center' }}>커머스 구축 및 B2B 파이프라인</td>
            <td style={{ textAlign: 'center' }}>'27. 상반기</td>
            <td>D2C 자사몰 런칭 및 전국 단위 글램핑장 단위 수량 연간 계약 타결</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }}>4</td>
            <td style={{ textAlign: 'center' }}>포트폴리오 다각화(Scale-up)</td>
            <td style={{ textAlign: 'center' }}>'27. 하반기</td>
            <td>참나무 훈향 장작 및 굴패각 신소재 활용 특화 캠핑 라인업 풀 구축</td>
          </tr>
        </tbody>
      </table>

      {/* 3-3-2 협약기간 내 목표 */}
      <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#000', margin: '40px 0 10px 0' }}>3-3-2. 협약기간(26년 5월 ~ 12월) 내 목표 및 달성 방안</h3>
      <div className="hwp-instruction-box">
        ※ 제품·서비스의 개발/개선/구체화를 위해 협약 기간 내 추진하려는 달성 가능한 목표 및 상세 추진 일정 등을 기재
      </div>
      <p style={{ fontSize: '15.5px', color: '#000', lineHeight: '1.6', marginBottom: '15px', letterSpacing: '-0.3px', wordBreak: 'keep-all' }}>
        우선 핵심 마일스톤은 <strong>'국가공인(KTR/KCL 등) 물질 안전성 규격 성적서 획득 및 상용 시제품 양산 완료'</strong>입니다. 정부지원금을 레버리지 차원에서 활용하여 제품 규격(이취, 매연, 유해산성 가스 감축) 인프라 신뢰도를 국가 단위 심의로 확정 짓습니다.
      </p>

      {/* 협약기간 내 표 */}
      <div className="hwp-table-title">{'<'}사업 추진 일정(협약기간 내){'>'}</div>
      <table className="hwp-table" style={{ marginBottom: '40px', color: '#000' }}>
        <thead>
          <tr>
            <th style={{ width: '8%', textAlign: 'center', borderRight: '1px solid #000', color: '#000' }}>순번</th>
            <th style={{ width: '25%', textAlign: 'center', borderRight: '1px solid #000', color: '#000' }}>추진 내용</th>
            <th style={{ width: '25%', textAlign: 'center', borderRight: '1px solid #000', color: '#000' }}>추진 기간</th>
            <th style={{ width: '42%', textAlign: 'center', color: '#000' }}>세부 내용</th>
          </tr>
        </thead>
        <tbody style={{ color: '#000' }}>
          <tr>
            <td style={{ textAlign: 'center' }}>1</td>
            <td style={{ textAlign: 'center' }}>자재 SCM(공급망) 확립</td>
            <td style={{ textAlign: 'center' }}>'26. 05. ~ 07.</td>
            <td>소성 처리 파우더 수급 체계망 연동 및 배합 테스트 기기 CapEx 도입</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }}>2</td>
            <td style={{ textAlign: 'center' }}>국가 품질심사 의뢰 및 통과</td>
            <td style={{ textAlign: 'center' }}>'26. 08. ~ 09.</td>
            <td>안전성 공문 회신 및 환경부 유해화학물질 비대상 제품 공식 증명</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }}>3</td>
            <td style={{ textAlign: 'center' }}>M.V.P 1차 세트 완제품 타각</td>
            <td style={{ textAlign: 'center' }}>'26. 10. ~ 11.</td>
            <td>친환경 패키징 적용 상용화 단기 산출물 생산 및 필드 테스트 진행</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }}>4</td>
            <td style={{ textAlign: 'center' }}>IP 권리 보호 및 세무 정산</td>
            <td style={{ textAlign: 'center' }}>협약 말 (12월)</td>
            <td>무연 숯 상표권/특허 출원 등록 심사 및 1억 자정 회계 매칭 정산</td>
          </tr>
        </tbody>
      </table>

      {/* 3-3-3 조달 계획 */}
      <h3 className="hwp-subsection-title">3-3-3. 자금 소요 및 조달 계획</h3>
      <div className="hwp-instruction-box">
        ※ 본 지원사업 사업비 외 시장 진입/확장, 매출 실현 등 사업화 성과 확대 등을 위한 자금 조달의 필요성 기재
      </div>
      
      {/* Rule 5: Key Message Quote */}
      <div style={{ borderLeft: '4px solid #333', paddingLeft: '14px', marginBottom: '20px' }}>
        <p style={{ fontWeight: 'bold', margin: '0', fontSize: '16px', color: '#000', lineHeight: '1.4' }}>
          "지원금 전액은 '제품 신뢰도 증명'과 'B2B/D2C 브랜딩 채널 최적화'에 집중 타격하여 단기 트랙션을 창출하고, 고도화 인프라를 위한 Series Pre-A를 견인합니다."
        </p>
      </div>

      <p style={{ fontSize: '15.5px', lineHeight: '1.7', marginBottom: '40px', padding: '0 10px', color: '#000' }}>
        본 정부지원사업의 극대화된 자본 효율성 확보를 위해, 초기 지원금(1억 원 예상)은 타겟 소비층의 불신을 원천 해소할 수 있는 <strong>가장 투입 ROI가 높은 &lt;제품 안전성(무해성) 실증 검사&gt;와 &lt;얼리어답터 확보용 브랜딩(패키징, Web)&gt; 비목으로 한정하여 전액 집중 편성</strong>하였습니다.<br/><br/>
        막대한 고정비(Burn Rate)를 차지하는 초기 소성로 설비 매입은 일체 배제하고, 이를 통영 현지 협력업체와의 OEM 전략적 제휴 구조로 연계하여 초기 리스크를 최소화합니다. 안정적인 시장 안착 후, 연간 B2B 선단위 공급 계약 체결 직후인 2027년, 설비 내재화 및 자체 창고 인프라 편입을 위해 벤처캐피탈(VC) 네트워킹을 통한 <strong>선제적 Pre-A 라운드 시리즈 후속 투자(약 3억 원 Target)를 유치</strong>하여 시장 장악을 도모합니다.
      </p>

      {/* 3-3-4 사업비 집행 계획 */}
      <h3 className="hwp-subsection-title">3-3-4. 사업비 집행 계획 (Rule 3. 의미 있는 실행 예산)</h3>
      <div className="hwp-instruction-box" style={{ marginBottom: '20px' }}>
        ※ 자금 필요성, 금액 적정성 여부를 판단할 수 있도록 사업비(정부지원사업비+자기부담사업비) 집행 계획 기재<br/>
        ※ 창업기업(7년 이내), 총 사업비 내 <strong>대응자금(현금 10% / 현물 20%)</strong> 편성 의무 규정 준수
      </div>

      <div style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '10px', color: '#000' }}>&lt; 사업비 집행 계획표 (창업기업 대응자금 의무 매칭 시뮬레이션) &gt;</div>
      <table className="hwp-table" style={{ marginBottom: '30px', fontSize: '14px', color: '#000' }}>
        <thead>
          <tr>
            <th rowSpan="2" style={{ width: '13%', textAlign: 'center', color: '#000', borderRight: '1px solid #000' }}>비목</th>
            <th rowSpan="2" style={{ width: '37%', textAlign: 'center', color: '#000', borderRight: '1px solid #000' }}>부문별 투자 배분 목표 (집행 내용)</th>
            <th colSpan="4" style={{ textAlign: 'center', color: '#000' }}>재원 구성(원)</th>
          </tr>
          <tr>
            <th style={{ textAlign: 'center', width: '14%', borderTop: '1px solid #000', borderRight: '1px solid #000', color: '#000' }}>정부지원금<br/>(약 77%)</th>
            <th style={{ textAlign: 'center', width: '12%', borderTop: '1px solid #000', borderRight: '1px solid #000', color: '#000' }}>대응 현금<br/>(자본금 8%)</th>
            <th style={{ textAlign: 'center', width: '12%', borderTop: '1px solid #000', borderRight: '1px solid #000', color: '#000' }}>대응 현물<br/>(기존 자산 15%)</th>
            <th style={{ textAlign: 'center', width: '12%', borderTop: '1px solid #000', color: '#000' }}>총 합계<br/>(100%)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ textAlign: 'center', fontWeight: 'bold' }}>외주용역비</td>
            <td style={{ paddingLeft: '8px' }}>[디지털 전환] D2C 커머스 고도화 및<br/>캠핑 페어 참가를 위한 UI/UX 시각물 설계</td>
            <td style={{ textAlign: 'right', paddingRight: '6px' }}>31,000,000</td>
            <td style={{ textAlign: 'center' }}>-</td>
            <td style={{ textAlign: 'center' }}>-</td>
            <td style={{ textAlign: 'right', paddingRight: '6px' }}>31,000,000</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center', fontWeight: 'bold' }}>인건비</td>
            <td style={{ paddingLeft: '8px', lineHeight: '1.4' }}>[정부조달] 퍼포먼스 마케팅 전담인력(1인) 육성<br/>[현물] 대표자 및 주요 개발진 자부담 인건비 의무 매칭</td>
            <td style={{ textAlign: 'right', paddingRight: '6px' }}>24,000,000</td>
            <td style={{ textAlign: 'center' }}>-</td>
            <td style={{ textAlign: 'right', paddingRight: '6px', fontWeight: 'bold' }}>20,000,000</td>
            <td style={{ textAlign: 'right', paddingRight: '6px' }}>44,000,000</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center', fontWeight: 'bold' }}>재료비</td>
            <td style={{ paddingLeft: '8px', lineHeight: '1.4' }}>[시제품화] 초도 양산용 굴패각 파우더 및 최적화 왁스 수급<br/>[현금] 생분해 재생 크라프트지 패키징 박스 자체 조달</td>
            <td style={{ textAlign: 'right', paddingRight: '6px' }}>17,000,000</td>
            <td style={{ textAlign: 'right', paddingRight: '6px', fontWeight: 'bold' }}>10,000,000</td>
            <td style={{ textAlign: 'center' }}>-</td>
            <td style={{ textAlign: 'right', paddingRight: '6px' }}>27,000,000</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center', fontWeight: 'bold' }}>광고선전비</td>
            <td style={{ paddingLeft: '8px' }}>[스케일업] 구독 전환형 퍼포먼스 리뷰어 제휴<br/>및 타겟(MZ 부모 세대) SNS 스폰서드 마케팅</td>
            <td style={{ textAlign: 'right', paddingRight: '6px' }}>14,000,000</td>
            <td style={{ textAlign: 'center' }}>-</td>
            <td style={{ textAlign: 'center' }}>-</td>
            <td style={{ textAlign: 'right', paddingRight: '6px' }}>14,000,000</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center', fontWeight: 'bold' }}>지급수수료</td>
            <td style={{ paddingLeft: '8px' }}>[IP방어] 핵심 무연탄 적합 국가 심사비 납부<br/>및 브랜드/기술 특허권 출원 변리사 대납 분</td>
            <td style={{ textAlign: 'right', paddingRight: '6px' }}>14,000,000</td>
            <td style={{ textAlign: 'center' }}>-</td>
            <td style={{ textAlign: 'center' }}>-</td>
            <td style={{ textAlign: 'right', paddingRight: '6px' }}>14,000,000</td>
          </tr>
        </tbody>
        <tfoot>
          <tr style={{ background: '#f8f9fa' }}>
            <td colSpan="2" style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '14px', borderTop: '2px solid #000' }}>재원 조달 누적 합계 금액</td>
            <td style={{ textAlign: 'right', paddingRight: '6px', fontWeight: 'bold', borderTop: '2px solid #000' }}>100,000,000</td>
            <td style={{ textAlign: 'right', paddingRight: '6px', fontWeight: 'bold', borderTop: '2px solid #000' }}>10,000,000</td>
            <td style={{ textAlign: 'right', paddingRight: '6px', fontWeight: 'bold', borderTop: '2px solid #000' }}>20,000,000</td>
            <td style={{ textAlign: 'right', paddingRight: '6px', fontWeight: 'bold', borderTop: '2px solid #000' }}>130,000,000</td>
          </tr>
        </tfoot>
      </table>

    </div>
  );
}
