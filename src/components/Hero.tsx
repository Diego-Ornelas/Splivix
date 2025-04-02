import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import HeroContent from './hero/HeroContent';
import FeatureCard from './hero/FeatureCard';
import { DesignStyle, getCookie, setCookie } from '@/utils/designStyles';

// Lazy load the AnimatedBackground component
const LazyAnimatedBackground = lazy(() => {
  console.log('Hero: Lazy loading AnimatedBackground');
  return import('./AnimatedBackground');
});

const Hero = () => {
  const mountedRef = useRef(false);
  const [designStyle, setDesignStyle] = useState<DesignStyle>('minimal');
  
  // Load design style from cookie on mount
  useEffect(() => {
    console.log('Hero component mounted');
    // Always use 'minimal' design
    setDesignStyle('minimal');
    
    return () => {
      console.log('Hero component unmounted');
    };
  }, []);
  
  useEffect(() => {
    if (!mountedRef.current) {
      console.log('Hero: First render');
      mountedRef.current = true;
    }
  }, []);
  
  // Save design style to cookie when it changes
  useEffect(() => {
    setCookie('designStyle', designStyle, 30);
  }, [designStyle]);
  
  return (
    <section className="relative min-h-[90vh] pt-20 md:pt-24 pb-10 md:pb-16 flex items-center overflow-hidden">
      {/* Animated Background with Suspense */}
      <Suspense fallback={null}>
        <LazyAnimatedBackground key="animated-background" />
      </Suspense>
      
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-48 md:w-72 h-48 md:h-72 rounded-full bg-primary/30 blur-3xl animate-pulse-subtle"></div>
        <div className="absolute bottom-1/3 right-1/4 w-56 md:w-80 h-56 md:h-80 rounded-full bg-accent/20 blur-3xl animate-pulse-subtle" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="absolute top-0 right-0 h-screen w-1/2 bg-gradient-to-bl from-background/10 to-transparent -z-10"></div>
      
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-6 items-center">
          {/* Hero Content Section */}
          <HeroContent />
          
          {/* Card Section */}
          <div className="lg:pl-6 flex justify-center lg:justify-end animate-fade-in mt-4 md:mt-0">
            <FeatureCard designStyle={designStyle} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
