import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { products } from '../data/products';
import ProductCard from './ProductCard';

const ProductGrid = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language.split('-')[0];

  const categoryMap = products.reduce((map, product) => {
    if (!map.has(product.categoryKey)) {
      const label = typeof product.category === 'object' 
        ? (product.category[currentLang] || product.category['fr']) 
        : product.category;
        
      map.set(product.categoryKey, {
        key: product.categoryKey,
        label: label,
      });
    }
    return map;
  }, new Map());

  const categories = Array.from(categoryMap.values());

  return (
    <section id="catalogue" style={{ padding: '8rem 0', background: 'var(--bg-dark)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{t('catalog.title')}</h2>
          <div style={{ 
            width: '60px', 
            height: '3px', 
            background: 'var(--primary)', 
            margin: '0 auto 1.5rem auto' 
          }}></div>
          <p style={{ color: 'var(--text-dim)', maxWidth: '600px', margin: '0 auto' }}>
            {t('catalog.desc')}
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '3rem',
          }}
        >
          {categories.map((cat) => (
            <Link
              key={cat.key}
              to={`/category/${cat.key}`}
              style={{
                background: 'var(--bg-surface-soft)',
                border: '1px solid var(--border)',
                borderRadius: '999px',
                padding: '0.5rem 1.2rem',
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--text-main)',
              }}
            >
              {cat.label}
            </Link>
          ))}
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '2.5rem'
        }}>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
