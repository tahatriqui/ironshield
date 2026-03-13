import tacticalVestNylon from "../assets/Vest/4.webp";
import tacticalVestPolyester from "../assets/Vest/6.webp";
import tacticalVest3 from "../assets/Vest/8.webp";
import tacticalVest4 from "../assets/Vest/5.webp";
import tacticalVest5 from "../assets/Vest/7.webp";
import tacticalVest6 from "../assets/Vest/3.webp";
import tacticalVest7 from "../assets/Vest/2.webp";
import tacticalovert from "../assets/tacticalovert.webp";
import tacticalovert1 from "../assets/3-12 (5)-CjxRH0ug.webp";
import plate from "../assets/plate1.webp"; 
import plate1 from "../assets/plate2.webp"; 
import footwar from "../assets/footwar.webp";
import footwar1 from "../assets/footwar1.webp";
import footwar2 from "../assets/8-4.webp";
import Bag1 from "../assets/Bag/1.webp";
import Bag2 from "../assets/Bag/4.webp";
import Bag3 from "../assets/Bag/3.webp";
import Bag4 from "../assets/Bag/5.webp";
import Bag5 from "../assets/Bag/6.webp";
import Bag6 from "../assets/Bag/7.webp";
import Bag7 from "../assets/Bag/8.webp";
import Bag8 from "../assets/Bag/2.webp";
//combat uniforms
import Unif1 from "../assets/Uniform/5.webp";
import Unif2 from "../assets/Uniform/1.webp";
import Unif3 from "../assets/Uniform/7.webp";
import Unif4 from "../assets/Uniform/8.webp";
import Unif5 from "../assets/Uniform/3.webp";
//ballastic helmet
import bhelmet1 from "../assets/Plastic helmet/1.webp";
import bhelmet2 from "../assets/Plastic helmet/2.webp";
import bhelmet3 from "../assets/Plastic helmet/3.webp";
import bhelmet4 from "../assets/Plastic helmet/4.webp";
//BOUCLIER
import Bouclier1 from "../assets/Bulletproofshield/3.webp";
import Bouclier2 from "../assets/Bulletproofshield/4.webp";
import Bouclier3 from "../assets/Bulletproofshield/2.webp";
//visors
import visors1 from "../assets/Bullet proof visor/1.webp";
import visors2 from "../assets/Bullet proof visor/2.webp";
import visors3 from "../assets/Bullet proof visor/3.webp";
//helmet
import helmet1 from "../assets/1-10 (6).webp";
import unhelmet1 from "../assets/unBlue.webp";
export const products = [
  {
    id: 40,
    name: {
      fr: "Nij iiia Bulletproof mask",
      en: "Nij iiia Bulletproof mask",
    },
    category: {
      fr: "NIJ IIIA 9mm & .44Magnum",
      en: "NIJ IIIA 9mm & .44Magnum",
    },
    categoryKey: "visors",
    image: visors1,
    tags: ["Balistique", "Sécurité", "Radio-ready"],
  },
  {
    id: 41,
    name: {
      fr: "BulletProof Visor NIJ IIIA, 9MM 140*350MM",
      en: "BulletProof Visor NIJ IIIA, 9MM 140*350MM",
    },
    category: {
      fr: "NIJ IIIA 9mm & .44Magnum",
      en: "NIJ IIIA 9mm & .44Magnum",
    },
    categoryKey: "visors",
    image: visors2,
    tags: ["Balistique", "Sécurité", "Radio-ready"],
  },
  {
    id: 42,
    name: {
      fr: "Visière pare-balles 200 × 350 mm",
      en: "BulletProof Visor 200*350MM",
    },
    category: {
      fr: "NIJ IIIA 9mm & .44Magnum",
      en: "NIJ IIIA 9mm & .44Magnum",
    },
    categoryKey: "visors",
    image: visors3,
    tags: ["Balistique", "Sécurité", "Radio-ready"],
  },
  // HELMETS
  {
    id: 1,
    name: {
      fr: "Tan Bullet proof Helmet",
      en: "Tan Bullet proof Helmet",
    },
    category: {
      fr: "NIJ IIIA 9mm & .44Magnum",
      en: "NIJ IIIA 9mm & .44Magnum",
    },
    categoryKey: "helmets",
    image: bhelmet1,
    tags: ["Balistique", "Sécurité", "Radio-ready"],
  },
  {
    id: 33,
    name: {
      fr: "Black FAST Ballistic Helmet",
      en: "Black FAST Ballistic Helmet",
    },
    category: {
      fr: "NIJ IIIA 9mm & .44Magnum",
      en: "NIJ IIIA 9mm & .44Magnum",
    },
    categoryKey: "helmets",
    image: bhelmet2,
    tags: ["Léger", "High-cut", "Confort"],
  },
  {
    id: 34,
    name: {
      fr: "Green MICH 2001 Helmet",
      en: "Green MICH 2001 Helmet",
    },
    category: {
      fr: "NIJ IIIA 9mm & .44Magnum",
      en: "NIJ IIIA 9mm & .44Magnum",
    },
    categoryKey: "helmets",
    image: helmet1,
    tags: ["Léger", "High-cut", "Confort"],
  },
  {
    id: 35,
    name: {
      fr: "Casque pare-balles coupe super haute",
      en: "BulletProof Helmet Super High Cut",
    },
    category: {
      fr: "NIJ IIIA 9mm & .44Magnum",
      en: "NIJ IIIA 9mm & .44Magnum",
    },
    categoryKey: "helmets",
    image: bhelmet4,
    tags: ["Léger", "High-cut", "Confort"],
  },
  {
    id: 70,
    name: {
      fr: "UN Ballistic Helmet",
      en: "UN Ballistic Helmet",
    },
    category: {
      fr: "NIJ IIIA 9mm & .44Magnum",
      en: "NIJ IIIA 9mm & .44Magnum",
    },
    categoryKey: "helmets",
    image: unhelmet1,
    tags: ["Léger", "High-cut", "Confort"],
  },

  // PLATES
  {
    id: 5,
    name: {
      fr: "Plaque niveau III",
      en: "Plate Level III",
    },
    category: {
      fr: "Plaques",
      en: "Plates",
    },
    categoryKey: "plates",
    image:plate,
        tags: ["Niveau IV", "Céramique", "Multicourbure"],
  },
  {
    id: 55,
    name: {
      fr: "Plaque niveau III+",
      en: "Plate Level III+",
    },
    category: {
      fr: "Plaques",
      en: "Plates",
    },
    categoryKey: "plates",
    image:plate1,
        tags: ["Niveau IV", "Céramique", "Multicourbure"],
  },

  // BALLISTIC VESTS
  {
    id: 7,
    name: {
      fr: "Gilet pare-balles tactique overt",
      en: "tactical overt vest",
    },
   
    category: {
      fr: "Gilets Balistiques",
      en: "Ballistic Vests",
    },
    categoryKey: "ballistic-vests",
    image:tacticalovert,
       tags: ["Discret", "VIP", "Souple"],
  },
  {
    id: 45,
    name: {
      fr: "Gilet pare-balles tactique overt NIJ STD.0101.04/06",
      en: "tactical overt vest NIJ STD.0101.04/06",
    },
   
    category: {
      fr: "Gilets Balistiques",
      en: "Ballistic Vests",
    },
    categoryKey: "ballistic-vests",
    image:tacticalovert1,
       tags: ["Discret", "VIP", "Souple"],
  },

  // TACTICAL VESTS
  {
    id: 8,
    name: {
      fr: "Gilet Tactique Nylon 1000D avec Revêtement PU",
      en: "Tactical Vest 1000D Nylon Fabric with PU Coated",
    },
    category: {
      fr: "Gilets Tactiques",
      en: "Tactical Vests",
    },
    categoryKey: "tactical-vest",
    image: tacticalVestNylon,
    tags: ["Modulaire", "Plaques", "Tactique"],
  },
  {
    id: 15,
    name: {
      fr: "Gilet tactique 100 % polyester",
      en: "Tactical Vest Polyester 100%",
    },
    category: {
      fr: "Gilets Tactiques",
      en: "Tactical Vests",
    },
    categoryKey: "tactical-vest",
    image: tacticalVestPolyester,
    tags: ["Modulaire", "Plaques", "Tactique"],
  },
  {
    id: 16,
    name: {
      fr: "Gilet Tactique Polyster 600D",
      en: "Tactical Vest 600D Polyester",
    },
    category: {
      fr: "Gilets Tactiques",
      en: "Tactical Vests",
    },
    categoryKey: "tactical-vest",
    image: tacticalVest3,
    tags: ["Modulaire", "Plaques", "Tactique"],
  },
  {
    id: 17,
    name: {
      fr: "Gilet tactique polyester 500D",
      en: "Tactical Vest 500D Polyester",
    },
    category: {
      fr: "Gilets Tactiques",
      en: "Tactical Vests",
    },
    categoryKey: "tactical-vest",
    image: tacticalVest5,
    tags: ["Modulaire", "Plaques", "Tactique"],
  },
  {
    id: 18,
    name: {
      fr: "Gilet tactique en tissu nylon 1000D avec revêtement PU",
      en: "Tactical Vest 1000D Nylon Fabric with PU Coated",
    },
    category: {
      fr: "Gilets Tactiques",
      en: "Tactical Vests",
    },
    categoryKey: "tactical-vest",
    image: tacticalVest6,
    tags: ["Modulaire", "Plaques", "Tactique"],
  },
  {
    id: 19,
    name: {
      fr: "Gilet tactique en tissu polyester 1000D",
      en: "Tactical Vest 1000D Polyester Fabric",
    },
    category: {
      fr: "Gilets Tactiques",
      en: "Tactical Vests",
    },
    categoryKey: "tactical-vest",
    image: tacticalVest7,
    tags: ["Modulaire", "Plaques", "Tactique"],
  },

  // BACKPACKS
  {
    id: 11,
    name: {
      fr: "Sac et sac à dos camouflage Italie",
      en: "Bag and BackPack Italy Camouflage",
    },
    category: {
      fr: "Sacs & Sacs à Dos",
      en: "Bags & Backpacks",
    },
    categoryKey: "backpacks",
    image: Bag1,
    tags: ["Capacité", "Tactique", "Voyage"],
  },
  {
    id: 20,
    name: {
      fr: "Sac et sac à dos camouflage noir Multicam",
      en: "Bag and BackPack Black Multicam Camo",
    },
    category: {
      fr: "Sacs & Sacs à Dos",
      en: "Bags & Backpacks",
    },
    categoryKey: "backpacks",
    image: Bag2,
    tags: ["Capacité", "Tactique", "Voyage"],
  },
  {
    id: 21,
    name: {
      fr: "Sac et sac à dos camouflage urbain numérique",
      en: "Bag and BackPack Urban Digital Camouflage",
    },
    category: {
      fr: "Sacs & Sacs à Dos",
      en: "Bags & Backpacks",
    },
    categoryKey: "backpacks",
    image: Bag3,
    tags: ["Capacité", "Tactique", "Voyage"],
  },
  {
    id: 22,
    name: {
      fr: "Sac et sac à dos camouflage numérique",
      en: "Bag and BackPack Digital Camouflage",
    },
    category: {
      fr: "Sacs & Sacs à Dos",
      en: "Bags & Backpacks",
    },
    categoryKey: "backpacks",
    image: Bag4,
    tags: ["Capacité", "Tactique", "Voyage"],
  },
  {
    id: 23,
    name: {
      fr: "Sac et sac à dos vert olive",
      en: "Bag and BackPack Olive Green",
    },
    category: {
      fr: "Sacs & Sacs à Dos",
      en: "Bags & Backpacks",
    },
    categoryKey: "backpacks",
    image: Bag5,
    tags: ["Capacité", "Tactique", "Voyage"],
  },
  {
    id: 24,
    name: {
      fr: "Sac et sac à dos pour rangement d’armes",
      en: "Bag and BackPack Gun Storage",
    },
    category: {
      fr: "Sacs & Sacs à Dos",
      en: "Bags & Backpacks",
    },
    categoryKey: "backpacks",
    image: Bag6,
    tags: ["Capacité", "Tactique", "Voyage"],
  },
  {
    id: 25,
    name: {
      fr: "Sac et sac à dos camouflage woodland numérique",
      en: "Bag and BackPack Woodland Digital Camouflage",
    },
    category: {
      fr: "Sacs & Sacs à Dos",
      en: "Bags & Backpacks",
    },
    categoryKey: "backpacks",
    image: Bag7,
    tags: ["Capacité", "Tactique", "Voyage"],
  },
  {
    id: 26,
    name: {
      fr: "Bag and BackPack Oman DPM Camouflage Pattern",
      en: "Sac et sac à dos camouflage Oman DPM",
    },
    category: {
      fr: "Sacs & Sacs à Dos",
      en: "Bags & Backpacks",
    },
    categoryKey: "backpacks",
    image: Bag8,
    tags: ["Capacité", "Tactique", "Voyage"],
  },

  //combat uniforms
  {
    id: 27,
    name: {
      fr: "Tenue de combat Multicam",
      en: "Combat Uniforms Multicam",
    },
    category: {
      fr: "Uniformes de Combat",
      en: "Combat Uniforms",
    },
    categoryKey: "uniforms",
    image: Unif1,
    tags: ["Capacité", "Tactique", "Voyage"],
  },
  {
    id: 28,
    name: {
      fr: "Tenue de combat noir Multicam",
      en: "Combat Uniforms Black Multicam",
    },
    category: {
      fr: "Uniformes de Combat",
      en: "Combat Uniforms",
    },
    categoryKey: "uniforms",
    image: Unif2,
    tags: ["Capacité", "Tactique", "Voyage"],
  },
  {
    id: 29,
    name: {
      fr: "Tenue de combat camouflage numérique Pérou",
      en: "Combat Uniforms Peru Digital Camo",
    },
    category: {
      fr: "Uniformes de Combat",
      en: "Combat Uniforms",
    },
    categoryKey: "uniforms",
    image: Unif3,
    tags: ["Capacité", "Tactique", "Voyage"],
  },
  {
    id: 30,
    name: {
      fr: "Tenue de combat sergé (twill)",
      en: "Combat Uniforms Ripstop",
    },
    category: {
      fr: "Uniformes de Combat",
      en: "Combat Uniforms",
    },
    categoryKey: "uniforms",
    image: Unif4,
    tags: ["Capacité", "Tactique", "Voyage"],
  },
  {
    id: 31,
    name: {
      fr: "Tenue de combat Ripstop",
      en: "Combat Uniforms Twill",
    },
    category: {
      fr: "Uniformes de Combat",
      en: "Combat Uniforms",
    },
    categoryKey: "uniforms",
    image: Unif5,
    tags: ["Capacité", "Tactique", "Voyage"],
  },

  // FOOTWEAR
  {
    id: 13,
    name: {
      fr: "Chaussures Goodyear, 8 paires",
      en: "FootWear Goodyear 8 pairs",
    },
  
    category: {
      fr: "Chaussures",
      en: "Footwear",
    },
    categoryKey: "footwear",
    image:footwar,
      tags: ["Robuste", "Tout Terrain"],
  },
  {
    id: 53,
    name: {
      fr: "Chaussures Goodyear, 2 paires",
      en: "FootWear Goodyear 2 pairs",
    },
  
    category: {
      fr: "Chaussures",
      en: "Footwear",
    },
    categoryKey: "footwear",
    image:footwar1,
      tags: ["Robuste", "Tout Terrain"],
  },
  {
    id: 56,
    name: {
      fr: "Chaussures Goodyear, 9 paires",
      en: "FootWear Goodyear Welted 9 pairs",
    },
  
    category: {
      fr: "Chaussures",
      en: "Footwear",
    },
    categoryKey: "footwear",
    image:footwar2,
      tags: ["Robuste", "Tout Terrain"],
  },

  // SHIELDS
  {
    id: 14,
    name: {
      fr: "Bouclier pare-balles NIJ IIIA 3,5 kg",
      en: "BulletProof shield NIJ IIIA 3.5KG",
    },
    category: {
      fr: "Boucliers",
      en: "Shields",
    },
    categoryKey: "shields",
    image: Bouclier1,
    tags: ["Tactique", "Protection"],
  },
  {
    id: 37,
    name: {
      fr: "Bouclier pare-balles NIJ IV autonome",
      en: "BulletProof shield NIJ IV STAND ALONE",
    },
    category: {
      fr: "Boucliers",
      en: "Shields",
    },
    categoryKey: "shields",
    image: Bouclier2,
    tags: ["Tactique", "Protection"],
  },
  {
    id: 38,
    name: {
      fr: "BulletProof shield NIJ0108.01 IV",
      en: "BulletProof shield NIJ0108.01 IV",
    },
    category: {
      fr: "Boucliers",
      en: "Shields",
    },
    categoryKey: "shields",
    image: Bouclier3,
    tags: ["Tactique", "Protection"],
  },
];
