import { useState } from "react";
import { Menu, X, ArrowRight, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const PremiumSaasNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { cart } = useCart();

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-6 inset-x-0 z-50 flex justify-center px-4">
      <div className="relative w-full max-w-5xl">

        {/* NAVBAR */}
        <div className="flex items-center justify-between
          px-4 sm:px-6 py-3
          bg-white/70 backdrop-blur-2xl
          border border-black/10
          rounded-full shadow-lg shadow-black/5">

          {/* LOGO */}
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 pl-2"
          >
            <img src="/logo.png" alt="PureBatter" className="h-10 w-auto" />
          </button>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-2 bg-[#8cc540] rounded-full p-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => navigate(link.href)}
                className="px-5 py-2 rounded-full text-sm font-semibold font-food
                text-white transition-all duration-300
                hover:bg-[#f15c22] hover:text-[#8cc540]"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* DESKTOP ACTIONS */}
          <div className="hidden lg:flex items-center gap-3 pr-2">

            {/* CART */}
            <button
              onClick={() => navigate("/cart")}
              className="relative p-2 rounded-full bg-white text-[#f15c22] hover:bg-gray-100 transition"
            >
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1
                  h-5 min-w-[20px] px-1 rounded-full
                  bg-[#f15c22] text-white text-xs font-bold
                  flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* ORDER → PRODUCTS */}
            <button
              onClick={() => navigate("/products")}
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
              <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
            </button>
          </div>

          {/* MOBILE ACTIONS */}
          <div className="flex items-center gap-2 lg:hidden">

            {/* CART ICON */}
            <button
              onClick={() => navigate("/cart")}
              className="relative p-2 rounded-full bg-white text-[#f15c22]"
            >
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1
                  h-5 min-w-[20px] px-1 rounded-full
                  bg-[#f15c22] text-white text-xs font-bold
                  flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* MENU ICON */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full bg-[#f15c22] text-white"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* MOBILE DROPDOWN */}
        {isOpen && (
          <div className="mt-3 bg-white rounded-2xl shadow-xl border border-black/10 overflow-hidden lg:hidden">

            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  navigate(link.href);
                  setIsOpen(false);
                }}
                className="w-full text-left px-6 py-4
                text-gray-800 font-semibold
                hover:bg-gray-50 transition"
              >
                {link.name}
              </button>
            ))}

            {/* ORDER BUTTON */}
            <button
              onClick={() => {
                navigate("/products");
                setIsOpen(false);
              }}
              className="w-full py-4
              bg-[#f15c22] text-white font-semibold
              flex items-center justify-center gap-2"
            >
              Order Now
              <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default PremiumSaasNavbar;
