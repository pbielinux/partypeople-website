'use client';

import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white py- relative">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-medium leading-tight">
              Our multi-disciplinary studio<br />
              has decades of experience<br />
              in commercial brand creation<br />
              and design.
            </h2>
          </div>
          
          {/* Middle Column - Video replacing Card Image */}
          <div className="order-first md:order-none flex justify-center md:justify-start">
            <div className="relative w-64 h-80">
              <video 
                className="lozad pointer-events-none w-full h-full object-contain" 
                width="100%" 
                playsInline 
                muted 
                autoPlay 
                loop 
                data-loaded="true"
              >
                <source 
                  data-src="/videos/card.mp4" 
                  type="video/mp4" 
                  src="/videos/card.mp4"
                />
              </video>
            </div>
          </div>
          
          {/* Right Column - Large Text */}
          <div className="col-span-1 md:col-span-2 mt-10">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-medium leading-none">
                WE KNOW HOW<br />
                TO PRODUCE WORK<br />
                THAT <span className="relative inline-flex items-center">
                  <span className="absolute inset-0 rounded-full border-2 border-black"></span>
                  <span className="relative px-6 font-bold">HITS BIG</span>
                </span>
              </h1>
              
              <div className="pt-6">
                <p className="text-xl">
                  We are not defined by disciplines. However,<br />
                  <span className="inline-block border-b-2 border-black">here</span> are some of the things we do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;