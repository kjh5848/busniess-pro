import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const Accordion = ({ title, icon, colorTheme, defaultOpen = false, children }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const theme = colorTheme || {
    headerBg: '#f1f5f9',
    headerText: '#334155',
    contentBg: '#ffffff',
    borderColor: '#e2e8f0'
  };

  return (
    <div style={{
      border: `1px solid ${theme.borderColor}`,
      borderRadius: '6px',
      marginBottom: '0.75rem',
      overflow: 'hidden',
      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
    }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0.75rem 1rem',
          backgroundColor: theme.headerBg,
          color: theme.headerText,
          border: 'none',
          cursor: 'pointer',
          fontWeight: 'bold',
          fontSize: '0.95rem',
          textAlign: 'left',
          transition: 'background-color 0.2s'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: 1, paddingRight: '1rem' }}>
          {icon && <span style={{ display: 'flex', alignItems: 'center' }}>{icon}</span>}
          {title}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', color: theme.headerText, opacity: 0.7, flexShrink: 0 }}>
          {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </div>
      </button>
      
      {isOpen && (
        <div style={{
          padding: '1rem',
          backgroundColor: theme.contentBg,
          borderTop: `1px solid ${theme.borderColor}`,
        }}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
