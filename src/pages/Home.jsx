// src/pages/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';
import HeroImage from '../assets/proairlab-cover-photo-final.png';
import HPLCImage from '../assets/hplc.jpeg';
import GCImage from '../assets/gc.jpeg';
import UVImage from '../assets/uv.jpeg';
import { FaMapPin, FaPhone } from 'react-icons/fa';
import PracticalShowCase from './PracticalShowCase';

const Home = () => {
    const isMediumScreen = window.innerWidth <= 768;
    return (
        <>
            <div>
                <header className="bg-gray-900 text-white text-center py-20 md:py-20 md:pb-32" style={{ backgroundImage: `url(${HeroImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                    <div className="container mx-auto">
                        <motion.h1
                            className="text-3xl md:text-5xl font-bold leading-tight text-black inline-block"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            style={{
                                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                                padding: '0.5rem',
                                backgroundColor: 'rgba(255, 255, 255, 0.6)',
                                borderRadius: '0.25rem'
                            }}
                        >
                            ProChrom Analytical Institute and <br /> Research Laboratory
                        </motion.h1>
                        <motion.p
                            className="mt-4 text-lg md:text-xl text-black inline-block "
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            style={{
                                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
                                backgroundColor: 'rgba(255, 255, 255, 0.6)',
                                padding: '0.5rem',
                                borderRadius: '0.25rem',
                                wordWrap: 'break-word',
                                textAlign: 'center',
                            }}
                        >
                            Providing top-notch analytical services to chromatography and spectroscopy learners
                        </motion.p>

                        <div className="flex flex-col md:flex-row items-center justify-center mt-8 md:space-x-4">
                            <motion.a
                                href="https://maps.app.goo.gl/fo1Tdu2m1KPz7ZAa8"
                                className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 flex items-center justify-center transition-colors duration-300 mb-4 md:mb-0"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, delay: 1 }}
                            >
                                <FaMapPin className="mr-2" size={20} />
                                View On Google
                            </motion.a>
                            <motion.div
                                className="relative inline-block"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, delay: 1 }}
                            >
                                <a
                                    href="tel:+919423959990"
                                    className="inline-block text-white border border-blue-500 px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 flex items-center justify-center transition-colors duration-300"
                                >
                                    <FaPhone className="mr-2" size={20} />
                                    Get in Touch
                                </a>
                                <div className="hidden md:block absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-4 py-2 bg-gray-800 text-white text-sm rounded-md shadow-lg w-64">
                                    Call us at +91 9423959990
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </header >

                <main className="container mx-auto p-4 md:p-8">
                    <section className="text-center mb-8 md:mb-16">
                        <motion.h2 className="text-2xl md:text-3xl font-bold mb-4" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>Our Services</motion.h2>
                        <motion.p className="mb-4 md:mb-8 text-sm md:text-lg" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}>A Certificate Course in Analytical Instruments with
                            <motion.span
                                className="highlight ml-[3px]"
                                initial={{ color: '#000' }}
                                animate={{ color: ['#FFD700', '#000'] }}
                                transition={{ duration: 2, ease: 'linear', repeat: Infinity }}
                            >
                                100% Placement Assistance
                            </motion.span>
                        </motion.p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                            <motion.div
                                className="p-4 bg-white rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, delay: 1 }}
                            >
                                <img src={HPLCImage} alt="High Performance Liquid Chromatography" className="w-full h-auto object-cover rounded-t-lg" style={{ aspectRatio: '16/9' }} />
                                <h3 className="text-lg md:text-2xl font-semibold mb-2 mt-4">High Performance Liquid Chromatography (HPLC)</h3>
                                <p className="text-sm md:text-base">formerly referred to as high-pressure liquid chromatography, is a technique in analytical chemistry used to separate, identify, and quantify specific components in mixtures.</p>
                            </motion.div>
                            <motion.div
                                className="p-4 bg-white rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, delay: 1.5 }}
                            >
                                <img src={GCImage} alt="Gas Chromatography" className="w-full h-auto object-cover rounded-t-lg" style={{ aspectRatio: '16/9' }} />
                                <h3 className="text-lg md:text-2xl font-semibold mb-2 mt-4">Gas Chromatography (GC)</h3>
                                <p className="text-sm md:text-base">is a common type of chromatography used in analytical chemistry for separating and analyzing compounds that can be vaporized without decomposition.</p>
                            </motion.div>
                            <motion.div
                                className="p-4 bg-white rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, delay: 2 }}
                            >
                                <img src={UVImage} alt="Ultra Violet-Visible Spectrophotometer" className="w-full h-auto object-cover rounded-t-lg" style={{ aspectRatio: '16/9' }} />
                                <h3 className="text-lg md:text-2xl font-semibold mb-2 mt-4">Ultra Violet-Visible Spectrophotometer (UV-Spectro)</h3>
                                <p className="text-sm md:text-base">is a tool that measures how a sample absorbs, reflects, or transmits light across the ultraviolet (UV) and visible (Vis) regions of the electromagnetic spectrum.</p>
                            </motion.div>
                        </div>

                    </section>
                    <section className="text-center my-8">
                        <motion.h2
                            className="text-2xl md:text-3xl font-bold mb-4"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            Why Choose Us?
                        </motion.h2>
                        <motion.p
                            className="mb-4 md:mb-8 text-sm md:text-lg"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            Our Certificate Course in Analytical Chemistry is meticulously designed to equip students with the necessary skills and knowledge required to excel in the field of analytical chemistry.
                        </motion.p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                            <motion.div
                                className="flex items-center p-4 bg-white rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, delay: 1 }}
                            >
                                <div className="text-left">
                                    <h3 className="text-lg md:text-xl font-semibold mb-2">Experienced Team</h3>
                                    <p className="text-sm md:text-base">Our team comprises seasoned experts with extensive experience in the field of analytical chemistry.</p>
                                </div>
                            </motion.div>
                            <motion.div
                                className="flex items-center p-4 bg-white rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, delay: 1.5 }}
                            >
                                <div className="text-left">
                                    <h3 className="text-lg md:text-xl font-semibold mb-2">Cutting-Edge Technology</h3>
                                    <p className="text-sm md:text-base">We leverage cutting-edge technology to guarantee superior-quality outcomes.</p>
                                </div>
                            </motion.div>
                            <motion.div
                                className="flex items-center p-4 bg-white rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, delay: 2 }}
                            >
                                <div className="text-left">
                                    <h3 className="text-lg md:text-xl font-semibold mb-2">Practical Training</h3>
                                    <p className="text-sm md:text-base">Our practical training programs are designed to provide hands-on experience using the latest technologies and methodologies in analytical chemistry.</p>
                                </div>
                            </motion.div>
                        </div>
                    </section>
                    <PracticalShowCase />
                </main>
            </div >
        </>
    );
};

export default Home;
