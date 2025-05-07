import './App.css'
import sebLogo from "/snow_seb.jpg"
import HeaderButtons from './buttons'
import Project_Boxes from './project_boxes'

import { Outlet, Link } from "react-router-dom";


function App() {
  return (
    <>
      <header>
        <section id="leftheadersection">
          <h1>Sebastian Lange</h1>
        </section>
        <section id="rightheadersection">
          <section id="info">
            <HeaderButtons /> 
          </section>
        </section>
      </header>

      <section className ="subheader">
        <h3>Los Angeles, California</h3>
        <h3>Loyola Marymount University</h3>
      </section>

      <main>

      
        <div className = "about">
            <img src={sebLogo} id="profile_pic" alt="About Me Image"></img>
            <p>khjdsdkfjhfdskjdfshkjdfshsfsfjkjsfjkhfskjdshk hjkshkfjsvbfsljvbsdjfbwljbdfsljfbljfbsdljfbsdlfbsdlfbklopment as a Web Developerfklfnsklnflksnflksnfklnsflknf </p>
        </div>

        <div className = "education">
        <h1>Education</h1>
        <h3>BA Computer Science</h3>
        <h3>Data Science and Statistic </h3>
        <p><strong>Institution:</strong> Loyola Marymount University</p>
        <p><strong>Duration:</strong> 2023 – 2027</p>

    
        </div>


        <div className = "contact">
            <h1> Contact </h1>
            <p> Pesonal: 310-920-6242 </p>
            <p> Personal: langes01234@gmail.com </p>
            <p> School: slange3@lion.lmu.edu </p>
        </div>

        <div className="technical-skills">
          <h1>Technical Skills</h1>
          {[
            { skill: 'Python', level: 80 },
            { skill: 'Git', level: 75 },
            { skill: 'Java', level: 60 },
            { skill: 'HTML, CSS, JavaScript', level: 85 },
            { skill: 'SQL', level: 50 },
          ].map((item) => (
            <div key={item.skill} className="skill">
              <p>{item.skill}</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: `${item.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>

        <Project_Boxes /> 



    
      </main>
    </>
  );
}

export default App
