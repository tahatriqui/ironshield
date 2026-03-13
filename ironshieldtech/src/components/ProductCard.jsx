import React from 'react';
import { useTranslation } from 'react-i18next';

const ProductCard = ({ product }) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language.split('-')[0]; // Handle cases like 'fr-FR'

  const name = typeof product.name === 'object' ? (product.name[currentLang] || product.name['fr']) : product.name;
  const description = typeof product.description === 'object' ? (product.description[currentLang] || product.description['fr']) : product.description;
  const category = typeof product.category === 'object' ? (product.category[currentLang] || product.category['fr']) : product.category;

  return (
    <div className="product-card tactical-box" style={{
      background: 'var(--bg-surface)',
      border: '1px solid var(--border)',
      borderRadius: '0px',
      overflow: 'hidden',
      transition: 'var(--transition-smooth)',
      position: 'relative',
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{
        height: '240px', // Increased from 240px
        overflow: 'hidden',
        position: 'relative',
        background: '#fff', // Changed to white as shots show white bg images
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {product.image ? (
          <img
            src={product?.image}
            alt={name}
            style={{
              maxWidth: '90%',
              maxHeight: '90%',
              objectFit: 'contain', // Changed to contain to respect product shape
              display: 'block',
              transition: 'var(--transition-smooth)'
            }}
          />
        ) : (
          <div style={{
            width: '100%',
            height: '100%',
            background: `linear-gradient(45deg, #050604, #12140f)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--primary-bright)',
            fontSize: '3rem',
            opacity: 0.2
          }}>
            <i className="ri-shield-flash-line"></i>
          </div>
        )}
        
        <div className="badge" style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          background: 'var(--primary)',
          color: '#fff',
          fontSize: '0.7rem',
          padding: '0.3rem 0.8rem',
          fontFamily: 'var(--font-mono)',
          zIndex: 2
        }}>
          {category}
        </div>

        {/* Tactical Crosshair Decor */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '60px',
          height: '60px',
          border: '1px solid rgba(0, 0, 0, 0.05)',
          borderRadius: '50%',
          pointerEvents: 'none'
        }}></div>
      </div>

      <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
       
        <h3 style={{ 
          fontSize: '1.4rem', // Increased from 1.1rem
          marginBottom: '1rem', 
          color: 'var(--text-bright)', 
          letterSpacing: '0.05em',
          fontWeight: '800',
          textTransform: 'uppercase'
        }}>
          {name}
        </h3>
        
        <p style={{ 
          fontSize: '1rem', // Increased from 0.9rem
          color: 'var(--text-dim)', 
          marginBottom: '1.5rem', 
          flex: 1,
          lineHeight: '1.6' 
        }}>
          {description}
        </p>
      </div>

      <style>{`
        .product-card:hover {
          transform: translateY(-10px);
          border-color: var(--border-active);
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }
        .product-card:hover h3 {
          color: var(--primary);
        }
      `}</style>
    </div>
  );
};

export default ProductCard;
