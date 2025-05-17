import React from "react"
import { motion } from "framer-motion";
import HPLCImage from '../assets/hplc.jpeg';
import GCImage from '../assets/gc.jpeg';
import UVImage from '../assets/uv.jpeg';
const OurServices = () => {
    return (
        <motion.section className="text-center my-8 md:mb-16"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Services</h2>
            <p className="mb-4 md:mb-8 text-sm md:text-lg" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}>We offer a Certificate Course in Analytical Instruments with 
                <motion.span
                    className="highlight ml-[3px]"
                    initial={{ color: '#000' }}
                    animate={{ color: ['#FFD700', '#000'] }}
                    transition={{ duration: 2, ease: 'linear', repeat: Infinity }}
                >
                    100% Placement Assistance
                </motion.span> <br /> including On-the-Job Training (OJT) and internships as per university guidelines.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                <div
                    className="p-4 bg-white rounded-lg border border-gray-300 shadow-lg transition transform hover:scale-105 hover:shadow-2xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <img src={HPLCImage} alt="High Performance Liquid Chromatography" className="w-full h-auto object-cover rounded-t-lg" style={{ aspectRatio: '16/9' }} />
                    <h3 className="text-lg md:text-2xl font-semibold mb-2 mt-4">High Performance Liquid Chromatography (HPLC)</h3>
                    <p className="text-sm md:text-base">formerly referred to as high-pressure liquid chromatography, is a technique in analytical chemistry used to separate, identify, and quantify specific components in mixtures.</p>
                </div>
                <div
                    className="p-4 bg-white rounded-lg border border-gray-300 shadow-lg transition transform hover:scale-105 hover:shadow-2xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                >
                    <img src={GCImage} alt="Gas Chromatography" className="w-full h-auto object-cover rounded-t-lg" style={{ aspectRatio: '16/9' }} />
                    <h3 className="text-lg md:text-2xl font-semibold mb-2 mt-4">Gas Chromatography (GC)</h3>
                    <p className="text-sm md:text-base">is a common type of chromatography used in analytical chemistry for separating and analyzing compounds that can be vaporized without decomposition.</p>
                </div>
                <div
                    className="p-4 bg-white rounded-lg border border-gray-300 shadow-lg transition transform hover:scale-105 hover:shadow-2xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                >
                    <img src={UVImage} alt="Ultra Violet-Visible Spectrophotometer" className="w-full h-auto object-cover rounded-t-lg" style={{ aspectRatio: '16/9' }} />
                    <h3 className="text-lg md:text-2xl font-semibold mb-2 mt-4">Ultra Violet-Visible Spectrophotometer (UV-Spectro)</h3>
                    <p className="text-sm md:text-base">is a tool that measures how a sample absorbs, reflects, or transmits light across the ultraviolet (UV) and visible (Vis) regions of the electromagnetic spectrum.</p>
                </div>
            </div>

        </motion.section>
    )
}

export default OurServices;