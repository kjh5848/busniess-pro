import React from 'react';
import '../index.css';

export default function FundExecutionPlanV2() {
  return (
    <div className="hwp-section">
      <h2 className="hwp-section-title">3-3. 사업 추진 일정 및 자금 운용 계획</h2>
      
      {/* 3-3-1 사업 전체 로드맵 */}
      <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#000', margin: '20px 0 10px 0' }}>3-3-1. 사업 전체 스케일업 로드맵</h3>
      <div className="hwp-instruction-box">
        ※ 3-3-1. 전체 시간선에서 추진하고자 하는 종합적인 목표 기재
      </div>
      
      <div style={{ borderLeft: '4px solid #333', paddingLeft: '14px', marginBottom: '20px' }}>
        <p style={{ fontWeight: 'bold', margin: '0', fontSize: '16px', color: '#000', lineHeight: '1.4' }}>
          "안정적인 시제품 생산 테스트베드를 조속히 극복하고, 곧바로 자사 대형 웹 비전과 결합하여 전국 B2B 인프라 포트폴리오를 다각화합니다."
        </p>
      </div>

      <div className="hwp-table-title">{'<'}기간별 전사적 사업 성장 추진 마일스톤{'>'}</div>
      <table className="hwp-table" style={{ marginBottom: '40px', color: '#000' }}>
        <thead>
          <tr>
            <th style={{ width: '20%', textAlign: 'center', borderRight: '1px solid #000', color: '#000' }}>발전 궤도</th>
            <th style={{ width: '80%', textAlign: 'center', color: '#000' }}>구체적 액션 플랜 및 달성 산출물</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ textAlign: 'center', fontWeight: 'bold' }}>1단계<br/>(초기 6개월)</td>
            <td style={{ padding: '12px' }}>통영 현지 협력 생산 공장과의 독점 원료 공급 MOU 체결을 확고히 마무리하고 수율이 안정화된 시제품 생산 라인을 첫 가동합니다. 이후 2억 원 목표의 크라우드 펀딩을 오픈하여 코어 타겟의 지갑이 실제 얼마나 열리는지 냉정한 시장 첫 반응을 검증합니다.</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center', fontWeight: 'bold' }}>2단계<br/>(6~12개월)</td>
            <td style={{ padding: '12px' }}>킨텍스 대형 캠핑 페어 등 핵심 오프라인 부스에 파격적인 사이즈로 릴레이 참가합니다. 이와 시기를 맞추어 감각적인 자사몰을 동시 런칭하고, 전국 대형 프리미엄 글램핑 커뮤니티 관리자를 상대로 대대적인 B2B 연간 계약 영업에 드라이브를 강하게 겁니다.</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center', fontWeight: 'bold' }}>3단계<br/>(안정 성장기)</td>
            <td style={{ padding: '12px' }}>소규모 일반 캠핑 기어용 B2C 라인업 외에도, 압도적인 소성 화력을 무기로 농촌 내 비닐하우스 난방 장작이나, 거대 제철소 굴뚝 산업 스모그 탈황제 등 B2B 중장비 인더스트리 유통망으로 초격차 포트폴리오를 대폭 다각화시켜 나갑니다.</td>
          </tr>
        </tbody>
      </table>

      {/* 3-3-2~3 협약기간 내 목표 및 조달계획 */}
      <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#000', margin: '30px 0 10px 0' }}>3-3-2 및 3-3-3. 협약 기간 내 세부 자금 소요 조달 및 운영 계획</h3>
      <div className="hwp-instruction-box">
        ※ 금번 정부지원사업 자금(7,000만 원 선 예상액)의 투입 배분율 및 실질적 자금 조달 운용 기재
      </div>
      
      <div style={{ borderLeft: '4px solid #333', paddingLeft: '14px', marginBottom: '20px' }}>
        <p style={{ fontWeight: 'bold', margin: '0', fontSize: '16px', color: '#000', lineHeight: '1.4' }}>
          "정부지원금 7,000만 원은 브랜드 전시 공간 모델링과 초기 안정적인 D2C 커머스 채널을 파내려 가는 마케팅에 전액 집중 타격하여 투입 ROI를 극대화시킵니다."
        </p>
      </div>

      <p style={{ fontSize: '15.5px', lineHeight: '1.6', marginBottom: '20px', color: '#000', wordBreak: 'keep-all' }}>
        이번 창업 지원 과정을 통해 배정받게 될 총사업비 규모는 대략 기준 1억 원 내외로 설정하여 구조화했습니다.<br/>
        이 중 <strong>정부지원금 타겟액은 7천만 원 수준(70%)</strong>으로, <strong>창업 기업은 이와 짝을 맞추기 위해 보유 자본 등에서 현금 1,000만 원(10%)과 기존의 사무공간, 대표자 미지급 급여 책정 분을 통한 현물 2,000만 원(20%)의 대응 자금을 스스로 의무 매칭</strong>하여 프로젝트 운영의 자기 진정성과 재무 탄력성을 당당히 입증합니다.
      </p>

      {/* 3-3-4 사업비 집행 계획 */}
      <div className="hwp-table-title">{'<'}총 사업비 1억 원 기준 5대 비목별 투자 집행 예산안 세부 배역표{'>'}</div>
      <table className="hwp-table" style={{ marginBottom: '30px', fontSize: '14px', color: '#000' }}>
        <thead>
          <tr>
            <th style={{ width: '20%', textAlign: 'center', color: '#000', borderRight: '1px solid #000' }}>집행 비목류 (비중)</th>
            <th style={{ width: '55%', textAlign: 'center', color: '#000', borderRight: '1px solid #000' }}>비목별 세부 구체적 운용/고용 액션 사유서</th>
            <th style={{ textAlign: 'center', color: '#000' }}>총 투입 합계</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ textAlign: 'center', fontWeight: 'bold', borderRight: '1px solid #000' }}>인건비 (24%)</td>
            <td style={{ paddingLeft: '10px', lineHeight: '1.5', borderRight: '1px solid #000' }}>현물 처리된 책임 대표자가 제품 본질 기획 설계와 굴껍데기 소성 라인 안정화에만 주야로 집중할 수 있도록, 오직 B2B 계약 납품 뚫기와 온라인 인바운드 마케팅 방어에만 집중할 수 있는 A급 실무 퍼포먼스 마케터 1명을 신규 풀타임 채용하는 데 투자합니다.</td>
            <td style={{ textAlign: 'right', paddingRight: '10px', fontWeight: 'bold' }}>17,000,000원<br/>(+현출 2천만 제외)</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center', fontWeight: 'bold', borderRight: '1px solid #000' }}>외주용역비 (31%)</td>
            <td style={{ paddingLeft: '10px', lineHeight: '1.5', borderRight: '1px solid #000' }}>디자인이 투박한 기존 제품들과 격을 두기 위해 소비자의 스크롤을 멈춰 세울 파격적이고 감각적인 UI/UX 기반 D2C 자사 독립 어플리케이션을 제작하며, 하반기 메가 킨텍스 캠핑 박람회 등에서 VVIP 대우를 받을 수 있는 전용 브랜드 오프라인 특별 전시 부스 인테리를 목공 설계하는 데 메인 펀드를 지출합니다.</td>
            <td style={{ textAlign: 'right', paddingRight: '10px', fontWeight: 'bold' }}>22,000,000원</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center', fontWeight: 'bold', borderRight: '1px solid #000' }}>재료 매입비 (23%)</td>
            <td style={{ paddingLeft: '10px', lineHeight: '1.5', borderRight: '1px solid #000' }}>상용화 배포 전 1차 대량 제조 실증을 위한 통영 내 수산 공장의 소성 생석회 분말 트럭톤과, 특수 천연 왁스 원료조, 그리고 제품의 친환경 감성을 100% 돋보이게 담아줄 자연 그대로 썩어 없어지는 100% 생분해성 재생 크라프트 포장 패키징 단상자 물류를 대량 매입합니다.</td>
            <td style={{ textAlign: 'right', paddingRight: '10px', fontWeight: 'bold' }}>16,000,000원</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center', fontWeight: 'bold', borderRight: '1px solid #000' }}>광고선전비 (14%)</td>
            <td style={{ paddingLeft: '10px', lineHeight: '1.5', borderRight: '1px solid #000' }}>핵심 수요층인 '어린아이가 있는 안심 캠퍼' 고객들을 모바일상에서 섬세하게 겨냥하여 타겟팅 SNS 스폰서드 스크린 광고 머신을 돌립니다. 또한 구독률이 검증된 인기 캠핑 유튜브 채널들과 솔직한 직접 필드테스트 리뷰 영상 협업비를 편성하여 브랜드 신뢰도를 단기에 견인합니다.</td>
            <td style={{ textAlign: 'right', paddingRight: '10px', fontWeight: 'bold' }}>10,000,000원</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center', fontWeight: 'bold', borderRight: '1px solid #000' }}>지급수수료 (8%)</td>
            <td style={{ paddingLeft: '10px', lineHeight: '1.5', borderRight: '1px solid #000' }}>하반기 모든 오프라인 박람회 및 페어 B2B 연합 부스 사전 기본 계약 침가비를 조기 납부하고, 미래 유사품 복제 방어를 위한 브랜드명 상표권 법률 특허 출원 수수료, 그리고 제품의 핵심인 100% 인체 무해성 절대 입증을 위한 국가공인 안전 시험 성적(KCL, KTR) 발급 관납료 제반 실비로 운용합니다.</td>
            <td style={{ textAlign: 'right', paddingRight: '10px', fontWeight: 'bold' }}>5,000,000원</td>
          </tr>
        </tbody>
        <tfoot>
          <tr style={{ background: '#f8f9fa' }}>
            <td colSpan="2" style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '14px', borderTop: '2px solid #000', borderRight: '1px solid #000' }}>실 투입 조달금 (정부지원금 7천만 + 자체대응 현금 1천만) 누적 총합계 액 (단위: 원)</td>
            <td style={{ textAlign: 'right', paddingRight: '10px', fontWeight: 'bold', fontSize: '14px', borderTop: '2px solid #000' }}>80,000,000원</td>
          </tr>
        </tfoot>
      </table>

    </div>
  );
}
