'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <div className="bg-white text-black relative pb-12">
      {/* Hero Content */}
      <div className="container mx-auto px-4 md:px-12 mt-12 mb-20">
        {/* Main Logo with Trend Report Badge */}
        <div className="relative w-full flex justify-center mb-16">
          <div className="relative">
            <Image
              src="/images/logo-h.svg"
              alt="PartyPeople Horizontal Logo"
              width={800}
              height={200}
              className="w-full md:w-auto"
              priority
            />
            <div className="absolute top-0 right-0 -translate-y-6 translate-x-6 rotate-12">
              <div className="text-green-500 font-bold leading-tight">
                <div>TREND</div>
                <div>REPORT-2025</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tagline Text */}
        <div className="max-w-full mx-auto text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center mb-6">
            <div className="flex items-center mb-4 md:mb-0">
              <span className="mr-2">
                <Image
                  src="/images/smile-icon.png"
                  alt="Smiley Face"
                  width={30}
                  height={30}
                />
              </span>
              <span className="text-3xl md:text-4xl font-medium">A SERIOUSLY</span>
            </div>

            <div className="ml-0 md:ml-4 relative">
              <div className="absolute inset-0 bg-black translate-x-0.5 translate-y-0.5 rounded px-3"></div>
              <span className="relative inline-block bg-white border-2 border-black rounded px-3 py-1 text-3xl md:text-4xl font-medium">
                PLAYFUL
              </span>
              <span className="text-lg align-top">™</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center mb-6">
            <div className="relative mb-4 md:mb-0">
              <div className="absolute inset-0 rounded-full border-2 border-black"></div>
              <span className="relative text-3xl md:text-4xl font-medium px-4">BRAND</span>
            </div>

            <span className="text-3xl md:text-4xl font-medium mx-3">AND</span>

            <div className="flex items-center">
              <span className="text-3xl md:text-4xl font-medium">MOTION</span>
              <span className="ml-2">
                <Image
                  src="/images/play-icon.png"
                  alt="Play Icon"
                  width={24}
                  height={24}
                />
              </span>
            </div>
          </div>

          <div className="mb-6">
            <span className="text-3xl md:text-4xl font-medium text-white outline-text">STUDIO</span>
            <span className="text-3xl md:text-4xl font-medium"> COMBINING FRESH-FORWARD</span>
            <span className="text-3xl md:text-4xl font-medium">++</span>
            <span className="text-3xl md:text-4xl font-medium"> THINKING</span>
          </div>

          <div className="mb-6">
            <span className="text-3xl md:text-4xl font-medium">AND</span>
            <span className="mx-2">
              <Image
                src="/images/diamond-icon.png"
                alt="Diamond Icon"
                width={30}
                height={30}
                className="inline-block"
              />
            </span>
            <span className="text-3xl md:text-4xl font-medium"> BEAUTIFULLY CRAFTED CREATIVE TO HELP</span>
          </div>

          <div>
            <div className="inline-block relative">
              <div className="absolute inset-0 rounded-full border-2 border-black"></div>
              <span className="relative text-3xl md:text-4xl font-bold px-4">BRANDS</span>
            </div>

            <span className="text-3xl md:text-4xl font-medium"> BUILD </span>

            <span className="inline-block mx-2">
              <Image
                src="/images/fist-icon.png"
                alt="Fist Icon"
                width={40}
                height={40}
                className="inline-block"
              />
            </span>

            <span className="text-3xl md:text-4xl font-medium"> FANDOM WORLDWIDE </span>

            <span className="inline-block">
              <Image
                src="/images/globe-icon.png"
                alt="Globe Icon"
                width={40}
                height={40}
                className="inline-block"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;