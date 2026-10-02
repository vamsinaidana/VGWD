import React, { useRef } from "react";

const Testimonials = () => {
   const sliderRef = useRef(null);

  const testimonials = [
    {
      id: "01",
      name: "Kranthi Kumar",
      role: "Focus40 Academy Founder",
      text: "VGWD understood our idea and transformed it into a clean, modern and responsive digital experience.",
      rating: 5,
    },
    {
      id: "02",
      name: "Divya",
      role: "Startup Founder",
      text: "The communication, attention to detail and development quality made the entire project smooth.",
      rating: 5,
    },
    {
      id: "03",
      name: "Jessy Prasanna",
      role: "Product Owner",
      text: "We wanted something professional and easy to use. VGWD delivered exactly the kind of experience we were looking for.",
      rating: 5,
    },
    {
      id: "04",
      name: "Reddy",
      role: "Entrepreneur",
      text: "From the first idea to the final product, the process was clear, creative and well organised.",
      rating: 5,
    },
    {
      id: "05",
      name: "Shabber Mohammad",
      role: "Creative Director",
      text: "VGWD combines thoughtful design with modern development. The final result felt polished and professional.",
      rating: 5,
    },
  ];

  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: direction === "next" ? 420 : -420,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
       <section className="vgwd-testimonials team-section scroll-reveal reveal-bottom" id="testimonials">

      <div className="testimonial-orb testimonial-orb-one"></div>
      <div className="testimonial-orb testimonial-orb-two"></div>

      <div className="container position-relative">

        {/* HEADER */}

        <div className="testimonials-header">

          <div className="testimonials-label">
            <span></span>
            TESTIMONIALS
          </div>

          <div className="testimonial-controls">

            <button
              type="button"
              onClick={() => scrollSlider("prev")}
              aria-label="Previous testimonials"
            >
              <i className="bi bi-arrow-left"></i>
            </button>

            <button
              type="button"
              onClick={() => scrollSlider("next")}
              aria-label="Next testimonials"
            >
              <i className="bi bi-arrow-right"></i>
            </button>

          </div>

        </div>


        {/* INTRO */}

        <div className="testimonials-intro">

          <div>
            <span>WHAT PEOPLE SAY</span>

            <h2>
              Words That
              <strong> Matter.</strong>
            </h2>
          </div>

          <p>
            Great digital experiences are built through collaboration,
            trust and attention to every detail. Here's what our clients
            have to say.
          </p>

        </div>


        {/* TESTIMONIAL SCROLL */}

        <div
          className="testimonials-track"
          ref={sliderRef}
        >

          {testimonials.map((testimonial) => (

            <article
              className="testimonial-card"
              key={testimonial.id}
            >

              {/* TOP */}

              <div className="testimonial-top">

                <span className="testimonial-number">
                  {testimonial.id}
                </span>

                <div className="testimonial-stars">

                  {Array.from(
                    { length: testimonial.rating },
                    (_, index) => (
                      <i
                        className="bi bi-star-fill"
                        key={index}
                      ></i>
                    )
                  )}

                </div>

              </div>


              {/* QUOTE */}

              <div className="testimonial-quote">
                <i className="bi bi-quote"></i>
              </div>


              <p className="testimonial-text">
                {testimonial.text}
              </p>


              {/* CLIENT */}

              <div className="testimonial-client">

                <div className="testimonial-avatar">
                  {testimonial.name.charAt(0)}
                </div>

                <div>

                  <h3 className="white-text">
                    {testimonial.name}
                  </h3>

                  <span>
                    {testimonial.role}
                  </span>

                </div>

              </div>


              {/* BOTTOM */}

              <div className="testimonial-line"></div>

            </article>

          ))}

        </div>


        {/* BOTTOM INFO */}

        <div className="testimonials-bottom">

          <div className="testimonial-scroll-info">

            <i className="bi bi-arrow-left-right"></i>

            <span>
              SCROLL TO EXPLORE
            </span>

          </div>

          <div className="testimonial-count">
            <strong>05</strong>
            <span>CLIENT VOICES</span>
          </div>

        </div>

      </div>

    </section>
    </div>
  )
}

export default Testimonials
