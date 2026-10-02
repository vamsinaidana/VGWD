import React, { useState } from "react";

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      id: "01",
      question: "What type of websites does VGWD build?",
      answer:
        "VGWD builds modern, responsive and business-focused websites including company websites, portfolios, landing pages, developer platforms, e-commerce interfaces and custom React applications.",
    },
    {
      id: "02",
      question: "How does the website development process work?",
      answer:
        "We follow a clear process starting with understanding your requirements, planning the structure, designing the experience, developing the website, testing every important detail and finally launching the project.",
    },
    {
      id: "03",
      question: "Can you build a website using React?",
      answer:
        "Yes. React can be used when the project benefits from component-based architecture, interactive interfaces and scalable frontend development. The technology is selected according to the project's requirements.",
    },
    {
      id: "04",
      question: "Will my website work on mobile devices?",
      answer:
        "Yes. Responsive layouts are considered throughout development so the website can adapt to desktops, tablets and mobile devices.",
    },
    {
      id: "05",
      question: "Can I request custom features?",
      answer:
        "Absolutely. Custom features can be discussed based on your business requirements. Features may include forms, animations, API integrations, authentication, e-commerce functionality and other web capabilities.",
    },
    {
      id: "06",
      question: "Do you provide website maintenance after launch?",
      answer:
        "Yes. Maintenance and support can be arranged after launch for updates, improvements, bug fixes, content changes and ongoing website assistance.",
    },
    {
      id: "07",
      question: "How long does it take to build a website?",
      answer:
        "The timeline depends on the project's scope, number of pages, features, content and integrations. A more detailed timeline can be discussed after understanding the complete requirements.",
    },
    {
      id: "08",
      question: "How can I start a project with VGWD?",
      answer:
        "Simply contact VGWD and share your idea, requirements or business goals. We can then discuss the project scope, suitable approach, timeline and next steps.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
     <section className="vgwd-faq section team-section scroll-reveal reveal-bottom" id="faq">

      {/* Background */}
      <div className="faq-grid-bg"></div>
      <div className="faq-orb faq-orb-one"></div>
      <div className="faq-orb faq-orb-two"></div>

      <div className="container position-relative">

        {/* HEADER */}
        <div className="faq-header">

          <div className="faq-label">
            <span></span>
            FAQ
          </div>

          <div className="faq-heading-row">

            <div>
              <span className="faq-mini-title">
                QUESTIONS & ANSWERS
              </span>

              <h2 className="white-text">
                Everything You
                <br />
                <strong>Need To Know.</strong>
              </h2>
            </div>

            <p className="white-text">
              Have questions about working with VGWD? Find answers to some of
              the most common questions about our process, development and
              services.
            </p>

          </div>

        </div>


        {/* FAQ CONTENT */}
        <div className="faq-layout">

          {/* LEFT SIDE */}
          <div className="faq-side">

            <div className="faq-side-number white-text">
              08
            </div>

            <span className="faq-side-label">
              COMMON QUESTIONS
            </span>

            <h3 className=" white-text">
              Clear answers.
              <br />
              <strong>No confusion.</strong>
            </h3>

            <p className="white-text">
              We believe good communication is just as important as good
              development. If you don't find what you're looking for, reach
              out to us directly.
            </p>

            <a href="#contact" className="faq-side-btn">
              Ask VGWD
              <i className="bi bi-arrow-up-right"></i>
            </a>

          </div>


          {/* RIGHT ACCORDION */}
          <div className="faq-list">

            {faqs.map((faq, index) => {

              const isActive = activeIndex === index;

              return (
                <div
                  className={`faq-item ${
                    isActive ? "faq-item-active" : ""
                  }`}
                  key={faq.id}
                >

                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isActive}
                  >

                    <div className="faq-question-left">

                      <span className="faq-number">
                        {faq.id}
                      </span>

                      <span className="faq-question-text white-text">
                        {faq.question}
                      </span>

                    </div>

                    <span className="faq-icon">
                      <i
                        className={
                          isActive
                            ? "bi bi-dash"
                            : "bi bi-plus"
                        }
                      ></i>
                    </span>

                  </button>


                  <div
                    className={`faq-answer ${
                      isActive ? "faq-answer-open" : ""
                    }`}
                  >
                    <div className="faq-answer-inner">
                      <p className="white-text">{faq.answer}</p>
                    </div>
                  </div>

                </div>
              );
            })}

          </div>

        </div>


        {/* BOTTOM CTA */}
        <div className="faq-bottom">

          <div className="faq-bottom-left">

            <div className="faq-bottom-icon">
              <i className="bi bi-chat-dots"></i>
            </div>

            <div>
              <span>CAN'T FIND YOUR ANSWER?</span>

              <h3>
                Let's talk about
                <strong> your project.</strong>
              </h3>
            </div>

          </div>

          <a href="#contact" className="faq-bottom-btn">
            Start A Conversation
            <i className="bi bi-arrow-up-right"></i>
          </a>

        </div>

      </div>

    </section>
    </div>
  )
}

export default FAQ
