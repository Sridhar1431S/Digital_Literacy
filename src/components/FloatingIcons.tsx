
import { useState } from 'react';
import { MessageCircle, CreditCard, MapPin, Video, Camera, Image, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const FloatingIcons = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const digitalTools = [
    { name: 'WhatsApp', icon: MessageCircle, color: 'text-neon-green', position: 'top-20 left-10' },
    { name: 'Paytm', icon: CreditCard, color: 'text-neon-blue', position: 'top-32 right-16' },
    { name: 'Google Maps', icon: MapPin, color: 'text-neon-purple', position: 'top-48 left-20' },
    { name: 'Video Call', icon: Video, color: 'text-neon-pink', position: 'top-60 right-24' },
    { name: 'Camera', icon: Camera, color: 'text-neon-yellow', position: 'top-72 left-32' },
    { name: 'Photos', icon: Image, color: 'text-neon-orange', position: 'top-80 right-12' },
    { name: 'Gmail', icon: Mail, color: 'text-neon-green', position: 'top-96 left-16' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      <TooltipProvider>
        {digitalTools.map((tool, index) => (
          <Tooltip key={tool.name}>
            <TooltipTrigger asChild>
              <div 
                className={`absolute ${tool.position} pointer-events-auto animate-float hidden lg:block`}
                style={{ 
                  animationDelay: `${index * 0.5}s`,
                  animationDuration: `${3 + index * 0.2}s`
                }}
              >
                <Button
                  variant="outline"
                  size="icon"
                  className={`${tool.color} border-current hover:bg-current hover:bg-opacity-10 glass-effect neon-border w-12 h-12 rounded-full transition-all duration-300 hover:scale-110`}
                  onMouseEnter={() => setHoveredIcon(tool.name)}
                  onMouseLeave={() => setHoveredIcon(null)}
                >
                  <tool.icon className="w-6 h-6" />
                </Button>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p className="font-semibold">{tool.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </div>
  );
};

export default FloatingIcons;
