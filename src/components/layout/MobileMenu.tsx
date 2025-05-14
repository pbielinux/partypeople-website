'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { socials, navItems } from '@/lib/data';

type MobileMenuProps = {
    isMenuOpen: boolean;
};

const MobileMenu: React.FC<MobileMenuProps> = ({ isMenuOpen }) => {
    return (
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
                            onClick={() => (false)} // Close the menu on link click"
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
    );
};

export default MobileMenu;