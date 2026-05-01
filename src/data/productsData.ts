// src/data/productsData.ts

export interface Variant {
  quantity: string;
  price: number;
}

export interface ProductType {
  id: number;
  name: string;
  desc: string;
  image: string;
  variants: Variant[];
}

export const products: ProductType[] = [
  // --- EXISTING PRODUCTS ---
  {
    id: 1,
    name: "Idly Batter",
    desc: "Soft & fluffy idlies made with naturally fermented batter",
    image: "/products/idly-batter.jpg",
    variants: [{ quantity: "1 KG", price: 99 }],
  },
  {
    id: 2,
    name: "Dosa Batter",
    desc: "Perfectly fermented batter for crispy golden dosas",
    image: "/products/dosa-batter.jpg",
    variants: [{ quantity: "1 KG", price: 99 }],
  },
  {
    id: 3,
    name: "Idly Karam",
    desc: "Traditional spicy karam specially prepared for idly",
    image: "/products/idly-karam.jpg",
    variants: [{ quantity: "1 KG", price: 99 }],
  },
  {
    id: 4,
    name: "Dosa Karam",
    desc: "Flavor-rich karam crafted to enhance crispy dosas",
    image: "/products/dosa-karam.jpg",
    variants: [{ quantity: "1 KG", price: 99 }],
  },
  
  // --- NEW SNACK PRODUCTS ---
  {
    id: 5,
    name: "Sunnunda",
    desc: "Authentic and traditional sweet.",
    image: "/products/sunnunda.jpg",
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
    image: "/products/nuvvula-laddu.jpg",
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
    image: "/products/dry-fruits-laddu.jpg",
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
    image: "/products/karam-boondi.jpg",
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
    image: "/products/atukula-mixture.jpg",
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
    image: "/products/nippatlu.jpg",
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
    image: "/products/panchadara-gavvalu.jpg",
    variants: [
      { quantity: "1 KG", price: 500 },
      { quantity: "500 GM", price: 250 },
      { quantity: "250 GM", price: 130 },
    ],
  },
  {
    id: 12,
    name: "Ragi Murukulu",
    desc: "Healthy and crispy ragi murukulu.",
    image: "/products/ragi-murukulu.jpg",
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
    image: "/products/ragi-ribbon-pakodi.jpg",
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
    image: "/products/ragi-nippatlu.jpg",
    variants: [
      { quantity: "1 KG", price: 900 },
      { quantity: "500 GM", price: 450 },
      { quantity: "250 GM", price: 230 },
    ],
  },
  {
    id: 15,
    name: "Boondi Laddu",
    desc: "Classic sweet boondi laddu.",
    image: "/products/boondi-laddu.jpg",
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
    image: "/products/murukulu.jpg",
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
    image: "/products/bellam-gavvalu.jpg",
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
    image: "/products/palli-laddu.jpg",
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
    image: "/products/ribbon-pakodi.jpg",
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
    image: "/products/sanna-karapusa.jpg",
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
    image: "/products/corn-chudwa.jpg",
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
    image: "/products/chakodi.jpg",
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
    image: "/products/karjikayalu.jpg",
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
    image: "/products/mixture.jpg",
    variants: [
      { quantity: "1 KG", price: 600 },
      { quantity: "500 GM", price: 300 },
      { quantity: "250 GM", price: 150 },
    ],
  },
];