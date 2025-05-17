import React from "react";
import { motion } from "framer-motion";
import { UserGroupIcon, BeakerIcon, CpuChipIcon } from "@heroicons/react/24/outline";

const features = [
    {
        icon: <UserGroupIcon className="h-10 w-10 text-blue-600 mb-4" />,
        title: "Experienced Team",
        description:
            "Our team comprises seasoned experts with extensive experience in the field of analytical chemistry.",
    },
    {
        icon: <BeakerIcon className="h-10 w-10 text-green-600 mb-4" />,
        title: "Practical Training",
        description:
            "Our practical training programs offer hands-on experience using the latest technologies and methodologies.",
    },
    {
        icon: <CpuChipIcon className="h-10 w-10 text-purple-600 mb-4" />,
        title: "Cutting-Edge Technology",
        description:
            "We leverage advanced technology to ensure superior-quality outcomes in analytical chemistry.",
    },
];

const WhyChooseUs = () => {
    return (
        <section className="py-8 px-4">
            <motion.div
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-6xl mx-auto text-center">
                <h2
                    className="text-3xl md:text-4xl font-bold mb-4"
                >
                    Why Choose Us?
                </h2>
                <p
                    className="text-gray-600 mb-10 max-w-2xl mx-auto text-base md:text-lg"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    Our Certificate Course in Analytical Chemistry equips students with the skills and knowledge required to excel in the field.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-300 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-transform hover:-translate-y-1"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 * index }}
                            viewport={{ once: true }}
                        >
                            {feature.icon}
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-600 text-sm md:text-base">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default WhyChooseUs;
