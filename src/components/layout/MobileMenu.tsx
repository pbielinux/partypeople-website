'use client';

import React from 'react';
import Link from 'next/link';

type MobileMenuProps = {
    navItems: { name: string; path: string }[];
    isMenuOpen: boolean;
    onToggle: () => void;
};

const MobileMenu: React.FC<MobileMenuProps> = ({ navItems, isMenuOpen, onToggle }) => {
    return (
        <div
            className={`lg:hidden fixed top-0 left-0 w-full h-full bg-white z-40 transform transition-transform duration-500 ease-in-out py-10 ${
                isMenuOpen ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
            <div className="h-full grid grid-cols-1 [grid-template-rows:1fr_auto] gap-5">
                {/* Page Links */}
                <div className="h-full">
                    <div
                        className={`flex flex-col items-center space-y-6 mt-20 text-4xl sm:text-6xl font-normal transition-opacity duration-500 delay-300 ${
                            isMenuOpen ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.path}
                                onClick={onToggle}
                                className="hover:underline transition-all"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Social Links */}
                <div
                    className={`flex flex-col items-center space-y-4 text-md transition-opacity duration-500 delay-500 ${
                        isMenuOpen ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <div className="flex space-x-4 underline py-6">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            INSTAGRAM
                        </a>
                        <a href="https://vimeo.com" target="_blank" rel="noopener noreferrer">
                            VIMEO
                        </a>
                        <a href="https://behance.net" target="_blank" rel="noopener noreferrer">
                            BEHANCE
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            LINKEDIN
                        </a>
                    </div>
                    <a href="mailto:contact@partypeople.world" className="underline py-4">
                        CONTACT@PARTYPEOPLE.WORLD
                    </a>
                    <img
                        src="/images/icon-head.png"
                        alt="Party People Head"
                        className="h-16"
                    />
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;