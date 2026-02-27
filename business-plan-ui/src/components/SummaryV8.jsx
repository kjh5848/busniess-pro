import React from 'react';
import uiImage from '../assets/3d 분자구조 UI.png';
import archImage from '../assets/architecture_diagram.png';

const ACCENT = '#dfe6f7';

/* ── 공통 스타일 ── */
const sectionBorder = {
  border: '1.5px solid #000',
  marginBottom: '0.8rem',
};

const sectionHeader = {
  backgroundColor: '#1e293b',
  color: '#fff',
  padding: '0.4rem 0.8rem',
  fontWeight: '700',
  fontSize: '0.85rem',
  fontFamily: 'var(--hwp-font-heading)',
  borderBottom: '1.5px solid #000',
};

const sectionBody = {
  padding: '0.6rem 0.8rem',
  fontSize: '0.88rem',
  lineHeight: '1.65',
};

const SummaryV8 = () => {
  return (
    <div className="v2-theme v2-container" style={{ marginBottom: '2rem' }}>
      <div className="v2-paper">

        <div className="hwp-section-title" style={{ marginBottom: '1rem' }}>
          예비창업패키지 예비창업자 사업계획서
        </div>

        <h1 className="hwp-checkbox-section">창업아이템 개요(요약)</h1>

        {/* ════════ 1열 개조식 테이블 ════════ */}
        <table className="hwp-table" style={{ tableLayout: 'fixed', width: '100%' }}>
          <colgroup>
            <col style={{ width: '18%' }} />
            <col style={{ width: '82%' }} />
          </colgroup>
          <tbody>
            {/* ① 창업아이템 소개 — 핵심기능, 소비자층, 사용처 통합 */}
            <tr>
              <td style={{ backgroundColor: '#1e293b', color: '#fff', fontWeight: '700', fontSize: '0.85rem', fontFamily: 'var(--hwp-font-heading)', textAlign: 'center', verticalAlign: 'middle', padding: '0.6rem 0.5rem' }}>
                창업아이템<br />소개
              </td>
              <td style={{ padding: '0.6rem 0.8rem', fontSize: '0.88rem', lineHeight: '1.7' }}>
                <div style={{ fontWeight: '700', fontSize: '0.92rem', fontFamily: 'var(--hwp-font-heading)', marginBottom: '0.3rem' }}>
                  실험 연구자 친화형 약물·펩타이드 디자인 AI 파이프라인 자동화 플랫폼
                </div>
                <div>• <strong>[핵심기능]</strong> AlphaFold·RFdiffusion·DiffDock 등 약물·펩타이드 디자인 오픈소스 AI를 <strong>No-Code 원클릭</strong>으로 자동 실행</div>
                <div>• <strong>[핵심기능]</strong> 사내 PC 유휴자원 연계 <strong>그리드 분산연산</strong> → GPU 비용 1/10 절감</div>
                <div>• <strong>[핵심기능]</strong> <strong>온프레미스 망분리</strong> 배포 → 기밀 연구 데이터 유출 원천 차단</div>
                <div>• <strong>[소비자층]</strong> AI·MLOps 전문인력 없는 국내외 벤처·중견 <strong>제약사</strong>(B2B), 대학 연구소·개인 <strong>연구자</strong>(B2C)</div>
                <div>• <strong>[사용처]</strong> 단백질 구조 예측, 약물 후보물질 도킹, 펩타이드 서열 설계 등 AI 기반 약물·펩타이드 디자인 파이프라인 실행</div>
              </td>
            </tr>

            {/* ② 창업아이템의 차별성 */}
            <tr>
              <td style={{ backgroundColor: '#1e293b', color: '#fff', fontWeight: '700', fontSize: '0.85rem', fontFamily: 'var(--hwp-font-heading)', textAlign: 'center', verticalAlign: 'middle', padding: '0.6rem 0.5rem' }}>
                창업아이템의<br />차별성
              </td>
              <td style={{ padding: '0.6rem 0.8rem', fontSize: '0.88rem', lineHeight: '1.7' }}>
                <div>• 🔒 <strong>보안</strong> — Benchling·Schrödinger 등 경쟁 플랫폼 대비 유일한 온프레미스 망분리 지원</div>
                <div>• ⚡ <strong>편의</strong> — 코딩 없이 마우스 클릭만으로 AI 파이프라인 구동 (No-Code UI), 실험 연구자도 즉시 사용</div>
                <div>• 💰 <strong>가격</strong> — 사내 PC 유휴자원 병렬 처리(Grid)로 클라우드 GPU 대비 연산 비용 1/10 절감</div>
                <div>• <strong>[보유역량]</strong> 대표자 AI·MLOps 실무 경력 기반 핵심기술 자체 확보, 글로벌 오픈소스 활용 빠른 개발</div>
              </td>
            </tr>

            {/* ③ 개발단계 */}
            <tr>
              <td style={{ backgroundColor: '#1e293b', color: '#fff', fontWeight: '700', fontSize: '0.85rem', fontFamily: 'var(--hwp-font-heading)', textAlign: 'center', verticalAlign: 'middle', padding: '0.6rem 0.5rem' }}>
                개발단계
              </td>
              <td style={{ padding: '0.6rem 0.8rem', fontSize: '0.88rem', lineHeight: '1.7' }}>
                <div>• ✓ 아이디어 기획 — B2C+B2B 하이브리드 BM 기획 완료</div>
                <div>• ✓ 핵심기술 확보 — AI 파이프라인 원클릭 자동화 스크립트 확보</div>
                <div>• <strong>▶ 시제품 제작 중</strong> — B2C 클라우드 버전 선배포 &amp; B2B 온프레미스 MVP 개발 진행</div>
              </td>
            </tr>

            {/* ④ 국내외 목표시장 */}
            <tr>
              <td style={{ backgroundColor: '#1e293b', color: '#fff', fontWeight: '700', fontSize: '0.85rem', fontFamily: 'var(--hwp-font-heading)', textAlign: 'center', verticalAlign: 'middle', padding: '0.6rem 0.5rem' }}>
                국내외<br />목표시장
              </td>
              <td style={{ padding: '0.6rem 0.8rem', fontSize: '0.88rem', lineHeight: '1.7' }}>
                <div>• <strong>[국내]</strong> AI 약물 디자인 도입 희망 중소·벤처 제약사 및 대학 연구실</div>
                <div>• <strong>[해외]</strong> 동남아·일본 등 아시아권 중소 바이오텍</div>
                <div>• <strong>[판매전략]</strong> 1단계('26) B2C 무료·저가 배포 락인 → 2단계('27) B2B 기업 POC → 3단계('28) 아시아 확장</div>
              </td>
            </tr>

            {/* ⑤ 이미지 */}
            <tr>
              <td style={{ backgroundColor: '#1e293b', color: '#fff', fontWeight: '700', fontSize: '0.85rem', fontFamily: 'var(--hwp-font-heading)', textAlign: 'center', verticalAlign: 'middle', padding: '0.6rem 0.5rem' }}>
                이미지
              </td>
              <td style={{ padding: '0.8rem' }}>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ flex: 1, textAlign: 'center' }}>
                    <div style={{ width: '100%', height: '140px', overflow: 'hidden' }}>
                      <img src={uiImage} alt="비전문가 친화형 대시보드" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                    <div style={{ fontSize: '0.75rem', marginTop: '0.3rem', fontWeight: 'bold', color: '#475569' }}>
                      &lt; 노코드(No-Code) AI 관리 대시보드 &gt;
                    </div>
                  </div>
                  <div style={{ flex: 1, textAlign: 'center' }}>
                    <div style={{ width: '100%', height: '140px', overflow: 'hidden' }}>
                      <img src={archImage} alt="망분리 아키텍처" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                    <div style={{ fontSize: '0.75rem', marginTop: '0.3rem', fontWeight: 'bold', color: '#475569' }}>
                      &lt; 온프레미스 망분리 + 그리드 아키텍처 &gt;
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default SummaryV8;
