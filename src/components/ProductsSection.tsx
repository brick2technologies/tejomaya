import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Idly Batter",
    description: "Soft, fluffy idlies with natural fermentation.",
    image: "/idly-batter.png",
    price: 99,
    quantity: "1 KG",
  },
  {
    id: 2,
    name: "Dosa Batter",
    description: "Perfect batter for crispy golden dosas.",
    image: "/dosa-batter.png",
    price: 99,
    quantity: "1 KG",
  },
  {
    id: 3,
    name: "Idly Karam",
    description: "Traditional spicy Andhra idly karam.",
    image: "/idly-karam.png",
    price: 99,
    quantity: "1 KG",
  },
  {
    id: 4,
    name: "Dosa Karam",
    description: "Flavor-packed dosa karam blend.",
    image: "/dosa-karam.png",
    price: 99,
    quantity: "1 KG",
  },
  {
    id: 5,
    name: "Ragi Idly Batter",
    description: "Healthy fiber-rich ragi idly batter.",
    image: "/ragi-idly-batter.png",
    price: 99,
    quantity: "1 KG",
  },
  {
    id: 6,
    name: "Ragi Dosa Batter",
    description: "Nutritious ragi dosa batter with great taste.",
    image: "/ragi-dosa-batter.png",
    price: 99,
    quantity: "1 KG",
  },
];

export default function ProductsSection() {
  const { addToCart, cart } = useCart();
  const navigate = useNavigate();

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
          {products.map((product) => {
            const isInCart = cart.some(
              (item) => item.id === product.id
            );

            return (
              <div
                key={product.id}
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
                {/* PRICE + QTY */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex flex-col items-end gap-1">
                  <span className="bg-[#8CC540] text-white text-xs sm:text-sm font-bold px-3 sm:px-4 py-0.5 sm:py-1 rounded-full">
                    ₹{product.price}
                  </span>
                  <span className="bg-gray-100 text-gray-800 text-[10px] sm:text-xs font-semibold px-2.5 sm:px-3 py-0.5 rounded-full">
                    {product.quantity}
                  </span>
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
                  {product.description}
                </p>

                {/* CTA */}
                <div className="mt-4 flex gap-2 sm:gap-3">
                  {/* ADD TO CART / ADDED */}
                  <button
                    disabled={isInCart}
                    onClick={() =>
                      addToCart({
                        id: product.id,
                        name: product.name,
                        price: product.price,
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
                          id: product.id,
                          name: product.name,
                          price: product.price,
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
          })}
        </div>
      </div>

      {/* CURVE */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-30">
        <div className="w-full h-[50px] sm:h-[70px] bg-white rounded-tl-[120px] rounded-tr-[120px]" />
      </div>
    </section>
  );
}
