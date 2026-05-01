// src/pages/ProductsPage.tsx

import { useState } from "react";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

// Import your data and types (Adjust the path if necessary)
import { products, type ProductType, type Variant } from "../data/productsData";

interface ProductCardProps {
  product: ProductType;
  index: number;
}

// Reusable Product Card Component to handle variant selection state
function ProductCard({ product, index }: ProductCardProps) {
  const { addToCart, cart } = useCart();
  const navigate = useNavigate();
  
  const [selectedVariant, setSelectedVariant] = useState<Variant>(product.variants[0]);

  // Find the index of the selected variant
  const variantIndex = product.variants.findIndex(v => v.quantity === selectedVariant.quantity);

  // Generate a unique NUMERIC ID so cart can differentiate sizes, satisfying CartContext
  // e.g., Base ID: 5.  1st size: 5.  2nd size: 1005.  3rd size: 2005.
  const cartItemId = product.variants.length > 1 
    ? product.id + (variantIndex * 1000) 
    : product.id;

  // Replaced 'any' with an explicit inline type to satisfy ESLint
  const isInCart = cart.some((item: { id: number }) => item.id === cartItemId);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 4) * 0.08 }}
      className="group relative bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-3 sm:p-5 flex flex-col"
    >
      {/* Price + Quantity Selector */}
      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex flex-col items-end gap-1 z-10">
        <span className="bg-[#F15C22] text-white text-xs sm:text-sm font-bold px-2.5 sm:px-3 py-0.5 rounded-full shadow-sm">
          ₹{selectedVariant.price}
        </span>
        
        {product.variants.length > 1 ? (
          <select
            value={selectedVariant.quantity}
            onChange={(e) => {
              const newVariant = product.variants.find((v) => v.quantity === e.target.value);
              if (newVariant) setSelectedVariant(newVariant);
            }}
            className="bg-white/90 backdrop-blur border border-gray-200 text-gray-800 text-[10px] sm:text-xs font-semibold px-2 py-1 rounded-full cursor-pointer outline-none shadow-sm focus:border-[#F15C22] focus:ring-1 focus:ring-[#F15C22] transition-all"
          >
            {product.variants.map((v) => (
              <option key={v.quantity} value={v.quantity}>
                {v.quantity}
              </option>
            ))}
          </select>
        ) : (
          <span className="bg-gray-100 text-gray-700 text-[10px] sm:text-xs font-semibold px-2.5 sm:px-3 py-0.5 rounded-full shadow-sm">
            {selectedVariant.quantity}
          </span>
        )}
      </div>

      {/* Image */}
      <div className="h-28 sm:h-40 lg:h-44 w-full rounded-lg sm:rounded-xl overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="mt-4 flex-1">
        <h3 className="text-sm sm:text-lg font-semibold text-gray-900">
          {product.name}
        </h3>
        <p className="mt-1.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
          {product.desc}
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="mt-4 sm:mt-6 flex gap-2 sm:gap-3">
        {/* ADD TO CART */}
        <button
          disabled={isInCart}
          onClick={() =>
            addToCart({
              id: cartItemId, // Guaranteed to be a number now
              name: product.variants.length > 1 ? `${product.name} (${selectedVariant.quantity})` : product.name,
              price: selectedVariant.price,
              image: product.image,
            })
          }
          className={`flex-1 py-2 sm:py-2.5 rounded-full text-[10px] sm:text-xs md:text-sm font-semibold transition
            ${
              isInCart
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "border border-[#8CC540] text-[#8CC540] hover:bg-[#8CC540] hover:text-white"
            }
          `}
        >
          {isInCart ? "Added ✓" : "Add to Cart"}
        </button>

        {/* ORDER NOW */}
        <button
          onClick={() => {
            if (!isInCart) {
              addToCart({
                id: cartItemId, // Guaranteed to be a number now
                name: product.variants.length > 1 ? `${product.name} (${selectedVariant.quantity})` : product.name,
                price: selectedVariant.price,
                image: product.image,
              });
            }
            navigate("/cart");
          }}
          className="flex-1 py-2 sm:py-2.5 rounded-full bg-[#8CC540] text-white text-[10px] sm:text-xs md:text-sm font-semibold hover:bg-[#76ab34] transition"
        >
          Order Now
        </button>
      </div>
    </motion.div>
  );
}

export default function ProductsPage() {
  return (
    <section className="relative bg-gray-50 overflow-hidden pt-16 sm:pt-20 pb-10">
      <div className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-14"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-[#F15C22]">
              Fresh Products & Authentic Snacks
            </h2>
            <p className="mt-3 text-xs sm:text-sm lg:text-base text-gray-600">
              Hygienic • Fresh • Traditionally Prepared
            </p>
          </motion.div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {products.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* GREEN CURVED EDGE */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none translate-y-1">
        <svg
          viewBox="0 0 1440 120"
          className="block w-full h-[80px] sm:h-[90px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C240,120 480,120 720,120 960,120 1200,120 1440,0 L1440,120 L0,120 Z"
            fill="#8CC540"
          />
        </svg>
      </div>
    </section>
  );
}