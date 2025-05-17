import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-blue-800 p-4 text-white">
            <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                <p>&copy; 2024 ProChrom Analytical Institute and research laboratory LLP.</p>
                <div className="mt-2 md:mt-0 space-x-4">
                    <span>Made with ❤️ by Abhishek</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
