import React from 'react'

const Pricing = () => {
   const plans = [
    {
      id: "01",
      name: "Starter",
      tag: "FOR NEW IDEAS",
      price: "₹9,999",
      description:
        "A clean and professional website to establish your digital presence.",
      features: [
        "Up to 5 Pages",
        "Responsive Design",
        "Modern UI Design",
        "Contact Form",
        "Basic SEO Setup",
        "Social Media Integration",
      ],
      button: "Start With Starter",
    },
    {
      id: "02",
      name: "Growth",
      tag: "MOST POPULAR",
      price: "₹19,999",
      description:
        "A powerful website experience designed for growing businesses and brands.",
      features: [
        "Up to 10 Pages",
        "Premium UI/UX Design",
        "React Development",
        "Advanced Animations",
        "SEO Optimization",
        "Performance Optimization",
        "Deployment Support",
      ],
      button: "Choose Growth",
      popular: true,
    },
    {
      id: "03",
      name: "Custom",
      tag: "FOR BIGGER VISIONS",
      price: "Let's Talk",
      description:
        "A completely tailored digital solution built around your business requirements.",
      features: [
        "Custom Page Structure",
        "Advanced Web Features",
        "E-Commerce Solutions",
        "API Integrations",
        "Custom Animations",
        "Priority Support",
        "Scalable Architecture",
      ],
      button: "Get Custom Quote",
    },
  ];

  return (
    <div>
       <section className="vgwd-pricing section team-section scroll-reveal reveal-bottom" id="pricing">
      <div className="pricing-orb pricing-orb-one"></div>
      <div className="pricing-orb pricing-orb-two"></div>

      <div className="container position-relative">

        {/* HEADER */}
        <div className="pricing-header">

          <div className="pricing-label">
            <span></span>
            PRICING
          </div>

          <div className="pricing-heading-row">

            <div>
              <span className="pricing-mini-title">
                SIMPLE & TRANSPARENT
              </span>

              <h2 className=" white-text">
                Plans That Fit
                <strong> Your Vision.</strong>
              </h2>
            </div>

            <p className="white-text">
              Whether you're starting from scratch or scaling an existing
              business, choose a package that matches your digital goals.
            </p>

          </div>
        </div>


        {/* PRICING CARDS */}
        <div className="pricing-grid">

          {plans.map((plan) => (
            <article
              className={`pricing-card ${
                plan.popular ? "pricing-card-popular" : ""
              }`}
              key={plan.id}
            >

              {/* TOP */}
              <div className="pricing-card-top">

                <div className="pricing-number">
                  {plan.id}
                </div>

                {plan.popular && (
                  <div className="popular-badge">
                    <i className="bi bi-stars"></i>
                    {plan.tag}
                  </div>
                )}

                {!plan.popular && (
                  <span className="pricing-tag">
                    {plan.tag}
                  </span>
                )}

              </div>


              {/* PLAN NAME */}
              <div className="pricing-plan-name">
                <h3>{plan.name}</h3>

                <div className="pricing-price">
                  {plan.price}
                </div>

                <p className="white-text">{plan.description}</p>
              </div>


              {/* FEATURES */}
              <div className="pricing-features">

                <span className="pricing-feature-title">
                  WHAT'S INCLUDED
                </span>

                <ul>
                  {plan.features.map((feature, index) => (
                    <li className="white-text" key={index}>
                      <span className="feature-icon">
                        <i className="bi bi-check2"></i>
                      </span>

                      {feature}
                    </li>
                  ))}
                </ul>

              </div>


              {/* BUTTON */}
              <button className="pricing-btn">
                {plan.button}

                <i className="bi bi-arrow-up-right"></i>
              </button>

            </article>
          ))}

        </div>


        {/* BOTTOM CTA */}
        <div className="pricing-bottom">

          <div className="pricing-bottom-icon">
            <i className="bi bi-chat-square-text"></i>
          </div>

          <div className="pricing-bottom-content">
            <span>NEED SOMETHING DIFFERENT?</span>

            <h3>
              Let's build a package
              <strong> around you.</strong>
            </h3>
          </div>

          <a href="#contact" className="pricing-contact-btn">
            Talk To VGWD
            <i className="bi bi-arrow-up-right"></i>
          </a>

        </div>

      </div>
    </section>
    </div>
  )
}

export default Pricing
