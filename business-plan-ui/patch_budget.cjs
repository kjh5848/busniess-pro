const fs = require('fs');
const file = 'src/features/feasibility/FeasibilityV2.jsx';
let content = fs.readFileSync(file, 'utf8');

const t_budgetItems = `const budgetItems = [
  { category: '인건비', amount: '4,500', ratio: '45%', desc: '인공지능 파이프라인 검수 및 구조생물학 전담 연구원 1인(핵심 R&D) 채용 (월 500 * 9개월)' },
  { category: '외주용역비', amount: '2,000', ratio: '20%', desc: '비연구원을 위한 노코드(No-code) 시각화 웹 대시보드(Frontend) 프레임워크 연동 외주 비용' },
  { category: '기계장치', amount: '1,000', ratio: '10%', desc: 'AI 모델(딥러닝) 훈련 및 FEP 병렬 시뮬레이션 서버 연동 테스트용 하이엔드 로컬 워크스테이션' },
  { category: '지급수수료', amount: '1,000', ratio: '10%', desc: '초기 클라우드 임차 비용, 데이터베이스 호스팅 비용 및 개발에 필수적인 엔터프라이즈 SW 구독료' },
  { category: '광고선전비', amount: '1,000', ratio: '10%', desc: '시범 사용을 위한 B2B 제약사 영업 랜딩페이지 디자인 및 SaaS 동작 시연 프로모션 영상물' },
  { category: '무형자산 취득', amount: '500', ratio: '5%', desc: '핵심 AI 통합 래핑 자동화 방법 1종 특허 출원비 및 기업 브랜딩 패키지 상표권 신규 출원비' },
];`;

const r_budgetItems = `const budgetItems = [
  { category: '외주용역비', amount: '16,500', ratio: '82.5%', desc: '초기 노코드 시각화 웹 대시보드 설계·개발 및 파이프라인 연동 외주 개발비' },
  { category: '무형자산 취득', amount: '3,500', ratio: '17.5%', desc: '핵심 AI 통합 래핑 자동화 방안 및 폐쇄망 기반 구조에 대한 특허 1건 출원' },
];`;

content = content.replace(t_budgetItems, r_budgetItems);

const t_title = `■ 총 예산 규모 : 100,000,000 원 (정부지원 100% 가이드라인 초안)`;
const r_title = `■ 총 예산 규모 : 20,000,000 원 (1단계 정부지원사업비 내외)`;

content = content.replace(t_title, r_title);

const t_totalTable = `<strong style={{ color: '#000', fontSize: '1.05rem' }}>100,000,000</strong> <br/>
                  <span style={{ fontSize: '0.75rem', color: '#000' }}>(100%)</span>
                </td>
                <td style={{ fontSize: '0.8rem', backgroundColor: '#e2e8f0', fontWeight: '700', color: '#1e293b', padding: '0.8rem 1rem' }}>
                  기능 구현의 중심이 되는 R&D 핵심 기술진 인건비에 주력 예산 투입.`;

const r_totalTable = `<strong style={{ color: '#000', fontSize: '1.05rem' }}>20,000,000</strong> <br/>
                  <span style={{ fontSize: '0.75rem', color: '#000' }}>(100%)</span>
                </td>
                <td style={{ fontSize: '0.8rem', backgroundColor: '#e2e8f0', fontWeight: '700', color: '#1e293b', padding: '0.8rem 1rem' }}>
                  1단계 UI 구축 및 핵심 아키텍처 선행 특허 보호를 위한 외주용역비 및 무형자산 취득 중심으로 우선 예산 투입.`;

content = content.replace(t_totalTable, r_totalTable);

fs.writeFileSync(file, content, 'utf8');
console.log('Budget section successfully updated to 20 million KRW');
