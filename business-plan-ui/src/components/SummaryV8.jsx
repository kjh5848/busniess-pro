import React from 'react';
import uiImage from '../assets/3d 분자구조 UI.png';
import archImage from '../assets/architecture_diagram.png';

const ACCENT = '#dfe6f7';

/* ── 헤드라인 밴드 스타일 ── */
const bandStyle = {
  background: '#1e293b',
  color: '#fff',
  padding: '1.5rem 2rem',
  marginBottom: '1.8rem',
  position: 'relative',
};

const tagStyle = {
  display: 'inline-block',
  border: '1.5px solid #fff',
  padding: '0.2rem 0.7rem',
  fontSize: '0.78rem',
  fontWeight: '700',
  letterSpacing: '0.04em',
  marginRight: '0.5rem',
  marginTop: '0.5rem',
};

/* ── 키-밸류 카드 스타일 ── */
const kvCard = {
  border: '1.5px solid #000',
  padding: '0',
  display: 'flex',
  flexDirection: 'column',
};

const kvHeader = {
  backgroundColor: '#1e293b',
  color: '#fff',
  padding: '0.4rem 0.8rem',
  fontWeight: '700',
  fontSize: '0.85rem',
  fontFamily: 'var(--hwp-font-heading)',
};

const kvBody = {
  padding: '0.7rem 0.8rem',
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

        {/* ════════ 원페이지 헤드라인 밴드 ════════ */}
        <div style={bandStyle}>
          <div style={{ fontSize: '0.78rem', opacity: 0.7, marginBottom: '0.3rem', fontFamily: 'var(--hwp-font-heading)' }}>
            ITEM NAME
          </div>
          <div style={{ fontSize: '1.2rem', fontWeight: '700', lineHeight: '1.4', wordBreak: 'keep-all', fontFamily: 'var(--hwp-font-heading)' }}>
            중소 제약사용 보안형 온프레미스<br/>AI 신약개발 자동화·그리드 솔루션 (Bio-MLOps)
          </div>
          <div style={{ marginTop: '0.6rem', fontSize: '0.9rem', opacity: 0.9, lineHeight: '1.5' }}>
            "우수한 글로벌 AI가 쏟아져도 중소 제약사는 도입 불가 → <strong>보안 × 편의 × 가격</strong> 3축을 한 패키지로 해결하는 곡괭이(Infra) 비즈니스"
          </div>
          <div style={{ marginTop: '0.8rem' }}>
            <span style={tagStyle}>🔒 온프레미스 망분리</span>
            <span style={tagStyle}>⚡ No-Code 1-Click</span>
            <span style={tagStyle}>💰 Grid 비용 1/10</span>
          </div>
        </div>

        {/* ════════ 2×2 키-밸류 카드 그리드 ════════ */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>

          {/* 카드 1: 핵심기능 */}
          <div style={kvCard}>
            <div style={kvHeader}>1. 핵심기능</div>
            <div style={kvBody}>
              <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '0.4rem' }}>
                <span style={{ fontWeight: '700', minWidth: '1.4rem' }}>①</span>
                <span>알파폴드 등 최상위 오픈AI 원클릭 실행</span>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem' }}>
                <span style={{ fontWeight: '700', minWidth: '1.4rem' }}>②</span>
                <span>사내 PC 유휴자원 연계 분산연산(Grid)</span>
              </div>
            </div>
          </div>

          {/* 카드 2: 타겟 고객 */}
          <div style={kvCard}>
            <div style={kvHeader}>2. 타겟 고객</div>
            <div style={kvBody}>
              <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '0.4rem' }}>
                <span style={{ fontWeight: '700', minWidth: '1.4rem' }}>B2B</span>
                <span>MLOps 인력 없는 국내외 벤처·중견 제약사</span>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem' }}>
                <span style={{ fontWeight: '700', minWidth: '1.4rem' }}>B2C</span>
                <span>데이터 유출 우려 대학 연구소·개인 연구자</span>
              </div>
            </div>
          </div>

          {/* 카드 3: 차별성 3대 축 */}
          <div style={kvCard}>
            <div style={kvHeader}>3. 차별성 (3대 축)</div>
            <div style={kvBody}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.84rem' }}>
                <tbody>
                  <tr>
                    <td style={{ fontWeight: '700', padding: '0.3rem 0', width: '35%', borderBottom: '1px dashed #ccc' }}>보안 (온프레미스)</td>
                    <td style={{ padding: '0.3rem 0', borderBottom: '1px dashed #ccc' }}>기밀 유출 원천 차단</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: '700', padding: '0.3rem 0', borderBottom: '1px dashed #ccc' }}>편의 (No-Code)</td>
                    <td style={{ padding: '0.3rem 0', borderBottom: '1px dashed #ccc' }}>마우스 클릭만으로 AI 구동</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: '700', padding: '0.3rem 0' }}>가격 (Grid)</td>
                    <td style={{ padding: '0.3rem 0' }}>사내 PC 유휴자원 병렬 처리</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 카드 4: 판매전략 */}
          <div style={kvCard}>
            <div style={kvHeader}>4. 국내외 목표시장 & 판매전략</div>
            <div style={kvBody}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.84rem', lineHeight: '1.6' }}>
                <div style={{ border: '1.5px solid #000', padding: '0.4rem 0.6rem', fontWeight: '700', textAlign: 'center', minWidth: '60px', fontFamily: 'var(--hwp-font-heading)' }}>
                  1단계
                </div>
                <span style={{ fontSize: '1.1rem' }}>→</span>
                <span>B2C 저가 배포로 생태계 락인</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.84rem', lineHeight: '1.6', marginTop: '0.4rem' }}>
                <div style={{ border: '1.5px solid #000', padding: '0.4rem 0.6rem', fontWeight: '700', textAlign: 'center', minWidth: '60px', fontFamily: 'var(--hwp-font-heading)', backgroundColor: '#1e293b', color: '#fff' }}>
                  2단계
                </div>
                <span style={{ fontSize: '1.1rem' }}>→</span>
                <span>B2B 고단가 온프레미스 POC 돌입</span>
              </div>
            </div>
          </div>
        </div>

        {/* ════════ 개발단계 — 수평 프로그레스 ════════ */}
        <div style={{ border: '1.5px solid #000', marginBottom: '1.5rem' }}>
          <div style={{ backgroundColor: ACCENT, padding: '0.45rem 0.8rem', fontWeight: '700', fontSize: '0.88rem', fontFamily: 'var(--hwp-font-heading)', borderBottom: '1px solid #000' }}>
            5. 개발단계 — 현재 위치
          </div>
          <div style={{ display: 'flex', alignItems: 'stretch' }}>
            {[
              { step: '아이디어 기획', desc: 'B2C+B2B 하이브리드 BM 기획 완료', done: true },
              { step: '핵심기술 확보', desc: '오프라인 1-Click AI 자동화 스크립트 확보', done: true },
              { step: '시제품 제작', desc: 'B2C 클라우드 선배포 & B2B MVP 개발 중', done: false, current: true },
            ].map((item, i) => (
              <React.Fragment key={i}>
                {i > 0 && (
                  <div style={{ display: 'flex', alignItems: 'center', padding: '0 0.2rem', fontSize: '1.3rem', fontWeight: 'bold' }}>→</div>
                )}
                <div style={{
                  flex: 1,
                  padding: '0.7rem',
                  backgroundColor: item.current ? '#1e293b' : item.done ? '#f0f0f0' : '#fff',
                  color: item.current ? '#fff' : '#000',
                  borderRight: i < 2 ? 'none' : 'none',
                  position: 'relative',
                }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: '700', fontFamily: 'var(--hwp-font-heading)', marginBottom: '0.3rem' }}>
                    {item.done && !item.current ? '✓ ' : item.current ? '▶ ' : ''}{item.step}
                  </div>
                  <div style={{ fontSize: '0.78rem', lineHeight: '1.4', opacity: item.current ? 0.9 : 0.7 }}>
                    {item.desc}
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* ════════ 이미지 영역 ════════ */}
        <table className="hwp-table" style={{ marginTop: '0.5rem' }}>
          <thead>
            <tr><th colSpan={2} style={{ backgroundColor: ACCENT }}>6. 이미지 (참고사진 및 구조 설계도)</th></tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ width: '50%', textAlign: 'center', padding: '1rem' }}>
                <div style={{ width: '100%', height: '160px', overflow: 'hidden' }}>
                  <img src={uiImage} alt="비전문가 친화형 대시보드" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <div style={{ fontSize: '0.8rem', marginTop: '0.5rem', fontWeight: 'bold' }}>
                  &lt; 노코드(No-Code) AI 시뮬레이션 관리 대시보드 &gt;
                </div>
              </td>
              <td style={{ width: '50%', textAlign: 'center', padding: '1rem' }}>
                <div style={{ width: '100%', height: '160px', overflow: 'hidden' }}>
                  <img src={archImage} alt="망분리 아키텍처" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <div style={{ fontSize: '0.8rem', marginTop: '0.5rem', fontWeight: 'bold' }}>
                  &lt; 유출 제로(0) 온프레미스 망분리 및 사내 그리드 연산 아키텍처 &gt;
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
