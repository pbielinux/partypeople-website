import React from 'react';
import Taglinebanner from '@/components/banners/TaglineBanner';
import TextBanner from '@/components/banners/TextBanner';
import TextBannerInvert from '@/components/banners/TextBannerInvert';


export default function IntroSection() {
  return (
    <section className="">
      <div className='w-screen h-screen'>
        <Taglinebanner />
      </div>
      <div className='w-screen'>
        <TextBanner />
      </div>
      <div className='w-screen'>
        <TextBannerInvert />
      </div>
      

    </section>
  );
}