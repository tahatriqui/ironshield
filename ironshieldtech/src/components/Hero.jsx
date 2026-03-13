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
      background: 'linear-gradient(to right, #060705 30%, rgba(6, 7, 5, 0.5) 65%, rgba(0,0,0,0.3) 100%), url("/images/hero-bg.jpg")',
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
        <div style={{ maxWidth: '700px' }} className="animate-fade-in hero-content">
          <header style={{ marginBottom: '2rem' }}>
           
          </header>

          <h1 className="hero-title" style={{
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
            marginBottom: '3.5rem',
            marginTop: '2rem'
          }} className="hero-desc-container">
            <p style={{
              color: 'var(--text-main)',
              fontSize: '1.1rem',
              maxWidth: '650px',
              fontFamily: 'var(--font-body)',
              fontWeight: 300,
              lineHeight: '1.6',
              opacity: 0.85
            }} className="hero-desc">
              {t('hero.desc')}
            </p>
          </div>

          

        </div>
      </div>

      <style>{`
        .hero-title {
          font-size: 5.5rem;
        }
        @media (max-width: 1024px) {
          .hero-title { font-size: 4rem; }
        }
        @media (max-width: 768px) {
          .hero-title { font-size: 3rem; }
          .hero-desc { font-size: 1.1rem !important; }
          .hero-desc-container { padding-left: 1.5rem !important; }
          .hero-content { margin-top: 2rem; }
          .btn-responsive { padding: 1rem 2rem !important; width: 100%; }
        }
      `}</style>

      {/* Decorative vertical mask */}
    
    </section>
  );
};

export default Hero;
