import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const CTASection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section style={{ padding: '8rem 0', background: 'var(--bg-dark)' }}>
      <div className="container">
        <div className="tactical-box" style={{
          padding: '6rem 4rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, rgba(6, 7, 5, 0.95) 0%, rgba(99, 110, 75, 0.1) 100%)',
          border: '1px solid var(--border)'
        }}>
          <div style={{ 
            fontSize: '0.7rem', 
            color: 'var(--primary-bright)', 
            fontFamily: 'var(--font-mono)', 
            marginBottom: '1.5rem',
            letterSpacing: '0.5em'
          }}>
            SYSTEM_PROTOCOL: CONTACT_INITIATED
          </div>
          <h2 style={{ fontSize: '4rem', marginBottom: '2rem', lineHeight: '1.1', fontWeight: 900 }}>
            {t('cta.title')}
          </h2>
          <p style={{ 
            color: 'var(--text-main)', 
            fontSize: '1.25rem', 
            maxWidth: '750px', 
            margin: '0 auto 4rem auto',
            opacity: 0.8,
            lineHeight: '1.6'
          }}>
            {t('cta.desc')}
          </p>
          <button 
            onClick={() => navigate('/contact')}
            style={{
              background: 'var(--primary)',
              color: '#fff',
              padding: '1.5rem 4rem',
              fontWeight: 800,
              fontSize: '1rem',
              letterSpacing: '2px',
              border: '1px solid var(--primary-bright)',
              boxShadow: '0 0 40px var(--primary-glow)',
              cursor: 'pointer',
              clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)'
            }}
          >
            {t('cta.btn')}
          </button>

          {/* Decorative Elements */}
          <div style={{
            position: 'absolute',
            bottom: '2rem',
            left: '2rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6rem',
            color: 'var(--primary-bright)',
            opacity: 0.4
          }}>
            AUTH_TOKEN: 44-X992-K
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
