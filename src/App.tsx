import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import OrderPage from "./pages/OrderPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div className="relative min-h-[calc(100vh+380px)] bg-[radial-gradient(circle_at_top,rgba(140,197,64,0.25),rgba(241,92,34,0.18),white_70%)]">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/order" element={<OrderPage />} /> 
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
