import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { products, type ProductType, type Variant } from "../data/productsData";

function ProductCard({ product }: { product: ProductType }) {
  const { addToCart, cart } = useCart();
  const navigate = useNavigate();

  // Find "250 GM" if it exists, otherwise fallback to the first variant
  const defaultVariant = 
    product.variants.find((v) => v.quantity === "250 GM") || product.variants[0];

  const [selectedVariant, setSelectedVariant] = useState<Variant>(defaultVariant);

  const variantIndex = product.variants.findIndex(v => v.quantity === selectedVariant.quantity);
  const cartItemId = product.variants.length > 1 
    ? product.id + (variantIndex * 1000) 
    : product.id;

  const isInCart = cart.some((item: { id: number }) => item.id === cartItemId);

  return (
    <div
      className="
        group relative flex flex-col h-full
        bg-white
        rounded-[24px]
        p-3 sm:p-4
        border border-gray-100
        transition-all duration-400 ease-out
        hover:-translate-y-1.5
        hover:shadow-[0_12px_30px_-10px_rgba(241,92,34,0.15)]
        hover:border-[#f15c22]/20
      "
    >
      {/* IMAGE CONTAINER */}
      <div className="relative h-40 sm:h-48 w-full rounded-[18px] bg-[#faf9f7] flex items-center justify-center overflow-hidden mb-4">
        {/* PRICE BADGE (Glassmorphism style) */}
        <div className="absolute top-3 right-3 z-10 bg-white/80 backdrop-blur-md border border-white text-gray-800 text-xs sm:text-sm font-extrabold px-3 py-1.5 rounded-full shadow-sm">
          <span className="text-[#8CC540]">₹</span>{selectedVariant.price}
        </div>

        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover sm:object-contain p-2 transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* CONTENT */}
      <div className="flex flex-col flex-grow px-1">
        <div className="flex justify-between items-start gap-2 mb-2">
          <h3 className="text-base sm:text-xl font-bold text-gray-800 merienda leading-tight">
            {product.name}
          </h3>

          {/* VARIANT SELECTOR */}
          {product.variants.length > 1 ? (
            <div className="relative shrink-0">
              <select
                value={selectedVariant.quantity}
                onChange={(e) => {
                  const newVariant = product.variants.find((v) => v.quantity === e.target.value);
                  if (newVariant) setSelectedVariant(newVariant);
                }}
                className="appearance-none bg-gray-50 border border-gray-200 text-gray-700 text-[10px] sm:text-xs font-bold px-3 py-1.5 pr-6 rounded-full cursor-pointer outline-none focus:border-[#f15c22] focus:ring-1 focus:ring-[#f15c22] transition-all"
              >
                {product.variants.map((v) => (
                  <option key={v.quantity} value={v.quantity}>
                    {v.quantity}
                  </option>
                ))}
              </select>
              {/* Custom Dropdown Arrow */}
              <div className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-2.5 h-2.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          ) : (
            <span className="shrink-0 bg-gray-50 text-gray-500 border border-gray-100 text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-full">
              {selectedVariant.quantity}
            </span>
          )}
        </div>

        <p className="text-gray-500 text-xs sm:text-sm line-clamp-2 mb-4 leading-relaxed">
          {product.desc}
        </p>

        {/* CTA BUTTONS (Pushed to bottom) */}
        <div className="mt-auto flex gap-2 sm:gap-3">
          {/* ADD TO CART */}
          <button
            disabled={isInCart}
            onClick={() =>
              addToCart({
                id: cartItemId,
                name: product.variants.length > 1 ? `${product.name} (${selectedVariant.quantity})` : product.name,
                price: selectedVariant.price,
                image: product.image,
              })
            }
            className={`flex-1 rounded-full py-2.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300
              ${
                isInCart
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white border-2 border-gray-100 text-gray-700 hover:border-[#f15c22] hover:text-[#f15c22]"
              }
            `}
          >
            {isInCart ? "In Cart ✓" : "Add to Cart"}
          </button>

          {/* ORDER NOW */}
          <button
            onClick={() => {
              if (!isInCart) {
                addToCart({
                  id: cartItemId,
                  name: product.variants.length > 1 ? `${product.name} (${selectedVariant.quantity})` : product.name,
                  price: selectedVariant.price,
                  image: product.image,
                });
              }
              navigate("/cart");
            }}
            className="flex-1 rounded-full bg-[#f15c22] py-2.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white hover:bg-[#e04f1a] hover:shadow-[0_4px_12px_rgba(241,92,34,0.3)] transition-all duration-300"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}

// Reusable Section Component for Categories
function CategorySection({ 
  title, 
  items, 
  viewAllPath 
}: { 
  title: string; 
  items: ProductType[]; 
  viewAllPath: string;
}) {
  const navigate = useNavigate();
  
  // Only show max 4 products
  const displayItems = items.slice(0, 4);

  if (displayItems.length === 0) return null;

  return (
    <div className="mb-16 sm:mb-24">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-10 gap-4">
        <div className="flex items-center gap-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 merienda tracking-tight">
            {title}
          </h3>
          <div className="hidden sm:block h-[2px] w-12 sm:w-24 bg-gradient-to-r from-[#f15c22] to-transparent rounded-full" />
        </div>
        
        {items.length > 4 && (
          <button
            onClick={() => navigate(viewAllPath)}
            className="text-xs sm:text-sm font-bold text-gray-600 bg-white border border-gray-200 rounded-full px-6 py-2.5 hover:border-[#f15c22] hover:text-[#f15c22] hover:shadow-sm transition-all"
          >
            View All {title.split(' ')[0]} →
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
        {displayItems.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

// Main Section Component
export default function ProductsSection() {
  const normalProducts = products.filter(p => p.category === 'normal');
  const ragiProducts = products.filter(p => p.category === 'ragi');
  const snacksProducts = products.filter(p => p.category === 'snacks');

  return (
    <section className="relative bg-[#fcfbf9] py-20 px-4 sm:px-8 lg:px-12">
      <div className="max-w-[1440px] mx-auto pb-12">

        {/* HEADER */}
        <div className="mb-16 sm:mb-20 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#f15c22] merienda tracking-tight">
            Our Menu
          </h2>

          <div className="h-1.5 w-20 sm:w-28 bg-[#8CC540] rounded-full mx-auto mt-4 sm:mt-5 opacity-80" />

          <p className="mt-4 sm:mt-6 text-gray-500 font-medium max-w-xl mx-auto text-sm sm:text-base tracking-wide">
            Fresh • Hygienic • Traditionally Prepared
          </p>
        </div>

        {/* SECTIONS */}
        <CategorySection 
          title="Daily Essentials" 
          items={normalProducts} 
          viewAllPath="/products?category=normal" 
        />
        
        <CategorySection 
          title="Healthy Ragi Products" 
          items={ragiProducts} 
          viewAllPath="/products?category=ragi" 
        />
        
        <CategorySection 
          title="Delicious Snacks" 
          items={snacksProducts} 
          viewAllPath="/products?category=snacks" 
        />
      </div>

      {/* BOTTOM CURVE */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-30 pointer-events-none">
        <div className="w-full h-[50px] sm:h-[70px] bg-white rounded-tl-[120px] rounded-tr-[120px]" />
      </div>
    </section>
  );
}