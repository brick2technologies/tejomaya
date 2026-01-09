import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();

  // Fully hidden at start, reveal only at end
  const y = useTransform(scrollYProgress, [0, 0.7, 1], [200, 200, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.7, 0.85, 1], [0, 0, 0.6, 1]);

  return (
    <footer
      ref={footerRef}
      className="sticky bottom-0 bg-[#8cc540] text-white overflow-hidden"
    >
      <motion.div
        style={{ y, opacity }}
        className="max-w-7xl mx-auto px-6 pt-12 pb-10"
      >
        {/* LINKS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 text-center sm:text-left mb-12">
          <div>
            <h4 className="text-lg font-semibold mb-4 merienda">Products</h4>
            <ul className="space-y-2 text-white/90">
              <li>Idly Batter</li>
              <li>Dosa Batter</li>
              <li>Idly / Dosa Karam</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 merienda">Pages</h4>
            <ul className="space-y-2 text-white/90">
              <li>Home</li>
              <li>Our Process</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 merienda">Contact</h4>
            <ul className="space-y-2 text-white/90">
              <li>📞 +91 XXXXX XXXXX</li>
              <li>📧 your@email.com</li>
              <li>📍 Your City, India</li>
            </ul>
          </div>
        </div>

        {/* LOGO */}
        <div className="bg-white p-2 rounded-full mb-8">
          <div className="w-full h-40 flex justify-center items-center">
            <img
              src="/logo.png"
              alt="Tejomaya Logo"
              className="h-24 md:h-36 object-contain"
            />
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="text-center text-sm text-white/80">
          Designed by{" "}
          <a
            href="https://brick2tech.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white transition"
          >
            Brick2Tech
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
