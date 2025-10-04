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
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            {[
              { skill: 'Python', level: 80 },
              { skill: 'JavaScript', level: 85 },
              { skill: 'Git', level: 75 },
              { skill: 'Java', level: 60 },
              { skill: 'SQL', level: 50 },
            ].map((item) => (
              <div key={item.skill} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{item.skill}</span>
                  <span className="skill-percentage">{item.level}%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: `${item.level}%` }}></div>
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
      </main>
    </div>
  );
}

export default App
