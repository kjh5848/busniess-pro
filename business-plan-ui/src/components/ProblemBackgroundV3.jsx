import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from 'recharts';
import '../index.css';

const wasteData = [
  { year: '2022', amount: 28 },
  { year: '2023', amount: 29.5 },
  { year: '2024', amount: 30 },
  { year: '2025(예상)', amount: 31 }
];

export default function ProblemBackgroundV3() {
  return (
    <div className="hwp-section">
      <h2 className="hwp-section-title">1-1. 창업아이템 배경 및 필요성</h2>
      <div className="hwp-instruction-box">
        ※ 창업아이템의 기획 배경 및 시장/고객 대상의 발견된 문제점 등 기재
      </div>

      <div style={{ borderLeft: '4px solid #333', paddingLeft: '14px', marginBottom: '24px' }}>
        <p style={{ fontWeight: 'bold', margin: '0', fontSize: '15.5px', color: '#000', lineHeight: '1.4' }}>
          "안락한 캠핑장에서 피우는 첫 불이 1급 발암물질을 뿜어낸다는 치명적 결핍과, 제어 불가한 해안가 수산 폐기물(굴껍데기 30만 톤) 대란을 동시 타격하는 솔루션 도출"
        </p>
      </div>

      <p style={{ fontSize: '15.5px', color: '#000', fontWeight: 'bold', marginBottom: '8px' }}>가. 유해 매연 고체 연료와 지역 사회 폐기물 방치 양극화 현상 심화</p>
      <ul style={{ listStyleType: "'ㅇ '", paddingLeft: '20px', fontSize: '14.5px', color: '#000', lineHeight: '1.6', marginBottom: '24px', letterSpacing: '-0.3px', wordBreak: 'keep-all' }}>
        <li style={{ marginBottom: '8px' }}><strong>(1급 발암물질 노출 위협)</strong> 기존 시중 유통되는 상당수의 고체 연료 및 알코올 젤 착화재에서 메탄올, 비소 등 치명적 유해물질이 다량 검출되며 호흡기 건강을 심각하게 위협함</li>
        <li style={{ marginBottom: '8px' }}><strong>(통영 굴껍데기 대란 방치)</strong> 매년 국내 양식장에서 버려지는 굴 껍데기 30만 톤이 통영 해안가에 무단 방치되어 심각한 생태계 훼손 및 제어 불가능한 악취 민원 유발</li>
        <li><strong>(대형 소모품 시장 침투 필수)</strong> 단순한 1회성 공예품 재활용만으로는 30만 톤 물리적 한계점 봉착. 매주 수십만 명이 '일회용'으로 꾸준히 태워 없애주는 &lt;불쏘시개 대형 상업 시장&gt; 진입 판단</li>
      </ul>

      <p style={{ fontSize: '15.5px', color: '#000', fontWeight: 'bold', marginBottom: '8px' }}>나. 산업용 '생석회 탈황제' 기믹을 응용한 혁신 안심 착화재 (해결 동기)</p>
      <ul style={{ listStyleType: "'- '", paddingLeft: '20px', fontSize: '14.5px', color: '#000', lineHeight: '1.6', marginBottom: '24px', letterSpacing: '-0.3px', wordBreak: 'keep-all' }}>
        <li>버려진 굴 껍데기를 800도 이상 고온 소성 시 생성되는 <strong>'산화칼슘(생석회)'</strong>이 화력발전소 산업 현장에서 독성 가스를 직접 흡착하는 압도적 <strong>'탈황제'</strong>로 쓰인다는 과학적 입증 사실 발견</li>
        <li>폐기물을 태울 때 발생하는 화학 연기를 폐기물(굴껍데기)이 자체 중화 억제하는 친환경 선순환 구조 착안</li>
      </ul>

      <div style={{ border: '2px solid #333', padding: '20px', marginBottom: '30px', background: '#fff' }}>
        <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '14px', marginBottom: '20px', color: '#000' }}>
          &lt; 국내 해안가 굴 껍데기 폐기물 누적 발생 추이 (단위: 만 톤) &gt;
        </div>
        <div style={{ width: '100%', height: '220px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={wasteData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" vertical={false} />
              <XAxis dataKey="year" stroke="#333" fontSize={13} tickLine={false} axisLine={{ stroke: '#333' }} />
              <YAxis stroke="#333" fontSize={13} tickLine={false} axisLine={{ stroke: '#333' }} />
              <Tooltip cursor={{ fill: '#f5f5f5' }} contentStyle={{ border: '1px solid #333', borderRadius: '0', color: '#000' }} />
              <Bar dataKey="amount" fill="#666" barSize={50}>
                <LabelList dataKey="amount" position="top" style={{ fill: '#000', fontSize: '12.5px', fontWeight: 'bold' }} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div style={{ fontSize: '12.5px', color: '#555', textAlign: 'right', marginTop: '10px' }}>
          * 통계 출처: 통계청 해양 부산물 방기 지표 환산 (2025)
        </div>
      </div>
    </div>
  );
}
