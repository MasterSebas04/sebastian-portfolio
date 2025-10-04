import project1_img from "/temp.jpg";
import { Link } from "react-router-dom";

export default function Project_Boxes() {
  const projects = [
    {
      id: 1,
      title: "Web Development Project",
      description: "A modern web application built with React and modern CSS. Features responsive design and interactive components.",
      image: project1_img,
      technologies: ["React", "CSS3", "JavaScript"],
      status: "Completed"
    },
    {
      id: 2,
      title: "Data Analysis Project",
      description: "Statistical analysis project using Python and SQL. Focused on data visualization and insights generation.",
      image: project1_img,
      technologies: ["Python", "SQL", "Pandas"],
      status: "In Progress"
    }
  ];

  const handleClick = (projectName) => {
    console.log(`${projectName} was clicked`);
  };

  return (
    <section className="projects-section">
      <h2 className="section-title">Projects & Research</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card" onClick={() => handleClick(project.title)}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <span className="project-status">{project.status}</span>
              </div>
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
