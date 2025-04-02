
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Github } from 'lucide-react';
import { toast } from "sonner";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const requestData = {
        email,
        timestamp: new Date().toISOString(),
        source: window.location.origin
      };
      
      console.log("[Footer] Sending subscription data:", requestData);
      console.log("[Footer] Target URL:", "https://backbone.splivix.com/webhook-test/Subscribe");
      
      // Send form data to the specified webhook with no-cors mode
      const fetchOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
        mode: 'no-cors' as RequestMode
      };
      
      console.log("[Footer] Fetch options:", fetchOptions);
      
      try {
        console.log("[Footer] Starting fetch request...");
        const response = await fetch("https://backbone.splivix.com/webhook-test/Subscribe", fetchOptions);
        console.log("[Footer] Fetch response received:", response);
        
        // When using no-cors, we can't check response.ok
        // so we'll assume success if no error is thrown
        console.log("[Footer] Subscription completed successfully");
        toast.success("Successfully subscribed to newsletter!");
        setEmail('');
      } catch (fetchError) {
        console.error("[Footer] Fetch error details:", {
          name: fetchError.name,
          message: fetchError.message,
          stack: fetchError.stack,
          error: fetchError
        });
        throw fetchError;
      }
    } catch (error) {
      console.error("[Footer] Error submitting subscription:", error);
      console.error("[Footer] Error type:", Object.prototype.toString.call(error));
      if (error instanceof Error) {
        console.error("[Footer] Error name:", error.name);
        console.error("[Footer] Error message:", error.message);
        console.error("[Footer] Error stack:", error.stack);
      } else {
        console.error("[Footer] Non-Error object thrown:", JSON.stringify(error, null, 2));
      }
      toast.error("Failed to subscribe. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="relative bg-secondary pt-16 pb-8">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-1">
            <Link to="/" className="text-2xl font-bold tracking-tight gradient-text inline-block mb-4">
              Splivix
            </Link>
            <p className="text-foreground/70 mb-6 max-w-xs">
              Transforming businesses through strategic AI integration and implementation.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/70 hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-foreground/70 hover:text-primary transition-colors">
                  AI Strategy Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-foreground/70 hover:text-primary transition-colors">
                  Custom AI Solutions
                </a>
              </li>
              <li>
                <a href="#services" className="text-foreground/70 hover:text-primary transition-colors">
                  Data Engineering
                </a>
              </li>
              <li>
                <a href="#services" className="text-foreground/70 hover:text-primary transition-colors">
                  Process Automation
                </a>
              </li>
              <li>
                <a href="#services" className="text-foreground/70 hover:text-primary transition-colors">
                  AI Training & Enablement
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#" 
                  onClick={scrollToTop} 
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-foreground/70 hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-foreground/70 hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#team" className="text-foreground/70 hover:text-primary transition-colors">
                  Team
                </a>
              </li>
              <li>
                <a href="#contact" className="text-foreground/70 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className="text-foreground/70 mb-4">
              Join our newsletter for the latest insights on AI and business transformation.
            </p>
            <form className="flex" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-2 rounded-l-lg border border-border bg-card/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-r-lg hover:brightness-110 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                aria-label="Subscribe"
              >
                {isSubmitting ? (
                  <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <ArrowRight size={16} />
                )}
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/30 text-sm text-foreground/60 flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} Splivix. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link 
              to="/legal" 
              className="hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/legal" 
              className="hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of Service
            </Link>
            <Link 
              to="/legal" 
              className="hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
