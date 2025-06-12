
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, MessageCircle, Star, PlayCircle, Users, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Easy Tutorials',
      description: 'Step-by-step video guides for WhatsApp, Paytm, Google Maps & more',
      color: 'text-neon-blue',
      link: '/tutorials'
    },
    {
      icon: MessageCircle,
      title: 'AI Assistant',
      description: 'Chat with DigiBuddy for instant help with any digital question',
      color: 'text-neon-purple',
      link: '/chat'
    },
    {
      icon: Star,
      title: 'Share Feedback',
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-warm opacity-10"></div>
        <div className="container mx-auto relative z-10">
          <div className="animate-float">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent">
              Empowering Digital Literacy!
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Learn WhatsApp, Paytm, Google Maps & more with simple, heartwarming tutorials designed for parents and elders
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-neon-blue text-black hover:bg-neon-blue/90 neon-glow text-lg px-8 py-4"
              asChild
            >
              <Link to="/tutorials">
                <PlayCircle className="w-6 h-6 mr-2" />
                Start Learning
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-neon-purple text-neon-purple hover:bg-neon-purple/10 text-lg px-8 py-4"
              asChild
            >
              <Link to="/chat">
                <MessageCircle className="w-6 h-6 mr-2" />
                Chat with DigiBuddy
              </Link>
            </Button>
          </div>

          {/* Hero Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <Card className="glass-effect neon-border border-neon-blue/30 overflow-hidden group hover:scale-105 transition-transform duration-300">
              <CardContent className="p-0">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop" 
                  alt="Woman learning on laptop"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-neon-blue mb-2">Learn at Your Pace</h3>
                  <p className="text-muted-foreground">Comfortable, step-by-step learning from home</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-effect neon-border border-neon-purple/30 overflow-hidden group hover:scale-105 transition-transform duration-300">
              <CardContent className="p-0">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop" 
                  alt="Woman using laptop"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-neon-purple mb-2">Connect with Family</h3>
                  <p className="text-muted-foreground">Stay connected with loved ones through technology</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-neon-blue">
            What You'll Learn
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="glass-effect neon-border border-opacity-30 group hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <CardContent className="p-8 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-opacity-20 mb-6 ${feature.color} bg-current animate-glow-pulse`}>
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground mb-6">{feature.description}</p>
                  <Button 
                    className={`${feature.color} border-current hover:bg-current hover:bg-opacity-10`}
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
      <section className="py-20 px-4 bg-gradient-to-r from-card/50 to-muted/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-neon-pink">
            <Heart className="inline w-10 h-10 mr-3" />
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass-effect neon-border border-neon-pink/30">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={`https://images.unsplash.com/${testimonial.image}?w=60&h=60&fit=crop&crop=face`}
                      alt={testimonial.name}
                      className="w-15 h-15 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-neon-pink">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">Age: {testimonial.age}</p>
                    </div>
                  </div>
                  <p className="text-lg italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-neon-green">
            Ready to Start Your Digital Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of parents and elders who have successfully learned to use technology with confidence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-neon-green text-black hover:bg-neon-green/90 neon-glow text-lg px-8 py-4"
              asChild
            >
              <Link to="/tutorials">
                <Users className="w-6 h-6 mr-2" />
                Join the Community
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
