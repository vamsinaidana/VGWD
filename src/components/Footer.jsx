import React from 'react'


const Footer = () => {
   const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div>
     <footer className="vgwd-footer">

      {/* =========================================
          TOP CTA
      ========================================= */}

      <div className="footer-cta">

        <div className="footer-cta-glow"></div>

        <div className="container position-relative">

          <div className="footer-cta-content">

            <div>
              <span className="footer-cta-label">
                HAVE A PROJECT IN MIND?
              </span>

              <h2>
                Let's Build Something
                <strong> Great.</strong>
              </h2>

              <p>
                From the first idea to the final launch,
                VGWD turns ambitious ideas into meaningful
                digital experiences.
              </p>
            </div>

            <button
              type="button"
              className="footer-cta-button"
              onClick={() => scrollToSection("start-project")}
            >
              <span>Start A Project</span>
              <i className="bi bi-arrow-up-right"></i>
            </button>

          </div>

        </div>
      </div>


      {/* =========================================
          MAIN FOOTER
      ========================================= */}

      <div className="footer-main">

        <div className="footer-grid-pattern"></div>

        <div className="container position-relative">

          <div className="footer-main-grid">

            {/* ================= BRAND ================= */}

            <div className="footer-brand">

              <button
                type="button"
                className="footer-logo"
                onClick={() => scrollToSection("hero")}
              >
                <span className="footer-logo-mark">
                  [/
                </span>

                <span>VGWD</span>
              </button>

              <p>
                Vamsi Group of Web Development — building modern,
                responsive and meaningful digital experiences for
                businesses, startups and ideas.
              </p>

              <div className="footer-socials">

                <a
                  href="https://www.linkedin.com/in/vamsinaidana/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="bi bi-linkedin"></i>
                </a>

                <a
                  href="https://github.com/vamsinaidana"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <i className="bi bi-github"></i>
                </a>

                <a
                  href="https://www.instagram.com/vgwd_2024/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <i className="bi bi-instagram"></i>
                </a>

                <a
                  href="https://www.youtube.com/@admin_vamsi"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                >
                  <i className="bi bi-youtube"></i>
                </a>

                <a
                  href="https://wa.me/917416409117"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                >
                  <i className="bi bi-whatsapp"></i>
                </a>
              </div>

            </div>


            {/* ================= NAVIGATION ================= */}

            <div className="footer-column">

              <span className="footer-column-title">
                EXPLORE
              </span>

              <button
                onClick={() => scrollToSection("home")}
              >
                Home
              </button>

              <button
                onClick={() => scrollToSection("about")}
              >
                About
              </button>

              <button
                onClick={() => scrollToSection("services")}
              >
                Services
              </button>

              <button
                onClick={() => scrollToSection("projects")}
              >
                Projects
              </button>

              <button
                onClick={() => scrollToSection("testimonials")}
              >
                Testimonials
              </button>

              <button
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </button>

            </div>


            {/* ================= SERVICES ================= */}

            <div className="footer-column">

              <span className="footer-column-title">
                SERVICES
              </span>

              <button
                onClick={() => scrollToSection("services")}
              >
                Web Design
              </button>

              <button
                onClick={() => scrollToSection("services")}
              >
                Web Development
              </button>

              <button
                onClick={() => scrollToSection("services")}
              >
                React Development
              </button>

              <button
                onClick={() => scrollToSection("services")}
              >
                E-Commerce
              </button>

              <button
                onClick={() => scrollToSection("services")}
              >
                UI / UX Design
              </button>

              <button
                onClick={() => scrollToSection("services")}
              >
                Maintenance
              </button>

            </div>


            {/* ================= CONTACT ================= */}

            <div className="footer-column footer-contact-column">

              <span className="footer-column-title">
                GET IN TOUCH
              </span>

              <a href="mailto:vamsinaidana@gmail.com">
                <i className="bi bi-envelope"></i>
                vamsinaidana@gmail.com
              </a>

              <a href="tel:+917416409117">
                <i className="bi bi-telephone"></i>
                +91 74164 09117
              </a>

              <span className="footer-location">
                <i className="bi bi-geo-alt"></i>
                Andhra Pradesh, India
              </span>

              <button
                className="footer-contact-link"
                onClick={() => scrollToSection("contact")}
              >
                Contact VGWD
                <i className="bi bi-arrow-up-right"></i>
              </button>

            </div>

          </div>


          {/* =========================================
              FOOTER STATEMENT
          ========================================= */}

          <div className="footer-statement">

            <span>
              DESIGN
            </span>

            <i className="bi bi-dot"></i>

            <span>
              DEVELOP
            </span>

            <i className="bi bi-dot"></i>

            <span>
              DELIVER
            </span>

            <i className="bi bi-dot"></i>

            <span>
              GROW
            </span>

          </div>


          {/* =========================================
              BOTTOM BAR
          ========================================= */}

          <div className="footer-bottom">

            <div className="footer-copyright">
              © {new Date().getFullYear()} VGWD.
              All rights reserved.
            </div>

            <div className="footer-bottom-center">
              <span>VAMSI GROUP OF WEB DEVELOPMENT</span>
            </div>

            <button
              type="button"
              className="back-to-top"
              onClick={() => window.scrollTo({
                top: 0,
                behavior: "smooth",
              })}
            >
              <span>BACK TO TOP</span>
              <i className="bi bi-arrow-up"></i>
            </button>

          </div>

        </div>

      </div>

    </footer>
    </div>
  )
}

export default Footer
