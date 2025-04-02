import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const HeroContent = () => {
  return (
    <div className="lg:pr-6 max-w-2xl mx-auto lg:mx-0">
      <div className="inline-flex items-center px-3 py-1.5 mb-4 md:mb-6 text-xs font-medium rounded-full bg-secondary text-secondary-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
        AI Integration for Businesses of All Sizes
      </div>
      
      <h1 className={cn(
        "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-4 md:mb-6",
        "animate-fade-in text-balance"
      )} style={{ animationDelay: '0.4s' }}>
        Transform Your Business With <span className="gradient-text">AI Integration</span>
      </h1>
      
      <p className="text-base md:text-lg text-foreground/80 mb-6 md:mb-8 leading-relaxed max-w-xl animate-fade-in" style={{ animationDelay: '0.6s' }}>
        We help forward-thinking companies of all sizes harness the power of artificial intelligence to drive innovation, optimize operations, and create sustainable competitive advantages.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-3 md:gap-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
        <a 
          href="#contact" 
          className="px-5 md:px-6 py-2.5 md:py-3 rounded-lg bg-primary text-primary-foreground text-sm md:text-base font-medium transition-all hover:shadow-md hover:brightness-110 flex items-center justify-center"
        >
          Schedule a Consultation
          <ArrowRight size={16} className="ml-2" />
        </a>
        <a 
          href="#services" 
          className="px-5 md:px-6 py-2.5 md:py-3 rounded-lg bg-secondary text-secondary-foreground text-sm md:text-base font-medium transition-all hover:shadow-sm flex items-center justify-center"
        >
          Explore Our Services
        </a>
      </div>
    </div>
  );
};

export default HeroContent;
