'use client';

import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white py-16 relative">
      <div className="container mx-auto px-10 md:px-20 lg:px-24 xl:px-28 2xl:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* Left Column - Text Content */}
          <div className="">
            <h2 className="text-2xl lg:w-[80%] font-medium leading-tight">
              Our multi-disciplinary team has decades of experience in party rocking!
            </h2>
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
                data-src="/videos/card.mp4"
                type="video/mp4"
                src="/videos/card.mp4"
              />
            </video>
          </div>

          {/* Right Column - Large Text */}
          <div className="">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-5xl md:text-5xl font-medium leading-relaxed">
                <span className='font-bold'>WE</span> KNOW HOW TO PRODUCE EVENTS THAT<span className="relative inline-flex items-center">
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