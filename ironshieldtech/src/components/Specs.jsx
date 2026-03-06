import React from 'react';
import { useTranslation } from 'react-i18next';

const Specs = () => {
  const { t } = useTranslation();

  const specsItems = [
    {
      key: 'field_tested',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M8 11l3 3 5-5" />
        </svg>
      )
    },
    {
      key: 'durability',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      )
    },
    {
      key: 'ergonomics',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4l3 3" />
        </svg>
      )
    }
  ];

  return (
    <section id="tech" style={{ padding: '8rem 0', background: 'var(--bg-dark)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span className="badge">
            {t('specs.subtitle')}
          </span>
          <h2 style={{ fontSize: '3rem', marginTop: '1.5rem', fontWeight: 800 }}>{t('specs.title')}</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem'
        }}>
          {specsItems.map((item) => (
            <div key={item.key} className="tactical-box glass" style={{
              padding: '3.5rem 2.5rem',
              transition: 'var(--transition-smooth)',
              cursor: 'default'
            }}>
              <div style={{
                color: 'var(--primary-bright)',
                marginBottom: '2rem',
                display: 'inline-flex',
                padding: '1.25rem',
                background: 'rgba(141, 164, 96, 0.1)',
                border: '1px solid var(--border)'
              }}>
                {item.icon}
              </div>
              <div style={{ fontSize: '0.65rem', color: 'var(--primary-bright)', fontFamily: 'var(--font-mono)', marginBottom: '0.5rem' }}>
                MODULE_01 // SECURE
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1.25rem', color: 'var(--text-bright)' }}>{t(`specs.${item.key}.title`)}</h3>
              <p style={{ color: 'var(--text-dim)', fontSize: '1rem', lineHeight: '1.6' }}>
                {t(`specs.${item.key}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specs;
