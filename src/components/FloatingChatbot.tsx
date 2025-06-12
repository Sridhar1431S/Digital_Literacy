
import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const FloatingChatbot = () => {
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

  const handleChatClick = () => {
    navigate('/chat');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-float">
      <div className="relative group">
        <Button
          onClick={handleChatClick}
          className="bg-neon-purple text-white hover:bg-neon-purple/90 neon-glow w-16 h-16 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
          size="icon"
        >
          <MessageCircle className="w-8 h-8" />
        </Button>
        
        {/* Speech bubble tooltip */}
        <div className="absolute bottom-20 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-card glass-effect neon-border border-neon-purple/30 rounded-lg p-3 text-sm whitespace-nowrap">
            <p className="text-neon-purple font-semibold">Hi! I'm DigiBuddy 🤖</p>
            <p className="text-muted-foreground">Click to chat with me!</p>
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-neon-purple/30"></div>
          </div>
        </div>
        
        {/* Close button */}
        <Button
          onClick={() => setIsVisible(false)}
          variant="outline"
          size="sm"
          className="absolute -top-2 -right-2 w-6 h-6 rounded-full border-neon-purple/50 text-neon-purple hover:bg-neon-purple/10"
        >
          <X className="w-3 h-3" />
        </Button>
      </div>
    </div>
  );
};

export default FloatingChatbot;
