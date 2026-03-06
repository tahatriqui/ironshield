import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { products } from '../data/products';
import ProductCard from './ProductCard';

const CATEGORY_METADATA = {
  'tactical-vest': {
    label: { fr: 'Gilet Tactique', en: 'Tactical Vest' },
    description: {
      fr: 'Gilets tactiques modulaires avec système MOLLE pour configurations personnalisées.',
      en: 'Modular tactical vests with MOLLE system for customized mission configurations.'
    }
  },
  backpacks: {
    label: { fr: 'Sacs & Sacs à Dos', en: 'Bags & Backpacks' },
    description: {
      fr: 'Sacs à dos robustes et sacs de mission conçus pour le transport d\'équipement lourd.',
      en: 'Rugged backpacks and mission bags designed for heavy gear transport and durability.'
    }
  },
  uniforms: {
    label: { fr: 'Uniformes de Combat', en: 'Combat Uniforms' },
    description: {
      fr: 'Uniformes de combat résistants avec camouflages opérationnels et zones renforcées.',
      en: 'Resilient combat uniforms featuring operational camouflage and reinforced stress points.'
    }
  },
  helmets: {
    label: { fr: 'Casques Balistiques', en: 'Ballistic Helmets' },
    description: {
      fr: 'Casques balistiques de pointe offrant une protection supérieure et une compatibilité accessoires.',
      en: 'Advanced ballistic helmets offering superior protection and accessory compatibility.'
    }
  },
  shields: {
    label: { fr: 'Boucliers Pare-Balles', en: 'Bulletproof Shields' },
    description: {
      fr: 'Boucliers balistiques tactiques pour entrées forcées et protection d\'équipe.',
      en: 'Tactical ballistic shields for forced entries and team protection.'
    }
  },
  visors: {
    label: { fr: 'Visières Balistiques', en: 'Ballistic Visors' },
    description: {
      fr: 'Protection faciale transparente de haute résistance pour casques balistiques.',
      en: 'High-resistance transparent facial protection for ballistic helmets.'
    }
  },
  'ballistic-vests': {
    label: { fr: 'Gilets Balistiques', en: 'Ballistic Vests' },
    description: {
      fr: 'Gilets pare-balles certifiés pour la protection des organes vitaux et le confort longue durée.',
      en: 'Certified bulletproof vests for vital organ protection and long-wear comfort.'
    }
  },
  footwear: {
    label: { fr: 'Chaussures', en: 'Footwear' },
    description: {
      fr: 'Bottes et chaussures tactiques conçues pour tous les terrains et conditions extrêmes.',
      en: 'Tactical boots and footwear engineered for all terrains and extreme conditions.'
    }
  },
  plates: {
    label: { fr: 'Plaques', en: 'Plates' },
    description: {
      fr: 'Plaques balistiques en céramique et composites pour une protection de niveau supérieur.',
      en: 'Ceramic and composite ballistic plates for high-level protection.'
    }
  }
};

const CategoryPage = () => {
  const { categoryKey } = useParams();
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language.split('-')[0];

  const metaRaw = CATEGORY_METADATA[categoryKey];
  const label = metaRaw ? (metaRaw.label[currentLang] || metaRaw.label['fr']) : 'Catalogue';
  const description = metaRaw ? (metaRaw.description[currentLang] || metaRaw.description['fr']) : '';

  const filtered = products.filter(
    (product) => product.categoryKey === categoryKey
  );

  return (
    <section style={{ padding: '8rem 0', background: 'var(--bg-dark)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            {label}
          </h2>
          <div
            style={{
              width: '60px',
              height: '3px',
              background: 'var(--primary)',
              margin: '0 auto 1.5rem auto',
            }}
          ></div>
          {description && (
            <p
              style={{
                color: 'var(--text-dim)',
                maxWidth: '650px',
                margin: '0 auto',
              }}
            >
              {description}
            </p>
          )}
        </div>

        {filtered.length === 0 ? (
          <p
            style={{
              textAlign: 'center',
              color: 'var(--text-dim)',
            }}
          >
            {t('catalog.no_products')}
          </p>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '2.5rem',
            }}
          >
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CategoryPage;
