import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { LayoutDashboard, Smartphone } from 'lucide-react';

const mockData = [
  { year: '2024', value: 100 },
  { year: '2025', value: 300 },
  { year: '2026', value: 800 },
];

const ExampleV3 = () => {
  return (
    <div className="v2-theme v2-container">
      <div className="v2-paper">
        {/* Rule 5: Key Message Quote */}
        <div className="v2-info-box" style={{ borderLeft: '4px solid #333', marginBottom: '2rem' }}>
          <p style={{ fontWeight: 'bold', margin: '0', fontSize: '1.05rem' }}>
            "데이터 기반 최적화를 통해 기존 대비 30% 이상의 비용 절감 효과를 창출합니다."
          </p>
        </div>

        {/* Rule 1: Evidence Text */}
        <p className="v2-box-desc" style={{ marginBottom: '0.2rem' }}>
          국내 AI 솔루션 도입률은 매년 급성장 중입니다.
        </p>
        <p style={{ fontSize: '0.75rem', color: '#6b7280', margin: '0 0 1rem 0' }}>
          * 출처: 정보통신산업진흥원(2025)
        </p>

        {/* Rule 2: Upward Trending Chart (흑백 톤) */}
        <div style={{ width: '100%', height: 250, marginBottom: '2rem' }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="year" fontSize={12} stroke="#6b7280" />
              <YAxis fontSize={12} stroke="#6b7280" />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#374151" strokeWidth={2} dot={{ fill: '#374151' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Rule 4: UI Placeholders */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
          <div style={{ flex: 1, border: '1px dashed #ccc', padding: '2rem', textAlign: 'center', backgroundColor: '#f9fafb' }}>
            <LayoutDashboard size={32} style={{ color: '#9ca3af', marginBottom: '0.5rem' }} />
            <div style={{ fontSize: '0.9rem', color: '#4b5563' }}>[화면 UI 1] 관리자 대시보드</div>
          </div>
          <div style={{ flex: 1, border: '1px dashed #ccc', padding: '2rem', textAlign: 'center', backgroundColor: '#f9fafb' }}>
            <Smartphone size={32} style={{ color: '#9ca3af', marginBottom: '0.5rem' }} />
            <div style={{ fontSize: '0.9rem', color: '#4b5563' }}>[화면 UI 2] 모바일 클라이언트 앱</div>
          </div>
        </div>

        {/* Rule 3 & 6: Meaningful Table & Formatting */}
        <div className="v2-table-wrapper">
          <table className="v2-table" style={{ wordBreak: 'keep-all' }}>
            {/* ... table content with detailed budget/action plans ... */}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ExampleV3;
