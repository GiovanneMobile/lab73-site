import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Hero.css';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-bg"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>{t('hero.title')}</h1>
            <p>
              {t('hero.description')}
            </p>
            <div className="hero-buttons">
              <button className="btn" onClick={scrollToContact}>
                {t('hero.bookSession')}
              </button>
              <a href="#services" className="btn btn-outline">
                {t('hero.ourServices')}
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="studio-mockup">
              <div className="mixer-console"></div>
              <div className="waveform">
                <div className="wave-bar" style={{height: '40%'}}></div>
                <div className="wave-bar" style={{height: '70%'}}></div>
                <div className="wave-bar" style={{height: '50%'}}></div>
                <div className="wave-bar" style={{height: '85%'}}></div>
                <div className="wave-bar" style={{height: '60%'}}></div>
                <div className="wave-bar" style={{height: '75%'}}></div>
                <div className="wave-bar" style={{height: '45%'}}></div>
                <div className="wave-bar" style={{height: '90%'}}></div>
                <div className="wave-bar" style={{height: '35%'}}></div>
                <div className="wave-bar" style={{height: '65%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;