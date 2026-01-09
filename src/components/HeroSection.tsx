"use client";

import { useEffect, useState, useRef, type TouchEvent } from "react";

const slides = [
  {
    desktop: "/hero-1-Desktop.jpg",
    tablet: "/hero-1-tablet.jpg",
    mobile: "/hero-1-mobile.jpg",
  },
  {
    desktop: "/hero-2-desktop.jpg",
    tablet: "/hero-2-tablet.jpg",
    mobile: "/hero-2-mobile.jpg",
  },
  {
    desktop: "/hero-3-desktop.jpg",
    tablet: "/hero-3-tablet.jpg",
    mobile: "/hero-3-mobile.jpg",
  },
];

export default function HeroImageSlider() {
  const [active, setActive] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const totalSlides = slides.length;
  const sliderRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => setActive((prev) => prev + 1);
  const prevSlide = () => { if (active > 0) setActive((prev) => prev - 1); };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [active]);

  const extendedSlides = [...slides, ...slides];

  const handleTransitionEnd = () => {
    if (active >= totalSlides) {
      if (sliderRef.current) {
        sliderRef.current.style.transition = "none";
        const newIndex = active % totalSlides;
        setActive(newIndex);
        sliderRef.current.style.transform = `translateX(-${newIndex * 100}%)`;
        void sliderRef.current.offsetHeight;
        setTimeout(() => {
          if (sliderRef.current) sliderRef.current.style.transition = "";
        }, 20);
      }
    }
  };

  const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();
  };

  return (
    <>
      <section className="relative overflow-hidden h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-[85vh] pt-24 md:pt-28 z-20  ">
        <div className="relative z-10 h-full w-full px-[5%] mx-auto">

          <div
            className="overflow-hidden h-full"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div
              ref={sliderRef}
              onTransitionEnd={handleTransitionEnd}
              className="flex h-full transition-transform duration-700 ease-in-out cursor-grab active:cursor-grabbing"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {extendedSlides.map((slide, index) => (
                <div
                  key={index}
                  className="min-w-full h-full px-5 py-2 sm:p-6 md:p-8 flex-shrink-0 flex items-center justify-center"
                >
                  <div className="relative w-full h-full max-h-[500px] sm:max-h-none rounded-3xl overflow-hidden bg-gray-50 flex items-center justify-center border ">
                    <picture className="w-full h-full flex items-center justify-center">
                      <source media="(min-width: 1024px)" srcSet={slide.desktop} />
                      <source media="(min-width: 640px)" srcSet={slide.tablet} />
                      <img
                        src={slide.mobile}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-full object-contain p-2 sm:p-0 transition-transform duration-700"
                        draggable="false"
                      />
                    </picture>

                    <div
                      className="absolute inset-0 rounded-3xl pointer-events-none
                                 ring-1 md:ring-2 ring-[#8cc540]/30 
                                 shadow-[inset_0_0_30px_rgba(140,197,64,0.05)]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-10 md:bottom-16 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3 z-20">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-1.5 md:h-2 rounded-full transition-all duration-300
                  ${active % totalSlides === i
                    ? "w-8 md:w-12 bg-[#8cc540] shadow-[0_0_10px_rgba(140,197,64,0.4)]"
                    : "w-1.5 md:w-2 bg-gray-300"
                  }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* GREEN CURVED DIV */}
        {/* <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
          <div className="w-full h-[100px] md:h-[160px] bg-[#8cc540] rounded-tl-[120px] rounded-tr-[120px]" />
        </div> */}
      </section>  
    </>
  );
}