import React from 'react';
import { LineChart, Globe, DollarSign, Leaf, Rocket, Network, ShieldCheck, Zap } from 'lucide-react';

const GrowthV1 = () => {
  return (
    <div className="document-paper animate-fade-in delay-100">
      <h1 className="section-title">
        <LineChart size={32} />
        4. 성장전략 (Scale-up)
      </h1>

      <section>
        <h2 className="sub-title">4-1. 비즈니스 모델 및 진입 전략</h2>
        
        {/* Business Model Cards */}
        <div className="card-grid">
          <div className="info-card">
            <div className="card-icon"><Network size={24} /></div>
            <h3 className="card-title">SaaS 구독 (Main)</h3>
            <p className="card-desc">초기 스타트업/연구소 타겟의 합리적인 <strong>월 요금제</strong> 도입으로 S/W 접근성 확대</p>
          </div>
          <div className="info-card">
            <div className="card-icon"><Zap size={24} /></div>
            <h3 className="card-title">On-Demand 연산</h3>
            <p className="card-desc">대규모 MD 시뮬레이션 수행 시 백엔드 클라우드 <strong>GPU 자원에 대한 시간당 과금</strong></p>
          </div>
          <div className="info-card">
            <div className="card-icon"><ShieldCheck size={24} /></div>
            <h3 className="card-title">Enterprise API</h3>
            <p className="card-desc">내부망 보안(On-Premise) 및 커스텀 파이프라인 연동이 필요한 <strong>대기업 대상 연간 라이선스</strong></p>
          </div>
        </div>

        {/* Go-To-Market Strategy Process */}
        <div style={{ marginTop: '3rem' }}>
          <h3 style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>목표 시장 진입 전략 (Go-to-Market)</h3>
          <div className="process-diagram">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-title">초기 레퍼런스 확보</div>
              <div className="step-desc">대학/연구소<br/>무상 배포 (PLG)</div>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-title">국내 B2B 실증</div>
              <div className="step-desc">바이오 벤처<br/>SaaS 유료 구독화</div>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-title">아시아/중견 확장</div>
              <div className="step-desc">프라이빗 클라우드<br/>API 솔루션 공급</div>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-title">글로벌 스케일업</div>
              <div className="step-desc">Global Big Pharma<br/>공동 개발 파트너십</div>
            </div>
          </div>
        </div>
      </section>

      <section className="delay-200" style={{ marginTop: '3rem' }}>
        <h2 className="sub-title">4-2. 자금 확보 및 ESG 중장기 전략</h2>
        
        {/* Funding Table */}
        <div className="premium-table-wrapper">
          <table className="premium-table">
            <thead>
              <tr>
                <th>투자 유치 단계</th>
                <th>예상 시기</th>
                <th>목표 조달 금액</th>
                <th>주요 자금 활용 계획</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="cell-highlight">Seed (예창패)</td>
                <td>협약기간 내</td>
                <td className="cell-success">1억 원</td>
                <td>시제품(MVP) 제작, 특허 출원, 초기 아키텍처 서버 구축</td>
              </tr>
              <tr>
                <td className="cell-highlight">Pre-A (TIPS)</td>
                <td>협약 종료 후</td>
                <td className="cell-success">7 ~ 10억 원</td>
                <td>Auto-MD 기술 고도화, 계산화학 전문 인력 채용, 정식 법인 설립</td>
              </tr>
              <tr>
                <td className="cell-highlight">Series A</td>
                <td>서비스 런칭 후</td>
                <td className="cell-success">30억 원 이상</td>
                <td>글로벌 마케팅 전개, 해외 지사(미국) 설립, 대규모 Cloud GPU 확보</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ESG Highlight */}
        <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem' }}>
          <div className="premium-quote" style={{ flex: 1, background: 'linear-gradient(135deg, #059669, #10b981)', padding: '1.5rem', margin: 0 }}>
            <Leaf size={32} style={{ margin: '0 auto 1rem', display: 'block', opacity: 0.8 }} />
            <div className="quote-text" style={{ fontSize: '1.1rem' }}>동물 실험 최소화 (Ethical)</div>
            <div className="quote-author" style={{ fontSize: '0.9rem' }}>고정밀 컴퓨터 예측을 통해 무분별한 화학 합성과 In-vivo 동물 실험을 획기적으로 감축합니다.</div>
          </div>
          
          <div className="premium-quote" style={{ flex: 1, background: 'linear-gradient(135deg, #2563eb, #3b82f6)', padding: '1.5rem', margin: 0 }}>
            <Globe size={32} style={{ margin: '0 auto 1rem', display: 'block', opacity: 0.8 }} />
            <div className="quote-text" style={{ fontSize: '1.1rem' }}>연구 민주화 (Social)</div>
            <div className="quote-author" style={{ fontSize: '0.9rem' }}>고비용 라이선스 장벽을 허물어 학계 및 중소 벤처 연구자에게 평등한 신약 개발 기회를 제공합니다.</div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default GrowthV1;
