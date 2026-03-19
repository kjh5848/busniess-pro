import React from 'react';
import uiImage from '../assets/3d 분자구조 UI.png';
import archImage from '../assets/architecture_diagram.png';

const ACCENT = '#dfe6f7';

/* ── 공통 스타일 ── */


const SummaryV1 = () => {
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
                  중소 제약사의 라이선스 비용 및 보안 문제를 해결하는 파운데이션 모델 기반 고정밀 하이브리드 단백질 표적 신약 설계 통합 플랫폼
                </div>
                <div>• <strong>[핵심기능]</strong> 표적 단백질 3D 구조 예측 AI 모델(<strong>Boltz-2</strong>)과 단백질-리간드 결합력을 정밀 검증하는 물리 기반 시뮬레이션(<strong>OpenFE</strong>)을 결합</div>
                <div>• <strong>[접근성]</strong> 파운데이션 모델(Foundation Model) 기반 최신 기술 진입 장벽을 낮추는 <strong>연구자 친화적 GUI 대시보드</strong> 제공</div>
                <div>• <strong>[보안성]</strong> 클라우드 사용 시의 기밀 데이터 보안 문제를 원천 차단하는 <strong>웹 기반 GUI 대시보드(SaaS) 및 폐쇄형 온프레미스 소프트웨어 패키지</strong></div>
                <div>• <strong>[인프라]</strong> 소비자용 GPU(<strong>RTX 4090</strong>)에 최적화된 패키징으로 인프라 구축 비용 절감</div>
              </td>
            </tr>

            {/* ② 창업아이템의 차별성 */}
            <tr>
              <td style={{ backgroundColor: '#1e293b', color: '#fff', fontWeight: '700', fontSize: '0.85rem', fontFamily: 'var(--hwp-font-heading)', textAlign: 'center', verticalAlign: 'middle', padding: '0.6rem 0.5rem' }}>
                창업아이템의<br />차별성
              </td>
              <td style={{ padding: '0.6rem 0.8rem', fontSize: '0.88rem', lineHeight: '1.7' }}>
                <div>• 🔒 <strong>보안</strong> — 완전 폐쇄형 구축을 통한 데이터 기밀 유지 완벽 보장</div>
                <div>• ⚡ <strong>효율</strong> — 고속 스크리닝과 정밀 검증을 결합하여 신약 물질 발굴 개발 기간 획기적 단축</div>
                <div>• 💰 <strong>가성비</strong> — 수억 원 대 글로벌 표준 솔루션 대비 라이선스 절감 및 RTX 4090 기반 패키징 최적화 도입 비용 절감</div>
                <div>• <strong>[보유역량]</strong> 계산화학 도메인 전문성과 MLOps 풀스택 개발 역량을 지원하는 <strong>1인 창업자</strong> 주축 + 도메인 특화 <strong>딥테크 AI 연구원</strong> 신규 채용 기반 소수정예 R&D 팀 구성</div>
              </td>
            </tr>

            {/* ③ 개발단계 */}
            <tr>
              <td style={{ backgroundColor: '#1e293b', color: '#fff', fontWeight: '700', fontSize: '0.85rem', fontFamily: 'var(--hwp-font-heading)', textAlign: 'center', verticalAlign: 'middle', padding: '0.6rem 0.5rem' }}>
                개발단계
              </td>
              <td style={{ padding: '0.6rem 0.8rem', fontSize: '0.88rem', lineHeight: '1.7' }}>
                <div>• ✓ 시스템 아키텍처 및 하이브리드 결합 모델 검증 완료</div>
                <div>• <strong>▶ 시제품 제작 중</strong> — SaaS 기반 웹 대시보드 형태의 PoC 서비스 릴리즈 준비 중 &amp; B2B 온프레미스 패키징 진행 단계</div>
              </td>
            </tr>

            {/* ④ 국내외 목표시장 */}
            <tr>
              <td style={{ backgroundColor: '#1e293b', color: '#fff', fontWeight: '700', fontSize: '0.85rem', fontFamily: 'var(--hwp-font-heading)', textAlign: 'center', verticalAlign: 'middle', padding: '0.6rem 0.5rem' }}>
                성장<br />전략
              </td>
              <td style={{ padding: '0.6rem 0.8rem', fontSize: '0.88rem', lineHeight: '1.7' }}>
                <div>• <strong>[단기 전략]</strong> SaaS 기반 PoC 서비스 미끼 상품 전략으로 접근성 향상, 유효 검증 확보</div>
                <div>• <strong>[중장기 전략]</strong> 검증 완료 후 기밀 <strong>데이터 보안이 보장된 온프레미스 솔루션 정식 도입 유도</strong></div>
                <div>• <strong>[자금 조달 전략]</strong> 정부 지원(AI 바우처) 연계 및 Seed 투자 유치 활동 전개 추진</div>
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

export default SummaryV1;
