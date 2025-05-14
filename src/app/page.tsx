'use client';

import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import CTASection from '../sections/CTASection';
import PastEventsSection from '../sections/PastEventsSection';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import VideoSection from '@/sections/VideoSection';
import Marquee from '@/components/ui/Marquee';


export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection />
      <VideoSection />
      <AboutSection />
      <PastEventsSection />
      <CTASection />
      <Marquee />
      <Footer />
    </div>
  );
}