import React from 'react';

const TrustBar = () => {
 

  return (
    <div style={{ 
      padding: '2.5rem 0', 
      background: 'rgba(99, 110, 75, 0.03)', 
      borderBottom: '1px solid var(--border)' 
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '3rem',
          opacity: 0.5
        }}>
        
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
