import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Idly Batter",
    desc: "Soft & fluffy idlies made with naturally fermented batter",
    image: "/products/idly-batter.jpg",
    price: 99,
    quantity: "1 KG",
  },
  {
    id: 2,
    name: "Dosa Batter",
    desc: "Perfectly fermented batter for crispy golden dosas",
    image: "/products/dosa-batter.jpg",
    price: 99,
    quantity: "1 KG",
  },
  {
    id: 3,
    name: "Idly Karam",
    desc: "Traditional spicy karam specially prepared for idly",
    image: "/products/idly-karam.jpg",
    price: 99,
    quantity: "1 KG",
  },
  {
    id: 4,
    name: "Dosa Karam",
    desc: "Flavor-rich karam crafted to enhance crispy dosas",
    image: "/products/dosa-karam.jpg",
    price: 99,
    quantity: "1 KG",
  },
];

export default function ProductsPage() {
  const navigate = useNavigate();
  const { addToCart, cart } = useCart();

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
              Fresh Products @ ₹99
            </h2>
            <p className="mt-3 text-xs sm:text-sm lg:text-base text-gray-600">
              Hygienic • Fresh • Traditionally Prepared
            </p>
          </motion.div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {products.map((product, i) => {
              const isInCart = cart.some(
                (item) => item.id === product.id
              );

              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group relative bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-3 sm:p-5 flex flex-col"
                >
                  {/* Price + Quantity */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex flex-col items-end gap-1 z-10">
                    <span className="bg-[#F15C22] text-white text-xs sm:text-sm font-bold px-2.5 sm:px-3 py-0.5 rounded-full">
                      ₹{product.price}
                    </span>
                    <span className="bg-gray-100 text-gray-700 text-[10px] sm:text-xs font-semibold px-2.5 sm:px-3 py-0.5 rounded-full">
                      {product.quantity}
                    </span>
                  </div>

                  {/* Image */}
                  <div className="h-28 sm:h-40 lg:h-44 w-full rounded-lg sm:rounded-xl overflow-hidden bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
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

                  {/* CTA */}
                  <div className="mt-4 sm:mt-6 flex gap-2 sm:gap-3">
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
                      className={`flex-1 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition
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
                            id: product.id,
                            name: product.name,
                            price: product.price,
                            image: product.image,
                          });
                        }
                        navigate("/cart");
                      }}
                      className="flex-1 py-2 sm:py-2.5 rounded-full bg-[#8CC540] text-white text-xs sm:text-sm font-semibold hover:bg-[#76ab34] transition"
                    >
                      Order Now
                    </button>
                  </div>
                </motion.div>
              );
            })}
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
