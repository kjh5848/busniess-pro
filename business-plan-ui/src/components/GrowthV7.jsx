import React from 'react';
import BoxPlusLayout from './ui/BoxPlusLayout';
import ArrowFlowLayout from './ui/ArrowFlowLayout';

const ACCENT = '#dfe6f7';

/* ── 비즈니스 모델 3가지 박스 ── */
const bmItems = [
  {
    title: 'SaaS 구독 (B2C Core)',
    main: '월/연 구독료',
    sub: '개인 연구자·대학원생 타겟',
  },
  {
    title: 'On-Demand 연산 (GPU)',
    main: '시간당 종량 과금',
    sub: '고용량 시뮬레이션 수행 시',
  },
  {
    title: 'Enterprise 온프레미스 (B2B)',
    main: '설치비 + 연간 유지보수',
    sub: '보안·커스텀이 필요한 중견 제약사',
  },
];

/* ── GTM 4단계 화살표 ── */
const gtmSteps = [
  { label: '초기 레퍼런스 확보', sub: '(대학/연구소 무상 배포)' },
  { label: '국내 B2B 실증',      sub: '(바이오 벤처 유료화)' },
  { label: '아시아/중견 확장',    sub: '(SaaS 구독 모델 확산)' },
  { label: '글로벌 스케일업',     sub: '(Big Pharma 파트너십)' },
];

