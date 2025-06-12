
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, CreditCard, MapPin, Phone, Camera, Mail, Play, Pause, Volume2 } from 'lucide-react';

const Tutorials = () => {
  const [currentVideo, setCurrentVideo] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const tutorials = [
    {
      id: 'whatsapp',
      title: 'WhatsApp Basics',
      description: 'Learn to send messages, photos, and make video calls',
      icon: MessageCircle,
      color: 'text-neon-green',
      borderColor: 'border-neon-green/30',
      duration: '15 min',
      difficulty: 'Beginner',
      videoId: 'fjVlDYu6erU',
      topics: ['Send Messages', 'Share Photos', 'Video Calls', 'Voice Messages']
    },
    {
      id: 'paytm',
      title: 'Paytm Payments',
      description: 'Safe and easy digital payments for bills and shopping',
      icon: CreditCard,
      color: 'text-neon-blue',
      borderColor: 'border-neon-blue/30',
      duration: '20 min',
      difficulty: 'Beginner',
      videoId: 'NsjKR6YOup4',
      topics: ['Setup Account', 'Add Money', 'Pay Bills', 'QR Code Payments']
    },
    {
      id: 'googlemaps',
      title: 'Google Maps',
      description: 'Navigate anywhere with step-by-step directions',
      icon: MapPin,
      color: 'text-neon-orange',
      borderColor: 'border-neon-orange/30',
      duration: '12 min',
      difficulty: 'Beginner',
      videoId: 'XQUaQpoF8xE',
      topics: ['Search Places', 'Get Directions', 'Save Locations', 'Share Location']
    },
    {
      id: 'phonecalls',
      title: 'Video Calling',
      description: 'Connect face-to-face with family and friends',
      icon: Phone,
      color: 'text-neon-purple',
      borderColor: 'border-neon-purple/30',
      duration: '10 min',
      difficulty: 'Beginner',
      videoId: 'W8ZW5MTOrHM',
      topics: ['WhatsApp Video', 'Google Meet', 'Screen Sharing', 'Group Calls']
    },
    {
      id: 'photos',
      title: 'Camera & Photos',
      description: 'Take beautiful photos and organize your memories',
      icon: Camera,
      color: 'text-neon-pink',
      borderColor: 'border-neon-pink/30',
      duration: '18 min',
      difficulty: 'Intermediate',
      videoId: '7YauTt8rnTE',
      topics: ['Take Photos', 'Edit Images', 'Create Albums', 'Share Memories']
    },
    {
      id: 'email',
      title: 'Email Basics',
      description: 'Send and receive emails like a pro',
      icon: Mail,
      color: 'text-neon-yellow',
      borderColor: 'border-neon-yellow/30',
      duration: '25 min',
      difficulty: 'Intermediate',
      videoId: 'jd9Led_e1ZQ',
      topics: ['Setup Gmail', 'Compose Email', 'Attachments', 'Organize Inbox']
    }
  ];

  const toggleVideo = (videoId: string) => {
    if (currentVideo === videoId && isPlaying) {
      setIsPlaying(false);
    } else {
      setCurrentVideo(videoId);
      setIsPlaying(true);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'text-neon-green bg-neon-green/10';
      case 'Intermediate':
        return 'text-neon-yellow bg-neon-yellow/10';
      case 'Advanced':
        return 'text-neon-orange bg-neon-orange/10';
      default:
        return 'text-neon-blue bg-neon-blue/10';
    }
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:py-12">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent">
            Video Tutorials
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Learn digital tools step-by-step with our easy-to-follow video guides. Each tutorial is designed specifically for parents and elders.
          </p>
        </div>

        {/* Video Player Section */}
        {currentVideo && (
          <div className="mb-12 sm:mb-16">
            <Card className="glass-effect neon-border border-neon-blue/50 max-w-5xl mx-auto overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-video bg-black">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${currentVideo}?autoplay=${isPlaying ? 1 : 0}&cc_load_policy=1&rel=0`}
                    title="Tutorial Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0"
                  ></iframe>
                </div>
                <div className="p-4 sm:p-6 bg-card">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <h3 className="text-xl sm:text-2xl font-semibold text-neon-blue">
                      {tutorials.find(t => t.videoId === currentVideo)?.title}
                    </h3>
                    <div className="flex items-center space-x-3">
                      <Button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="bg-neon-blue text-black hover:bg-neon-blue/90"
                        size="sm"
                      >
                        {isPlaying ? <Pause className="w-4 h-4 sm:w-5 sm:h-5" /> : <Play className="w-4 h-4 sm:w-5 sm:h-5" />}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-neon-green text-neon-green"
                        onClick={() => {
                          if ('speechSynthesis' in window) {
                            const text = tutorials.find(t => t.videoId === currentVideo)?.description || '';
                            const utterance = new SpeechSynthesisUtterance(text);
                            speechSynthesis.speak(utterance);
                          }
                        }}
                      >
                        <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />
                      </Button>
                    </div>
                  </div>
                  <p className="text-muted-foreground mt-2 text-sm sm:text-base">
                    {tutorials.find(t => t.videoId === currentVideo)?.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Tutorial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {tutorials.map((tutorial) => (
            <Card 
              key={tutorial.id}
              className={`glass-effect neon-border ${tutorial.borderColor} group hover:scale-105 transition-all duration-300 cursor-pointer relative overflow-hidden`}
              onClick={() => toggleVideo(tutorial.videoId)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 group-hover:to-black/40 transition-all duration-300"></div>
              
              <CardHeader className="relative z-10 p-4 sm:p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2 sm:p-3 rounded-full ${tutorial.color} bg-current bg-opacity-20 animate-glow-pulse`}>
                    <tutorial.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(tutorial.difficulty)}`}>
                      {tutorial.difficulty}
                    </span>
                    <span className="text-xs text-muted-foreground">{tutorial.duration}</span>
                  </div>
                </div>
                <CardTitle className={`text-lg sm:text-xl ${tutorial.color} group-hover:animate-glow-pulse`}>
                  {tutorial.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10 p-4 sm:p-6 pt-0">
                <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">{tutorial.description}</p>
                
                {/* Topics List */}
                <div className="space-y-2 mb-4 sm:mb-6">
                  <h4 className="text-sm font-medium text-foreground">What you'll learn:</h4>
                  <ul className="space-y-1">
                    {tutorial.topics.map((topic, index) => (
                      <li key={index} className="text-xs sm:text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-neon-blue rounded-full mr-2 flex-shrink-0"></div>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  className={`w-full ${tutorial.color} border-current hover:bg-current hover:bg-opacity-10 group-hover:animate-glow-pulse text-sm sm:text-base`}
                  variant="outline"
                  size="sm"
                >
                  <Play className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  {currentVideo === tutorial.videoId && isPlaying ? 'Now Playing' : 'Watch Tutorial'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Help Section */}
        <div className="mt-12 sm:mt-16 text-center px-4">
          <Card className="glass-effect neon-border border-neon-purple/30 max-w-2xl mx-auto">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-neon-purple mb-4">Need Personal Help?</h3>
              <p className="text-muted-foreground mb-6 text-sm sm:text-base">
                Having trouble with any tutorial? Our AI assistant DigiBuddy is here to help you 24/7!
              </p>
              <Button 
                className="bg-neon-purple text-black hover:bg-neon-purple/90 neon-glow w-full sm:w-auto"
                onClick={() => window.location.href = '/chat'}
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Chat with DigiBuddy
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Tutorials;
