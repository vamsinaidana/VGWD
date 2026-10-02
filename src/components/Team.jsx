import React from 'react'

const Team = () => {
      const teamMembers = [
    {
      id: "01",
      name: "Vamsi Naidana",
      role: "Founder & CEO",
      position: "Web Developer",
      image: "https://vamsin.netlify.app/head.jpeg",
      description:
        "Leading VGWD with a passion for modern web experiences, creative solutions and scalable digital products.",
      linkedin: "#",
      github: "#",
    },
    {
      id: "02",
      name: "Vijay Chiranjeevi",
      role: "QA Analyst",
      position: "Quality Assurance",
      image: "vijay.jpg",
      description:
        "Focused on quality, testing and ensuring every digital experience works smoothly across different environments.",
      linkedin: "#",
      github: "#",
    },
    {
      id: "03",
      name: "Nitish",
      role: "Developer",
      position: "Web Development",
      image: "/nitish.png",
      description:
        "Building responsive and reliable web solutions with a focus on clean code, performance and usability.",
      linkedin: "#",
      github: "#",
    },
    {
      id: "04",
      name: "anjali",
      role: "Cloud Engineer",
      position: "Cloud & Infrastructure",
      image: "/anjali.jpg",
      description:
        "Working with modern cloud technologies and infrastructure to help applications stay reliable and scalable.",
      linkedin: "#",
      github: "#",
    },
  ];
  return (
    <div>
        <section className="vgwd-team section team-section scroll-reveal reveal-bottom" id="team">

      {/* Background Elements */}
      <div className="team-orb team-orb-one"></div>
      <div className="team-orb team-orb-two"></div>

      <div className="container position-relative">

        {/* ================= HEADER ================= */}

        <div className="team-header">

          <div className="team-label">
            <span></span>
            OUR TEAM
          </div>

          <div className="team-heading-row">

            <div>
              <span className="team-mini">
                THE PEOPLE BEHIND VGWD
              </span>

              <h2 className=" white-text">
                Meet The
                <br />
                <strong>Team.</strong>
              </h2>
            </div>

            <p className="white-text">
              Great digital products are built by people who care about
              design, technology, quality and the experience behind every
              interaction.
            </p>

          </div>

        </div>


        {/* ================= TEAM GRID ================= */}

        <div className="team-grid">

          {teamMembers.map((member) => (

            <article
              className="team-card"
              key={member.id}
            >

              {/* Top Number */}

              <div className="team-card-top">

                <span className="team-number">
                  {member.id}
                </span>

                <span className="team-status">
                  <i className="bi bi-circle-fill"></i>
                  VGWD TEAM
                </span>

              </div>


              {/* IMAGE */}

              <div className="team-image-wrapper">

                <div className="team-image-bg"></div>

                <img
                  src={member.image}
                  alt={member.name}
                  className="team-image"
                />

                <div className="team-image-overlay"></div>


                {/* Role Badge */}

                <div className="team-role-badge">
                  {member.role}
                </div>


                {/* Socials */}

                <div className="team-image-socials">

                  <a
                    href="#"
                     rel="noreferrer"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>

                  <a
                    href="#"
                     rel="noreferrer"
                    aria-label={`${member.name} GitHub`}
                  >
                    <i className="bi bi-github"></i>
                  </a>

                </div>

              </div>


              {/* CONTENT */}

              <div className="team-card-content">

                <div className="team-name-row">

                  <div>
                    <h3>{member.name}</h3>

                    <span className="team-position">
                      {member.position}
                    </span>
                  </div>

                  <i className="bi bi-arrow-up-right team-card-arrow"></i>

                </div>


                {/* Stars */}

                <div className="team-rating">

                  <div className="team-stars">

                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>

                  </div>

                  <span>5.0</span>

                </div>


                <p className=" white-text">
                  {member.description}
                </p>

              </div>


              {/* Bottom Line */}

              <div className="team-card-line"></div>

            </article>

          ))}

        </div>


        {/* ================= BOTTOM ================= */}

        <div className="team-bottom">

          <div className="team-bottom-left">

            <span>ONE TEAM</span>

            <strong>
              ONE VISION
            </strong>

          </div>

          <div className="team-bottom-line"></div>

          <div className="team-bottom-right">

            <i className="bi bi-arrow-right"></i>

            <span>
              DESIGN • DEVELOP • DELIVER
            </span>

          </div>

        </div>

      </div>

    </section>
    </div>
  )
}

export default Team
