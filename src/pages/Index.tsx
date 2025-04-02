import { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ClientLogos from '@/components/ClientLogos';

const Index = () => {
  const mountCountRef = useRef(0);
  
  // Log when Index mounts
  useEffect(() => {
    mountCountRef.current += 1;
    console.log(`Index page mounted (count: ${mountCountRef.current})`);
    
    return () => {
      console.log('Index page unmounted');
    };
  }, []);
  
  // Smooth scroll handling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (!anchor) return;
      
      const href = anchor.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      
      e.preventDefault();
      
      const targetId = href === '#' ? 'top' : href.slice(1);
      const targetElement = targetId === 'top' 
        ? document.body 
        : document.getElementById(targetId);
      
      if (!targetElement) return;
      
      const offset = targetId === 'top' ? 0 : 80; // Account for fixed header
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);
  
  // Update document title
  useEffect(() => {
    document.title = 'Splivix | AI Integration Consulting';
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ClientLogos />
        <Services />
        <About />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
