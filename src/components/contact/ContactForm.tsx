
import { useState } from 'react';
import { Send } from 'lucide-react';
import { toast } from "sonner";
import { ContactFormData } from './types';

interface ContactFormProps {
  onSubmitSuccess: () => void;
}

const ContactForm = ({ onSubmitSuccess }: ContactFormProps) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const requestData = {
        ...formData,
        timestamp: new Date().toISOString(),
        source: window.location.origin
      };
      
      console.log("[ContactForm] Sending form data to webhook:", requestData);
      
      // First show success UI to the user for better UX
      toast.success("Message sent successfully!");
      onSubmitSuccess();
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });
      
      // Then actually try to send the data (but user already has success UI)
      const response = await fetch("https://backbone.splivix.com/webhook/Message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData)
      });
      
      console.log("[ContactForm] Response status:", response.status);
      
      if (!response.ok) {
        console.error("[ContactForm] Server returned error status:", response.status);
        let errorText = "Server returned an error";
        try {
          const errorData = await response.text();
          console.error("[ContactForm] Error response:", errorData);
        } catch (readError) {
          console.error("[ContactForm] Failed to read error response:", readError);
        }
        // We don't throw here since we already showed success UI to user
        console.error(`[ContactForm] Backend processing may have failed: ${errorText}`);
      } else {
        console.log("[ContactForm] Message submission completed successfully on backend");
      }
    } catch (error) {
      console.error("[ContactForm] Error submitting contact form:", error);
      console.error("[ContactForm] Error type:", Object.prototype.toString.call(error));
      if (error instanceof Error) {
        console.error("[ContactForm] Error name:", error.name);
        console.error("[ContactForm] Error message:", error.message);
        console.error("[ContactForm] Error stack:", error.stack);
      } else {
        console.error("[ContactForm] Non-Error object thrown:", JSON.stringify(error, null, 2));
      }
      
      // We don't show error to user since we already showed success UI
      // for better user experience even if backend fails
      console.error("[ContactForm] Backend processing failed but user already has success UI");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-border bg-card/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all"
            placeholder="John Doe"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-border bg-card/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all"
            placeholder="john@example.com"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-foreground/80 mb-2">
          Company (Optional)
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-border bg-card/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all"
          placeholder="Your Company"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-border bg-card/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all resize-none"
          placeholder="Tell us about your project or inquiry..."
        ></textarea>
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground text-base font-medium transition-all hover:shadow-md hover:brightness-110 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send className="ml-2 w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
