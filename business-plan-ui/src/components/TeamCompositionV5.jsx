import React from 'react';
import '../index.css';

export default function TeamCompositionV5() {
  return (
    <div className="hwp-document-section">
      {/* 4. 조직 구성 (Team) */}
      <div className="hwp-section">
        <h2 className="hwp-section-title">4-1. 조직구성원 보유역량</h2>
        <div className="hwp-instruction-box">
          ※ 4-1. 창업기업 대표자 및 팀원의 보유 역량, 협약 기간 내 신규 고용 및 활용 계획 구체화
        </div>

        <div style={{ borderLeft: '4px solid #333', paddingLeft: '14px', marginBottom: '24px' }}>
          <p style={{ fontWeight: 'bold', margin: '0', fontSize: '15.5px', color: '#000', lineHeight: '1.4' }}>
            "연구실 단위의 논문에만 머물던 '굴껍데기 탈황 기술'을 발굴하여, 철저한 데이터 교차 검증을 거쳐 상업성 높은 캠핑용 에코 융합 소재로 즉시 사업화하는 '실행력 특화 기획 그룹'"
          </p>
        </div>

        <p style={{ fontSize: '15.5px', color: '#000', fontWeight: 'bold', marginBottom: '8px' }}>가. 대표자 및 현 조직 역량 (실행력 중심의 추진력)</p>
        <div style={{ display: 'flex', gap: '20px', marginBottom: '24px', alignItems: 'stretch' }}>
          {/* 대표자 핵심 역량 박스 */}
          <div style={{ flex: '1.2', border: '1px solid #ccc', borderRadius: '4px', background: '#fff' }}>
            <div style={{ background: '#333', color: '#fff', padding: '10px', textAlign: 'center', fontWeight: 'bold', fontSize: '14px' }}>
              대표자 프로필 및 추진 역량
            </div>
            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', height: '100%', gap: '15px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', borderBottom: '1px dashed #e0e0e0', paddingBottom: '15px' }}>
                <div style={{ width: '70px', height: '80px', background: '#eee', border: '1px solid #ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', color: '#999' }}>사진</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#000', marginBottom: '4px' }}>대표이사 / CEO</div>
                  <div style={{ fontSize: '13px', color: '#555', lineHeight: '1.5', wordBreak: 'keep-all' }}>
                    <strong>다년간의 캠핑 경험</strong>을 통해 밀폐된 텐트 속 유독성 착화재의 치명적 한계(Pain-point)를 뼈저리게 체감한 <strong>'진성 캠퍼'</strong>이자, 파편화된 학술 데이터와 시장의 결핍을 결합해 신사업 비즈니스 모델로 전환하는 <strong>'사업화(Commercialization) 기획 전문가'</strong>.
                  </div>
                </div>
              </div>
              <ul style={{ listStyleType: "'- '", paddingLeft: '15px', margin: 0, fontSize: '13.5px', color: '#333', lineHeight: '1.6', wordBreak: 'keep-all' }}>
                <li style={{ marginBottom: '6px' }}><strong>학술 데이터 융합 및 실현 타당성 도출:</strong> 기존 착화재의 유해 가스 데이터와 굴껍데기(생석회)의 배기가스 억제 메커니즘을 분석한 국내외 연구 논문을 직접 교차 검증하여, 최적의 배합비(2:1) 도출 및 기술적 타당성 검증 완료</li>
                <li><strong>오픈 이노베이션 & OEM(위탁생산) 린 매니지먼트:</strong> 직접 대규모 제조 설비를 구축하는 리스크를 배제하고, 향후 사업화 자금을 '즉각적인 매출'과 '브랜드 마케팅'에 집중하는 팹리스(Fabless) 방식의 위탁 생산 체계를 선제적으로 기획함</li>
              </ul>
            </div>
          </div>

          {/* 인력 구조 테이블 */}
          <div style={{ flex: '2', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <table className="hwp-table" style={{ width: '100%', color: '#000', fontSize: '13.5px', textAlign: 'center' }}>
              <thead>
                <tr style={{ backgroundColor: '#e5e5e5', borderTop: '2px solid #000' }}>
                  <th style={{ width: '20%', borderRight: '1px solid #000', padding: '10px', fontWeight: 'bold' }}>성명</th>
                  <th style={{ width: '30%', borderRight: '1px solid #000', padding: '10px', fontWeight: 'bold' }}>직위 (역할)</th>
                  <th style={{ width: '50%', padding: '10px', fontWeight: 'bold' }}>주요 담당 업무 및 성과</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ borderRight: '1px solid #000', padding: '12px', fontWeight: 'bold' }}>대표자 (본인)</td>
                  <td style={{ borderRight: '1px solid #000', padding: '12px', color: '#0047b3', fontWeight: 'bold' }}>CEO 및 총괄 디렉터</td>
                  <td style={{ padding: '12px', textAlign: 'left', lineHeight: '1.5', wordBreak: 'keep-all' }}>
                    - 국내외 연구 데이터 및 특허 분석을 통한 <strong>제품 기획 및 친환경 원료 배합비 설계 총괄</strong><br/>
                    - OEM(위탁생산) 공정 발굴 및 통영 폐기물 자원화 인프라 제휴 협상 로드맵 추진
                  </td>
                </tr>
              </tbody>
            </table>
            <div style={{ padding: '12px', background: '#f8f9fa', border: '1px solid #e9ecef', borderRadius: '4px', fontSize: '13px', color: '#444', lineHeight: '1.6' }}>
              * 현재 기획 설계(Ideation) 단계이나, 시장 분석과 핵심 기술 데이터 리서치가 고도화되어 있어 본 사업 선정 시 즉각적인 시제품(외주) 제작 스핀오프가 가능한 상태임.
            </div>
          </div>
        </div>

        <p style={{ fontSize: '15.5px', color: '#000', fontWeight: 'bold', marginBottom: '8px' }}>나. 협약 기간 내 핵심 인력 고용 및 활용 계획</p>
        
        <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '14.5px', marginBottom: '10px', color: '#000', letterSpacing: '-0.3px' }}>
          &lt; 추가 고용 및 활용 계획 &gt;
        </div>
        <table className="hwp-table" style={{ marginBottom: '16px', color: '#000', fontSize: '13.5px', textAlign: 'center' }}>
          <thead>
            <tr style={{ backgroundColor: '#e5e5e5', borderTop: '2px solid #000', borderBottom: '1px solid #000' }}>
              <th style={{ width: '10%', borderRight: '1px solid #000', padding: '8px', fontWeight: 'bold' }}>순번</th>
              <th style={{ width: '25%', borderRight: '1px solid #000', padding: '8px', fontWeight: 'bold' }}>주요 담당업무</th>
              <th style={{ width: '45%', borderRight: '1px solid #000', padding: '8px', fontWeight: 'bold' }}>요구역량(경력 및 학력 등)</th>
              <th style={{ width: '20%', padding: '8px', fontWeight: 'bold' }}>채용 시기</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #000' }}>
              <td style={{ borderRight: '1px solid #000', padding: '10px', color: '#0047b3', fontStyle: 'italic' }}>1</td>
              <td style={{ borderRight: '1px solid #000', padding: '10px', color: '#0047b3', fontStyle: 'italic' }}>B2B 영업 및 커머스 마케팅</td>
              <td style={{ borderRight: '1px solid #000', padding: '10px', color: '#0047b3', fontStyle: 'italic', textAlign: 'left' }}>학력 무관, 퍼포먼스 마케팅 및 B2B 온오프라인 세일즈 관련 경력(3년 이상)</td>
              <td style={{ padding: '10px', color: '#0047b3', fontStyle: 'italic' }}>'26. 08.</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #000' }}>
              <td style={{ borderRight: '1px solid #000', padding: '10px', color: '#0047b3', fontStyle: 'italic' }}>...</td>
              <td style={{ borderRight: '1px solid #000', padding: '10px', color: '#0047b3', fontStyle: 'italic' }}></td>
              <td style={{ borderRight: '1px solid #000', padding: '10px', color: '#0047b3', fontStyle: 'italic', textAlign: 'left' }}></td>
              <td style={{ padding: '10px', color: '#0047b3', fontStyle: 'italic' }}></td>
            </tr>
          </tbody>
        </table>

        <div style={{ padding: '15px', background: '#f8f9fa', border: '1px solid #e9ecef', borderRadius: '4px', marginBottom: '30px' }}>
          <ul style={{ listStyleType: "'- '", paddingLeft: '15px', margin: 0, fontSize: '13.5px', color: '#333', lineHeight: '1.6', wordBreak: 'keep-all' }}>
            <li style={{ marginBottom: '6px' }}><strong>[초도 양산 수율 확보 즉시 마케터 등용]</strong> 대표자는 시제품과 성형탄 배합 완성 등 본연의 '품질 개선'에만 집중하고, 협약 기간 내(하반기) B2B 대량 납품 및 커머스를 전담할 경력직 1명을 최우선 고용합니다.</li>
            <li><strong>[핵심 직무 스페셜리스트화]</strong> 전담 마케터를 통해 캠핑 유튜버 시딩 실무, 대형 아웃도어 유통망 입점 영업, 그리고 요식업 대상 샘플 배포를 추진해 1~2단계 매출을 조기 확보합니다.</li>
          </ul>
        </div>
      </div>

      <div style={{ width: '100%', height: '1px', background: '#ccc', margin: '40px 0' }} />

      <div className="hwp-section">
        <h2 className="hwp-section-title">4-2. 외부 네트워크 현황 및 세부 활용 계획</h2>
        <div className="hwp-instruction-box">
          ※ 사업화를 이끌기 위한 외부 협력 기관/네트워크 현황(MOU, 산학협력, 멘토링 등) 및 활용 계획
        </div>

        <table className="hwp-table" style={{ marginBottom: '20px', color: '#000', fontSize: '14px' }}>
          <thead>
            <tr>
              <th style={{ width: '25%', textAlign: 'center', backgroundColor: '#333', color: '#fff', borderRight: '1px solid #ccc' }}>협력 유형 및 기관</th>
              <th style={{ width: '25%', textAlign: 'center', backgroundColor: '#f1f1f1', color: '#000', borderRight: '1px solid #ccc', fontWeight: 'bold' }}>지원 및 협력 분야</th>
              <th style={{ width: '50%', textAlign: 'center', backgroundColor: '#f1f1f1', color: '#000', fontWeight: 'bold' }}>핵심 활용 계획 및 성과</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ textAlign: 'center', fontWeight: 'bold', borderRight: '1px solid #ccc', color: '#0047b3' }}>
                지역 대학 연계<br/><span style={{ fontSize: '12px', color: '#666', fontWeight: 'normal' }}>(화학공학 산학협력 추진)</span>
              </td>
              <td style={{ padding: '12px', lineHeight: '1.5', borderRight: '1px solid #ccc', textAlign: 'center', fontWeight: 'bold', wordBreak: 'keep-all' }}>
                기반 기술/배합<br/>R&D 고도화 (예정)
              </td>
              <td style={{ padding: '12px', lineHeight: '1.6', wordBreak: 'keep-all' }}>
                본 정부지원사업 선정 즉시, 지역 소재 화학/환경공학과 교수 연구진과 <strong>'기술 자문(Advisory)' 파트너십을 체결</strong>할 예정임. 확보된 기존 학술 데이터 상의 결합 비율(굴패각+커피박)을 실제 시연 공정에서 교차 검증하고, 전문적인 공학 피드백을 수용하여 시제품의 연소 수율 및 품질 안정성을 단기간에 끌어올릴 계획임.
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: 'center', fontWeight: 'bold', borderRight: '1px solid #ccc', color: '#0047b3' }}>
                통영/거제 폐기물 시설<br/><span style={{ fontSize: '12px', color: '#666', fontWeight: 'normal' }}>(원자재 공급망 제휴 추진)</span>
              </td>
              <td style={{ padding: '12px', lineHeight: '1.5', borderRight: '1px solid #ccc', textAlign: 'center', fontWeight: 'bold', wordBreak: 'keep-all' }}>
                안정적 원료<br/>수급망 탐색 및 협상
              </td>
              <td style={{ padding: '12px', lineHeight: '1.6', wordBreak: 'keep-all' }}>
                현재 통영 지역 굴껍데기 자원화 전처리 시설 네트워크를 면밀히 분석 및 탐색 중임. <strong>'정부창업지원사업 선정 기업'이라는 공신력(레퍼런스)을 교두보</strong>로 삼아 정식으로 조달 실무 제휴(MOU)를 제안하고, 초기 투자비용(세척/건조 설비) 없이도 고품질 폐기물을 안정적으로 융통하는 밸류체인을 구축할 방침임.
              </td>
            </tr>
          </tbody>
        </table>
        
        <div style={{ border: '2px solid #ccc', padding: '20px', background: '#fafafa', borderRadius: '4px' }}>
          <div style={{ fontWeight: 'bold', color: '#000', fontSize: '14.5px', marginBottom: '10px' }}>
            ■ 스피드 팩토어링(Speed Factoring) 및 팹리스(Fabless) 제조 전략
          </div>
          <p style={{ margin: 0, fontSize: '13.5px', color: '#444', lineHeight: '1.6', wordBreak: 'keep-all' }}>
            초기 예비창업 단계부터 무리하게 자가 공장이나 대형 생산 설비를 구축하는 매몰 비용(Sunk Cost)의 함정에 빠지지 않습니다. 당사는 제품의 <strong>'핵심 배합 솔루션 기획'과 '마케팅'에만 대표자의 역량을 집중</strong>하고, 실제 R&D 교열과 제조 공정은 철저히 외부 전문 OEM 네트워크 및 기술 자문단에 100% 아웃소싱하는 현대적 <strong>'팹리스(Fabless) 제조'</strong> 방식을 취합니다. 이를 통해 지원 자금을 가장 파급력이 큰 판로 개척에 적재적소 투입하여 압도적인 J커브 성장을 실현할 수 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
}
