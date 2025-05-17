import React from 'react';
import { motion } from 'framer-motion';
import DeskImage from '../assets/desk_image.jpg';
const About = () => {
    return (
        <div>
            <motion.main className="container mx-auto p-8 max-w-6xl"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-3xl font-bold mb-4 text-center">About Us</h1>
                <div className='text-center'>
                    <p className="mb-4">
                        The ProChrom Analytical Institute, formerly known as CHROM Analytical Institute, is the first analytical training institute in the Marathwada region, established in 2014 with over 10 years of experience in the field. It is situated in Gajanan Housing Society near Baliram Patil School Road, Ayodhya Nagar, N-7, Cidco, Chh. Sambhajinagar (Aurangabad), and is well connected via air, bus, railway, and other modes of transportation.
                    </p>
                    <p className="mb-4">
                        The institute offers certificate courses in handling sophisticated analytical instruments including Gas Chromatography (GC), High Performance Liquid Chromatography (HPLC), and UV-Visible Spectrophotometer (UV-Spectro), along with other essential equipment like TLC, pH meter, electronic weighing balance, and sonicator with degasser (filtration assembly).
                    </p>
                    <p className="mb-4">
                        These courses are highly constructive for students pursuing B.Sc., M.Sc., B.Pharm, M.Pharm, PhD, and for industry professionals. The training is designed to enhance theoretical knowledge and practical operating techniques that are essential for employment in pharmaceutical companies, clinical laboratories, government labs, and other chemical industries.
                    </p>
                    <p className="mb-4">
                        The ProChrom Analytical Institute is fully equipped with modern, sophisticated instruments and provides instruction from highly qualified professors and experienced industry experts who are well-versed in theoretical concepts, instrument operation, and troubleshooting—making it a comprehensive learning hub for analytical chemistry.
                    </p>
                </div>
                <h1 className="text-3xl font-bold my-10 text-center">Our Director & Faculty</h1>
                <motion.div
                    className="bg-white border border-gray-300 rounded-2xl shadow-lg p-6 my-5 mx-auto hover:shadow-xl "
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <img
                            className="w-full max-w-sm md:w-1/2 rounded-xl shadow-lg object-cover"
                            src={DeskImage}
                            alt="faculty-desk-image"
                        />
                        <div className="text-center md:text-left">
                            <h2 className='font-bold mb-3 text-xl '>Mr. Satish Narkhede, M.Sc. (Chem.), MBA</h2>
                            <p className="mb-4">
                                With over 30 years of experience in the chemical and pharmaceutical industries including manufacturing, quality control (QC) and quality assurance (QA), Mr. Satish Narkhede leads our institution with exceptional expertise. His extensive background bridges academic excellence and industry practice, ensuring students receive relevant, up-to-date knowledge. Under his leadership, the institute fosters innovation, research, and strong industry collaborations, preparing students for successful careers. Mr. Narkhede is dedicated to nurturing talent and creating a dynamic learning environment that encourages critical thinking and professional growth, making him a vital driving force behind our commitment to quality education and industry readiness.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </motion.main>
        </div>
    );
};

export default About;
