import React, { useState } from "react";

const StartProject = () => {
   const [selectedType, setSelectedType] = useState("Website");
  const [selectedBudget, setSelectedBudget] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const projectTypes = [
    "Website",
    "Web App",
    "E-Commerce",
    "UI/UX Design",
  ];

  const budgetOptions = [
    "Under ₹10K",
    "₹10K – ₹25K",
    "₹25K – ₹50K",
    "₹50K+",
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all required fields.");
      return;
    }

    if (!selectedBudget) {
      alert("Please select your estimated budget.");
      return;
    }

    const subject = ` VGWD Project Enquiry - ${formData.name}`;

    const body = `
Hello VGWD,

I would like to discuss a new project.

------------------------------
PROJECT DETAILS
------------------------------

Name:
${formData.name}

Email:
${formData.email}

Project Type:
${selectedType}

Estimated Budget:
${selectedBudget}

Project Details:
${formData.message}

------------------------------
Sent from VGWD Website
------------------------------
`;

    const mailtoLink =
      `mailto:vamsinaidana@gmail.com` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <div>
     <section className="vgwd-start-project team-section scroll-reveal reveal-bottom" id="start-project">

      <div className="start-project-grid"></div>
      <div className="start-project-glow"></div>
      <div className="start-project-circle"></div>

      <div className="container position-relative">

        <div className="start-project-layout">

          {/* ================= LEFT CONTENT ================= */}

          <div className="start-project-content">

            <div className="start-project-label">
              <span></span>
              START A PROJECT
            </div>

            <span className="start-project-mini">
              HAVE AN IDEA?
            </span>

            <h2>
              Let's Turn
              <br />
              Your Idea Into
              <strong> Reality.</strong>
            </h2>

            <p>
              Tell us what you're building, what you're trying to achieve,
              or simply share your idea. We'll help you turn it into a
              meaningful digital experience.
            </p>

            <div className="start-project-counter">

              <div>
                <strong>01</strong>
                <span>IDEA</span>
              </div>

              <div className="counter-line"></div>

              <div>
                <strong>02</strong>
                <span>DESIGN</span>
              </div>

              <div className="counter-line"></div>

              <div>
                <strong>03</strong>
                <span>BUILD</span>
              </div>

            </div>

          </div>


          {/* ================= FORM ================= */}

          <form
            className="start-project-form-wrapper"
            onSubmit={handleSubmit}
          >

            <div className="start-form-top">

              <div>
                <span>PROJECT BRIEF</span>
                <h3>Let's Get Started.</h3>
              </div>

              <div className="start-form-number">
                01
              </div>

            </div>


            {/* NAME + EMAIL */}

            <div className="start-form-row">

              <div className="start-form-group">

                <label>
                  YOUR NAME *
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />

              </div>


              <div className="start-form-group">

                <label>
                  EMAIL ADDRESS *
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />

              </div>

            </div>


            {/* PROJECT TYPE */}

            <div className="start-form-group">

              <label>
                WHAT ARE YOU BUILDING?
              </label>

              <div className="project-type-options">

                {projectTypes.map((type) => (

                  <button
                    type="button"
                    key={type}
                    className={
                      selectedType === type
                        ? "project-type active"
                        : "project-type"
                    }
                    onClick={() => setSelectedType(type)}
                  >
                    {type}
                  </button>

                ))}

              </div>

            </div>


            {/* BUDGET */}

            <div className="start-form-group">

              <label>
                ESTIMATED BUDGET *
              </label>

              <div className="budget-options">

                {budgetOptions.map((budget) => (

                  <button
                    type="button"
                    key={budget}
                    className={
                      selectedBudget === budget
                        ? "budget-option active"
                        : "budget-option"
                    }
                    onClick={() => setSelectedBudget(budget)}
                  >
                    {budget}
                  </button>

                ))}

              </div>

            </div>


            {/* PROJECT DETAILS */}

            <div className="start-form-group">

              <label>
                PROJECT DETAILS *
              </label>

              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us a little about your project..."
                required
              ></textarea>

            </div>


            {/* SEND BUTTON */}

            <button
              type="submit"
              className="start-project-submit"
            >

              <span>
                Send Project Request
              </span>

              <i className="bi bi-arrow-up-right"></i>

            </button>


            {/* PRIVACY */}

            <div className="start-form-note">

              <i className="bi bi-shield-check"></i>

              <span>
                Your project information is kept private.
              </span>

            </div>

          </form>

        </div>


        {/* ================= BOTTOM FEATURES ================= */}

        <div className="start-project-bottom">

          <div className="start-bottom-item">
            <i className="bi bi-lightning-charge"></i>
            <span>FAST COMMUNICATION</span>
          </div>

          <div className="start-bottom-divider"></div>

          <div className="start-bottom-item">
            <i className="bi bi-phone"></i>
            <span>RESPONSIVE DEVELOPMENT</span>
          </div>

          <div className="start-bottom-divider"></div>

          <div className="start-bottom-item">
            <i className="bi bi-code-slash"></i>
            <span>MODERN TECHNOLOGY</span>
          </div>

          <div className="start-bottom-divider"></div>

          <div className="start-bottom-item">
            <i className="bi bi-headset"></i>
            <span>ONGOING SUPPORT</span>
          </div>

        </div>

      </div>

    </section>
    </div>
  )
}

export default StartProject
