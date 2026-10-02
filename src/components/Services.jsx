import React from 'react'

const services = [
  {
    number: "01",
    icon: "bi-palette2",
    title: "Web Design & UI/UX",
    shortTitle: "Design",
    description:
      "We create clean, modern and user-focused interfaces that make your brand look professional and memorable.",
    features: ["UI Design", "UX Strategy", "Responsive Design"],
  },
  {
    number: "02",
    icon: "bi-code-slash",
    title: "Web Development",
    shortTitle: "Development",
    description:
      "We build fast, responsive and scalable websites using modern frontend technologies and development practices.",
    features: ["Frontend", "Responsive Web", "Performance"],
  },
  {
    number: "03",
    icon: "bi-braces",
    title: "React Development",
    shortTitle: "React",
    description:
      "Interactive and reusable React applications designed for smooth user experiences and scalable development.",
    features: ["React.js", "Components", "API Integration"],
  },
  {
    number: "04",
    icon: "bi-cart3",
    title: "E-Commerce Solutions",
    shortTitle: "E-Commerce",
    description:
      "Conversion-focused online stores with intuitive shopping experiences, responsive layouts and modern interfaces.",
    features: ["Store UI", "Product Pages", "Checkout Flow"],
  },
  {
    number: "05",
    icon: "bi-speedometer2",
    title: "Website Optimization",
    shortTitle: "Optimization",
    description:
      "We improve website usability, responsiveness and frontend performance to create a smoother digital experience.",
    features: ["Performance", "Responsive", "UX Improvements"],
  },
  {
    number: "06",
    icon: "bi-headset",
    title: "Maintenance & Support",
    shortTitle: "Support",
    description:
      "Continuous website support, updates and improvements to keep your digital presence reliable and up to date.",
    features: ["Updates", "Bug Fixes", "Support"],
  },
];

const Services = () => {
  return (
    <div>
       <section className="vgwd-services services-section scroll-reveal reveal-bottom" id="services">
      {/* Background elements */}
      <div className="services-bg-circle services-circle-one"></div>
      <div className="services-bg-circle services-circle-two"></div>

      <div className="container">

        {/* ================================
            SECTION HEADER
        ================================= */}

        <div className="services-header">

          <div className="services-label">
            <span></span>
            OUR SERVICES
          </div>

          <div className="services-header-right">
            <span>WHAT WE DO</span>
            <i className="bi bi-arrow-down-right"></i>
          </div>

        </div>

        {/* ================================
            TITLE
        ================================= */}

        <div className="services-intro">

          <div className="row align-items-end">

            <div className="col-lg-8">

              <h2>
                Digital Solutions
                <br />
                <span>Built Around Your Vision.</span>
              </h2>

            </div>

            <div className="col-lg-4">

              <p>
                From the first idea to the final launch, VGWD creates
                thoughtful digital experiences designed to help businesses
                grow, connect and stand out.
              </p>

            </div>

          </div>

        </div>

        {/* ================================
            SERVICES LIST
        ================================= */}

        <div className="services-list">

          {services.map((service) => (
            <div className="service-item" key={service.number}>

              {/* Number */}
              <div className="service-number">
                {service.number}
              </div>

              {/* Icon */}
              <div className="service-icon">
                <i className={`bi ${service.icon}`}></i>
              </div>

              {/* Main title */}
              <div className="service-title-area">

                <span className="service-mobile-label">
                  {service.shortTitle}
                </span>

                <h3>{service.title}</h3>

              </div>

              {/* Description */}
              <div className="service-description">

                <p>
                  {service.description}
                </p>

                <div className="service-features">

                  {service.features.map((feature) => (
                    <span key={feature}>
                      {feature}
                    </span>
                  ))}

                </div>

              </div>

              {/* Arrow */}
              <div className="service-arrow">
                <i className="bi bi-arrow-up-right"></i>
              </div>

            </div>
          ))}

        </div>

        {/* ================================
            BOTTOM CTA
        ================================= */}

        <div className="services-bottom">

          <div className="services-bottom-text">
            <span>HAVE A PROJECT IN MIND?</span>

            <h3>
              Let's build something
              <span> remarkable.</span>
            </h3>
          </div>

          <a href="#start-project" className="services-cta">
            Start a Project
            <i className="bi bi-arrow-up-right"></i>
          </a>

        </div>

      </div>
    </section>
    </div>
  )
}

export default Services
