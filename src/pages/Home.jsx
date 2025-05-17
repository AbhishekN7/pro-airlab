import React from 'react';
import { motion } from 'framer-motion';
import HeroImage from '../assets/proairlab-cover-photo-final.png';
import { FaMapPin, FaPhone } from 'react-icons/fa';
import PracticalShowCase from './PracticalShowCase';
import Testimonials from '../components/Testimonials';
import WhyChooseUs from '../components/WhyChooseUs';
import OurServices from '../components/OurServices';

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
                            ProChrom Analytical Institute and <br /> Research Laboratory LLP
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

                <main className="container mx-auto p-4 md:p-8 bg-gradient-to-br from-gray-100 via-white to-gray-50">
                    <OurServices />
                    <WhyChooseUs />
                    <Testimonials />
                    <PracticalShowCase />
                </main>
            </div >
        </>
    );
};

export default Home;
