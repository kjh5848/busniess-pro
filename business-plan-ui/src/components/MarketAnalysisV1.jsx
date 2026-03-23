import React from 'react';
import { LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import '../index.css';

const growthData = [
  { 연도: '2023년', 시장규모: 1200 },
  { 연도: '2024년', 시장규모: 1550 },
  { 연도: '2025년', 시장규모: 2100 },
  { 연도: '2026년(예측)', 시장규모: 2900 },
];

const targetData = [
  { name: '안전에 가장 민감한 3040 가족 캠퍼', value: 65 },
  { name: '오가닉/친환경 가치소비 캠퍼', value: 25 },
  { name: '일반 레저 및 글램핑장(B2B)', value: 10 },
];

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
            <td><strong>원가 방어력(수익성)</strong></td>
            <td>제조원가 개당 평균 800원 내외 형성</td>
            <td><strong>순환경제 폐기물 보조금 결합 시 실질적 마이너스 원가 달성</strong></td>
          </tr>
          <tr>
            <td><strong>인체 유해성 및 정부 규제</strong></td>
            <td>1급 발암물질(카드뮴) 논란, <strong>산림청 질산바륨 규제 초읽기</strong></td>
            <td><strong>100% 천연 성분으로 산림청 '번개탄 바륨 전면 사용 금지(24-25년)' 정책의 유일무이한 완벽 대안</strong></td>
          </tr>
        </tbody>
      </table>

      {/* 시장 데이터의 신뢰성을 보장하는 시각적 대시보드 */}
      <div className="hwp-grid-2">
        
        {/* 전체 관련 시장 성장성 */}
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
          <p style={{ fontSize: '11px', color: '#666', marginTop: '10px', lineHeight: '1.4' }}>
            * 산림청 유해물질 강력 규제 본격화 및 메탄올 공포 확산으로 100% 천연 대체재 특수 시장 폭발적 팽창 확정
          </p>
        </div>

        {/* 최우선 고객층의 압도적인 파이 */}
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
          <p style={{ fontSize: '11px', color: '#666', marginTop: '10px', letterSpacing: '-0.3px', lineHeight: '1.4' }}>
            * 직화 연기 등 자녀의 호흡기 질환 및 안전 사고 이슈에 가장 예민하며 브랜드 입소문 전파를 돕는 가족 단위 캠퍼 최우선 공략
          </p>
        </div>

      </div>
    </div>
  );
}
