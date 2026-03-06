import React from 'react';

const TrustBar = () => {
  const partners = [
    'DEFENSE SYSTEMS', 'AERO GUARD', 'TITAN CORE', 'NEXUS TACTICAL', 'ORBITAL SECURITY'
  ];

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
          {partners.map((partner, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '4px', height: '4px', background: 'var(--primary-bright)', borderRadius: '50%' }}></div>
              <span style={{
                fontSize: '0.8rem',
                fontWeight: 900,
                letterSpacing: '4px',
                fontFamily: 'var(--font-heading)',
                color: 'var(--text-bright)'
              }}>
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
