import React from 'react';
import '../index.css';

export default function FundExecutionPlanV3() {
  return (
    <div className="hwp-section">
      <h2 className="hwp-section-title">3-3. 사업 추진 일정 및 정부지원금 자금 운용계획</h2>
      <div className="hwp-instruction-box">
        ※ 정부 정책 지원 협약 기간 내 세부 추진 일정 및 정부 자금+대응 자금 투입 계획표 기재
      </div>

      <div style={{ borderLeft: '4px solid #333', paddingLeft: '14px', marginBottom: '24px' }}>
        <p style={{ fontWeight: 'bold', margin: '0', fontSize: '15.5px', color: '#000', lineHeight: '1.4' }}>
          "당해 협약 총 사업비의 55%를 KCL 무검출 입증용 특수 금형 양산 제작에 최우선 순위로 투입하고, 잔여 재원은 원천 특허 방어 및 크라우드 펀딩 퍼포먼스 마케팅에 효율적으로 집중 배분함"
        </p>
      </div>

      <p style={{ fontSize: '15.5px', color: '#000', fontWeight: 'bold', marginBottom: '8px' }}>가. 전체 자생 모델 단계 및 협약 기간 내(당해 연도) 주요 KPI 로드맵</p>
      <ul style={{ listStyleType: "'ㅇ '", paddingLeft: '20px', fontSize: '14.5px', color: '#000', lineHeight: '1.6', marginBottom: '24px', letterSpacing: '-0.3px', wordBreak: 'keep-all' }}>
        <li style={{ marginBottom: '8px' }}><strong>(1분기: 인프라제휴/금형설계)</strong> 통영시 수산자원화 공공 시설 대상 핵심 원재료(폐굴껍데기 분말) 무상/최저가 수급 MOU 협약 인프라 완비 및 고밀도 무가압 성형 압축 금형 1차 프레스 기본 도면 설계안 개발 완료 반영</li>
        <li style={{ marginBottom: '8px' }}><strong>(2분기: 시제품검증/국가인증)</strong> 1차 현장 작동 테스트용 시제품(MVP) 연소 테스트 완료 및 자가 내부 평가 검증. 국가공인 시험연구원 KCL 유해 물질(메탄올 등 발암 화학물) 100% 무검출 공식 시험 성적서 결과 합격판정 최종 확보 통과</li>
        <li style={{ marginBottom: '8px' }}><strong>(3분기: IP특허보호/양산발주)</strong> 당사 원천 고유 공법 관련 핵심 결합 비율 기술 특허 2건 전격 동시 출원 처리, 친환경 재활용 펄프 패키징 단가 밴더사 협상 타결 확정 및 와디즈 크라우드 펀딩 리워드 납품용 초도 양산 물량 3천만 원 외주 발주</li>
        <li><strong>(4분기: 시장고속진입/수주매출)</strong> 와디즈 크라우드 펀딩의 압도적인 성공적 리워드 발송 초과 창출 및 직영 자사 B2C몰 정식 론칭 세팅 완료. 전국 주요 대형 글램핑장 단체(협회) 단위와의 연간 단위 B2B 박스 정기 납품 1차 수주 계약 전격 달성</li>
      </ul>

      <p style={{ fontSize: '15.5px', color: '#000', fontWeight: 'bold', marginBottom: '8px' }}>나. 창업기업 전용 협약/대응 자금 투명 집행 계획 요약표 (예비창업비)</p>
      <table className="hwp-table" style={{ marginBottom: '10px', color: '#000', fontSize: '13.5px' }}>
        <thead>
          <tr>
            <th style={{ width: '15%', textAlign: 'center', backgroundColor: '#e5e5e5', color: '#000', borderRight: '1px solid #000', fontWeight: 'bold' }}>세목 분류코드</th>
            <th style={{ width: '50%', textAlign: 'center', backgroundColor: '#e5e5e5', color: '#000', borderRight: '1px solid #000', fontWeight: 'bold' }}>집행 세부 사유서 및 과제 산출 근거 내역서 (개조식/명사형)</th>
            <th style={{ width: '15%', textAlign: 'center', backgroundColor: '#e5e5e5', color: '#000', borderRight: '1px solid #000', fontWeight: 'bold' }}>총 소요 예산금액 (원)</th>
            <th style={{ width: '20%', textAlign: 'center', backgroundColor: '#e5e5e5', color: '#000', fontWeight: 'bold' }}>자본 재원 조달 출처</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ textAlign: 'center', fontWeight: 'bold', borderRight: '1px solid #000' }}>외주용역비<br/><span style={{ fontSize: '11px', fontWeight: 'normal' }}>(시제품 제작용)</span></td>
            <td style={{ padding: '12px', lineHeight: '1.6', borderRight: '1px solid #000' }}>
              - 초고밀도 무가압 블록 전용 성형 <strong>프레스 특수 금형 및 메탈 노즐 부분 상세 도면 3D 설계 외주 제작</strong> 발주 진행<br/>
              - 시제품 최적의 양산 배합 단가 역산 측정용 목업(Mockup) 지그 및 거푸집 모델링 제작 용역 일체 포함
            </td>
            <td style={{ textAlign: 'right', fontWeight: 'bold', borderRight: '1px solid #000', paddingRight: '10px' }}>25,000,000</td>
            <td style={{ textAlign: 'center' }}>정부지원금 (100%)</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center', fontWeight: 'bold', borderRight: '1px solid #000' }}>지급수수료<br/><span style={{ fontSize: '11px', fontWeight: 'normal' }}>(인증 및 특허)</span></td>
            <td style={{ padding: '12px', lineHeight: '1.6', borderRight: '1px solid #000' }}>
              - 시제품 대상 KCL 연소 유해 물질(메탄올, 비소 등) <strong>단 1% 무검출 국가공인 공인 성적 시험 정밀 분석 검사비</strong><br/>
              - 굴패각-폐커피박 이종 폐기물 혼합 최적 결합비율 <strong>국내 특허(IP) 출원/등록</strong> 관납료 및 변리사 선임 대리인 수수료 비용
            </td>
            <td style={{ textAlign: 'right', fontWeight: 'bold', borderRight: '1px solid #000', paddingRight: '10px' }}>7,000,000</td>
            <td style={{ textAlign: 'center' }}>정부지원금 (100%)</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center', fontWeight: 'bold', borderRight: '1px solid #000' }}>광고선전비<br/><span style={{ fontSize: '11px', fontWeight: 'normal' }}>(시장초기마케팅)</span></td>
            <td style={{ padding: '12px', lineHeight: '1.6', borderRight: '1px solid #000' }}>
              - 와디즈 초동 크라우드 펀딩을 위한 제품 연출 실사 <strong>고도화 상세페이지/GIF 홍보 영상 촬영 및 렌더링 제작 기획 단가</strong><br/>
              - 주력 구매층 오토 캠퍼 타겟 인스타/메타(Meta) 플랫폼 SNS <strong>퍼포먼스 타겟팅 광고 트래픽 매체 소진비</strong> 전액 집행
            </td>
            <td style={{ textAlign: 'right', fontWeight: 'bold', borderRight: '1px solid #000', paddingRight: '10px' }}>10,000,000</td>
            <td style={{ textAlign: 'center' }}>정부지원금 (100%)</td>
          </tr>
          {/* 대응 자금 (현금 / 현물 비율 준수) */}
          <tr style={{ backgroundColor: '#f9f9f9', borderTop: '2px solid #333' }}>
            <td style={{ textAlign: 'center', fontWeight: 'bold', borderRight: '1px solid #000' }}>인건비<br/><span style={{ fontSize: '11px', fontWeight: 'normal' }}>(창업자/참여인력급여)</span></td>
            <td style={{ padding: '12px', lineHeight: '1.6', borderRight: '1px solid #000' }}>
              - [대응자금 필수 충족/현물] 대표자(또는 창업팀 내부 1인) 본인의 사업 총괄 리드 참여 순수 인건비 기조 정부 지침 산정 결과치 (협약 기간 총 8개월분 기산)
            </td>
            <td style={{ textAlign: 'right', fontWeight: 'bold', borderRight: '1px solid #000', paddingRight: '10px', color: '#555' }}>9,000,000</td>
            <td style={{ textAlign: 'center', fontWeight: 'bold', color: '#555' }}>창업기업 본인부담<br/>(현물 100% 한정)</td>
          </tr>
          <tr style={{ backgroundColor: '#f9f9f9' }}>
            <td style={{ textAlign: 'center', fontWeight: 'bold', borderRight: '1px solid #000' }}>재료비<br/><span style={{ fontSize: '11px', fontWeight: 'normal' }}>(기초 R&D 물품용)</span></td>
            <td style={{ padding: '12px', lineHeight: '1.6', borderRight: '1px solid #000' }}>
              - [대응자금 현금 투입/현금액] 외부 유입 폐커피박 수분 제거 탈수기용 추가 부품 및 성형 점도 조절용 고순도 <strong>천연 액상 왁스 매입 시약비</strong> 자체 현금 계좌 전액 부담 즉시 집행
            </td>
            <td style={{ textAlign: 'right', fontWeight: 'bold', borderRight: '1px solid #000', paddingRight: '10px', color: '#555' }}>3,000,000</td>
            <td style={{ textAlign: 'center', fontWeight: 'bold', color: '#555' }}>창업기업 본인부담<br/>(현금 100% 매칭)</td>
          </tr>
        </tbody>
      </table>
      <div style={{ fontSize: '12.5px', color: '#555', textAlign: 'right', marginTop: '10px', marginBottom: '30px', fontWeight: 'bold' }}>
        * 전체 프로젝트 총 사업비 54,000,000원 = 정부지원금 42,000,000원 + 창업기업 본인부담금 12,000,000원 (현물 20% + 현금 10% 이상 대응 매칭 안전 기준 법적 충족 검토 완전 달성)
      </div>
    </div>
  );
}
