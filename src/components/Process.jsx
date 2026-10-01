const processSteps = [
  {
    number: "01",
    icon: "bi-chat-square-text",
    title: "Discover",
    subtitle: "Understand the Vision",
    description:
      "We start by understanding your business, goals, audience and project requirements before writing a single line of code.",
    points: ["Project Discussion", "Requirements", "Goals & Strategy"],
  },
  {
    number: "02",
    icon: "bi-bezier2",
    title: "Plan & Design",
    subtitle: "Turn Ideas Into Structure",
    description:
      "We transform your ideas into a clear visual direction with thoughtful layouts, user flows and responsive design.",
    points: ["Wireframes", "UI Direction", "User Experience"],
  },
  {
    number: "03",
    icon: "bi-code-slash",
    title: "Develop",
    subtitle: "Build With Precision",
    description:
      "Our development process turns the approved design into a fast, responsive and interactive digital experience.",
    points: ["Frontend Development", "API Integration", "Responsive Build"],
  },
  {
    number: "04",
    icon: "bi-check2-circle",
    title: "Test & Refine",
    subtitle: "Perfect Every Detail",
    description:
      "We test the experience across devices and screen sizes, identify issues and refine the product before launch.",
    points: ["Testing", "Performance", "Quality Check"],
  },
  {
    number: "05",
    icon: "bi-rocket-takeoff",
    title: "Launch",
    subtitle: "Take It Live",
    description:
      "Once everything is ready, we deploy your website and help you move confidently from development to the real world.",
    points: ["Deployment", "Final Review", "Launch Support"],
  },
];

const Process = () => {
  return (
    <div>
     <section className="vgwd-process section" id="process">

      {/* Background */}
      <div className="process-bg process-bg-one"></div>
      <div className="process-bg process-bg-two"></div>

      <div className="container">

        {/* =================================
            HEADER
        ================================= */}

        <div className="process-header">

          <div className="process-label">
            <span></span>
            OUR PROCESS
          </div>

          <div className="process-header-note">
            <i className="bi bi-arrow-down-right"></i>
            <span>HOW WE WORK</span>
          </div>

        </div>


        {/* =================================
            INTRO
        ================================= */}

        <div className="process-intro">

          <div className="row align-items-end">

            <div className="col-lg-8">

              <h2 className="white-text">
                From First Idea
                <br />
                <span>To Final Launch.</span>
              </h2>

            </div>

            <div className="col-lg-4">

              <p className="white-text">
                A simple, transparent and focused process that turns
                your idea into a digital experience built to perform.
              </p>

            </div>

          </div>

        </div>


        {/* =================================
            PROCESS TIMELINE
        ================================= */}

        <div className="process-timeline">

          {/* Center Line */}
          <div className="process-line">
            <div className="process-line-progress"></div>
          </div>


          {processSteps.map((step, index) => (

            <div
              className={`process-step ${
                index % 2 === 0
                  ? "process-step-left"
                  : "process-step-right"
              }`}
              key={step.number}
            >

              {/* Content Card */}
              <div className="process-card">

                <div className="process-card-top">

                  <span className="process-card-number">
                    {step.number}
                  </span>

                  <div className="process-icon">
                    <i className={`bi ${step.icon}`}></i>
                  </div>

                </div>


                <div className="process-card-content">

                  <span className="process-subtitle">
                    {step.subtitle}
                  </span>

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>

                  <div className="process-points">

                    {step.points.map((point) => (
                      <span key={point}>
                        <i className="bi bi-check2"></i>
                        {point}
                      </span>
                    ))}

                  </div>

                </div>

              </div>


              {/* Center Node */}
              <div className="process-node">
                <span>{step.number}</span>
              </div>

            </div>

          ))}

        </div>


        {/* =================================
            BOTTOM STATEMENT
        ================================= */}

        <div className="process-bottom">

          <div className="process-bottom-icon">
            <i className="bi bi-lightning-charge-fill"></i>
          </div>

          <div className="process-bottom-content">

            <span>OUR APPROACH</span>

            <h3>
              Clear process.
              <span> Better results.</span>
            </h3>

          </div>

          <a href="#start-project" className="process-bottom-btn">
            Start Your Project
            <i className="bi bi-arrow-up-right"></i>
          </a>

        </div>

      </div>

    </section>
    </div>
  )
}

export default Process
