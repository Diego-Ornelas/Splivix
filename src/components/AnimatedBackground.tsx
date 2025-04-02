
import { useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isMobile = useIsMobile();
  const animationFrameIdRef = useRef<number>(0);
  const isInitializedRef = useRef(false);
  
  useEffect(() => {
    console.log('AnimatedBackground mounted');
    
    if (isMobile || !canvasRef.current) {
      console.log('AnimatedBackground: Mobile device or no canvas ref, skipping initialization');
      return;
    }
    
    // Prevent multiple initializations
    if (isInitializedRef.current) {
      console.log('AnimatedBackground: Already initialized, skipping');
      return;
    }
    
    isInitializedRef.current = true;
    console.log('AnimatedBackground: Starting initialization');
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.log('AnimatedBackground: Failed to get canvas context');
      return;
    }
    
    console.log('AnimatedBackground: Setting up canvas');
    
    // Set canvas dimensions once on mount
    const handleResize = () => {
      console.log('AnimatedBackground: Handling resize');
      const scale = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * scale;
      canvas.height = window.innerHeight * scale;
      ctx.scale(scale, scale);
      
      // Apply styles directly on resize to avoid flashing
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    // Particle class with optimized properties
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1.5; // Increased size for better visibility
        this.speedX = Math.random() * 0.5 - 0.25; // Increased speed for more movement
        this.speedY = Math.random() * 0.5 - 0.25; // Increased speed for more movement
        
        // Use more vibrant colors aligned with the site's theme
        const colors = ['#6E80FF', '#9A6FFF', '#F06AFF', '#5665FF', '#8B5CF6', '#D946EF'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Bounce off edges with a buffer to prevent edge artifacts
        if (this.x > canvas.width - 10 || this.x < 10) {
          this.speedX *= -1;
        }
        
        if (this.y > canvas.height - 10 || this.y < 10) {
          this.speedY *= -1;
        }
      }
      
      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.globalAlpha = 0.4; // Increased opacity for better visibility
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Create more particles for better visual effect
    const particleCount = 40; // Doubled the number of particles
    const particles: Particle[] = [];
    
    console.log(`AnimatedBackground: Creating ${particleCount} particles`);
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    // Connect particles with lines with optimized distance check
    const connectParticles = () => {
      const maxDistance = 150; // Increased connection distance
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distanceSquared = dx * dx + dy * dy;
          
          // Use squared distance for performance (avoids Math.sqrt)
          if (distanceSquared < maxDistance * maxDistance) {
            if (!ctx) return;
            const distance = Math.sqrt(distanceSquared);
            ctx.beginPath();
            ctx.strokeStyle = particles[i].color;
            ctx.globalAlpha = 0.2 * (1 - distance / maxDistance); // Increased opacity for lines
            ctx.lineWidth = 0.8; // Slightly thicker lines
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };
    
    let lastTime = 0;
    const fps = 30; // Increased frame rate for smoother animation
    const fpsInterval = 1000 / fps;
    let frameCount = 0;
    
    // Animation loop with frame rate limiting
    const animate = (timestamp: number) => {
      if (!ctx) return;
      
      // Limit frame rate
      const elapsed = timestamp - lastTime;
      if (elapsed < fpsInterval) {
        animationFrameIdRef.current = requestAnimationFrame(animate);
        return;
      }
      
      lastTime = timestamp - (elapsed % fpsInterval);
      
      frameCount++;
      if (frameCount % 30 === 0) {
        console.log(`AnimatedBackground: Animation frame ${frameCount}`);
      }
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      connectParticles();
      animationFrameIdRef.current = requestAnimationFrame(animate);
    };
    
    // Start animation immediately but with lower initial opacity
    console.log('AnimatedBackground: Starting animation loop');
    animationFrameIdRef.current = requestAnimationFrame(animate);
    
    return () => {
      console.log('AnimatedBackground: Cleanup function called');
      cancelAnimationFrame(animationFrameIdRef.current);
      window.removeEventListener('resize', handleResize);
      isInitializedRef.current = false;
    };
  }, [isMobile]);
  
  if (isMobile) return null;
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-80" // Increased opacity from 60 to 80
      data-testid="animated-background"
    />
  );
};

export default AnimatedBackground;
