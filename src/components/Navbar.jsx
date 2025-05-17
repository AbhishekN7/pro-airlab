import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/android-chrome-192x192.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <motion.nav
            className="bg-gray-800 text-white p-4"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        >
            <div className="container w-[90%] mx-auto flex justify-between items-center">
                <Link to="/" className="flex items-center text-2xl font-bold">
                    <img src={logo} alt="FSD" width={32} height={32} className="mr-2" />
                    ProChrom
                </Link>
                <div className="hidden md:flex space-x-4">
                    <Link to="/" className="hover:underline">
                        Home
                    </Link>
                    <Link to="/services" className="hover:underline">
                        What we offer
                    </Link>
                    <Link to="/about" className="hover:underline">
                        About Us
                    </Link>
                    <Link to="/contact" className="hover:underline">
                        Contact
                    </Link>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>
            {isOpen && (
                <motion.div
                    className="md:hidden mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="flex flex-col space-y-2">
                        <Link to="/" className="hover:underline" onClick={toggleMenu}>
                            Home
                        </Link>
                        <Link to="/services" className="hover:underline">
                            What we offer
                        </Link>
                        <Link to="/about" className="hover:underline" onClick={toggleMenu}>
                            About Us
                        </Link>
                        <Link to="/contact" className="hover:underline" onClick={toggleMenu}>
                            Contact
                        </Link>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navbar;
