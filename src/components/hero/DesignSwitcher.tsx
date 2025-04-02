import { Bug } from 'lucide-react';
import { DesignStyle } from '@/utils/designStyles';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';

interface DesignSwitcherProps {
  currentDesign: DesignStyle;
  onDesignChange: (style: DesignStyle) => void;
}

const DesignSwitcher = ({ currentDesign, onDesignChange }: DesignSwitcherProps) => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-1 px-3 py-2 bg-secondary/80 backdrop-blur-sm hover:bg-secondary text-secondary-foreground rounded-lg text-sm">
          <Bug className="w-4 h-4 mr-1" />
          Debug Design
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem 
            onClick={() => onDesignChange('default')} 
            className={currentDesign === 'default' ? 'bg-accent/20' : ''}
          >
            Default Design
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={() => onDesignChange('minimal')} 
            className={currentDesign === 'minimal' ? 'bg-accent/10 text-muted-foreground' : 'text-muted-foreground hover:bg-accent/5'}
          >
            Minimal Design
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={() => onDesignChange('futuristic')} 
            className={currentDesign === 'futuristic' ? 'bg-accent/10 text-muted-foreground' : 'text-muted-foreground hover:bg-accent/5'}
          >
            Futuristic Design
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DesignSwitcher;
