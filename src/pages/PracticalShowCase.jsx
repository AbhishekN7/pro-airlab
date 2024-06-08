import { motion } from 'framer-motion';

const PracticalShowCase = () => {
    const images = [
        { src: 'src/assets/prac_1.jpeg', alt: 'Student performing practical 1' },
        { src: 'src/assets/prac_2.jpeg', alt: 'Student performing practical 2' },
        { src: 'src/assets/prac_3.jpeg', alt: 'Student performing practical 3' },
        { src: 'src/assets/prac_4.jpeg', alt: 'Student performing practical 4' },
    ];

    return (
        <section className="text-center my-8 md:my-16">
            <motion.h2
                className="text-2xl md:text-3xl font-bold mb-4"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Practical Training Showcase
            </motion.h2>
            <motion.p
                className="mb-4 md:mb-8 text-sm md:text-lg"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                See our students in action, gaining hands-on experience with these Analytical Instruments.
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                {images.map((image, index) => (
                    <motion.div
                        key={index}
                        className="overflow-hidden rounded-lg shadow-lg h-80 md:h-96 shadow-lg transition transform hover:scale-105 hover:shadow-2xl"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                    >
                        <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default PracticalShowCase;
