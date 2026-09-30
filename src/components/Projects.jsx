import React, { useState } from "react";


const Projects = () => {
   const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: "01",
      title: "Focus40 Academy",
      category: "Institute Website",
      description:
        "The Focus40 Academy website is developed by VGWD (Vamsi Group of Web Development) with a focus on modern UI design, responsive layouts, smooth navigation, and an accessible digital learning experience across desktop, tablet, and mobile devices.",
      image: "/focus40.png",
      technologies: ["React", "Bootstrap", "CSS", "JavaScript"],
      live: "https://focus40.netlify.app/",
      github: "https://github.com/vamsinidana/Taste-Bite",
      featured: true,
    },

    {
      id: "02",
      title: "DevKit",
      category: "Developer Platform",
      description:
        "A developer resource platform that brings useful tools, cheatsheets, roadmaps, commands and development resources together in one place.",
      image: "/projects/devkit.png",
      technologies: ["React", "JavaScript", "Bootstrap", "CSS"],
      live: "#",
      github: "#",
    },

    {
      id: "03",
      title: "FoodieHub",
      category: "Food Delivery",
      description:
        "A responsive food delivery platform interface featuring restaurants, categories, offers, search and ordering experiences.",
      image: "/projects/foodiehub.png",
      technologies: ["React", "Bootstrap", "CSS"],
      live: "#",
      github: "#",
    },

    {
      id: "04",
      title: "VGWD Portfolio",
      category: "Business Website",
      description:
        "A professional business website designed to showcase services, projects, technologies and digital capabilities of VGWD.",
      image: "/projects/vgwd.png",
      technologies: ["React", "CSS", "Bootstrap"],
      live: "#",
      github: "#",
    },
  ];

  return (
    <div>
     <section className="vgwd-projects" id="projects">

      <div className="projects-bg"></div>

      <div className="container position-relative">

        {/* HEADER */}
        <div className="projects-header">

          <div className="projects-label">
            <span className="projects-label-line"></span>
            <span>FEATURED WORK</span>
          </div>

          <span className="projects-header-side">
            SELECTED PROJECTS
          </span>

        </div>


        {/* INTRO */}
        <div className="projects-intro">

          <div>

            <span className="projects-small-title">
              OUR CREATIVE WORK
            </span>

            <h2>
              Ideas We've
              <span> Brought To Life.</span>
            </h2>

          </div>

          <p>
            From creative interfaces to complete digital experiences,
            we build products that combine thoughtful design,
            modern technology and real-world functionality.
          </p>

        </div>


        {/* PROJECT GRID */}
        <div className="projects-grid">

          {projects.map((project) => (

            <article
              className={`project-card ${
                project.featured ? "project-featured" : ""
              }`}
              key={project.id}

              onClick={() => setSelectedProject(project)}
            >

              {/* IMAGE */}
              <div className="project-image-wrap">

                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />

                <div className="project-image-overlay">

                  <span className="project-view-btn">
                    <i className="bi bi-arrow-up-right"></i>
                  </span>

                  <span className="project-view-text">
                    VIEW PROJECT
                  </span>

                </div>


                <span className="project-number">
                  {project.id}
                </span>

                <span className="project-category">
                  {project.category}
                </span>

              </div>


              {/* CARD CONTENT */}
              <div className="project-content">

                <div className="project-title-row">

                  <h3>
                    {project.title}
                  </h3>

                  <i className="bi bi-arrow-up-right project-title-icon"></i>

                </div>

                <p>
                  {project.description}
                </p>


                <div className="project-tech">

                  {project.technologies.map((tech) => (
                    <span key={tech}>
                      {tech}
                    </span>
                  ))}

                </div>


                <div className="project-click-hint">

                  <span>
                    Click to view project
                  </span>

                  <i className="bi bi-arrow-right"></i>

                </div>

              </div>

            </article>

          ))}

        </div>


        {/* BOTTOM CTA */}
        <div className="projects-bottom">

          <div className="projects-cta">

            <div>

              <span>
                HAVE AN IDEA?
              </span>

              <h3>
                Let's build it.
              </h3>

            </div>

            <a href="#start-project">

              Start a Project

              <i className="bi bi-arrow-up-right"></i>

            </a>

          </div>

        </div>

      </div>


      {/* =================================================
          PROJECT DETAIL MODAL
      ================================================= */}

      {selectedProject && (

        <div
          className="project-modal"
          onClick={() => setSelectedProject(null)}
        >

          <div
            className="project-modal-box"
            onClick={(e) => e.stopPropagation()}
          >

            {/* CLOSE */}
            <button
              className="project-modal-close"
              onClick={() => setSelectedProject(null)}
            >
              <i className="bi bi-x-lg"></i>
            </button>


            <div className="project-modal-grid">

              {/* MODAL IMAGE */}

              <div className="project-modal-image">

                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                />

              </div>


              {/* MODAL DETAILS */}

              <div className="project-modal-details">

                <span className="modal-project-number">
                  PROJECT {selectedProject.id}
                </span>

                <span className="modal-project-category">
                  {selectedProject.category}
                </span>

                <h2>
                  {selectedProject.title}
                </h2>

                <p>
                  {selectedProject.description}
                </p>


                {/* TECHNOLOGIES */}

                <div className="modal-tech-title">
                  TECHNOLOGIES
                </div>

                <div className="modal-tech">

                  {selectedProject.technologies.map((tech) => (

                    <span key={tech}>
                      {tech}
                    </span>

                  ))}

                </div>


                {/* BUTTONS */}

                <div className="modal-project-buttons">

                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => {
                      if (selectedProject.live === "#") {
                        e.preventDefault();
                      }
                    }}
                  >

                    <i className="bi bi-box-arrow-up-right"></i>

                    Live Demo

                  </a>


                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => {
                      if (selectedProject.github === "#") {
                        e.preventDefault();
                      }
                    }}
                  >

                    <i className="bi bi-github"></i>

                    GitHub

                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>

      )}

    </section>
    </div>
  )
}

export default Projects
