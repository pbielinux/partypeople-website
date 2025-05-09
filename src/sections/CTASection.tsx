'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

const CTASection: React.FC = () => {
  return (
    <section className="bg-white py-16 relative">
      <div className="container mx-auto px-10 md:px-20 lg:px-24 xl:px-28 2xl:px-32">
        <div className="grid grid-cols-2">
          {/* Top full-width item (spans both columns) */}
          <div className="col-span-2 flex items-end">
            <h1 className="text-7xl sm:text-8xl md:text-9xl font-medium">WANNA</h1>
          </div>

          {/* Bottom left column */}
          <div className="">
            <div className="relative w-full h-full">
              <Image
                src="/videos/retro-phone.webp" // Replace with your real logo path
                alt="Analogue Logo"
                width={500}
                height={200}
                className="w-full"
              />
            </div>
          </div>

          {/* Bottom right column */}
          <div className="flex flex-col space-y-8">
            {/* Text */}
            <h1 className="text-7xl sm:text-8xl md:text-9xl font-medium">PLAY</h1>
            <Button>
              <span className="text-black text-xl sm:text-3xl font-normal">LET'S CONNECT</span>
            </Button>
            <h2 className="text-xl lg:w-[80%] font-medium leading-tight">Hit connect and let's build brand fandom worldwide.</h2>
          </div>
        </div>
      </div>

    </section>
  );
};

export default CTASection;