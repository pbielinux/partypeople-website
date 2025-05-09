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
          <video
              className="lozad pointer-events-none w-full h-[40vh] object-contain"
              width="200px"
              playsInline
              muted
              autoPlay
              loop
              data-loaded="true"
            >
              <source
                data-src="/videos/knight.mp4"
                type="video/mp4"
                src="/videos/knight.mp4"
              />
            </video>
          </div>

          {/* Bottom right column */}
          <div className="flex flex-col space-y-8">
            {/* Text */}
            <h1 className="text-7xl sm:text-8xl md:text-9xl font-medium">PARTY</h1>
            <Button>
              <span className="text-black text-xl sm:text-3xl font-normal">LET'S CONNECT</span>
            </Button>
            <h2 className="text-xl lg:w-[80%] font-medium leading-tight">Hit connect and let's bring the party worldwide.</h2>
          </div>
        </div>
      </div>

    </section>
  );
};

export default CTASection;