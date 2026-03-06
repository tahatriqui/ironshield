import React from 'react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" style={{
      height: '100vh',
      width: '100%',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      background: 'linear-gradient(to right, #060705 45%, rgba(0,0,0,0.2) 100%), url("/images/hero-bg.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center right'
    }}>
      {/* HUD Overlay Elements */}
      <div style={{
        position: 'absolute',
        top: '2rem',
        right: '2rem',
        textAlign: 'right',
        color: 'var(--primary-bright)',
        fontSize: '0.65rem',
        fontFamily: 'var(--font-mono)',
        opacity: 0.6,
        pointerEvents: 'none'
      }}>
        <div>SYSTEM STATUS: ACTIVE // GRID: 48.8566° N, 2.3522° E</div>
        <div>OPR: IRON_SHIELD_V5.1</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', justifyContent: 'flex-end' }}>
          <span className="pulsing-dot" style={{ width: '6px', height: '6px', background: 'var(--primary-bright)', borderRadius: '50%' }}></span>
          SECURE_STREAMING_ENABLED
        </div>
      </div>

      <div className="container">
        <div style={{ maxWidth: '700px' }} className="animate-fade-in">
          <header style={{ marginBottom: '2rem' }}>
            <div className="badge">
              {t('hero.badge')} // MK-9
            </div>
            <p style={{ 
              color: 'var(--text-dim)', 
              fontSize: '0.75rem', 
              letterSpacing: '0.3rem', 
              textTransform: 'uppercase',
              marginTop: '1.25rem',
              fontFamily: 'var(--font-mono)'
            }}>
              {t('hero.subtitle')}
            </p>
          </header>

          <h1 style={{
            fontSize: '5.5rem',
            lineHeight: '0.9',
            marginBottom: '2rem',
            fontWeight: 800,
            color: 'var(--text-bright)',
            filter: 'drop-shadow(0 0 30px rgba(141, 164, 96, 0.3))'
          }}>
            {t('hero.title_part1')} <br />
            <span style={{ color: 'var(--primary-bright)' }}>{t('hero.title_accent')}</span>
          </h1>

          <div style={{
            borderLeft: '2px solid var(--primary)',
            paddingLeft: '2.5rem',
            marginBottom: '3.5rem'
          }}>
            <p style={{
              color: 'var(--text-main)',
              fontSize: '1.25rem',
              maxWidth: '550px',
              fontFamily: 'var(--font-body)',
              fontWeight: 300,
              lineHeight: '1.6',
              opacity: 0.85
            }}>
              {t('hero.desc')}
            </p>
          </div>

          <div style={{ display: 'flex', gap: '2rem' }}>
            <button 
              onClick={() => scrollToSection('catalogue')}
              style={{
                background: 'var(--primary)',
                color: '#fff',
                padding: '1.25rem 3.5rem',
                fontSize: '0.85rem',
                fontWeight: 800,
                border: '1px solid var(--primary-bright)',
                boxShadow: '0 0 40px var(--primary-glow)',
                clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0% 100%)'
              }}
            >
              {t('hero.btn_catalog')}
            </button>
          </div>
        </div>
      </div>

      {/* Decorative vertical mask */}
      <div style={{
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '100%',
        height: '300px',
        background: 'linear-gradient(to top, var(--bg-dark) 20%, transparent)',
        zIndex: 1
      }}></div>
    </section>
  );
};

export default Hero;
