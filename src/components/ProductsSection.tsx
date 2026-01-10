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
  return (
    <section className="relative bg-transparent pb-20 px-6 sm:px-12">
      <div className="max-w-[1440px] mx-auto pb-28">

        {/* HEADER */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#f15c22] merienda">
            Our Products
          </h2>
          <div className="h-1.5 w-24 bg-white/40 rounded-full mx-auto mt-4" />
          <p className="mt-5 text-orange-50 max-w-2xl mx-auto text-lg">
            Fresh • Hygienic • Traditionally Prepared
          </p>
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="
                group relative
                bg-white
                rounded-[2rem]
                p-5
                border border-gray-200
                transition-all duration-300
                hover:-translate-y-1.5
                hover:shadow-xl
              "
            >
              {/* PRICE + QTY */}
              <div className="absolute top-4 right-4 flex flex-col items-end gap-1">
                <span className="bg-[#8CC540] text-white text-sm font-bold px-4 py-1 rounded-full">
                  ₹{product.price}
                </span>
                <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-3 py-0.5 rounded-full">
                  {product.quantity}
                </span>
              </div>

              {/* IMAGE */}
              <div className="h-44 w-full flex items-center justify-center mb-4 overflow-hidden rounded-xl bg-gray-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full object-contain p-4 transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* CONTENT */}
              <h3 className="text-xl font-bold text-[#f15c22] merienda">
                {product.name}
              </h3>

              <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                {product.description}
              </p>

              {/* CTA */}
              <button className="mt-4 w-full rounded-full bg-[#f15c22] py-2 text-white font-semibold hover:bg-[#d94f1e] transition">
                Order Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* CURVE */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-30">
        <div className="w-full h-[60px] md:h-[80px] bg-white rounded-tl-[120px] rounded-tr-[120px]" />
      </div>
    </section>
  );
}
