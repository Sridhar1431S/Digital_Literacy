
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, MessageCircle, Star, Volume2, Type, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const location = useLocation();
  const [fontSize, setFontSize] = useState('text-base');
  const [language, setLanguage] = useState('English');

  const navItems = [
    { name: 'Home', icon: Home, path: '/' },
    { name: 'Tutorials', icon: BookOpen, path: '/tutorials' },
    { name: 'AI Chat', icon: MessageCircle, path: '/chat' },
    { name: 'Feedback', icon: Star, path: '/feedback' },
  ];

  const languages = ['English', 'Hindi', 'Tamil', 'Telugu'];
  const fontSizes = [
    { label: 'Small', value: 'text-sm' },
    { label: 'Medium', value: 'text-base' },
    { label: 'Large', value: 'text-lg' },
    { label: 'Extra Large', value: 'text-xl' },
  ];

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <nav className="bg-card glass-effect sticky top-0 z-50 border-b border-neon-blue/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-neon rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-neon-blue">Digital Literacy Course</span>
          </div>

          {/* Main Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'bg-neon-blue/20 text-neon-blue neon-glow'
                      : 'text-muted-foreground hover:text-neon-blue hover:bg-neon-blue/10'
                  }`}
                  onClick={() => speak(`Navigate to ${item.name}`)}
                >
                  <item.icon className="w-4 h-4" />
                  <span className={fontSize}>{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Accessibility Controls */}
          <div className="flex items-center space-x-2">
            {/* Voice Command */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => speak('Welcome to Digital Literacy Course')}
              className="text-neon-green border-neon-green/50 hover:bg-neon-green/10"
            >
              <Volume2 className="w-4 h-4" />
            </Button>

            {/* Font Size */}
            <select
              value={fontSize}
              onChange={(e) => setFontSize(e.target.value)}
              className="bg-card border border-muted text-sm rounded px-2 py-1"
            >
              {fontSizes.map((size) => (
                <option key={size.value} value={size.value}>
                  {size.label}
                </option>
              ))}
            </select>

            {/* Language Switcher */}
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-card border border-muted text-sm rounded px-2 py-1"
            >
              {languages.map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex justify-around py-2 border-t border-muted">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex flex-col items-center space-y-1 p-2 rounded transition-all ${
                  isActive ? 'text-neon-blue' : 'text-muted-foreground'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-xs">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
