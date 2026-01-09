import { motion } from "framer-motion";

const categories = [
  {
    title: "Idly Batter",
    image: "/idly.svg",
  },
  {
    title: "Dosa Batter",
    image: "/dosa.svg",
  },
  {
    title: "Idly/Dosa Karam",
    image: "/karam.png",
  },
];

export default function CategoriesSection() {
  return (
    <section className="relative py-20 pb-20 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 pb-10">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-[#f15c22] merienda">
            Our Categories
          </h2>
          <p className="mt-4 text-white/80">
            Fresh • Hygienic • Traditional Taste
          </p>
        </div>

        {/* Circular Cards */}
        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-10 place-items-center">
          {categories.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center"
            >
              {/* Circle */}
              <div className="w-20 h-20 md:w-56 md:h-56 rounded-full bg-white shadow-xl overflow-hidden flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Title */}
              <h3 className="mt-6 text-sm md:text-lg font-semibold text-[#f15c22] text-center">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>

     
      {/* GREEN CURVED DIV */}
{/* <div className="absolute bottom-0 left-0 w-full overflow-hidden">
  <div className="w-full h-[50px] md:h-[90px] bg-[#f15c22] rounded-tl-[90px] rounded-tr-[90px]" />
</div> */}

    </section>
  );
}
