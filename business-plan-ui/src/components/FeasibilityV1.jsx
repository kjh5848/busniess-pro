import React from 'react';
import { Target, Lightbulb, CheckCircle2, Cpu, Zap, Box, Presentation, Map, DollarSign } from 'lucide-react';

const FeasibilityV1 = () => {
  return (
    <div className="document-paper animate-fade-in delay-100">
      <h1 className="section-title">
        <Target size={32} />
        2. 실현 가능성 (Solution)
      </h1>

      <section>
        <h2 className="sub-title">2-1. 제품·서비스 개발 및 구체화 계획</h2>
        
        {/* Goals & Vision Cards */}
        <div className="card-grid">
          <div className="info-card">
            <div className="card-icon"><Target size={24} /></div>
            <h3 className="card-title">품질/성능 목표 (최종목표)</h3>
            <p className="card-desc">기존 물리 기반 시뮬레이션의 한계를 넘는 <strong>AI-물리 하이브리드 엔진</strong> 구축</p>
            <div className="badge-container">
              <span className="badge">RMSE ≤ 1.0</span>
              <span className="badge">설정 ≤ 10분</span>
              <span className="badge">비용 -80%</span>
            </div>
          </div>
          <div className="info-card">
            <div className="card-icon"><Lightbulb size={24} /></div>
            <h3 className="card-title">기업의 비전 (Vision)</h3>
            <p className="card-desc">실험실 수준의 정밀도를 웹상에서 구현하는 <strong>'Lab-on-Web' 분자 설계 자동화 OS</strong> 도약</p>
          </div>
          <div className="info-card">
            <div className="card-icon"><CheckCircle2 size={24} /></div>
            <h3 className="card-title">가치 제안 (Value)</h3>
            <p className="card-desc">'복잡한 설정' 병목을 <strong>Auto-Protocol</strong> 기술로 제거하여 비전문가도 즉시 사용 가능한 No-Code 환경</p>
          </div>
        </div>

        {/* Core Implementation Modules Workflow */}
        <div className="premium-quote" style={{ background: 'linear-gradient(135deg, #10b981, #059669)', margin: '3rem 0 1rem 0' }}>
          <div className="quote-text">핵심 구현 모듈: AI - Physics 하이브리드 자동화 파이프라인</div>
        </div>

        <div className="process-diagram">
          <div className="process-step">
            <div className="step-number">1</div>
            <Box className="step-icon" size={40} />
            <div className="step-title">Topology Builder</div>
            <div className="step-desc">분자 구조 자동 인식 및 토폴로지 전처리</div>
          </div>
          <div className="process-step">
            <div className="step-number">2</div>
            <Cpu className="step-icon" size={40} />
            <div className="step-title">Charge AI Predictor</div>
            <div className="step-desc">Transformer 기반 부분 전하 정밀 예측</div>
          </div>
          <div className="process-step">
            <div className="step-number">3</div>
            <Zap className="step-icon" size={40} />
            <div className="step-title">Auto-MD Protocol</div>
            <div className="step-desc">시뮬레이션 루프 및 파라미터 자동 최적화</div>
          </div>
          <div className="process-step">
            <div className="step-number">4</div>
            <Presentation className="step-icon" size={40} />
            <div className="step-title">Web Analysis GUI</div>
            <div className="step-desc">마우스 클릭형 결과 시각화 모니터링</div>
          </div>
        </div>
      </section>

      <section className="delay-200">
        <h2 className="sub-title">2-2. 차별성 및 경쟁력 확보 전략</h2>
        
        {/* Differentiation Table */}
        <div className="premium-table-wrapper">
          <table className="premium-table">
            <thead>
              <tr>
                <th>구분</th>
                <th>기존 CADD S/W</th>
                <th>단순 AI 모델</th>
                <th>하이브리드 엔진 (당사)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="cell-highlight">핵심가치</td>
                <td>정밀도 중심</td>
                <td>속도 중심</td>
                <td className="cell-success">정밀도 + 속도 + 편의성</td>
              </tr>
              <tr>
                <td className="cell-highlight">사용성</td>
                <td className="cell-warning">명령어(CLI) 기반</td>
                <td className="cell-warning">블랙박스로 해석 난해</td>
                <td className="cell-success">Web GUI (No-Code)</td>
              </tr>
              <tr>
                <td className="cell-highlight">비용/시간</td>
                <td className="cell-warning">고비용 / 수일 소요</td>
                <td>저비용 / 수초 소요</td>
                <td className="cell-success">기존 대비 50%↓ / 수시간 내</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Roadmap Cards */}
        <div style={{ marginTop: '2rem' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>
            <Map size={24} />
            기술 고도화 로드맵
          </h3>
          <div className="card-grid">
            <div className="info-card">
              <div className="card-title">STEP 1. Validation</div>
              <p className="card-desc">AI-물리 하이브리드 성능 검증<br/>웹 에디터 프로토타입 런칭</p>
            </div>
            <div className="info-card">
              <div className="card-title">STEP 2. Automation</div>
              <p className="card-desc">클라우드 병렬 연산 구축<br/>완전 자동화 SaaS 구독 전환</p>
            </div>
            <div className="info-card">
              <div className="card-title">STEP 3. Expansion</div>
              <p className="card-desc">글로벌 제약사 전용 API 구축<br/>항체 거대 분자로 확장</p>
            </div>
          </div>
        </div>
      </section>

      <section className="delay-300">
        <h2 className="sub-title">1단계 정부지원사업비 집행 계획</h2>
        <div className="premium-table-wrapper">
          <table className="premium-table">
            <thead>
              <tr>
                <th>비목</th>
                <th>산출 근거 (간략)</th>
                <th>사업비 (원)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="cell-highlight"><DollarSign size={16} style={{display:'inline', verticalAlign:'middle'}}/> 재료비</td>
                <td>클라우드 연산용 GPU/서버 인프라 비용 외</td>
                <td className="cell-success">10,000,000</td>
              </tr>
              <tr>
                <td className="cell-highlight"><DollarSign size={16} style={{display:'inline', verticalAlign:'middle'}}/> 외주용역비</td>
                <td>웹 기반 시각화 대시보드 UI 디자인/퍼블리싱</td>
                <td className="cell-success">10,000,000</td>
              </tr>
              <tr style={{ backgroundColor: 'var(--primary-light)', fontWeight: 'bold' }}>
                <td colSpan="2" className="cell-highlight">합계</td>
                <td className="cell-success">20,000,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default FeasibilityV1;
