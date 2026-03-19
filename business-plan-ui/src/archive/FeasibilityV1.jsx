import React from 'react';
import { ArrowRight, Lock, Database, PlayCircle, Layers, Fingerprint, ServerOff } from 'lucide-react';

const FeasibilityV1 = () => {
  return (
    <div className="v2-theme v2-container">
      <div className="v2-paper animate-fade-in delay-100">

        <div className="hwp-section-title-tag">
          2. 실현 가능성 (Solution)
        </div>
        <h1 className="v2-section-title">
          2. 실현 가능성 (Solution)_창업 아이템의 개발 계획
        </h1>

        {/* ══════════════════ 2-1. 개발/개선 방안 ══════════════════ */}
        <section>
          <h2 className="v2-sub-title">2-1. 아이디어를 제품·서비스로 개발 또는 구체화 계획</h2>

          <div className="v2-info-box" style={{ borderLeft: '4px solid var(--hwp-black)', marginBottom: '1.2rem', backgroundColor: 'var(--hwp-vlight)' }}>
            <p style={{ fontWeight: 'bold', margin: '0', fontSize: '0.9rem', wordBreak: 'keep-all', lineHeight: '1.6', color: 'var(--hwp-black)' }}>
              ▶ <strong>기존 독점 구조 타파:</strong> 천문학적 라이선스 비용으로 대형 제약사만 독점하던 기존 IT 설계 시스템의 불평등 구조 원천 해소<br/>
              ▶ <strong>보안 종속 완비형 시스템 제공:</strong> 최상위 AI(Boltz-2) 및 초정밀 시뮬레이션(OpenFE) 통합 아키텍처를 기반으로, No-Code 클릭만으로 폐쇄 사내망에서 구동되는 독립형 인프라 배포
            </p>
          </div>

          <div style={{ fontWeight: 'bold', fontSize: '0.85rem', marginBottom: '0.5rem', paddingLeft: '2px', fontFamily: 'var(--hwp-font-heading)' }}>
            가. 개발 아이템의 핵심 아키텍처 및 차별적 가치 제안
          </div>

          {/* ── 아키텍처 다이어그램 (CSS 기반 시각화) ── */}
          <div style={{
            border: '2px solid var(--hwp-black)', padding: '1.2rem', marginBottom: '1rem',
            backgroundColor: 'var(--hwp-white)', display: 'flex', flexDirection: 'column', gap: '1rem'
          }}>
            <div style={{ fontWeight: 'bold', fontSize: '0.85rem', color: 'var(--hwp-black)', borderBottom: '1px solid var(--hwp-vlight)', paddingBottom: '0.5rem' }}>
              [그림 1] 최첨단 AI 예측 모델(Boltz-2) + 물리 시뮬레이션(OpenFE) 하이브리드 파이프라인 구조도
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', textAlign: 'center' }}>
              {/* Step 1 */}
              <div style={{ flex: 1, border: '1px solid var(--hwp-vlight)', backgroundColor: 'var(--hwp-vlight)', padding: '1rem' }}>
                <Layers size={21} color="var(--hwp-dark)" style={{ margin: '0 auto 0.5rem' }} />
                <div style={{ fontWeight: 'bold', fontSize: '0.75rem', color: 'var(--hwp-black)' }}>초대규모 화합물 DB</div>
                <div style={{ fontSize: '0.65rem', color: 'var(--hwp-gray)', marginTop: '0.3rem' }}>수십억 개의 물질 데이터</div>
              </div>
              <ArrowRight size={18} color="var(--hwp-light)" />
              {/* Step 2 */}
              <div style={{ flex: 1.2, border: '2px solid var(--hwp-dark)', backgroundColor: 'var(--hwp-white)', padding: '1rem', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)', background: 'var(--hwp-dark)', color: 'var(--hwp-white)', fontSize: '0.6rem', padding: '2px 8px', fontWeight: 'bold', whiteSpace: 'nowrap' }}>1,000배 압축</div>
                <PlayCircle size={21} color="var(--hwp-dark)" style={{ margin: '0 auto 0.5rem' }} />
                <div style={{ fontWeight: 'bold', fontSize: '0.75rem', color: 'var(--hwp-dark)' }}>Boltz-2 (최첨단 AI 예측 모델)</div>
                <div style={{ fontSize: '0.65rem', color: 'var(--hwp-dark)', marginTop: '0.3rem' }}>단백질 3D 구조 1차 초고속 예측</div>
              </div>
              <ArrowRight size={18} color="var(--hwp-light)" />
              {/* Step 3 */}
              <div style={{ flex: 1.2, border: '2px solid var(--hwp-dark)', backgroundColor: 'var(--hwp-white)', padding: '1rem', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)', background: 'var(--hwp-dark)', color: 'var(--hwp-white)', fontSize: '0.6rem', padding: '2px 8px', fontWeight: 'bold', whiteSpace: 'nowrap' }}>AI 치명적 오류 파괴</div>
                <Fingerprint size={21} color="var(--hwp-dark)" style={{ margin: '0 auto 0.5rem' }} />
                <div style={{ fontWeight: 'bold', fontSize: '0.75rem', color: 'var(--hwp-gray)' }}>OpenFE (초정밀 물리 시뮬레이션)</div>
                <div style={{ fontSize: '0.65rem', color: 'var(--hwp-dark)', marginTop: '0.3rem' }}>단백질 결합 확률 초정밀 검증</div>
              </div>
              <ArrowRight size={18} color="var(--hwp-light)" />
              {/* Step 4 */}
              <div style={{ flex: 1, border: '1px solid var(--hwp-vlight)', backgroundColor: 'var(--hwp-vlight)', padding: '1rem' }}>
                <Database size={21} color="var(--hwp-light)" style={{ margin: '0 auto 0.5rem' }} />
                <div style={{ fontWeight: 'bold', fontSize: '0.75rem', color: 'var(--hwp-black)' }}>가장 확실한 선도물질 후보</div>
                <div style={{ fontSize: '0.65rem', color: 'var(--hwp-gray)', marginTop: '0.3rem' }}>임상 진입 확률 및 성공률 극대화</div>
              </div>
            </div>
            
            <p style={{ margin: '0', fontSize: '0.75rem', color: 'var(--hwp-gray)', lineHeight: '1.5' }}>
              <strong>※ 아키텍처 핵심:</strong> 최첨단 AI의 초고속 1차 선별(수백만 개 후보 물질 1,000배 압축) 이후, 도출된 극소수 핵심 물질에만 고정밀 물리 시뮬레이션을 작동시켜 <strong>기존 3년의 연구개발 기간을 1년 내외로 단축(65% 이상 효율화) 보장</strong>
            </p>
          </div>

          <div className="v2-table-wrapper" style={{ marginBottom: '1.5rem' }}>
            <table className="v2-table" style={{ wordBreak: 'keep-all', lineHeight: '1.5', fontSize: '0.85rem' }}>
              <colgroup>
                <col style={{ width: '22%' }} />
                <col style={{ width: '78%' }} />
              </colgroup>
              <tbody>
                <tr>
                  <td className="text-center font-bold" style={{ backgroundColor: 'var(--hwp-white)', borderRight: '1px solid var(--hwp-vlight)' }}>
                    1. 초고속 스캔 +<br/>초정밀 검증 (상호보완)
                  </td>
                  <td>
                    ✓ <strong>기초 탐색 기간 제거:</strong> AI의 초고속 연산을 활용해 1차 후보 물질 1,000배 압축 및 선별<br/>
                    ✓ <strong>초정밀 검증 타겟팅:</strong> AI 선별 알짜 물질에만 고강도 물리 시뮬레이션(단백질 결합력 예측) 집중 적용<br/>
                    ✓ <strong>환각 오류 원천 차단:</strong> 단순 AI의 가짜 결과물 도출 한계 극복 및 <strong>전체 연구 기간 65% 이상 단축</strong>
                  </td>
                </tr>
                <tr>
                  <td className="text-center font-bold" style={{ backgroundColor: 'var(--hwp-white)', borderRight: '1px solid var(--hwp-vlight)' }}>
                    2. 자체 완벽 구동<br/>및 기밀 보호 (사내망 분리)
                  </td>
                  <td>
                    ✓ <strong>핵심 기밀 보호:</strong> 모든 제약사의 최대 리스크인 <strong>특허 기밀 데이터 외부 유출 위험 완전 차단</strong><br/>
                    ✓ <strong>오프라인 자생 환경:</strong> 해외 퍼블릭 클라우드 데이터 전송 없이, 1대의 고성능 사무용 PC 기반 100% 사내망 구동
                  </td>
                </tr>
                <tr>
                  <td className="text-center font-bold" style={{ backgroundColor: 'var(--hwp-white)', borderRight: '1px solid var(--hwp-vlight)' }}>
                    3. 평범한 연구원 전용<br/>마우스 클릭식(No-Code) 화면
                  </td>
                  <td>
                    ✓ <strong>연구자 친화적 설계:</strong> 복잡한 코딩(Python, Linux 등) 없이 웹 브라우저 마우스 드래그만으로 시스템을 제어하는 <strong>웹 노코드(No-Code) GUI 탑재</strong><br/>
                    ✓ <strong>학습 비용 최소화:</strong> 비전공 약학 연구원도 1시간 내 적응 및 독자적 구조 설계·결과물 즉시 도출 가능
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ fontWeight: 'bold', fontSize: '0.85rem', marginBottom: '0.5rem', paddingLeft: '2px', fontFamily: 'var(--hwp-font-heading)' }}>
            나. 개발/개선 진행 현황 및 사업기간 산출물
          </div>
          <div className="v2-table-wrapper" style={{ marginBottom: '2rem' }}>
            <table className="v2-table" style={{ wordBreak: 'keep-all', lineHeight: '1.5', fontSize: '0.85rem' }}>
              <tbody>
                <tr>
                  <td className="font-bold text-center" style={{ width: '15%', backgroundColor: 'var(--hwp-white)', borderRight: '1px solid var(--hwp-vlight)' }}>현재 진행 현황</td>
                  <td>
                    ▶ 최신 SOTA(State-of-the-Art) 모델 아키텍처 보존 및 단일 GPU(개인용) 구동용 <strong>'핵심 경량화 기술' 1차 검증 완료</strong><br/>
                    ▶ 초기 서버 연동 기반 자동화 파이프라인 30% 구축 달성
                  </td>
                </tr>
                <tr>
                  <td className="font-bold text-center" style={{ backgroundColor: 'var(--hwp-white)', borderRight: '1px solid var(--hwp-vlight)' }}>최종 산출물<br/><span style={{ fontSize: '0.7rem', color: 'var(--hwp-gray)' }}>(~26.11.30)</span></td>
                  <td>
                    ① <strong>Web Dashboard v1.0 (SaaS 및 로컬 겸용)</strong>: 분자 설계 및 도킹 결과 통합 뷰어<br/>
                    ② <strong>Installer Package v1.0 (Win/Ubuntu)</strong>: 원클릭 자동 셋업 온프레미스 배포판<br/>
                    ③ <strong>사용자 매뉴얼 및 특허 출원서 2건</strong>: 이종 엔진 통합 아키텍처 특허 확보
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ══════════════════ 2-2. 기술적 차별성 ══════════════════ */}
        <section className="delay-200">
          <h2 className="v2-sub-title">2-2. 창업 아이템의 기술적 차별성 및 경쟁력 확보 전략</h2>

          {/* ── 망분리 아키텍처 다이어그램 ── */}
          <div style={{
            border: '2px dashed var(--hwp-light)', padding: '1.2rem', marginBottom: '1rem', marginTop: '1rem',
            backgroundColor: 'var(--hwp-vlight)', position: 'relative'
          }}>
            <div style={{ position: 'absolute', top: '-12px', left: '15px', background: 'var(--hwp-white)', padding: '0 10px', fontWeight: 'bold', fontSize: '0.85rem', color: 'var(--hwp-dark)' }}>
              [그림 2] 완전 폐쇄형 온프레미스(Air-gapped) 인프라 보안 구조도
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(120px, 1fr) 50px minmax(280px, 2fr)', gap: '1rem', alignItems: 'center', marginTop: '0.5rem' }}>
              
              {/* 외부망 */}
              <div style={{ border: '1px solid var(--hwp-light)', backgroundColor: 'var(--hwp-white)', padding: '1rem', textAlign: 'center', opacity: 0.8 }}>
                <ServerOff size={28} color="var(--hwp-gray)" style={{ margin: '0 auto 0.5rem' }} />
                <div style={{ fontWeight: 'bold', fontSize: '0.75rem', color: 'var(--hwp-dark)' }}>퍼블릭 클라우드</div>
                <div style={{ fontSize: '0.65rem', color: 'var(--hwp-gray)', marginTop: '0.3rem' }}>외부 API 및 SaaS</div>
              </div>

              {/* 차단 방화벽 */}
              <div style={{ textAlign: 'center' }}>
                <div style={{ width: '4px', height: '60px', backgroundColor: 'var(--hwp-gray)', margin: '0 auto', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'var(--hwp-gray)', color: 'var(--hwp-white)', fontSize: '0.65rem', padding: '2px 6px', fontWeight: 'bold', whiteSpace: 'nowrap' }}>망 차단</div>
                </div>
              </div>

              {/* 내부망 (RTX 4090) */}
              <div style={{ border: '2px solid var(--hwp-dark)', backgroundColor: 'var(--hwp-white)', padding: '1.2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid var(--hwp-vlight)', paddingBottom: '0.8rem', marginBottom: '0.8rem' }}>
                  <Lock size={20} color="var(--hwp-dark)" />
                  <span style={{ fontWeight: 'bold', fontSize: '0.8rem', color: 'var(--hwp-gray)' }}>제약사 사내망 (100% 독립 구동 및 데이터 이격)</span>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem' }}>
                  <div style={{ border: '1px solid var(--hwp-vlight)', backgroundColor: 'var(--hwp-vlight)', padding: '0.8rem', textAlign: 'center' }}>
                    <div style={{ fontWeight: 'bold', fontSize: '0.75rem', color: 'var(--hwp-dark)' }}>로컬 워크스테이션</div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--hwp-gray)', marginTop: '0.2rem' }}>소비자용 RTX 4090 최적화</div>
                  </div>
                  <div style={{ border: '1px solid var(--hwp-vlight)', backgroundColor: 'var(--hwp-white)', padding: '0.8rem', textAlign: 'center' }}>
                    <div style={{ fontWeight: 'bold', fontSize: '0.75rem', color: 'var(--hwp-dark)' }}>AI Docker Image</div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--hwp-dark)', marginTop: '0.2rem' }}>기밀 데이터 유출 원천 방지</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ fontWeight: 'bold', fontSize: '0.85rem', marginBottom: '0.5rem', paddingLeft: '2px', fontFamily: 'var(--hwp-font-heading)' }}>
            가. 상용 솔루션 비용/보안 한계 극복 (경쟁 우위)
          </div>
          <div className="v2-table-wrapper" style={{ marginBottom: '1.5rem' }}>
            <table className="v2-table" style={{ wordBreak: 'keep-all', lineHeight: '1.4', fontSize: '0.8rem', textAlign: 'center' }}>
              <thead>
                <tr>
                  <th style={{ width: '16%' }}>비교 항목</th>
                  <th style={{ width: '28%' }}>기존 상용 CADD<br/><span style={{ fontSize: '0.7rem', fontWeight: 'normal' }}>(Schrödinger 등)</span></th>
                  <th style={{ width: '28%' }}>단순 클라우드 기반 AI<br/><span style={{ fontSize: '0.7rem', fontWeight: 'normal' }}>(해외스타트업 등)</span></th>
                  <th style={{ width: '28%' }}>동사 하이브리드<br/><span style={{ fontSize: '0.7rem', fontWeight: 'normal', color: 'blue' }}>(블루오션 개척)</span></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-bold bg-gray-50">핵심 타깃</td>
                  <td>초대형 다국적 빅파마</td>
                  <td>IT 친화적 바이오 IT 벤처</td>
                  <td className="font-bold bg-blue-50">자금/IT인력 부족한 중소제약사</td>
                </tr>
                <tr>
                  <td className="font-bold bg-gray-50">도입 비용 (TCO)</td>
                  <td className="text-red-700 font-bold">연간 수천만 원~수억 원 (극초고가, 블랙박스 종속)</td>
                  <td>데이터 비례 종량제 무한 과금</td>
                  <td className="font-bold bg-blue-50 text-blue-800">연 5천만원대 (수억 장비 대체, 86% 절감)</td>
                </tr>
                <tr>
                  <td className="font-bold bg-gray-50">보안 (망분리)</td>
                  <td>일부 폐쇄망 지원 (초고가)</td>
                  <td className="text-red-700">퍼블릭 클라우드 이관 (데이터 유출 우려)</td>
                  <td className="font-bold bg-blue-50">100% 로컬 망분리 설치 (데이터 이격)</td>
                </tr>
                <tr>
                  <td className="font-bold bg-gray-50">사용성 (UX)</td>
                  <td>높은 학습 곡선, 복잡한 세팅</td>
                  <td>해석 불가한 결과물 (블랙박스)</td>
                  <td className="font-bold bg-blue-50">No-Code 웹 GUI (직관적 결과 해석)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ fontWeight: 'bold', fontSize: '0.85rem', marginBottom: '0.5rem', paddingLeft: '2px', fontFamily: 'var(--hwp-font-heading)' }}>
            나. 강력한 시장 진입 전략 및 경쟁사 모방 방어 방안 (Moat)
          </div>
          <div className="v2-table-wrapper" style={{ marginBottom: '2rem' }}>
            <table className="v2-table" style={{ wordBreak: 'keep-all', lineHeight: '1.5', fontSize: '0.82rem' }}>
              <tbody>
                <tr>
                  <td style={{ width: '25%', backgroundColor: 'var(--hwp-white)', fontWeight: 'bold', borderRight: '1px solid var(--hwp-vlight)', textAlign: 'center' }}>
                    SaaS 기반 미끼(PoC)<br/>및 2-Track 업셀링
                  </td>
                  <td>
                    ▶ <strong>초기 도입 장벽 해소:</strong> 저렴한 클라우드 SaaS 기반 샘플 데이터 테스트 및 솔루션 우수성 체감 검증 유도<br/>
                    ▶ <strong>프리미엄 업셀링:</strong> 데이터 보안 필요성이 입증된 핵심 타겟 고객 대상, 고수익 폐쇄형 온프레미스 패키지로의 확정적 전환 납품
                  </td>
                </tr>
                <tr>
                  <td style={{ backgroundColor: 'var(--hwp-white)', fontWeight: 'bold', borderRight: '1px solid var(--hwp-vlight)', textAlign: 'center' }}>
                    소비자형 인프라(RTX 4090)<br/>최적화를 통한 장벽 철폐
                  </td>
                  <td>
                    ▶ <strong>인프라 도입 비용 영구 파괴:</strong> 모델 양자화(Quantization) 및 메모리 분할 기술(Sharding) 최적화로 수억 원대 엔터프라이즈 GPU(H100) 요구 조건 대체<br/>
                    ▶ <strong>진입 장벽 철폐 및 모방 단절:</strong> 기존 상용 솔루션 비용의 1/10 수준으로 소비자형 장비(RTX 4090) 구동 실현 및 타 고비용 솔루션 진입 원천 봉쇄
                  </td>
                </tr>
                <tr>
                  <td style={{ backgroundColor: 'var(--hwp-white)', fontWeight: 'bold', borderRight: '1px solid var(--hwp-vlight)', textAlign: 'center' }}>
                    지식재산권(IP) 아키텍처<br/>출원 방어 및 락인
                  </td>
                  <td>
                    ▶ <strong>지식재산권(IP) 선점 및 락인:</strong> '이종 AI 및 물리 시뮬레이션 간 데이터 포맷 자동 변환 및 오케스트레이션' 관련 핵심 아키텍처 특허 2건 출원<br/>
                    ▶ <strong>경쟁사 진입 방어:</strong> 자체 비즈니스 모델(BM) 구축 및 후발 주자의 기술/파이프라인 모방 탈취 선제 차단 완비
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ══════════════════ 2-3. 사업비 집행 계획 ══════════════════ */}
        <section className="delay-300">
          <h2 className="v2-sub-title">2-3. 정부지원 사업비 예산 편성 계획</h2>

          <p className="v2-box-desc" style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
            ■ 총괄 예산 집행 계획 (최대 지원금 1억 원 기준 설계 / 단위: 원)
          </p>
          <div className="v2-table-wrapper" style={{ marginTop: '0.5rem', marginBottom: '1.2rem' }}>
            <table className="v2-table" style={{ wordBreak: 'keep-all', lineHeight: '1.4', fontSize: '0.82rem', textAlign: 'center' }}>
              <thead>
                <tr>
                  <th style={{ width: '13%' }}>비목</th>
                  <th style={{ width: '17%' }}>세부 비목</th>
                  <th style={{ width: '45%' }}>산출 근거 (핵심 사용처)</th>
                  <th style={{ width: '10%' }}>비율 (%)</th>
                  <th style={{ width: '15%' }}>금액 (원)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-bold bg-gray-50">인건비</td>
                  <td>정규직 신규채용</td>
                  <td className="text-left" style={{ lineHeight: '1.5' }}>
                    <strong>수석 AI 신약개발 연구원 1인 (월 5,000,000원 × 9개월)</strong><br />
                    - 단백질 구조 데이터(PDB 등) 분석 및 OpenFE 시뮬레이션 검증<br />
                    - 알고리즘 정확도 오류 탐지 및 플랫폼 전반 핵심 QA 전담
                  </td>
                  <td className="font-bold">45.0%</td>
                  <td className="font-bold text-right" style={{ paddingRight: '1rem' }}>45,000,000</td>
                </tr>
                <tr>
                  <td className="font-bold bg-gray-50">외주용역비</td>
                  <td>소프트웨어 개발</td>
                  <td className="text-left" style={{ lineHeight: '1.5' }}>
                    <strong>No-Code 웹 GUI 대시보드 프론트엔드/백오피스 전면 위탁</strong><br />
                    - 3D 분자 구조 시각화 인터페이스, 사용자 작업 큐(Queue) 관리 UI UX
                  </td>
                  <td className="font-bold">20.0%</td>
                  <td className="font-bold text-right" style={{ paddingRight: '1rem' }}>20,000,000</td>
                </tr>
                <tr>
                  <td className="font-bold bg-gray-50">기계장치비</td>
                  <td>연구장비 구입</td>
                  <td className="text-left" style={{ lineHeight: '1.5' }}>
                    <strong>AI 훈련 및 테스트용 고성능 GPU 워크스테이션 1대</strong><br />
                    - RTX 4090 Dual 이상급 탑재. 폐쇄망 포팅 테스트, 경량화 연구 목적 활용
                  </td>
                  <td className="font-bold">10.0%</td>
                  <td className="font-bold text-right" style={{ paddingRight: '1rem' }}>10,000,000</td>
                </tr>
                <tr>
                  <td className="font-bold bg-gray-50">지급수수료</td>
                  <td>구독 및 전문가</td>
                  <td className="text-left" style={{ lineHeight: '1.5' }}>
                    - AWS/GCP 클라우드 서버 임차료 (PoC 전환 검증 운영용 6개월): 600만<br />
                    - 법무/회계/노무 창업 법인화 자문 및 전문가 수수료: 400만
                  </td>
                  <td className="font-bold">10.0%</td>
                  <td className="font-bold text-right" style={{ paddingRight: '1rem' }}>10,000,000</td>
                </tr>
                <tr>
                  <td className="font-bold bg-gray-50">광고선전비</td>
                  <td>마케팅 홍보</td>
                  <td className="text-left" style={{ lineHeight: '1.5' }}>
                    - B2B 전시회용 SaaS 랜딩페이지 및 브로슈어 책자 디자인 인쇄: 500만<br />
                    - 신약개발 시연 영상(3D 모션그래픽 포함) 제작 스튜디오 기획: 500만
                  </td>
                  <td className="font-bold">10.0%</td>
                  <td className="font-bold text-right" style={{ paddingRight: '1rem' }}>10,000,000</td>
                </tr>
                <tr>
                  <td className="font-bold bg-gray-50">무형자산</td>
                  <td>IP 창출 비용</td>
                  <td className="text-left" style={{ lineHeight: '1.5' }}>
                    - 국내 특허 2건 출원, 네이밍 상표권 3분류 출원, 디자인권 확보 등
                  </td>
                  <td className="font-bold">5.0%</td>
                  <td className="font-bold text-right" style={{ paddingRight: '1rem' }}>5,000,000</td>
                </tr>
                <tr style={{ backgroundColor: 'var(--hwp-black)', color: 'white' }}>
                  <td colSpan="3" className="font-bold">총 합 계</td>
                  <td className="font-bold">100%</td>
                  <td className="font-bold text-right" style={{ paddingRight: '1rem' }}>100,000,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ backgroundColor: 'var(--hwp-white)', border: '1px solid var(--hwp-vlight)', padding: '1rem', borderLeft: '4px solid var(--hwp-black)', fontSize: '0.85rem', lineHeight: '1.5' }}>
            <strong>[예산 집행의 타당성 및 효과성 요약]</strong><br />
            ✓ <strong>초기 기술 격차 확대를 위한 인건비 집중 투자(45%):</strong> AI 알고리즘 오차율 단축 및 최상급 인력 선제 채용을 통한 압도적 기술 장벽 조기 구축 완료<br />
            ✓ <strong>전략적 외주 위탁을 통한 리소스 극대화(20%):</strong> 대표자는 핵심 BM 고도화 및 백엔드 엔진 튜닝에 100% 집중, Web GUI는 IT 전문 에이전시 위임을 통한 MVP 최적화 및 론칭 기한 단축 보장
          </div>
        </section>

      </div>
    </div>
  );
};

export default FeasibilityV1;
