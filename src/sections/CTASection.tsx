'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ConnectSection: React.FC = () => {
  return (
    <section className="relative w-full bg-white py-16 overflow-hidden">
      {/* Main content container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Phone Image */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <div className="relative w-64 mx-auto md:mx-0">
              <Image
                src="/images/icon-head.png"
                alt="Retro Pink Mobile Phone"
                width={250}
                height={400}
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h2 className="text-7xl md:text-8xl font-bold tracking-tighter mb-4">
              <span className="block">WANNA</span>
              <span className="block">PLAY</span>
            </h2>

            {/* CTA Button */}
            <div className="mt-8 mb-12">
              <Link href="/connect" passHref>
                <div className="inline-block bg-white border-2 border-black text-black text-2xl font-bold py-3 px-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
                  LET&apos;S CONNECT
                </div>
              </Link>
            </div>

            {/* Tagline */}
            <p className="text-lg font-medium">
              Hit connect and let&apos;s build brand fandom worldwide.
            </p>
          </div>
        </div>
      </div>

      {/* Membership footer */}
      <div className="absolute bottom-0 left-0 right-0 bg-black text-white py-2 overflow-hidden">
        <div className="flex items-center animate-marquee whitespace-nowrap">
          {[...Array(10)].map((_, i) => (
            <React.Fragment key={i}>
              <div className="flex items-center mx-4">
                <Image
                  className="invert mx-2"
                  src="/images/icon-head.png"
                  alt="PartyPeople Head Logo"
                  width={30}
                  height={30}
                />
                <span className="uppercase tracking-wider text-sm font-medium">Membership</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;