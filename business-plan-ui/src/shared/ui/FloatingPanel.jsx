import React, { useState } from 'react';
import { X } from 'lucide-react';

const FloatingPanel = ({ 
  title, 
  icon, 
  color = '#10b981', 
  defaultOpen = false, 
  buttonPosition = { bottom: '2rem', right: '1.5rem' },
  children 
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        title={title}
        style={{
          position: 'fixed',
          ...buttonPosition,
          backgroundColor: color,
          color: 'white',
          border: isOpen ? `2px solid white` : 'none',
          borderRadius: '50%',
          width: '56px',
          height: '56px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: isOpen ? `0 0 0 2px ${color}` : '0 4px 10px rgba(0, 0, 0, 0.3)',
          cursor: 'pointer',
          zIndex: 1000 + (isOpen ? 10 : 0),
          transition: 'all 0.2s',
          opacity: isOpen ? 0.9 : 1
        }}
      >
        {icon}
      </button>

      {isOpen && (
        <div style={{
          position: 'fixed',
          bottom: '2rem',
          right: '6.5rem',
          width: '450px',
          maxHeight: '85vh',
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)',
          border: '1px solid #e5e7eb',
          zIndex: 1005,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}>
          {/* Header */}
          <div style={{
            backgroundColor: color,
            padding: '1rem',
            color: 'white',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexShrink: 0
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', fontSize: '1.05rem' }}>
              {icon}
              {title}
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', display: 'flex', padding: 0 }}
            >
              <X size={24} />
            </button>
          </div>

          {/* Content */}
          <div style={{ padding: '0', overflowY: 'auto', flex: 1 }}>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingPanel;
