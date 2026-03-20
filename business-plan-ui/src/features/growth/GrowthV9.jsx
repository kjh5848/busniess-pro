import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, LabelList } from 'recharts';
import ArrowFlowLayout from '../../shared/ui/ArrowFlowLayout';

const ACCENT = '#dfe6f7';

/* ── GTM 4단계 ── */
const gtmSteps = [
  { label: '초기 레퍼런스 확보', sub: '(대학/연구소 무상 배포)' },
  { label: '국내 B2B 실증',      sub: '(바이오 벤처 유료 PoC)' },
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

        <div className="hwp-guide-text" style={{ border: '1px dotted blue', padding: '0.8rem', marginBottom: '1.5rem', lineHeight: '1.6', fontSize: '0.85rem' }}>
          ※ 경쟁제품·경쟁사 분석, 창업 아이템의 목표 시장 진입 전략 등 기재<br />
          &nbsp;&nbsp;&nbsp;창업 아이템의 비즈니스 모델(수익화 모델), 사업 확장을 위한 투자유치 전략<br />
          &nbsp;&nbsp;&nbsp;사업 전체 로드맵(일정)과 중장기적 사회적 가치 도입계획<br />
          - 환경 : 폐기물 배출 감소, 재활용 확대, 친환경 원료 개발, 에너지 절감 등 환경보호 노력<br />
          - 사회 : 지역사회 교류, 사회 환원, 인권, 평등, 다양성 존중 등 사회적 책임경영 노력<br />
          - 지배구조 : 윤리경영, 상호 존중 조직문화 구축, 근로 환경 개선 등의 투명 경영 노력
        </div>

        {/* ══════════════════ 3-1. 경쟁사 분석, 목표 시장 진입 전략 ══════════════════ */}
        <section>
          <h2 className="hwp-subsection-title">3-1. 경쟁사 분석, 목표 시장 진입 전략</h2>

          {/* ── 경쟁사 분석 ── */}
          <div style={{ fontWeight: 'bold', fontSize: '0.85rem', marginBottom: '0.5rem', paddingLeft: '2px', fontFamily: 'var(--hwp-font-heading)' }}>
            ■ 주요 경쟁사 분석 및 차별적 진입 전략
          </div>
          <table className="hwp-table" style={{ marginBottom: '1.2rem' }}>
            <thead>
              <tr>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '20%' }}>비교 항목</th>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '26%' }}>기존 S/W (퍼블릭 클라우드)</th>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '26%' }}>SaaS (외부 서버 집중형)</th>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '28%' }}>당사 (설치형+노코드 AI)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="label" style={{ backgroundColor: ACCENT, fontWeight: '700', fontSize: '0.8rem' }}>보안성 (데이터 유출)</td>
                <td style={{ fontSize: '0.8rem', textAlign: 'center' }}>가상망(VPC) 활용 (보장 한계)</td>
                <td style={{ fontSize: '0.8rem', textAlign: 'center' }}>데이터 서버 외부 전송 필수</td>
                <td style={{ fontSize: '0.8rem', textAlign: 'center', fontWeight: '800', color: '#2563eb' }}>사내 폐쇄망 100% 독립 구축</td>
              </tr>
              <tr>
                <td className="label" style={{ backgroundColor: ACCENT, fontWeight: '700', fontSize: '0.8rem' }}>UI/UX 편의성</td>
                <td style={{ fontSize: '0.8rem', textAlign: 'center' }}>리눅스 커맨드(CLI) 필수</td>
                <td style={{ fontSize: '0.8rem', textAlign: 'center' }}>웹 대시보드 지원 (우수)</td>
                <td style={{ fontSize: '0.8rem', textAlign: 'center', fontWeight: '800', color: '#2563eb' }}>1-Click 웹 기반 노코드 GUI</td>
              </tr>
              <tr>
                <td className="label" style={{ backgroundColor: ACCENT, fontWeight: '700', fontSize: '0.8rem' }}>도입/유지 비용</td>
                <td style={{ fontSize: '0.8rem', textAlign: 'center' }}>수억 원대 초기 구축비</td>
                <td style={{ fontSize: '0.8rem', textAlign: 'center' }}>데이터 양/API 호출 종량 과금</td>
                <td style={{ fontSize: '0.8rem', textAlign: 'center', fontWeight: '800', color: '#2563eb' }}>하이엔드 PC 1대 비용으로 해결</td>
              </tr>
            </tbody>
          </table>

          {/* ── 목표 시장 분석 (TAM/SAM/SOM) ── */}
          <div style={{ fontWeight: 'bold', fontSize: '0.85rem', marginBottom: '0.5rem', paddingLeft: '2px', fontFamily: 'var(--hwp-font-heading)' }}>
            ■ 목표 시장 규모 (단위: 억 원)
          </div>
          <div style={{ border: '1.5px solid #000', marginBottom: '0.8rem', overflow: 'hidden' }}>
            <div style={{ padding: '0.5rem 0.3rem 0.2rem', backgroundColor: '#fff' }}>
              <ResponsiveContainer width="100%" height={120}>
                <BarChart data={tamChartData} layout="vertical" margin={{ top: 5, right: 70, left: 5, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                  <XAxis type="number" hide />
                  <YAxis type="category" dataKey="name" width={42} tick={{ fontSize: 12, fontWeight: 700 }} />
                  <Bar dataKey="value" radius={[0, 5, 5, 0]} barSize={24} fill="#1e293b">
                    <LabelList dataKey="label" position="right" style={{ fontSize: '0.72rem', fontWeight: '600', fill: '#1e293b' }} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div style={{ fontSize: '0.72rem', color: '#666', marginBottom: '1.2rem', wordBreak: 'keep-all' }}>
            *출처: Grand View Research 2024. 노코드 + 파이프라인 자동화 + 사내망 보안이 결합된 하이브리드 시장 수요 급증.
          </div>

          {/* ── GTM 전략 ── */}
          <div style={{ fontWeight: 'bold', fontSize: '0.85rem', marginBottom: '0.5rem', paddingLeft: '2px', fontFamily: 'var(--hwp-font-heading)' }}>
            ■ 목표 시장 진입 전략 (GTM 4단계)
          </div>
          <ArrowFlowLayout steps={gtmSteps} accentColor={ACCENT} />
          
        </section>

        {/* ══════════════════ 3-2. 비즈니스 모델 ══════════════════ */}
        <section style={{ marginTop: '2rem' }}>
          <h2 className="hwp-subsection-title">3-2. 창업 아이템의 비즈니스 모델(수익화 모델)</h2>

          {/* 3대 수익원 */}
          <div style={{ fontWeight: 'bold', fontSize: '0.85rem', marginBottom: '0.5rem', paddingLeft: '2px', fontFamily: 'var(--hwp-font-heading)' }}>
            ■ 3 다각화 수익 라인 (B2B + B2C)
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0', marginBottom: '1.2rem' }}>
            {[
              { tag: 'B2B Enterprise', title: '설치형(폐쇄망) 솔루션', price: '초기 구축비 + 연간 라이선스', target: '데이터 유출에 민감한 중견 제약사 및 국공립 바이오 연구소' },
              { tag: 'B2C Cloud', title: '클라우드 웹 구독 서비스', price: '월/연 단위 정기 구독료', target: '서버 인프라가 없는 대학원생 및 소규모 랩실 개인 연구자' },
              { tag: 'ADD-ON', title: '클라우드 GPU 종량 모델', price: '시간/컴퓨팅 리소스 당 과금', target: '일시적으로 대용량 시뮬레이션·도킹 분석이 필요한 사용자' },
            ].map((item, i) => (
              <div key={i} style={{ border: '1.5px solid #000', borderLeft: i === 0 ? '1.5px solid #000' : 'none', display: 'flex', flexDirection: 'column' }}>
                <div style={{ backgroundColor: i === 0 ? '#1e293b' : ACCENT, color: i === 0 ? '#fff' : '#000', padding: '0.35rem 0.5rem', fontWeight: '700', fontSize: '0.75rem', fontFamily: 'var(--hwp-font-heading)', textAlign: 'center', borderBottom: '1px solid #000' }}>
                  {item.tag} <br/> {item.title}
                </div>
                <div style={{ padding: '0.6rem 0.5rem', fontSize: '0.75rem', lineHeight: '1.5', flex: 1, backgroundColor: '#fff' }}>
                  <div style={{ fontWeight: '800', marginBottom: '0.3rem', color: '#2563eb' }}>💰 {item.price}</div>
                  <div style={{ color: '#475569', wordBreak: 'keep-all' }}>👩‍🔬 {item.target}</div>
                </div>
              </div>
            ))}
          </div>

          {/* 예상 매출 테이블 */}
          <div style={{ fontWeight: 'bold', fontSize: '0.85rem', marginBottom: '0.5rem', paddingLeft: '2px', fontFamily: 'var(--hwp-font-heading)' }}>
            ■ 예상 매출 금액 지표
          </div>
          <table className="hwp-table" style={{ marginBottom: '0.8rem' }}>
            <thead>
              <tr>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '16%' }}>시기</th>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '20%' }}>B2C (클라우드)</th>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '20%' }}>B2B (설치형)</th>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '20%' }}>합계</th>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '24%' }}>비고</th>
              </tr>
            </thead>
            <tbody>
              {revenueProjection.map((r, i) => (
                <tr key={i}>
                  <td className="label" style={{ backgroundColor: ACCENT, fontWeight: '700', fontSize: '0.8rem', textAlign: 'center' }}>{r.period}</td>
                  <td style={{ fontSize: '0.8rem', textAlign: 'center' }}>{r.b2c}</td>
                  <td style={{ fontSize: '0.8rem', textAlign: 'center' }}>{r.b2b}</td>
                  <td style={{ fontSize: '0.8rem', textAlign: 'center', fontWeight: '800', color: '#1e3a8a' }}>{r.total}</td>
                  <td style={{ fontSize: '0.75rem' }}>{r.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* ══════════════════ 3-3. 투자 유치 전략 ══════════════════ */}
        <section style={{ marginTop: '2rem' }}>
          <h2 className="hwp-subsection-title">3-3. 사업 확장을 위한 투자 유치 전략</h2>

          <div style={{ fontWeight: 'bold', fontSize: '0.85rem', marginBottom: '0.5rem', paddingLeft: '2px', fontFamily: 'var(--hwp-font-heading)' }}>
            ■ 단계별 자금 조달 및 활용 목표
          </div>
          <table className="hwp-table" style={{ marginBottom: '1.2rem' }}>
            <thead>
              <tr>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '22%' }}>투자 라운드 (시기)</th>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '18%' }}>목표 금액</th>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '60%' }}>유치 전략 및 자금 활용 목적</th>
              </tr>
            </thead>
            <tbody>
              {[
                { phase: 'Seed / TIPS\n(2026.11)', amount: '3~5억원', detail: '제품 정식 출시(V1.0) 후 기술 딥테크 평가를 통한 TIPS 프로그램 선정 및 전문 엔젤·초기 액셀러레이터(AC) 시드 투자 유치. (목적: 우수 인재 영입 및 클라우드 인프라 확충)' },
                { phase: 'Pre-A 라운드\n(2027.08)', amount: '10~15억원', detail: '국내 B2B 레퍼런스(매출 발생) 및 10개사 이상 PoC 완료 지표를 바탕으로 바이오 및 SaaS 전문 VC 대상 투자 유치. (목적: 서비스 고도화 및 아시아 시장 진출 초기 자본)' },
                { phase: 'Series A\n(2028.09)', amount: '30억원 이상', detail: '아시아 시장 구독자 확보 및 글로벌 Big Pharma 도입 성공 사례 구축 후 스케일업 자금 확보. (목적: 글로벌 마케팅 및 AI 신약개발 파이프라인 추가 융합)' },
              ].map((item, i) => (
                <tr key={i}>
                  <td className="label" style={{ backgroundColor: ACCENT, fontWeight: '700', fontSize: '0.8rem', textAlign: 'center', whiteSpace: 'pre-line', lineHeight: '1.4' }}>{item.phase}</td>
                  <td style={{ fontSize: '0.85rem', textAlign: 'center', fontWeight: '800', color: '#2563eb' }}>{item.amount}</td>
                  <td style={{ fontSize: '0.8rem', lineHeight: '1.5', wordBreak: 'keep-all' }}>{item.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* ══════════════════ 3-4. 사업 전체 로드맵 및 ESG 전략 ══════════════════ */}
        <section style={{ marginTop: '2rem' }}>
          <h2 className="hwp-subsection-title">3-4. 사업 전체 로드맵(일정 등) 및 중장기 사회적 가치 도입계획</h2>

          {/* 로드맵 */}
          <div style={{ fontWeight: 'bold', fontSize: '0.85rem', marginBottom: '0.5rem', paddingLeft: '2px', fontFamily: 'var(--hwp-font-heading)' }}>
            ■ 3개년 사업·제품 고도화 로드맵
          </div>
          <div style={{ position: 'relative', border: '1.5px solid #000', padding: '1rem', backgroundColor: '#fff', marginBottom: '1.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', position: 'relative', zIndex: 1 }}>
              <div style={{ backgroundColor: '#fdfdfd', border: '1px solid #ccc', padding: '0.8rem', borderRadius: '4px' }}>
                <div style={{ fontWeight: '800', color: '#1d4ed8', marginBottom: '0.4rem', fontSize: '0.9rem' }}>2026 (초기 진입)</div>
                <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.75rem', lineHeight: '1.6', color: '#333' }}>
                  <li>솔루션 V1.0 정식 플랫폼 개발 완료</li>
                  <li>국내 초기 연구소·대학 대상 무상 시범 배포</li>
                  <li>엔젤투자 및 TIPS 연계 자금 확보</li>
                </ul>
              </div>
              <div style={{ backgroundColor: '#fdfdfd', border: '1px solid #ccc', padding: '0.8rem', borderRadius: '4px' }}>
                <div style={{ fontWeight: '800', color: '#16a34a', marginBottom: '0.4rem', fontSize: '0.9rem' }}>2027 (레퍼런스 확장)</div>
                <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.75rem', lineHeight: '1.6', color: '#333' }}>
                  <li>B2C 웹 클라우드 구독 서비스 유료화 상용화</li>
                  <li>국내 B2B 중견 제약사 핵심 레퍼런스 확립</li>
                  <li>Pre-A 투자 라운드 성공적 클로징</li>
                </ul>
              </div>
              <div style={{ backgroundColor: '#fdfdfd', border: '1px solid #ccc', padding: '0.8rem', borderRadius: '4px' }}>
                <div style={{ fontWeight: '800', color: '#9333ea', marginBottom: '0.4rem', fontSize: '0.9rem' }}>2028 (글로벌 스케일업)</div>
                <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.75rem', lineHeight: '1.6', color: '#333' }}>
                  <li>아시아 및 주요 북미 B2B 시장 본격 진출</li>
                  <li>신약 파이프라인 전 과정 올인원 지능형 통합</li>
                  <li>글로벌 사업화 기반 Series A 메가 라운드 유치</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ESG 중장기 계획 */}
          <div style={{ fontWeight: 'bold', fontSize: '0.85rem', marginBottom: '0.5rem', paddingLeft: '2px', fontFamily: 'var(--hwp-font-heading)' }}>
            ■ 중장기적 사회적 가치(ESG) 도입 방안
          </div>
          <table className="hwp-table" style={{ marginBottom: '1.2rem' }}>
            <thead>
              <tr>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '15%' }}>분류</th>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '25%' }}>도입 가치</th>
                <th style={{ backgroundColor: '#1e293b', color: '#fff', width: '60%' }}>구체적 실천 계획 노력</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="label" style={{ backgroundColor: '#f1f8e9', fontWeight: '800', fontSize: '0.85rem', textAlign: 'center', color: '#2e7d32' }}>환경<br/>(E)</td>
                <td style={{ fontSize: '0.8rem', fontWeight: '700', textAlign: 'center' }}>폐기물 배출 감소 및<br/>에너지 절감</td>
                <td style={{ fontSize: '0.8rem', lineHeight: '1.5' }}>
                  · <strong>에너지 절감 (전력 소비 최소화):</strong> 불필요한 AI 연산을 자동으로 필터링하는 파이프라인 최적화 시스템 구축 도입<br/>
                  · <strong>실험실 폐기물 감축 (자원 절감):</strong> in-silico(가상) 정확도 90% 달성으로 불필요한 생물/화학 실험을 최소화하여 유해 폐기물 배출 감소
                </td>
              </tr>
              <tr>
                <td className="label" style={{ backgroundColor: '#e3f2fd', fontWeight: '800', fontSize: '0.85rem', textAlign: 'center', color: '#1565c0' }}>사회<br/>(S)</td>
                <td style={{ fontSize: '0.8rem', fontWeight: '700', textAlign: 'center' }}>지역사회 사회 환원<br/>및 인권/평등 존중</td>
                <td style={{ fontSize: '0.8rem', lineHeight: '1.5' }}>
                  · <strong>사회 환원 (보건 의료 기여):</strong> 희귀 난치성 질환을 연구하는 대학/지역 거점 연구기관 대상 교육용 소프트웨어 무상 지원 실시<br/>
                  · <strong>다양성 존중 (DEI):</strong> 성별, 학력 차별 없는 블라인드 개발자 채용 및 가족친화적 유연근무제 도입으로 책임경영 구축
                </td>
              </tr>
              <tr>
                <td className="label" style={{ backgroundColor: '#fff3e0', fontWeight: '800', fontSize: '0.85rem', textAlign: 'center', color: '#e65100' }}>지배구조<br/>(G)</td>
                <td style={{ fontSize: '0.8rem', fontWeight: '700', textAlign: 'center' }}>윤리경영 및 상호 존중<br/>투명 경영 내재화</td>
                <td style={{ fontSize: '0.8rem', lineHeight: '1.5' }}>
                  · <strong>투명한 데이터 권리 보장:</strong> 고객사의 구조 데이터를 절대로 무단 학습 모델로 사용하지 않는 투명한 약관 명시 (윤리경영)<br/>
                  · <strong>선진 조직문화 체계:</strong> 전 직원 경영 실적 분기별 공유 (타운홀 미팅)를 통해 직원과 성장하는 근로환경 개선 및 상호 존중 확립
                </td>
              </tr>
            </tbody>
          </table>
          <div style={{
            background: '#1e293b', color: '#fff', padding: '0.5rem 0.8rem',
            fontWeight: '700', fontSize: '0.82rem', wordBreak: 'keep-all', lineHeight: '1.5',
          }}>
            ▶ 단기적 이윤 창출을 넘어, <strong>'고효율 AI 최적화를 통한 실험실 폐기물 절감(E)과 소외 연구를 위한 소프트웨어 자원 사회 환원(S)'</strong>을 실천하여 건실하고 존경받는 기업 문화(G)를 구축함.
          </div>

          {/* ── 일정표: < 사업추진 일정(전체 사업단계) > ── */}
          <div style={{ marginTop: '2.5rem' }}>
            <div style={{ fontWeight: 'bold', fontSize: '1rem', marginBottom: '0.6rem', textAlign: 'center', fontFamily: 'var(--hwp-font-heading)' }}>
              {'< 사업추진 일정(전체 사업단계) >'}
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', borderTop: '2px solid #000', borderBottom: '2px solid #000', fontSize: '0.8rem', textAlign: 'center', fontFamily: 'var(--hwp-font-body), "Malgun Gothic", sans-serif' }}>
              <thead>
                <tr style={{ backgroundColor: '#e2e2e2', color: '#000', borderBottom: '1px solid #000' }}>
                  <th style={{ padding: '0.6rem 0.2rem', borderRight: '1px solid #000', borderLeft: '1px solid #000', width: '8%', fontWeight: '500' }}>구분</th>
                  <th style={{ padding: '0.6rem 0.2rem', borderRight: '1px solid #000', width: '25%', fontWeight: '500' }}>추진 내용</th>
                  <th style={{ padding: '0.6rem 0.2rem', borderRight: '1px solid #000', width: '22%', fontWeight: '500' }}>추진 기간</th>
                  <th style={{ padding: '0.6rem 0.2rem', borderRight: '1px solid #000', fontWeight: '500' }}>세부 내용</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { no: '1', title: '초융합 파이프라인\n설계 및 개발', period: "'26. 04 ~ '26. 07", detail: 'Boltz-2 기반 모듈 분석 및 통합 1-Click GUI 구축' },
                  { no: '2', title: 'Beta 사내망 포팅\n및 내부 최적화', period: "'26. 08 ~ '26. 09", detail: '데이터 유출 방지형 사내망 이식 및 유효성 시뮬레이션' },
                  { no: '3', title: '제품 정식 출시 및\n특허/상표 출원', period: "'26. 10 ~ '26. 11", detail: '플랫폼 정식 상용화(V1.0) 런칭 및 원천 기술 지재권 확보' },
                  { no: '4', title: '레퍼런스 선점 및\nSeed 자금 확보', period: "'26년 하반기", detail: '초기 바이오 벤처 무상 시범 배포 및 TIPS/엔젤 투자 유치' },
                  { no: '5', title: 'B2C 클라우드 및\nB2B 솔루션 수익화', period: "'27. 01 ~ '27. 12", detail: '개인용 웹 구독 모델 정식 유료화 및 중견 제약사 납품 확산' },
                  { no: '6', title: '글로벌 스케일업 및\nSeries A 유치', period: "'28년 상반기 ~", detail: '북미/아시아 Big Pharma 파트너십 도출 및 메가 라운드 진행' },
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #000', backgroundColor: '#fff' }}>
                    <td style={{ padding: '0.7rem 0.4rem', borderRight: '1px solid #000', borderLeft: '1px solid #000', color: 'blue', fontStyle: 'italic', fontSize: '0.85rem' }}>{row.no}</td>
                    <td style={{ padding: '0.7rem 0.4rem', borderRight: '1px solid #000', color: 'blue', fontStyle: 'italic', fontSize: '0.85rem', whiteSpace: 'pre-line' }}>{row.title}</td>
                    <td style={{ padding: '0.7rem 0.4rem', borderRight: '1px solid #000', color: 'blue', fontStyle: 'italic', fontSize: '0.85rem' }}>{row.period}</td>
                    <td style={{ padding: '0.7rem 0.4rem', borderRight: '1px solid #000', color: 'blue', fontStyle: 'italic', fontSize: '0.85rem', textAlign: 'left', paddingLeft: '1rem' }}>{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

      </div>
    </div>
  );
};

export default GrowthV9;
