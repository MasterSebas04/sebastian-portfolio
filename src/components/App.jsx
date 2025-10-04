import './App.css'
import sebLogo from "/snow_seb.jpg"
import HeaderButtons from './buttons'
import Project_Boxes from './project_boxes'

import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1 className="logo">Sebastian Lange</h1>
          <nav className="nav">
            <HeaderButtons /> 
          </nav>
        </div>
      </header>

      <main className="main">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <div className="hero-text">
              <h2 className="hero-title">Computer Science Student</h2>
              <p className="hero-subtitle">Los Angeles, California • Loyola Marymount University</p>
              <p className="hero-description">
                Passionate about web development and data science. Currently pursuing a BA in Computer Science 
                with a focus on Data Science and Statistics. Building innovative solutions and exploring 
                the intersection of technology and creativity.
              </p>
            </div>
            <div className="hero-image">
              <img src={sebLogo} alt="Sebastian Lange" className="profile-image" />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="skills-section">
          <h2 className="section-title">Software Engineering Skills</h2>
          <div className="chart-container">
            {[
              { skill: 'Python', level: 90, color: '#2563eb' },
              { skill: 'JavaScript', level: 90, color: '#3b82f6' },
              { skill: 'Git', level: 80, color: '#10b981' },
              { skill: 'Java', level: 50, color: '#f59e0b' },
              { skill: 'Docker', level: 50, color: '#8b5cf6' },
            ].map((item, index) => (
              <div key={item.skill} className="bar-item">
                <div className="bar-label">{item.skill}</div>
                <div className="bar-wrapper">
                  <div 
                    className="bar-fill" 
                    style={{ 
                      width: `${item.level}%`,
                      backgroundColor: item.color,
                      animationDelay: `${index * 0.1}s`
                    }}
                  ></div>
                  <div className="bar-value">{item.level}%</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Data Science Skills Section */}
        <section className="data-science-section">
          <h2 className="section-title">Data Science & Analytics</h2>
          <div className="chart-container">
            {[
              { skill: 'Pandas', level: 85, color: '#e74c3c' },
              { skill: 'NumPy', level: 80, color: '#3498db' },
              { skill: 'SQL', level: 80, color: '#2ecc71' },
              { skill: 'Matplotlib', level: 75, color: '#f39c12' },
              { skill: 'Seaborn', level: 70, color: '#9b59b6' },
              { skill: 'Jupyter', level: 85, color: '#1abc9c' },
              { skill: 'TensorFlow', level: 60, color: '#e67e22' },
              { skill: 'R', level: 70, color: '#34495e' },
            ].map((item, index) => (
              <div key={item.skill} className="bar-item">
                <div className="bar-label">{item.skill}</div>
                <div className="bar-wrapper">
                  <div 
                    className="bar-fill" 
                    style={{ 
                      width: `${item.level}%`,
                      backgroundColor: item.color,
                      animationDelay: `${index * 0.1}s`
                    }}
                  ></div>
                  <div className="bar-value">{item.level}%</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Contact Grid */}
        <div className="info-grid">
          <section className="education-card">
            <h3 className="card-title">Education</h3>
            <div className="education-content">
              <h4>BA Computer Science</h4>
              <p className="degree-focus">Data Science and Statistics</p>
              <div className="education-details">
                <p><strong>Institution:</strong> Loyola Marymount University</p>
                <p><strong>Duration:</strong> 2023 – 2027</p>
              </div>
            </div>
          </section>

          <section className="contact-card">
            <h3 className="card-title">Contact</h3>
            <div className="contact-content">
              <div className="contact-item">
                <span className="contact-label">Phone:</span>
                <span className="contact-value">310-920-6242</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">Personal:</span>
                <span className="contact-value">langes01234@gmail.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">School:</span>
                <span className="contact-value">slange3@lion.lmu.edu</span>
              </div>
            </div>
          </section>
        </div>


        {/* Projects Section */}
        <Project_Boxes />

        {/* Location Map */}
        <section className="map-section">
          <h2 className="section-title">Location</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.1234567890123!2d-118.4168!3d33.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7c8c8c8c8c8%3A0x1234567890abcdef!2sLoyola%20Marymount%20University!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Loyola Marymount University Location"
            ></iframe>
            <div className="map-info">
              <h3>Loyola Marymount University</h3>
              <p>Los Angeles, California</p>
              <p>Where I'm pursuing my Computer Science degree</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App
