import React from 'react';
import Image from 'next/image';

import Taglinebanner from '@/components/banners/TaglineBanner';
import ImageTextBanner from '@/components/banners/ImageTextBanner';
import TextBanner from '@/components/banners/TextBanner';
import GridBanner from '@/components/banners/GridBanner';


export default function IntroSection() {
  return (
    <section>
      <Taglinebanner />
      <ImageTextBanner
        title="THIS IS"
        subtitle="Party People"
        text={[
          "Party People is an entertainment company and electronic music brand dedicated to elevating club music, celebrating culture as a tool for social liberation, and creating safe spaces to celebrate alternative lifestyles.",
          "The brand’s purpose is to build a diverse community through immersive experiences, globally.",
        ]}
        images={[
          "/images/02.jpg",
          "/images/03.jpg",
        ]}
      />
      <ImageTextBanner
        subtitle="I Guess You Are"
        text={[
          "After a decade of experience with other brands, we’ve built a diverseportfolio that includes original parties, large-scale events, and thecuration of local clubs. Our journey began in Paraná, Brazil, and over timeexpanded to one of the largest and most dynamic event markets inLatin America — São Paulo.",
          "In 2024, we founded Party People in Lisbon, aiming to combine the expertise gained in Brazil with the rich cultural scene of Europe, enhancing the potential of every event we produce.",
        ]}
        images={["/images/04.jpg",]}
        invert={true}
      />
      <GridBanner />
      <TextBanner />
      <ImageTextBanner
        text={[
          "Since the beginning of the marketing project in February 2025, our digital presence has grown organically and strategically, driven by consistent content and a coherent narrative. This allows us to build a community tha tactively participates in our journey and will soon convert its interactions into valuable assets.",
          "April 12, 2025 our progress goes beyond numbers — it reflects relevance, connection, and credibility.",
        ]}
        images={["/images/10.jpg",]}
        invert={true}
      />
      <ImageTextBanner
        text={[
          "We averaged 100,000 page views through content and relationship marketing. Posts generate an average of 10,000 interactions. Our target audience is primarily aged 25 to 34 — a group that typically seeks a balance between personal growth and meaningful experiences.",
          "The data on age range and interests confirms that our content strategy aligns with the expectations of our audience, further strengthening our connection with a community that continues to grow.",
        ]}
        images={["/images/about/about1.jpg", "/images/about/about2.jpg"]}
      />

      <div className='w-full relative overflow-hidden'>
        {/* Fullscreen Background */}
        <div className='relative w-full aspect-[16/9]'>
          <Image
            src="/images/about/Picture1.jpg"
            alt="Background"
            fill
            priority
          />
        </div>

        {/* Centered content */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <h1 className="w-full text-2xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[Saitama] absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-yellow-400 text-center">
            A fresh alternative for<br />clubbers and those who<br />believe in electronic music
          </h1>
        </div>
      </div>

      <ImageTextBanner
        text={[
          "The next steps for the future are with the arrival of summer in the Southern Hemisphere. Party People embarks on its first tour in Brazil, from December 2025 to March 2026, with confirmed dates in five states, expanding our reach and connecting audiences from different backgrounds under the same spirit.",
          "Beyond events, we are expanding our efforts with an educational platform focused on spreading knowledge about the world of electronic music and alternative culture, and with the development of our own tech wear clothing brand, which translates the aesthetics and values of our community into functional and sustainable fashion, encouraging the circulation of local commerce.",
        ]}
        images={["/images/05.jpg",]}
      />

    </section>
  );
}