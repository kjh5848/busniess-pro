import React from 'react';
import '../index.css';

export default function SolutionPreparationV2() {
  return (
    <div className="hwp-section">
      <h2 className="hwp-section-title">2-1. 해결 방안 및 제품의 핵심 원리</h2>
      <div className="hwp-instruction-box">
        ※ 1장에서 정의한 문제를 어떻게 해결하는지(구현 원리 등) 기재
      </div>

      <div style={{ borderLeft: '4px solid #333', paddingLeft: '14px', marginBottom: '24px' }}>
        <p style={{ fontWeight: 'bold', margin: '0', fontSize: '16px', color: '#000', lineHeight: '1.4' }}>
          "천연 다공성 생석회 구조가 유해 가스와 악취를 완벽히 흡착하여, 호흡기에 치명적인 매연 걱정 없는 쾌적한 캠핑 환경을 보장합니다."
        </p>
      </div>

      <p style={{ fontSize: '15.5px', color: '#000', lineHeight: '1.6', marginBottom: '20px', wordBreak: 'keep-all' }}>
        기존의 고체 연료는 발화 속도에만 초점을 맞추느라 인체에 해로운 메탄올이나 본드계 화학 물질을 다량 첨가해왔습니다. 저희는 이와 달리 심한 악취를 풍기며 해안가에 쌓여 방치된 굴 껍데기 쓰레기만을 정제해 섭씨 800도 이상의 고온에서 구워내는(소성) 독창적인 방식을 택했습니다. 이러한 특수 열처리 과정을 거치면 굴 껍데기 내부에 수만 개의 미세한 공기 구멍이 뚫린 '다공성 산화칼슘(생석회)' 광물 구조로 완벽히 탈바꿈하게 됩니다.
      </p>

      <div className="hwp-table-title">{'<'}핵심 원리 및 해결 방안 구조화 표{'>'}</div>
      <table className="hwp-table" style={{ marginBottom: '30px', color: '#000' }}>
        <thead>
          <tr>
            <th style={{ width: '25%', textAlign: 'center', color: '#000', borderRight: '1px solid #000' }}>핵심 방안</th>
            <th style={{ width: '75%', textAlign: 'center', color: '#000' }}>구현 원리 및 기대 효과</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ textAlign: 'center', fontWeight: 'bold' }}>① 다공성 미세 구조를 활용한<br/>안정적 연소력 강력 보존</td>
            <td style={{ padding: '12px', lineHeight: '1.6' }}>굴 껍데기 소성 직후 발생하는 무수히 많은 나노 단위의 미세 구멍들이 천연 왁스를 거대한 두께의 스펀지처럼 응집하여 듬뿍 머금습니다. 이로 인해 강풍이 불거나 습기가 매우 높은 악천후 캠핑 환경 앞에서도 흔들림 없이 안정적이고 강력한 불꽃 체공 시간을 장시간 유지해 줍니다.</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center', fontWeight: 'bold' }}>② 독성 연기와 냄새를 완전히 통제하는<br/>최고급 천연 탈황제 필터 기능</td>
            <td style={{ padding: '12px', lineHeight: '1.6' }}>실제 화력발전소 등 거대 산업 현장에서 유해 독성 가스를 잡을 때 대량 투입하는 주 원료가 바로 구운 '굴 껍데기 생석회 가루'입니다. 본 기어 연소 과정에서 자체 발생하는 그을린 연기와 텐트 내 악취 성분까지 현장의 화로 안에서 즉시 중화해버려 쾌적감을 최고조로 끌어올립니다.</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center', fontWeight: 'bold' }}>③ 폐기물 자원화 인프라 연계<br/>초격차 제조 원가 대폭 절감</td>
            <td style={{ padding: '12px', lineHeight: '1.6' }}>통상적인 바이오매스 제조 공정의 막대한 고정 건조/소성 설비를 자사 공장으로 무리하게 구축할 필요가 전혀 없습니다. 최근 통영에 수백억 원의 예산으로 완공된 거점 '수산폐기물 자원화 시설'과 최우선 제휴를 맺어 1차 가공 완료된 고열 분말 원료를 공장도가로 직배송받아 압도적인 마진 원가 우위를 달성합니다.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
