import React from 'react';
import '../index.css';

export default function SolutionPreparationV3() {
  return (
    <div className="hwp-section">
      <h2 className="hwp-section-title">2-1. 해결 방안 및 제품의 핵심 원리</h2>
      <div className="hwp-instruction-box">
        ※ 1장에서 정의한 문제를 어떻게 해결하는지(구현 원리 등) 기재
      </div>

      <div style={{ borderLeft: '4px solid #333', paddingLeft: '14px', marginBottom: '24px' }}>
        <p style={{ fontWeight: 'bold', margin: '0', fontSize: '15.5px', color: '#000', lineHeight: '1.4' }}>
          "천연 다공성 생석회 구조가 유해 매연/악취 원인 물질을 자체 완벽 흡착(Neutralize) 필터링하여 호흡기 위협 요소를 원천 차단함"
        </p>
      </div>

      <p style={{ fontSize: '15.5px', color: '#000', fontWeight: 'bold', marginBottom: '8px' }}>가. 문제 해결을 위한 3대 핵심 구현 원리</p>
      <ul style={{ listStyleType: "'ㅇ '", paddingLeft: '20px', fontSize: '14.5px', color: '#000', lineHeight: '1.6', marginBottom: '24px', letterSpacing: '-0.3px', wordBreak: 'keep-all' }}>
        <li style={{ marginBottom: '8px' }}><strong>(다공성 미세 구조 특수 보전)</strong> 굴 껍데기 전용 800도 고온 소성 시 생성되는 무수히 많은 나노 미세 구멍들이 천연 왁스를 스펀지처럼 대량 흡수하여, 악천후 속에서도 강력한 연소 체공 시간을 안정적으로 유지시킴</li>
        <li style={{ marginBottom: '8px' }}><strong>(최고급 천연 탈황제 필터)</strong> 생석회 고유의 강알칼리성 탈황 화학 기믹을 제품에 도입하여, 본품 연소 시 현장 화로에서 발생하는 매연과 악취 성분을 즉석에서 강력 흡착 및 중화시킴 <strong>(기존 화학 착화재 대비 텐트 내 잔류 일산화탄소 농도 85% 이상 중화 흡착 테스트 목표)</strong></li>
        <li><strong>(초격차 원가 마진 선점)</strong> 고가의 소성 설비를 무리하게 자가 복제/구축하지 않고, 공공 예산으로 건립된 대형 '통영 수산폐기물 자원화 시설'과 최우선 납품 MOU를 체결하여 압도적 제조 원가 우위(GPM)를 단기 획득함</li>
      </ul>

      <p style={{ fontSize: '15.5px', color: '#000', fontWeight: 'bold', marginBottom: '8px' }}>나. 기존 솔루션 대안의 기능적 한계 극복 및 경쟁 제품 1:1 비교 대비표</p>
      <table className="hwp-table" style={{ marginBottom: '30px', color: '#000', fontSize: '14.5px' }}>
        <thead>
          <tr>
            <th style={{ width: '18%', textAlign: 'center', color: '#fff', backgroundColor: '#333', borderRight: '1px solid #000' }}>구분 지표</th>
            <th style={{ width: '41%', textAlign: 'center', color: '#fff', backgroundColor: '#555', borderRight: '1px solid #000' }}>기존 경쟁재 (화학 숯/번개탄류)</th>
            <th style={{ width: '41%', textAlign: 'center', color: '#fff', backgroundColor: '#111' }}>당사 안심 착화재 (독보적 기술 우위)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ textAlign: 'center', fontWeight: 'bold', borderRight: '1px solid #000' }}>인체 위해성 수준</td>
            <td style={{ padding: '12px', lineHeight: '1.6', borderRight: '1px solid #000' }}>빠른 단기 발화만을 목적으로 메탄올 등 1급 발암 화학 성분 다량 첨가 및 공기 중 호흡기 배출 확산</td>
            <td style={{ padding: '12px', lineHeight: '1.6', fontWeight: 'bold' }}>100% 천연 원료 기반 베이스 및 유해 가스 자체 흡착 중화 (국가공인기관 <strong>KTR 등 유해물질 7종 0.00% 무검출 달성 타겟</strong>)</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center', fontWeight: 'bold', borderRight: '1px solid #000' }}>야외 연소 지속력</td>
            <td style={{ padding: '12px', lineHeight: '1.6', borderRight: '1px solid #000' }}>일회성 폭발 점화 직후 화력이 급감하며 매운 연기와 탁한 일산화탄소 가스만 텐트 내 대량 잔류 유발</td>
            <td style={{ padding: '12px', lineHeight: '1.6', fontWeight: 'bold' }}>견고한 미세 다공성 산화칼슘 구조가 천연 왁스를 천천히 태워내 강풍에도 롱타임(Long-time) 점화 전격 유지</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center', fontWeight: 'bold', borderRight: '1px solid #000' }}>사후 환경부담금</td>
            <td style={{ padding: '12px', lineHeight: '1.6', borderRight: '1px solid #000' }}>연소 완료 직후 맹독성 공업 폐기물로 법정 지정되어 종량제 봉투 등 엄격한 분리 배출 및 수거 필수 처리</td>
            <td style={{ padding: '12px', lineHeight: '1.6', fontWeight: 'bold' }}>화학 성분상 '천연 패화석(석회질) 비료'와 동일하여 다 남은 재를 땅바닥에 뿌려도 토양 살림 100% 자연 완전 환원</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
