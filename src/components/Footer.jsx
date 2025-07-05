import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowUp } from 'react-icons/fa';
import Button from '@buttons/Button';
const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="border-t border-gray-200 bg-white py-3 ml-20">
            <div className="container mx-auto px-4 flex flex-col items-center justify-center relative">
                <div className="text-gray-600 text-sm">
                    © Copyright <span className="font-medium text-blue-600">BarkaDevs</span>. All Rights Reserved
                </div>

                <div className="text-gray-600 text-sm mt-1">
                    Designed by <Link href="#" className="text-blue-600 hover:text-blue-700">St4ckkk</Link>
                </div>

                <Button
                    onClick={scrollToTop}
                    className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors fixed right-6 bottom-5 shadow-md"
                    aria-label="Scroll to top"
                >
                    <FaArrowUp className="w-5 h-5" />
                </Button>
            </div>
        </footer>
    );
};

export default Footer;