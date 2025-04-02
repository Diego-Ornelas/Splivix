import { Bug } from 'lucide-react';
import { ClientShowcaseStyle } from '@/utils/designStyles';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';

interface ClientShowcaseSwitcherProps {
  currentDesign: ClientShowcaseStyle;
  onDesignChange: (style: ClientShowcaseStyle) => void;
}

const ClientShowcaseSwitcher = ({ currentDesign, onDesignChange }: ClientShowcaseSwitcherProps) => {
  return (
    <div className="fixed bottom-4 left-4 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-1 px-3 py-2 bg-secondary/80 backdrop-blur-sm hover:bg-secondary text-secondary-foreground rounded-lg text-sm">
          <Bug className="w-4 h-4 mr-1" />
          Client Showcase Style
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem onClick={() => onDesignChange('default')} className={currentDesign === 'default' ? 'bg-accent/20' : ''}>
            Default Carousel
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onDesignChange('minimal')} className={currentDesign === 'minimal' ? 'bg-accent/20' : ''}>
            Minimal & Sleek
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onDesignChange('grid')} className={currentDesign === 'grid' ? 'bg-accent/20' : ''}>
            Grid Layout
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onDesignChange('interactive')} className={currentDesign === 'interactive' ? 'bg-accent/20' : ''}>
            Interactive Spotlight
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ClientShowcaseSwitcher; 