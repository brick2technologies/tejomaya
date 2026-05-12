import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { products, type ProductType, type Variant } from "../data/productsData";

interface ProductCardProps {
  product: ProductType;
  index: number;
}

type CategoryType = 'all' | 'normal' | 'ragi' | 'snacks';
type SortOrderType = 'default' | 'lowToHigh' | 'highToLow';

const ITEMS_PER_PAGE = 8; // Change this number to show more/less items per page

// ----------------------------------------------------------------------
// 1. REUSABLE PRODUCT CARD COMPONENT
// ----------------------------------------------------------------------
function ProductCard({ product, index }: ProductCardProps) {
  const { addToCart, cart } = useCart();
  const navigate = useNavigate();
  
  const defaultVariant = 
    product.variants.find((v) => v.quantity === "250 GM") || product.variants[0];

  const [selectedVariant, setSelectedVariant] = useState<Variant>(defaultVariant);

  const variantIndex = product.variants.findIndex(v => v.quantity === selectedVariant.quantity);
  const cartItemId = product.variants.length > 1 
    ? product.id + (variantIndex * 1000) 
    : product.id;

  const isInCart = cart.some((item: { id: number }) => item.id === cartItemId);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, delay: (index % ITEMS_PER_PAGE) * 0.05 }}
      className="
        group relative flex flex-col h-full
        bg-white
        rounded-[20px] sm:rounded-[24px]
        p-2.5 sm:p-4
        border border-gray-100
        transition-shadow duration-400 ease-out
        hover:shadow-[0_12px_30px_-10px_rgba(241,92,34,0.15)]
        hover:border-[#f15c22]/20
      "
    >
      <div className="relative h-32 sm:h-48 w-full rounded-[14px] sm:rounded-[18px] bg-[#faf9f7] flex items-center justify-center overflow-hidden mb-3 sm:mb-4">
        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10 bg-white/80 backdrop-blur-md border border-white text-gray-800 text-[10px] sm:text-sm font-extrabold px-2 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-sm">
          <span className="text-[#8CC540]">₹</span>{selectedVariant.price}
        </div>

        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover sm:object-contain p-2 transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col flex-grow px-1">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-2">
          <h3 className="text-sm sm:text-xl font-bold text-gray-800 merienda leading-tight">
            {product.name}
          </h3>

          {product.variants.length > 1 ? (
            <div className="relative shrink-0 w-full sm:w-auto mt-1 sm:mt-0">
              <select
                value={selectedVariant.quantity}
                onChange={(e) => {
                  const newVariant = product.variants.find((v) => v.quantity === e.target.value);
                  if (newVariant) setSelectedVariant(newVariant);
                }}
                className="appearance-none w-full sm:w-auto bg-gray-50 border border-gray-200 text-gray-700 text-[10px] sm:text-xs font-bold px-2.5 sm:px-3 py-1.5 sm:py-1.5 pr-6 rounded-full cursor-pointer outline-none focus:border-[#f15c22] focus:ring-1 focus:ring-[#f15c22] transition-all"
              >
                {product.variants.map((v) => (
                  <option key={v.quantity} value={v.quantity}>
                    {v.quantity}
                  </option>
                ))}
              </select>
              <div className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-2.5 h-2.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          ) : (
            <span className="shrink-0 bg-gray-50 text-gray-500 border border-gray-100 text-[10px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full mt-1 sm:mt-0">
              {selectedVariant.quantity}
            </span>
          )}
        </div>

        <p className="text-gray-500 text-[10px] sm:text-sm line-clamp-2 mb-4 leading-relaxed">
          {product.desc}
        </p>

        <div className="mt-auto flex flex-col sm:flex-row gap-1.5 sm:gap-2">
          <button
            disabled={isInCart}
            onClick={() =>
              addToCart({
                id: cartItemId,
                name: product.variants.length > 1 ? `${product.name} (${selectedVariant.quantity})` : product.name,
                price: selectedVariant.price,
                image: product.image,
              })
            }
            className={`flex-1 rounded-full py-2 sm:py-2.5 text-[9px] sm:text-[11px] md:text-xs font-bold uppercase tracking-wider transition-all duration-300
              ${
                isInCart
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white border-2 border-gray-100 text-gray-700 hover:border-[#f15c22] hover:text-[#f15c22]"
              }
            `}
          >
            {isInCart ? "In Cart ✓" : "Add to Cart"}
          </button>

          <button
            onClick={() => {
              if (!isInCart) {
                addToCart({
                  id: cartItemId,
                  name: product.variants.length > 1 ? `${product.name} (${selectedVariant.quantity})` : product.name,
                  price: selectedVariant.price,
                  image: product.image,
                });
              }
              navigate("/cart");
            }}
            className="flex-1 rounded-full bg-[#f15c22] py-2 sm:py-2.5 text-[9px] sm:text-[11px] md:text-xs font-bold uppercase tracking-wider text-white hover:bg-[#e04f1a] hover:shadow-[0_4px_12px_rgba(241,92,34,0.3)] transition-all duration-300"
          >
            Order Now
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// ----------------------------------------------------------------------
// 2. MAIN PAGE COMPONENT
// ----------------------------------------------------------------------
export default function ProductsPage() {
  // Filter & Pagination States
  const [categoryFilter, setCategoryFilter] = useState<CategoryType>('all');
  const [sortOrder, setSortOrder] = useState<SortOrderType>('default');
  const [currentPage, setCurrentPage] = useState(1);
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);

  const categories: { id: CategoryType; label: string }[] = [
    { id: 'all', label: 'All Products' },
    { id: 'normal', label: 'Daily Essentials' },
    { id: 'ragi', label: 'Ragi Specials' },
    { id: 'snacks', label: 'Snacks & Sweets' },
  ];

  const sortOptions: { id: SortOrderType; label: string }[] = [
    { id: 'default', label: 'Featured' },
    { id: 'lowToHigh', label: 'Price: Low to High' },
    { id: 'highToLow', label: 'Price: High to Low' },
  ];

  // Reset to page 1 whenever filters change


  // Filter and Sort Logic
  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];

    // 1. Filter by Category
    if (categoryFilter !== 'all') {
      result = result.filter((p) => p.category === categoryFilter);
    }

    // 2. Sort by Price
    if (sortOrder !== 'default') {
      result.sort((a, b) => {
        const aMinPrice = Math.min(...a.variants.map((v) => v.price));
        const bMinPrice = Math.min(...b.variants.map((v) => v.price));
        
        return sortOrder === 'lowToHigh' 
          ? aMinPrice - bMinPrice 
          : bMinPrice - aMinPrice;
      });
    }

    return result;
  }, [categoryFilter, sortOrder]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredAndSortedProducts.length / ITEMS_PER_PAGE);
  const currentProducts = filteredAndSortedProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <section className="relative bg-[#fcfbf9] overflow-hidden pt-16 sm:pt-20 pb-10 min-h-screen">
      <div className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">

          {/* PAGE HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#f15c22] merienda tracking-tight">
              Our Products
            </h2>
            <div className="h-1.5 w-20 sm:w-28 bg-[#8CC540] rounded-full mx-auto mt-4 sm:mt-5 opacity-80" />
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative z-10">
            
            {/* E-COMMERCE SIDEBAR (FILTERS) */}
            <div className="w-full lg:w-64 shrink-0">
              <div className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-sm sticky top-24 z-20">
                <div className="flex items-center justify-between lg:hidden mb-4">
                  <h3 className="font-bold text-gray-800 text-lg">Filters</h3>
                  <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
                    {filteredAndSortedProducts.length} Items
                  </span>
                </div>

                {/* Category Filter */}
                <div className="mb-8">
                  <h3 className="hidden lg:block font-bold text-gray-800 text-lg mb-4">Categories</h3>
                  {/* Added hidden scrollbar styles to the container below */}
                  <div 
                    className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 [&::-webkit-scrollbar]:hidden" 
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                  >
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => {
  setCategoryFilter(cat.id);
  setCurrentPage(1); // Reset page directly on click
}}
                        className={`whitespace-nowrap px-4 py-2 sm:py-2.5 rounded-full lg:rounded-xl text-xs sm:text-sm font-bold transition-all text-left
                          ${categoryFilter === cat.id 
                            ? "bg-[#f15c22] text-white shadow-md" 
                            : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                          }
                        `}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Custom Sort Dropdown */}
                <div className="relative">
                  <h3 className="font-bold text-gray-800 text-sm sm:text-base mb-3">Sort By Price</h3>
                  
                  {/* Invisible overlay to close dropdown when clicking outside */}
                  {isSortDropdownOpen && (
                    <div 
                      className="fixed inset-0 z-30" 
                      onClick={() => setIsSortDropdownOpen(false)}
                    />
                  )}

                  <button
                    onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
                    className="relative z-40 w-full flex items-center justify-between bg-gray-50 border border-gray-200 text-gray-700 text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl transition-all hover:border-[#f15c22]"
                  >
                    <span>{sortOptions.find(o => o.id === sortOrder)?.label}</span>
                    <svg className={`w-4 h-4 transition-transform duration-300 ${isSortDropdownOpen ? 'rotate-180 text-[#f15c22]' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <AnimatePresence>
                    {isSortDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute z-50 w-full mt-2 bg-white border border-gray-100 rounded-xl shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] overflow-hidden"
                      >
                        {sortOptions.map((option) => (
                          <button
                            key={option.id}
                            onClick={() => {
                              setSortOrder(option.id);
                              setIsSortDropdownOpen(false);
                            }}
                            className={`w-full text-left px-4 py-2.5 text-xs sm:text-sm font-semibold transition-colors
                              ${sortOrder === option.id 
                                ? 'bg-[#f15c22]/10 text-[#f15c22]' 
                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                              }
                            `}
                          >
                            {option.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </div>
            </div>

            {/* PRODUCT GRID SECTION */}
            <div className="flex-1 pb-20">
              <div className="hidden lg:flex items-center justify-between mb-6">
                <p className="text-gray-500 font-medium">
                  Showing <span className="text-gray-900 font-bold">{filteredAndSortedProducts.length}</span> results
                </p>
              </div>

              {filteredAndSortedProducts.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-3xl">🔍</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">No products found</h3>
                  <p className="text-gray-500 mt-2">Try changing your filters.</p>
                </div>
              ) : (
                <>
                  <motion.div layout className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 min-h-[500px] content-start">
                    <AnimatePresence mode="popLayout">
                      {currentProducts.map((product, i) => (
                        <ProductCard key={product.id} product={product} index={i} />
                      ))}
                    </AnimatePresence>
                  </motion.div>

                  {/* PAGINATION CONTROLS */}
                  {totalPages > 1 && (
                    <div className="mt-12 flex justify-center items-center gap-2">
                      <button
                        onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                        disabled={currentPage === 1}
                        className="p-2 rounded-full border border-gray-200 text-gray-500 hover:bg-[#f15c22] hover:text-white hover:border-[#f15c22] disabled:opacity-50 disabled:pointer-events-none transition-all"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                      </button>

                      <div className="flex gap-2">
                        {Array.from({ length: totalPages }).map((_, i) => (
                          <button
                            key={i + 1}
                            onClick={() => setCurrentPage(i + 1)}
                            className={`w-9 h-9 rounded-full text-sm font-bold transition-all flex items-center justify-center
                              ${currentPage === i + 1 
                                ? 'bg-[#f15c22] text-white shadow-md' 
                                : 'bg-white border border-gray-200 text-gray-600 hover:border-[#f15c22] hover:text-[#f15c22]'
                              }
                            `}
                          >
                            {i + 1}
                          </button>
                        ))}
                      </div>

                      <button
                        onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                        disabled={currentPage === totalPages}
                        className="p-2 rounded-full border border-gray-200 text-gray-500 hover:bg-[#f15c22] hover:text-white hover:border-[#f15c22] disabled:opacity-50 disabled:pointer-events-none transition-all"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* GREEN CURVED EDGE */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none translate-y-1 z-30">
        <svg
          viewBox="0 0 1440 120"
          className="block w-full h-[60px] sm:h-[90px]"
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