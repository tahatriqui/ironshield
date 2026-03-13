import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from "../assets/Logo/logo.png";
const Navbar = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileProductsOpen(false);
  };

  const categoriesList = [
    { key: 'tactical-vest', nameKey: 'tactical_vest' },
    { key: 'backpacks', nameKey: 'bag_backpack' },
    { key: 'uniforms', nameKey: 'combat_uniforms' },
    { key: 'helmets', nameKey: 'ballistic_helmet' },
    { key: 'shields', nameKey: 'bulletproof_shield' },
    { key: 'visors', nameKey: 'ballistic_visor' },
    { key: 'ballistic-vests', nameKey: 'ballistic_vest' },
    { key: 'footwear', nameKey: 'footwear' },
    { key: 'plates', nameKey: 'plates' }
  ];

  return (
    <nav className="glass" style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      padding: '0 0'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link to="/" className="logo" onClick={closeMobileMenu} style={{
          fontSize: '1.5rem',
          fontWeight: 800,
          fontFamily: 'var(--font-heading)',
          color: 'var(--primary)',
          letterSpacing: '2px',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
         <img style={{width:"130px",height:"auto"}} src={Logo} alt="" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hide-mobile" style={{
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
              {categoriesList.map((cat) => (
                <li key={cat.key}>
                  <Link to={`/category/${cat.key}`} onClick={() => setIsProductsOpen(false)} style={{ fontSize: '0.75rem' }}>
                    {t(`categories.${cat.nameKey}`)}
                  </Link>
                </li>
              ))}
              <div style={{ height: '1px', background: 'var(--border)', margin: '0.5rem 0' }}></div>
              
            </ul>
          </li>
          <li>
            <Link to="/contact">{t('nav.contact')}</Link>
          </li>
        </ul>

        <div className="nav-actions" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <button 
            onClick={toggleLanguage}
            className="hide-mobile"
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
          </button>

          {/* Hamburger Toggle */}
          <button 
            className="show-mobile"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              background: 'none',
              color: 'var(--text-bright)',
              fontSize: '1.4rem',
              display: 'flex',
              alignItems: 'center',
              padding: '0.5rem'
            }}
          >
            <i className={isMobileMenuOpen ? "ri-close-line" : "ri-menu-4-line"}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        {/* Mobile Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1.5rem 2rem',
          borderBottom: '1px solid var(--border)',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          background: 'var(--bg-dark)'
        }}>
          <Link to="/" className="logo" onClick={closeMobileMenu} style={{
            fontSize: '1.2rem',
            fontWeight: 800,
            fontFamily: 'var(--font-heading)',
            color: 'var(--primary)',
            letterSpacing: '1px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem'
          }}>
            <div style={{
              width: '18px',
              height: '18px',
              background: 'var(--primary)',
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
            }}></div>
            IRON<span style={{ color: 'var(--text-bright)' }}>SHIELD</span>
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {/* Split Language Switcher */}
            <div className="mobile-lang-switcher" style={{ display: 'flex', border: '1px solid var(--border)', borderRadius: '2px', overflow: 'hidden' }}>
              <button 
                onClick={() => i18n.language !== 'en' && toggleLanguage()}
                style={{
                  padding: '0.4rem 0.8rem',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  background: i18n.language === 'en' ? 'var(--primary)' : 'transparent',
                  color: i18n.language === 'en' ? 'var(--bg-dark)' : 'var(--text-dim)',
                }}
              >
                EN
              </button>
              <button 
                onClick={() => i18n.language !== 'fr' && toggleLanguage()}
                style={{
                  padding: '0.4rem 0.8rem',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  background: i18n.language === 'fr' ? 'var(--primary)' : 'transparent',
                  color: i18n.language === 'fr' ? 'var(--bg-dark)' : 'var(--text-dim)',
                  borderLeft: '1px solid var(--border)'
                }}
              >
                FR
              </button>
            </div>

            <button onClick={closeMobileMenu} style={{ background: 'none', color: 'var(--text-bright)', fontSize: '1.8rem' }}>
              <i className="ri-close-line"></i>
            </button>
          </div>
        </div>

        <div className="mobile-nav-content" style={{ marginTop: '5rem', display: 'flex', flexDirection: 'column' }}>
          <Link to="/" className="mobile-menu-link" onClick={closeMobileMenu}>
            {t('nav.home')}
          </Link>
          
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <button 
              onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
              className={`mobile-menu-link ${isMobileProductsOpen ? 'active' : ''}`}
            >
              {t('nav.products')}
              <i className="ri-arrow-down-s-line" style={{ 
                transform: isMobileProductsOpen ? 'rotate(180deg)' : 'rotate(0)',
                transition: 'var(--transition-smooth)'
              }}></i>
            </button>
            
            <div className={`mobile-submenu ${isMobileProductsOpen ? 'open' : ''}`}>
              {categoriesList.map((cat) => (
                <Link 
                  key={cat.key} 
                  to={`/category/${cat.key}`} 
                  onClick={closeMobileMenu}
                  className="mobile-submenu-link"
                >
                  {t(`categories.${cat.nameKey}`)}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/contact" className="mobile-menu-link" onClick={closeMobileMenu}>
            {t('nav.contact')}
          </Link>
          
          <div style={{ marginTop: '3rem' }}>
            <div style={{ 
              fontSize: '0.6rem', 
              color: 'var(--text-dim)', 
              fontFamily: 'var(--font-mono)',
              paddingLeft: '1rem',
              borderLeft: '2px solid var(--primary)',
              lineHeight: 1.8
            }}>
            
            </div>
          </div>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
