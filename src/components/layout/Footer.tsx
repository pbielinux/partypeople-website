import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black w-full">
      <div className="container mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Logo Section */}
          <div className="flex items-center mb-6 md:mb-0">
            <div className="relative w-40 h-40">
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
                  data-src="/videos/ring.mp4"
                  type="video/mp4"
                  src="/videos/ring.mp4"
                />
              </video>
            </div>

            {/* Brand Text */}
            <div className="ml-4">
              <h2 className="text-3xl font-bold tracking-tight">PARTY PEOPLE COMMUNITY ™</h2>
              <p className="text-lg">Where creatives belong.</p>
            </div>
          </div>

          {/* Email Signup */}
          <div className="w-full md:w-1/3">
            <div className="flex flex-col">
              <input
                type="email"
                placeholder="Email"
                className="p-3 bg-white text-black rounded-t-md"
              />
              <button className="p-3 bg-black hover:bg-white hover:text-black hover:border transition-colors duration-300 text-white font-medium rounded-b-md">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section with Links and Smiley */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-800">
          {/* Smiley Icon */}
          <div className="mb-4 md:mb-0">
            <Image
              src="/images/icon-head.png"
              alt="PartyPeople Head Logo"
              width={40}
              height={40}
            />
          </div>

          {/* Social Links */}
          <nav className="flex flex-wrap justify-center md:justify-end gap-6 uppercase font-medium">
            <Link href="https://instagram.com" className="hover:text-blue-400 transition-colors">
              Instagram
            </Link>
            <Link href="https://soundcloud.com" className="hover:text-blue-400 transition-colors">
              Soundcloud
            </Link>
            <Link href="https://spotify.com" className="hover:text-blue-400 transition-colors">
              Spotify
            </Link>
            <Link href="https://youtube.com" className="hover:text-blue-400 transition-colors">
              Youtube
            </Link>
            <Link href="mailto:contact@partypeople.world" className="hover:text-blue-400 transition-colors">
              contact@partypeople.world
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;