import React from 'react';
import { LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import '../index.css';

// 친환경 여가 시장 성장률 데이터 모의 설정 (단위: 억 원)
const growthData = [
  { 연도: '2023년', 시장규모: 1200 },
  { 연도: '2024년', 시장규모: 1550 },
  { 연도: '2025년', 시장규모: 2100 },
  { 연도: '2026년(예측)', 시장규모: 2900 },
];

// 핵심 전파 대상 고객층 (파이 차트용 데이터)
const targetData = [
  { name: '안전에 민감한 3040 가족 캠핑족', value: 65 },
  { name: '가치 소비를 지향하는 젊은 세대', value: 25 },
  { name: '일반 야외 레저 활동 인구', value: 10 },
];

// 공문서(HWP) 테마에 부합하는 무채색 배열
const COLORS = ['#333333', '#777777', '#bbbbbb'];

export default function MarketAnalysisV1() {
  return (
    <div className="hwp-section">
      <h2 className="hwp-section-title">1-2. 창업아이템 목표시장(고객) 현황 분석</h2>
      
      {/* 정량적/정성적 비교를 위한 핵심 요약 표 */}
      <table className="hwp-table" style={{ marginBottom: '20px' }}>
        <thead>
          <tr>
            <th>투자 심사 핵심 비교 항목</th>
            <th>기존 시장 주요 경쟁 제품군 (유사품)</th>
            <th>자사 솔루션 (폐굴껍데기 재활용품)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>원가 방어력 및 가격 경쟁력</strong></td>
            <td>제조원가 개당 평균 800원 내외 형성</td>
            <td><strong>시 자체 폐기물 보조금 결합 시 실질적 마이너스 원가 달성 (압도적 우세)</strong></td>
          </tr>
          <tr>
            <td><strong>인체 유해성 및 소비자 신뢰도 인식</strong></td>
            <td>지속적인 발암물질 논란 및 시력저하 위험군 노출 상황</td>
            <td><strong>100% 천연 안심 성분 인증으로 가족 단위 고객 대상 강력한 입소문 점유 유발</strong></td>
          </tr>
        </tbody>
      </table>

      {/* 시장 데이터의 신뢰성을 보장하는 시각적 대시보드 */}
      <div className="hwp-grid-2">
        
        {/* 전체 관련 시장 성장성 (우상향 라인 차트) */}
        <div className="hwp-box">
          <div style={{ fontSize: '13px', fontWeight: 'bold', marginBottom: '15px', borderBottom: '1px solid #333', paddingBottom: '5px' }}>
            📈 국내 친환경 야외 용품 시장 성장률 추이 (단위: 억 원)
          </div>
          <div style={{ width: '100%', height: '180px' }}>
            <ResponsiveContainer>
              <LineChart data={growthData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eeeeee" />
                <XAxis dataKey="연도" tick={{ fontSize: 11, fill: '#666' }} axisLine={{ stroke: '#999' }} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: '#666' }} axisLine={false} tickLine={false} width={40} />
                <Tooltip />
                <Line type="monotone" dataKey="시장규모" stroke="#333333" strokeWidth={2} dot={{ r: 4, fill: '#333' }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p style={{ fontSize: '11px', color: '#666', marginTop: '10px' }}>
            * 지속적인 기존 화학 연료 유해성 논란과 캠핑 인구 확대로 천연 대체재 시장 수요 폭발적 증가 전망
          </p>
        </div>

        {/* 최우선 고객층의 압도적인 파이 (도넛/파이 차트) */}
        <div className="hwp-box">
           <div style={{ fontSize: '13px', fontWeight: 'bold', marginBottom: '15px', borderBottom: '1px solid #333', paddingBottom: '5px' }}>
            🎯 최우선 진입 핵심 목표 고객층 (Target Segmentation)
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '150px', height: '150px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={targetData} cx="50%" cy="50%" innerRadius={35} outerRadius={60} fill="#8884d8" paddingAngle={2} dataKey="value">
                    {targetData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            {/* 우측 파이 차트 설명 범례 */}
            <div style={{ flex: 1, paddingLeft: '10px' }}>
              <ul style={{ fontSize: '11px', listStyleType: 'none', padding: 0, margin: 0, letterSpacing: '-0.5px' }}>
                {targetData.map((entry, index) => (
                  <li key={index} style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <div style={{ width: '10px', height: '10px', backgroundColor: COLORS[index], flexShrink: 0 }}></div>
                    <span><strong>{entry.name}</strong> ({entry.value}%)</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p style={{ fontSize: '11px', color: '#666', marginTop: '10px', letterSpacing: '-0.3px' }}>
            * 가족의 건강과 안전에 가장 민감하게 반응하는 3040 부모 세대를 극초기 핵심 진입 대상으로 설정하여 빠르게 초기 브랜드 신뢰도를 확보함.
          </p>
        </div>

      </div>
    </div>
  );
}
