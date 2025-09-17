import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>LAB 73</h3>
              <p>Professional Music Recording Studio</p>
            </div>
            <div className="social-links">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">📷</a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">📺</a>
              <a href="https://soundcloud.com" target="_blank" rel="noopener noreferrer" aria-label="SoundCloud">🎵</a>
              <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" aria-label="Spotify">🎧</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><button onClick={() => scrollToSection('hero')}>Home</button></li>
              <li><button onClick={() => scrollToSection('services')}>Services</button></li>
              <li><button onClick={() => scrollToSection('about')}>About</button></li>
              <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><button type="button">Recording</button></li>
              <li><button type="button">Mixing</button></li>
              <li><button type="button">Mastering</button></li>
              <li><button type="button">Production</button></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p>📍 123 Music Street, Sound City</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>✉️ hello@lab73studio.com</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Lab 73 Studio. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
              <a href="/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;