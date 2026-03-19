import React from 'react';

const ScaleUpV1 = () => {
  return (
    <div className="v2-theme v2-container">
      <div className="v2-paper">

        {/* 대분류 헤더 */}
        <div className="hwp-section-title-tag">
          3. 성장전략 (Scale-up)_시장 진입 및 확장
        </div>

        <section>
          <h2 className="hwp-subsection-title">3-1. 핵심 타겟 시장 및 목표 고객</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 5fr) minmax(0, 5fr)', gap: '1rem', marginBottom: '2rem' }}>
            {/* 1열: 그리드 좌측 - TAM-SAM-SOM 동심원 그래픽 */}
            <div style={{ border: 'var(--hwp-border-thick)', backgroundColor: 'var(--hwp-white)', padding: '1.5rem 0.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ fontWeight: 'bold', fontSize: '1.0rem', marginBottom: '1.5rem', color: 'var(--hwp-black)', textAlign: 'center' }}>
                [ 스트레이캣 시장 진출 로드맵 (TAM-SAM-SOM) ]
              </div>
              
              <div style={{ position: 'relative', width: '300px', height: '300px', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                {/* TAM */}
                <div style={{ 
                  position: 'absolute', bottom: 0, width: '300px', height: '300px',
                  borderRadius: '50%', border: '2px solid var(--hwp-light)', backgroundColor: 'rgba(230, 230, 230, 0.2)',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '1.6rem'
                }}>
                  <div style={{ fontWeight: '900', color: 'var(--hwp-gray)', fontSize: '0.9rem' }}>TAM (전체 시장)</div>
                  <div style={{ color: 'var(--hwp-gray)', fontSize: '0.75rem', fontWeight: 'bold' }}>글로벌 AI 신약개발 시장</div>
                  <div style={{ color: 'var(--hwp-black)', fontSize: '1rem', fontWeight: '900', marginTop: '0.1rem' }}>약 4.8조 원</div>
                </div>

                {/* SAM */}
                <div style={{ 
                  position: 'absolute', bottom: 0, width: '210px', height: '210px',
                  borderRadius: '50%', border: '2px solid var(--hwp-dark)', backgroundColor: 'rgba(200, 200, 200, 0.4)',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '1rem' /* 겹침 방지를 위해 상단 여백 축소 */
                }}>
                  <div style={{ fontWeight: '900', color: 'var(--hwp-dark)', fontSize: '0.85rem' }}>SAM (유효 시장)</div>
                  <div style={{ color: 'var(--hwp-dark)', fontSize: '0.7rem', fontWeight: 'bold' }}>국내 제약/바이오 R&D 인프라</div>
                  <div style={{ color: 'var(--hwp-black)', fontSize: '0.95rem', fontWeight: '900', marginTop: '0.1rem' }}>약 5,000억 원</div>
                </div>

                {/* SOM */}
                <div style={{ 
                  position: 'absolute', bottom: 0, width: '130px', height: '130px',
                  borderRadius: '50%', backgroundColor: 'var(--hwp-black)', boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 10
                }}>
                  <div style={{ fontWeight: '900', color: 'var(--hwp-white)', fontSize: '0.85rem' }}>SOM (수익 시장)</div>
                  <div style={{ color: 'var(--hwp-white)', fontSize: '0.65rem', textAlign: 'center', lineHeight: '1.2', marginTop: '0.2rem', padding: '0 0.5rem' }}>국내 중소/벤처<br/>오프라인 AI 수요</div>
                  <div style={{ color: 'var(--hwp-white)', fontSize: '1rem', fontWeight: '900', marginTop: '0.2rem' }}>500억 원</div>
                </div>
              </div>
            </div>

            {/* 2열: 그리드 우측 - 서술형 설명 */}
            <div style={{
              background: 'var(--hwp-black)', color: 'var(--hwp-white)', padding: '1.5rem 1.2rem',
              lineHeight: '1.6', fontWeight: '700', fontSize: '0.9rem', wordBreak: 'keep-all',
              display: 'flex', flexDirection: 'column', justifyContent: 'center'
            }}>
              <div style={{ fontSize: '0.95rem', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--hwp-gray)' }}>
                ▶ <strong>[수익 시장 집중]</strong><br/>중소·중견 제약사 및 바이오 벤처 중심의 자체 구축형(폐쇄망) AI 인프라 대체 수요 집중 공략
              </div>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', fontWeight: 'normal', fontSize: '0.85rem', lineHeight: '1.6' }}>
                <li style={{ marginBottom: '0.8rem' }}><strong>글로벌 시장(TAM):</strong> 연평균 성장률 30% 급성장하는 글로벌 AI 신약 개발 인프라 시장 (약 4.8조 원 규모)</li>
                <li style={{ marginBottom: '0.8rem' }}><strong>유효 시장(SAM):</strong> 국내 제약/바이오 R&D 시장 내 AI/SW 독점 라이선스 및 솔루션 도입 예산 (수천억 원대 추산)</li>
                <li><strong>극초기 타겟(SOM):</strong> 막대한 비용 장벽으로 소외된 국내 중소·중견 제약사 및 바이오 벤처의 즉각적 대체 솔루션 구매 수요 (연 약 500억 원)</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="hwp-subsection-title">3-2. 사업 추진 일정 및 스케일업(Scale-up) 전략</h2>

          {/* 3단계 스케일업 표 */}
          <div className="v2-table-wrapper" style={{ marginBottom: '1.5rem' }}>
            <table className="v2-table" style={{ wordBreak: 'keep-all', lineHeight: '1.5', fontSize: '0.85rem' }}>
              <colgroup>
                <col style={{ width: '20%' }} />
                <col style={{ width: '80%' }} />
              </colgroup>
              <tbody>
                <tr>
                  <td className="text-center font-bold" style={{ backgroundColor: 'var(--hwp-black)', color: 'var(--hwp-white)', borderRight: '1px solid var(--hwp-vlight)' }}>
                    Phase 1 (1년차)<br/><span style={{ fontSize: '0.75rem', fontWeight: 'normal' }}>기술 검증 및 SOM 진입</span>
                  </td>
                  <td>
                    ✓ <strong>MVP 아키텍처 완성:</strong> 개인용 GPU(RTX 4090) 내재화 및 하이브리드 공정 1차 개발 완료<br/>
                    ✓ <strong>베타 파트너십 구축:</strong> 시뮬레이션 인프라가 부재한 국내 극초기 약학 대학 및 소규모 바이오 벤처 대상 무상 파일럿 적용<br/>
                    ✓ <strong>데이터 주권 검증:</strong> 100% 오프라인 망분리 구동의 보안성 레퍼런스(POC) 선 확보
                  </td>
                </tr>
                <tr>
                  <td className="text-center font-bold" style={{ backgroundColor: 'var(--hwp-dark)', color: 'var(--hwp-white)', borderRight: '1px solid var(--hwp-vlight)' }}>
                    Phase 2 (2~3년차)<br/><span style={{ fontSize: '0.75rem', fontWeight: 'normal' }}>중견 타겟 SAM 확장</span>
                  </td>
                  <td>
                    ✓ <strong>라이선스 고도화 및 세일즈:</strong> 클라우드 비용을 감당하지 못하는 국내 중소·중견 제약사로 B2B 엔터프라이즈 라이선스(자체 구축형(폐쇄망)) 판매 본격화<br/>
                    ✓ <strong>솔루션 도메인 확장:</strong> 표적 단백질 분해제(TPD) 및 핵산 치료제 특화 확장 모듈 상용화<br/>
                    ✓ <strong>방어적 업셀링:</strong> 락인(Lock-in) 효과 구축을 거쳐 고부가가치 클라우드 연동 업티어(Up-tier) 모델 추가 파이프라인 형성
                  </td>
                </tr>
                <tr>
                  <td className="text-center font-bold" style={{ backgroundColor: 'var(--hwp-gray)', color: 'var(--hwp-white)', borderRight: '1px solid var(--hwp-vlight)' }}>
                    Phase 3 (4~5년차)<br/><span style={{ fontSize: '0.75rem', fontWeight: 'normal' }}>글로벌 TAM 장악</span>
                  </td>
                  <td>
                    ✓ <strong>글로벌 SOTA 기술 장벽 완료:</strong> 초정밀 물리 시뮬레이션의 계산 코어를 글로벌 학계 1위 수준 초고속 연산 모듈로 자체 대체<br/>
                    ✓ <strong>해외 자체 구축형(폐쇄망) 시장 수출:</strong> 미국, 유럽 등 보안이 필수적인 글로벌 중소 제약사 및 CRO 에이전시 대상 엔터프라이즈 납품<br/>
                    ✓ <strong>자체 IP(파이프라인) 스핀오프:</strong> 당사 시스템을 활용한 자체 신규 항암제 선도물질 조기 발굴 및 빅파마 대상 라이선스 아웃(L/O) 병행
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ScaleUpV1;
