import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <main className="relative bg-white text-gray-800">

      {/* HERO */}
      <section className="py-28 px-6 text-center bg-[#f6fbf3]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#8CC540]">
            About Tejomaya Foods
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600">
            Fresh, hygienic, and traditionally prepared South Indian tiffin
            essentials — made naturally.
          </p>

          {/* Accent */}
          <div className="mt-8 h-1 w-24 mx-auto rounded-full bg-[#8CC540]" />
        </motion.div>
      </section>

      {/* STORY */}
      <section className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#8CC540]">
              Our Story
            </h2>

            <p className="mt-6 text-gray-700 leading-relaxed">
              Tejomaya Foods was born from a simple belief — food should be
              <span className="font-semibold text-gray-900">
                {" "}
                pure, natural, and honest
              </span>.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              We specialize in South Indian tiffin essentials that deliver
              homemade taste at scale, without compromising hygiene or
              consistency.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Every idly, dosa, and karam is prepared using
              <span className="font-semibold text-gray-900">
                {" "}
                premium ingredients
              </span>,
              natural fermentation, and traditional methods.
            </p>
          </div>

          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            src="/about-tiffin.jpg"
            alt="South Indian tiffin food"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </motion.div>
      </section>

      {/* OFFERINGS */}
      <section className="py-24 px-6 bg-[#f6fbf3]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#8CC540]">
            What We Offer
          </h2>
          <p className="mt-4 text-gray-600">
            Freshly prepared products focused on quality and consistency.
          </p>

          <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              {
                title: "Idly Batter",
                desc: "Naturally fermented batter for soft, fluffy idlies.",
              },
              {
                title: "Dosa Batter",
                desc: "Perfectly balanced batter for crispy golden dosas.",
              },
              {
                title: "Idly / Dosa Karam",
                desc: "Traditional spice blend made with care and authenticity.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-xl bg-white border border-green-100 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-[#8CC540]">
                  {item.title}
                </h3>
                <p className="mt-4 text-gray-600">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* QUALITY */}
      <section className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#8CC540]">
            Our Commitment to Quality
          </h2>

          <div className="mt-16 grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Hygienic Preparation",
                desc: "Strict cleanliness and food safety standards.",
              },
              {
                title: "Natural Ingredients",
                desc: "No preservatives, only fresh premium raw materials.",
              },
              {
                title: "Daily Fresh Supply",
                desc: "Prepared fresh every day for best taste.",
              },
            ].map((q, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-xl bg-white shadow-md border border-green-100"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  {q.title}
                </h3>
                <p className="mt-4 text-gray-600">
                  {q.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#f6fbf3] text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#8CC540]">
            Ready to Order Fresh Batter?
          </h2>
          <p className="mt-4 text-gray-600">
            Experience freshness, hygiene, and authentic taste every day.
          </p>

          <button className="mt-8 px-10 py-4 rounded-full bg-[#8CC540] text-white font-semibold hover:bg-[#76ab34] transition">
            Order Now
          </button>
        </motion.div>
      </section>
{/* Green Curved Edge */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none">
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
    </main>
  );
};

export default AboutPage;
