
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="glass-card p-8 h-full subtle-shadow">
      <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <div className="rounded-lg w-10 h-10 flex items-center justify-center mr-4 bg-primary/10 flex-shrink-0">
            <Mail className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-sm text-foreground/70 mb-1">Email</p>
            <a href="mailto:Contact@Splivix.com" className="text-foreground hover:text-primary transition-colors">
              Contact@Splivix.com
            </a>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="rounded-lg w-10 h-10 flex items-center justify-center mr-4 bg-primary/10 flex-shrink-0">
            <Phone className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-sm text-foreground/70 mb-1">Phone</p>
            <a href="tel:+19564720442" className="text-foreground hover:text-primary transition-colors">
              (956) 472-0442
            </a>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="rounded-lg w-10 h-10 flex items-center justify-center mr-4 bg-primary/10 flex-shrink-0">
            <MapPin className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-sm text-foreground/70 mb-1">Location</p>
            <p className="text-foreground">
              San Antonio, TX
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 pt-8 border-t border-border">
        <h4 className="text-lg font-medium mb-4">Let's Connect</h4>
        <p className="text-foreground/70 mb-4">
          Schedule a free 30-minute consultation to discuss your AI needs and explore how we can help.
        </p>
        <a 
          href="#schedule" 
          className="inline-block px-6 py-3 rounded-lg bg-primary text-primary-foreground text-base font-medium transition-all hover:shadow-md hover:brightness-110"
        >
          Book a Consultation
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
