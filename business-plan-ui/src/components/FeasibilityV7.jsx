import React from 'react';

import ComparisonTable from './ui/ComparisonTable';
import uiImage1 from '../assets/step1_alphafold.png';
import uiImage2 from '../assets/step2_diffdock.png';
import uiImage3 from '../assets/step3_rfdiffusion.png';

const ACCENT = '#dfe6f7';



/* ── 경쟁 비교 테이블 데이터 ── */
const compHeaders = [
  '구분',
  '기존 방식 (해외 CADD SW)',
  '단순 AI SaaS (Black-box)',
  '동사 Bio-MLOps (Hybrid)',
];
const compRows = [
  {
    label: '핵심 가치',
    cells: ['정밀도 중심', '속도 중심', '정밀도 + 속도 + 편의성'],
  },
  {
    label: '사용성',
    cells: [
      '명령어(CLI) 기반 복잡함',
      '블랙박스로 해석 난해',
      'Web GUI (No-Code) 완전 자동화',
    ],
  },
  {
    label: '보안',
    cells: [
      '사내 설치형 (보안 양호)',
      '외부 클라우드 업로드 필수<br/><span style="font-size:0.75rem;color:#c0392b">→ 데이터 유출 위험</span>',
      '망분리 온프레미스<br/><span style="font-size:0.75rem;color:#2c3e8c">→ 유출 제로 보장</span>',
    ],
  },
  {
    label: '비용/시간',
    cells: [
      '고비용 라이선스 / 수일',
      '클라우드 종량제 / 수초',
      '합리적 (기존 대비 1/10)<br/><span style="font-size:0.75rem;color:#2c3e8c">사내 PC 그리드 활용</span>',
    ],
  },
];

