import React from 'react';
import ArrowFlowLayout from '../shared/ui/ArrowFlowLayout';

const ACCENT = '#dfe6f7';

/* ── 주요 로드맵 ── */
const roadmapSteps = [
  { label: "'26 하반기 시스템 베타", sub: "활성 바이오 벤처 5곳 시범 도입" },
  { label: "'27 상반기 상용화 오픈", sub: "국내 중소 제약 시장 점유율 10%" },
  { label: "자금 확보 전략", sub: "바우처 공급기업 등록 및 Seed 유치" }
];

const GrowthV1 = () => {
  return (
    <div className="v2-theme v2-container">
      <div className="v2-paper">

        <div className="hwp-section-title-tag">
          3. 성장전략 (Scale-up)
        </div>

        {/* ══════════════════ 3-1. 수익화 모델 ══════════════════ */}
        <section>
          <h2 className="hwp-subsection-title">3-1. 창업 아이템의 비즈니스 모델(수익화 모델)</h2>

          {/* 인용구 강조 (개조식 치환) */}
          <div className="v2-info-box" style={{ borderLeft: '4px solid #1e293b', marginBottom: '1.5rem', backgroundColor: '#f8fafc', padding: '1rem' }}>
            <p style={{ fontWeight: 'bold', margin: '0', fontSize: '0.90rem', wordBreak: 'keep-all', lineHeight: '1.6' }}>
              ▶ <strong>초기 저항 축소:</strong> 저렴한 클라우드 서비스(웹) 버전 선행 제공으로 솔루션 효용성 사전 검증 유도<br/>
              ▶ <strong>프리미엄 락인(Lock-in):</strong> 검증 완료 고객 대상 고수익 데이터 보안 확보용 자체 구축형(폐쇄망) 패키지 최종 납품 확정
            </p>
          </div>

          <table className="hwp-table" style={{ marginBottom: '1.5rem', wordBreak: 'keep-all' }}>
            <thead>
              <tr>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '25%' }}>비즈니스 모델</th>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '25%' }}>타겟 및 성격</th>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '50%' }}>상세 내용</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="label" style={{ backgroundColor: ACCENT, fontWeight: '700', fontSize: '0.82rem', textAlign: 'center' }}>클라우드 서비스(웹) PoC<br/>(단기 구독형)</td>
                <td style={{ fontSize: '0.8rem', textAlign: 'center', fontWeight: 'bold' }}>미끼 상품 전략<br/><span style={{ fontSize: '0.75rem', fontWeight: 'normal', color: '#555' }}>(초기 성능 검증용)</span></td>
                <td style={{ fontSize: '0.8rem', lineHeight: '1.4' }}>시스템 성능 및 유효성 검증을 위한 저가형 단기 구독 서비스 라인업. 고객이 실제 연구 데이터로 플랫폼의 성능을 스스로 즉각 검증할 수 있는 통로 마련.</td>
              </tr>
              <tr>
                <td className="label" style={{ backgroundColor: ACCENT, fontWeight: '700', fontSize: '0.82rem', textAlign: 'center' }}>자체 구축형(폐쇄망) 통합 패키지</td>
                <td style={{ fontSize: '0.8rem', textAlign: 'center', fontWeight: 'bold' }}>메인 수익원<br/><span style={{ fontSize: '0.75rem', fontWeight: 'normal', color: '#555' }}>(중소 제약사 중심)</span></td>
                <td style={{ fontSize: '0.8rem', lineHeight: '1.4' }}>검증을 마친 중소 제약사를 타깃으로, 최적화된 저비용 하드웨어 랙(Rack) 및 소프트웨어 라이선스를 묶어 데이터 외부 유출이 차단된 상태로 납품.</td>
              </tr>
              <tr>
                <td className="label" style={{ backgroundColor: ACCENT, fontWeight: '700', fontSize: '0.82rem', textAlign: 'center' }}>유지보수 및 컨설팅 멤버십</td>
                <td style={{ fontSize: '0.8rem', textAlign: 'center', fontWeight: 'bold' }}>부가 수익<br/><span style={{ fontSize: '0.75rem', fontWeight: 'normal', color: '#555' }}>(연간 정기계약)</span></td>
                <td style={{ fontSize: '0.8rem', lineHeight: '1.4' }}>연간 기술 지원 정기 구독료 및 'AI 신약 개발 전문가 교육 과정' 연계를 통한 정기적 부가 수익 확보.</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* ══════════════════ 3-2. 로드맵 및 투자 ══════════════════ */}
        <section>
          <h2 className="hwp-subsection-title">3-2. 사업 전체 로드맵 및 투자유치 전략</h2>

          <div style={{ fontWeight: 'bold', fontSize: '0.85rem', marginBottom: '0.8rem', paddingLeft: '2px', fontFamily: 'var(--hwp-font-heading)' }}>
            ■ 주요 로드맵
          </div>
          <ArrowFlowLayout steps={roadmapSteps} accentColor={ACCENT} />
          <div style={{ height: '1.5rem' }}></div>

          <div style={{ fontWeight: 'bold', fontSize: '0.85rem', marginBottom: '0.5rem', paddingLeft: '2px', fontFamily: 'var(--hwp-font-heading)' }}>
            ■ 자금확보 전략 및 투자유치 3단계
          </div>
          <table className="hwp-table" style={{ marginBottom: '1rem', wordBreak: 'keep-all' }}>
            <tbody>
              <tr>
                <td className="label" style={{ backgroundColor: '#1e293b', color: '#fff', fontWeight: '700', fontSize: '0.8rem', width: '22%', textAlign: 'center' }}>1단계 (초기 자금)</td>
                <td style={{ fontSize: '0.8rem', lineHeight: '1.4' }}>
                  <strong>[예비창업패키지 자금 및 보증 기금 활용]</strong><br/>
                  최우선 과제인 MVP 아키텍처 구축과 초기 파이프라인(Boltz-2 등) 최적화를 위한 딥테크 인력 확보 및 관련 H/W(GPU) 자산 매입에 집중.
                </td>
              </tr>
              <tr>
                <td className="label" style={{ backgroundColor: '#1e293b', color: '#fff', fontWeight: '700', fontSize: '0.8rem', textAlign: 'center' }}>2단계 (스케일업)</td>
                <td style={{ fontSize: '0.8rem', lineHeight: '1.4' }}>
                  <strong>[AI 바우처 지원 사업 공급 기업 등록]</strong><br/>
                  가격 민감도가 높은 초기 바이오 벤처가 클라우드 서비스(웹) PoC로 쉽게 유입될 수 있도록 정부 바우처 정책 자금을 전략적으로 흡수 및 활용.
                </td>
              </tr>
              <tr>
                <td className="label" style={{ backgroundColor: '#1e293b', color: '#fff', fontWeight: '700', fontSize: '0.8rem', textAlign: 'center' }}>3단계 (본격 성장)</td>
                <td style={{ fontSize: '0.8rem', lineHeight: '1.4' }}>
                  <strong>[초기 Seed 투자 유치 달성]</strong><br/>
                  연내 확보한 베타 테스터(5곳 이상)의 B2B 실증 성공 사례(레퍼런스)를 기반으로 Seed 투자를 선점하고, 폐쇄형 자체 구축형(폐쇄망) 기업 시장에 공격적으로 진입.
                </td>
              </tr>
            </tbody>
          </table>
        </section>

      </div>
    </div>
  );
};

export default GrowthV1;
