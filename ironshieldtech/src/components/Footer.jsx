import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer style={{
      background: 'var(--bg-dark)',
      padding: '6rem 0 3rem 0',
      borderTop: '1px solid var(--border)',
      position: 'relative'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '4rem',
          marginBottom: '6rem'
        }}>
          <div>
            <div style={{
              fontSize: '1.5rem',
              fontWeight: 900,
              color: 'var(--primary-bright)',
              marginBottom: '1.5rem',
              letterSpacing: '2px',
              fontFamily: 'var(--font-heading)'
            }}>
              IRON<span style={{ color: 'var(--text-bright)' }}>SHIELD</span>
            </div>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', lineHeight: '1.7', maxWidth: '300px' }}>
              {t('footer.desc')}
            </p>
            <div style={{ 
              marginTop: '2rem', 
              fontSize: '0.65rem', 
              color: 'var(--primary)', 
              fontFamily: 'var(--font-mono)',
              letterSpacing: '0.2em' 
            }}>
              EST. 2024 // GLOBAL_DEFENSE
            </div>
          </div>
          
          <div>
            <h4 style={{ fontSize: '0.75rem', marginBottom: '2rem', color: 'var(--primary-bright)', fontFamily: 'var(--font-mono)' }}>
              // {t('footer.nav_title')}
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.2rem', fontSize: '0.85rem' }}>
              <li><Link to="/" style={{ color: 'var(--text-main)', transition: 'var(--transition-smooth)' }}>{t('nav.home')}</Link></li>
              <li><Link to="/contact" style={{ color: 'var(--text-main)' }}>{t('nav.contact')}</Link></li>
              <li><a href="#tech" style={{ color: 'var(--text-main)' }}>{t('nav.tech')}</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '0.75rem', marginBottom: '2rem', color: 'var(--primary-bright)', fontFamily: 'var(--font-mono)' }}>
              // {t('footer.products_title')}
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.2rem', fontSize: '0.85rem' }}>
              <li><Link to="/category/tactical-vest" style={{ color: 'var(--text-main)' }}>{t('categories.tactical_vest')}</Link></li>
              <li><Link to="/category/helmets" style={{ color: 'var(--text-main)' }}>{t('categories.ballistic_helmet')}</Link></li>
              <li><Link to="/category/ballistic-vests" style={{ color: 'var(--text-main)' }}>{t('categories.ballistic_vest')}</Link></li>
              <li><Link to="/category/backpacks" style={{ color: 'var(--text-main)' }}>{t('categories.bag_backpack')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '0.75rem', marginBottom: '2rem', color: 'var(--primary-bright)', fontFamily: 'var(--font-mono)' }}>
              // {t('footer.stay_ready')}
            </h4>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              {t('footer.newsletter')}
            </p>
            <div style={{ display: 'flex', position: 'relative' }}>
              <input 
                type="email" 
                placeholder="OPERATOR_EMAIL"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid var(--border)',
                  padding: '0.8rem 1rem',
                  color: 'var(--text-bright)',
                  fontSize: '0.75rem',
                  width: '100%',
                  fontFamily: 'var(--font-mono)',
                  outline: 'none'
                }}
              />
              <button style={{
                background: 'var(--primary)',
                color: '#fff',
                padding: '0 1.5rem',
                border: '1px solid var(--primary-bright)',
                borderLeft: 'none'
              }}>
                <i className="ri-arrow-right-line"></i>
              </button>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid var(--border)',
          paddingTop: '3rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '2rem'
        }}>
          <div style={{ fontSize: '0.65rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em' }}>
            © 2024 IRON SHIELD TECH / TACTICAL SOLUTIONS. {t('footer.rights')}
          </div>
          <div style={{ display: 'flex', gap: '2.5rem', fontSize: '0.65rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>
            <span style={{ color: 'var(--text-dim)', cursor: 'pointer' }}>{t('footer.privacy')}</span>
            <span style={{ color: 'var(--text-dim)', cursor: 'pointer' }}>{t('footer.legal')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
