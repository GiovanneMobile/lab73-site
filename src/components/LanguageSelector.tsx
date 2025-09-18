import React, { useEffect, useState } from 'react';
import { useLanguage, Language } from '../contexts/LanguageContext';
import './LanguageSelector.css';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [emojiSupported, setEmojiSupported] = useState(true);

  useEffect(() => {
    // Test emoji support by checking if flag emojis render properly
    const testEmojiSupport = () => {
      // In test environment, skip canvas test and default to emoji support
      if (typeof window === 'undefined' || process.env.NODE_ENV === 'test') {
        return true;
      }

      try {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) return true; // Default to emoji support if canvas is not available

        canvas.width = 20;
        canvas.height = 20;
        
        // Draw flag emoji
        ctx.fillText('🇧🇷', 0, 15);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        
        // Check if any pixels were drawn (emoji support exists)
        for (let i = 0; i < imageData.data.length; i += 4) {
          if (imageData.data[i + 3] > 0) { // Alpha channel check
            return true;
          }
        }
        return false;
      } catch (error) {
        // If canvas is not supported, default to true
        return true;
      }
    };

    setEmojiSupported(testEmojiSupport());
  }, []);

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  return (
    <div className="language-selector">
      <button
        className={`language-option ${language === 'pt' ? 'active' : ''}`}
        onClick={() => handleLanguageChange('pt')}
        title="Português (Brasil)"
        aria-label="Alterar idioma para Português"
      >
        {emojiSupported ? (
          <span className="flag-emoji">🇧🇷</span>
        ) : (
          <span className="flag-fallback">BR</span>
        )}
      </button>
      <button
        className={`language-option ${language === 'en' ? 'active' : ''}`}
        onClick={() => handleLanguageChange('en')}
        title="English (United States)"
        aria-label="Change language to English"
      >
        {emojiSupported ? (
          <span className="flag-emoji">🇺🇸</span>
        ) : (
          <span className="flag-fallback">EN</span>
        )}
      </button>
    </div>
  );
};

export default LanguageSelector;