'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button } from '../ui/Button';
import Image from 'next/image';
import { navItems } from '@/lib/data';
import MobileMenu from './MobileMenu';



const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 left-0 w-full bg-white z-50">
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
                    <Link href="/" className="text-gray-800 text-xs font-semibold">
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
            <MobileMenu isMenuOpen={isMenuOpen}/>
        </nav>
    );
};

export default Navbar;