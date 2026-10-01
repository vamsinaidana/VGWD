 import React from 'react'
 
 const Hero = () => {
   return (
     <div>
     <section className="vgwd-hero" id="home">

      {/* Background */}
      <div className="hero-grid"></div>
      <div className="hero-glow hero-glow-purple"></div>
      <div className="hero-glow hero-glow-cyan"></div>

      <div className="container">
        <div className="row align-items-center hero-row">

          {/* LEFT CONTENT */}
          <div className="col-lg-6">

            <div className="hero-badge white-text">
              <span className="badge-dot "></span>
              <span>Digital Solutions • Web Development</span>
            </div>

            <h1 className="hero-title white-text">
              We Build
              <span className="gradient-text"> Digital Experiences </span>
              That Matter.
            </h1>

            <p className="hero-description white-text">
              VGWD helps startups, businesses and brands turn ideas into
              powerful digital products through modern web development,
              creative design and scalable technology.
            </p>

            {/* BUTTONS */}
            <div className="hero-buttons">

              <a href="#start-project" className="hero-btn hero-btn-primary">
                <span>Start a Project</span>
                <i className="bi bi-arrow-up-right"></i>
              </a>

              <a href="#projects" className="hero-btn hero-btn-outline">
                <i className="bi bi-play-circle"></i>
                <span>Explore Our Work</span>
              </a>

            </div>

            {/* TRUST */}
            <div className="hero-trust">

              <div className="trust-item">
                <strong className='white-text'>50+</strong>
                <span>Projects</span>
              </div>

              <div className="trust-divider"></div>

              <div className="trust-item">
                <strong className='white-text'>20+</strong>
                <span>Technologies</span>
              </div>

              <div className="trust-divider"></div>

              <div className="trust-item">
                <strong className='white-text'>100%</strong>
                <span>Commitment</span>
              </div>

            </div>

          </div>


          {/* RIGHT VISUAL */}
          <div className="col-lg-6">

            <div className="hero-visual">

              {/* Main Glass Card */}
              <div className="code-window">

                {/* Window Header */}
                <div className="window-header">

                  <div className="window-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="window-title">
                    vgwd.dev
                  </div>

                  <div className="window-icon">
                    <i className="bi bi-three-dots"></i>
                  </div>

                </div>


                {/* Code */}
                <div className="code-content">

                  <div>
                    <span className="code-purple">const</span>{" "}
                    <span className="code-blue">VGWD</span>{" "}
                    <span className="code-white">=</span>{" "}
                    <span className="code-yellow">
                      {"{"}
                    </span>
                  </div>

                  <div className="code-indent">
                    <span className="code-cyan">mission</span>
                    <span className="code-white">:</span>{" "}
                    <span className="code-green">
                      "Build. Scale. Inspire."
                    </span>
                    <span className="code-white">,</span>
                  </div>

                  <div className="code-indent">
                    <span className="code-cyan">design</span>
                    <span className="code-white">:</span>{" "}
                    <span className="code-green">
                      "Modern &amp; Human"
                    </span>
                    <span className="code-white">,</span>
                  </div>

                  <div className="code-indent">
                    <span className="code-cyan">technology</span>
                    <span className="code-white">:</span>{" "}
                    <span className="code-green">
                      "Future Ready"
                    </span>
                  </div>

                  <div>
                    <span className="code-yellow">
                      {"}"}
                    </span>
                  </div>

                  <div className="code-line-space"></div>

                  <div>
                    <span className="code-purple">function</span>{" "}
                    <span className="code-blue">createFuture</span>
                    <span className="code-white">() {"{"}</span>
                  </div>

                  <div className="code-indent">
                    <span className="code-purple">return</span>{" "}
                    <span className="code-green">
                      "Your Vision + Our Technology"
                    </span>
                  </div>

                  <div>
                    <span className="code-white">{"}"}</span>
                  </div>

                </div>

                {/* Bottom Status */}
                <div className="code-status">

                  <div>
                    <span className="status-online"></span>
                    System Ready
                  </div>

                  <span>
                    <i className="bi bi-git"></i>
                    main
                  </span>

                </div>

              </div>


              {/* Floating Cards */}

              <div className="floating-card floating-card-tech">

                <div className="floating-icon purple-icon">
                  <i className="bi bi-code-slash"></i>
                </div>

                <div>
                  <strong>Modern Stack</strong>
                  <span>React • Node • Cloud</span>
                </div>

              </div>


              <div className="floating-card floating-card-design">

                <div className="floating-icon cyan-icon">
                  <i className="bi bi-palette"></i>
                </div>

                <div>
                  <strong>Creative Design</strong>
                  <span>UI / UX • Branding</span>
                </div>

              </div>


              {/* Floating Orb */}
              <div className="hero-orb">
                <i className="bi bi-stars"></i>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll">
        <span>Scroll to explore</span>
        <i className="bi bi-arrow-down"></i>
      </div>

    </section>
     </div>
   )
 }
 
 export default Hero
 