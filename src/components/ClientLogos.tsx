import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { cn } from '@/lib/utils'
import { ClientShowcaseStyle, getCookie, setCookie } from '@/utils/designStyles'
import ClientShowcaseSwitcher from './ClientShowcaseSwitcher'

// Function to dynamically load client logos
const useClientLogos = () => {
  const [logos, setLogos] = useState<{ src: string; alt: string }[]>([
    { src: '/images/clients/spurs-lane_sanitized.png', alt: 'Spurs Lane Medical Associates Logo' },
    { src: '/images/clients/OnHealing_sanitized.png', alt: 'OnHealing Therapy Logo' },
    { src: '/images/clients/premier_sanitized.png', alt: 'Premier Logo' }
  ]);

  useEffect(() => {
    // In a real implementation, you would fetch the list of images from the server
    // For now, we'll simulate with the ones we know exist
    const fetchLogos = async () => {
      try {
        // This would typically be an API call to get all logo files
        // For this example, we're simply using the known files
        const clientDir = '/images/clients/';
        const knownLogos = [
          { file: 'spurs-lane_sanitized.png', name: 'Spurs Lane Medical Associates' },
          { file: 'OnHealing_sanitized.png', name: 'OnHealing Therapy' },
          { file: 'premier_sanitized.png', name: 'Premier' }
        ];
        
        const logoData = knownLogos.map(logo => ({
          src: `${clientDir}${logo.file}`,
          alt: `${logo.name} Logo`
        }));
        
        setLogos(logoData);
      } catch (error) {
        console.error('Error loading client logos:', error);
      }
    };

    fetchLogos();
  }, []);

  return logos;
};

const ClientLogos = () => {
  const logos = useClientLogos();
  const [designStyle, setDesignStyle] = useState<ClientShowcaseStyle>('default');
  
  // Basic carousel setup
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    skipSnaps: false,
    dragFree: true
  });

  // Load design style from cookie on mount
  useEffect(() => {
    const savedStyle = getCookie('clientShowcaseStyle') as ClientShowcaseStyle;
    if (savedStyle && ['default', 'minimal', 'grid', 'interactive'].includes(savedStyle)) {
      setDesignStyle(savedStyle);
    }
  }, []);

  // Save design style to cookie when it changes
  useEffect(() => {
    setCookie('clientShowcaseStyle', designStyle, 30);
  }, [designStyle]);

  // Handle design style change
  const handleDesignChange = (style: ClientShowcaseStyle) => {
    setDesignStyle(style);
  };

  const autoplay = useCallback(() => {
    if (!emblaApi || designStyle !== 'default') return;
    
    let intervalId = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);
    
    return () => clearInterval(intervalId);
  }, [emblaApi, designStyle]);
  
  useEffect(() => {
    const cleanup = autoplay();
    return () => {
      if (cleanup) cleanup();
    };
  }, [autoplay]);

  // Calculate flex sizing based on number of logos
  const getFlexBasis = useCallback(() => {
    const count = logos.length;
    if (count <= 2) return 'flex-[0_0_50%] md:flex-[0_0_50%]';
    if (count <= 3) return 'flex-[0_0_33.333%] md:flex-[0_0_33.333%]';
    if (count <= 4) return 'flex-[0_0_33.333%] md:flex-[0_0_25%]';
    return 'flex-[0_0_33.333%] md:flex-[0_0_20%]';
  }, [logos.length]);

  // Render default carousel design
  const renderDefaultDesign = () => (
    <div className="glass-card p-5 subtle-shadow">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex items-center py-2">
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className={cn(
                getFlexBasis(),
                "min-w-0 px-3",
                "flex items-center justify-center",
                "animate-fade-in"
              )}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="p-4 bg-background/60 backdrop-blur-sm rounded-xl h-28 w-full flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="max-h-20 max-w-full object-contain transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
  // Render minimal design
  const renderMinimalDesign = () => (
    <div className="flex justify-center items-center gap-10 py-5">
      {logos.map((logo, index) => (
        <div 
          key={index} 
          className="group flex-shrink-0 animate-fade-in opacity-60 hover:opacity-100 transition-opacity duration-300"
          style={{ animationDelay: `${0.1 + index * 0.1}s` }}
        >
          <img 
            src={logo.src} 
            alt={logo.alt} 
            className="h-14 max-w-[160px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
          />
        </div>
      ))}
    </div>
  );
  
  // Render grid design
  const renderGridDesign = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {logos.map((logo, index) => (
        <div 
          key={index} 
          className="bg-accent/5 border border-border rounded-lg p-5 flex flex-col items-center justify-center text-center animate-fade-in hover:shadow-md transition-shadow duration-300"
          style={{ animationDelay: `${0.1 + index * 0.1}s` }}
        >
          <img 
            src={logo.src} 
            alt={logo.alt} 
            className="h-16 max-w-full object-contain mb-3"
          />
          <p className="text-xs font-medium text-foreground/80">
            {logo.alt.replace(' Logo', '')}
          </p>
        </div>
      ))}
    </div>
  );
  
  // Render interactive spotlight design
  const renderInteractiveDesign = () => (
    <div className="relative py-6 px-4 overflow-hidden bg-gradient-to-br from-background/10 to-accent/5 rounded-xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),transparent_65%)]"></div>
      <div className="flex flex-row items-center justify-center gap-8 md:gap-12">
        {logos.map((logo, index) => (
          <div 
            key={index} 
            className="group relative animate-fade-in"
            style={{ animationDelay: `${0.1 + index * 0.1}s` }}
          >
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary/30 via-accent/20 to-primary/30 opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
            <div className="relative bg-background/80 backdrop-blur-sm rounded-lg p-5 flex items-center justify-center h-28 w-[180px] transition-all duration-300 group-hover:scale-105">
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="max-h-16 max-w-[150px] object-contain transition-all duration-300"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Render appropriate design based on selected style
  const renderClientShowcase = () => {
    switch(designStyle) {
      case 'minimal':
        return renderMinimalDesign();
      case 'grid':
        return renderGridDesign();
      case 'interactive':
        return renderInteractiveDesign();
      case 'default':
      default:
        return renderDefaultDesign();
    }
  };

  return (
    <section className="py-12 relative bg-secondary/50">
      {/* Background Elements - matching Contact section */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background to-transparent"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-primary/30 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-accent/20 blur-3xl"></div>
      </div>
      
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center px-3 py-1.5 mb-2 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
            Our Clients
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-balance">
            Trusted by <span className="gradient-text">Leading Organizations</span>
          </h2>
          <p className="text-foreground/80">
            We're proud to work with organizations that are reshaping their industries with AI.
          </p>
        </div>
        
        {renderClientShowcase()}
      </div>
    </section>
  )
}

export default ClientLogos 