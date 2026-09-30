import React from 'react'

const WhyVGWD = () => {
   const reasons = [
    {
      number: "01",
      icon: "bi bi-stars",
      title: "Design That Connects",
      text: "We create interfaces that are visually engaging, intuitive and designed around real user experiences.",
    },
    {
      number: "02",
      icon: "bi bi-code-slash",
      title: "Modern Development",
      text: "We build fast, responsive and scalable websites using modern development technologies and clean code.",
    },
    {
      number: "03",
      icon: "bi bi-phone",
      title: "Built For Every Screen",
      text: "Every experience is carefully crafted to work smoothly across desktops, tablets and mobile devices.",
    },
    {
      number: "04",
      icon: "bi bi-headset",
      title: "Support That Stays",
      text: "Our relationship doesn't end after launch. We stay available for improvements, updates and support.",
    },
  ];
  return (
    <div>
     <section className="why-vgwd" id="why-vgwd">

      {/* Background Decorations */}

      <div className="why-orb why-orb-one"></div>
      <div className="why-orb why-orb-two"></div>

      <div className="container position-relative">

        {/* ================= HEADER ================= */}

        <div className="why-header">

          <div className="why-label">
            <span className="why-label-line"></span>
            WHY VGWD
          </div>

          <span className="why-header-side">
            BUILT DIFFERENTLY
          </span>

        </div>


        {/* ================= INTRO ================= */}

        <div className="why-intro">

          <div className="why-heading">

            <span>
              MORE THAN
            </span>

            <h2>
              Just A
              <strong> Website.</strong>
            </h2>

          </div>


          <div className="why-description">

            <p>
              We don't just build websites. We create digital
              experiences that help ideas look better, work smarter
              and connect with people.
            </p>

            <div className="why-line"></div>

            <span>
              DESIGN • DEVELOPMENT • EXPERIENCE
            </span>

          </div>

        </div>


        {/* ================= REASONS ================= */}

        <div className="why-grid">

          {reasons.map((reason) => (

            <div
              className="why-card"
              key={reason.number}
            >

              {/* Number */}

              <div className="why-card-top">

                <span className="why-number">
                  {reason.number}
                </span>

                <i className={reason.icon}></i>

              </div>


              {/* Content */}

              <div className="why-card-content">

                <h3>
                  {reason.title}
                </h3>

                <p>
                  {reason.text}
                </p>

              </div>


              {/* Bottom Arrow */}

              <div className="why-card-arrow">

                <span>
                  EXPLORE
                </span>

                <i className="bi bi-arrow-up-right"></i>

              </div>

            </div>

          ))}

        </div>


        {/* ================= BOTTOM STATEMENT ================= */}

        <div className="why-bottom">

          <div className="why-bottom-number">
            <span>VGWD</span>
            <strong>01</strong>
          </div>


          <div className="why-bottom-text">

            <span>
              OUR APPROACH
            </span>

            <h3>
              Simple ideas.
              <br />
              <em>Powerful digital experiences.</em>
            </h3>

          </div>


          <a
            href="#start-project"
            className="why-cta"
          >

            Let's Work Together

            <i className="bi bi-arrow-up-right"></i>

          </a>

        </div>

      </div>

    </section>
    </div>
  )
}

export default WhyVGWD
