import React from 'react';
import SummaryV1 from './archive/SummaryV1';
import ProblemRecognitionV3 from './features/problem-recognition/ProblemRecognitionV3';
import FeasibilityV2 from './features/feasibility/FeasibilityV2';
import GrowthV9 from './features/growth/GrowthV9';
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
            <ProblemRecognitionV3 />
            <FeasibilityV2 />
            <GrowthV9 />
            <TeamV1 />
          </div>
          <GlossarySidebar />
        </div>
      </div>
    </div>
  );
}

export default App;

