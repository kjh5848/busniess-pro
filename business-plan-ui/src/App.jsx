import React, { useState } from 'react';
import SummaryV7 from './components/SummaryV7';
import ProblemRecognitionV7 from './components/ProblemRecognitionV7';
import FeasibilityV7 from './components/FeasibilityV7';
import PerformanceV6 from './components/PerformanceV6';
import GrowthV7 from './components/GrowthV7';
import SummaryV8 from './components/SummaryV8';
import ProblemRecognitionV8 from './components/ProblemRecognitionV8';
import FeasibilityV8 from './components/FeasibilityV8';
import GrowthV8 from './components/GrowthV8';
import TeamV3 from './components/TeamV3';
import GlossarySidebar from './components/GlossarySidebar';
import { BookOpen } from 'lucide-react';
import './indexV2.css';
import './AppV2.css';

const tabStyle = (active) => ({
  padding: '0.4rem 1.2rem',
  fontWeight: active ? '700' : '400',
  fontSize: '0.9rem',
  border: active ? '2px solid #fff' : '1px solid rgba(255,255,255,0.3)',
  backgroundColor: active ? 'rgba(255,255,255,0.15)' : 'transparent',
  color: '#fff',
  cursor: 'pointer',
  transition: 'all 0.15s',
  fontFamily: 'var(--hwp-font-heading)',
  letterSpacing: '0.03em',
});

function App() {
  const [version, setVersion] = useState('v8');

  return (
    <div>
      {/* Version Control Header */}
      <div style={{
        backgroundColor: '#1e293b',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1.5rem',
        color: 'white',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{ fontWeight: 'bold', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <BookOpen size={20} />
          2026 부니콘 예비창업패키지 사업계획서
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button
            style={tabStyle(version === 'v7')}
            onClick={() => setVersion('v7')}
          >
            V7 제출용
          </button>
          <button
            style={tabStyle(version === 'v8')}
            onClick={() => setVersion('v8')}
          >
            V8 도식화
          </button>
        </div>
      </div>

      {/* Render Components Based on Version */}
      <div style={{ padding: '0' }}>
        <div style={{ padding: '20px', backgroundColor: '#f1f5f9', boxSizing: 'border-box', position: 'relative' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {version === 'v7' ? (
              <>
                <SummaryV7 />
                <ProblemRecognitionV7 />
                <FeasibilityV7 />
                <PerformanceV6 />
                <GrowthV7 />
                <TeamV3 />
              </>
            ) : (
              <>
                <SummaryV8 />
                <ProblemRecognitionV8 />
                <FeasibilityV8 />
                <PerformanceV6 />
                <GrowthV8 />
                <TeamV3 />
              </>
            )}
          </div>
          
          {/* Floating Panels */}
          <GlossarySidebar />
        </div>
      </div>
    </div>
  );
}

export default App;
