import React from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const userGrowthData = [
  { month: '26.06', users: 50 },
  { month: '26.08', users: 150 },
  { month: '26.10', users: 400 },
  { month: '26.12', users: 1200 },
  { month: '27.03', users: 3500 },
];

const PerformanceV3 = () => {
  return (
    <div className="v2-theme v2-container">
      <div className="v2-paper">
        
        <h1 className="v2-section-title">
          3. 성과목표 (~2026. 11. 30.까지)
        </h1>

        <section>
          <h2 className="v2-sub-title">3-1. 성과지표</h2>

          {/* Rule 5: Key Message Quote */}
          <div className="v2-info-box" style={{ borderLeft: '4px solid #333', marginBottom: '1.5rem', backgroundColor: '#fcfcfc' }}>
            <p style={{ fontWeight: 'bold', margin: '0', fontSize: '1.05rem', wordBreak: 'keep-all', lineHeight: '1.6' }}>
              "해외 의존도가 높은 기존 신약 시뮬레이션 H/W 인프라를 클라우드로 전환하여, 초기 스타트업 및 대학 연구실 대상 웹 구독형(SaaS) 솔루션의 시제품 스크리닝 시장점유율 10%를 최우선 확보합니다."
            </p>
          </div>

          <p className="v2-box-desc" style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
            ■ 주요 달성 지표 (가입자 및 시장 확산)
          </p>
          
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', marginBottom: '2rem' }}>
            {/* Rule 2: Upward Trending Chart (AreaChart) */}
            <div style={{ flex: 1, height: 180, border: '1px solid #e5e5e5', backgroundColor: '#fff', padding: '1rem 1rem 0 0' }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={userGrowthData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                  <XAxis dataKey="month" fontSize={11} stroke="#6b7280" tick={{ fill: '#6b7280' }} />
                  <YAxis fontSize={11} stroke="#6b7280" tick={{ fill: '#6b7280' }} />
                  <Tooltip contentStyle={{ fontSize: '0.85rem' }} />
                  <Area type="monotone" dataKey="users" stroke="#374151" fill="#d1d5db" />
                </AreaChart>
              </ResponsiveContainer>
              <div style={{ textAlign: 'center', fontSize: '0.8rem', color: '#6b7280', marginTop: '0.5rem' }}>[그림 3] 무료 베타 전환을 통한 누적 가입 예상 추이 (단위: 명)</div>
            </div>
            
            <div style={{ flex: 1 }}>
              <table className="v2-table" style={{ wordBreak: 'keep-all', lineHeight: '1.4', fontSize: '0.9rem' }}>
                <thead>
                  <tr>
                    <th>평가 지표</th>
                    <th>현재 (협약 전)</th>
                    <th>목표 (협약 후)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center font-bold">오차율(RMSE)</td>
                    <td className="text-center">1.8 kcal/mol</td>
                    <td className="text-center font-bold">1.0 kcal/mol 이하</td>
                  </tr>
                  <tr>
                    <td className="text-center font-bold">베타 테스터 수</td>
                    <td className="text-center">0 기관</td>
                    <td className="text-center font-bold">10개 기관 (MOU)</td>
                  </tr>
                  <tr>
                    <td className="text-center font-bold">특허 출원</td>
                    <td className="text-center">0 건</td>
                    <td className="text-center font-bold">국내 특허 1건</td>
                  </tr>
                </tbody>
              </table>
              <p style={{ fontSize: '0.75rem', color: '#6b7280', margin: '0.5rem 0 0 0', textAlign: 'right' }}>
                * 근거: 자사 R&D 로드맵 및 내부 목표설정 기준치
              </p>
            </div>
          </div>

        </section>

        <section>
          <h2 className="v2-sub-title" style={{ marginTop: '3rem'}}>3-2. 목표 달성계획</h2>
          
          <p className="v2-box-desc" style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
            ■ 총 20,000,000원(정부지원금 2천만원) 투입 대비 세부 산출 내역
          </p>
          <p className="v2-box-desc" style={{ marginBottom: '1rem', wordBreak: 'keep-all', lineHeight: '1.6' }}>
            본 과제에서는 시제품(MVP)의 엔진 고도화를 위한 <strong>특수 목적형 H/W 임차(GPU 서버)</strong>와 비전문가용 UI를 구성하는 <strong>외주 개발비</strong>에 가장 큰 비중(65%)을 할당하여 핵심 성과물을 신속히 도출하고자 합니다.
          </p>

          {/* Rule 3 & 6: Meaningful Execution Table with calculations and wrap control */}
          <div className="v2-table-wrapper" style={{ marginTop: '0.5rem' }}>
            <table className="v2-table" style={{ wordBreak: 'keep-all', lineHeight: '1.6' }}>
              <thead>
                <tr>
                  <th style={{width: '20%'}}>항목명 (비목)</th>
                  <th style={{width: '35%'}}>산출 내역서 (단가 × 수량 = 금액)</th>
                  <th style={{width: '15%'}}>금액 (천원)</th>
                  <th style={{width: '30%'}}>비고 (사용 목적 및 근거)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center font-bold">외주용역비</td>
                  <td>
                    Web 3D 분자 도킹 핵심 UI 모듈 1차 개발 용역<br/>
                    (8,000,000원 × 1건)
                  </td>
                  <td className="text-center font-bold">8,000</td>
                  <td>UX 전문가 외주를 통한 사용자 접근성 향상 (표준 단가표 적용)</td>
                </tr>
                <tr>
                  <td className="text-center font-bold">기계장치 임차비</td>
                  <td>
                    분산 처리용 클라우드 GPU(A100) 단기 렌탈비<br/>
                    (2,000,000원 × 3개월)
                  </td>
                  <td className="text-center font-bold">6,000</td>
                  <td>AI 백엔드 모델 파라미터 튜닝용 컴퓨팅 자원 확보</td>
                </tr>
                <tr>
                  <td className="text-center font-bold">무형자산 취득비</td>
                  <td>
                    선행 기술 조사 및 BM 특허 1건 출원비용<br/>
                    (3,500,000원 × 1건)
                  </td>
                  <td className="text-center font-bold">3,500</td>
                  <td>지식재산권 확보 및 침해 분쟁 사전 대응 준비</td>
                </tr>
                <tr>
                  <td className="text-center font-bold">광고선전비</td>
                  <td>
                    B2B 마케팅용 브로셔 및 홈페이지 리뉴얼 제작비<br/>
                    (2,500,000원 × 1건)
                  </td>
                  <td className="text-center font-bold">2,500</td>
                  <td>베타 테스터 모집 및 학회 부스용 오프라인 홍보물 수급</td>
                </tr>
                <tr>
                  <td colSpan="2" className="text-center" style={{ backgroundColor: '#f1f5f9', fontWeight: 'bold' }}>합 계 (최대 정부지원금 예상액)</td>
                  <td className="text-center" style={{ backgroundColor: '#f1f5f9', fontWeight: 'bold' }}>20,000</td>
                  <td className="text-center" style={{ backgroundColor: '#f1f5f9' }}>100.0%</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Rule 1: Evidence Text */}
          <p style={{ fontSize: '0.75rem', color: '#6b7280', margin: '0.5rem 0 0 0' }}>
            * 근거 1: 한국소프트웨어산업협회(KOSA) "2024년 적용 SW 기술자 평균임금 현황" 단가 가이드 적용.<br/>
            * 근거 2: 특허청 "지식재산권 설정 등록 및 수수료 안내" 규정 반영.
          </p>

        </section>

      </div>
    </div>
  );
};

export default PerformanceV3;
