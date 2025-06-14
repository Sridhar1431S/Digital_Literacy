
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, MessageCircle, Star, Volume2, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/contexts/LanguageContext';

const Navigation = () => {
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const [fontSize, setFontSize] = useState('text-base');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: t('nav.home'), icon: Home, path: '/' },
    { name: t('nav.tutorials'), icon: BookOpen, path: '/tutorials' },
    { name: t('nav.chat'), icon: MessageCircle, path: '/chat' },
    { name: t('nav.feedback'), icon: Star, path: '/feedback' },
  ];

  const languages = ['English', 'Hindi', 'Tamil', 'Telugu'] as const;
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
        <div className="flex items-center justify-between py-3 sm:py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center overflow-hidden">
              <img 
                src="/lovable-uploads/ad601970-82fa-4aa1-bc40-bf7b749e3ed8.png" 
                alt="Digital Literacy Course"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-lg sm:text-xl font-bold text-neon-blue hidden sm:block">Digital Literacy Course</span>
            <span className="text-sm font-bold text-neon-blue sm:hidden">DLC</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 xl:px-4 py-2 rounded-lg transition-all duration-300 ${
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

          {/* Desktop Accessibility Controls */}
          <div className="hidden md:flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => speak('Welcome to Digital Literacy Course')}
              className="text-neon-green border-neon-green/50 hover:bg-neon-green/10"
            >
              <Volume2 className="w-4 h-4" />
            </Button>

            <Select value={fontSize} onValueChange={setFontSize}>
              <SelectTrigger className="w-24 text-xs sm:text-sm">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {fontSizes.map((size) => (
                  <SelectItem key={size.value} value={size.value}>
                    {size.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={language} onValueChange={(value) => setLanguage(value as typeof language)}>
              <SelectTrigger className="w-20 text-xs sm:text-sm">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {languages.map((lang) => (
                  <SelectItem key={lang} value={lang}>
                    {lang}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            size="sm"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-muted mt-4 pt-4">
            <div className="flex flex-col space-y-2 mb-4">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`flex items-center space-x-2 p-3 rounded-lg transition-all ${
                      isActive ? 'bg-neon-blue/20 text-neon-blue' : 'text-muted-foreground hover:text-neon-blue hover:bg-neon-blue/10'
                    }`}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      speak(`Navigate to ${item.name}`);
                    }}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className={fontSize}>{item.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* Mobile Accessibility Controls */}
            <div className="flex flex-col space-y-3 pt-4 border-t border-muted">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Voice:</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => speak('Welcome to Digital Literacy Course')}
                  className="text-neon-green border-neon-green/50 hover:bg-neon-green/10"
                >
                  <Volume2 className="w-4 h-4" />
                </Button>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Font Size:</span>
                <Select value={fontSize} onValueChange={setFontSize}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {fontSizes.map((size) => (
                      <SelectItem key={size.value} value={size.value}>
                        {size.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Language:</span>
                <Select value={language} onValueChange={(value) => setLanguage(value as typeof language)}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((lang) => (
                      <SelectItem key={lang} value={lang}>
                        {lang}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
