import CategoriesSection from "../components/CategorySection";
import HeroImageSlider from "../components/HeroSection";
import OurProcessSection from "../components/OurProcess";
import ProductsSection from "../components/ProductsSection";

export default function HomePage() {
  return (
    <div className="relative min-h-screen z-10 ">

      {/* GLOBAL RADIAL BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(140,197,64,0.25)_0%,rgba(241,92,34,0.18)_35%,white_70%)]" />

      {/* PAGE CONTENT */}
      <main className="relative z-10">
        <HeroImageSlider />
        <CategoriesSection />
        <ProductsSection />
        <OurProcessSection />
      </main>

    </div>
  );
}
