
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, MessageCircle, Star, PlayCircle, Users, Heart, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import FloatingIcons from '@/components/FloatingIcons';
import FloatingChatbot from '@/components/FloatingChatbot';

const Home = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: BookOpen,
      title: t('home.easyTutorials'),
      description: 'Step-by-step video guides for WhatsApp, Paytm, Google Maps & more',
      color: 'text-neon-blue',
      link: '/tutorials'
    },
    {
      icon: MessageCircle,
      title: t('home.aiAssistant'),
      description: 'Chat with DigiBuddy for instant help with any digital question',
      color: 'text-neon-purple',
      link: '/chat'
    },
    {
      icon: Star,
      title: t('home.shareFeedback'),
      description: 'Help us improve by sharing your learning experience',
      color: 'text-neon-yellow',
      link: '/feedback'
    }
  ];

  const testimonials = [
    {
      name: 'Meera Aunty',
      age: 65,
      text: 'Now I can video call my grandchildren anytime!',
      image: 'photo-1649972904349-6e44c42644a7'
    },
    {
      name: 'Rajesh Uncle',
      age: 58,
      text: 'Paytm payments are so easy now. Thank you!',
      image: 'photo-1488590528505-98d2b5aba04b'
    }
  ];

  return (
    <div className="min-h-screen relative">
      <FloatingIcons />
      <FloatingChatbot />
      
      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-warm opacity-10"></div>
        <div className="container mx-auto relative z-10">
          <div className="animate-float">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent leading-tight">
              {t('home.title')}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto px-4">
              {t('home.subtitle')}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
            <Button 
              size="lg" 
              className="bg-neon-blue text-black hover:bg-neon-blue/90 neon-glow text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
              asChild
            >
              <Link to="/tutorials">
                <PlayCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                {t('home.startLearning')}
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-neon-purple text-neon-purple hover:bg-neon-purple/10 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
              asChild
            >
              <Link to="/chat">
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                {t('home.chatWithDigiBuddy')}
              </Link>
            </Button>
          </div>

          {/* Digital Literacy Program Link */}
          <div className="mb-8 sm:mb-12 px-4">
            <a 
              href="https://collegetips.in/dlc/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block w-full max-w-md mx-auto"
            >
              <Card className="glass-effect neon-border border-neon-green/30 overflow-hidden group hover:scale-105 transition-transform duration-300 cursor-pointer">
                <CardContent className="p-4 sm:p-6">
                  <img 
                    src="/lovable-uploads/a2ee6a7d-eebd-42dc-ba66-305c1c7faa7c.png" 
                    alt="Digital Literacy Program"
                    className="w-full max-w-xs sm:max-w-md mx-auto mb-4 rounded-lg"
                  />
                  <div className="flex items-center justify-center text-neon-green">
                    <span className="text-base sm:text-lg font-semibold mr-2">Visit Our Official Program</span>
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </CardContent>
              </Card>
            </a>
          </div>

          {/* Hero Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-16 px-4">
            <Card className="glass-effect neon-border border-neon-blue/30 overflow-hidden group hover:scale-105 transition-transform duration-300">
              <CardContent className="p-0">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop" 
                  alt="Woman learning on laptop"
                  className="w-full h-48 sm:h-64 object-cover"
                />
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-neon-blue mb-2">Learn at Your Pace</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">Comfortable, step-by-step learning from home</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-effect neon-border border-neon-purple/30 overflow-hidden group hover:scale-105 transition-transform duration-300">
              <CardContent className="p-0">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop" 
                  alt="Woman using laptop"
                  className="w-full h-48 sm:h-64 object-cover"
                />
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-neon-purple mb-2">Connect with Family</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">Stay connected with loved ones through technology</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-4xl font-bold text-center mb-8 sm:mb-16 text-neon-blue">
            {t('home.whatYouLearn')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="glass-effect neon-border border-opacity-30 group hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-opacity-20 mb-4 sm:mb-6 ${feature.color} bg-current animate-glow-pulse`}>
                    <feature.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">{feature.description}</p>
                  <Button 
                    className={`${feature.color} border-current hover:bg-current hover:bg-opacity-10 text-sm sm:text-base`}
                    variant="outline"
                    asChild
                  >
                    <Link to={feature.link}>
                      Explore Now
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-20 px-4 bg-gradient-to-r from-card/50 to-muted/50">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-4xl font-bold text-center mb-8 sm:mb-16 text-neon-pink">
            <Heart className="inline w-6 h-6 sm:w-10 sm:h-10 mr-3" />
            {t('home.successStories')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass-effect neon-border border-neon-pink/30">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={`https://images.unsplash.com/${testimonial.image}?w=60&h=60&fit=crop&crop=face`}
                      alt={testimonial.name}
                      className="w-12 h-12 sm:w-15 sm:h-15 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-neon-pink text-sm sm:text-base">{testimonial.name}</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">Age: {testimonial.age}</p>
                    </div>
                  </div>
                  <p className="text-base sm:text-lg italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 px-4 text-center">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-8 text-neon-green">
            {t('home.readyToStart')}
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Join thousands of parents and elders who have successfully learned to use technology with confidence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Button 
              size="lg" 
              className="bg-neon-green text-black hover:bg-neon-green/90 neon-glow text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
              asChild
            >
              <Link to="/tutorials">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                {t('home.joinCommunity')}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
