import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import { ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CartPage() {

    const handleWhatsAppOrder = () => {
  if (cart.length === 0) return;

  let message = "🛒 *New Order*%0A%0A";
  let totalAmount = 0;

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.qty;
    totalAmount += itemTotal;

    message += `${index + 1}. ${item.name}%0A`;
    message += `Qty: ${item.qty}%0A`;
    message += `Price: ₹${item.price}%0A`;
    message += `Total: ₹${itemTotal}%0A%0A`;
  });

  message += `🧾 *Grand Total: ₹${totalAmount}*`;

  const phoneNumber = "918688277183"; // 🔴 replace with your WhatsApp number
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  window.open(whatsappUrl, "_blank");
};

  const { cart, increaseQty, decreaseQty } = useCart();
  const navigate = useNavigate();

  /* ---------------- EMPTY CART ---------------- */
  if (cart.length === 0) {
    return (
      <section className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-md p-8 w-full max-w-sm text-center"
        >
          <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[#8CC540]/10 flex items-center justify-center">
            <ShoppingBag className="w-8 h-8 text-[#8CC540]" />
          </div>

          <h2 className="text-xl font-semibold text-gray-800">
            Your cart is empty
          </h2>

          <p className="mt-2 text-sm text-gray-600 leading-relaxed">
            Add fresh products to your cart and place your order easily.
          </p>

          <button
            onClick={() => navigate("/")}
            className="mt-6 w-full py-3 rounded-full bg-[#8CC540] text-white text-sm font-semibold hover:bg-[#76ab34] transition"
          >
            Browse Products
          </button>
        </motion.div>
      </section>
    );
  }

  /* ---------------- TOTAL ---------------- */
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  /* ---------------- CART ---------------- */
  return (
    <section className=" relative min-h-screen bg-gray-50 pt-20 pb-24">
      <div className="max-w-md mx-auto px-4">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-semibold text-[#F15C22] mb-6 text-center"
        >
          Your Cart
        </motion.h2>

        {/* Cart Items */}
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-sm p-4 flex gap-4 items-center"
            >
              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-xl object-cover bg-gray-100"
              />

              {/* DETAILS */}
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-gray-800 leading-tight">
                  {item.name}
                </h4>

                <p className="text-xs text-gray-500 mt-0.5">
                  ₹{item.price} each
                </p>

                {/* QTY CONTROLS */}
                <div className="flex items-center gap-3 mt-3">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="w-8 h-8 rounded-full bg-gray-200 text-base font-bold flex items-center justify-center active:scale-95"
                  >
                    −
                  </button>

                  <span className="text-sm font-semibold min-w-[20px] text-center">
                    {item.qty}
                  </span>

                  <button
                    onClick={() => increaseQty(item.id)}
                    className="w-8 h-8 rounded-full bg-[#8CC540] text-white text-base font-bold flex items-center justify-center active:scale-95"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* PRICE */}
              <div className="text-sm font-semibold text-gray-800">
                ₹{item.price * item.qty}
              </div>
            </div>
          ))}
        </div>

        {/* SUMMARY */}
        <div className="mt-8 bg-white rounded-2xl shadow-md p-5">
          <div className="flex justify-between text-base font-semibold">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          <button
          onClick={handleWhatsAppOrder}
            className="mt-5 w-full py-3 rounded-full bg-[#8CC540] text-white text-sm font-semibold hover:bg-[#76ab34] transition"
          >
            Proceed to Order
          </button>
        </div>
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
      </div>
      
    </section>
  );
}
