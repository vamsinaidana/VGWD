import React, { useState } from "react";

 const projectsData = [
  // ================= LANDING PAGES =================
  {
    id: 1,
    category: "Landing Pages",
    title: "Focus40-CAT [MBA]",
    description:
      "Developed focus40 CAT and MBA entrance Info landing page",
    image: "/fcat.png",
    technologies: ["HTML", "CSS", "JavaScript","Bootstrap"],
    live: "https://focus40-cat-2025.netlify.ap",
   },
  {
    id: 2,
    category: "Landing Pages",
    title: "Fruitkha-SPA ",
    description:
      "Developed **FRUITKHA UI**, a responsive fruit shopping interface using React.js. ",
    image: "/fruitkkha.png",
    technologies: ["React", "CSS", "Bootstrap"],
    live: "https://productcars.vercel.app/",
   },
  {
    id: 3,
    category: "Landing Pages",
    title: "Pro-Active",
    description:
      "A modern and responsive Proactive Landing Page built using HTML, CSS, JavaScript, and Bootstrap. This project is designed to showcase a clean UI, smooth user experience, and mobile-first responsive…",
    image: "/pro.png",
    technologies: ["HTML", "CSS", "JavaScript","Bootstrap"],
    live: "https://vmc-vgwd.netlify.app/",
   },

  // ================= STATIC WEBSITES =================
  {
    id: 4,
    category: "Static Websites",
    title: "Netflix-Clone",
    description:
      "Developed Netflix Clone – A streaming platform UI inspired by modern entertainment services, featuring movies, shows, and responsive browsing.",
    image: "/netflix.png",
    technologies: ["Html", "Css", "JavaScript"],
    live: "https://deft-sfogliatella-e743b1.netlify.app/",
   },
  {
    id: 5,
    category: "Static Websites",
    title: "Restaurent",
    description:
      "Developed Static Restaurant Website – A responsive website showcasing the restaurant, menu, services, and contact information.",
    image: "restaura.png",
    technologies: ["Html", "Css", "JavaScript"],
    live: "https://cwarestoranwebsite.netlify.app/",
   },

  // ================= DYNAMIC WEBSITES =================
  {
    id: 6,
    category: "Dynamic Websites",
    title: "Portfolio Website",
    description:
      "Developed Portfolio – A professional personal portfolio showcasing skills, projects, and experience.",
    image: "/portfolio.png",
   technologies: ["React", "HTML", "CSS", "JavaScript", "Bootstrap", "Node.js"],
    live: "https://vamsinportfolio.netlify.app/",
   },
  {
    id: 7,
    category: "Dynamic Websites",
    title: "Taste Bite",
    description:
      "A food ordering web application frontend with an interactive user experience.",
    image: "/tastebite.png",
    technologies: ["React", "HTML", "CSS", "JavaScript", "Bootstrap", "Node.js"],
    live: "https://taste-bite-vgwd-2026.netlify.app/",
    github: "https://github.com/vamsinaidana/Taste-Bite",
  },

  // ================= BLOGS =================
  {
    id: 8,
    category: "Blogs",
    title: "Mind Nest",
    description:
      "A clean and modern technology blog interface designed for publishing development articles.",
    image: "/blog-2.png",
    technologies: ["React", "CSS", "JavaScript"],
    live: "https://focus40.netlify.app/",
   },

  // ================= CLIENT WEBSITES =================
  {
    id: 9,
    category: "Client Websites",
    title: "Focus40 Academy",
    description:
      "The Focus40 Academy website is developed by VGWD (Vamsi Group of Web Development) with a focus on modern UI design, responsive layouts, smooth navigation, and an accessible digital learning experience across desktop, tablet, and mobile devices.",
    image: "/focus40.png",
   technologies: ["React", "HTML", "CSS", "JavaScript", "Bootstrap", "Node.js"],
    live: "https://focus40.netlify.app/",
   },
    {
    id: 10,
    category: "Client Websites",
    title: "Developer Kit",
    description:
      "Developed DevKit – A complete developer resource toolkit for learning, coding, and productivity.",
    image: "/hero-1 (1).png",
   technologies: ["React", "HTML", "CSS", "JavaScript", "Bootstrap", "Node.js"],
    live: "https://devkit-rho.vercel.app/",
   },
    {
    id: 11,
    category: "Client Websites",
    title: "Think Plus",
    description:
      "Developed Think Plus – A modern educational platform designed for smarter learning and growth.",
    image: "/think.png",
   technologies: ["React", "HTML", "CSS", "JavaScript", "Bootstrap", "Node.js"],
    live: "https://vgwdvn.netlify.app/",
   },
    {
    id: 12,
    category: "Client Websites",
    title: "Carola",
    description:
      "Developed Carola – A modern car rental platform for easy and convenient vehicle booking.",
    image: "/carola.png",
   technologies: ["React", "HTML", "CSS", "JavaScript", "Bootstrap", "Node.js"],
    live: "https://carola-vgwd-2026.netlify.app/",
   },
    {
    id: 13,
    category: "Client Websites",
    title: "Charitics",
    description:
      "Developed Charitics – A modern charity platform connecting people with meaningful causes and community support.",
    image: "/charitics.png",
   technologies: ["React", "HTML", "CSS", "JavaScript", "Bootstrap", "Node.js"],
    live: "https://charitics-vgwd.netlify.app/",
   },
    {
    id: 14,
    category: "Client Websites",
    title: "Tech Shed UI",
    description:
      "Developed Tech Shed – A modern technology platform for exploring tech solutions, resources, and innovation..",
    image: "/techshed.png",
   technologies: [ "HTML", "CSS", "JavaScript", "Bootstrap"],
    live: "https://tech-shed-ecommerce.netlify.app/",
   },
     {
    id: 15,
    category: "Dynamic Websites",
    title: "Textlume",
    description:
      "Developed TextLume – A modern platform designed for creative content, writing, and digital expression.",
    image: "/textlume.png",
    technologies: ["React", "HTML", "CSS", "JavaScript", "Bootstrap", "Node.js"],
    live: "https://vamsi-article.lovable.app/",
     
  },
   {
    id: 16,
    category: "Dynamic Websites",
    title: "Quiz-App",
    description:
      "Developed Quiz-App – A modern platform designed for creating and taking quizzes.",
    image: "/quiz.png",
    technologies: [ "HTML", "CSS", "JavaScript", "Bootstrap"],
    live: "https://quiz-web-application-vgwd.netlify.app/",
     
  },
     {
    id: 17,
    category: "Dynamic Websites",
    title: "Dashboard",
    description:
      "Developed Dashboard – A modern and responsive dashboard for managing data, analytics, and key insights.",
    image: "/dash.png",
    technologies: ["React", "HTML", "CSS", "JavaScript", "Bootstrap"],
    live: "https://vamsin.netlify.app/",
     
  },
    {
    id: 18,
    category: "Blogs",
    title: "Travel Blog",
    description:
      "A modern, responsive **Travel Blog Website** built using HTML, CSS, JavaScript, and Bootstrap. ",
    image: "/travel.png",
    technologies: ["React", "CSS", "JavaScript"],
    live: "https://traveler-blog-vgwd.netlify.app/",
   },
    {
    id: 19,
    category: "Static Websites",
    title: "Crypto Currency",
    description:
      "Developed Static Cryptocurrency Website – A modern responsive website showcasing cryptocurrency information, market data, and digital assets.",
    image: "crypto.png",
    technologies: ["Html", "Css", "JavaScript"],
    live: "https://cryptowebsitecwa.netlify.app/",
   },
    {
    id: 20,
    category: "Static Websites",
    title: "Collage Website",
    description:
      "Developed Static Collage Website – A modern responsive website showcasing collage designs and creative work.",
    image: "prism.png",
    technologies: ["Html", "Css", "JavaScript"],
    live: "https://vamsiprismwebsite.netlify.app/",
   },
    {
    id: 21,
    category: "Static Websites",
    title: "Wfc Songs website",
    description:
      "Developed Songs Website – A modern music platform for exploring songs, artists, playlists, and albums.",
    image: "wfc.png",
    technologies: ["Html", "Css", "JavaScript"],
    live: "https://wfc-victor-songs-album-2024.netlify.app/",
   },
    {
    id: 22,
     category: "Dynamic Websites",
    title: "Profile Card",
    description:
      "Developed Profile Card – A clean and responsive profile card UI showcasing personal details, skills, and social links.",
    image: "profie.png",
    technologies: ["React", "Html", "Css", "JavaScript"],
    live: "https://profilecard-eight-iota.vercel.app/",
   },
    
    
];  
"Blogs"
const categories = [
 "Client Websites",
 "Dynamic Websites",
   "Static Websites",
 "Blogs",
  "Landing Pages",
];
 const Projects = () => {
   const [activeCategory, setActiveCategory] = useState("Client Websites");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projectsData.filter(
    (project) => project.category === activeCategory
  );
   return (
     <div>
        <section className="projects-section" id="projects">
      <div className="container">

        {/* ================= HEADING ================= */}
       {/* ================= PROJECTS HERO HEADING ================= */}
<div className="projects-heading-new">

  {/* Top row */}
  <div className="projects-top-line">

    <div className="featured-work">
      <span></span>
      <small>FEATURED WORK</small>
    </div>

    <div className="selected-projects">
      SELECTED PROJECTS
    </div>

  </div>


  {/* Main heading area */}
  <div className="projects-intro">

    <div className="projects-title">

      <span className="creative-label">
        OUR CREATIVE WORK
      </span>

      <h2>
        Ideas We've
        <br />
        <span>Brought To Life.</span>
      </h2>

    </div>


    <div className="projects-description">

      <p>
        From creative interfaces to complete digital experiences,
        we build products that combine thoughtful design, modern
        technology and real-world functionality.
      </p>

    </div>

  </div>

</div>

        {/* ================= CATEGORY BUTTONS ================= */}
        <div className="project-categories">

          {categories.map((category) => (
            <button
              key={category}
              className={`project-category-btn ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}

        </div>

        {/* ================= PROJECT COUNT ================= */}
        <div className="projects-category-info">
          <div>
            <span className="category-line"></span>

            <h3>{activeCategory}</h3>
          </div>

          <span className="project-count">
            {filteredProjects.length} Projects
          </span>
        </div>

        {/* ================= PROJECT CARDS ================= */}
        <div className="row g-4">

          {filteredProjects.map((project) => (

            <div
              className="col-lg-4 col-md-6"
              key={project.id}
            >

              <div className="project-card">

                {/* IMAGE */}
                <div className="project-image-wrapper">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />

                  <div className="project-image-overlay">
                    <button
                      className="view-project-btn"
                      onClick={() => setSelectedProject(project)}
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                      View Project
                    </button>
                  </div>

                </div>

                {/* CONTENT */}
                <div className="project-card-content">

                  <span className="project-category">
                    {project.category}
                  </span>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  {/* TECHNOLOGIES */}
                  <div className="project-tech">

                    {project.technologies.map((tech, index) => (
                      <span key={index}>
                        {tech}
                      </span>
                    ))}

                  </div>

                  {/* BUTTON */}
                  <button
                    className="project-details-btn"
                    onClick={() => setSelectedProject(project)}
                  >
                    Explore Project

                    <i className="fa-solid fa-arrow-right"></i>
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* EMPTY STATE */}
        {filteredProjects.length === 0 && (
          <div className="projects-empty">
            <i className="fa-solid fa-folder-open"></i>

            <h3>No Projects Yet</h3>

            <p>
              Projects for this category will be added soon.
            </p>
          </div>
        )}

      </div>

      {/* ================= PROJECT MODAL ================= */}
      {selectedProject && (

        <div
          className="project-modal-backdrop"
          onClick={() => setSelectedProject(null)}
        >

          <div
            className="project-modal"
            onClick={(e) => e.stopPropagation()}
          >

            {/* CLOSE BUTTON */}
            <button
              className="project-modal-close"
              onClick={() => setSelectedProject(null)}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>

            {/* MODAL IMAGE */}
            <div className="project-modal-image">

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
              />

            </div>

            {/* MODAL CONTENT */}
            <div className="project-modal-content">

              <span className="modal-category">
                {selectedProject.category}
              </span>

              <h2>{selectedProject.title}</h2>

              <p className="modal-description">
                {selectedProject.description}
              </p>

              {/* TECHNOLOGIES */}
              <div className="modal-tech-section">

                <h4>
                  <i className="fa-solid fa-code"></i>
                  Technologies Used
                </h4>

                <div className="modal-tech-list">

                  {selectedProject.technologies.map(
                    (tech, index) => (
                      <span key={index}>
                        {tech}
                      </span>
                    )
                  )}

                </div>

              </div>

              {/* MODAL BUTTONS */}
              <div className="modal-buttons">

                {selectedProject.live !== "#" && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noreferrer"
                    className="modal-live-btn"
                  >
                    <i className="fa-solid fa-globe"></i>
                    Live Website
                  </a>
                )}

                {/* {selectedProject.github !== "#" && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="modal-github-btn"
                  >
                    <i className="fa-brands fa-github"></i>
                    GitHub
                  </a>
                )} */}

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
 