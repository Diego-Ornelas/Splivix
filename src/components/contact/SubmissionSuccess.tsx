
import { Send } from 'lucide-react';

const SubmissionSuccess = () => {
  return (
    <div className="rounded-lg bg-primary/10 p-6 text-center animate-fade-in">
      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
        <Send className="w-8 h-8 text-primary" />
      </div>
      <h4 className="text-xl font-semibold mb-2">Message Sent!</h4>
      <p className="text-foreground/70">
        Thank you for reaching out. We'll get back to you shortly.
      </p>
    </div>
  );
};

export default SubmissionSuccess;
