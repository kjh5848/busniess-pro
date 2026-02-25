import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const revenueData = [
  { stage: '‘26 (Seed)', revenue: 0, title: '체험판 배포' },
  { stage: '‘27 (Pre-A)', revenue: 3, title: 'B2B 부분유료화' },
  { stage: '‘28 (Ser-A)', revenue: 12, title: 'Enterprise 확장' },
  { stage: '‘29 (Ser-B)', revenue: 45, title: '글로벌 오픈' },
];

const GrowthV3 = () => {
  return (
    <div className="v2-theme v2-container">
      <div className="v2-paper">
        
        <h1 className="v2-section-title">
          4. 성장전략 (Scale-up)
        </h1>

        <section>
          <h2 className="v2-sub-title">4-1. 제품‧서비스의 목표시장 분석</h2>

          {/* Rule 5: Key Message Quote */}
          <div className="v2-info-box" style={{ borderLeft: '4px solid #333', marginBottom: '1.5rem', backgroundColor: '#fcfcfc' }}>
            <p style={{ fontWeight: 'bold', margin: '0', fontSize: '1.05rem', wordBreak: 'keep-all', lineHeight: '1.6' }}>
              "초기에는 대학 및 연구소 시장을 선점하여 브랜드 신뢰도를 쌓고, 축적된 데이터를 바탕으로 보안이 중요한 중견/글로벌 제약사에 전용 서버 모델(Enterprise)을 공급하여 폭발적인 매출 성장을 시현하는 전략입니다."
            </p>
          </div>

          <p className="v2-box-desc" style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
            ■ 4개년 누적 매출액 달성 계획 (성장 곡선)
          </p>

          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', marginBottom: '2rem' }}>
            {/* Rule 2: Upward Trending Chart (BarChart) */}
            <div style={{ flex: 1, height: 220, border: '1px solid #e5e5e5', backgroundColor: '#fff', padding: '1rem 1rem 0 0' }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={revenueData} margin={{ top: 20, right: 20, bottom: 20, left: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" vertical={false} />
                  <XAxis dataKey="stage" fontSize={11} stroke="#6b7280" tick={{ fill: '#6b7280' }} interval={0} />
                  <YAxis fontSize={11} stroke="#6b7280" tick={{ fill: '#6b7280' }} />
                  <Tooltip cursor={{ fill: '#f3f4f6' }} contentStyle={{ fontSize: '0.85rem' }} formatter={(value) => [`${value}억 원`, '예상 매출']} />
                  <Bar dataKey="revenue" fill="#374151" barSize={40} radius={[4, 4, 0, 0]} label={{ position: 'top', fill: '#4b5563', fontSize: 11, formatter: (val) => `${val}억` }} />
                </BarChart>
              </ResponsiveContainer>
              <div style={{ textAlign: 'center', fontSize: '0.8rem', color: '#6b7280', marginTop: '0.5rem' }}>[그림 4] 단계별 예상 예상 매출액 트렌드</div>
            </div>
            
            <div style={{ flex: 1 }}>
              <p className="v2-box-desc" style={{ marginBottom: '1rem', wordBreak: 'keep-all', lineHeight: '1.6' }}>
                초기에는 시장 침투를 위해 체험판(무료 시범 운영) 정책을 사용하며, 이후 데이터 사용량이 넘어가는 시점에 구독료 형태로 전환합니다.
              </p>
              {/* Evidence Rule */}
              <p style={{ fontSize: '0.75rem', color: '#6b7280', margin: '0' }}>
                * 초기 매출 산출 근거 (상향식 계산): 국내 약대 연구실 35개 및 초기 벤처 100개사 초기 확보(총 135곳) × 연간 객단가 120만 원 = 첫해 최소 보장 매출 1.6억 원 시현 예상<br/>
                * 글로벌 시장 침투 1% 달성 시 폭발적인 추가 성장 기대
              </p>
            </div>
          </div>

          <p className="v2-box-desc" style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
            ■ 목표 시장 진입 및 비용 청구(수익 모델) 방식
          </p>

          {/* Rule 3 & 6: Specific BM Table */}
          <div className="v2-table-wrapper" style={{ marginTop: '0.5rem' }}>
            <table className="v2-table" style={{ wordBreak: 'keep-all', lineHeight: '1.6' }}>
              <thead>
                <tr>
                  <th style={{width: '20%'}}>수익 모델 분류</th>
                  <th style={{width: '40%'}}>핵심 고객층 (Target)</th>
                  <th style={{width: '20%'}}>과금 기준</th>
                  <th style={{width: '20%'}}>예상 객단가</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center font-bold">1. 웹 기반 기본 구독</td>
                  <td>학계(약대 연구소), 초기 바이오 벤처기업 등 예산이 한정적인 소규모 집단</td>
                  <td>월 기본료 부과<br/>(최대 동시접속 3대 제한)</td>
                  <td className="text-center">월 99,000원<br/>(계정 당)</td>
                </tr>
                <tr>
                  <td className="text-center font-bold">2. 서버 점유형 과금</td>
                  <td>일시적으로 대규모 연산 트래픽이 집중적으로 필요한 중견 기업 산하 연구 조직</td>
                  <td>서버 점유율<br/>시간 단위 종량제 부과</td>
                  <td className="text-center">시간 당 3,000원<br/>(최상급 그래픽 서버)</td>
                </tr>
                <tr>
                  <td className="text-center font-bold">3. 전용망 라이선스</td>
                  <td>보안이 매우 중요한 신약 개발 파이프라인을 보유한 중견/글로벌 빅파마</td>
                  <td>기업 자체 서버 내부망 설치 지원 및 연간 무제한 라이선스 부과</td>
                  <td className="text-center">연간 5천만 원 이상<br/>(맞춤형 구축 비용 별도)</td>
                </tr>
              </tbody>
            </table>
          </div>

        </section>

        <section>
          <h2 className="v2-sub-title" style={{ marginTop: '3rem'}}>4-2. 창업아이템의 개발 사업화 전략</h2>
          <p className="v2-box-desc" style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
            ■ 기술 검증부터 글로벌 진출까지의 3단계 마일스톤
          </p>
          <div className="v2-table-wrapper" style={{ marginTop: '0.5rem' }}>
            <table className="v2-table" style={{ wordBreak: 'keep-all', lineHeight: '1.6' }}>
              <thead>
                <tr>
                  <th style={{width: '20%'}}>단계</th>
                  <th style={{width: '60%'}}>주요 추진 전략 (Action Plan)</th>
                  <th style={{width: '20%'}}>달성 기한</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center font-bold">1단계<br/>(MVP 실증)</td>
                  <td>핵심 AI 연산 엔진 개발 완료 및 보안 클라우드 환경 배포. 약 10개 대학 연구실 대상 <strong>무상 베타(Beta) 서비스 제공을 통한 사용자 피드백 확보</strong> 및 오차율(1.0 이하) 튜닝 완료.</td>
                  <td className="text-center">2026.11<br/>(협약 종료)</td>
                </tr>
                <tr>
                  <td className="text-center font-bold">2단계<br/>(국내 상용화)</td>
                  <td>베타 테스터의 성공 사례(Reference)를 바탕으로 한국제약바이오협회 소속 <strong>중견 제약사 및 바이오 벤처에 정식 유료 구독 모델 런칭.</strong> (투자 혹한기를 고려한 파격적인 1년 구독 할인판 출시)</td>
                  <td className="text-center">2027.06</td>
                </tr>
                <tr>
                  <td className="text-center font-bold">3단계<br/>(글로벌 확장)</td>
                  <td>아마존 AWS 등 <strong>글로벌 클라우드 마켓플레이스 에 응용 프로그램(API) 서비스로 등재</strong>시켜 전 세계 연구진의 자연 유입과 북미/유럽 학회 활동을 통한 판로개척.</td>
                  <td className="text-center">2028.12</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="v2-sub-title" style={{ marginTop: '3rem'}}>4-3. 창업아이템 경쟁력 확보 방안</h2>
          <div className="v2-box-grid" style={{ marginTop: '0.5rem' }}>
            <div className="v2-info-box" style={{ flexDirection: 'column' }}>
              <div style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: '#111' }}>[진입 장벽 구축] 데이터 선순환을 통한 독점력(Lock-in)</div>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.85rem', color: '#4b5563', lineHeight: '1.6' }}>
                <li>플랫폼 사용자가 증가할수록 <strong>AI 알고리즘이 학습하는 화학 분자 패턴 리소스가 폭발적으로 기하급수적 성장</strong>을 이룹니다.</li>
                <li>이는 결국 예측 성능(오차율 개선)의 초격차로 이어지며, 후발 주자가 코드를 모방하더라도 쌓여있는 방대한 '학습 데이터의 양' 때문에 쉽게 따라잡을 수 없는 구조적 혜택을 제공합니다.</li>
              </ul>
            </div>
            
            <div className="v2-info-box" style={{ flexDirection: 'column' }}>
              <div style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: '#111' }}>[지식재산권] 원천 기술 특허망(Portfolio) 구축</div>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.85rem', color: '#4b5563', lineHeight: '1.6' }}>
                <li>하이브리드(AI-양자역학 결합) 분석 로직에 대한 <strong>비즈니스 모델(BM) 및 처리 구조 특허를 국내에 선출원 완료</strong>하였습니다.</li>
                <li>향후 북미 진출을 대비하여 PCT 국제 출원 최우선 심사를 활용해 핵심 권리 범위를 선점하고 분쟁 리스크를 해소할 예정입니다.</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="v2-sub-title" style={{ marginTop: '3rem'}}>4-4. 자금 조달 계획</h2>
          <p className="v2-box-desc" style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
            ■ 총소요 자금(정부지원금 + 민간투자금) 조달 및 집행 로드맵
          </p>
          <div className="v2-table-wrapper" style={{ marginTop: '0.5rem' }}>
            <table className="v2-table" style={{ wordBreak: 'keep-all', lineHeight: '1.6' }}>
              <thead>
                <tr>
                  <th style={{width: '25%'}}>조달 목적</th>
                  <th style={{width: '25%'}}>재원 구분</th>
                  <th style={{width: '20%'}}>규모 (천원)</th>
                  <th style={{width: '30%'}}>비고 (활용 계획)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center font-bold">도입기<br/>(극초기 생존)</td>
                  <td className="text-center"><strong>본 예비창업패키지</strong><br/>+ 창업자 자본금</td>
                  <td className="text-center">30,000</td>
                  <td>최소 기능 제품(MVP) 외주 개발 및 단기 클라우드 임대 등 <strong>초기 제품 개발에 100% 집중.</strong></td>
                </tr>
                <tr>
                  <td className="text-center font-bold">성장기<br/>(시장 침투)</td>
                  <td className="text-center">시드(Seed) 투자유치<br/>(A엑셀러레이터 논의 중)</td>
                  <td className="text-center">100,000</td>
                  <td>정규직 영업/프론트엔드 인력 채용 및 마케팅 채널 다각화(영업 활성화).</td>
                </tr>
                <tr>
                  <td className="text-center font-bold">안정기<br/>(기술 고도화)</td>
                  <td className="text-center"><strong>초기창업패키지 연계</strong><br/>+ TIPS 과제 지원 예정</td>
                  <td className="text-center">500,000</td>
                  <td>글로벌 확장을 위한 서버 인프라 매입 결산 및 차세대 AI 모델(R&D) 고도화 전용.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="v2-sub-title" style={{ marginTop: '3rem'}}>4-5. 시장진입 및 성과 창출 전략</h2>
          
          <div className="v2-box-grid" style={{ marginTop: '0.5rem' }}>
            <div className="v2-info-box" style={{ flexDirection: 'column' }}>
              <div style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: '#111' }}>[내수 시장] B2B 다이렉트 세일즈</div>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.85rem', color: '#4b5563', lineHeight: '1.6' }}>
                <li>타겟: KAMP(한국제약바이오협회) 회원사 및 국내 주요 약대 연구실</li>
                <li>전략: 공동대표의 학계 네트워크를 통한 레퍼런스 확보 및 '무료 진단 컨설팅' 미끼 상품 활용</li>
              </ul>
            </div>
            
            <div className="v2-info-box" style={{ flexDirection: 'column' }}>
              <div style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: '#111' }}>[글로벌 시장] API 파트너십 확판</div>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.85rem', color: '#4b5563', lineHeight: '1.6' }}>
                <li>타겟: 클라우드 벤더(AWS Health 등) 및 글로벌 CRO 기구</li>
                <li>전략: 자사 엔진을 마켓플레이스에 플러그인(API) 형태로 등재하여 자연 유입 트래픽 캡처</li>
              </ul>
            </div>
          </div>

          <p className="v2-box-desc" style={{ fontWeight: 'bold', marginBottom: '0.5rem', marginTop: '2rem' }}>
            ■ 사회적 성과(ESG) 달성 기대효과
          </p>

          <div className="v2-box-grid" style={{ marginTop: '0.5rem' }}>
            <div className="v2-info-box" style={{ flexDirection: 'column' }}>
              <p className="v2-box-desc" style={{ marginBottom: '0.5rem', borderBottom: '1px solid #e5e5e5', paddingBottom: '0.5rem' }}>
                <strong style={{ color: '#111' }}>[Environment] 무분별한 화학 폐기물 절감 (동물실험 축소)</strong>
              </p>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#4b5563', wordBreak: 'keep-all', lineHeight: '1.6' }}>
                초정밀 예측 시뮬레이션 도입으로 물리적 실험을 위한 독성 화학 시약 폐기물을 획기적으로 줄이며, 실효성 없는 물질에 강행되는 <strong>전임상 동물 실험의 희생 숫자를 30% 이상 경감</strong>할 수 있습니다.
              </p>
            </div>

            <div className="v2-info-box" style={{ flexDirection: 'column' }}>
              <p className="v2-box-desc" style={{ marginBottom: '0.5rem', borderBottom: '1px solid #e5e5e5', paddingBottom: '0.5rem' }}>
                <strong style={{ color: '#111' }}>[Social] 자본력에 따른 연구 생태계 양극화(불평등) 해소</strong>
              </p>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#4b5563', wordBreak: 'keep-all', lineHeight: '1.6' }}>
                수억 원의 프리미엄 외산 제품을 도입하지 못해 경쟁에서 도태되던 중소 벤처기업들의 예측 정보 인프라 장벽을 완전히 허물어, <strong>오직 아이디어만으로도 신약을 설계할 수 있는 생태계 활성화</strong>를 이끌어냅니다.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default GrowthV3;
