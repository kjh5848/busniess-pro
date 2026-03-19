import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LabelList } from 'recharts';
import ArrowFlowLayout from '../../shared/ui/ArrowFlowLayout';

const ACCENT = '#dfe6f7';

/* ── GTM 4단계 ── */
const gtmSteps = [
  { label: '초기 레퍼런스 확보', sub: '(대학/연구소 무상 배포)' },
  { label: '국내 B2B 실증',      sub: '(바이오 벤처 유료화)' },
  { label: '아시아/중견 확장',    sub: '(클라우드 서비스(웹) 구독 모델 확산)' },
  { label: '글로벌 스케일업',     sub: '(Big Pharma 파트너십)' },
];

/* ── TAM/SAM/SOM ── */
const tamChartData = [
  { name: 'SOM', value: 420, label: '420억 (국내 초기)' },
  { name: 'SAM', value: 42000, label: '4.2조 (아시아)' },
  { name: 'TAM', value: 415000, label: '41.5조 (글로벌)' },
];

/* ── 예상 매출 ── */
const revenueProjection = [
  { period: "'26 하반기", b2c: '0 (무료 베타)', b2b: '0 (PoC)', total: '0', note: '레퍼런스 확보' },
  { period: "'27 상반기", b2c: '600만', b2b: '3,000만', total: '3,600만', note: '클라우드 서비스(웹) 유료 전환' },
  { period: "'27 하반기", b2c: '1,200만', b2b: '8,000만', total: '9,200만', note: 'B2B 1차 계약' },
  { period: "'28", b2c: '3,600만', b2b: '2.4억', total: '2.76억', note: '아시아 확장' },
];

