import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <section className="relative py-28 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#f15c22]">
            Contact Tejomaya Foods
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We’d love to hear from you! Reach out for orders, feedback, or
            partnership opportunities.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-8 space-y-6"
          >
            <h2 className="text-2xl font-bold text-gray-900">
              Get in Touch
            </h2>

            <div className="space-y-4 text-gray-700">
              <p>
                📍 <strong>Location:</strong> Hyderabad, India
              </p>
              <p>
                📞 <strong>Phone:</strong>{" "}
                <a
                  href="tel:+919999999999"
                  className="text-[#f15c22] font-medium"
                >
                  +91 99999 99999
                </a>
              </p>
              <p>
                💬 <strong>WhatsApp:</strong>{" "}
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  className="text-[#25D366] font-medium"
                >
                  Chat on WhatsApp
                </a>
              </p>
              <p>
                📧 <strong>Email:</strong>{" "}
                <a
                  href="mailto:tejomayafoods@gmail.com"
                  className="text-[#f15c22] font-medium"
                >
                  tejomayafoods@gmail.com
                </a>
              </p>
            </div>

            <div className="pt-4">
              <p className="text-sm text-gray-500">
                ⏰ Orders accepted daily from <strong>6 AM – 8 PM</strong>
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-8 space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you! We will contact you shortly.");
            }}
          >
            <h2 className="text-2xl font-bold text-[#F15c22]">
              Send Us a Message
            </h2>

            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8CC540]"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8CC540]"
            />

            <textarea
              placeholder="Your Message"
              rows={4}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8CC540]"
            />

            <button
              type="submit"
              className="w-full bg-[#f15c22] text-white py-3 rounded-full font-semibold hover:bg-[#d94f1e] transition"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>

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
    </section>
  );
}
