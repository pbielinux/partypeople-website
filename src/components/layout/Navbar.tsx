'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button } from '../ui/Button';
import Image from 'next/image';
import { socials, navItems } from '@/lib/data';



const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className="flex flex-col w-full bg-white">
            {/* Nav Bar */}
            <div className="h-14 md:h-20 flex items-center justify-between py-4 px-4 z-50">
                {/* Mobile menu button */}
                <div className="lg:hidden">
                    <Button onClick={() => setIsMenuOpen(prev => !prev)}>
                        <p className="text-gray-800 text-xs md:text-sm min-w-[60px] font-medium">
                            {isMenuOpen ? 'CLOSE' : 'MENU'}
                        </p>
                    </Button>
                </div>

                {/* Logo */}
                <div className="flex flex-row justify-center items-center space-x-2">
                    <Image
                        className='hidden lg:block'
                        src="https://storage.googleapis.com/partypeople.world/images/icon-head.png"
                        alt="PartyPeople Head Logo"
                        width={40}
                        height={40}
                    />
                    <Link href="/" className="text-gray-800 text-xs font-semibold" onClick={() => setIsMenuOpen(false)}>
                        PARTY PEOPLE © 2025
                    </Link>
                </div>

                {/* Desktop Navigation Items */}
                <div className="hidden lg:flex space-x-6 flex-1 justify-center">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.path}
                            className={`${pathname === item.path
                                ? 'text-blue-600'
                                : 'text-gray-700 hover:text-blue-600'
                                } transition-colors duration-300`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Connect Button */}
                <div className="flex">
                    <Button onClick={() => console.log('Menu clicked')}>
                        <p className="text-gray-800 text-xs font-medium">CONNECT</p>
                    </Button>
                </div>
            </div>
            {/* Mobile Menu */}
            <div
                className={`lg:hidden fixed top-0 left-0 w-full h-full bg-white z-10 transform transition-transform duration-500 ease-in-out py-10 ${isMenuOpen ? 'translate-y-14 md:translate-y-20' : '-translate-y-full'}`}
            >
                <div className="flex flex-col justify-between xs:pt-10 h-full gap-5">
                    {/* Page Links */}
                    <div
                        className={`flex flex-col items-center space-y-6 mt-20 text-4xl sm:text-6xl font-normal transition-opacity duration-500 delay-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
                    >
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.path}
                                onClick={() => setIsMenuOpen(false)} // Close the menu on link click
                                className="hover:underline transition-all"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Social Links */}
                    <div className={`flex flex-col items-center justify-center gap-4 mb-20 sm:flex-row sm:space-x-6 transition-opacity duration-500 delay-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="flex justify-center ">
                            <Image
                                src="https://storage.googleapis.com/partypeople.world/images/icon-head.png"
                                alt="Party People Logo"
                                width={50}
                                height={50}
                                className="h-12"
                            />
                        </div>
                        <div className="flex justify-center space-x-3 md:space-x-6">
                            {socials.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline transition-colors duration-300 text-xs xs:text-sm font-medium text-center"
                                >
                                    {social.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;