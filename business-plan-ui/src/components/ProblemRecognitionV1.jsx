import React from 'react';
import { ShieldAlert, TrendingDown, ServerCrash, Cpu, Globe, Database, ArrowRight, Activity, Zap } from 'lucide-react';
import '../App.css';

const ProblemRecognition = () => {
  return (
    <div className="document-paper animate-fade-in">
      {/* Header Section */}
      <h1 className="section-title">
        <Activity size={32} />
        1. 문제 인식 (Problem)
      </h1>

      {/* 1-1. Background & Current Status */}
      <section className="delay-100">
        <h2 className="sub-title">1-1. 창업아이템의 배경 및 현황 (외적 동기)</h2>
        
        <div className="card-grid">
          <div className="info-card">
            <div className="card-icon">
              <TrendingDown size={24} />
            </div>
            <h3 className="card-title">신약 R&D 경제적 임계점 (경제성)</h3>
            <p className="card-desc">
              외산 소프트웨어(Schrödinger 등)는 사용자당 <strong>연간 1.4억 원</strong> 이상의 과도한 라이선스를 요구하여 국내 바이오 벤처의 90%가 도입을 포기합니다.
            </p>
            <div className="badge-container">
              <span className="badge">비용 병목</span>
              <span className="badge">예산 초과</span>
            </div>
          </div>

          <div className="info-card">
            <div className="card-icon">
              <ServerCrash size={24} />
            </div>
            <h3 className="card-title">전통적 예측 기술 한계 (기술성)</h3>
            <p className="card-desc">
              리눅스 커맨드라인(CLI) 방식의 높은 진입장벽과 블랙박스 AI 모델로 인해 <strong>결과 해석이 난해</strong>하고 오차가 커서 신뢰도가 낮습니다.
            </p>
            <div className="badge-container">
              <span className="badge">정확도 한계</span>
              <span className="badge">블랙박스 이슈</span>
            </div>
          </div>

          <div className="info-card">
            <div className="card-icon">
              <ShieldAlert size={24} />
            </div>
            <h3 className="card-title">클라우드 종속 보안 공백 (사회성)</h3>
            <p className="card-desc">
              핵심 자산인 신약 후보물질의 데이터가 해외 서버로 전송되어, <strong>국가적 기술 안보와 데이터 주권</strong>이 위협받을 우려가 큽니다.
            </p>
            <div className="badge-container">
              <span className="badge">기술 안보</span>
              <span className="badge">데이터 주권</span>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="premium-table-wrapper">
          <table className="premium-table">
            <thead>
              <tr>
                <th>구분</th>
                <th>글로벌 선도 기업 (외산 A사)</th>
                <th>국내 바이오 벤처 현황</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="cell-highlight">도입 비용</td>
                <td className="cell-warning">연간 라이선스 약 1.4억 원</td>
                <td>예산 부족으로 도입 포기 및 엑셀 수작업</td>
              </tr>
              <tr>
                <td className="cell-highlight">기술 장벽</td>
                <td className="cell-warning">전문 전산화학 인력 필수 (CLI)</td>
                <td>연구 인력 부족으로 합성 실험 반복 지연</td>
              </tr>
              <tr>
                <td className="cell-highlight">데이터 보안</td>
                <td className="cell-warning">해외 클라우드 종속</td>
                <td>국내 보안망 외부 망분리 한계 노출</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 1-2. Necessity & Blockquote */}
      <section className="delay-200">
        <h2 className="sub-title">1-2. 창업아이템의 개발 필요성 (내적 동기)</h2>
        
        <div className="premium-quote">
          <div className="quote-text">
            "비싼 소프트웨어가 없어서 연구를 포기하는 기업이 없어야 합니다. 기술의 민주화를 통해 K-바이오 생태계에 기여하겠습니다."
          </div>
          <div className="quote-author">- (가칭) 퀀텀바인드 AI 대표자 -</div>
        </div>

        <p className="card-desc" style={{ marginBottom: '2rem' }}>
          본 대표자는 트랜스포머(Transformer) 기술과 분자동력학(Molecular Dynamics)을 연구하여 <strong>AI-물리 하이브리드(Hybrid) 예측 엔진</strong>을 설계할 수 있는 실무적 역량을 보유하고 있습니다. 이를 통해 고정밀 예측 시뮬레이터 국산화를 이룩하겠습니다.
        </p>
      </section>

      {/* 1-3. Solution Workflow */}
      <section className="delay-300">
        <h2 className="sub-title">1-3. 문제 해결을 위한 핵심 프로세스 (목표)</h2>
        
        <div className="process-diagram">
          <div className="process-step">
            <div className="step-number">1</div>
            <Database className="step-icon" size={40} />
            <div className="step-title">토폴로지 전처리</div>
            <div className="step-desc">구조 자동 인식 및<br/>전처리(Topology) 생성</div>
          </div>
          
          <ArrowRight className="process-arrow" size={32} />
          
          <div className="process-step">
            <div className="step-number">2</div>
            <Cpu className="step-icon" size={40} />
            <div className="step-title">전하 AI 예측</div>
            <div className="step-desc">Transformer 기반<br/>부분 전하 정밀 예측 (AI)</div>
          </div>

          <ArrowRight className="process-arrow" size={32} />

          <div className="process-step">
            <div className="step-number">3</div>
            <Zap className="step-icon" size={40} />
            <div className="step-title">자동 MD 시뮬레이션</div>
            <div className="step-desc">FEP 파라미터 최적화<br/>물리 엔진 검증 (Physics)</div>
          </div>

          <ArrowRight className="process-arrow" size={32} />

          <div className="process-step">
            <div className="step-number">4</div>
            <Globe className="step-icon" size={40} />
            <div className="step-title">웹 대시보드 시각화</div>
            <div className="step-desc">No-Code 기반 웹 플랫폼<br/>결과 분석 리포트</div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProblemRecognition;
