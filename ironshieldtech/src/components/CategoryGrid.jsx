import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import vest1 from '../assets/Vest/1.webp';
import Bulletproofshield1 from '../assets/Bulletproofshield/1.webp';
const categoriesData = [
  {
    key: 'tactical-vest',
    nameKey: 'tactical_vest',
    image: vest1
  },
  {
    key: 'backpacks',
    nameKey: 'bag_backpack',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80'
  },
  {
    key: 'uniforms',
    nameKey: 'combat_uniforms',
    image: 'https://images.unsplash.com/photo-1590494165264-1ebe3602eb80?auto=format&fit=crop&w=800&q=80'
  },
  {
    key: 'helmets',
    nameKey: 'ballistic_helmet',
    image: 'https://images.unsplash.com/photo-1595111102450-4660e90c4205?auto=format&fit=crop&w=800&q=80'
  },
  {
    key: 'shields',
    nameKey: 'bulletproof_shield',
    image: Bulletproofshield1,
  },
  {
    key: 'visors',
    nameKey: 'ballistic_visor',
    image: 'https://images.unsplash.com/photo-1614749666016-11f814fa85df?auto=format&fit=crop&w=800&q=80'
  },
  {
    key: 'ballistic-vests',
    nameKey: 'ballistic_vest',
    image: 'https://images.unsplash.com/photo-1579546673054-ca61483a3ec7?auto=format&fit=crop&w=800&q=80'
  },
  {
    key: 'footwear',
    nameKey: 'footwear',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80'
  },
  {
    key: 'plates',
    nameKey: 'plates',
    image: 'https://images.unsplash.com/photo-1584382500416-09094776101c?auto=format&fit=crop&w=800&q=80'
  }
];

const CategoryGrid = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section id="categories" style={{ padding: '8rem 0', background: 'var(--bg-dark)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ 
            fontSize: '3rem', 
            fontWeight: '800',
            letterSpacing: '0.2em',
            marginBottom: '2rem' 
          }}>
            {t('categories.title')}
          </h2>
          <div style={{ 
            width: '80px', 
            height: '4px', 
            background: 'var(--primary)', 
            margin: '0 auto' 
          }}></div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '2px', // Thin border effect between cards
          background: 'var(--border)', // This acts as the grid line
          border: '1px solid var(--border)'
        }}>
          {categoriesData.map((cat) => (
            <div
              key={cat.key}
              onClick={() => navigate(`/category/${cat.key}`)}
              style={{
                background: 'var(--bg-surface)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                aspectRatio: '1 / 1.1',
                display: 'flex',
                flexDirection: 'column',
                transition: 'var(--transition-smooth)'
              }}
              className="category-card"
            >
              <div style={{ 
                flex: 1, 
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem',
                background: '#fff' // White background for the image like in the sample
              }}>
                <img 
                  src={cat.image} 
                  alt={t(`categories.${cat.nameKey}`)}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    transition: 'transform 0.5s ease'
                  }}
                  className="category-img"
                />
              </div>
              <div style={{ 
                padding: '1.5rem', 
                background: 'var(--bg-surface)',
                borderTop: '1px solid var(--border)'
              }}>
                <h3 style={{ 
                  fontSize: '0.9rem', 
                  marginBottom: '0.5rem',
                  letterSpacing: '0.1em'
                }}>
                  {t(`categories.${cat.nameKey}`)}
                </h3>
                <div style={{ 
                  width: '30px', 
                  height: '2px', 
                  background: 'var(--accent-coyote)',
                  opacity: 0.6
                }}></div>
              </div>

              {/* Hover Overlay */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(99, 110, 75, 0.1)',
                opacity: 0,
                transition: 'var(--transition-smooth)',
                pointerEvents: 'none'
              }} className="category-overlay"></div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .category-card:hover .category-img {
          transform: scale(1.05);
        }
        .category-card:hover .category-overlay {
          opacity: 1;
        }
        .category-card:hover {
          background: var(--bg-surface-soft);
        }
      `}</style>
    </section>
  );
};

export default CategoryGrid;
