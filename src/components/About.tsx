
import { CheckCircle } from 'lucide-react';

const About = () => {
  const expertise = [
    "AI Strategy & ROI Planning",
    "Enterprise AI Integration",
    "Predictive Analytics & Business Intelligence",
    "Process Automation & Optimization",
    "Custom ML Solution Development",
    "Data Security & Compliance"
  ];

  return (
    <section id="about" className="py-24 relative bg-secondary/50">
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-primary/10 to-transparent"></div>
        <div className="absolute left-0 bottom-0 h-1/2 w-1/2 bg-gradient-to-t from-accent/10 to-transparent"></div>
      </div>
      
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl -z-10 animate-pulse-subtle"></div>
              <div className="glass-card p-8 subtle-shadow">
                <h3 className="text-2xl font-semibold mb-6">Technical Expertise</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {expertise.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-foreground/90">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-8 border-t border-border">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                    <div>
                      <p className="text-3xl font-bold gradient-text">100%</p>
                      <p className="text-foreground/70 text-sm">On-Time Delivery Rate</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold gradient-text">40+</p>
                      <p className="text-foreground/70 text-sm">Projects Completed</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold gradient-text">25+</p>
                      <p className="text-foreground/70 text-sm">Satisfied Clients</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center px-3 py-1.5 mb-3 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
              About Splivix
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              AI Solutions for Companies of <span className="gradient-text">All Sizes</span>
            </h2>
            <p className="text-foreground/80 text-lg mb-6">
              Splivix specializes in translating complex AI capabilities into tangible business outcomes for organizations from startups to enterprises. We help businesses of all sizes leverage cutting-edge technologies to reduce operational costs, increase efficiency, and create new revenue streams.
            </p>
            <p className="text-foreground/80 text-lg mb-6">
              Our approach combines deep technical expertise with strategic business acumen, ensuring AI investments deliver verifiable returns regardless of your company's scale. We implement right-sized solutions that enhance decision-making, automate processes, and provide competitive advantages through data-driven insights.
            </p>
            <p className="text-foreground/80 text-lg">
              From initial AI strategy to full-scale implementation, we provide end-to-end services tailored to your specific industry challenges, business objectives, and existing technological infrastructure—with flexible approaches that work for businesses at every stage of growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
