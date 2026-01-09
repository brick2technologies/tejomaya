import { motion } from "framer-motion";
import {
    Leaf,
    Droplets,
    Cog,
    Clock,
    PackageCheck,
} from "lucide-react";

const processSteps = [
    {
        title: "We Choose the Best",
        text: "Carefully selected rice, urad dal, and spices from trusted farms.",
        icon: Leaf,
    },
    {
        title: "Soaked with Patience",
        text: "Slow soaking allows grains to soften naturally and evenly.",
        icon: Droplets,
    },
    {
        title: "Ground the Traditional Way",
        text: "Stone grinding keeps nutrients intact and texture smooth.",
        icon: Cog,
    },
    {
        title: "Time Does the Magic",
        text: "Natural fermentation without chemicals or shortcuts.",
        icon: Clock,
    },
    {
        title: "Packed Fresh for You",
        text: "Hygienically packed and delivered at peak freshness.",
        icon: PackageCheck,
    },
];

export default function OurProcessSection() {
    return (
        <section className="relative bg-white overflow-hidden pb-20">

            {/* MAIN CONTENT */}
            <div className="max-w-6xl mx-auto px-4">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#8cc540] merienda">
                        Our Process
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-xl mx-auto">
                        A simple journey from raw ingredients to fresh batter.
                    </p>
                </div>

                {/* Steps */}
                <div className="space-y-24">
                    {processSteps.map((step, index) => {
                        const Icon = step.icon;
                        const zigzag = index % 2 !== 0;
                        const isLast = index === processSteps.length - 1;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.45 }}
                                viewport={{ once: true }}
                                className={`
                  flex flex-col
                  lg:flex-row
                  ${zigzag ? "lg:flex-row-reverse" : ""}
                  items-center gap-12
                `}
                            >
                                {/* Icon + Path */}
                                <div className="relative flex flex-col items-center lg:flex-1">

                                    {/* Circle */}
                                    <div className="w-32 h-32 rounded-full bg-[#8cc540]/20 flex items-center justify-center shadow-md z-10">
                                        <Icon className="w-14 h-14 text-[#8cc540]" />
                                    </div>

                                    {/* SVG Connector */}
                                    {!isLast && (
                                        <>
                                            {/* Mobile */}
                                            <svg
                                                className="lg:hidden mt-2"
                                                width="20"
                                                height="60"
                                                viewBox="0 0 20 60"
                                                fill="none"
                                            >
                                                <path
                                                    d="M10 0 V60"
                                                    stroke="#8cc540"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                />
                                            </svg>

                                            {/* Desktop */}
                                            <svg
                                                className="hidden lg:block absolute top-full mt-2"
                                                width="160"
                                                height="80"
                                                viewBox="0 0 160 80"
                                                fill="none"
                                            >
                                                <path
                                                    d={
                                                        zigzag
                                                            ? "M160 0 C100 0, 100 80, 0 80"
                                                            : "M0 0 C60 0, 60 80, 160 80"
                                                    }
                                                    stroke="#8cc540"
                                                    strokeWidth="2"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                />
                                            </svg>
                                        </>
                                    )}
                                </div>

                                {/* Text */}
                                <div className="text-center lg:text-left lg:flex-1">
                                    <h3 className="text-xl font-semibold text-[#8cc540] mb-2 merienda">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 text-base leading-relaxed">
                                        {step.text}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* CTA */}
            <div className="relative mx-auto max-w-5xl mt-24 z-10">
                <div className="bg-[#8cc540] px-10 py-12 rounded-l-[80px] rounded-r-[80px] shadow-lg text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 merienda">
                        Taste the Freshness Today
                    </h3>

                    <p className="text-white/90 mb-6 max-w-xl mx-auto">
                        Order freshly prepared idly & dosa batter made with traditional methods.
                    </p>

                    <button className="bg-white text-[#8cc540] font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition">
                        Order Now
                    </button>
                </div>
            </div>

            {/* CURVED SECTION BORDER (MASK STYLE) */}
<div className="absolute bottom-0 left-0 w-full pointer-events-none ">
  <svg
    viewBox="0 0 1440 120"
    className="block w-full h-[80px]"
    preserveAspectRatio="none"
  >
    <path
      d="M0,0 C240,120 480,120 720,120 960,120 1200,120 1440,0 L1440,120 L0,120 Z"
      fill="#8cc540"
    />
  </svg>
</div>



        </section>
    );
}
