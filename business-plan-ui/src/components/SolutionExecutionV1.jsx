import React from 'react';
import { ShieldCheck, Flame } from 'lucide-react';
import '../index.css';

export default function SolutionExecutionV1() {
  return (
    <div className="hwp-section">
      <h2 className="hwp-section-title">2-2. 창업아이템 실현 및 구체화/고도화 방안</h2>
      
      {/* 상단 핵심 기술 원리 (문제점 돌파 방안) 요약 박스 */}
      <div className="hwp-box" style={{ marginBottom: '20px' }}>
        <h3 className="hwp-box-title" style={{ borderBottom: '1px solid #333', paddingBottom: '5px', marginBottom: '10px', fontSize: '13px' }}>
          ◎ 핵심 기술 대응 및 경쟁사 차별성 구축 원리
        </h3>
        <ul className="hwp-list" style={{ margin: 0 }}>
          <li style={{ marginBottom: '10px' }}>
            <strong><Flame size={14} style={{ verticalAlign: 'middle', marginRight: '4px', marginTop: '-3px' }}/>HOT-MELT 캡슐 효과 (발화성 확보):</strong> 고온에서 액상화된 왁스가 굴패각 다공성 기공(329m²/g) 내로 흡수결합되어, 에탄올이 순간 증발해버리는 타사 겔 형태 착화재와 달리 화력을 서서히 오래도록 내뿜는 단단한 뼈대를 굳힘.
          </li>
          <li>
            <strong><ShieldCheck size={14} style={{ verticalAlign: 'middle', marginRight: '4px', marginTop: '-3px' }}/>다공성 방어선 20% 황금 비율 (유해성 대응):</strong> 연소 중 발생하는 매연(VOCs)을 철저히 흡착/중화하는 동시에, 야외에 재(Ash)를 그냥 버려도 토양 산성화를 막는 '제로 웨이스트' 비료 기준선 고수.
          </li>
        </ul>
      </div>

      {/* 최종 산출물 HWP 정부 기본양식 정밀 복원 테이블 */}
      <div style={{ marginTop: '30px' }}>
        <div style={{ fontSize: '12px', fontWeight: 'bold', textAlign: 'center', marginBottom: '8px', letterSpacing: '1px' }}>
          &lt; 최종 산출물 작성(전체 사업단계) &gt;
        </div>
        <table className="hwp-table" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', borderTop: '2px solid #000', borderBottom: '2px solid #000' }}>
          <thead>
            <tr style={{ backgroundColor: '#eeeeee' }}>
              <th style={{ border: '1px solid #333', padding: '8px', width: '20%' }}>구 분</th>
              <th style={{ border: '1px solid #333', padding: '8px', width: '50%' }}>최종 산출물</th>
              <th style={{ border: '1px solid #333', padding: '8px', width: '15%' }}>수 량</th>
              <th style={{ border: '1px solid #333', padding: '8px', width: '15%' }}>완료 일정</th>
            </tr>
          </thead>
          <tbody>
            
            {/* --- 단기 (협약 기간 내) 영역 --- */}
            <tr>
              <td rowSpan={2} style={{ border: '1px solid #333', padding: '8px', backgroundColor: '#f7f7f7', fontWeight: 'bold' }}>
                단기<br />(협약 기간 내)
              </td>
              <td style={{ border: '1px solid #333', padding: '8px', textAlign: 'left', lineHeight: '1.4' }}>
                <span style={{ color: '#0000ff', fontStyle: 'italic', fontSize: '12px', fontWeight: 'bold' }}>친환경 캠핑 착화재(다공성 20% 배합 모델) 시제품</span><br />
                <span style={{ fontSize: '10px', color: '#0055ff' }}>* 협약기간 내 추진가능한 산출물의 제작 완료 일정으로 작성</span>
              </td>
              <td style={{ border: '1px solid #333', padding: '8px', color: '#0000ff', fontStyle: 'italic' }}>1세트</td>
              <td style={{ border: '1px solid #333', padding: '8px', color: '#0000ff', fontStyle: 'italic' }}>~'26.11.30.</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #333', padding: '8px', textAlign: 'left' }}>
                <span style={{ color: '#0000ff', fontStyle: 'italic', fontSize: '12px', fontWeight: 'bold' }}>KCL 배기가스 무해 인증 및 5대 안전 시험성적서</span>
              </td>
              <td style={{ border: '1px solid #333', padding: '8px', color: '#0000ff', fontStyle: 'italic' }}>1건</td>
              <td style={{ border: '1px solid #333', padding: '8px', color: '#0000ff', fontStyle: 'italic' }}>~'26.12.31.</td>
            </tr>
            
            {/* --- 중장기 영역 --- */}
            <tr>
              <td rowSpan={2} style={{ border: '1px solid #333', padding: '8px', backgroundColor: '#f7f7f7', fontWeight: 'bold' }}>
                중·장기<br />최종 산출물
              </td>
              <td style={{ border: '1px solid #333', padding: '8px', textAlign: 'left', lineHeight: '1.4' }}>
                <span style={{ color: '#0000ff', fontStyle: 'italic', fontSize: '12px', fontWeight: 'bold' }}>프리미엄 향 톱밥 숯불 바베큐용 라인업 디자인</span><br />
                <span style={{ fontSize: '10px', color: '#0055ff' }}>* (양산 단계) 브랜드 하이엔드 모델 시장 확장</span>
              </td>
              <td style={{ border: '1px solid #333', padding: '8px', color: '#0000ff', fontStyle: 'italic' }}>1세트</td>
              <td style={{ border: '1px solid #333', padding: '8px', color: '#0000ff', fontStyle: 'italic' }}>~'27.05.31.</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #333', padding: '8px', textAlign: 'left' }}>
                <span style={{ color: '#0000ff', fontStyle: 'italic', fontSize: '12px', fontWeight: 'bold' }}>대량 양산 설비 라인 실가동 및 B2B 파이프라인(식당 납품) 달성</span>
              </td>
              <td style={{ border: '1px solid #333', padding: '8px', color: '#0000ff', fontStyle: 'italic' }}>-</td>
              <td style={{ border: '1px solid #333', padding: '8px', color: '#0000ff', fontStyle: 'italic' }}>~'27.05.31.</td>
            </tr>

          </tbody>
        </table>

        {/* 안내 문구 (파란색 예비창업패키지 폰트 색상과 유사하게 복원) */}
        <div style={{ textAlign: 'left', fontSize: '11px', marginTop: '10px', color: '#0000ff', border: '1px solid #999', padding: '8px', backgroundColor: '#ffffff' }}>
          ※ 아래 표에 작성한 단기 내(협약 기간 내) 산출물을 근거로 최종 점검·평가를 진행할 예정이며, 협약 기간 중 불가피한 사유를 제외하고 산출물 내용은 변경 불가 (위 내용은 작성 예시로 파란색 참고 문구는 지우고 검정 텍스트로 전환 예정)
        </div>
      </div>
      
    </div>
  );
}
