
import React, { createContext, useContext, useState } from 'react';

type Language = 'English' | 'Hindi' | 'Tamil' | 'Telugu';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  English: {
    'nav.home': 'Home',
    'nav.tutorials': 'Tutorials',
    'nav.chat': 'AI Chat',
    'nav.feedback': 'Feedback',
    'home.title': 'Empowering Digital Literacy!',
    'home.subtitle': 'Learn WhatsApp, Paytm, Google Maps & more with simple, heartwarming tutorials designed for parents and elders',
    'home.startLearning': 'Start Learning',
    'home.chatWithDigiBuddy': 'Chat with DigiBuddy',
    'home.whatYouLearn': 'What You\'ll Learn',
    'home.easyTutorials': 'Easy Tutorials',
    'home.aiAssistant': 'AI Assistant',
    'home.shareFeedback': 'Share Feedback',
    'home.successStories': 'Success Stories',
    'home.readyToStart': 'Ready to Start Your Digital Journey?',
    'home.joinCommunity': 'Join the Community',
  },
  Hindi: {
    'nav.home': 'होम',
    'nav.tutorials': 'ट्यूटोरियल',
    'nav.chat': 'एआई चैट',
    'nav.feedback': 'फीडबैक',
    'home.title': 'डिजिटल साक्षरता को सशक्त बनाना!',
    'home.subtitle': 'व्हाट्सएप, पेटीएम, गूगल मैप्स और अधिक सीखें सरल, दिल छूने वाले ट्यूटोरियल के साथ',
    'home.startLearning': 'सीखना शुरू करें',
    'home.chatWithDigiBuddy': 'डिजीबडी से चैट करें',
    'home.whatYouLearn': 'आप क्या सीखेंगे',
    'home.easyTutorials': 'आसान ट्यूटोरियल',
    'home.aiAssistant': 'एआई सहायक',
    'home.shareFeedback': 'फीडबैक साझा करें',
    'home.successStories': 'सफलता की कहानियां',
    'home.readyToStart': 'अपनी डिजिटल यात्रा शुरू करने के लिए तैयार हैं?',
    'home.joinCommunity': 'समुदाय में शामिल हों',
  },
  Tamil: {
    'nav.home': 'முகப்பு',
    'nav.tutorials': 'பயிற்சிகள்',
    'nav.chat': 'AI அரட்டை',
    'nav.feedback': 'கருத்து',
    'home.title': 'டிஜிட்டல் கல்வியறிவை மேம்படுத்துதல்!',
    'home.subtitle': 'வாட்ஸ்அப், பேடிஎம், கூகுள் மேப்ஸ் மற்றும் பலவற்றை எளிய, இதயத்தைத் தொடும் பயிற்சிகளுடன் கற்றுக்கொள்ளுங்கள்',
    'home.startLearning': 'கற்றலைத் தொடங்குங்கள்',
    'home.chatWithDigiBuddy': 'டிஜிபடியுடன் அரட்டையடிக்கவும்',
    'home.whatYouLearn': 'நீங்கள் என்ன கற்றுக்கொள்வீர்கள்',
    'home.easyTutorials': 'எளிய பயிற்சிகள்',
    'home.aiAssistant': 'AI உதவியாளர்',
    'home.shareFeedback': 'கருத்தைப் பகிரவும்',
    'home.successStories': 'வெற்றிக் கதைகள்',
    'home.readyToStart': 'உங்கள் டிஜிட்டல் பயணத்தைத் தொடங்க தயாரா?',
    'home.joinCommunity': 'சமூகத்தில் சேரவும்',
  },
  Telugu: {
    'nav.home': 'హోమ్',
    'nav.tutorials': 'ట్యుటోరియల్స్',
    'nav.chat': 'AI చాట్',
    'nav.feedback': 'ఫీడ్‌బ్యాక్',
    'home.title': 'డిజిటల్ అక్షరాస్యతను శక్తివంతం చేయడం!',
    'home.subtitle': 'వాట్సాప్, పేటీఎం, గూగుల్ మ్యాప్స్ మరియు మరిన్నింటిని సరళమైన, హృదయస్పర్శీ ట్యుటోరియల్స్‌తో నేర్చుకోండి',
    'home.startLearning': 'నేర్చుకోవడం ప్రారంభించండి',
    'home.chatWithDigiBuddy': 'డిజిబడ్డీతో చాట్ చేయండి',
    'home.whatYouLearn': 'మీరు ఏమి నేర్చుకుంటారు',
    'home.easyTutorials': 'సులభ ట్యుటోరియల్స్',
    'home.aiAssistant': 'AI అసిస్టెంట్',
    'home.shareFeedback': 'ఫీడ్‌బ్యాక్ షేర్ చేయండి',
    'home.successStories': 'విజయ కథలు',
    'home.readyToStart': 'మీ డిజిటల్ ప్రయాణాన్ని ప్రారంభించడానికి సిద్ధంగా ఉన్నారా?',
    'home.joinCommunity': 'కమ్యూనిటీలో చేరండి',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('English');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
