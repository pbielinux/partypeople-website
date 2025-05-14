'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';

const CTASection: React.FC = () => {
  return (
    <section className="bg-white py-10 relative">
      <div className="container mx-auto px-4 md:px-12 ">
        <div className="grid grid-cols-2">
          {/* Top full-width item (spans both columns) */}
          <div className="col-span-2 flex items-end">
            <h1 className="text-5xl xs:text-7xl sm:text-8xl lg:text-9xl font-medium">WANNA</h1>
          </div>

          {/* Bottom left column */}
          <div className="">
          <video
              className="lozad pointer-events-none w-full h-[35vh] object-contain"
              width="200px"
              playsInline
              muted
              autoPlay
              loop
              data-loaded="true"
            >
              <source
                data-src="https://storage.googleapis.com/partypeople.world/videos/knight.mp4"
                type="video/mp4"
                src="https://storage.googleapis.com/partypeople.world/videos/knight.mp4"
              />
            </video>
          </div>

          {/* Bottom right column */}
          <div className="flex flex-col space-y-8">
            {/* Text */}
            <h1 className="text-5xl xs:text-7xl sm:text-8xl lg:text-9xl font-medium">PARTY</h1>
            <Button>
              <span className="text-black text-xs xs:text-xl sm:text-2xl font-normal">LET'S CONNECT</span>
            </Button>
            <h2 className="text-xs xs:text-xl sm:text-2xl leading-tight">Hit connect and let's bring the party worldwide.</h2>
          </div>
        </div>
      </div>

    </section>
  );
};

export default CTASection;