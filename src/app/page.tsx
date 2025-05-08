import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import CTASection from '../sections/CTASection';
import PastEventsSection from '../sections/PastEventsSection';
import ContactSection from '../sections/ContactSection';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />     
      <HeroSection />
      <AboutSection />
      <PastEventsSection />
      <CTASection />
      <Footer />
    </div>
  );
}