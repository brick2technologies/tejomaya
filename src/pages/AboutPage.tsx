"use client";

import { motion } from "framer-motion";



const AboutPage = () => {
    return (
        <main className=" relative bg-[radial-gradient(circle_at_top,rgba(140,197,64,0.25)_0%,rgba(241,92,34,0.18)_35%,white_70%)] text-gray-800 overflow-hidden">
            <section className="px-6 py-28 ">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-6xl mx-auto"
                >
                    {/* FULL CARD */}
                    <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                        {/* Gradient Background */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle,_#8CC540_0%,_#F15C22_100%)]" />

                        {/* Content */}
                        <div className="relative px-8 py-20 md:px-20 text-center text-white
                bg-white/10 backdrop-blur-md">

                            <h1 className="text-4xl md:text-5xl font-extrabold">
                                About Tejomaya Foods
                            </h1>

                            <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto opacity-95">
                                Supplying fresh, hygienic, and traditionally prepared South Indian
                                tiffin foods every day.
                            </p>

                            {/* Accent Line */}
                            <div className="mt-8 h-1 w-28 mx-auto rounded-full bg-white/80" />
                        </div>
                    </div>
                </motion.div>
            </section>



            {/* STORY – FULL CARD */}
            <section className="px-6 py-24 ">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-6xl mx-auto"
                >
                    <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl">

                        {/* Card Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-orange-50 to-green-100" />

                        {/* Content */}
                        <div className="relative grid md:grid-cols-2 gap-14 items-center px-8 py-16 md:px-16">

                            {/* TEXT */}
                            <motion.div
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                            >
                                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                                    Our Story
                                </h2>

                                {/* Accent */}
                                <div className="mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-[#8CC540] to-[#F15C22]" />

                                <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                                    Tejomaya Foods was born from a simple belief — food should be
                                    <span className="font-semibold text-gray-900"> pure, honest, and prepared the traditional way</span>.
                                </p>

                                <p className="mt-4 text-gray-700 leading-relaxed">
                                    We specialize in supplying South Indian tiffin items that deliver
                                    homemade taste at scale, without compromising on hygiene or
                                    consistency.
                                </p>

                                <p className="mt-4 text-gray-700 leading-relaxed">
                                    Every idly, dosa, and karam is crafted using
                                    <span className="font-semibold text-gray-900"> premium ingredients</span>,
                                    natural fermentation, and strict hygiene practices — just like it’s
                                    made at home.
                                </p>
                            </motion.div>

                            {/* IMAGE */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.92 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                                className="relative rounded-3xl overflow-hidden shadow-xl"
                            >
                                <img
                                    src="/about-tiffin.jpg"
                                    alt="Traditional South Indian tiffin food"
                                    className="w-full h-full object-cover"
                                />

                                {/* Image Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                            </motion.div>

                        </div>
                    </div>
                </motion.div>
            </section>


            {/* OFFERINGS – FULL CARD */}
            <section className="px-6 py-24 ">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-6xl mx-auto"
                >
                    <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl">

                        {/* Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-green-50 to-orange-100" />

                        {/* Content */}
                        <div className="relative px-8 py-20 md:px-16 text-center">
                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="text-3xl md:text-4xl font-extrabold text-gray-900"
                            >
                                What We Offer
                            </motion.h2>

                            {/* Accent */}
                            <div className="mt-4 h-1 w-28 mx-auto rounded-full bg-gradient-to-r from-[#8CC540] to-[#F15C22]" />

                            {/* Offer Cards */}
                            <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-3 gap-10">
                                {[
                                    {
                                        title: "Fresh Idly Batter",
                                        desc: "Naturally fermented idly batter prepared daily for soft, fluffy idlies.",
                                    },
                                    {
                                        title: "Crispy Dosa Batter",
                                        desc: "Perfectly balanced dosa batter for crisp, golden dosas every time.",
                                    },
                                    {
                                        title: "Idly / Dosa Karam",
                                        desc: "Traditional karam made with authentic spices to enhance every bite.",
                                    },
                                ].map((item, index) => (
                                    <motion.div
                                        key={item.title}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.15 }}
                                        className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:-translate-y-1 hover:shadow-2xl transition"
                                    >
                                        <h3 className="text-xl font-bold text-gray-900">
                                            {item.title}
                                        </h3>
                                        <p className="mt-4 text-gray-700 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>


            {/* QUALITY – FULL CARD */}
            <section className="px-6 py-24 ">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-6xl mx-auto"
                >
                    <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl">

                        {/* Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-orange-50 to-green-100" />

                        {/* Content */}
                        <div className="relative px-8 py-20 md:px-16 text-center">
                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="text-3xl md:text-4xl font-extrabold text-gray-900"
                            >
                                Our Commitment to Quality
                            </motion.h2>

                            {/* Accent */}
                            <div className="mt-4 h-1 w-32 mx-auto rounded-full bg-gradient-to-r from-[#8CC540] to-[#F15C22]" />

                            {/* Quality Cards */}
                            <div className="mt-16 grid md:grid-cols-3 gap-10">
                                {[
                                    {
                                        title: "Hygienic Preparation",
                                        desc: "Every step follows strict cleanliness and food safety standards.",
                                    },
                                    {
                                        title: "Natural Ingredients",
                                        desc: "Only premium raw materials with no artificial preservatives.",
                                    },
                                    {
                                        title: "Daily Fresh Supply",
                                        desc: "Prepared fresh every day to maintain taste, texture, and nutrition.",
                                    },
                                ].map((q, i) => (
                                    <motion.div
                                        key={q.title}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.15 }}
                                        className="bg-white/90 backdrop-blur-md rounded-2xl p-10 shadow-lg hover:-translate-y-1 hover:shadow-2xl transition"
                                    >
                                        <h3 className="text-xl font-bold text-gray-900">
                                            {q.title}
                                        </h3>
                                        <p className="mt-4 text-gray-700 leading-relaxed">
                                            {q.desc}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>



            {/* CTA – ORDER NOW */}
            <section className="px-6 py-24 bg-white">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl">

                        {/* Background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#8CC540] to-[#F15C22]" />

                        {/* Content */}
                        <div className="relative px-8 py-20 md:px-16 text-center text-white">
                            <h2 className="text-3xl md:text-4xl font-extrabold">
                                Ready to Order Fresh Idly & Dosa Batter?
                            </h2>

                            <p className="mt-4 text-lg opacity-95">
                                Get freshly prepared batter and authentic karam delivered with
                                consistent quality.
                            </p>

                            <button className="mt-8 inline-flex items-center justify-center rounded-full bg-white text-gray-900 font-semibold px-10 py-4 shadow-lg hover:scale-105 transition">
                                Order Now
                            </button>
                        </div>
                    </div>
                </motion.div>
            </section>
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

        </main>
    );
};

export default AboutPage;
