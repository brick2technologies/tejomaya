import IdlyBatter from "../assets/products/idli-batter.jpeg";
import DosaBatter from "../assets/products/dosa-batter.jpeg";
import IdlyKaram from "../assets/products/idli-karam.jpeg";
import DosaKaram from "../assets/products/dosa-karam.jpeg";
import RagiIdlyBatter from "../assets/products/ragi-idli-batter.jpeg";
import RagiDosaBatter from "../assets/products/ragi-dosa-batter.jpeg";
// import Sunnunda from "../assets/products/sunnunda.jpeg";
// import NuvvulaLaddu from "../assets/products/nuvvula-laddu.jpeg";
// import DryFruitsLaddu from "../assets/products/dry-fruits-laddu.jpeg";
// import KaramBoondi from "../assets/products/karam-boondi.jpeg";
// import AtukulaMixture from "../assets/products/atukula-mixture.jpeg";
// import Nippatlu from "../assets/products/nippatlu.jpeg";
// import PanchadaraGavvalu from "../assets/products/panchadara-gavvalu.jpeg";
// import RagiMurukulu from "../assets/products/ragi-murukulu.jpeg";
// import RagiRibbonPakodi from "../assets/products/ragi-ribbon-pakodi.jpeg";
// import RagiNippatlu from "../assets/products/ragi-nippatlu.jpeg";
// import BoondiLaddu from "../assets/products/boondi-laddu.jpeg";
// import Murukulu from "../assets/products/murukulu.jpeg";
// import BellamGavvalu from "../assets/products/bellam-gavvalu.jpeg";
// import PalliLaddu from "../assets/products/palli-laddu.jpeg";
// import RibbonPakodi from "../assets/products/ribbon-pakodi.jpeg";
// import SannaKarapusa from "../assets/products/sanna-karapusa.jpeg";
// import CornChudwa from "../assets/products/corn-chudwa.jpeg";
// import Chakodi from "../assets/products/chakodi.jpeg";
// import Karjikayalu from "../assets/products/karjikayalu.jpeg";
// import Mixture from "../assets/products/mixture.jpeg";


export interface Variant {
  quantity: string;
  price: number;
}

export interface ProductType {
  id: number;
  name: string;
  desc: string;
  image: string;
  category: 'normal' | 'ragi' | 'snacks';
  variants: Variant[];
}

