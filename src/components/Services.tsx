import React from 'react';
import './Services.css';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Recording',
      description: 'Professional multi-track recording with state-of-the-art equipment and acoustically treated rooms.',
      icon: '🎤'
    },
    {
      title: 'Mixing',
      description: 'Expert mixing services to bring balance, clarity, and depth to your musical compositions.',
      icon: '🎛️'
    },
    {
      title: 'Mastering',
      description: 'Final polish and optimization for your tracks to ensure they sound great on any playback system.',
      icon: '🎚️'
    },
    {
      title: 'Production',
      description: 'Full music production services from arrangement to final delivery, tailored to your artistic vision.',
      icon: '🎵'
    },
    {
      title: 'Vocal Coaching',
      description: 'Professional vocal coaching to help artists improve their technique and performance.',
      icon: '🎙️'
    },
    {
      title: 'Live Sessions',
      description: 'Capture the energy of live performances with our multi-camera and audio recording setup.',
      icon: '📹'
    }
  ];

  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Professional audio services tailored to bring your musical vision to life</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <span>{service.icon}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;