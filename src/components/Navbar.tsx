import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const PremiumSaasNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Products", href: "/products" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav className="fixed top-6 inset-x-0 z-50 flex justify-center px-4">
            {/* FLOATING CONTAINER */}
            <div className="relative w-full max-w-5xl">
                <div className="flex items-center justify-between
          px-4 sm:px-6 py-3
          bg-white/70 backdrop-blur-2xl
          border border-black/10
          rounded-full shadow-lg shadow-black/5">

                    {/* LOGO */}
                    <a href="/" className="flex items-center gap-2 pl-2">
                        <img src="/logo.png" alt="PureBatter" className="h-10 w-auto" />
                    </a>

                    {/* DESKTOP CAPSULE NAV */}
                    <div className="hidden lg:flex items-center gap-2 bg-[#8cc540] rounded-full p-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="px-5 py-2 rounded-full text-sm font-semibold font-food
text-white transition-all duration-300
hover:bg-[#f15c22] hover:text-[#8cc540]
hover:shadow-sm"


                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* CTA → SOLID STYLE */}
                    <div className="hidden lg:flex items-center pr-2">
                        <a
                            href="#order"
                            className="group inline-flex items-center gap-2
      px-5 py-2.5 rounded-full
      text-sm font-semibold text-white
      bg-[#f15c22]
      shadow-md shadow-[#f15c22]/40
      hover:shadow-[#f15c22]/70
      transition-all duration-300
      hover:scale-[1.04]"
                        >
                            Order
                            <ArrowRight
                                size={16}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </a>
                    </div>


                    {/* MOBILE TOGGLE */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 rounded-full
              bg-[#f15c22] text-[#8cc540]
              hover:bg-black/10 hover:text-[#f15c22] transition font-food"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                {/* MOBILE MENU */}
                <div
                    className={`lg:hidden mt-4 transition-all duration-500 ease-out
    ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 pointer-events-none"}
  `}
                >
                    <div
                        className="relative overflow-hidden rounded-3xl shadow-2xl
      border border-black/10 bg-white/95 backdrop-blur-2xl px-6 py-7"
                    >
                        {/* SOFT FOOD GRADIENT ACCENT */}
                        <div
                            className="absolute inset-0 opacity-25"
                            style={{
                                background:
                                    "radial-gradient(circle at top, rgba(140,197,64,0.6) 0%, rgba(241,92,34,0.6) 100%)",
                            }}
                        />

                        <div className="relative space-y-4">
                            {/* NAV LINKS */}
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="group block text-center py-3.5 rounded-full font-food
            bg-white text-gray-800 font-semibold
            border border-black/10
            shadow-sm
            transition-all duration-300
            hover:shadow-md hover:scale-[1.02]"
                                >
                                    {link.name}
                                </a>
                            ))}

                            {/* DIVIDER */}
                            <div className="pt-2" />

                            {/* SOLID FOOD CTA */}
                            <a
                                href="#order"
                                onClick={() => setIsOpen(false)}
                                className="group flex items-center justify-center gap-2
          py-4 rounded-full font-semibold text-white
          bg-[radial-gradient(circle,rgba(140,197,64,1),rgba(241,92,34,1))]
          shadow-lg shadow-[#f15c22]/40
          transition-all duration-300
          hover:shadow-[#f15c22]/60 hover:scale-[1.03]"
                            >
                                Order Now
                                <ArrowRight
                                    size={18}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default PremiumSaasNavbar;
