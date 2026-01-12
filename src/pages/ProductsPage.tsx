import { motion } from "framer-motion";

const products = [
  {
    name: "Idly Batter",
    desc: "Soft & fluffy idlies made with naturally fermented batter",
    image: "/products/idly-batter.jpg",
    price: 99,
    quantity: "1 KG",
  },
  {
    name: "Dosa Batter",
    desc: "Perfectly fermented batter for crispy golden dosas",
    image: "/products/dosa-batter.jpg",
    price: 99,
    quantity: "1 KG",
  },
  {
    name: "Idly Karam",
    desc: "Traditional spicy karam specially prepared for idly",
    image: "/products/idly-karam.jpg",
    price: 99,
    quantity: "1 KG",
  },
  {
    name: "Dosa Karam",
    desc: "Flavor-rich karam crafted to enhance crispy dosas",
    image: "/products/dosa-karam.jpg",
    price: 99,
    quantity: "1 KG",
  },
];

export default function ProductsPage() {
  return (
    <section className="relative bg-gray-50 overflow-hidden pt-20 pb-10">
      {/* CONTENT */}
      <div className="py-20 sm:py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F15C22]">
              Fresh Products @ ₹99
            </h2>
            <p className="mt-4 text-gray-600 text-sm sm:text-base">
              Hygienic • Fresh • Traditionally Prepared
            </p>
          </motion.div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {products.map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-5 flex flex-col"
              >
                {/* Price + Quantity */}
                <div className="absolute top-4 right-4 flex flex-col items-end gap-1 z-10">
                  <span className="bg-[#F15C22] text-white text-sm font-bold px-3 py-0.5 rounded-full">
                    ₹{product.price}
                  </span>
                  <span className="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-0.5 rounded-full">
                    {product.quantity}
                  </span>
                </div>

                {/* Image */}
                <div className="h-40 sm:h-44 w-full rounded-xl overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="mt-5 flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    {product.desc}
                  </p>
                </div>

                {/* CTA */}
                <button className="mt-6 w-full py-2.5 rounded-full bg-[#8CC540] text-white font-semibold hover:bg-[#76ab34] transition">
                  Order Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* GREEN CURVED EDGE */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none translate-y-1">
        <svg
          viewBox="0 0 1440 120"
          className="block w-full h-[90px]"
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