const FeasibilityV7 = () => {
  return (
    <div className="v2-theme v2-container">
      <div className="v2-paper">

        <div className="hwp-section-title-tag">
          2. 실현 가능성 (Solution)_창업 아이템의 개발 계획
        </div>

        {/* ── 2-1. 3대 핵심 기술 ── */}
        <section>
          <h2 className="hwp-subsection-title">2-1. 제품·서비스의 개발/개선 방안 (3대 핵심 기술)</h2>

          <div className="v2-info-box" style={{ borderLeft: '4px solid #333', marginBottom: '1.5rem', backgroundColor: '#fcfcfc' }}>
            <p style={{ fontWeight: 'bold', margin: '0', fontSize: '1rem', wordBreak: 'keep-all', lineHeight: '1.6' }}>
              ▶ 신약 직접 발굴이 아닌, 글로벌 공개 AI 엔진을 망분리 온프레미스로 패키징해 제공하는 <strong>'인프라 건축가'</strong> 포지션을 취함. 모든 기술력을 해당 역량에 집중함.
            </p>
          </div>

          <p className="hwp-guide-text">
            ※ 3대 기술 격차 해소 방안: 자동화, 온프레미스, 그리드 병렬
          </p>

          <table className="hwp-table" style={{ marginBottom: '1.5rem' }}>
            <thead>
              <tr>
                <th style={{ width: '30%', backgroundColor: ACCENT }}>핵심 기술</th>
                <th style={{ backgroundColor: ACCENT }}>상세 설명</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="label">1. AI 신약개발 전주기<br/>글로벌 표준 엔진 탑재<br/>(Bio-MLOps 자동화)</td>
                <td style={{ lineHeight: '1.6', fontSize: '0.9rem' }}>
                  · AlphaFold 3·RoseTTAFold(구조 예측), DiffDock·NeuralPLexer(결합), RFdiffusion(물질 생성), OpenMM(물리 연산) 등 세계 최상위급 엔진을 코딩 지식 없이 구동 가능한 <strong>직관적 대시보드 UI/UX</strong>로 패키징.<br/>
                  · Docker 기반 자동 셋업 지원으로 연구자 진입 장벽 완전 격파.
                </td>
              </tr>
              <tr>
                <td className="label">2. 망 분리 &amp;<br/>온프레미스(On-premise)<br/>완결형 구축</td>
                <td style={{ lineHeight: '1.6', fontSize: '0.9rem' }}>
                  · 인터넷이 차단된 폐쇄망 사내 서버에 시스템을 독립 이식.<br/>
                  · 기존 SaaS AI의 <strong>신약 데이터 외부 서버 유출 리스크를 원천 차단</strong>하여 보수적인 제약사의 도입 문턱 해소.
                </td>
              </tr>
              <tr>
                <td className="label">3. 비용 절감 무기<br/>사내 폐쇄형 분산 그리드<br/>(Private Grid)</td>
                <td style={{ lineHeight: '1.6', fontSize: '0.9rem' }}>
                  · 수십억 원 대의 특수 슈퍼컴퓨터 구매 불필요.<br/>
                  · <strong>사내 망의 연구용 PC 수백 대 자원을 그리드로 통합</strong>하여 병렬 연산 수행. 독자 최적화 분산 처리 기능 내장.
                </td>
              </tr>
            </tbody>
          </table>

          <p className="hwp-guide-text">
            ※ 시각화: Bio-MLOps 파이프라인 핵심 결과물 (Storytelling)
          </p>

          <table className="hwp-table" style={{ marginBottom: '2rem', marginTop: '0.5rem' }}>
            <thead>
              <tr>
                <th style={{ backgroundColor: ACCENT }}>STEP 1: 타겟 단백질 구조 완벽 해독 (AlphaFold)</th>
                <th style={{ backgroundColor: ACCENT }}>STEP 2: 신약 후보 물질 결합 (DiffDock)</th>
                <th style={{ backgroundColor: ACCENT }}>STEP 3: 세상에 없던 신물질 창조 (RFdiffusion)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ textAlign: 'center', padding: '0.5rem' }}>
                  <div style={{ width: '100%', height: '220px', border: '1px solid #999', overflow: 'hidden' }}>
                    <img src={uiImage1} alt="타겟 단백질 구조 해독" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                </td>
                <td style={{ textAlign: 'center', padding: '0.5rem' }}>
                  <div style={{ width: '100%', height: '220px', border: '1px solid #999', overflow: 'hidden' }}>
                    <img src={uiImage2} alt="분자 도킹 가상 시뮬레이션" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                </td>
                <td style={{ textAlign: 'center', padding: '0.5rem' }}>
                  <div style={{ width: '100%', height: '220px', border: '1px solid #999', overflow: 'hidden' }}>
                    <img src={uiImage3} alt="생성형 AI 신약 디자인" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

        </section>

        {/* ── 2-2. 고객 요구사항 ── */}
        <section>
          <h2 className="hwp-subsection-title">2-2. 고객 요구사항 대응 방안</h2>

          <p className="hwp-guide-text">
            ※ 압도적 가성비·무결점 보안성으로 중소 제약사 수요 정조준.
          </p>

          {/* ★ ComparisonTable — 경쟁사 비교 */}
          <div style={{ marginBottom: '1.5rem', marginTop: '0.75rem' }}>
            <ComparisonTable
              headers={compHeaders}
              rows={compRows}
              highlightCol={3}
              accentColor={ACCENT}
            />
          </div>



          {/* 요구사항 대응 테이블 — 전체 너비 */}
          <table className="hwp-table" style={{ marginBottom: '2rem' }}>
            <thead>
              <tr>
                <th style={{ width: '22%', backgroundColor: ACCENT }}>요구사항 (핵심 문제)</th>
                <th style={{ backgroundColor: ACCENT }}>자사 솔루션 해결 방안</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="label">1. 비용 장벽<br/>(가성비)</td>
                <td style={{ lineHeight: '1.75', fontSize: '0.9rem' }}>
                  · 초기 구축비용 해외 엔진 대비 <strong>1/10 수준으로 절감.</strong><br/>
                  · 고도화 연산은 사내 PC 분산 그리딩으로 전기세 수준에서 타격 흡수.<br/>
                  · 글로벌 검증 모델 정기 업데이트 보증으로 최전선 유지.
                </td>
              </tr>
              <tr>
                <td className="label">2. 태생적 불안감<br/>(보안성)</td>
                <td style={{ lineHeight: '1.75', fontSize: '0.9rem' }}>
                  · AWS·GCP 등 외부 퍼블릭 클라우드로 1바이트도 유출되지 않음.<br/>
                  · <strong>사내 IP만 접근 가능한 100% 폐쇄 생태계</strong> 지원.
                </td>
              </tr>
            </tbody>
          </table>

        </section>

        {/* ── 2-3. 제품‧서비스의 차별화 방안 ── */}
        <section>
          <h2 className="hwp-subsection-title">2-3. 제품‧서비스의 차별화 방안</h2>

          <p className="hwp-guide-text">
            ※ 경쟁제품·서비스와의 비교를 통해 파악된 문제점에 대해 자사의 보유역량을 기반으로 경쟁력을 확보하기 위한 방안 등 기재
          </p>

          <table className="hwp-table" style={{ marginBottom: '1.5rem' }}>
            <thead>
              <tr>
                <th style={{ width: '22%', backgroundColor: ACCENT }}>경쟁사 문제점</th>
                <th style={{ width: '20%', backgroundColor: ACCENT }}>자사 보유역량</th>
                <th style={{ backgroundColor: ACCENT }}>차별화 방안 (경쟁력 확보)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="label">
                  해외 SaaS AI<br/>
                  <span style={{ fontSize: '0.82rem', fontWeight: 'normal' }}>외부 클라우드 강제 업로드로 인한 신약 데이터 유출 위험</span>
                </td>
                <td className="label">온프레미스 완결형 설치 기술</td>
                <td style={{ lineHeight: '1.75', fontSize: '0.9rem' }}>
                  · AI 모델 전체를 <strong>사내 폐쇄망 서버에 독립 설치</strong>하여 단 1바이트도 외부로 유출되지 않는 완전 망분리 환경을 구현함<br/>
                  · 보안 감사 이력(접근 로그) 자동 생성으로 GMP·ISMS 등 제약 규제 대응 지원함
                </td>
              </tr>
              <tr>
                <td className="label">
                  기존 CADD SW<br/>
                  <span style={{ fontSize: '0.82rem', fontWeight: 'normal' }}>CLI 기반 복잡한 설치·운영으로 전문 MLOps 인력 필수</span>
                </td>
                <td className="label">No-Code Web GUI 대시보드 개발 역량</td>
                <td style={{ lineHeight: '1.75', fontSize: '0.9rem' }}>
                  · AlphaFold·DiffDock·RFdiffusion 등 최상위 오픈소스 엔진을 <strong>마우스 클릭만으로 즉시 실행</strong> 가능한 직관적 UI/UX로 패키징함<br/>
                  · Docker 기반 원클릭 자동 셋업으로 IT 담당자 없이도 연구원이 직접 환경 구축 가능함
                </td>
              </tr>
              <tr>
                <td className="label">
                  퍼블릭 클라우드 AI<br/>
                  <span style={{ fontSize: '0.82rem', fontWeight: 'normal' }}>GPU 사용량 비례 고비용 청구로 중소기업 도입 불가</span>
                </td>
                <td className="label">사내 폐쇄형 분산 그리드(Private Grid) 기술</td>
                <td style={{ lineHeight: '1.75', fontSize: '0.9rem' }}>
                  · 별도 GPU 서버 구매 없이 <strong>사내 연구용 PC 수백 대의 유휴 자원을 병렬 통합</strong>하여 수십억 원 수준의 연산력을 전기세 수준 비용으로 활용함<br/>
                  · 해외 동급 솔루션 대비 <strong>초기 도입 비용 1/10 이하</strong> 실현(자체 추산)
                </td>
              </tr>
            </tbody>
          </table>

          <div className="v2-info-box" style={{ borderLeft: '4px solid #333', backgroundColor: '#fcfcfc' }}>
            <p style={{ fontWeight: 'bold', margin: '0', fontSize: '0.95rem', wordBreak: 'keep-all', lineHeight: '1.7' }}>
              ▶ 차별화 요약: <strong>보안(온프레미스) × 편의성(No-Code) × 가격(Grid)</strong> 3축 동시 충족은 현재 국내외 경쟁사 어느 곳도 달성하지 못한 영역임. 동사는 이 세 역량을 하나의 패키지로 통합 제공함으로써 중소 제약사·연구소 시장에서 독점적 지위를 확보함.
            </p>
          </div>

        </section>

      </div>
    </div>
  );
};

export default FeasibilityV7;
