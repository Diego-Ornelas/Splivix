import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TeamMemberProps {
  name: string;
  title: string;
  education: string[];
  image?: string;
  linkedinUrl?: string;
  delay?: number;
}

const TeamMember = ({
  name,
  title,
  education,
  image,
  linkedinUrl,
  delay = 0,
}: TeamMemberProps) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <Card 
      className="glass-card overflow-hidden transition-all hover:shadow-lg"
    >
      <div className="p-6 flex flex-col items-center text-center">
        <Avatar className="h-24 w-24 mb-4 border-2 border-primary/20">
          {image ? (
            <AvatarImage src={image} alt={name} />
          ) : (
            <AvatarFallback className="text-xl">{initials}</AvatarFallback>
          )}
        </Avatar>
        
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-foreground/70 mb-4">{title}</p>

        <div className="flex flex-col gap-2 mb-4 w-full max-w-[85%] mx-auto">
          {education.map((edu, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="font-normal text-xs bg-primary/10 text-primary-foreground/90 border border-primary/20 hover:bg-primary/20 w-full py-1 justify-center"
            >
              {edu}
            </Badge>
          ))}
        </div>

        <div className="flex gap-3 mt-auto">
          {linkedinUrl && (
            <a 
              href={linkedinUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
            </a>
          )}
        </div>
      </div>
    </Card>
  );
};

export default TeamMember;
