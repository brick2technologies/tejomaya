import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 0.7, 1], [200, 200, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.7, 0.85, 1], [0, 0, 0.6, 1]);

  return (
    <footer
      ref={footerRef}
      className="relative bg-[#8cc540] text-white overflow-hidden"
    >
      <motion.div
        style={{ y, opacity }}
        className="max-w-7xl mx-auto px-6 pt-12 pb-10"
      >
        {/* LINKS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 text-center sm:text-left mb-12">
          
          {/* PRODUCTS */}
          <div>
            <h4 className="text-lg font-semibold mb-4 merienda">Products</h4>
            <ul className="space-y-2 text-white/90">
              <li>
                <Link to="/products#idly-batter" className="hover:underline">
                  Idly Batter
                </Link>
              </li>
              <li>
                <Link to="/products#dosa-batter" className="hover:underline">
                  Dosa Batter
                </Link>
              </li>
              <li>
                <Link to="/products#idly-dosa-karam" className="hover:underline">
                  Idly / Dosa Karam
                </Link>
              </li>
            </ul>
          </div>

          {/* PAGES */}
          <div>
            <h4 className="text-lg font-semibold mb-4 merienda">Pages</h4>
            <ul className="space-y-2 text-white/90">
              <li>
                <Link to="/" className="hover:underline">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">Our Process</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">Contact</Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-lg font-semibold mb-4 merienda">Contact</h4>
            <ul className="space-y-2 text-white/90">
              <li>📞 +91 XXXXX XXXXX</li>
              <li>📧 tejomayafoods@gmail.com</li>
              <li>📍 Andhra Pradesh, India</li>
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