const GrowthV7 = () => {
  return (
    <div className="v2-theme v2-container">
      <div className="v2-paper">

        <div className="hwp-section-title-tag">
          3. 성장전략 (Scale-up)_사업화 추진 전략
        </div>

        {/* ── 4-1. 목표시장 분석 ── */}
        <section>
          <h2 className="hwp-subsection-title">4-1. 제품·서비스의 목표시장 분석</h2>

          <div className="v2-info-box" style={{ borderLeft: `4px solid #333`, marginBottom: '1.2rem', backgroundColor: '#fcfcfc' }}>
            <p style={{ fontWeight: 'bold', margin: '0', fontSize: '1rem', wordBreak: 'keep-all', lineHeight: '1.6' }}>
              ▶ B2C(SaaS)로 개인 연구자 생태계를 선점한 후, B2B 망분리 온프레미스 고단가 계약을 확보하는 투트랙(Two-Track) 공략임
            </p>
          </div>

          <table className="hwp-table" style={{ marginBottom: '2rem' }}>
            <thead>
              <tr>
                <th style={{ width: '20%', backgroundColor: ACCENT }}>타겟 분류</th>
                <th style={{ width: '30%', backgroundColor: ACCENT }}>고객 특징</th>
                <th style={{ backgroundColor: ACCENT }}>핵심 수요 (공략 포인트)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="label">B2B 타겟 (핵심)<br/>[Enterprise·SMB]</td>
                <td>국내외 중견·중소 제약사, 국공립 바이오 연구실임</td>
                <td>
                  · AI 도입 시급하나 클라우드 비용·보안 유출·전담 개발조직 부재 상태임<br/>
                  <strong>→ 외부 유출 없는 설치형 온프레미스 수요 높음</strong>
                </td>
              </tr>
              <tr>
                <td className="label">B2C 타겟 (확장)<br/>[Individuals]</td>
                <td>논문·기초연구용 AI 필요한 대학원생·포닥·개인 연구자임</td>
                <td>
                  · 서버 구축 권한·자금 없이 랩탑으로 AlphaFold 즉시 구동 필요함<br/>
                  <strong>→ 설치 없는 브라우저 즉시 실행 수요 존재함</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* ── 4-2 / 4-3. 비즈니스 모델 ── */}
        <section>
          <h2 className="hwp-subsection-title">4-2 / 4-3. 비즈니스 모델(BM) 및 핵심 수익 전략</h2>

          <p className="hwp-guide-text" style={{ marginBottom: '0.6rem' }}>
            ※ 보안 민감도별 고객을 완벽히 분리 대응하는 투트랙 하이브리드 수익 모델임
          </p>

          {/* ★ BoxPlusLayout — BM 3가지 */}
          <BoxPlusLayout items={bmItems} accentColor={ACCENT} />

          {/* 세부 설명 테이블 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem', marginBottom: '2rem' }}>
            <table className="hwp-table">
              <thead>
                <tr><th style={{ backgroundColor: ACCENT }}>[B2B 하이엔드] 보안 완결형 온프레미스 &amp; 사내 그리드</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ lineHeight: '1.7', fontSize: '0.86rem' }}>
                    <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
                      <li><strong>제공 형태:</strong> 사내 폐쇄망 직접 설치형 HW/SW 통합 어플라이언스 + PC 병렬 에이전트임</li>
                      <li><strong>수익① 설치·구축비:</strong> 초기 탑재 및 폐쇄망 연동 고단가 일시매출임 (3,000~5,000만 원/건)</li>
                      <li><strong>수익② 연간 유지보수:</strong> 최신 글로벌 AI 모델 패키지 사내망 정기 업데이트 라이선스임</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="hwp-table">
              <thead>
                <tr><th style={{ backgroundColor: ACCENT }}>[B2C 코어확장] 클라우드 SaaS 및 로컬/하이브리드 연동</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ lineHeight: '1.7', fontSize: '0.86rem' }}>
                    <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
                      <li><strong>제공 형태:</strong> 설치 없는 브라우저 기반 웹 AI 구독 파이프라인 + 개인 GPU 로컬 연동임</li>
                      <li><strong>수익① 클라우드 구독료:</strong> 개인 연구 목적 라이트 플랜 월/연 소액 정기 결제임</li>
                      <li><strong>수익② 자원 임대 종량제:</strong> 부족 시 당사 H100 GPU 스팟 대여 Pay-As-You-Go 방식임</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 4-4. GTM 전략 ── */}
        <section>
          <h2 className="hwp-subsection-title">4-4. 시장진입(GTM) 및 성과 창출 전략</h2>

          <p className="hwp-guide-text" style={{ marginBottom: '0.6rem' }}>
            ※ 4단계 순차 시장 침투 전략 — B2C 생태계 선점 → B2B 고단가 전환
          </p>

          {/* ★ ArrowFlowLayout — GTM 4단계 */}
          <ArrowFlowLayout steps={gtmSteps} accentColor={ACCENT} />

          {/* GTM 단계별 상세 */}
          <table className="hwp-table" style={{ marginTop: '0.75rem' }}>
            <thead>
              <tr>
                <th style={{ width: '22%', backgroundColor: ACCENT }}>판매·확장 단계</th>
                <th style={{ backgroundColor: ACCENT }}>GTM 핵심 액션</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="label">1단계<br/>(B2C 브랜딩·생태계 침투)</td>
                <td>
                  <ul style={{ margin: 0, paddingLeft: '1.2rem', lineHeight: '1.7', fontSize: '0.88rem' }}>
                    <li>B2C SaaS 초저가·무료 베타 선출시 후 약대·바이오대학원생 무상 보급함</li>
                    <li>버그 리포트·튜닝 데이터 수집 및 UX 익숙화로 <strong>자발적 락인(Lock-in) 생태계</strong> 조성함</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="label">2단계<br/>(B2B 하이엔드 강공)</td>
                <td>
                  <ul style={{ margin: 0, paddingLeft: '1.2rem', lineHeight: '1.7', fontSize: '0.88rem' }}>
                    <li>B2C 검증 안정성을 무기 삼아 중소 제약사·국공립 연구센터 C-Level 집중 타겟함</li>
                    <li><strong>"학생 연구원과 동일 성능을 사내 폐쇄망 보안으로 구현"</strong> 하향식 POC 도입 제안서 배포함</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <hr className="hwp-divider" />

        {/* ── 예산 집행 계획 ── */}
        <section>
          <div className="hwp-section-title-tag">
            2-3. 정부지원사업비 집행 계획
          </div>

          <div className="hwp-notice-box">
            <p>※ 총 정부 지원금액 : 50,000,000원 (오천만 원)</p>
            <p>※ 예비창업자 본인 인건비는 사업비로 집행 불가 (현물 계상)</p>
            <p>※ 외주용역비 2천만원 초과 시 주관기관 사전 심의 및 2인 이상 견적서 필요</p>
          </div>

          <table className="hwp-table" style={{ marginTop: '0.8rem' }}>
            <thead>
              <tr>
                <th style={{ width: '12%', backgroundColor: ACCENT }}>비목</th>
                <th style={{ width: '28%', backgroundColor: ACCENT }}>세부 항목</th>
                <th style={{ width: '12%', textAlign: 'center', backgroundColor: ACCENT }}>단가 (원)</th>
                <th style={{ width: '8%', textAlign: 'center', backgroundColor: ACCENT }}>수량</th>
                <th style={{ width: '15%', textAlign: 'center', backgroundColor: ACCENT }}>금액 (원)</th>
                <th style={{ backgroundColor: ACCENT }}>집행 목적 및 근거</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="label">특허권 등<br/>무형자산<br/>취득비</td>
                <td>국내 특허 출원 (AI 신약 예측 파이프라인 자동화 방법)</td>
                <td style={{ textAlign: 'right' }}>3,500,000</td>
                <td style={{ textAlign: 'center' }}>1식</td>
                <td style={{ textAlign: 'right', fontWeight: 'bold' }}>3,500,000</td>
                <td>Bio-MLOps 자동화 파이프라인 핵심기술 권리 보호 목적임. 창업자 본인 명의 출원함.</td>
              </tr>
              <tr>
                <td className="label" rowSpan={4}>외주용역비</td>
                <td>UI/UX 와이어프레임 설계 및 디자인 시스템 구축</td>
                <td style={{ textAlign: 'right' }}>12,000,000</td>
                <td style={{ textAlign: 'center' }}>1식</td>
                <td style={{ textAlign: 'right' }}>12,000,000</td>
                <td>비전문가 대상 노코드 AI 대시보드 UX Flow·화면 설계·디자인 시스템 외주 제작함.</td>
              </tr>
              <tr>
                <td>Bio-MLOps 대시보드 웹 프론트엔드 개발 (React)</td>
                <td style={{ textAlign: 'right' }}>19,000,000</td>
                <td style={{ textAlign: 'center' }}>1식</td>
                <td style={{ textAlign: 'right' }}>19,000,000</td>
                <td>AI 파이프라인 조작 대시보드·분자구조 3D 뷰어·작업큐 모니터링·결과리포트 핵심 화면 개발함.</td>
              </tr>
              <tr>
                <td>반응형 웹 최적화 및 크로스브라우저 QA</td>
                <td style={{ textAlign: 'right' }}>8,500,000</td>
                <td style={{ textAlign: 'center' }}>1식</td>
                <td style={{ textAlign: 'right' }}>8,500,000</td>
                <td>Chrome·Firefox·Edge 호환성 검증·접근성(A11y) 개선·번들 경량화 최적화 수행함.</td>
              </tr>
              <tr>
                <td>UI 사용성 테스트(UT) 설계 및 운영</td>
                <td style={{ textAlign: 'right' }}>7,000,000</td>
                <td style={{ textAlign: 'center' }}>1식</td>
                <td style={{ textAlign: 'right' }}>7,000,000</td>
                <td>대학원생·연구원 대상 MVP 프론트엔드 UT 시나리오 설계·관찰 운영·결과 보고서 납품함.</td>
              </tr>
              <tr>
                <td
                  colSpan={4}
                  style={{ textAlign: 'center', fontWeight: 'bold', backgroundColor: ACCENT }}
                >
                  합 계
                </td>
                <td
                  style={{ textAlign: 'right', fontWeight: 'bold', backgroundColor: ACCENT }}
                >
                  50,000,000
                </td>
                <td style={{ backgroundColor: ACCENT }}></td>
              </tr>
            </tbody>
          </table>

          <p className="hwp-guide-text" style={{ marginTop: '0.5rem' }}>
            ※ 외주용역비 전액을 프론트엔드 개발·설계·검증 항목으로만 구성함. 각 항목 2,000만원 미만 분리 발주함. 항목별 2인 이상 견적서 사전 징구 예정임.
          </p>
        </section>

      </div>
    </div>
  );
};

export default GrowthV7;
