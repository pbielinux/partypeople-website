'use client';

import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import CTASection from '../sections/CTASection';
import NewsletterSection from '../sections/NewsletterSection';
import PastEventsSection from '../sections/PastEventsSection';
import VideoSection from '@/sections/VideoSection';
import Marquee from '@/components/ui/Marquee';


export default function Home() {
  return (
    <main>
      <HeroSection />
      <VideoSection />
      <AboutSection />
      <PastEventsSection />
      <CTASection />
      <Marquee />
      <NewsletterSection />
    </main>
  );
}