export const products: ProductType[] = [
  // --- NORMAL PRODUCTS ---
  {
    id: 1,
    name: "Idly Batter",
    desc: "Soft & fluffy idlies made with naturally fermented batter",
    image: IdlyBatter,
    category: 'normal',
    variants: [{ quantity: "1 KG", price: 99 }],
  },
  {
    id: 2,
    name: "Dosa Batter",
    desc: "Perfectly fermented batter for crispy golden dosas",
    image: DosaBatter,
    category: 'normal',
    variants: [{ quantity: "1 KG", price: 99 }],
  },
  {
    id: 3,
    name: "Idly Karam",
    desc: "Traditional spicy karam specially prepared for idly",
    image: IdlyKaram,
    category: 'normal',
    variants: [{ quantity: "1 KG", price: 99 }],
  },
  {
    id: 4,
    name: "Dosa Karam",
    desc: "Flavor-rich karam crafted to enhance crispy dosas",
    image: DosaKaram,
    category: 'normal',
    variants: [{ quantity: "1 KG", price: 99 }],
  },
  
  // --- RAGI PRODUCTS ---
  {
    id: 25, // Fixed duplicate ID
    name: "Ragi Idly Batter",
    desc: "Soft & fluffy idlies made with naturally fermented batter",
    image: RagiIdlyBatter,
    category: 'ragi',
    variants: [{ quantity: "1 KG", price: 99 }],
  },
  {
    id: 26, // Fixed duplicate ID
    name: "Ragi Dosa Batter",
    desc: "Perfectly fermented batter for crispy golden dosas",
    image: RagiDosaBatter,
    category: 'ragi',
    variants: [{ quantity: "1 KG", price: 99 }],
  },
  {
    id: 12,
    name: "Ragi Murukulu",
    desc: "Healthy and crispy ragi murukulu.",
    image: "../assets/products/ragi-murukulu.jpeg",
    category: 'ragi',
    variants: [
      { quantity: "1 KG", price: 800 },
      { quantity: "500 GM", price: 400 },
      { quantity: "250 GM", price: 200 },
    ],
  },
  {
    id: 13,
    name: "Ragi Ribbon Pakodi",
    desc: "Nutritious ragi ribbon pakodi.",
    image: "../assets/products/ragi-ribbon-pakodi.jpeg",
    category: 'ragi',
    variants: [
      { quantity: "1 KG", price: 800 },
      { quantity: "500 GM", price: 400 },
      { quantity: "250 GM", price: 200 },
    ],
  },
  {
    id: 14,
    name: "Ragi Nippatlu",
    desc: "Fiber-rich crispy ragi nippatlu.",
    image: "../assets/products/ragi-nippatlu.jpeg",
    category: 'ragi',
    variants: [
      { quantity: "1 KG", price: 900 },
      { quantity: "500 GM", price: 450 },
      { quantity: "250 GM", price: 230 },
    ],
  },

  // --- SNACKS PRODUCTS ---
  {
    id: 5,
    name: "Sunnunda",
    desc: "Authentic and traditional sweet.",
    image: "../assets/products/sunnunda.jpeg",
    category: 'snacks',
    variants: [
      { quantity: "1 KG", price: 800 },
      { quantity: "500 GM", price: 400 },
      { quantity: "250 GM", price: 200 },
    ],
  },
  {
    id: 6,
    name: "Nuvvula Laddu",
    desc: "Healthy and delicious sesame laddu.",
    image: "../assets/products/nuvvula-laddu.jpeg",
    category: 'snacks',
    variants: [
      { quantity: "1 KG", price: 650 },
      { quantity: "500 GM", price: 325 },
      { quantity: "250 GM", price: 170 },
    ],
  },
  {
    id: 7,
    name: "Dry Fruits Laddu",
    desc: "Rich and nutritious dry fruits laddu.",
    image: "../assets/products/dry-fruits-laddu.jpeg",
    category: 'snacks',
    variants: [
      { quantity: "1 KG", price: 1600 },
      { quantity: "500 GM", price: 800 },
      { quantity: "250 GM", price: 400 },
    ],
  },
  {
    id: 8,
    name: "Karam Boondi",
    desc: "Crispy and spicy traditional snack.",
    image: "../assets/products/karam-boondi.jpeg",
    category: 'snacks',
    variants: [
      { quantity: "1 KG", price: 700 },
      { quantity: "500 GM", price: 350 },
      { quantity: "250 GM", price: 180 },
    ],
  },
  {
    id: 9,
    name: "Atukula Mixture",
    desc: "Crunchy poha mixture.",
    image: "../assets/products/atukula-mixture.jpeg",
    category: 'snacks',
    variants: [
      { quantity: "1 KG", price: 600 },
      { quantity: "500 GM", price: 300 },
      { quantity: "250 GM", price: 150 },
    ],
  },
  {
    id: 10,
    name: "Nippatlu",
    desc: "Crispy and savory rice crackers.",
    image: "../assets/products/nippatlu.jpeg",
    category: 'snacks',
    variants: [
      { quantity: "1 KG", price: 600 },
      { quantity: "500 GM", price: 300 },
      { quantity: "250 GM", price: 150 },
    ],
  },
  {
    id: 11,
    name: "Panchadara Gavvalu",
    desc: "Sweet shell-shaped traditional snack.",
    image: "../assets/products/panchadara-gavvalu.jpeg",
    category: 'snacks',
    variants: [
      { quantity: "1 KG", price: 500 },
      { quantity: "500 GM", price: 250 },
      { quantity: "250 GM", price: 130 },
    ],
  },
  {
    id: 15,
    name: "Boondi Laddu",
    desc: "Classic sweet boondi laddu.",
    image: "../assets/products/boondi-laddu.jpeg",
    category: 'snacks',
    variants: [
      { quantity: "1 KG", price: 600 },
      { quantity: "500 GM", price: 300 },
      { quantity: "250 GM", price: 150 },
    ],
  },
  {
    id: 16,
    name: "Murukulu",
    desc: "Traditional crunchy murukulu.",
    image: "../assets/products/murukulu.jpeg",
    category: 'snacks',
    variants: [
      { quantity: "1 KG", price: 400 },
      { quantity: "500 GM", price: 200 },
      { quantity: "250 GM", price: 100 },
    ],
  },
  {
    id: 17,
    name: "Bellam Gavvalu",
    desc: "Jaggery coated shell-shaped sweet.",
    image: "../assets/products/bellam-gavvalu.jpeg",
    category: 'snacks',
    variants: [
      { quantity: "1 KG", price: 600 },
      { quantity: "500 GM", price: 300 },
      { quantity: "250 GM", price: 150 },
    ],
  },
  {
    id: 18,
    name: "Palli Laddu",
    desc: "Crunchy peanut sweet laddu.",
    image: "../assets/products/palli-laddu.jpeg",
    category: 'snacks',
    variants: [
      { quantity: "1 KG", price: 550 },
      { quantity: "500 GM", price: 280 },
      { quantity: "250 GM", price: 140 },
    ],
  },
  {
    id: 19,
    name: "Ribbon Pakodi",
    desc: "Crispy and savory ribbon snacks.",
    image: "../assets/products/ribbon-pakodi.jpeg",
    category: 'snacks',
    variants: [
      { quantity: "1 KG", price: 500 },
      { quantity: "500 GM", price: 250 },
      { quantity: "250 GM", price: 130 },
    ],
  },
  {
    id: 20,
    name: "Sanna Karapusa",
    desc: "Fine and crispy sev snack.",
    image: "../assets/products/sanna-karapusa.jpeg",
    category: 'snacks',
    variants: [
      { quantity: "1 KG", price: 550 },
      { quantity: "500 GM", price: 280 },
      { quantity: "250 GM", price: 140 },
    ],
  },
  {
    id: 21,
    name: "Corn Chudwa",
    desc: "Flavorful corn flakes mixture.",
    image: "../assets/products/corn-chudwa.jpeg",
    category: 'snacks',
    variants: [
      { quantity: "1 KG", price: 400 },
      { quantity: "500 GM", price: 200 },
      { quantity: "250 GM", price: 100 },
    ],
  },
  {
    id: 22,
    name: "Chakodi",
    desc: "Crunchy ring-shaped savory snack.",
    image: "../assets/products/chakodi.jpeg",
    category: 'snacks',
    variants: [
      { quantity: "1 KG", price: 600 },
      { quantity: "500 GM", price: 300 },
      { quantity: "250 GM", price: 150 },
    ],
  },
  {
    id: 23,
    name: "Karjikayalu",
    desc: "Traditional sweet stuffed pastry.",
    image: "../assets/products/karjikayalu.jpeg",
    category: 'snacks',
    variants: [
      { quantity: "1 KG", price: 900 },
      { quantity: "500 GM", price: 450 },
      { quantity: "250 GM", price: 230 },
    ],
  },
  {
    id: 24,
    name: "Mixture",
    desc: "Classic savory and crunchy mixture.",
    image: "../assets/products/mixture.jpeg",
    category: 'snacks',
    variants: [
      { quantity: "1 KG", price: 600 },
      { quantity: "500 GM", price: 300 },
      { quantity: "250 GM", price: 150 },
    ],
  },
];