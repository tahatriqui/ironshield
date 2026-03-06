import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        shop: "Shop",
        products: "Products",
        tech: "Technology",
        contact: "Contact",
        cart: "Cart"
      },
      hero: {
        badge: "Military Grade Equipment",
        subtitle: "IronShield Tactical • Special Ops & Security",
        title_part1: "FORGED FOR ",
        title_accent: "THE EXTREME",
        desc: "Discover our selection of tactical armor, night vision systems, and field-tested survival gear. Uncompromising protection.",
        btn_catalog: "DISCOVER CATALOG",
        btn_tech: "OUR TECHNOLOGY"
      },
      catalog: {
        title: "TACTICAL SELECTION",
        desc: "Dive into our arsenal of cutting-edge equipment, designed for extreme performance and maximum durability.",
        no_products: "No products are available in this category yet.",
        add_to_cart: "Add to cart"
      },
      contact: {
        title: "Contact Us",
        desc: "Have a question about our ballistic solutions or a specific project? Send us a message, our team will get back to you quickly.",
        form: {
          firstName: "First Name",
          firstName_placeholder: "Enter first name",
          lastName: "Last Name",
          lastName_placeholder: "Enter last name",
          email: "Professional Email",
          email_placeholder: "you@company.com",
          subject: "Subject",
          subject_placeholder: "Quote request, partnership, other...",
          message: "Message",
          message_placeholder: "Explain your operational need or project...",
          submit: "Send Message"
        },
        info: {
          title: "Contact Information",
          division: "Iron Shield Tech – Tactical Division",
          address1: "12 Special Operations Street",
          address2: "75000 Paris, France",
          hours: "Mon – Fri, 9:00 AM – 6:00 PM (CET)"
        }
      },
      footer: {
        desc: "Cutting-edge tactical solutions for elite forces and security professionals worldwide.",
        nav_title: "NAVIGATION",
        products_title: "PRODUCTS",
        stay_ready: "STAY READY",
        newsletter: "Sign up for new arrival alerts.",
        rights: "ALL RIGHTS RESERVED.",
        privacy: "PRIVACY POLICY",
        legal: "LEGAL NOTICE"
      },
      specs: {
        title: "ENGINEERED EXCELLENCE",
        subtitle: "The Science of Survival",
        field_tested: {
          title: "Field Tested",
          desc: "Every component is subjected to rigorous environmental stress tests in combat conditions."
        },
        durability: {
          title: "Superior Durability",
          desc: "Using the latest in polymer and alloy engineering for equipment that never fails."
        },
        ergonomics: {
          title: "Advanced Ergonomics",
          desc: "Designed for rapid deployment and maximum mobility without compromising safety."
        }
      },
      stats: {
        deployments: "Tactical Deployments",
        protection: "Protection Rate",
        operators: "Global Operators",
        countries: "Countries Served"
      },
      cta: {
        title: "READY FOR MISSIONS?",
        desc: "Equip your unit with the best tactical gear. Contact our specialists for custom solutions.",
        btn: "CONTACT US"
      },
      categories: {
        title: "OUR CATEGORIES",
        tactical_vest: "TACTICAL VEST",
        bag_backpack: "BAG & BACKPACK",
        combat_uniforms: "COMBAT UNIFORMS",
        ballistic_helmet: "BALLISTIC HELMET",
        bulletproof_shield: "BULLETPROOF SHIELD",
        ballistic_visor: "BALLISTIC VISOR",
        ballistic_vest: "BALLISTIC VEST",
        footwear: "FOOTWEAR",
        plates: "PLATES"
      }
    }
  },
  fr: {
    translation: {
      nav: {
        home: "Accueil",
        shop: "Boutique",
        products: "Produits",
        tech: "Technologie",
        contact: "Contact",
        cart: "Panier"
      },
      hero: {
        badge: "Équipement de Grade Militaire",
        subtitle: "IronShield Tactical • Opérations Spéciales & Sécurité",
        title_part1: "FORGÉ POUR ",
        title_accent: "L'EXTRÊME",
        desc: "Découvrez notre sélection d'armures tactiques, de systèmes de vision nocturne et d'équipements de survie testés sur le terrain. La protection sans compromis.",
        btn_catalog: "DÉCOUVRIR LE CATALOGUE",
        btn_tech: "NOTRE TECHNOLOGIE"
      },
      catalog: {
        title: "SÉLECTION TACTIQUE",
        desc: "Plongez dans notre arsenal d'équipements de pointe, conçus pour la performance extrême et la durabilité maximale.",
        no_products: "Aucun produit disponible dans cette catégorie pour le moment.",
        add_to_cart: "Ajouter au panier"
      },
      contact: {
        title: "Contactez-nous",
        desc: "Une question sur nos solutions balistiques ou un projet spécifique ? Envoyez-nous un message, notre équipe vous répondra rapidement.",
        form: {
          firstName: "Prénom",
          firstName_placeholder: "Votre prénom",
          lastName: "Nom",
          lastName_placeholder: "Votre nom",
          email: "Email professionnel",
          email_placeholder: "vous@entreprise.com",
          subject: "Sujet",
          subject_placeholder: "Demande de devis, partenariat, autre...",
          message: "Message",
          message_placeholder: "Expliquez votre besoin opérationnel ou votre projet...",
          submit: "Envoyer le message"
        },
        info: {
          title: "Coordonnées",
          division: "Iron Shield Tech – Division Tactique",
          address1: "12 Rue des Opérations Spéciales",
          address2: "75000 Paris, France",
          hours: "Lun – Ven, 9h00 – 18h00 (CET)"
        }
      },
      footer: {
        desc: "Solutions tactiques de pointe pour les forces d'élite et les professionnels de la sécurité du monde entier.",
        nav_title: "NAVIGATION",
        products_title: "PRODUITS",
        stay_ready: "RESTEZ PRÊTS",
        newsletter: "Inscrivez-vous pour les alertes de nouveaux arrivages.",
        rights: "TOUS DROITS RÉSERVÉS.",
        privacy: "POLITIQUE DE CONFIDENTIALITÉ",
        legal: "MENTIONS LÉGALES"
      },
      specs: {
        title: "EXCELLENCE INGÉNIÉRIE",
        subtitle: "La Science de la Survie",
        field_tested: {
          title: "Testé sur le Terrain",
          desc: "Chaque composant est soumis à des tests de stress environnementaux rigoureux en conditions de combat."
        },
        durability: {
          title: "Durabilité Supérieure",
          desc: "Utilisant les dernières avancées en ingénierie des polymères et alliages pour un équipement infaillible."
        },
        ergonomics: {
          title: "Ergonomie Avancée",
          desc: "Conçu pour un déploiement rapide et une mobilité maximale sans compromettre la sécurité."
        }
      },
      stats: {
        deployments: "Déploiements Tactiques",
        protection: "Taux de Protection",
        operators: "Opérateurs Mondiaux",
        countries: "Pays Desservis"
      },
      cta: {
        title: "PRÊT POUR LA MISSION ?",
        desc: "Équipez votre unité avec le meilleur matériel tactique. Contact aux spécialistes pour des solutions sur mesure.",
        btn: "CONTACTEZ-NOUS"
      },
      categories: {
        title: "NOS CATÉGORIES",
        tactical_vest: "GILET TACTIQUE",
        bag_backpack: "SAC & SAC À DOS",
        combat_uniforms: "UNIFORMES DE COMBAT",
        ballistic_helmet: "CASQUE BALISTIQUE",
        bulletproof_shield: "BOUCLIER PARE-BALLES",
        ballistic_visor: "VISIÈRE BALISTIQUE",
        ballistic_vest: "GILET BALISTIQUE",
        footwear: "CHAUSSURES",
        plates: "PLAQUES"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
