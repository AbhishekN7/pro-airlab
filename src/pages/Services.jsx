import React from 'react';
import { motion } from 'framer-motion';
const Services = () => {
    return (
        <div>
            <main className="container mx-auto p-4 md:p-8">
                <section className="text-center mb-8 md:mb-16">
                    <motion.h2 className="text-2xl md:text-3xl font-bold mb-4" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>Our Services</motion.h2>
                    <motion.p className="mb-4 md:mb-8 text-sm md:text-lg" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}>A Certificate Course in Analytical Instruments with 100% Placement Assistance</motion.p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                        <motion.div className="p-4 bg-white rounded-lg shadow-lg" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 1 }}>
                            <h3 className="text-lg md:text-2xl font-semibold mb-2">High Performance Liquid Chromatography (HPLC)</h3>
                            <p className="text-sm md:text-base">formerly referred to as high-pressure liquid chromatography, is a technique in analytical chemistry used to separate, identify, and quantify specific components in mixtures.</p>
                        </motion.div>
                        <motion.div className="p-4 bg-white rounded-lg shadow-lg" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 1.5 }}>
                            <h3 className="text-lg md:text-2xl font-semibold mb-2">Gas Chromatography (GC)</h3>
                            <p className="text-sm md:text-base">is a common type of chromatography used in analytical chemistry for separating and analyzing compounds that can be vaporized without decomposition.</p>
                        </motion.div>
                        <motion.div className="p-4 bg-white rounded-lg shadow-lg" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 2 }}>
                            <h3 className="text-lg md:text-2xl font-semibold mb-2">Ultra Violet-Visible Spectrophotometer (UV-Spectro)</h3>
                            <p className="text-sm md:text-base"> is a tool that measures how a sample absorbs, reflects, or transmits light across the ultraviolet (UV) and visible (Vis) regions of the electromagnetic spectrum.</p>
                        </motion.div>
                    </div>
                </section>
                <section className="text-center">
                    <motion.h2 className="text-2xl md:text-3xl font-bold mb-4" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>Why Choose Us?</motion.h2>
                    <motion.p className="mb-4 md:mb-8 text-sm md:text-lg" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}>Our Certificate Course in Analytical Chemistry is meticulously designed to equip students with the necessary skills and knowledge required to excel in the field of analytical chemistry.</motion.p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                        <motion.div className="flex items-center p-4 bg-white rounded-lg shadow-lg" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 1 }}>
                            <div className="text-left">
                                <h3 className="text-lg md:text-xl font-semibold mb-2">Experienced Team</h3>
                                <p className="text-sm md:text-base">Our team comprises seasoned experts with extensive experience in the field of analytical chemistry.</p>
                            </div>
                        </motion.div>
                        <motion.div className="flex items-center p-4 bg-white rounded-lg shadow-lg" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 1.5 }}>
                            <div className="text-left">
                                <h3 className="text-lg md:text-xl font-semibold mb-2">Cutting-Edge Technology</h3>
                                <p className="text-sm md:text-base">We leverage cutting-edge technology to guarantee superior-quality outcomes.</p>
                            </div>
                        </motion.div>
                        <motion.div className="flex items-center p-4 bg-white rounded-lg shadow-lg" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 2 }}>
                            <div className="text-left">
                                <h3 className="text-lg md:text-xl font-semibold mb-2">Practical Training</h3>
                                <p className="text-sm md:text-base">Our practical training programs are designed to provide hands-on experience using the latest technologies and methodologies in analytical chemistry.</p>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Services;
