import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { products, type ProductType, type Variant } from "../data/productsData"; // Ensure this path matches where you saved the data file

// Sub-component to manage variant state for each product
function ProductCard({ product }: { product: ProductType }) {
  const { addToCart, cart } = useCart();
  const navigate = useNavigate();

  // State to track selected quantity/price
  const [selectedVariant, setSelectedVariant] = useState<Variant>(product.variants[0]);

  // Find index to generate a unique numeric ID for the cart (fixes TS errors)
  const variantIndex = product.variants.findIndex(v => v.quantity === selectedVariant.quantity);
  const cartItemId = product.variants.length > 1 
    ? product.id + (variantIndex * 1000) 
    : product.id;

  const isInCart = cart.some((item: { id: number }) => item.id === cartItemId);

  return (
    <div
      className="
        group relative
        bg-white
        rounded-2xl sm:rounded-[2rem]
        p-4 sm:p-5
        border border-gray-200
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      {/* PRICE + QTY SELECTOR */}
      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex flex-col items-end gap-1 z-10">
        <span className="bg-[#8CC540] text-white text-xs sm:text-sm font-bold px-3 sm:px-4 py-0.5 sm:py-1 rounded-full shadow-sm">
          ₹{selectedVariant.price}
        </span>

        {product.variants.length > 1 ? (
          <select
            value={selectedVariant.quantity}
            onChange={(e) => {
              const newVariant = product.variants.find((v) => v.quantity === e.target.value);
              if (newVariant) setSelectedVariant(newVariant);
            }}
            className="bg-gray-100 border border-gray-200 text-gray-800 text-[10px] sm:text-xs font-semibold px-2 py-1 rounded-full cursor-pointer outline-none shadow-sm focus:border-[#f15c22] focus:ring-1 focus:ring-[#f15c22] transition-all"
          >
            {product.variants.map((v) => (
              <option key={v.quantity} value={v.quantity}>
                {v.quantity}
              </option>
            ))}
          </select>
        ) : (
          <span className="bg-gray-100 text-gray-800 text-[10px] sm:text-xs font-semibold px-2.5 sm:px-3 py-0.5 rounded-full shadow-sm">
            {selectedVariant.quantity}
          </span>
        )}
      </div>

      {/* IMAGE */}
      <div className="h-36 sm:h-44 w-full flex items-center justify-center mb-4 overflow-hidden rounded-xl bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="h-full object-contain p-3 sm:p-4 transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* CONTENT */}
      <h3 className="text-sm sm:text-xl font-bold text-[#f15c22] merienda">
        {product.name}
      </h3>

      <p className="text-gray-600 text-xs sm:text-sm mt-1.5 sm:mt-2 line-clamp-2">
        {product.desc}
      </p>

      {/* CTA BUTTONS */}
      <div className="mt-4 flex gap-2 sm:gap-3">
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
          className={`flex-1 rounded-full py-2 text-xs sm:text-sm font-semibold transition
            ${
              isInCart
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "border border-[#f15c22] text-[#f15c22] hover:bg-[#f15c22] hover:text-white"
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
                id: cartItemId,
                name: product.variants.length > 1 ? `${product.name} (${selectedVariant.quantity})` : product.name,
                price: selectedVariant.price,
                image: product.image,
              });
            }
            navigate("/cart");
          }}
          className="flex-1 rounded-full bg-[#f15c22] py-2 text-xs sm:text-sm font-semibold text-white hover:bg-[#d94f1e] transition"
        >
          Order Now
        </button>
      </div>
    </div>
  );
}

// Main Section Component
export default function ProductsSection() {
  return (
    <section className="relative bg-transparent pb-20 px-4 sm:px-8 lg:px-12">
      <div className="max-w-[1440px] mx-auto pb-24">

        {/* HEADER */}
        <div className="mb-10 sm:mb-14 text-center">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#f15c22] merienda">
            Our Products
          </h2>

          <div className="h-1 w-16 sm:w-24 bg-white/40 rounded-full mx-auto mt-3 sm:mt-4" />

          <p className="mt-3 sm:mt-5 text-orange-50 max-w-xl mx-auto text-xs sm:text-base">
            Fresh • Hygienic • Traditionally Prepared
          </p>
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* BOTTOM CURVE */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-30 pointer-events-none">
        <div className="w-full h-[50px] sm:h-[70px] bg-white rounded-tl-[120px] rounded-tr-[120px]" />
      </div>
    </section>
  );
}