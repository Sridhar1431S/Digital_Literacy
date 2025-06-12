
import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, Bot, User, Volume2, Mic } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m DigiBuddy, your friendly digital assistant! 😊 I\'m here to help you with WhatsApp, Paytm, Google Maps, and any other digital questions you have. How can I help you today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickQuestions = [
    'How do I send a photo on WhatsApp?',
    'How to pay using Paytm QR code?',
    'How to find directions on Google Maps?',
    'How to make a video call?',
    'How to create a WhatsApp group?',
    'How to add money to Paytm wallet?'
  ];

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('whatsapp') && message.includes('photo')) {
      return 'To send a photo on WhatsApp:\n1. Open WhatsApp chat\n2. Tap the 📎 (attachment) icon\n3. Select "Camera" or "Gallery"\n4. Choose your photo\n5. Add a caption if you want\n6. Tap the Send button (arrow icon)\n\nThat\'s it! Your photo will be sent. 📸✨';
    }
    
    if (message.includes('paytm') && (message.includes('qr') || message.includes('pay'))) {
      return 'To pay using Paytm QR code:\n1. Open Paytm app\n2. Tap "Scan & Pay" on home screen\n3. Point camera at the QR code\n4. Enter the amount to pay\n5. Enter your Paytm PIN\n6. Tap "Pay Now"\n\nPayment successful! 💳✅ Always check the merchant name before paying.';
    }
    
    if (message.includes('google maps') && message.includes('direction')) {
      return 'To get directions on Google Maps:\n1. Open Google Maps app\n2. Tap the search box at top\n3. Type your destination\n4. Tap "Directions" (blue button)\n5. Choose your starting point\n6. Select travel mode (car/walk/bus)\n7. Tap "Start" for voice navigation\n\nGoogle will guide you step by step! 🗺️🚗';
    }
    
    if (message.includes('video call')) {
      return 'To make a video call:\n\n📱 WhatsApp Video Call:\n1. Open WhatsApp chat\n2. Tap the video camera icon at top\n3. Wait for them to answer\n\n📞 Google Meet:\n1. Open Google Meet app\n2. Tap "New meeting"\n3. Share the link with family\n\nEnjoy seeing your loved ones! 😊❤️';
    }
    
    if (message.includes('whatsapp') && message.includes('group')) {
      return 'To create a WhatsApp group:\n1. Open WhatsApp\n2. Tap the 3 dots (menu) at top right\n3. Select "New group"\n4. Add family members you want\n5. Tap green arrow\n6. Add group name and photo\n7. Tap green checkmark\n\nYour family group is ready! 👨‍👩‍👧‍👦💬';
    }
    
    if (message.includes('paytm') && message.includes('money')) {
      return 'To add money to Paytm wallet:\n1. Open Paytm app\n2. Tap "Add Money" on home screen\n3. Enter amount you want to add\n4. Choose payment method (bank/card)\n5. Enter your bank details\n6. Confirm the payment\n\nMoney will be added to your wallet! 💰✨ Keep your PIN secure!';
    }
    
    if (message.includes('help') || message.includes('hello') || message.includes('hi')) {
      return 'Hello! 😊 I\'m here to help you with:\n\n📱 WhatsApp - messaging, photos, video calls\n💳 Paytm - payments, adding money, QR codes\n🗺️ Google Maps - directions, finding places\n📞 Video calling - WhatsApp, Google Meet\n📧 Email - sending, receiving messages\n📸 Camera & Photos - taking, sharing pictures\n\nWhat would you like to learn today?';
    }
    
    return 'I understand you\'re asking about digital tools! 😊 While I can help with WhatsApp, Paytm, Google Maps, video calling, email, and photos, could you please be more specific about what you\'d like to learn?\n\nFor example:\n• "How do I send a message on WhatsApp?"\n• "How do I pay bills with Paytm?"\n• "How do I find a place on Google Maps?"\n\nI\'m here to help make technology easy for you! 💙';
  };

  const handleSend = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse = getBotResponse(inputText);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickQuestion = (question: string) => {
    setInputText(question);
    setTimeout(() => handleSend(), 100);
  };

  const speakMessage = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

  const startListening = () => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new (window as any).webkitSpeechRecognition();
      recognition.lang = 'en-US';
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onstart = () => setIsListening(true);
      recognition.onend = () => setIsListening(false);
      
      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInputText(transcript);
      };

      recognition.start();
    }
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-neon-purple via-neon-blue to-neon-green bg-clip-text text-transparent">
            Chat with DigiBuddy
          </h1>
          <p className="text-muted-foreground">
            Your friendly AI assistant for all digital questions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Quick Questions Sidebar */}
          <div className="lg:col-span-1">
            <Card className="glass-effect neon-border border-neon-purple/30 sticky top-24">
              <CardHeader>
                <CardTitle className="text-neon-purple text-lg">Quick Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {quickQuestions.map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="w-full text-left justify-start text-xs border-neon-purple/20 hover:bg-neon-purple/10 h-auto py-3 px-3"
                    onClick={() => handleQuickQuestion(question)}
                  >
                    {question}
                  </Button>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-3">
            <Card className="glass-effect neon-border border-neon-blue/30 h-[600px] flex flex-col">
              {/* Chat Header */}
              <CardHeader className="flex flex-row items-center space-y-0 pb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full flex items-center justify-center animate-glow-pulse">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neon-blue">DigiBuddy</h3>
                    <p className="text-sm text-neon-green">Online • Ready to help</p>
                  </div>
                </div>
              </CardHeader>

              {/* Messages */}
              <CardContent className="flex-1 overflow-y-auto space-y-4 px-6">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-start space-x-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        message.sender === 'user' 
                          ? 'bg-neon-blue text-black' 
                          : 'bg-gradient-to-r from-neon-purple to-neon-blue text-white'
                      }`}>
                        {message.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                      </div>
                      <div
                        className={`rounded-2xl px-4 py-3 ${
                          message.sender === 'user'
                            ? 'bg-neon-blue text-black'
                            : 'glass-effect border border-neon-purple/30'
                        }`}
                      >
                        <p className="whitespace-pre-line">{message.text}</p>
                        {message.sender === 'bot' && (
                          <Button
                            size="sm"
                            variant="ghost"
                            className="mt-2 p-1 h-auto text-neon-green hover:bg-neon-green/10"
                            onClick={() => speakMessage(message.text)}
                          >
                            <Volume2 className="w-3 h-3" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full flex items-center justify-center">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                      <div className="glass-effect border border-neon-purple/30 rounded-2xl px-4 py-3">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-neon-purple rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-neon-purple rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-neon-purple rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </CardContent>

              {/* Input Area */}
              <div className="p-6 border-t border-neon-blue/20">
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className={`border-neon-green ${isListening ? 'bg-neon-green/20 text-neon-green' : 'text-neon-green'}`}
                    onClick={startListening}
                    disabled={isListening}
                  >
                    <Mic className="w-4 h-4" />
                  </Button>
                  <Input
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Ask me anything about WhatsApp, Paytm, Google Maps..."
                    className="flex-1 bg-muted/20 border-neon-blue/30 focus:border-neon-blue"
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  />
                  <Button
                    onClick={handleSend}
                    disabled={!inputText.trim() || isTyping}
                    className="bg-neon-blue text-black hover:bg-neon-blue/90"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
