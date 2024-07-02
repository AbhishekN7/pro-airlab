import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { IoIosContact } from "react-icons/io";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://formspree.io/f/xjvnqngp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success('Message sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            } else {
                toast.error('Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('An error occurred. Please try again later.');
        }
    };

    const isMediumScreen = window.innerWidth <= 768;
    return (
        <div className=''>
            <h1 className="text-3xl md:text-4xl font-bold my-4 text-center">Contact Us</h1>
            <p className="mb-8 text-center">
                We are located at the ProChrom Analytical Institute and research laboratory LLP, situated on Gajanan housing society, near Baliram Patil School Road, Ayodhya Nagar, Chh. Sambhajinagar (Aurangabad), Maharashtra 431005.
                You can reach us via Air, Bus, Railway, and other transport facilities available in Chh. Sambhajinagar (Aurangabad).
            </p>
            <main className="container mx-auto p-8">
                <section className="bg-gray-100 p-6 rounded-lg shadow-md md:max-w-5xl w-full mx-auto">
                    <motion.h2
                        className="text-2xl font-semibold mb-4 text-center"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Drop a Note
                    </motion.h2>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <motion.div
                            className="flex flex-col"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <label className="mb-2 font-medium">Name</label>
                            <input
                                type="text"
                                name="name"
                                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </motion.div>
                        <motion.div
                            className="flex flex-col"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <label className="mb-2 font-medium">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </motion.div>
                        <motion.div
                            className="flex flex-col"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <label className="mb-2 font-medium">Message</label>
                            <textarea
                                name="message"
                                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                placeholder="Your Message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </motion.div>
                        <motion.button
                            type="submit"
                            className="w-full bg-blue-800 text-white py-2 rounded-md hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            Send Message
                        </motion.button>
                    </form>
                </section>
                <section className="text-center my-8">
                    <h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>
                    <p className="mb-2">For more information, feel free to contact us at:</p>
                    <div className="flex flex-col items-center gap-2 mb-2">
                        <div className={`flex items-center gap-2`}>
                            {!isMediumScreen && <IoIosContact size={30} />}
                            <p>Mr. Satish Narkhede (Director), M.Sc., (Chem.), MBA</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <SiGmail size={30} />
                            <p>proairlab@gmail.com</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaWhatsapp size={30} />
                            <p>+91 9423959990</p>
                        </div>
                    </div>
                    <p className="mb-2">Address: Gajanan housing society, near Baliram Patil School Road, Ayodhya Nagar, N 7, Cidco, Chh. Sambhajinagar (Aurangabad), Maharashtra 431005</p>
                </section>
                <div className="mb-8 max-w-5xl mx-auto">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.663109310054!2d75.35737387468517!3d19.89644252570558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba3af52fe598d%3A0xb778a8fc78f5e159!2sProChrom%20Analytical%20Institute%20and%20research%20laboratory!5e0!3m2!1sen!2sin!4v1717783514642!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    >
                    </iframe>
                </div>
            </main>
            <ToastContainer />
        </div>
    );
};

export default Contact;
