import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="glass" style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      padding: '1rem 0'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link to="/" className="logo" style={{
          fontSize: '1.5rem',
          fontWeight: 800,
          fontFamily: 'var(--font-heading)',
          color: 'var(--primary)',
          letterSpacing: '2px',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <div style={{
            width: '24px',
            height: '24px',
            background: 'var(--primary)',
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
          }}></div>
          IRON<span style={{ color: 'var(--text-bright)' }}>SHIELD</span>
        </Link>

        <ul style={{
          display: 'flex',
          gap: '2.5rem',
          listStyle: 'none',
          fontSize: '0.85rem',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
          <li>
            <Link to="/" style={{ color: 'var(--primary)' }}>
              {t('nav.home')}
            </Link>
          </li>
          <li style={{ position: 'relative' }}>
            <button
              onClick={() => setIsProductsOpen((prev) => !prev)}
              style={{
                background: 'none',
                border: 'none',
                color: isProductsOpen ? 'var(--primary-bright)' : 'inherit',
                font: 'inherit',
                padding: 0,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                fontWeight: 600
              }}
            >
              {t('nav.products')}
              <i className={`ri-arrow-down-s-line`} style={{ 
                transform: isProductsOpen ? 'rotate(180deg)' : 'rotate(0)',
                transition: 'var(--transition-smooth)'
              }}></i>
            </button>
            <ul
              className={`nav-products-dropdown${isProductsOpen ? ' open' : ''}`}
              style={{
                position: 'absolute',
                top: '2.5rem',
                left: '-1rem',
                background: 'var(--bg-surface-soft)',
                padding: '1.5rem',
                listStyle: 'none',
                display: isProductsOpen ? 'flex' : 'none',
                flexDirection: 'column',
                gap: '1rem',
                minWidth: '240px',
                border: '1px solid var(--border)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.8)',
                zIndex: 1001
              }}
            >
              <li><Link to="/category/tactical-vest" onClick={() => setIsProductsOpen(false)} style={{ fontSize: '0.75rem' }}>{t('categories.tactical_vest')}</Link></li>
              <li><Link to="/category/backpacks" onClick={() => setIsProductsOpen(false)} style={{ fontSize: '0.75rem' }}>{t('categories.bag_backpack')}</Link></li>
              <li><Link to="/category/uniforms" onClick={() => setIsProductsOpen(false)} style={{ fontSize: '0.75rem' }}>{t('categories.combat_uniforms')}</Link></li>
              <li><Link to="/category/helmets" onClick={() => setIsProductsOpen(false)} style={{ fontSize: '0.75rem' }}>{t('categories.ballistic_helmet')}</Link></li>
              <li><Link to="/category/shields" onClick={() => setIsProductsOpen(false)} style={{ fontSize: '0.75rem' }}>{t('categories.bulletproof_shield')}</Link></li>
              <li><Link to="/category/visors" onClick={() => setIsProductsOpen(false)} style={{ fontSize: '0.75rem' }}>{t('categories.ballistic_visor')}</Link></li>
              <li><Link to="/category/ballistic-vests" onClick={() => setIsProductsOpen(false)} style={{ fontSize: '0.75rem' }}>{t('categories.ballistic_vest')}</Link></li>
              <li><Link to="/category/footwear" onClick={() => setIsProductsOpen(false)} style={{ fontSize: '0.75rem' }}>{t('categories.footwear')}</Link></li>
              <li><Link to="/category/plates" onClick={() => setIsProductsOpen(false)} style={{ fontSize: '0.75rem' }}>{t('categories.plates')}</Link></li>
              <div style={{ height: '1px', background: 'var(--border)', margin: '0.5rem 0' }}></div>
              <li>
                <div style={{ fontSize: '0.6rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', marginBottom: '0.5rem' }}>
                  // SYSTEM_STATUS: SECURE
                </div>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/contact">{t('nav.contact')}</Link>
          </li>
        </ul>

        <div className="nav-actions" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <button 
            onClick={toggleLanguage}
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid var(--border)',
              padding: '0.4rem 0.8rem',
              borderRadius: '4px',
              color: 'var(--text-bright)',
              fontSize: '0.7rem',
              fontWeight: 800,
              textTransform: 'uppercase'
            }}
          >
            {i18n.language === 'fr' ? 'EN' : 'FR'}
          </button>
          
          <button style={{
            background: 'none',
            color: 'var(--text-bright)',
            fontSize: '1.2rem'
          }}>
            <i className="ri-search-line"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
