import React from "react";
import { motion } from "framer-motion";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/solid";

const testimonials = [
    {
        text: "Satish Sir creates an outstanding learning environment at ProChrom. His deep knowledge and hands-on guidance make every session insightful and highly effective. I felt supported throughout my journey.",
    },
    {
        text: "ProChrom is hands down the best place to learn analytical techniques and research skills. The teaching approach is clear, practical, and genuinely inspiring. Every concept is broken down in a way that makes it easy to understand.",
    },
    {
        text: "I had an amazing experience! Difficult topics were simplified with relatable examples, and each step was explained thoroughly. It’s the perfect place for anyone starting out in analytical chemistry.",
    },
    {
        text: "ProChrom exceeded all my expectations. Satish Sir’s dedication and support helped me gain clarity and confidence. I now feel prepared to take on real-world lab challenges.",
    },
    {
        text: "This institute doesn’t just focus on theory—it gives you hands-on exposure to real techniques and instruments. I walked away with both strong knowledge and practical skills. A truly 5-star experience!",
    },
];

const Testimonials = () => {
    return (
        <motion.section
            className="py-10 px-4 text-black"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-sm uppercase text-gray-600 mb-2">
                    What Our Students Say About Us
                </h2>
                <h1 className="text-4xl font-bold mb-10 flex items-center justify-center gap-2">
                    <svg
                        className="w-8 h-8 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    5.0 Rated on Google
                </h1>

                <motion.div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    {testimonials.map((t, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-md border border-gray-200 text-left hover:shadow-xl transition-transform transform hover:scale-105"
                        >
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                <ChatBubbleLeftEllipsisIcon className="h-10 w-10 sm:h-12 sm:w-12 text-blue-600 flex-shrink-0" />
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    “{t.text}”
                                </p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Testimonials;
