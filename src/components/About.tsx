import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './About.css';

const About: React.FC = () => {
  const { t } = useLanguage();
  
  const stats = [
    { number: '500+', label: t('about.stats.projects') },
    { number: '10+', label: t('about.stats.experience') },
    { number: '50+', label: t('about.stats.artists') },
    { number: '24/7', label: t('about.stats.support') }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <div className="section-header">
              <h2>{t('about.title')}</h2>
              <p>{t('about.subtitle')}</p>
            </div>
            
            <div className="about-description">
              <p>
                {t('about.description1')}
              </p>
              
              <p>
                {t('about.description2')}
              </p>
            </div>

            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-features">
            <div className="feature-list">
              <div className="feature-item">
                <div className="feature-icon">♪</div>
                <div className="feature-content">
                  <h4>{t('about.features.equipment.title')}</h4>
                  <p>{t('about.features.equipment.description')}</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">▣</div>
                <div className="feature-content">
                  <h4>{t('about.features.rooms.title')}</h4>
                  <p>{t('about.features.rooms.description')}</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">👤</div>
                <div className="feature-content">
                  <h4>{t('about.features.team.title')}</h4>
                  <p>{t('about.features.team.description')}</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">⚡</div>
                <div className="feature-content">
                  <h4>{t('about.features.turnaround.title')}</h4>
                  <p>{t('about.features.turnaround.description')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;