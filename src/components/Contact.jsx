import React from 'react'

const Contact = () => {
  return (
    <div>
    <section className="vgwd-contact section contact-section scroll-reveal reveal-scale" id="contact">

      {/* Background Effects */}
      <div className="contact-orb contact-orb-one"></div>
      <div className="contact-orb contact-orb-two"></div>

      <div className="container position-relative">

        {/* ================= HEADER ================= */}

        <div className="contact-header">

          <div className="contact-label">
            <span></span>
            CONTACT VGWD
          </div>

          <div className="contact-heading-wrap">

            <div>
              <span className="contact-mini">
                LET'S CONNECT
              </span>

              <h2 className="white-text">
                Have A Project
                <br />
                <strong>In Mind?</strong>
              </h2>
            </div>

            <p className="white-text">
              Whether you have a clear idea or just the beginning of one,
              we'd love to hear about it. Let's create something meaningful
              together.
            </p>

          </div>

        </div>


        {/* ================= MAIN CONTENT ================= */}

        <div className="contact-main">

          {/* LEFT INFO */}

          <div className="contact-info">

            <div className="contact-info-top">
              <span>GET IN TOUCH</span>

              <p>
                Reach out to VGWD and let's start a conversation about your
                next digital project.
              </p>
            </div>


            {/* EMAIL */}

            <a
              href="mailto:vamsinaidana@gmail.com"
              className="contact-info-item"
            >

              <div className="contact-icon">
                <i className="bi bi-envelope"></i>
              </div>

              <div className="contact-info-text">
                <span>EMAIL</span>
                <h3>vamsinaidana@gmail.com</h3>
              </div>

              <i className="bi bi-arrow-up-right contact-arrow"></i>

            </a>


            {/* PHONE */}

            <a
              href="tel:+917416409117"
              className="contact-info-item"
            >

              <div className="contact-icon">
                <i className="bi bi-telephone"></i>
              </div>

              <div className="contact-info-text">
                <span>PHONE</span>
                <h3>+91 74164 09117</h3>
              </div>

              <i className="bi bi-arrow-up-right contact-arrow"></i>

            </a>


            {/* LOCATION */}

            <div className="contact-info-item">

              <div className="contact-icon">
                <i className="bi bi-geo-alt"></i>
              </div>

              <div className="contact-info-text">
                <span>LOCATION</span>
                <h3>Andhra Pradesh, India</h3>
              </div>

              <i className="bi bi-arrow-up-right contact-arrow"></i>

            </div>


            {/* SOCIALS */}

            <div className="contact-social-wrapper">

              <span>FOLLOW VGWD</span>

              <div className="contact-socials">

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

          </div>


          {/* ================= MAP ================= */}

          <div className="contact-map-wrapper">

            <div className="contact-map">

              <iframe
                title="VGWD Location"
                src="https://www.google.com/maps?q=Andhra%20Pradesh%2C%20India&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              <div className="map-overlay"></div>

              <div className="map-location-card">

                <div className="map-pin">
                  <i className="bi bi-geo-alt-fill"></i>
                </div>

                <div>
                  <span>VGWD</span>
                  <strong>Andhra Pradesh, India</strong>
                </div>

              </div>

              <div className="map-corner">
                <i className="bi bi-arrow-up-right"></i>
              </div>

            </div>

          </div>

        </div>


        {/* ================= BOTTOM CTA ================= */}

        <div className="contact-bottom">

          <div className="contact-bottom-text">

            <span>READY WHEN YOU ARE</span>

            <h3>
              Let's build something
              <strong> remarkable.</strong>
            </h3>

          </div>

          <a
            href="#start-project"
            className="contact-project-btn"
          >
            <span>Start A Project</span>
            <i className="bi bi-arrow-up-right"></i>
          </a>

        </div>

      </div>

    </section>
    </div>
  )
}

export default Contact
