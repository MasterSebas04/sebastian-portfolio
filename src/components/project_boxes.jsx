import project1_img from "/temp.jpg";
import { Link } from "react-router-dom";

export default function Project_Boxes() {
  const handleClick = (projectName) => {
    console.log(`${projectName} was clicked`);
  };

  return (
    <div className="projects">
      <h1>Projects and Research</h1>
      <div className="projects-grid">
        <div className="project" onClick={() => handleClick("Project 1")}>    
          <img src={project1_img} alt="Project 1" />
          <p>Project 1 description goes here.</p>
        </div>
        
        <div className="project" onClick={() => handleClick("Project 2")}>
          <img src={project1_img} alt="Project 2" />
          <p>Project 2 description goes here.</p>
        </div>
      </div>
    </div>
  );
}
