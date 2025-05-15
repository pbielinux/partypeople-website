import React from 'react';
import Image from 'next/image';
import { socials } from '@/lib/data';


const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black w-full">
      <div className="container mx-auto px-4 py-10 justify-center">
        {/* Social Links */}
        <div className="flex flex-col items-center justify-center gap-4 mb-8 sm:flex-row sm:space-x-6">
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

        {/* Copyright Section */}
        <div className=" text-black text-center text-xs font-medium py-4">
          © 2025 SUB CONFUSÃO, LDA. ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  );
};

export default Footer;