import './App.css'

function App() {
  return (
    <>
      <header>
        <section id="leftheadersection">
          <h1>Sebastian Lange</h1>
        </section>
        <section id="rightheadersection">
          <section id="info">
            <h2>Résumé</h2>
            <h2>Github</h2>
            <h2>Linkedin</h2>
          </section>
        </section>
      </header>

      <section class="subheader">
        <h3>Los Angeles, California</h3>
        <h3>Loyola Marymount University</h3>
      </section>

      <main>

      
        <div class = "about">
            <img src="snow_seb.jpg" id="profile_pic" alt="About Me Image"></img>
            <p>khjdsdkfjhfdskjdfshkjdfshsfsfjkjsfjkhfskjdshk hjkshkfjsvbfsljvbsdjfbwljbdfsljfbljfbsdljfbsdlfbsdlfbklopment as a Web Developerfklfnsklnflksnflksnfklnsflknf </p>
        </div>

        <div class = "education">
        <h1>Education</h1>
        <h3>BA Computer Science</h3>
        <p><strong>Minor:</strong> Data Science and Statistics</p>
        <p><strong>Institution:</strong> Loyola Marymount University</p>
        <p><strong>Duration:</strong> 2023 – 2027</p>

    
        </div>


        <div class = "contact">
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


        <div className="projects">
          <h1>Projects and Research</h1>
          <div className="projects-grid">
            <div className="project">
              <img src="temp.jpg" alt="Project 1" />
              <p>Project 1 description goes here.</p>
            </div>
            <div className="project">
              <img src="temp.jpg" alt="Project 2" />
              <p>Project 2 description goes here.</p>
            </div>
          </div>
        </div>



    
      </main>
    </>
  );
}

export default App
