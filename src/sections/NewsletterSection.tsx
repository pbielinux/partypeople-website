import React from 'react';
import Image from 'next/image';

const NewsletterSection: React.FC = () => {
  return (
    <section className="bg-white py-10 relative">
      <div className="container flex flex-col lg:flex-row mx-auto px-4 md:px-12 items-center justify-center">
        {/* Newsletter Subscribe Form */}
        <div className='flex flex-col border-2 border-black rounded-2xl p-4 space-y-2'>
          <h1 className='text-2xl sm:text-4xl'>PARTY PEOPLE COMMUNITY<sup className='font-thin'>TM</sup></h1>
          <h2 className='text-lg'>Where we all belong..</h2>
          <div className='flex flex-col border-2 border-black rounded-2xl'>
            <input className="p-3 rounded-t-2xl focus:rounded-t-2xl focus:border-black" type="text" placeholder='Email' />
            <button className='bg-white text-black text-xl sm:text-2xl md:text-3xl border-t-2 border-black rounded-b-2xl p-2'>JOIN</button>
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
              data-src="https://storage.googleapis.com/partypeople.world/videos/dancing-beer.mp4"
              type="video/mp4"
              src="https://storage.googleapis.com/partypeople.world/videos/dancing-beer.mp4"
            />
          </video>
          <Image
            src="https://storage.googleapis.com/partypeople.world/images/roundal.svg" // Replace with the actual path to your logo
            alt="Party People Logo"
            width={60}
            height={60}
            className="absolute w-full h-full animate-spinslow"
          />
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;