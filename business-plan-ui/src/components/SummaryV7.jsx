import React from 'react';
import uiImage from '../assets/3d 분자구조 UI.png';
import archImage from '../assets/architecture_diagram.png';

const ACCENT = '#dfe6f7';

const SummaryV7 = () => {
  return (
    <div className="v2-theme v2-container" style={{ marginBottom: '2rem' }}>
      <div className="v2-paper">

        <div className="hwp-section-title" style={{ marginBottom: '1rem' }}>
          예비창업패키지 예비창업자 사업계획서
        </div>

        <h1 className="hwp-checkbox-section">창업아이템 개요(요약)</h1>

        <div className="v2-info-box" style={{ borderLeft: '4px solid #333', marginBottom: '1.5rem', backgroundColor: '#fcfcfc' }}>
          <p style={{ fontWeight: 'bold', margin: '0', fontSize: '1rem', wordBreak: 'keep-all', lineHeight: '1.6' }}>
            ▶ 중소 제약사·연구소는 AI 신약 인프라 비용·보안·인력 문제로 소외됨 → <strong>B2C 클라우드 + B2B 온프레미스/그리드</strong> 투트랙으로 해결하는 "곡괭이(Infra)" 비즈니스임
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <table className="hwp-table">
              <thead>
                <tr><th colSpan={2} style={{ backgroundColor: ACCENT }}>1. 창업아이템 소개</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td className="label" style={{ width: '30%' }}>아이템명</td>
                  <td style={{ fontWeight: 'bold' }}>
                    중소 제약사용 보안형 온프레미스<br/>AI 신약개발 자동화·그리드 솔루션 (Bio-MLOps)
                  </td>
                </tr>
                <tr>
                  <td className="label">핵심기능</td>
                  <td>
                    · 알파폴드 등 최상위 오픈AI 원클릭 실행임<br/>
                    · 사내 PC 유휴자원 연계 분산연산(Grid) 기능임
                  </td>
                </tr>
                <tr>
                  <td className="label">타겟</td>
                  <td>
                    · MLOps 인력 없는 국내외 벤처·중견 제약사임<br/>
                    · 데이터 유출 우려 대학 연구소임
                  </td>
                </tr>
                <tr>
                  <td className="label">사용처</td>
                  <td>
                    · 사내 폐쇄망 AI 신약 파이프라인 구축임<br/>
                    · 분자구조 3D 예측 등 보안 100% 보장함
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="hwp-table">
              <thead>
                <tr><th colSpan={2} style={{ backgroundColor: ACCENT }}>3. 개발단계</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td className="label" style={{ width: '30%' }}>현재 단계</td>
                  <td style={{ fontWeight: 'bold' }}>핵심 요소기술 확보 및 MVP 정식 제작 중임</td>
                </tr>
                <tr>
                  <td className="label">아이디어 기획</td>
                  <td>· B2C(SaaS) + B2B(온프레미스/그리드) 하이브리드 BM 기획 완료함</td>
                </tr>
                <tr>
                  <td className="label">핵심기술 확보</td>
                  <td>· 인트라넷 환경 외부통신 없이 오프라인 1-Click AI 자동화 스크립트 확보함</td>
                </tr>
                <tr>
                  <td className="label">시제품 제작</td>
                  <td>
                    · B2C 클라우드 버전 선배포 준비 중임<br/>
                    · 제약사 POC용 온프레미스 MVP 개발 중임
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <table className="hwp-table">
              <thead>
                <tr><th style={{ backgroundColor: ACCENT }}>2. 창업아이템의 차별성</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <ul style={{ margin: 0, paddingLeft: '1.2rem', lineHeight: '1.7' }}>
                      <li><strong>초격차 원천 보안 (온프레미스):</strong> 물리적 망분리 설치로 기업 기밀 외부 유출 원천 차단함</li>
                      <li><strong>압도적 비용 절감 (Grid):</strong> 수십억 GPU 대신 사내 PC 유휴자원 병렬 분산 처리함</li>
                      <li><strong>IT 전문성 불필요 (No-Code):</strong> 비개발 연구원도 마우스 클릭만으로 AI 즉각 구동함</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="hwp-table">
              <thead>
                <tr><th style={{ backgroundColor: ACCENT }}>4. 국내외 목표시장</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <ul style={{ margin: 0, paddingLeft: '1.2rem', lineHeight: '1.7' }}>
                      <li><strong>B2B 타겟:</strong> 보안 민감·라이선스 부담 바이오 벤처·국공립 연구센터임</li>
                      <li><strong>B2C 타겟:</strong> AI 시뮬레이션 필요한 대학원생·포닥·개별 연구자임</li>
                      <li><strong>판매 전략:</strong> 1단계 B2C 저가 배포로 생태계 락인 후, 2단계 B2B 고단가 온프레미스 POC 돌입함</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>

        <table className="hwp-table" style={{ marginTop: '0.5rem' }}>
          <thead>
            <tr><th colSpan={2} style={{ backgroundColor: ACCENT }}>5. 이미지 (참고사진 및 구조 설계도)</th></tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ width: '50%', textAlign: 'center', padding: '1rem' }}>
                <div style={{ width: '100%', height: '160px', overflow: 'hidden' }}>
                  <img src={uiImage} alt="비전문가 친화형 대시보드" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <div style={{ fontSize: '0.8rem', marginTop: '0.5rem', fontWeight: 'bold' }}>
                  &lt; 노코드(No-Code) AI 시뮬레이션 관리 대시보드 &gt;
                </div>
              </td>
              <td style={{ width: '50%', textAlign: 'center', padding: '1rem' }}>
                <div style={{ width: '100%', height: '160px', overflow: 'hidden' }}>
                  <img src={archImage} alt="망분리 아키텍처" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <div style={{ fontSize: '0.8rem', marginTop: '0.5rem', fontWeight: 'bold' }}>
                  &lt; 유출 제로(0) 온프레미스 망분리 및 사내 그리드 연산 아키텍처 &gt;
                </div>
              </td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default SummaryV7;
