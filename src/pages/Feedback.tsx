
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Star, Heart, ThumbsUp, ThumbsDown, Smile, Meh, Frown } from 'lucide-react';

const Feedback = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [category, setCategory] = useState('');
  const [emojiRating, setEmojiRating] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const categories = [
    'WhatsApp Tutorial',
    'Paytm Tutorial',
    'Google Maps Tutorial',
    'Video Calling Tutorial',
    'AI Chat (DigiBuddy)',
    'Website Design',
    'General Feedback'
  ];

  const emojiOptions = [
    { emoji: Frown, label: 'Not Happy', value: 'not-happy', color: 'text-red-400' },
    { emoji: Meh, label: 'Okay', value: 'okay', color: 'text-yellow-400' },
    { emoji: Smile, label: 'Happy', value: 'happy', color: 'text-green-400' },
    { emoji: Heart, label: 'Love It!', value: 'love', color: 'text-neon-pink' }
  ];

  const generateConfetti = () => {
    const confettiElements = [];
    for (let i = 0; i < 50; i++) {
      confettiElements.push(
        <div
          key={i}
          className="absolute w-2 h-2 bg-neon-blue rounded-full animate-confetti"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            backgroundColor: ['#00E5FF', '#9C27B0', '#E91E63', '#00E676', '#FF6D00', '#FFD600'][Math.floor(Math.random() * 6)]
          }}
        />
      );
    }
    return confettiElements;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !feedback || rating === 0) {
      alert('Please fill in all required fields and provide a rating!');
      return;
    }

    setIsSubmitted(true);
    setShowConfetti(true);

    // Simulate form submission
    console.log('Feedback submitted:', {
      name,
      email,
      rating,
      feedback,
      category,
      emojiRating
    });

    // Hide confetti after 3 seconds
    setTimeout(() => {
      setShowConfetti(false);
    }, 3000);
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setRating(0);
    setFeedback('');
    setCategory('');
    setEmojiRating('');
    setIsSubmitted(false);
    setShowConfetti(false);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen py-12 px-4 relative overflow-hidden">
        {showConfetti && (
          <div className="fixed inset-0 pointer-events-none z-50">
            {generateConfetti()}
          </div>
        )}
        
        <div className="container mx-auto max-w-2xl text-center">
          <Card className="glass-effect neon-border border-neon-green/50 animate-scale-in">
            <CardContent className="p-12">
              <div className="w-24 h-24 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-glow-pulse">
                <Heart className="w-12 h-12 text-neon-green" />
              </div>
              
              <h1 className="text-4xl font-bold text-neon-green mb-4">
                Thank You! 💖
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                Your feedback means the world to us! We're so grateful for learners like you who help us improve the Digital Literacy Course.
              </p>
              
              <div className="space-y-4 text-left bg-muted/10 rounded-lg p-6 mb-8">
                <div className="flex items-center space-x-2">
                  <ThumbsUp className="w-5 h-5 text-neon-blue" />
                  <span>Your feedback has been recorded</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-neon-yellow" />
                  <span>You rated us {rating} out of 5 stars</span>
                </div>
                {emojiRating && (
                  <div className="flex items-center space-x-2">
                    <Smile className="w-5 h-5 text-neon-pink" />
                    <span>You're feeling {emojiRating.replace('-', ' ')} about our course</span>
                  </div>
                )}
              </div>
              
              <div className="space-y-4">
                <Button 
                  onClick={resetForm}
                  className="bg-neon-blue text-black hover:bg-neon-blue/90 mr-4"
                >
                  Submit Another Feedback
                </Button>
                <Button 
                  variant="outline"
                  className="border-neon-purple text-neon-purple hover:bg-neon-purple/10"
                  onClick={() => window.location.href = '/'}
                >
                  Back to Home
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue bg-clip-text text-transparent">
            Share Your Feedback
          </h1>
          <p className="text-xl text-muted-foreground">
            Help us make the Digital Literacy Course even better for parents and elders
          </p>
        </div>

        <Card className="glass-effect neon-border border-neon-pink/30">
          <CardHeader>
            <CardTitle className="text-2xl text-neon-pink flex items-center">
              <Heart className="w-6 h-6 mr-2" />
              We Value Your Opinion
            </CardTitle>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="bg-muted/20 border-neon-pink/30 focus:border-neon-pink"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email (optional)
                  </label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    className="bg-muted/20 border-neon-pink/30 focus:border-neon-pink"
                  />
                </div>
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  What would you like to give feedback about?
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-muted/20 border border-neon-pink/30 rounded-md px-3 py-2 focus:border-neon-pink"
                >
                  <option value="">Select a category</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              {/* Star Rating */}
              <div>
                <label className="block text-sm font-medium mb-3">
                  How would you rate your experience? *
                </label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className={`w-12 h-12 rounded-full transition-all duration-200 ${
                        star <= rating
                          ? 'text-neon-yellow bg-neon-yellow/20 animate-glow-pulse'
                          : 'text-muted-foreground hover:text-neon-yellow hover:bg-neon-yellow/10'
                      }`}
                    >
                      <Star className="w-6 h-6 mx-auto" fill={star <= rating ? 'currentColor' : 'none'} />
                    </button>
                  ))}
                </div>
                {rating > 0 && (
                  <p className="text-sm text-muted-foreground mt-2">
                    {rating === 1 && "We're sorry to hear that. Please tell us how we can improve."}
                    {rating === 2 && "Thank you for the feedback. We'll work on making it better."}
                    {rating === 3 && "Good to know! Any suggestions for improvement?"}
                    {rating === 4 && "Great! We're happy you had a positive experience."}
                    {rating === 5 && "Wonderful! Thank you so much for the excellent rating!"}
                  </p>
                )}
              </div>

              {/* Emoji Rating */}
              <div>
                <label className="block text-sm font-medium mb-3">
                  How are you feeling about learning digital skills?
                </label>
                <div className="flex space-x-4">
                  {emojiOptions.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setEmojiRating(option.value)}
                      className={`flex flex-col items-center p-3 rounded-lg transition-all duration-200 ${
                        emojiRating === option.value
                          ? `${option.color} bg-current bg-opacity-20 animate-glow-pulse`
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted/20'
                      }`}
                    >
                      <option.emoji className="w-8 h-8 mb-1" />
                      <span className="text-xs">{option.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Feedback Text */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Tell us more about your experience *
                </label>
                <Textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="What did you like? What could be improved? Any suggestions for new tutorials?"
                  className="bg-muted/20 border-neon-pink/30 focus:border-neon-pink min-h-[120px]"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-neon-pink text-black hover:bg-neon-pink/90 neon-glow px-8 py-4 text-lg"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Submit Feedback
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <Card className="glass-effect neon-border border-neon-blue/30">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-neon-blue mb-2">
                Your Voice Matters!
              </h3>
              <p className="text-muted-foreground">
                Every piece of feedback helps us create better tutorials and make technology more accessible for everyone. Thank you for being part of our learning community! 💙
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
