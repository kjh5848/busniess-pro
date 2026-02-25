import React from 'react';
import { Users, UserCircle, Briefcase, GraduationCap, Building2, Wrench, Globe } from 'lucide-react';

const TeamV1 = () => {
  return (
    <div className="document-paper animate-fade-in delay-100">
      <h1 className="section-title">
        <Users size={32} />
        5. 팀 구성 (Team)
      </h1>

      <section>
        <h2 className="sub-title">5-1. 대표자 및 팀원 보유 역량</h2>
        
        {/* Core Team Highlight */}
        <div className="premium-quote" style={{ background: 'linear-gradient(135deg, #1e293b, #334155)', margin: '2rem 0', color: 'white' }}>
          <div className="quote-text" style={{ color: 'white' }}>"AI 엔진 개발자(Transformer)와 계산화학 박사의 하이브리드 최적화 팀"</div>
          <div className="quote-author" style={{ color: '#cbd5e1' }}>글로벌 제약 마케팅 전문가가 합류한 실검증 정예 조직</div>
        </div>

        {/* Team Cards */}
        <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          
          {/* CEO Card */}
          <div className="info-card" style={{ borderTop: '4px solid var(--primary-color)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <UserCircle size={48} style={{ color: 'var(--primary-color)' }} />
              <div>
                <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#1e293b' }}>공동대표 (CEO/CTO)</h3>
                <span className="badge" style={{ marginTop: '0.2rem' }}>S/W 개발 총괄</span>
              </div>
            </div>
            <ul style={{ listStyleType: 'none', paddingLeft: 0, marginTop: '1rem' }} className="card-desc">
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <GraduationCap size={18} style={{ flexShrink: 0, marginTop: '2px' }} /> 
                <span>OO학 박사, 최신 언어모델(Transformer) 기반 AI 구조 설계 최고 권위자</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <Briefcase size={18} style={{ flexShrink: 0, marginTop: '2px' }} /> 
                <span>OO학과 교수 재직 중 (딥러닝 알고리즘 및 예측 모델링 프로젝트 다수 총괄)</span>
              </li>
            </ul>
          </div>

          {/* Marketing Lead Card */}
          <div className="info-card" style={{ borderTop: '4px solid #10b981' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <UserCircle size={48} style={{ color: '#10b981' }} />
              <div>
                <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#1e293b' }}>마케팅 총괄 (대리)</h3>
                <span className="badge" style={{ marginTop: '0.2rem', backgroundColor: '#d1fae5', color: '#047857' }}>홍보/영업 총괄 (채용예정)</span>
              </div>
            </div>
            <ul style={{ listStyleType: 'none', paddingLeft: 0, marginTop: '1rem' }} className="card-desc">
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <GraduationCap size={18} style={{ flexShrink: 0, marginTop: '2px' }} /> 
                <span>OO학 학사, 제약/바이오 B2B 마케팅 및 세일즈 전문</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <Globe size={18} style={{ flexShrink: 0, marginTop: '2px' }} /> 
                <span>신약 파이프라인 소프트웨어 솔루션 영업 네트워크 O년 이상 보유</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="delay-200" style={{ marginTop: '3rem' }}>
        <h2 className="sub-title">5-2. 협력 기관 현황 및 협업 방안</h2>
        
        <div className="premium-table-wrapper" style={{ marginTop: '1.5rem' }}>
          <table className="premium-table">
            <thead>
              <tr>
                <th>파트너 기관명</th>
                <th>기관의 보유 역량</th>
                <th>핵심 협업 방안</th>
                <th style={{ width: '15%' }}>협력 시기</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="cell-highlight" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Wrench size={18} /> OO전자
                </td>
                <td>시제품 관련 H/W 제작·개발 인프라</td>
                <td>연산 처리를 위한 <strong>서버/스토리지 테스트 장비 현물 지원 및 클라우드 아키텍처 자문</strong></td>
                <td className="cell-success">‘26.06</td>
              </tr>
              <tr>
                <td className="cell-highlight" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Building2 size={18} /> OO기업 (에이전시)
                </td>
                <td>S/W 제작·개발 및 UI/UX 퍼블리싱</td>
                <td>연구자 친화적 <strong>웹 기반 시뮬레이션 대시보드(Web GUI) 구축 용역 제작</strong></td>
                <td className="cell-success">‘26.08</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
};

export default TeamV1;
