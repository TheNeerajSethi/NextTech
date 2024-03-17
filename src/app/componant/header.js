"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { TbBrandNextjs } from 'react-icons/tb';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Assume initially user is not logged in

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = () => {
        // Perform logout actions and update isLoggedIn state accordingly
        setIsLoggedIn(false);
    };

    return (
        <nav className="bg-sky-700 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <TbBrandNextjs style={{fontSize:'30px'}} />
                    <h1 className="text-xl font-bold">NextTech</h1>
                </div>
                <div className="hidden md:flex items-center space-x-6">
                    <Link className="hover:text-gray-300" href="/">
                        Home
                    </Link>
                    <Link className="hover:text-gray-300" href="/machine">
                        Machine Learning
                    </Link>
                    <Link className="hover:text-gray-300" href="/cybersecurity">
                        Cybersecurity
                    </Link>
                    <Link className="hover:text-gray-300" href="/cloud">
                        Cloud Computing
                    </Link>
                    <Link className="hover:text-gray-300" href="/blockchain">
                        Blockchain
                    </Link>
                    <Link className="hover:text-gray-300" href="/virtual">
                        Virtual Reality
                    </Link>
                </div>
                <div className="hidden md:flex items-center space-x-6">
                    {isLoggedIn ? (
                        <button onClick={handleLogout} className="hover:text-gray-300">
                            Logout
                        </button>
                    ) : (
                        <>
                            <Link className="hover:text-gray-300" href="/login">
                                Login
                            </Link>
                            <Link className="hover:text-gray-300" href="/register">
                                Register
                            </Link>
                        </>
                    )}
                </div>
                <div className="md:hidden">
                    <button
                        className="text-xl text-gray-200 focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden">
                    <ul className="flex flex-col items-center mt-4">
                        <li>
                            <Link className="hover:text-gray-300" href="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:text-gray-300" href="/machine">
                                Machine Learning
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:text-gray-300" href="/cybersecurity">
                                Cybersecurity
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:text-gray-300" href="/cloud">
                                Cloud Computing
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:text-gray-300" href="/blockchain">
                                Blockchain
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:text-gray-300" href="/virtual">
                                Virtual Reality
                            </Link>
                        </li>

                        {isLoggedIn && (
                            <li>
                                <button onClick={handleLogout} className="hover:text-gray-300">
                                    Logout
                                </button>
                            </li>
                        )}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Header;
