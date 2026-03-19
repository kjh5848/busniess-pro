import React from 'react';
import SummaryV1 from './archive/SummaryV1';
import ProblemRecognitionV2 from './features/problem-recognition/ProblemRecognitionV2';
import FeasibilityV1 from './archive/FeasibilityV1';
import PerformanceV1 from './archive/PerformanceV1';
import ScaleUpV1 from './archive/ScaleUpV1';
import TeamV1 from './archive/TeamV1';
import GlossarySidebar from './shared/ui/GlossarySidebar';
import { BookOpen } from 'lucide-react';
import './indexV2.css';
import './AppV2.css';

function App() {
  return (
    <div>
      {/* Header */}
      <div style={{
        backgroundColor: '#1e293b', padding: '1rem', display: 'flex', justifyContent: 'center',
        alignItems: 'center', color: 'white', position: 'sticky', top: 0, zIndex: 100,
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{ fontWeight: 'bold', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <BookOpen size={20} />
          2026 부니콘 예비창업패키지 사업계획서 (V1 최종)
        </div>
      </div>

      {/* Render V1 Components */}
      <div style={{ padding: '0' }}>
        <div style={{ padding: '20px', backgroundColor: '#f1f5f9', boxSizing: 'border-box', position: 'relative' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <SummaryV1 />
            <ProblemRecognitionV2 />
            <FeasibilityV1 />
            <PerformanceV1 />
            <ScaleUpV1 />
            <TeamV1 />
          </div>
          <GlossarySidebar />
        </div>
      </div>
    </div>
  );
}

export default App;

