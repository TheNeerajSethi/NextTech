import React from 'react';
import Link from "next/link";

const Footer = () => {
    return (
        <div>
            <footer className="bg-sky-700 shadow-lg dark:bg-gray-900">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <a href="/"
                           className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img src="/Profile.jpg" className="h-8 rounded-full" alt="Logo"/>
                            <span
                                className="self-center text-2xl font-semibold whitespace-nowrap text-white">NextTech</span>
                        </a>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-300 sm:mb-0">
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">About Us</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">Services</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">Portfolio</a>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:underline">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                    <span
                        className="block text-sm text-gray-300 sm:text-center dark:text-gray-400">© {new Date().getFullYear()}
                        <Link href="/" className="hover:underline"> NextTech™</Link> All Rights Reserved.</span>
                </div>
            </footer>


        </div>
    );
};

export default Footer;