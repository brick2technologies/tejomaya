const products = [
  {
    id: 1,
    name: "Idly Batter",
    description:
      "Soft, fluffy idlies made with naturally fermented batter using premium rice and urad dal.",
    image: "/idly-batter.png",
  },
  {
    id: 2,
    name: "Dosa Batter",
    description:
      "Perfectly fermented dosa batter for crispy dosas with authentic taste and texture.",
    image: "/dosa-batter.png",
  },
  {
    id: 3,
    name: "Idly Karam",
    description:
      "Traditional spicy idly karam prepared with aromatic spices and premium ingredients.",
    image: "/idly-karam.png",
  },
  {
    id: 4,
    name: "Dosa Karam",
    description:
      "Flavor-packed dosa karam that enhances every bite with a perfect balance of spice.",
    image: "/dosa-karam.png",
  },
  {
    id: 5,
    name: "Ragi Idly Batter",
    description:
      "Healthy ragi idly batter rich in fiber, perfect for nutritious and soft idlies.",
    image: "/ragi-idly-batter.png",
  },
  {
    id: 6,
    name: "Ragi Dosa Batter",
    description:
      "Wholesome ragi dosa batter offering a healthy twist with great taste and crispiness.",
    image: "/ragi-dosa-batter.png",
  },
];

export default function ProductsSection() {
  return (
    <section className="relative bg-transparent pb-20 px-6 sm:px-12">
      <div className="max-w-[1440px] mx-auto pb-28">
        {/* SECTION HEADER */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#f15c22] mb-4 merienda">
            Our Products
          </h2>

          <div className="h-1.5 w-24 bg-white/40 rounded-full mx-auto"></div>

          <p className="mt-6 text-orange-50 max-w-2xl mx-auto text-lg">
            Freshly prepared, naturally fermented batters and traditional karam
            crafted for taste, health, and convenience.
          </p>
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="
                group relative
                bg-white
                border border-white/30
                rounded-[2.5rem]
                p-8
                transition-all duration-500
                hover:shadow-2xl
                hover:-translate-y-2
              "
            >
              {/* PRODUCT IMAGE */}
              <div className="relative h-64 w-full mb-8 overflow-hidden rounded-2xl bg-white/70 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* PRODUCT CONTENT */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#f15c22] merienda">
                  {product.name}
                </h3>

                <p className="text-gray-700 leading-relaxed">
                  {product.description}
                </p>

                <button className="mt-4 flex items-center gap-2 font-semibold text-[#f15c22] transition-colors">
                  View Details
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* WHITE CURVED DIV */}
<div className="absolute bottom-0 left-0 w-full overflow-hidden z-30">
  <div className="w-full h-[60px] md:h-[80px] bg-white rounded-tl-[120px] rounded-tr-[120px]" />
</div>

    </section>
  );
}
