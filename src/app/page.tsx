'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileBottomBar from '@/components/layout/MobileBottomBar';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';

import Hero from '@/components/home/Hero';
import Packages from '@/components/home/Packages';
import Offers from '@/components/home/Offers';
import About from '@/components/home/About';
import CoreValues from '@/components/home/CoreValues';
import Services from '@/components/home/Services';
import Credentials from '@/components/home/Credentials';
import Testimonials from '@/components/home/Testimonials';
import Contact from '@/components/home/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      
      <main>
        <Hero />
        <Packages />
        <Offers />
        <About />
        <CoreValues />
        <Services />
        <Credentials />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <MobileBottomBar />
      <FloatingWhatsApp />
    </>
  );
}
