import React from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const userGrowthData = [
  { month: '26.06', users: 50 },
  { month: '26.08', users: 150 },
  { month: '26.10', users: 400 },
  { month: '26.12', users: 1200 },
  { month: '27.03', users: 3500 },
];

const PerformanceV5 = () => {
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
              "해외 의존도가 높은 기존 신약 시뮬레이션 H/W 인프라를 클라우드로 전환하여, 초기 스타트업 및 대학 연구실 대상 웹 구독형(SaaS) 솔루션의 시제품 스크리닝 시장점유율 10%를 최우선 확보한다."
            </p>
          </div>

          <p className="v2-box-desc" style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
            ■ 주요 달성 지표 (사업 평가 기준)
          </p>

          <div className="v2-table-wrapper" style={{ marginTop: '0.5rem', marginBottom: '2rem' }}>
            <table className="v2-table" style={{ wordBreak: 'keep-all', lineHeight: '1.4', fontSize: '0.85rem' }}>
              <thead>
                <tr>
                  <th style={{ width: '10%' }}>구 분</th>
                  <th style={{ width: '70%' }}>성 과 지 표</th>
                  <th style={{ width: '20%' }}>일 정</th>
                </tr>
              </thead>
              <tbody>
                {/* 공통 지표 */}
                <tr>
                  <td rowSpan="3" className="text-center font-bold" style={{ backgroundColor: '#fcfcfc' }}>공<br/>통</td>
                  <td>
                    <strong>아이템 고도화 목표</strong><br/>
                    - PDBbind 1,000종 화합물 데이터셋 활용 대규모 블라인드 백테스트 수행<br/>
                    - 오차율(RMSE) <span style={{ color: '#2563eb', fontWeight: 'bold' }}>1.0 kcal/mol 이하 달성 (관련 AI 학회/저널 논문 1편 게재)</span><br/>
                    - 연합학습 파이프라인 기반 SaaS 초기 MVP 베타 런칭
                  </td>
                  <td className="text-center">
                    '26. 08. 31.<br/>
                    '26. 10. 15.<br/>
                    '26. 11. 30.
                  </td>
                </tr>
                <tr>
                  <td><strong>매출목표(원)</strong> (베타 테스터 한정 구독료 수입 및 FEP 과금 1차 실증)</td>
                  <td className="text-center font-bold">'26. 11. 30.</td>
                </tr>
                <tr>
                  <td><strong>고용목표(명)</strong><br/>기존(0)명 / 신규(2)명 / 총(2)명 (서버 및 UI 프론트엔드 전담 인력)</td>
                  <td className="text-center font-bold">'26. 06. 30.</td>
                </tr>
                
                {/* 선택 지표 */}
                <tr>
                  <td rowSpan="5" className="text-center font-bold" style={{ backgroundColor: '#fcfcfc' }}>선<br/>택</td>
                  <td><strong>투자유치 금액(원)</strong> (TIPS 프로그램 연계 시드 후속 투자 유치 2억)</td>
                  <td className="text-center">'26. 11. 30.</td>
                </tr>
                <tr>
                  <td><strong>타지원사업 선정</strong> (정부 R&D 창업성장기술개발사업 디딤돌 실증 과제 연계)</td>
                  <td className="text-center">'26. 09. 30.</td>
                </tr>
                <tr>
                  <td><strong>인증서 등 취득</strong> (소프트웨어 품질 인증 GS 1등급 확보)</td>
                  <td className="text-center">'26. 11. 30.</td>
                </tr>
                <tr>
                  <td><strong>지재권(출원, 등록)</strong> (AI 하이브리드 분자 예측 알고리즘 원천 특허 국내 출원 1건)</td>
                  <td className="text-center">'26. 08. 15.</td>
                </tr>
                <tr>
                  <td><strong>기타</strong> (대학 연구실 및 초기 벤처 대상 베타 테스터 MOU 10개 기관 체결)</td>
                  <td className="text-center">'26. 10. 30.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ backgroundColor: '#f8fafc', padding: '1.2rem', borderRadius: '8px', border: '1px solid #e2e8f0', marginBottom: '1.5rem', fontSize: '0.85rem', lineHeight: '1.6', wordBreak: 'keep-all' }}>
            <h3 style={{ color: '#1e3a8a', fontWeight: 'bold', margin: '0 0 0.5rem 0', fontSize: '0.95rem' }}>
              💡 [참고] 성과 지표(RMSE 1.0 이하 달성)의 기술적 타당성 및 논문 출판 계획
            </h3>
            <p style={{ margin: '0 0 0.5rem 0', color: '#1f2937' }}>
              전통적인 도킹(Docking) 방식의 결합 친화도 예측 오차율(RMSE)은 통상 2~4 kcal/mol 수준에 머무르나, 본 과제에서 도입하는 <strong>최신 AI 아키텍처</strong>는 이를 1.0 kcal/mol 이하로 혁신하는 것을 목표로 합니다.
            </p>
            <ul style={{ margin: '0', paddingLeft: '1.2rem', color: '#334155' }}>
              <li style={{ marginBottom: '0.3rem' }}><strong>PGNN(물리 법칙 기반 신경망) & GCN 적용:</strong> 물리 법칙과 3차원 그래프 신경망을 결합하여 거대 화합물 공간에서도 강력한 일반화 성능 확보</li>
              <li style={{ marginBottom: '0.3rem' }}><strong>3D-CNN 앙상블 프레임워크:</strong> 단백질 포켓과 리간드의 3차원 상호작용 정보를 복셀화(Voxelization)하여 개별 예측 모델의 불안정성 한계 돌파</li>
              <li><strong>연구 우수성 입증 (우수 학술지 게재):</strong> PDBbind 벤치마크셋 기반의 검증 결과를 정리하여 유력 AI 신약개발 학술지(Bioinformatics, ISMB 등)에 논문(1편 이상)을 제출, 원천 기술의 객관적 공신력을 확보할 계획입니다.</li>
            </ul>
          </div>

        </section>

        <section>
          <h2 className="v2-sub-title" style={{ marginTop: '3rem'}}>3-2. 목표 달성계획</h2>
          
          <p className="v2-box-desc" style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
            ■ 총 20,000,000원(정부지원금 2천만원) 투입 대비 세부 산출 내역
          </p>
          <p className="v2-box-desc" style={{ marginBottom: '1rem', wordBreak: 'keep-all', lineHeight: '1.6' }}>
            본 과제에서는 시제품(MVP)의 엔진 고도화를 위한 <strong>특수 목적형 H/W 임차(GPU 서버)</strong>와 비전문가용 UI를 구성하는 <strong>외주 개발비</strong>에 가장 큰 비중(65%)을 할당하여 핵심 성과물을 신속히 도출하고자 한다.
          </p>

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
                <tr style={{ backgroundColor: '#eff6ff' }}>
                  <td className="text-center font-bold" style={{ color: '#1e3a8a' }}>기계장치 임차비</td>
                  <td style={{ color: '#1e3a8a' }}>
                    분산 처리용 클라우드 GPU(A100) 백테스트 렌탈비<br/>
                    (2,000,000원 × 3개월)
                  </td>
                  <td className="text-center font-bold" style={{ color: '#1e3a8a' }}>6,000</td>
                  <td style={{ color: '#1e3a8a' }}>1.0 Kcal/mol 증빙을 위한 공개 데이터셋 블라인드 테스트 자원 확보</td>
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

          <p style={{ fontSize: '0.75rem', color: '#6b7280', margin: '0.5rem 0 0 0' }}>
            * 근거 1: 한국소프트웨어산업협회(KOSA) "2024년 적용 SW 기술자 평균임금 현황" 단가 가이드 적용.<br/>
            * 근거 2: 특허청 "지식재산권 설정 등록 및 수수료 안내" 규정 반영.
          </p>

        </section>

      </div>
    </div>
  );
};

export default PerformanceV5;
