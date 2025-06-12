
import { useState } from 'react';
import { MessageCircle, CreditCard, MapPin, Video, Camera, Image, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const FloatingIcons = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const digitalTools = [
    { 
      name: 'WhatsApp', 
      icon: MessageCircle, 
      color: 'text-green-400', 
      position: 'top-20 left-10',
      image: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?w=60&h=60&fit=crop'
    },
    { 
      name: 'Paytm', 
      icon: CreditCard, 
      color: 'text-blue-400', 
      position: 'top-32 right-16',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=60&h=60&fit=crop'
    },
    { 
      name: 'Google Maps', 
      icon: MapPin, 
      color: 'text-red-400', 
      position: 'top-48 left-20',
      image: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=60&h=60&fit=crop'
    },
    { 
      name: 'Video Call', 
      icon: Video, 
      color: 'text-purple-400', 
      position: 'top-60 right-24',
      image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=60&h=60&fit=crop'
    },
    { 
      name: 'Camera', 
      icon: Camera, 
      color: 'text-yellow-400', 
      position: 'top-72 left-32',
      image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=60&h=60&fit=crop'
    },
    { 
      name: 'Photos', 
      icon: Image, 
      color: 'text-orange-400', 
      position: 'top-80 right-12',
      image: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?w=60&h=60&fit=crop'
    },
    { 
      name: 'Gmail', 
      icon: Mail, 
      color: 'text-red-500', 
      position: 'top-96 left-16',
      image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=60&h=60&fit=crop'
    },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
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
                  className={`${tool.color} border-current hover:bg-current hover:bg-opacity-10 glass-effect neon-border w-16 h-16 rounded-full transition-all duration-300 hover:scale-110 relative overflow-hidden`}
                  onMouseEnter={() => setHoveredIcon(tool.name)}
                  onMouseLeave={() => setHoveredIcon(null)}
                >
                  <img 
                    src={tool.image} 
                    alt={tool.name}
                    className="absolute inset-0 w-full h-full object-cover rounded-full opacity-50"
                  />
                  <tool.icon className="w-6 h-6 relative z-10" />
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
