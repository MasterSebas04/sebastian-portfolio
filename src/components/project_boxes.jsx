import project1_img from "/logo_bg.png";
import project2_img from "/healthcare-img.jpg";
import { Link } from "react-router-dom";

export default function Project_Boxes() {
  const projects = [
    {
      id: 1,
      title: "Kubishi Scholar",
      description: "Designed a scalable platform aggregating and analyzing academic datasets. Implemented data pipelines with Python and semantic search using Pinecone, with MySQL database management and REST API development.",
      image: project1_img,
      technologies: ["Python", "MySQL", "REST APIs", "Pinecone", "CI/CD"],
      status: "In Progress",
      timeframe: "Jan 2025 – Present"
    },
    {
      id: 2,
      title: "Clinical Outcomes Analytics",
      description: "Medical data analysis using anonymized patient records with WHO's ICD-11-CM codes. Explored disease trends, treatment patterns, and created data visualizations for clinical insights.",
      image: project2_img,
      technologies: ["Python", "SQL", "Data Visualization", "REST APIs", "ICD-11"],
      status: "In Progress",
      timeframe: "July 2025 – Present"
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
