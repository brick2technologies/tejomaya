import { useCart } from "../context/CartContext";

export default function OrderPage() {
  const { cart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const whatsappMessage = () => {
    let message = "🛒 *Tejomaya Foods Order*\n\n";

    cart.forEach((item, i) => {
      message += `${i + 1}. ${item.name}\n`;
      message += `Qty: ${item.quantity} KG\n`;
      message += `Price: ₹${item.price * item.quantity}\n\n`;
    });

    message += `💰 *Total Amount: ₹${total}*\n\nPlease confirm my order.`;

    return encodeURIComponent(message);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Your Cart</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-4">
              {cart.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between bg-white p-4 rounded-lg shadow"
                >
                  <div>
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-sm text-gray-600">
                      Qty: {item.quantity} KG
                    </p>
                  </div>
                  <span className="font-bold">
                    ₹{item.price * item.quantity}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-between items-center">
              <h3 className="text-xl font-bold">Total: ₹{total}</h3>

              <a
                href={`https://wa.me/91XXXXXXXXXX?text=${whatsappMessage()}`}
                target="_blank"
                className="bg-[#25D366] text-white px-6 py-3 rounded-full font-semibold"
              >
                Place Order on WhatsApp
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
