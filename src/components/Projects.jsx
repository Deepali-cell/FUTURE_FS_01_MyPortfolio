import "../css_files/Projects.css";
import { projects } from "../lib/projects";

const Projects = () => {
  return (
    <div className="recent_wrapper" id="projects">
      <div className="part1">
        <h2 id="heading">Projects</h2>
        <p>
          Here are some of the full-stack projects I have built using the MERN
          stack, focusing on real-world functionality and clean architecture.
        </p>
      </div>

      <div className="recent_cases">
        {projects.map((project, index) => (
          <div className="case_card" key={index}>
            {/* Left Content */}
            <div className="case_content">
              <h3 className="title_heading">{project.title}</h3>

              <p>{project.description}</p>

              <div className="project_btns">
                <a href={project.github} target="_blank" rel="noreferrer">
                  <button className="case_btn">GitHub</button>
                </a>

                <a href={project.demo} target="_blank" rel="noreferrer">
                  <button className="case_btn secondary">Live Demo</button>
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="case_img">
              <img src={project.image} alt={project.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
