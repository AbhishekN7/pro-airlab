import OurServices from "../components/OurServices";
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const WhatWeOffer = () => {
    const OJTImages = [
        { src: '/assets/OJT_1.JPG', alt: 'Student performing practical 1' },
        { src: '/assets/OJT_2.JPG', alt: 'Student performing practical 2' },
        { src: '/assets/OJT_3.JPG', alt: 'Student performing practical 3' },
        { src: '/assets/OJT_4.JPG', alt: 'Student performing practical 4' },
        { src: '/assets/OJT_5.JPG', alt: 'Student performing practical 5' },
        { src: '/assets/OJT_6.JPG', alt: 'Student performing practical 6' },
        { src: '/assets/OJT_7.JPG', alt: 'Student performing practical 7' },
        { src: '/assets/OJT_8.JPG', alt: 'Student performing practical 8' },
    ];
    return (
        <div className="container mx-auto p-8 ">
            <motion.div className='my-10'
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-3xl font-bold mb-4 text-center">
                    This Practical Training Institute is Best For:
                </h1>
                <p className="mb-6 text-center">
                    Students and professionals pursuing B.Sc. & M.Sc. in Analytical, Organic, Industrial Chemistry, Biochemistry, Biotechnology, and Microbiology.
                </p>
                <p className="mb-6 text-center">
                    Aspirants of B.Pharm, M.Pharm, B.E. (Chemical), M.Tech., Ph.D. candidates, and research scholars seeking hands-on, industry-relevant training.
                </p>
                <p className="mb-6 text-center">
                    Industry professionals aiming to upgrade their skills with the latest practical knowledge and advanced techniques.
                </p>
                <p className="mb-8 text-center">
                    Comprehensive notes and study materials are provided to support learning and practical understanding.
                </p>
                <p className="text-center">
                    Our programs bridge the gap between academic theory and real-world applications,
                    empowering learners to build successful careers in the chemical and pharmaceutical industries.
                </p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">
                    A Glimpse into Our Recent On Job Training Batch
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                    {OJTImages.map((image, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-lg shadow-lg h-80 md:h-96 shadow-lg transition transform hover:scale-105 hover:shadow-2xl"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                        >
                            <LazyLoadImage
                                src={image.src}
                                alt={image.alt}
                                effect="opacity"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </motion.div>
            <OurServices />
        </div>
    )
}

export default WhatWeOffer;