 import React from 'react'
 
 const Hero = () => {
   return (
     <div>
    <section className="vgwd-hero section" id="home">

  {/* Background */}
  <div className="hero-grid"></div>

  <div className="hero-glow hero-glow-orange"></div>
  <div className="hero-glow hero-glow-soft"></div>


  <div className="container position-relative">

    <div className="row align-items-center hero-row">

      {/* =========================
          LEFT CONTENT
      ========================= */}
      <div className="col-lg-6">

        <div className="hero-badge">

          <span className="badge-dot"></span>

          <span className="white-text">
            Digital Solutions • Web Development
          </span>

        </div>


        <h1 className="hero-title white-text">

          Vamsi{" "}

          <span className="gradient-text">
            Group of
          </span>{" "}

          Web Development

        </h1>


        <p className="hero-description">

          VGWD helps startups, businesses and brands turn ideas into
          powerful digital products through modern web development,
          creative design and scalable technology.

        </p>


        {/* BUTTONS */}
        <div className="hero-buttons">

          <a
            href="#start-project"
            className="hero-btn hero-btn-primary"
          >
            <span>Start a Project</span>

            <i className="bi bi-arrow-up-right"></i>
          </a>


          <a
            href="#projects"
            className="hero-btn hero-btn-outline"
          >
            <i className="bi bi-play-circle"></i>

            <span>
              Explore Our Work
            </span>
          </a>

        </div>


        {/* TRUST / STATS */}
        <div className="hero-trust">

          <div className="trust-item">

            <strong className="white-text">
              50+
            </strong>

            <span>
              Projects
            </span>

          </div>


          <div className="trust-divider"></div>


          <div className="trust-item">

            <strong className="white-text">
              20+
            </strong>

            <span>
              Technologies
            </span>

          </div>


          <div className="trust-divider"></div>


          <div className="trust-item">

            <strong className="white-text">
              100%
            </strong>

            <span>
              Commitment
            </span>

          </div>

        </div>

      </div>


      {/* =========================
          RIGHT VISUAL
      ========================= */}
      <div className="col-lg-6">

        <div className="hero-visual">


          {/* MAIN BANNER */}
          <div className="vgwd-banner-card">

            <div className="banner-glow"></div>

            <img
              src="/banner.png"
              alt="Vamsi Group of Web Development"
              className="vgwd-banner-image"
            />

          </div>


          {/* FLOATING CARD 1 */}
          <div className="floating-card floating-card-tech">

            <div className="floating-icon orange-icon">

              <i className="bi bi-code-slash"></i>

            </div>

            <div>

              <strong>
                Modern Stack
              </strong>

              <span>
                React • Node • Cloud
              </span>

            </div>

          </div>


          {/* FLOATING CARD 2 */}
          <div className="floating-card floating-card-design">

            <div className="floating-icon dark-icon">

              <i className="bi bi-palette"></i>

            </div>

            <div>

              <strong>
                Creative Design
              </strong>

              <span>
                UI / UX • Branding
              </span>

            </div>

          </div>


          {/* FLOATING ORB */}
          <div className="hero-orb">

            <i className="bi bi-stars"></i>

          </div>


        </div>

      </div>

    </div>

  </div>


  {/* SCROLL INDICATOR */}
  <div className="hero-scroll">

    <span>
      Scroll to explore
    </span>

    <i className="bi bi-arrow-down"></i>

  </div>

</section>
     </div>
   )
 }
 
 export default Hero
 