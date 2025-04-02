
import { useState, useEffect } from 'react';
import ContactInfo from './contact/ContactInfo';
import ContactForm from './contact/ContactForm';
import SubmissionSuccess from './contact/SubmissionSuccess';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  useEffect(() => {
    // Reset form after showing success message
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);
  
  const handleSubmitSuccess = () => {
    setIsSubmitted(true);
  };
  
  return (
    <section id="contact" className="py-24 relative bg-secondary/50">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background to-transparent"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-primary/30 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-accent/20 blur-3xl"></div>
      </div>
      
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1.5 mb-3 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
            Get in Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Ready to <span className="gradient-text">Transform Your Business</span> with AI?
          </h2>
          <p className="text-foreground/80 text-lg">
            Contact us today to schedule a consultation and discover how we can help you leverage AI to gain a competitive edge.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <ContactInfo />
          </div>
          
          <div className="lg:col-span-3">
            <div className="glass-card p-8 subtle-shadow">
              <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
              
              {isSubmitted ? (
                <SubmissionSuccess />
              ) : (
                <ContactForm onSubmitSuccess={handleSubmitSuccess} />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
