'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'WORK', path: '/work' },
    { name: 'SERVICES', path: '/services' },
    { name: 'STUDIO', path: '/studio' },
    { name: 'CAREERS', path: '/careers' },
    { name: 'PLAYROOM', path: '/playroom' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white py-4 px-4 md:px-6">
      <div className="flex items-center justify-between">
        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="border border-gray-300 rounded px-3 py-1">
            MENU
          </button>
        </div>

        {/* Logo */}
        <div className="flex-shrink-0 md:flex-1">
          <Link href="/" className="text-gray-800 text-1xl font-medium">
            ANALOGUE © 2025
          </Link>
        </div>

        {/* Desktop Navigation Items */}
        <div className="hidden md:flex space-x-6 flex-1 justify-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`${
                pathname === item.path
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              } transition-colors duration-300`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Connect Button */}
        <div className="flex-shrink-0">
          <Link
            href="/connect"
            className="border border-gray-800 rounded px-4 py-1 text-gray-800 hover:bg-gray-800 hover:text-white transition-colors duration-300"
          >
            CONNECT
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 py-2 border-t border-gray-200">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`${
                  pathname === item.path
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                } transition-colors duration-300 px-2`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;