const GrowthV9 = () => {
  return (
    <div className="v2-theme v2-container">
      <div className="v2-paper">

        <div className="hwp-section-title-tag">
          3. 성장전략 (Scale-up)_사업화 추진 전략
        </div>

        {/* ══════════════════ 4-1. 목표시장 분석 ══════════════════ */}
        <section>
          <h2 className="hwp-subsection-title">4-1. 제품·서비스의 목표시장 분석</h2>

          {/* ── TAM/SAM/SOM ── */}
          <div style={{ border: '1.5px solid #000', marginBottom: '0.8rem', overflow: 'hidden' }}>
            <div style={{
              backgroundColor: '#1e293b', color: '#fff', padding: '0.35rem 0.6rem',
              fontWeight: '700', fontSize: '0.8rem', fontFamily: 'var(--hwp-font-heading)',
              textAlign: 'center', borderBottom: '1px solid #000',
            }}>TAM → SAM → SOM (단위: 억 원)</div>
            <div style={{ padding: '0.5rem 0.3rem 0.2rem', backgroundColor: '#fff' }}>
              <ResponsiveContainer width="100%" height={130}>
                <BarChart data={tamChartData} layout="vertical" margin={{ top: 5, right: 70, left: 5, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                  <XAxis type="number" hide />
                  <YAxis type="category" dataKey="name" width={42} tick={{ fontSize: 12, fontWeight: 700 }} />
                  <Bar dataKey="value" radius={[0, 5, 5, 0]} barSize={28} fill="#1e293b">
                    <LabelList dataKey="label" position="right" style={{ fontSize: '0.72rem', fontWeight: '600', fill: '#1e293b' }} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div style={{ fontSize: '0.72rem', color: '#666', marginBottom: '1.2rem' }}>
            *출처: Grand View Research 2024. CAGR 29.4% (2024~2030). 노코드(코딩 불필요) + 자체 구축형(폐쇄망) + 저비용 동시 충족 제품 전무 → 명확한 시장 틈새 존재.
          </div>

          {/* ── 고객 특성 (압축 2열) ── */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0', marginBottom: '1.2rem' }}>
            <div style={{ border: '1.5px solid #000', borderRight: 'none' }}>
              <div style={{ backgroundColor: '#1e293b', color: '#fff', padding: '0.35rem 0.6rem', fontWeight: '700', fontSize: '0.82rem', fontFamily: 'var(--hwp-font-heading)', textAlign: 'center', borderBottom: '1px solid #000' }}>
                B2B 타겟 (핵심)
              </div>
              <div style={{ padding: '0.5rem 0.6rem', fontSize: '0.8rem', lineHeight: '1.6' }}>
                · 중소·중견 제약사, 국공립 바이오 연구실<br/>
                · AI 도입 시급하나 클라우드 비용·보안·개발조직 부재<br/>
                · <strong>→ 자체 구축형(폐쇄망) 설치형 수요 높음</strong>
              </div>
            </div>
            <div style={{ border: '1.5px solid #000' }}>
              <div style={{ backgroundColor: ACCENT, padding: '0.35rem 0.6rem', fontWeight: '700', fontSize: '0.82rem', fontFamily: 'var(--hwp-font-heading)', textAlign: 'center', borderBottom: '1px solid #000' }}>
                B2C 타겟 (확장)
              </div>
              <div style={{ padding: '0.5rem 0.6rem', fontSize: '0.8rem', lineHeight: '1.6' }}>
                · 대학원생·포닥·개인 연구자<br/>
                · 서버 구축 권한·자금 없이 즉시 구동 필요<br/>
                · <strong>→ 브라우저 즉시 실행 클라우드 서비스(웹) 수요</strong>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════ 4-2. 사업화 전략 ══════════════════ */}
        <section>
          <h2 className="hwp-subsection-title">4-2. 창업아이템의 개발 사업화 전략</h2>

          {/* GTM */}
          <div style={{ fontWeight: 'bold', fontSize: '0.85rem', marginBottom: '0.5rem', paddingLeft: '2px', fontFamily: 'var(--hwp-font-heading)' }}>
            ■ GTM(Go-To-Market) 4단계
          </div>
          <ArrowFlowLayout steps={gtmSteps} accentColor={ACCENT} />

          {/* 수익 모델 (3열 압축) */}
          <div style={{ fontWeight: 'bold', fontSize: '0.85rem', marginBottom: '0.5rem', marginTop: '1.2rem', paddingLeft: '2px', fontFamily: 'var(--hwp-font-heading)' }}>
            ■ 3대 수익원
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0', marginBottom: '1.2rem' }}>
            {[
              { tag: 'B2C', title: '클라우드 서비스(웹) 구독', price: '월/연 정기결제', target: '개인 연구자·대학원생' },
              { tag: 'GPU', title: '연산 종량제', price: '시간당 과금', target: '고용량 시뮬레이션 수요' },
              { tag: 'B2B', title: 'Enterprise 자체 구축형(폐쇄망)', price: '설치비 + 연간 유지보수', target: '보안 필수 중견 제약사' },
            ].map((item, i) => (
              <div key={i} style={{ border: '1.5px solid #000', borderLeft: i === 0 ? '1.5px solid #000' : 'none' }}>
                <div style={{ backgroundColor: i === 2 ? '#1e293b' : ACCENT, color: i === 2 ? '#fff' : '#000', padding: '0.3rem 0.5rem', fontWeight: '700', fontSize: '0.78rem', fontFamily: 'var(--hwp-font-heading)', textAlign: 'center', borderBottom: '1px solid #000' }}>
                  {item.tag} — {item.title}
                </div>
                <div style={{ padding: '0.4rem 0.5rem', fontSize: '0.78rem', lineHeight: '1.5' }}>
                  <div style={{ fontWeight: '700', marginBottom: '0.15rem' }}>💰 {item.price}</div>
                  <div style={{ color: '#555' }}>{item.target}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════ 4-4. 자금 조달 계획 ══════════════════ */}
        <section>
          <h2 className="hwp-subsection-title">4-4. 자금 조달 계획</h2>

          <table className="hwp-table" style={{ marginBottom: '0.8rem' }}>
            <thead>
              <tr>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '22%' }}>구분</th>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '20%' }}>금액</th>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '58%' }}>세부 내용</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="label" style={{ backgroundColor: ACCENT, fontWeight: '700', fontSize: '0.8rem' }}>정부지원금</td>
                <td style={{ fontSize: '0.8rem', fontWeight: '700', textAlign: 'center' }}>20,000,000원</td>
                <td style={{ fontSize: '0.8rem', lineHeight: '1.4' }}>외주용역비 13,500,000 + 특허출원 3,500,000 + 광고선전비 3,000,000</td>
              </tr>
              <tr>
                <td className="label" style={{ backgroundColor: ACCENT, fontWeight: '700', fontSize: '0.8rem' }}>대응자금 (현물)</td>
                <td style={{ fontSize: '0.8rem', fontWeight: '700', textAlign: 'center' }}>대표자 인건비</td>
                <td style={{ fontSize: '0.8rem', lineHeight: '1.4' }}>바이오 인공지능 운영관리 핵심 엔진 직접 개발 — 전 사업기간 풀타임 투입</td>
              </tr>
            </tbody>
          </table>

          {/* 세부 집행 (압축) */}
          <div style={{ border: '1.5px solid #000', marginBottom: '1.2rem', overflow: 'hidden' }}>
            <div style={{
              display: 'grid', gridTemplateColumns: '15% 30% 15% 15% 25%',
              backgroundColor: ACCENT, fontWeight: '700', fontSize: '0.78rem',
              fontFamily: 'var(--hwp-font-heading)', textAlign: 'center',
              borderBottom: '1.5px solid #000',
            }}>
              {['비목', '세부 항목', '금액(원)', '수량', '집행 목적'].map((h, i) => (
                <div key={i} style={{ padding: '0.35rem 0.3rem', borderRight: i < 4 ? '1px solid #000' : 'none' }}>{h}</div>
              ))}
            </div>
            {[
              { cat: '특허권', name: '국내 특허 출원', amount: '3,500,000', qty: '1식', note: '핵심기술 권리 보호' },
              { cat: '외주용역비', name: 'UI/UX 설계 + 디자인 시스템', amount: '4,500,000', qty: '1식', note: '노코드(코딩 불필요) 대시보드 UX' },
              { cat: '', name: '웹 프론트엔드 개발 (React)', amount: '6,500,000', qty: '1식', note: '대시보드·3D뷰어·모니터링' },
              { cat: '', name: '반응형 QA + 사용성 테스트', amount: '2,500,000', qty: '1식', note: '크로스브라우저·UT' },
              { cat: '광고선전비', name: '홈페이지 + 홍보영상 + 마케팅', amount: '3,000,000', qty: '1식', note: '랜딩페이지·데모영상·SNS' },
            ].map((item, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '15% 30% 15% 15% 25%',
                fontSize: '0.78rem', borderBottom: '1px solid #ccc',
              }}>
                <div style={{ padding: '0.3rem', borderRight: '1px solid #ccc', fontWeight: item.cat ? '700' : '400', backgroundColor: item.cat ? '#f5f5f5' : 'transparent', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{item.cat}</div>
                <div style={{ padding: '0.3rem 0.4rem', borderRight: '1px solid #ccc', lineHeight: '1.3' }}>{item.name}</div>
                <div style={{ padding: '0.3rem', borderRight: '1px solid #ccc', textAlign: 'right', fontWeight: '700' }}>{item.amount}</div>
                <div style={{ padding: '0.3rem', borderRight: '1px solid #ccc', textAlign: 'center' }}>{item.qty}</div>
                <div style={{ padding: '0.3rem 0.4rem', lineHeight: '1.3' }}>{item.note}</div>
              </div>
            ))}
            <div style={{
              display: 'grid', gridTemplateColumns: '60% 15% 25%',
              fontSize: '0.82rem', fontWeight: '700', borderTop: '1.5px solid #000',
              backgroundColor: ACCENT, fontFamily: 'var(--hwp-font-heading)',
            }}>
              <div style={{ padding: '0.35rem', textAlign: 'center', borderRight: '1px solid #000' }}>합 계</div>
              <div style={{ padding: '0.35rem', textAlign: 'right', borderRight: '1px solid #000' }}>20,000,000</div>
              <div style={{ padding: '0.35rem' }}></div>
            </div>
          </div>
        </section>

        {/* ══════════════════ 4-5. 시장진입 전략 ══════════════════ */}
        <section>
          <h2 className="hwp-subsection-title">4-5. 시장진입 및 성과 창출 전략</h2>

          <table className="hwp-table" style={{ marginBottom: '1rem' }}>
            <thead>
              <tr>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '15%' }}>영역</th>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '50%' }}>구체적 방안</th>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '35%' }}>일정/KPI</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="label" style={{ backgroundColor: ACCENT, fontWeight: '700', fontSize: '0.8rem' }}>생산·출시</td>
                <td style={{ fontSize: '0.8rem', lineHeight: '1.4' }}>B2C 클라우드 서비스(웹) 무료 베타 → 유료 전환 / B2B 자체 구축형(폐쇄망) PoC</td>
                <td style={{ fontSize: '0.8rem', lineHeight: '1.4' }}>'26 하반기 베타 / '27 정식 / PoC 3사+</td>
              </tr>
              <tr>
                <td className="label" style={{ backgroundColor: ACCENT, fontWeight: '700', fontSize: '0.8rem' }}>홍보</td>
                <td style={{ fontSize: '0.8rem', lineHeight: '1.4' }}>바이오 학회·데모데이 / LinkedIn 타겟 마케팅 / 대학원 무상 배포</td>
                <td style={{ fontSize: '0.8rem', lineHeight: '1.4' }}>컨퍼런스 2회 / 대학 10곳+ 도입</td>
              </tr>
              <tr>
                <td className="label" style={{ backgroundColor: ACCENT, fontWeight: '700', fontSize: '0.8rem' }}>유통·판매</td>
                <td style={{ fontSize: '0.8rem', lineHeight: '1.4' }}>B2C 자사 웹 직접 판매 / B2B 직접 영업 + 인큐베이터 연계</td>
                <td style={{ fontSize: '0.8rem', lineHeight: '1.4' }}>B2C 100명+ / B2B 3건+ ('27)</td>
              </tr>
            </tbody>
          </table>

          {/* 매출 테이블 */}
          <div style={{ fontWeight: 'bold', fontSize: '0.85rem', marginBottom: '0.5rem', paddingLeft: '2px', fontFamily: 'var(--hwp-font-heading)' }}>
            ■ 예상 매출금액
          </div>
          <table className="hwp-table" style={{ marginBottom: '0.8rem' }}>
            <thead>
              <tr>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '15%' }}>시기</th>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '20%' }}>B2C</th>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '22%' }}>B2B</th>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '18%' }}>합계</th>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '25%' }}>비고</th>
              </tr>
            </thead>
            <tbody>
              {revenueProjection.map((r, i) => (
                <tr key={i}>
                  <td className="label" style={{ backgroundColor: ACCENT, fontWeight: '700', fontSize: '0.8rem' }}>{r.period}</td>
                  <td style={{ fontSize: '0.8rem', textAlign: 'center' }}>{r.b2c}</td>
                  <td style={{ fontSize: '0.8rem', textAlign: 'center' }}>{r.b2b}</td>
                  <td style={{ fontSize: '0.8rem', textAlign: 'center', fontWeight: '700' }}>{r.total}</td>
                  <td style={{ fontSize: '0.8rem' }}>{r.note}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{
            background: '#1e293b', color: '#fff', padding: '0.5rem 0.8rem',
            fontWeight: '700', fontSize: '0.82rem', wordBreak: 'keep-all', lineHeight: '1.5',
          }}>
            ▶ '28년 누적 매출 <strong>2.76억 원</strong> 목표. B2B 자체 구축형(폐쇄망) 계약 단가(3,000~5,000만원/건)가 핵심 매출 드라이버.
          </div>
        </section>

        {/* ══════════════════ 5. 팀 구성 (Team) ══════════════════ */}
        <section>
          <h2 className="hwp-subsection-title">5. 팀 구성 (Team)</h2>

          {/* ── 대표자 프로필 (서술형) ── */}
          <div style={{ fontWeight: 'bold', fontSize: '0.85rem', marginBottom: '0.5rem', paddingLeft: '2px', fontFamily: 'var(--hwp-font-heading)' }}>
            ■ 대표자 이력 및 제품 관련 역량
          </div>

          <p className="hwp-guide-text" style={{ marginBottom: '0.6rem' }}>
            ※ 제품(서비스)과 관련하여 대표자가 보유하고 있는 이력, 역량 등을 기재
          </p>

          <div style={{ border: '1.5px solid #000', marginBottom: '1.2rem', overflow: 'hidden' }}>
            {/* 이름 헤더 */}
            <div style={{
              backgroundColor: '#1e293b', color: '#fff',
              padding: '0.4rem 0.8rem', fontWeight: '700', fontSize: '0.85rem',
              fontFamily: 'var(--hwp-font-heading)',
              borderBottom: '1px solid #000',
            }}>
              대표자 — 정호준 (경상국립대학교 졸, 정보처리기사)
            </div>

            {/* 개조식 본문 */}
            <div style={{ padding: '0.6rem 0.8rem', fontSize: '0.82rem', lineHeight: '1.75', wordBreak: 'keep-all' }}>
              <div style={{ marginBottom: '0.2rem' }}>· <strong>SW 개발·유지보수 실무 경력 5년+</strong>, 개발팀장 출신</div>
              <div style={{ marginBottom: '0.2rem' }}>· AI 신약개발 전문기업에서 <strong>AlphaFold·RDKit·AutoDock 등 오픈소스 AI 도구</strong>를 실제 제약 R&amp;D 파이프라인에 통합·운용한 실무 경험 보유</div>
              <div style={{ marginBottom: '0.2rem' }}>· 상기 경험 기반으로 본 제품 핵심 기능 <strong>Auto-Setup Engine</strong>(원클릭 AI 환경 구축), <strong>Pipeline SDK</strong>(14종 분자 파일 호환), <strong>Grid Orchestrator</strong>(유휴 PC 분산 연산) 직접 설계·개발 — 전 사업기간 풀타임 투입</div>
              <div>· 대학·기업 대상 <strong>시스템 구조 설계 및 기업 협력 프로젝트 강의 경력</strong> 다수 → B2B 고객 기술 컨설팅·온보딩 교육 직접 수행 가능</div>
            </div>
          </div>

          {/* ── 조직 구성 ── */}
          <div style={{ fontWeight: 'bold', fontSize: '0.85rem', marginBottom: '0.5rem', paddingLeft: '2px', fontFamily: 'var(--hwp-font-heading)' }}>
            ■ 조직 구성 및 채용 계획
          </div>

          <table className="hwp-table" style={{ marginBottom: '1rem' }}>
            <thead>
              <tr>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '14%' }}>구분</th>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '16%' }}>포지션</th>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '35%' }}>역할 및 자격 요건</th>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '20%' }}>채용 시기</th>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '15%' }}>상태</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="label" style={{ backgroundColor: ACCENT, fontWeight: '700', fontSize: '0.8rem' }}>대표자</td>
                <td style={{ fontSize: '0.8rem', fontWeight: '700', textAlign: 'center' }}>CEO /<br/>기술 총괄</td>
                <td style={{ fontSize: '0.8rem', lineHeight: '1.4' }}>
                  · 인공지능 운영관리·DevOps 핵심 엔진 직접 개발<br/>
                  · 오픈소스 AI 도구 통합·자동화 설계<br/>
                  · 사업 전략·고객 발굴·투자 유치
                </td>
                <td style={{ fontSize: '0.8rem', textAlign: 'center' }}>—</td>
                <td style={{ fontSize: '0.8rem', textAlign: 'center', fontWeight: '700', color: '#16a34a' }}>✔ 재직</td>
              </tr>
              <tr>
                <td className="label" style={{ backgroundColor: ACCENT, fontWeight: '700', fontSize: '0.8rem' }} rowSpan={2}>채용<br/>예정</td>
                <td style={{ fontSize: '0.8rem', fontWeight: '700', textAlign: 'center' }}>신약개발<br/>도메인 전문가</td>
                <td style={{ fontSize: '0.8rem', lineHeight: '1.4' }}>
                  · 박사급 (약학·생물정보학·화학 등)<br/>
                  · AI 신약 파이프라인 도메인 검증·PoC 지원<br/>
                  · B2B 고객 기술 컨설팅
                </td>
                <td style={{ fontSize: '0.8rem', textAlign: 'center' }}>'26.06<br/>목표</td>
                <td style={{ fontSize: '0.8rem', textAlign: 'center', fontWeight: '700', color: '#d97706' }}>◎ 채용 중</td>
              </tr>
              <tr>
                <td style={{ fontSize: '0.8rem', fontWeight: '700', textAlign: 'center' }}>데이터<br/>전처리 엔지니어</td>
                <td style={{ fontSize: '0.8rem', lineHeight: '1.4' }}>
                  · 분자 데이터(SDF·PDB·SMILES) 전처리<br/>
                  · Pipeline SDK 14종 분자 파일 호환성 확보<br/>
                  · 학습 데이터셋 구축·관리
                </td>
                <td style={{ fontSize: '0.8rem', textAlign: 'center' }}>'26.06<br/>목표</td>
                <td style={{ fontSize: '0.8rem', textAlign: 'center', fontWeight: '700', color: '#d97706' }}>◎ 채용 중</td>
              </tr>
            </tbody>
          </table>

          <div style={{
            background: '#1e293b', color: '#fff', padding: '0.5rem 0.8rem',
            fontWeight: '700', fontSize: '0.82rem', lineHeight: '1.5',
          }}>
            ▶ 대표자가 핵심 기술을 직접 개발하고, 박사급 도메인 전문가 + 데이터 엔지니어를 조기 확보하여 <strong>'26년 하반기 베타 출시</strong> 일정을 달성함.
          </div>
        </section>

      </div>
    </div>
  );
};

export default GrowthV9;
