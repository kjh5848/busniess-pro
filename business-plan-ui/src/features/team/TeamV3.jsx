import React from 'react';

const TeamV3 = () => {
  return (
    <div className="v2-theme v2-container" style={{ paddingBottom: '4rem' }}>
      <div className="v2-paper">
        
        <h1 className="v2-section-title">
          5. 팀 구성 (Team)
        </h1>
        
        <div style={{ backgroundColor: '#fffbeb', color: '#b45309', padding: '0.8rem 1rem', borderRadius: '6px', border: '1px solid #fde68a', marginBottom: '1.5rem', fontSize: '0.9rem', fontWeight: 'bold', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
          <span style={{ fontSize: '1.1rem', marginTop: '-2px' }}>⚠️</span>
          <span style={{ lineHeight: '1.4' }}>
            이 페이지에 기재된 팀 구성, 학력, 이력 및 협력사 등의 정보는 사업계획서 구조 이해를 돕기 위해 작성된 <strong>가상의 예시(Mock Data)</strong>입니다.
          </span>
        </div>

        <section>
          <h2 className="v2-sub-title">5-1. 대표자 현황 및 역량</h2>
          
          {/* Rule 5: Key Message Quote */}
          <div className="v2-info-box" style={{ borderLeft: '4px solid #333', marginBottom: '1.5rem', backgroundColor: '#fcfcfc' }}>
            <p style={{ fontWeight: 'bold', margin: '0', fontSize: '1.05rem', wordBreak: 'keep-all', lineHeight: '1.6' }}>
              "인공지능 언어 모델 최적화부터 양자/분자동력학 알고리즘 설계까지 아우르는 융합 원천 기술을 확보하고 있으며, 핵심 인력 합류 전까지 대표이사가 직접 산학 협력 네트워크 5곳을 대상으로 직접 영업을 뛰어 극초기 성장 공백을 방어할 완벽한 팀이다."
            </p>
          </div>

          <p className="v2-box-desc" style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
            ■ 핵심 연구진(공동창업자) 및 영업/마케팅 구성(안)
          </p>

          <p className="v2-box-desc" style={{ marginBottom: '0.5rem', wordBreak: 'keep-all', lineHeight: '1.6' }}>
            본 과제의 성공적인 완수와 이후 후속 연구개발(R&D) 과제 선정 방어를 위하여, <strong>국제 학술지(SCI급) 논문 실적을 다수 보유한 대학 연구실 출신의 코어 개발 인력</strong>이 100% 전담하여 시스템을 이끈다.
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
                    <span style={{ display: 'block', fontWeight: 'bold' }}>공동대표</span>
                    <span style={{ fontSize: '0.8rem', color: '#4b5563' }}>(연구개발 총괄)</span>
                  </td>
                  <td className="text-center">OO대학교 OO학과<br/>박사</td>
                  <td>
                    • <strong>인공지능 딥러닝 아키텍처 설계 전공</strong><br/>
                    • 현 OO대학교 OO학과 교수 재직 (관련 R&D 15년+)<br/>
                    • <strong>실적:</strong> 정부 인공지능 국책과제 3건 기획 및 총괄 수행 이력 보유<br/>
                    • <strong>※비고: 본 사업 1~2분기 전용 B2B 세일즈 직접 수행 예정</strong>
                  </td>
                  <td className="text-center font-bold">100%</td>
                </tr>
                <tr>
                  <td className="text-center">
                    <span style={{ display: 'block', fontWeight: 'bold' }}>팀장</span>
                    <span style={{ fontSize: '0.8rem', color: '#4b5563' }}>(영업/마케팅)</span>
                  </td>
                  <td className="text-center">OO대학교 OO학과<br/>학사</td>
                  <td>
                    • <strong>제약 소프트웨어 전문 B2B 기술 영업 관리자</strong><br/>
                    • 전 글로벌 제약 S/W 판매처 국내 총괄 (관련 세일즈 O년)<br/>
                    • <strong>실적:</strong> 국내 상위 제약사(Y사, D사 등) 납품 관리 네트워크
                  </td>
                  <td className="text-center font-bold">합류 예정<br/>('26.06)</td>
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
            ■ 상시 근로자 및 외부 자문위원(Advisory Board) 현황
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
                  <td className="text-center font-bold">김OO (연구원)</td>
                  <td className="text-center">데이터 파이프라인 전처리</td>
                  <td>OO대 컴퓨터공학 석사. 의료/화학 데이터 정제 국책 과제 2건 참여 등 <strong>AI 학습을 위한 데이터 품질 관리 역량 우수.</strong></td>
                </tr>
                <tr>
                  <td className="text-center font-bold">박OO (자문)</td>
                  <td className="text-center">신약 물질(타겟) 상용성 검토</td>
                  <td>B바이오텍 현직 신약개발센터장. 예후 평가 등 <strong>현업 제약사의 실제 피드백을 시스템 기획에 직접 반영(PMF 검증).</strong></td>
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
            초기 벤처 특성상 부족한 개발 서버 인프라와 외부용 화면 디자인은 <strong>업계 최고 수준의 제휴사들과의 직접 파트너십 및 맞춤형 외주 제작</strong>을 통해 가장 빠르고 리스크 없이 첫 제품을 출시하는 '군더더기 없는(Lean) 전략'을 채택한다.
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
                <li><strong>엔젤 투자 유치 완료 (5천만 원):</strong> 개인 엔젤 투자자(바이오 업계 시니어)로부터 창업 직후 5천만 원의 극초기 자본금 유치에 성공하여 런웨이(Runway)를 이미 확보하였다.</li>
                <li>오픈이노베이션 우수 스타트업 선정 (1천만 원 상금 확보)</li>
              </ul>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default TeamV3;
