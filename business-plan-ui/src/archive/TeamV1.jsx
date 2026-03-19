import React from 'react';

const TeamV1 = () => {
  return (
    <div className="v2-theme v2-container" style={{ paddingBottom: '4rem' }}>
      <div className="v2-paper">
        
        <h1 className="v2-section-title">
          5. 창업기업 대표자 및 팀원의 역량
        </h1>
        
        <div style={{ backgroundColor: '#fffbeb', color: '#b45309', padding: '0.8rem 1rem', borderRadius: '6px', border: '1px solid #fde68a', marginBottom: '1.5rem', fontSize: '0.9rem', fontWeight: 'bold', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
          <span style={{ fontSize: '1.1rem', marginTop: '-2px' }}>⚠️</span>
          <span style={{ lineHeight: '1.4' }}>
            이 페이지에 기재된 팀 구성, 학력, 이력 및 협력사 등의 정보는 사업계획서 구조 이해를 돕기 위해 작성된 <strong>가상의 예시(Mock Data)임</strong>.
          </span>
        </div>

        <section>
          <h2 className="v2-sub-title">5-1. 대표자 현황 및 역량</h2>
          
          {/* Rule 5: Key Message Quote */}
          <div className="v2-info-box" style={{ borderLeft: '4px solid #333', marginBottom: '1.5rem', backgroundColor: '#fcfcfc' }}>
            <p style={{ fontWeight: 'bold', margin: '0', fontSize: '1.05rem', wordBreak: 'keep-all', lineHeight: '1.6' }}>
              ▶ 대표자의 MLOps 기반 파이프라인 개발 및 시스템 아키텍처 총괄<br/>
              ▶ 계산화학 도메인 전문 연구원 1인 채용을 통한 기술-도메인 투트랙 조직 구조 확립
            </p>
          </div>

          <p className="v2-box-desc" style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
            ■ 핵심 연구진(공동창업자) 및 영업/마케팅 구성(안)
          </p>

          <p className="v2-box-desc" style={{ marginBottom: '0.5rem', wordBreak: 'keep-all', lineHeight: '1.6' }}>
            본 과제의 성공적인 완수와 이후 후속 연구개발(R&D) 과제 선정 방어를 위하여, <strong>국제 학술지(SCI급) 논문 실적을 다수 보유한 대학 연구실 출신의 코어 개발 인력</strong>이 연구 전담 및 시스템 고도화 주도.
          </p>

          {/* Rule 3 & 6: Detailed, structured team table with strict wrapping */}
          <div className="v2-table-wrapper" style={{ marginTop: '0.5rem' }}>
            <table className="v2-table" style={{ wordBreak: 'keep-all', lineHeight: '1.6' }}>
              <thead>
                <tr>
                  <th style={{width: '15%'}}>구분 / 직무</th>
                  <th style={{width: '20%'}}>주요 학력 (전공)</th>
                  <th style={{width: '50%'}}>핵심 보유 역량 (경력 및 실적 증빙)</th>
                  <th style={{width: '15%'}}>참여율</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">
                    <span style={{ display: 'block', fontWeight: 'bold' }}>대표이사</span>
                    <span style={{ fontSize: '0.8rem', color: '#4b5563' }}>(정호준)</span>
                  </td>
                  <td className="text-center">경상국립대학교<br/>(환경산림과학부)</td>
                  <td>
                    • <strong>MLOps 시스템 엔지니어링 및 파이썬 파이프라인/REST API 설계</strong><br/>
                    • IT 시스템 설계, Docker 컨테이너 패키징 및 오케스트레이션 수행<br/>
                    • <strong>핵심역량:</strong> GUI 프로토콜 등 시스템 전반을 단독 개발할 풀스택 역량 확립
                  </td>
                  <td className="text-center font-bold">100%</td>
                </tr>
                <tr>
                  <td className="text-center">
                    <span style={{ display: 'block', fontWeight: 'bold' }}>연구원</span>
                    <span style={{ fontSize: '0.8rem', color: '#4b5563' }}>(상시근로 채용예정)</span>
                  </td>
                  <td className="text-center">석사 이상 선호<br/>(계산화학 등)</td>
                  <td>
                    • <strong>약물 디자인 도메인 특화 딥테크 AI 연구원</strong><br/>
                    • 실험 연구자 관점의 시뮬레이션 결과(PDB 도킹, FEP 안정성) 퀄리티 컨트롤<br/>
                    • <strong>실적:</strong> 1순위로 즉시 채용하여 전체 일정 속도 견인 예정
                  </td>
                  <td className="text-center font-bold">합류 시 100%<br/>('26.06)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Rule 1: Evidence Text */}
          <p style={{ fontSize: '0.75rem', color: '#6b7280', margin: '0.5rem 0 0 0' }}>
            * 근거: 사업계획서 "별첨. 대표자 및 참여자 학위/경력/재직 증명서 원본" 첨부 문서 번호 참조 요망.
          </p>
        </section>

        <section>
          <h2 className="v2-sub-title" style={{ marginTop: '3rem' }}>5-2. 기업 현황</h2>
          <p className="v2-box-desc" style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
            ■ 업무 공간 및 자체 보유 연구/개발 인프라 현황
          </p>
          <div className="v2-table-wrapper" style={{ marginTop: '0.5rem' }}>
            <table className="v2-table" style={{ wordBreak: 'keep-all', lineHeight: '1.6' }}>
              <thead>
                <tr>
                  <th style={{width: '20%'}}>구분</th>
                  <th style={{width: '60%'}}>보유 현황 및 활용 용도</th>
                  <th style={{width: '20%'}}>확보 방식</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center font-bold">전용 사무 공간</td>
                  <td>OO대학교 산학협력단 소속 창업보육센터 내 독립형(4인용) 연구 개발 오피스 입주 완료. (임대료 면제 혜택 수혜 중)</td>
                  <td className="text-center">임차 (산학협력단)</td>
                </tr>
                <tr>
                  <td className="text-center font-bold">개발용 H/W</td>
                  <td>고성능 딥러닝 워크스테이션(GPU RTX 4090 2-way 탑재) 1대 등 모델 초기 검증용 로컬 연산 장비 구축 완료.</td>
                  <td className="text-center">자체 매입 (자본금)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="v2-sub-title" style={{ marginTop: '3rem' }}>5-3. 조직현황 및 조직구성원역량</h2>
          <p className="v2-box-desc" style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
            ■ 상시 근로자 업무 분장 (대표이사 포함)
          </p>
          <div className="v2-table-wrapper" style={{ marginTop: '0.5rem' }}>
            <table className="v2-table" style={{ wordBreak: 'keep-all', lineHeight: '1.6' }}>
              <thead>
                <tr>
                  <th style={{width: '15%'}}>성명 (직위)</th>
                  <th style={{width: '25%'}}>담당 업무</th>
                  <th style={{width: '60%'}}>주요 경력 및 핵심 역량</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center font-bold">본인 (대표)</td>
                  <td className="text-center">백엔드 연동 & 프로토콜 셋업</td>
                  <td>개발 파트너십 구축 및 Boltz-2, OpenFE 라이브러리 내부 통합 구현 등 <strong>투트랙 엔진 기술의 중추적 역할.</strong></td>
                </tr>
                <tr>
                  <td className="text-center font-bold">신규 (연구원)</td>
                  <td className="text-center">단백질 후보물질 정밀 검수</td>
                  <td>의료/화학 데이터 정제 기반 지식 우수. <strong>계산화학적 엣지 케이스 처리 및 PMF 검증.</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="v2-sub-title" style={{ marginTop: '3rem' }}>5-4. 업무파트너(협력기업 등) 현황 및 역량</h2>

          <p className="v2-box-desc" style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
            ■ 자체 인력(내부) 한계 극복을 위한 전략적 외부 자원 확보 방안
          </p>

          <p className="v2-box-desc" style={{ marginBottom: '0.5rem', wordBreak: 'keep-all', lineHeight: '1.6' }}>
            초기 벤처 특성상 부족한 개발 서버 인프라와 외부용 화면 디자인은 <strong>업계 최고 수준의 제휴사들과의 직접 파트너십 및 맞춤형 외주 제작</strong>을 통해 가장 빠르고 리스크 없이 첫 제품을 출시하는 린(Lean) 전략 채택.
          </p>

          {/* Rule 3 & 6: Actionable vendor partner table */}
          <div className="v2-table-wrapper" style={{ marginTop: '0.5rem' }}>
            <table className="v2-table" style={{ wordBreak: 'keep-all', lineHeight: '1.6' }}>
              <thead>
                <tr>
                  <th style={{width: '20%'}}>협력사 (유형)</th>
                  <th style={{width: '25%'}}>확보 대상 (보유 역량)</th>
                  <th style={{width: '40%'}}>구체적 협력/제작 세부 명세</th>
                  <th style={{width: '15%'}}>예정 일자</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">
                    <span style={{ fontWeight: 'bold' }}>OO전자 클라우드</span><br/>
                    <span style={{ fontSize: '0.8rem', color: '#4b5563' }}>(서버 물품 무상 파트너)</span>
                  </td>
                  <td className="text-center">최고급 그래픽 서버<br/>임대 및망 연결</td>
                  <td>
                    • 스타트업 지원 자격 선정 통한 <strong>초기 서버망 무상 할당</strong> 지원<br/>
                    • 보안 인프라 구축 및 분산처리 설계 기술 자문
                  </td>
                  <td className="text-center">업무협약 완료<br/>('26.04 적용)</td>
                </tr>
                <tr>
                  <td className="text-center">
                    <span style={{ fontWeight: 'bold' }}>OO크리에이티브</span><br/>
                    <span style={{ fontSize: '0.8rem', color: '#4b5563' }}>(웹디자인 전문 제작사)</span>
                  </td>
                  <td className="text-center">웹페이지 화면 구성 /<br/>브라우저용 디자인</td>
                  <td>
                    • <strong>화면 구조 기획 및 프론트엔드 제작 일괄 발주건</strong> (본 정부지원금으로 비용 집행 예정)<br/>
                    • 비전문가도 쉽게 조작 가능한 사용자 조작화면(대시보드) 제작
                  </td>
                  <td className="text-center">용역계약 예정<br/>('26.06)</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* Rule 1: Evidence Text */}
          <p style={{ fontSize: '0.75rem', color: '#6b7280', margin: '0.5rem 0 0 0' }}>
            * 근거 1: OO전자 스타트업 인프라 지원 프로그램 합격증 (비고란 참조)<br/>
            * 근거 2: OO크리에이티브 측 용역 계약(안) 및 단가 산출 비교 견적서 (비고란 참조)
          </p>
        </section>

        <section>
          <h2 className="v2-sub-title" style={{ marginTop: '3rem' }}>5-5. 보유기술 및 투자 이력</h2>
          <div className="v2-box-grid" style={{ marginTop: '0.5rem' }}>
            <div className="v2-info-box" style={{ flexDirection: 'column' }}>
              <div style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: '#111' }}>[지식재산권] 원천 기술 특허 포트폴리오</div>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.85rem', color: '#4b5563', lineHeight: '1.6' }}>
                <li><strong>특허 출원 1건:</strong> "인공신경망 기반 화합물 전하 예측 시스템 및 그 방법" (출원번호 10-202X-XXXXXXX)</li>
                <li><strong>소프트웨어 저작권 1건:</strong> MVP 구동을 위한 초기 알파 버전의 핵심 연산 모듈 저작권 등록 완료.</li>
              </ul>
            </div>
            
            <div className="v2-info-box" style={{ flexDirection: 'column' }}>
              <div style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: '#111' }}>[자본 유치] 예비창업단계(Pre-Seed) 펀딩 이력</div>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.85rem', color: '#4b5563', lineHeight: '1.6' }}>
                <li><strong>엔젤 투자 유치 완료 (5천만 원):</strong> 개인 엔젤 투자자(바이오 업계 시니어)로부터 창업 직후 5천만 원의 극초기 자본금 유치 성공 및 초기 런웨이(Runway) 안정적 확보.</li>
                <li>오픈이노베이션 우수 스타트업 선정 (1천만 원 상금 확보)</li>
              </ul>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default TeamV1;
