"use client";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md fixed top-0 left-0 w-full z-50"
        >
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    {/* Logo Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="relative w-10 h-10 md:w-12 md:h-12"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-md opacity-75" />
                        <Image
                            src="/image/logo.jpg"
                            alt="Diyowlink"
                            fill
                            className="rounded-full object-cover z-10 border-2 border-white dark:border-gray-800 shadow-md"
                            priority
                        />
                    </motion.div>
                    
                    {/* Logo Text */}
                    <Link 
                        href="/" 
                        className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                        passHref
                    >
                        DIYOWLINK
                    </Link>
                </div>
                
                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-8">
                    <Link 
                        href="/" 
                        className="relative group px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        passHref
                    >
                        Trending
                        <span className="absolute left-3 right-3 -bottom-1 h-0.5 bg-blue-600 dark:bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                    </Link>
                    <Link 
                        href="/business-and-technology" 
                        className="relative group px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        passHref
                    >
                        Business & Tech
                        <span className="absolute left-3 right-3 -bottom-1 h-0.5 bg-blue-600 dark:bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                    </Link>
                    <Link
                        href="/entertainment-and-fun"
                        className="relative group px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                        passHref
                    >
                        Entertainment
                        <span className="absolute left-3 right-3 -bottom-1 h-0.5 bg-purple-600 dark:bg-purple-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                    </Link>
                    <Link 
                        href="/sports-and-health" 
                        className="relative group px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        passHref
                    >
                        Sports & Health
                        <span className="absolute left-3 right-3 -bottom-1 h-0.5 bg-blue-600 dark:bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden bg-white dark:bg-gray-800 shadow-lg"
                >
                    <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
                        <Link 
                            href="/" 
                            className="px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Trending
                        </Link>
                        <Link 
                            href="/business-and-technology" 
                            className="px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Business & Technology
                        </Link>
                        <Link
                            href="/entertainment-and-fun"
                            className="px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Entertainment & Fun
                        </Link>
                        <Link 
                            href="/sports-and-health" 
                            className="px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Sports & Health
                        </Link>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
}
