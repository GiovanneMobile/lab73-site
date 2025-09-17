import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
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
            <h1>Professional Music Recording Studio</h1>
            <p>
              Welcome to Lab 73, where creativity meets technology. Our state-of-the-art 
              recording studio provides musicians and artists with the perfect environment 
              to bring their musical vision to life.
            </p>
            <div className="hero-buttons">
              <button className="btn" onClick={scrollToContact}>
                Book a Session
              </button>
              <a href="#services" className="btn btn-outline">
                Our Services
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