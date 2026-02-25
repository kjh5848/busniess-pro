import React from 'react';
import { Target, Calendar, Users, TrendingUp, Award, ShieldCheck, Flag } from 'lucide-react';

const PerformanceV1 = () => {
  return (
    <div className="document-paper animate-fade-in delay-100">
      <h1 className="section-title">
        <Flag size={32} />
        3. 성과목표 (Performance Goals)
      </h1>

      <section>
        <h2 className="sub-title">3-1. 핵심 성과지표 (협약기간 내 ~'26.11)</h2>
        
        <div className="card-grid">
          {/* Milestone Card */}
          <div className="info-card">
            <div className="card-icon"><Calendar size={24} /></div>
            <h3 className="card-title">아이템 고도화 목표</h3>
            <ul style={{ listStyleType: 'none', paddingLeft: 0, marginTop: '1rem' }} className="card-desc">
              <li style={{ marginBottom: '0.8rem', display: 'flex', gap: '0.5rem' }}>
                <strong style={{ color: 'var(--primary-color)' }}>'26.06</strong>
                <span>AI/계산화학 핵심 인력 영입</span>
              </li>
              <li style={{ marginBottom: '0.8rem', display: 'flex', gap: '0.5rem' }}>
                <strong style={{ color: 'var(--primary-color)' }}>'26.08</strong>
                <span>웹 시뮬레이션 대시보드 UI 구축</span>
              </li>
              <li style={{ display: 'flex', gap: '0.5rem' }}>
                <strong style={{ color: 'var(--primary-color)' }}>'26.11</strong>
                <span>하이브리드 엔진 MVP 개발 완료</span>
              </li>
            </ul>
          </div>

          {/* HR & Revenue */}
          <div className="info-card">
            <div className="card-icon"><Users size={24} /></div>
            <h3 className="card-title">고용 및 매출 목표</h3>
            <div style={{ padding: '0.5rem 0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span className="card-desc">고용 목표 (총 2명)</span>
                <span className="badge">신규 1명 채용</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span className="card-desc">매출 목표</span>
                <span className="badge" style={{ backgroundColor: '#f1f5f9', color: '#64748b' }}>베타 무상 배포 0원</span>
              </div>
            </div>
            <p className="card-desc" style={{ marginTop: '1rem', fontSize: '0.85rem' }}>
              * 올해는 제품 검증에 집중하며, 초기 대학/연구소 무상 레퍼런스 확보 
            </p>
          </div>

          {/* Investment & IP */}
          <div className="info-card">
            <div className="card-icon"><TrendingUp size={24} /></div>
            <h3 className="card-title">투자유치 및 지재권</h3>
            <ul style={{ listStyleType: 'none', paddingLeft: 0, marginTop: '1rem' }} className="card-desc">
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Award size={16} /> <strong>예창패 지원금:</strong> 1억 확보
              </li>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Target size={16} /> <strong>TIPS 연계:</strong> Pre-A 7억원 목표
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ShieldCheck size={16} /> <strong>특허 출원:</strong> 하이브리드 알고리즘 1건
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="delay-200" style={{ marginTop: '3rem' }}>
        <h2 className="sub-title">3-2. 목표 달성 구체화 계획</h2>
        
        <div className="premium-quote" style={{ background: 'linear-gradient(135deg, #4f46e5, #3b82f6)' }}>
          <div className="quote-text">SaaS 정식 런칭을 위한 'Proof of Concept' 및 시장 진입(GTM) 기반 완비</div>
        </div>

        <div className="premium-table-wrapper">
          <table className="premium-table">
            <thead>
              <tr>
                <th style={{ width: '25%' }}>추진 전략</th>
                <th>세부 달성 계획</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="cell-highlight">아이템 고도화 전략</td>
                <td>
                  <strong>Transformer + OpenMM 파이프라인 연동 완성:</strong><br/>
                  <span className="card-desc">자체 분자 전하 예측 모델 시편 학습 완료 후, 기존 물리 엔진(FEP)과 원활히 연동되는 자동화 스크립트 작성 최적화. GUI 에디터 외주 산출물 통합.</span>
                </td>
              </tr>
              <tr>
                <td className="cell-highlight">베타 테스터 10팀 확보</td>
                <td>
                  <strong>국내 대학/연구소 대상 무료 베타 런칭:</strong><br/>
                  <span className="card-desc">외산 S/W 예산이 부족한 거점 국립대 약학군 및 초기 바이오 벤처 중심 무상 배포. '초기 레퍼런스(논문 등)'를 수집하여 신뢰도 강화.</span>
                </td>
              </tr>
              <tr>
                <td className="cell-highlight">TIPS 및 후속 투자</td>
                <td>
                  <strong>Seed 마일스톤 달성 및 기술성 평가 대비:</strong><br/>
                  <span className="card-desc">협약기간 내 예측 오차(RMSE 1.0) 벤치마크 데이터를 도출. 초기 지표를 바탕으로 민간 투자사(AC/VC) 네트워킹 및 TIPS R&D 과제 지원.</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
};

export default PerformanceV1;
