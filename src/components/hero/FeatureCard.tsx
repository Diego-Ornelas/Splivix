import { ChartBar, Brain, Zap } from 'lucide-react';
import { DesignStyle } from '@/utils/designStyles';

interface FeatureCardProps {
  designStyle: DesignStyle;
}

const FeatureCard = ({ designStyle }: FeatureCardProps) => {
  // Card style based on selected design
  const getCardStyle = () => {
    switch (designStyle) {
      case 'minimal':
        return "bg-[#2a3142] border-l-4 border-primary rounded-lg p-8 max-w-md mx-auto";
      case 'futuristic':
        return "bg-[#1e2638] border-t-4 border-accent rounded-sm p-8 max-w-md mx-auto";
      default:
        return "glass-card p-8 max-w-md mx-auto subtle-shadow";
    }
  };
  
  // Icon container style based on selected design
  const getIconContainerStyle = (isAccent: boolean = false) => {
    switch (designStyle) {
      case 'minimal':
        return `w-10 h-10 rounded-full flex items-center justify-center ${isAccent ? 'bg-[#413a5a]' : 'bg-[#334166]'}`;
      case 'futuristic':
        return `w-12 h-12 ${isAccent ? 'bg-[#36294d]' : 'bg-[#233662]'} flex items-center justify-center clip-path-polygon`;
      default:
        return `w-12 h-12 rounded-lg ${isAccent ? 'bg-accent/10' : 'bg-primary/10'} flex items-center justify-center`;
    }
  };
  
  // Icon style based on selected design
  const getIconStyle = () => {
    if (designStyle === 'futuristic') {
      return "w-6 h-6";
    }
    return "w-6 h-6";
  };

  // Text header style based on selected design
  const getHeaderStyle = () => {
    switch (designStyle) {
      case 'minimal':
        return "text-xl font-semibold border-b border-primary/20 pb-2";
      case 'futuristic':
        return "text-xl font-semibold text-[#e2e8f0] tracking-wide";
      default:
        return "text-xl font-semibold";
    }
  };

  return (
    <div className="relative">
      {/* Background blur/glow only for default design */}
      {designStyle === 'default' && (
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl -z-10 animate-pulse-subtle"></div>
      )}
      <div className={getCardStyle()}>
        <div className="flex flex-col gap-6">
          <div className="space-y-2">
            <div className={getIconContainerStyle()}>
              <ChartBar className={`${getIconStyle()} ${designStyle === 'minimal' ? 'text-[#8ba4ff]' : designStyle === 'futuristic' ? 'text-[#7e96ff]' : 'text-primary'}`} />
            </div>
            <h3 className={getHeaderStyle()}>Strategic AI Consulting</h3>
            <p className="text-foreground/70 text-sm">Expert guidance on implementing AI solutions that align with your business objectives.</p>
          </div>
          
          <div className="space-y-2">
            <div className={getIconContainerStyle(true)}>
              <Brain className={`${getIconStyle()} ${designStyle === 'minimal' ? 'text-[#b292ff]' : designStyle === 'futuristic' ? 'text-[#ad8fff]' : 'text-accent'}`} />
            </div>
            <h3 className={getHeaderStyle()}>Custom AI Solutions</h3>
            <p className="text-foreground/70 text-sm">Tailored AI integrations designed specifically for your unique business challenges.</p>
          </div>
          
          <div className="space-y-2">
            <div className={getIconContainerStyle()}>
              <Zap className={`${getIconStyle()} ${designStyle === 'minimal' ? 'text-[#8ba4ff]' : designStyle === 'futuristic' ? 'text-[#7e96ff]' : 'text-primary'}`} />
            </div>
            <h3 className={getHeaderStyle()}>AI Implementation</h3>
            <p className="text-foreground/70 text-sm">Seamless integration of AI technologies within your existing technology stack.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
