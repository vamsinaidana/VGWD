import React from 'react'

const About = () => {
  return (
    <div>
     <section className="vgwd-about section about-section scroll-reveal reveal-left" id="about">
      <div className="about-bg-shape about-shape-one"></div>
      <div className="about-bg-shape about-shape-two"></div>

      <div className="container">
        {/* Section Header */}
        <div className="about-top">
          <div className="about-label">
            <span></span>
            ABOUT VGWD
          </div>

          <div className="about-top-text">
            <span>Digital Experiences</span>
            <i className="bi bi-arrow-up-right"></i>
          </div>
        </div>

        <div className="row align-items-center g-5">

          {/* LEFT CONTENT */}
          <div className="col-lg-6">
            <div className="about-content ">

              <h2 className="white-text">
                We Build
                <span> Digital Experiences </span>
                That Move Businesses Forward.
              </h2>

              <p className="about-intro white-text">
                VGWD is a modern web development team focused on creating
                powerful, responsive and user-friendly digital experiences
                for startups, businesses and growing brands.
              </p>

              <p className="about-description white-text">
                From strategy and UI/UX design to development and deployment,
                we transform ideas into websites that look great, perform
                smoothly and help businesses build a stronger digital
                presence.
              </p>

              <div className="about-cta">
                <a href="#services" className="about-btn">
                  Explore Our Services
                  <i className="bi bi-arrow-up-right"></i>
                </a>

                <div className="about-trust">
                  <i className="bi bi-check-circle-fill "></i>
                  Built with quality & purpose
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="col-lg-6">
            <div className="about-visual">

              <div className="about-grid"></div>

              {/* Main Card */}
              <div className="about-main-card">

                <div className="about-card-top">
                  <div className="about-window-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <span>VGWD / DIGITAL</span>
                </div>

                <div className="about-card-body">

                  <div className="about-code-line">
                    <span className="code-number">01</span>
                    <span className="code-tag">&lt;website&gt;</span>
                  </div>

                  <div className="about-code-title">
                    Build.
                    <br />
                    <span>Launch.</span>
                    <br />
                    Grow.
                  </div>

                  <div className="about-code-line bottom-line">
                    <span className="code-number">02</span>
                    <span className="code-tag">
                      &lt;/experience&gt;
                    </span>
                  </div>

                </div>

                <div className="about-orange-block">
                  <span>VGWD</span>
                  <i className="bi bi-arrow-up-right"></i>
                </div>

              </div>

              {/* Floating Card 01 */}
              <div className="about-float-card about-float-one">
                <div className="float-icon">
                  <i className="bi bi-lightbulb"></i>
                </div>

                <div>
                  <small>01</small>
                  <strong>Strategy</strong>
                </div>
              </div>

              {/* Floating Card 02 */}
              <div className="about-float-card about-float-two">
                <div className="float-icon">
                  <i className="bi bi-code-slash"></i>
                </div>

                <div>
                  <small>02</small>
                  <strong>Development</strong>
                </div>
              </div>

              {/* Orange Orb */}
              <div className="about-orb"></div>

            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="about-stats">

          <div className="about-stat">
            <strong className="white-text">25<span>+</span></strong>
            <p>Projects Delivered</p>
          </div>

          <div className="about-stat">
            <strong className="white-text">10<span>+</span></strong>
            <p>Modern Technologies</p>
          </div>

          <div className="about-stat">
            <strong className="white-text">100<span>%</span></strong>
            <p>Responsive Design</p>
          </div>

          <div className="about-stat">
            <strong className="white-text">24<span>/7</span></strong>
            <p>Support & Assistance</p>
          </div>

        </div>

      </div>
    </section>
    </div>
  )
}

export default About
