import React from 'react';
import Image from 'next/image';

const socials = [
  { label: 'INSTAGRAM', href: 'https://www.instagram.com/we.partypeople/' },
  { label: 'YOUTUBE', href: 'https://YOUTUBE.COM' },
  { label: 'SPOTIFY', href: 'https://open.spotify.com/user/31udm6ap4q6moiyjdm3rwkgywvrm' },
  { label: 'SOUNDCLOUD', href: 'https://soundcloud.com/partypeople-world' },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black w-full">
      <div className="container mx-auto px-4 py-20 justify-center">
        <div className='grid grid-cols-1 lg:grid-cols-2 items-start'>
          {/* Newsletter Subscribe Form */}
          <div className='flex flex-col border-2 border-black rounded-2xl p-6 space-y-2 h-auto'>
            <h1 className='text-3xl font-normal'>PARTY PEOPLE COMMUNITY<sup className='font-medium'>TM</sup></h1>
            <h2 className='text-xl'>Where we all belong..</h2>
            <div className='flex flex-col border-2 border-black rounded-2xl'>
              <input className="p-3 rounded-2xl focus:rounded-2xl" type="text" placeholder='Email' />
              <button className='bg-white text-black text-2xl border-t-2 border-black rounded-b-2xl p-2'>JOIN</button>
            </div>
          </div>

          <div className="relative flex h-80 mb-12 lg:order-first">
            <video
              className="lozad pointer-events-none object-contain"
              width="100%"
              playsInline
              muted
              autoPlay
              loop
              data-loaded="true"
            >
              <source
                data-src="/videos/dancing-beer.mp4"
                type="video/mp4"
                src="/videos/dancing-beer.mp4"
              />
            </video>
            <Image
              src="/images/roundal.svg" // Replace with the actual path to your logo
              alt="Party People Logo"
              width={60}
              height={60}
              className="absolute w-full h-full "
            />
          </div>
        </div>


        {/* Social Links */}
        <div className="flex flex-col items-center justify-center gap-4 mb-8 sm:flex-row sm:space-x-6">
          <div className="flex justify-center ">
            <Image
              src="/images/icon-head.png"
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