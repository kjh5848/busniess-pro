import React from 'react';
import '../index.css';

export default function FundExecutionPlanV1() {
  return (
    <div className="hwp-section">
      <h2 className="hwp-section-title">3-3. 사업 추진 일정 및 자금 운용 계획</h2>
      
      {/* 3-3-1 사업 전체 로드맵 */}
      <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#000', margin: '20px 0 10px 0' }}>3-3-1. 사업 전체 로드맵</h3>
      <div className="hwp-instruction-box">
        ※ 전체 사업단계에서 추진하고자 하는 종합적인 목표 및 추진 일정 등 기재
      </div>
      <p style={{ fontSize: '15.5px', color: '#111', lineHeight: '1.6', marginBottom: '15px', letterSpacing: '-0.3px', wordBreak: 'keep-all' }}>
        본 사업의 <strong>최종 목표는 통영 굴껍데기를 업사이클링한 고효율 친환경 착화재를 시작으로, 100% 자연 유래 소재의 '캠핑 기어 토탈 브랜드'를 구축</strong>하는 것입니다.<br />
        초기에는 착화재 단일 품목으로 와디즈 크라우드 펀딩을 진행하여 브랜드 인지도와 얼리어답터 팬덤을 우선 확보합니다. 이후 캠핑장 등 단위 B2B 납품으로 수익성을 극대화하며, 장기적으로는 버섯 폐배지를 결합한 프리미엄 참나무 훈제향 장작 및 굴패각 신소재 특화 캠핑 도구 라인업으로 확장해 친환경 시장 내 점유율을 견고히 다질 계획입니다.
      </p>

      {/* 전체 사업단계 표 */}
      <div className="hwp-table-title">{'<'}사업 추진 일정(전체 사업단계){'>'}</div>
      <table className="hwp-table" style={{ marginBottom: '40px' }}>
        <thead>
          <tr>
            <th style={{ width: '8%', textAlign: 'center' }}>순번</th>
            <th style={{ width: '25%', textAlign: 'center' }}>추진 내용</th>
            <th style={{ width: '25%', textAlign: 'center' }}>추진 기간</th>
            <th style={{ width: '42%', textAlign: 'center' }}>세부 내용</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ textAlign: 'center' }}>1</td>
            <td style={{ textAlign: 'center' }}>R&amp;D 및 설계가설 인프라</td>
            <td style={{ textAlign: 'center' }}>'26. 상반기</td>
            <td>통영 소성로 업체 연계 및 핫멜트 왁스 20% 마지노선 배합비 설계도안 구축</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }}>2</td>
            <td style={{ textAlign: 'center' }}>시험성적 획득 및 양산</td>
            <td style={{ textAlign: 'center' }}>'26. 05. ~ '26. 12.</td>
            <td>국가 공인 기관(KTR, KCL) 의뢰 성형탄 유해물질 불검출 인증 및 시제품 완성</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }}>3</td>
            <td style={{ textAlign: 'center' }}>자사몰 구축 및 B2B 진입</td>
            <td style={{ textAlign: 'center' }}>'27. 상반기</td>
            <td>초기 타겟팅 브랜드 자사몰 런칭 및 전국 단위 글램핑장 대형 납품 판로 확충</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }}>4</td>
            <td style={{ textAlign: 'center' }}>포트폴리오 다각화</td>
            <td style={{ textAlign: 'center' }}>'27. 하반기</td>
            <td>참나무 훈향 장작 및 굴패각 신소재 활용 특화 캠핑 기어 라인업 확장 출시</td>
          </tr>
        </tbody>
      </table>

      {/* 3-3-2 협약기간 내 목표 */}
      <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#000', margin: '40px 0 10px 0' }}>3-3-2. 협약기간(26년 5월 ~ 12월) 내 목표 및 달성 방안</h3>
      <div className="hwp-instruction-box">
        ※ 제품·서비스의 개발/개선/구체화를 위해 협약 기간 내 추진하려는 달성 가능한 목표 및 상세 추진 일정 등을 기재<br/>
        ※ [2-2. 창업아이템 실현 및 구체화 방안]의 단기(협약 기간 내) 산출물에 부합하게 작성
      </div>
      <p style={{ fontSize: '15.5px', color: '#111', lineHeight: '1.6', marginBottom: '15px', letterSpacing: '-0.3px', wordBreak: 'keep-all' }}>
        본 협약 기간 내 최우선 핵심 목표는 <strong>'프리미엄 굴패각 착화재의 시제품 양산 완료 및 국가공인(KTR/KCL 등) 품질·안전성 인증 획득'</strong>입니다.<br/>
        정부지원금을 활용하여 연소 효율을 극대화하고 이취(냄새)/매연을 저감할 수 있는 최적 배합비를 도출하여 성형탄 규격 합격 성적서를 확보합니다. 협약 종료 전까지 양산 테스트 및 브랜드 패키징 디자인을 완료하여, 즉각적으로 시장에 대응하고 초기 매출 실적을 확보할 수 있는 완벽한 상용화 준비를 마칩니다.
      </p>

      {/* 협약기간 내 표 */}
      <div className="hwp-table-title">{'<'}사업 추진 일정(협약기간 내){'>'}</div>
      <table className="hwp-table" style={{ marginBottom: '40px' }}>
        <thead>
          <tr>
            <th style={{ width: '8%', textAlign: 'center' }}>순번</th>
            <th style={{ width: '25%', textAlign: 'center' }}>추진 내용</th>
            <th style={{ width: '25%', textAlign: 'center' }}>추진 기간</th>
            <th style={{ width: '42%', textAlign: 'center' }}>세부 내용</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ textAlign: 'center' }}>1</td>
            <td style={{ textAlign: 'center' }}>핵심 원자재 프로토콜 확립</td>
            <td style={{ textAlign: 'center' }}>'26. 05. ~ 07.</td>
            <td>통영산 수산폐기물 소성 처리 파우더 수급 체계화 및 배합 테스트 기기 도입</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }}>2</td>
            <td style={{ textAlign: 'center' }}>산림청 지정 품질심사 통과</td>
            <td style={{ textAlign: 'center' }}>'26. 08. ~ 09.</td>
            <td>VOCs 산성 가스 흡착 현상 검증 및 캠핑용 착화재 적합 안전 검사 공문 회신</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }}>3</td>
            <td style={{ textAlign: 'center' }}>베타 시제품 1세트 타각</td>
            <td style={{ textAlign: 'center' }}>'26. 10. ~ 11.</td>
            <td>시각적 패키징을 포함한 완전한 형태의 단기 산출물 제조 및 박람회 부스 출품</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }}>4</td>
            <td style={{ textAlign: 'center' }}>IP 보호 및 최종 보고 정산</td>
            <td style={{ textAlign: 'center' }}>협약기간 말 (12월)</td>
            <td>결과물 상표권(상표, 무연 숯) 심사 등록 및 1억 예산 회계 법인 매칭 정산</td>
          </tr>
        </tbody>
      </table>

      {/* 3-3-3 조달 계획 */}
      <h3 className="hwp-subsection-title">3-3-3. 자금 소요 및 조달 계획</h3>
      <div className="hwp-instruction-box">
        ※ 본 지원사업 사업비 외 시장 진입/확장, 매출 실현 등 사업화 성과 확대 등을 위한 자금 조달의 필요성, '추가자본금(Seed, 시리즈A, 시리즈B 등의 투자유치)' 조달계획 및 방안 등을 기재
      </div>
      <p style={{ fontSize: '15.5px', lineHeight: '1.7', marginBottom: '40px', padding: '0 10px' }}>
        본 지원사업의 <strong>초기 지원금(1억 원 예상)은 아이템의 치명타인 유해성 리스크를 원천 불식시키는 성적서 획득과, 얼리어답터 확보를 위한 시각적 브랜드(패키징, Web) 고도화 등 가장 투입 가치가 높은 &lt;Value Creating&gt; 항목에 전액 집중 편성</strong>하였습니다.
        초기 설비를 무겁게 지고 가는 리스크를 통영 협력사를 통해 상쇄한 만큼, 시장 안착률이 극대화됩니다.<br/><br/>
        이후 스케일업 및 폭주하는 B2B 계약에 맞춘 자체 재고 보관 창고 보증금 및 금형 다각화 기기 편입을 위해 27년 당기 <strong>Pre-A 라운드 후속 투자(약 3억 원)</strong>를 벤처캐피탈(VC) 네트워킹을 통해 Series로 이어갈 계획입니다.
      </p>

      {/* 3-3-4 사업비 집행 계획 */}
      <h3 className="hwp-subsection-title">3-3-4. 사업비 집행 계획</h3>
      <div className="hwp-instruction-box" style={{ marginBottom: '20px' }}>
        ※ 자금 필요성, 금액 적정성 여부를 판단할 수 있도록 사업비(정부지원사업비+자기부담사업비) 집행 계획 기재<br/>
        ※ 창업기업(7년 이내)/창업중심대학 기업 기준, 총 사업비 내 <strong>대응자금(현금 10% / 현물 20%)</strong> 편성 의무 규정 준수
      </div>

      <div style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '10px' }}>&lt; 사업비 집행 계획 (창업기업 필수 현물 비율 반영) &gt;</div>
      <table className="hwp-table" style={{ marginBottom: '30px', fontSize: '14px' }}>
        <thead>
          <tr>
            <th rowSpan="2" style={{ width: '13%', textAlign: 'center' }}>비목</th>
            <th rowSpan="2" style={{ width: '37%', textAlign: 'center' }}>집행 계획</th>
            <th colSpan="4" style={{ textAlign: 'center' }}>재원 구성(원)</th>
          </tr>
          <tr>
            <th style={{ textAlign: 'center', width: '14%' }}>정부지원금<br/>(약 77%)</th>
            <th style={{ textAlign: 'center', width: '12%' }}>대응자금 현금<br/>(약 8%)</th>
            <th style={{ textAlign: 'center', width: '12%' }}>대응자금 현물<br/>(15% 이상)</th>
            <th style={{ textAlign: 'center', width: '12%' }}>합계<br/>(100%)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ textAlign: 'center', fontWeight: 'bold' }}>외주용역비</td>
            <td style={{ paddingLeft: '8px' }}>D2C 자사몰 커머스 고도화 및<br/>캠핑 페어 오프라인 박람회 시각물 디자인</td>
            <td style={{ textAlign: 'right', paddingRight: '6px' }}>31,000,000</td>
            <td style={{ textAlign: 'center', color: '#999' }}>-</td>
            <td style={{ textAlign: 'center', color: '#999' }}>-</td>
            <td style={{ textAlign: 'right', paddingRight: '6px' }}>31,000,000</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center', fontWeight: 'bold' }}>인건비</td>
            <td style={{ paddingLeft: '8px', lineHeight: '1.4' }}>[정부] 퍼포먼스 마케팅 전문 인력(1인) 육성<br/>[현물] 대표자 및 주요 임직원 인건비 매칭</td>
            <td style={{ textAlign: 'right', paddingRight: '6px' }}>24,000,000</td>
            <td style={{ textAlign: 'center', color: '#999' }}>-</td>
            <td style={{ textAlign: 'right', paddingRight: '6px', color: '#16a34a', fontWeight: 'bold' }}>20,000,000</td>
            <td style={{ textAlign: 'right', paddingRight: '6px' }}>44,000,000</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center', fontWeight: 'bold' }}>재료비</td>
            <td style={{ paddingLeft: '8px', lineHeight: '1.4' }}>소성 굴패각 분말, 고점도 식물성 왁스<br/>[현금] 생분해 재생 크라프트지 패키징 지류</td>
            <td style={{ textAlign: 'right', paddingRight: '6px' }}>17,000,000</td>
            <td style={{ textAlign: 'right', paddingRight: '6px', color: '#2563eb', fontWeight: 'bold' }}>10,000,000</td>
            <td style={{ textAlign: 'center', color: '#999' }}>-</td>
            <td style={{ textAlign: 'right', paddingRight: '6px' }}>27,000,000</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center', fontWeight: 'bold' }}>광고선전비</td>
            <td style={{ paddingLeft: '8px' }}>아웃도어/캠핑 특화 유명 유튜버 제휴 광고<br/>및 인스타그램 스폰서드 스케일업 광고</td>
            <td style={{ textAlign: 'right', paddingRight: '6px' }}>14,000,000</td>
            <td style={{ textAlign: 'center', color: '#999' }}>-</td>
            <td style={{ textAlign: 'center', color: '#999' }}>-</td>
            <td style={{ textAlign: 'right', paddingRight: '6px' }}>14,000,000</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center', fontWeight: 'bold' }}>지급수수료</td>
            <td style={{ paddingLeft: '8px' }}>성형탄(착화재) 규격·품질기준 적합 심사비용<br/>및 특허/상표권 출원 변리사 대납</td>
            <td style={{ textAlign: 'right', paddingRight: '6px' }}>14,000,000</td>
            <td style={{ textAlign: 'center', color: '#999' }}>-</td>
            <td style={{ textAlign: 'center', color: '#999' }}>-</td>
            <td style={{ textAlign: 'right', paddingRight: '6px' }}>14,000,000</td>
          </tr>
        </tbody>
        <tfoot>
          <tr style={{ background: '#f8f9fa' }}>
            <td colSpan="2" style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '14px' }}>총 지원+자부담 누적 합계 금액</td>
            <td style={{ textAlign: 'right', paddingRight: '6px', fontWeight: 'bold', color: '#b91c1c' }}>100,000,000</td>
            <td style={{ textAlign: 'right', paddingRight: '6px', fontWeight: 'bold', color: '#2563eb' }}>10,000,000</td>
            <td style={{ textAlign: 'right', paddingRight: '6px', fontWeight: 'bold', color: '#16a34a' }}>20,000,000</td>
            <td style={{ textAlign: 'right', paddingRight: '6px', fontWeight: 'bold' }}>130,000,000</td>
          </tr>
        </tfoot>
      </table>

    </div>
  );
}
