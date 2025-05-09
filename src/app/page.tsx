'use client';

import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import CTASection from '../sections/CTASection';
import PastEventsSection from '../sections/PastEventsSection';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import MobileMenu from '@/components/layout/MobileMenu';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import VideoSection from '@/sections/VideoSection';
import Marquee from '@/components/ui/Marquee';


export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'WORK', path: '/work' },
    { name: 'SERVICES', path: '/services' },
    { name: 'STUDIO', path: '/studio' },
    { name: 'CAREERS', path: '/careers' },
    { name: 'PLAYROOM', path: '/playroom' },
  ];

  return (
    <div>
      <Navbar 
        navItems={navItems}
        isMenuOpen={isMenuOpen}
        pathname={usePathname()}
        onToggle={() => setIsMenuOpen(!isMenuOpen)}
      />
      <MobileMenu
        navItems={navItems}
        isMenuOpen={isMenuOpen}
        onToggle={() => setIsMenuOpen(!isMenuOpen)}
      />
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