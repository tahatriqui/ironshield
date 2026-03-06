import vest1 from '../assets/Vest/1.webp';

export const products = [
  // HELMETS
  {
    id: 1,
    name: {
      fr: 'Casque Balistique Haute Performance',
      en: 'High Performance Ballistic Helmet'
    },
    description: {
      fr: 'Protection de niveau III-A avec rails latéraux pour accessoires et support NVG.',
      en: 'Level III-A protection with side rails for accessories and NVG mount.'
    },
    price: 299.0,
    category: {
      fr: 'Casques Balistiques',
      en: 'Ballistic Helmets'
    },
    categoryKey: 'helmets',
    image: 'https://images.unsplash.com/photo-1595111102450-4660e90c4205?auto=format&fit=crop&w=800&q=80',
    tags: ['Balistique', 'Sécurité', 'Radio-ready'],
  },
  {
    id: 2,
    name: {
      fr: 'Casque Légèreté Opérateur',
      en: 'Operator Lightweight Helmet'
    },
    description: {
      fr: 'Casque léger high-cut pour opérateurs nécessitant mobilité maximale et compatibilité casque audio.',
      en: 'Lightweight high-cut helmet for operators requiring maximum mobility and headset compatibility.'
    },
    price: 249.0,
    category: {
      fr: 'Casques Balistiques',
      en: 'Ballistic Helmets'
    },
    categoryKey: 'helmets',
    image: 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&w=800&q=80',
    tags: ['Léger', 'High-cut', 'Confort'],
  },

  // PLATES
  {
    id: 5,
    name: {
      fr: 'Paire de Plaques Céramique Niveau IV',
      en: 'Level IV Ceramic Plate Pair'
    },
    description: {
      fr: 'Plaques céramique multicourbure niveau IV, optimisées pour arrêter les menaces perforantes.',
      en: 'Level IV multi-curvature ceramic plates, optimized to stop armor-piercing threats.'
    },
    price: 379.0,
    category: {
      fr: 'Plaques',
      en: 'Plates'
    },
    categoryKey: 'plates',
    image: 'https://images.unsplash.com/photo-1584382500416-09094776101c?auto=format&fit=crop&w=800&q=80',
    tags: ['Niveau IV', 'Céramique', 'Multicourbure'],
  },

  // BALLISTIC VESTS
  {
    id: 7,
    name: {
      fr: 'Gilet Pare-Balles Discret',
      en: 'Concealable Bulletproof Vest'
    },
    description: {
      fr: 'Gilet souple de protection III-A adapté aux opérateurs sous couverture et VIP.',
      en: 'Level III-A soft protection vest suitable for undercover operators and VIPs.'
    },
    price: 219.0,
    category: {
      fr: 'Gilets Balistiques',
      en: 'Ballistic Vests'
    },
    categoryKey: 'ballistic-vests',
    image: 'https://images.unsplash.com/photo-1579546673054-ca61483a3ec7?auto=format&fit=crop&w=800&q=80',
    tags: ['Discret', 'VIP', 'Souple'],
  },

  // TACTICAL VESTS
  {
    id: 8,
    name: {
      fr: 'Gilet Tactique Renforcé',
      en: 'Reinforced Tactical Vest'
    },
    description: {
      fr: 'Gilet tactique avec poches modulaires, compatible plaques balistiques avant et arrière.',
      en: 'Tactical vest with modular pouches, compatible with front and rear ballistic plates.'
    },
    price: 189.99,
    category: {
      fr: 'Gilets Tactiques',
      en: 'Tactical Vests'
    },
    categoryKey: 'tactical-vest',
    image: 'https://images.unsplash.com/photo-1601051515239-2ce137e50c40?auto=format&fit=crop&w=800&q=80',
    tags: ['Modulaire', 'Plaques', 'Tactique'],
  },

  // BACKPACKS
  {
    id: 11,
    name: {
      fr: 'Sac à Dos Mission 48h (45L)',
      en: '48h Mission Backpack (45L)'
    },
    description: {
      fr: "Compartiment d'hydratation, sangles de compression et dos ventilé.",
      en: 'Hydration compartment, compression straps and ventilated back.'
    },
    price: 89.5,
    category: {
      fr: 'Sacs & Sacs à Dos',
      en: 'Bags & Backpacks'
    },
    categoryKey: 'backpacks',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
    tags: ['Capacité', 'Tactique', 'Voyage'],
  },

  // FOOTWEAR
  {
    id: 13,
    name: {
      fr: 'Bottes de Combat Tout Terrain',
      en: 'All-Terrain Combat Boots'
    },
    description: {
      fr: 'Bottes robustes avec semelle anti-dérapante et protection de cheville.',
      en: 'Robust boots with non-slip sole and ankle protection.'
    },
    price: 145.0,
    category: {
      fr: 'Chaussures',
      en: 'Footwear'
    },
    categoryKey: 'footwear',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
    tags: ['Robuste', 'Tout Terrain'],
  },

  // SHIELDS
  {
    id: 14,
    name: {
      fr: 'Bouclier Balistique Léger',
      en: 'Lightweight Ballistic Shield'
    },
    description: {
      fr: 'Bouclier portable niveau III-A avec poignée ergonomique.',
      en: 'Level III-A portable shield with ergonomic handle.'
    },
    price: 850.0,
    category: {
      fr: 'Boucliers',
      en: 'Shields'
    },
    categoryKey: 'shields',
    image: 'https://images.unsplash.com/photo-1582298538104-fe2e74c27f39?auto=format&fit=crop&w=800&q=80',
    tags: ['Tactique', 'Protection'],
  }
];
