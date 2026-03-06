import React from 'react';
import { useTranslation } from 'react-i18next';

const Stats = () => {
  const { t } = useTranslation();

  const statsList = [
    { label: t('stats.deployments'), value: '15,000+' },
    { label: t('stats.protection'), value: '99.9%' },
    { label: t('stats.operators'), value: '45k' },
    { label: t('stats.countries'), value: '32' },
  ];

  return (
    <section style={{ 
      padding: '5rem 0', 
      background: 'var(--bg-surface)', 
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      position: 'relative'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          textAlign: 'center'
        }}>
          {statsList.map((stat, index) => (
            <div key={index}>
              <h2 style={{ 
                fontSize: '3.5rem', 
                color: 'var(--primary-bright)', 
                marginBottom: '0.5rem',
                fontWeight: 800,
                fontFamily: 'var(--font-mono)'
              }}>
                {stat.value}
              </h2>
              <p style={{ 
                color: 'var(--text-dim)', 
                fontSize: '0.7rem', 
                textTransform: 'uppercase', 
                letterSpacing: '3px',
                fontFamily: 'var(--font-mono)'
              }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
