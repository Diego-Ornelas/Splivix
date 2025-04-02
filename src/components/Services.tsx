import { Code, Lightbulb, Database, Workflow, LineChart, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  delay = 0 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
  delay?: number;
}) => {
  return (
    <div 
      className="glass-card p-5 sm:p-6 h-full transition-all hover:shadow-lg hover:translate-y-[-5px] animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="rounded-lg w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-3 sm:mb-4 bg-primary/10">
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
      </div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{title}</h3>
      <p className="text-sm sm:text-base text-foreground/70">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: Lightbulb,
      title: "AI Strategy Development",
      description: "Create a roadmap for AI adoption that aligns with your business goals and maximizes ROI."
    },
    {
      icon: Code,
      title: "Custom AI Solutions",
      description: "Develop tailored AI applications that address your specific business challenges and opportunities."
    },
    {
      icon: Database,
      title: "Data Engineering & Analytics",
      description: "Build robust data pipelines and analytics platforms to fuel your AI initiatives."
    },
    {
      icon: Workflow,
      title: "Business Process Automation",
      description: "Streamline operations and reduce costs through intelligent automation of routine tasks."
    },
    {
      icon: LineChart,
      title: "AI-Driven Decision Making",
      description: "Leverage predictive analytics and machine learning to enhance decision-making processes."
    },
    {
      icon: Users,
      title: "AI Training & Enablement",
      description: "Empower your team with the knowledge and skills needed to work effectively with AI technologies."
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute top-1/3 right-1/4 w-48 md:w-64 h-48 md:h-64 rounded-full bg-primary/30 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-56 md:w-72 h-56 md:h-72 rounded-full bg-accent/20 blur-3xl"></div>
      </div>
      
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <div className="inline-flex items-center px-3 py-1.5 mb-3 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
            Our Services
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-balance">
            Comprehensive AI Solutions for <span className="gradient-text">Modern Businesses</span>
          </h2>
          <p className="text-base md:text-lg text-foreground/80">
            We provide end-to-end services to help your business adopt and leverage AI technologies effectively.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.title} 
              icon={service.icon} 
              title={service.title} 
              description={service.description} 
              delay={0.1 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
