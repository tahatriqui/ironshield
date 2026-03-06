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
        height: '240px',
        overflow: 'hidden',
        position: 'relative',
        background: '#080907'
      }}>
        {product.image ? (
          <img
            src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcVIwySJrMbj2NL6dQJIo_l-ndaP7tf24YOg&s"}
            alt={name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              filter: 'sepia(30%) contrast(110%)',
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
          top: '0',
          right: '0',
          background: 'var(--primary)',
          color: '#fff',
          fontSize: '0.6rem',
          padding: '0.2rem 0.6rem',
          fontFamily: 'var(--font-mono)'
        }}>
          {category}
        </div>

        {/* Tactical Crosshair Decor */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '40px',
          height: '40px',
          border: '1px solid rgba(141, 164, 96, 0.2)',
          borderRadius: '50%',
          pointerEvents: 'none'
        }}></div>
      </div>

      <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
        <div style={{ 
          fontSize: '0.6rem', 
          color: 'var(--primary-bright)', 
          fontFamily: 'var(--font-mono)', 
          marginBottom: '0.5rem',
          opacity: 0.7
        }}>
          REF_ID: SN-{product.id.toString().padStart(4, '0')} // CLASS_A
        </div>
        
        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: 'var(--text-bright)', letterSpacing: '0.05em' }}>
          {name}
        </h3>
        
        <p style={{ 
          fontSize: '0.9rem', 
          color: 'var(--text-dim)', 
          marginBottom: '1.5rem', 
          flex: 1,
          lineHeight: '1.5' 
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
