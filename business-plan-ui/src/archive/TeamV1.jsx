import React from 'react';

const TeamV1 = () => {
  return (
    <div className="v2-theme v2-container" style={{ paddingBottom: '4rem' }}>
      <div className="v2-paper">
        
        <div className="hwp-section-title-tag">
          4. 팀 구성 (Team)_대표자 및 팀원 구성 계획
        </div>

        {/* ══════════════════ 4-1. 대표자 현황 및 보유 역량 ══════════════════ */}
        <section>
          <h2 className="hwp-subsection-title">4-1. 대표자 현황 및 보유 역량</h2>

          <div style={{ fontWeight: 'bold', fontSize: '0.85rem', marginBottom: '0.5rem', paddingLeft: '2px', fontFamily: 'var(--hwp-font-heading)' }}>
            ■ 대표자 핵심 보유 역량 (기술력, 노하우, 유사 경험)
          </div>
          <table className="hwp-table" style={{ marginBottom: '1.2rem' }}>
            <tbody>
              <tr>
                <td className="label" style={{ backgroundColor: '#1e293b', color: '#fff', fontWeight: '700', fontSize: '0.8rem', width: '20%', textAlign: 'center' }}>주요 학력/전공</td>
                <td style={{ fontSize: '0.8rem', lineHeight: '1.5', paddingLeft: '1rem', width: '30%' }}>OO대학교 계산화학 전공 (석사)<br/>컴퓨터공학 복수전공</td>
                <td className="label" style={{ backgroundColor: '#1e293b', color: '#fff', fontWeight: '700', fontSize: '0.8rem', width: '20%', textAlign: 'center' }}>경영 능력/네트워크</td>
                <td style={{ fontSize: '0.8rem', lineHeight: '1.5', paddingLeft: '1rem', width: '30%' }}>의료/바이오 산학협력 네트워크 30곳 보유<br/>엔젤투자 5천만원 유치(경영능력 입증)</td>
              </tr>
              <tr>
                <td className="label" style={{ backgroundColor: '#1e293b', color: '#fff', fontWeight: '700', fontSize: '0.8rem', textAlign: 'center' }}>창업 아이템<br/>구현 기술력</td>
                <td colSpan={3} style={{ fontSize: '0.8rem', lineHeight: '1.6', paddingLeft: '1rem' }}>
                  · <strong>[개발능력]</strong> SOTA 단백질 예측 모델(Boltz-2) 및 물리 시뮬레이션(OpenFE) 엔진 파이프라인 단독 연동 개발 가능 (Full-stack MLOps 역량 보유)<br/>
                  · <strong>[노하우]</strong> 기존 상용 솔루션(Schrödinger FEP+)의 한계점을 실무에서 경험하여, 'No-Code + 사내망'이라는 해결책(Pain-killer) 도출
                </td>
              </tr>
              <tr>
                <td className="label" style={{ backgroundColor: '#1e293b', color: '#fff', fontWeight: '700', fontSize: '0.8rem', textAlign: 'center' }}>유사 경험 및<br/>주요 실적</td>
                <td colSpan={3} style={{ fontSize: '0.8rem', lineHeight: '1.6', paddingLeft: '1rem' }}>
                  · <strong>[정부지원사업]</strong> 202X년 공공데이터 활용 창업경진대회 수상 (AI 기반 신약 스크리닝 알고리즘) 등 정부 주관 사업 우수 수행 이력 보유<br/>
                  · <strong>[교육 이수]</strong> 실리콘밸리 K-Innovation MLOps 과정 이수 완료 (대규모 병렬 처리 아키텍처 수료)
                </td>
              </tr>
            </tbody>
          </table>
          <div style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '-0.8rem', marginBottom: '2rem' }}>
            * 관련 증빙: [별첨1] 대표자 학위증명서, [별첨2] 투자유치확인서, [별첨3] 수상/수료증 사본 참조
          </div>
        </section>

        {/* ══════════════════ 4-2. 창업기업 팀원 현황 및 역량 ══════════════════ */}
        <section>
          <h2 className="hwp-subsection-title">4-2. 창업기업 팀원 현황 및 역량 (시설·장비 포함)</h2>
          
          <div style={{ fontWeight: 'bold', fontSize: '0.85rem', marginBottom: '0.5rem', paddingLeft: '2px', fontFamily: 'var(--hwp-font-heading)' }}>
            ■ 팀에서 보유 중인 인프라 (장비·시설)
          </div>
          <table className="hwp-table" style={{ marginBottom: '1.2rem' }}>
            <thead>
              <tr style={{ backgroundColor: '#e2e2e2', borderBottom: '1px solid #000' }}>
                <th style={{ padding: '0.5rem', borderRight: '1px solid #000', width: '25%', fontWeight: '700', color: '#000' }}>구분</th>
                <th style={{ padding: '0.5rem', borderRight: '1px solid #000', width: '50%', fontWeight: '700', color: '#000' }}>보유 현황 및 사양</th>
                <th style={{ padding: '0.5rem', width: '25%', fontWeight: '700', color: '#000' }}>확보/활용 방안</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '0.5rem', borderRight: '1px solid #000', textAlign: 'center', fontWeight: 'bold' }}>전용 연구 시설</td>
                <td style={{ padding: '0.5rem', borderRight: '1px solid #000', fontSize: '0.8rem', lineHeight: '1.4' }}>OO대학교 산학협력단 내 보안형 단독 오피스 (15평) 구축 완료</td>
                <td style={{ padding: '0.5rem', fontSize: '0.8rem', textAlign: 'center' }}>보육센터 무상 임차<br/>(폐쇄망 테스트 베드 활용)</td>
              </tr>
              <tr>
                <td style={{ padding: '0.5rem', borderRight: '1px solid #000', textAlign: 'center', fontWeight: 'bold' }}>AI 시뮬레이션 장비</td>
                <td style={{ padding: '0.5rem', borderRight: '1px solid #000', fontSize: '0.8rem', lineHeight: '1.4' }}>엔비디아 RTX 4090 (24GB) 2-Way 워크스테이션 1대 (초기 훈련용)</td>
                <td style={{ padding: '0.5rem', fontSize: '0.8rem', textAlign: 'center' }}>자기자본 기 매입<br/>(MVP 파이프라인 구동)</td>
              </tr>
            </tbody>
          </table>

          <div style={{ fontWeight: 'bold', fontSize: '0.85rem', marginBottom: '0.5rem', paddingLeft: '2px', fontFamily: 'var(--hwp-font-heading)' }}>
            ■ 직원 역량 및 신규 채용 계획 (협약기간 내 채용)
          </div>
           <table className="hwp-table" style={{ marginBottom: '2rem' }}>
            <thead>
              <tr style={{ backgroundColor: '#1e293b', color: '#fff' }}>
                <th style={{ padding: '0.5rem', borderRight: '1px solid #ccc', width: '15%', fontWeight: '500' }}>구분</th>
                <th style={{ padding: '0.5rem', borderRight: '1px solid #ccc', width: '20%', fontWeight: '500' }}>역할 및 주특기</th>
                <th style={{ padding: '0.5rem', borderRight: '1px solid #ccc', width: '50%', fontWeight: '500' }}>보유 역량 (경력·노하우 등)</th>
                <th style={{ padding: '0.5rem', width: '15%', fontWeight: '500' }}>참여/채용 시기</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '0.6rem', borderRight: '1px solid #000', textAlign: 'center', fontWeight: 'bold' }}>대표자<br/>(내부인력)</td>
                <td style={{ padding: '0.6rem', borderRight: '1px solid #000', fontSize: '0.8rem', textAlign: 'center' }}>파이프라인 백엔드 구축<br/><span style={{color: '#c0392b', fontWeight: 'bold'}}>[아키텍트]</span></td>
                <td style={{ padding: '0.6rem', borderRight: '1px solid #000', fontSize: '0.8rem', lineHeight: '1.5' }}>볼츠(Boltz-2) 분산 처리 및 CLI 컨테이너화 설계 전담. 수만 건의 결합 계산 최적화 노하우 보유.</td>
                <td style={{ padding: '0.6rem', fontSize: '0.8rem', textAlign: 'center', fontWeight: 'bold', color: '#2563eb' }}>100% (기존)</td>
              </tr>
              <tr>
                <td style={{ padding: '0.6rem', borderRight: '1px solid #000', textAlign: 'center', fontWeight: 'bold', backgroundColor: '#f8fafc' }}>AI 연구원<br/>(신규채용예정)</td>
                <td style={{ padding: '0.6rem', borderRight: '1px solid #000', fontSize: '0.8rem', textAlign: 'center', backgroundColor: '#f8fafc' }}>시뮬레이션 정밀 검수<br/><span style={{color: '#2563eb', fontWeight: 'bold'}}>[계산화학 도메인]</span></td>
                <td style={{ padding: '0.6rem', borderRight: '1px solid #000', fontSize: '0.8rem', lineHeight: '1.5', backgroundColor: '#f8fafc' }}>
                  · <strong>요구역량:</strong> 구조생물학 및 계산화학 석사 이상 (FEP+ 사용 경험자 우대)<br/>
                  · <strong>주요업무:</strong> 분자역학(MD) 엣지 케이스 처리 및 OpenFE 결합 자유에너지(PMF) 결과 데이터 품질 통제
                </td>
                <td style={{ padding: '0.6rem', fontSize: '0.8rem', textAlign: 'center', fontWeight: 'bold', color: '#2563eb', backgroundColor: '#f8fafc' }}>
                  '26. 06월 채용<br/>(인건비 집행)
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* ══════════════════ 4-3. 파트너·협력 기관 현황 ══════════════════ */}
        <section>
          <h2 className="hwp-subsection-title">4-3. 업무 파트너 (협력 기관/기업) 현황 및 활용 방안</h2>

          <div style={{
            background: '#1e293b', color: '#fff', padding: '0.5rem 0.8rem',
            marginBottom: '1rem', lineHeight: '1.5', fontWeight: '700',
            fontSize: '0.88rem', wordBreak: 'keep-all',
          }}>
            ▶ 딥테크(핵심기술)는 자체 소화하되, 비전문 영역인 <span style={{ color: '#60a5fa' }}>'프론트엔드 UI'와 '인프라 조달'은 우수한 외부 파트너십을 적극 활용</span>하여 제품 상용화 기간(Time-to-Market)을 극단적으로 단축함.
          </div>

          <table className="hwp-table" style={{ marginBottom: '1.2rem' }}>
            <thead>
              <tr style={{ backgroundColor: '#e2e2e2', borderBottom: '1px solid #000' }}>
                <th style={{ padding: '0.5rem', borderRight: '1px solid #000', width: '25%', fontWeight: '700', color: '#000' }}>협력 기관명 (사업체)</th>
                <th style={{ padding: '0.5rem', borderRight: '1px solid #000', width: '20%', fontWeight: '700', color: '#000' }}>파트너 보유 역량</th>
                <th style={{ padding: '0.5rem', width: '55%', fontWeight: '700', color: '#000' }}>구체적 협력 내용 및 활용 방안</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '0.6rem', borderRight: '1px solid #000', textAlign: 'center' }}>
                  <div style={{ fontWeight: 'bold', fontSize: '0.9rem', color: '#c0392b' }}>OO 크리에이티브</div>
                  <div style={{ fontSize: '0.75rem', color: '#666', marginTop: '0.2rem' }}>(웹 퍼블리싱/UI 외주사)</div>
                </td>
                <td style={{ padding: '0.6rem', borderRight: '1px solid #000', fontSize: '0.8rem', textAlign: 'center', lineHeight: '1.4' }}>B2B SaaS 전문<br/>React 프론트 구축</td>
                <td style={{ padding: '0.6rem', fontSize: '0.8rem', lineHeight: '1.6' }}>
                  · <strong>[협력 내용]</strong> CLI 형태의 당사 엔진을 조작할 수 있는 직관적인 No-Code 웹 대시보드 화면 턴키(Turn-key) 외주 제작 수행<br/>
                  · <strong>[활용 방안]</strong> 정부지원금(외주용역비 2,000만원)을 활용해 정식계약 체결 예정 ('26. 06)
                </td>
              </tr>
              <tr>
                <td style={{ padding: '0.6rem', borderRight: '1px solid #000', textAlign: 'center' }}>
                  <div style={{ fontWeight: 'bold', fontSize: '0.9rem', color: '#2563eb' }}>OO 클라우드 벤처지원</div>
                  <div style={{ fontSize: '0.75rem', color: '#666', marginTop: '0.2rem' }}>(IT 인프라 파트너)</div>
                </td>
                <td style={{ padding: '0.6rem', borderRight: '1px solid #000', fontSize: '0.8rem', textAlign: 'center', lineHeight: '1.4' }}>초대규모 GPU 연산<br/>분산 서버 임대망</td>
                <td style={{ padding: '0.6rem', fontSize: '0.8rem', lineHeight: '1.6' }}>
                  · <strong>[협력 내용]</strong> SaaS PoC 서비스를 위한 초기 베타 서버(GPU 인스턴스) 크레딧 무상 지원 및 보안 아키텍처 자문<br/>
                  · <strong>[활용 방안]</strong> 스타트업 지원 프로그램 파트너십이 체결되어 무상 리소스 확보 ('26. 04 초기 적용)
                </td>
              </tr>
              <tr>
                <td style={{ padding: '0.6rem', borderRight: '1px solid #000', textAlign: 'center' }}>
                  <div style={{ fontWeight: 'bold', fontSize: '0.9rem', color: '#16a34a' }}>한국산학연협회 전문위원</div>
                  <div style={{ fontSize: '0.75rem', color: '#666', marginTop: '0.2rem' }}>(학계 자문단)</div>
                </td>
                <td style={{ padding: '0.6rem', borderRight: '1px solid #000', fontSize: '0.8rem', textAlign: 'center', lineHeight: '1.4' }}>AI 신약개발 분야<br/>학술적 타당성 검토</td>
                <td style={{ padding: '0.6rem', fontSize: '0.8rem', lineHeight: '1.6' }}>
                  · <strong>[협력 내용]</strong> 개발된 알고리즘의 SCI급 저널 등재 논문 대비 예측 정확성(Accuracy) 비교 및 정밀 물리 시뮬레이션(FEP) 튜닝 자문<br/>
                  · <strong>[활용 방안]</strong> 분기별 기술 자문 계약 체결 후 성능 고도화 피드백 루프 가동
                </td>
              </tr>
            </tbody>
          </table>
        </section>

      </div>
    </div>
  );
};

export default TeamV1;
