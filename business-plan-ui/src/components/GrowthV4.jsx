import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const revenueData = [
  { stage: '‘26 (베타)', revenue: 0, title: '무료 시범 운영' },
  { stage: '‘27 (도입기)', revenue: 5, title: '기본 구독 전환' },
  { stage: '‘28 (성장기)', revenue: 25, title: 'FEP 종량제 확대' },
  { stage: '‘29 (도약기)', revenue: 80, title: '글로벌 연합 확장' },
];

const GrowthV4 = () => {
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
              "연합학습으로 강력해진 모델과 저렴한 구독료의 이점을 살려 예산이 넉넉지 않은 벤처·학계 생태계를 우선 장악하고, 이를 통해 모인 고도의 예측 정확도를 무기 삼아 대형 제약사의 고단가 FEP 과금(종량제) 시장을 타겟팅합니다."
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
              <div style={{ textAlign: 'center', fontSize: '0.8rem', color: '#6b7280', marginTop: '0.5rem' }}>[그림 4] 단계별 예상 매출(BM) 트렌드</div>
            </div>
            
            <div style={{ flex: 1 }}>
              <p className="v2-box-desc" style={{ marginBottom: '1rem', wordBreak: 'keep-all', lineHeight: '1.6' }}>
                초기에는 시장 침투를 위해 모델 파라미터를 교환하는 학계 파트너들에게 구독료 할인 정책을 사용하며, 이후 최적화된 FEP 기능의 트래픽이 폭증하는 시점에 횟수 당 과금 비율을 높여 막대한 서버 임대 수익을 거둡니다.
              </p>
              {/* Evidence Rule */}
              <p style={{ fontSize: '0.75rem', color: '#6b7280', margin: '0' }}>
                * B2B 수익 추정 근거 (상향식 计算): 기본 구독처 200곳 × 월 10만원 + FEP 추가 횟수 당 과금을 합산한 예상 연매출액 산출.<br/>
                * 28년 이후 글로벌 클라우드 마켓(AWS 등) API 진입 통한 폭발적 스케일업 가정.
              </p>
            </div>
          </div>

          <p className="v2-box-desc" style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
            ■ 핵심 타겟 맞춤형 이중(Dual) 수익 모델 구조
          </p>

          {/* Rule 3 & 6: Specific BM Table */}
          <div className="v2-table-wrapper" style={{ marginTop: '0.5rem', marginBottom: '3rem' }}>
            <table className="v2-table" style={{ wordBreak: 'keep-all', lineHeight: '1.6' }}>
              <thead>
                <tr>
                  <th style={{width: '20%'}}>수익 모델 분류</th>
                  <th style={{width: '35%'}}>핵심 고객층 (Target Tier)</th>
                  <th style={{width: '25%'}}>과금 기준 및 제공 가치</th>
                  <th style={{width: '20%'}}>단가 정책</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center font-bold">1. 기본 라이선스<br/>(구독형)</td>
                  <td>학계(약대 연구소), 초기 바이오 스타트업 등 H/W 예산이 한정적이고 단순 스크리닝이 잦은 집단</td>
                  <td><strong>월간 토큰 제한 부여</strong><br/>저비용 범용 통계 처리 및 일반 3D 단백질 타겟 시뮬레이션 위주</td>
                  <td className="text-center">월 99,000원<br/>(기본 연산 토큰 포함)</td>
                </tr>
                <tr>
                  <td className="text-center font-bold">2. FEP 정밀 분석<br/>(종량제 과금)</td>
                  <td>후보 물질을 압축하고 실제 전임상 실험 전 돌입하고자 하는 중견 제약사 및 빅파마</td>
                  <td><strong>FEP 횟수 당 토큰 극대화 차감</strong><br/>시간 단위의 대규모 GPU 서버 점유율에 비례한 고비용 과금(Pay-per-use)</td>
                  <td className="text-center">1회 정밀 구조 분석당<br/>별도 토큰 차감(과금)</td>
                </tr>
              </tbody>
            </table>
          </div>

        </section>
      </div>
    </div>
  );
};

export default GrowthV4;
