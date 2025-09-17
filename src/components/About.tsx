import React from 'react';
import './About.css';

const About: React.FC = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '10+', label: 'Years Experience' },
    { number: '50+', label: 'Happy Artists' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <div className="section-header">
              <h2>About Lab 73</h2>
              <p>Where Music Meets Innovation</p>
            </div>
            
            <div className="about-description">
              <p>
                Lab 73 is more than just a recording studio – we're a creative sanctuary where 
                artists can explore, experiment, and perfect their craft. Our state-of-the-art 
                facility combines cutting-edge technology with an inspiring environment designed 
                to bring out the best in every musician.
              </p>
              
              <p>
                Founded by passionate music professionals, we understand the nuances of great 
                sound and the importance of creating the right atmosphere for artistic expression. 
                Our team of experienced engineers and producers work closely with each artist to 
                ensure their vision is realized to its fullest potential.
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
                <div className="feature-icon">🎹</div>
                <div className="feature-content">
                  <h4>Premium Equipment</h4>
                  <p>Industry-standard mixing consoles, monitors, and instruments</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">🏠</div>
                <div className="feature-content">
                  <h4>Acoustically Treated Rooms</h4>
                  <p>Multiple recording spaces optimized for different instruments</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">👥</div>
                <div className="feature-content">
                  <h4>Expert Team</h4>
                  <p>Experienced engineers and producers dedicated to your success</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">⚡</div>
                <div className="feature-content">
                  <h4>Fast Turnaround</h4>
                  <p>Efficient workflow to meet your deadlines without compromising quality</p>
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