 import React, { useEffect, useState } from "react";
 
 const Navbar = ({ darkMode, setDarkMode }) => {
 

   const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };


     


   return (
     <div>

    <nav className={`vgwd-navbar  ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container">
        <div className="navbar-inner">

          {/* Logo */}
          <a href="#home" className="vgwd-logo" onClick={closeMenu}>
            {/* <span className="logo-bracket">&lt;</span>
            <span className="logo-name">VGWD</span>
            <span className="logo-bracket">/&gt;</span> */}
             <img src="/logov.png" alt="VGWD Logo" />
          </a>

          {/* Desktop Navigation */}
          <div className={`vgwd-nav-links ${menuOpen ? "menu-open" : ""}`}>

            <a href="#home" className="nav-link active" onClick={closeMenu}>
              Home
            </a>

            <a href="#about" className="nav-link" onClick={closeMenu}>
              About
            </a>

            <a href="#services" className="nav-link" onClick={closeMenu}>
              Services
            </a>

            <a href="#process" className="nav-link" onClick={closeMenu}>
              Process
            </a>

            <a href="#projects" className="nav-link" onClick={closeMenu}>
              Projects
            </a>

            <a href="#team" className="nav-link" onClick={closeMenu}>
               Team
            </a>

            <a href="#contact" className="nav-link" onClick={closeMenu}>
              Contact
            </a>

            {/* Mobile CTA */}
            <a
              href="#start-project"
              className="mobile-project-btn"
              onClick={closeMenu}
            >
              Start a Project
              <i className="bi bi-arrow-up-right"></i>
            </a>
          </div>

          {/* Right Actions */}
          <div className="navbar-actions">

            {/* Theme Toggle */}
            <button
              className="theme-toggle"
             onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle dark mode"
            >
              <i
                className={
                  darkMode
                    ? "bi bi-sun-fill"
                    : "bi bi-moon-stars-fill"
                }
              ></i>
            </button>

            {/* Desktop CTA */}
            <a href="#start-project" className="nav-project-btn">
              Start a Project
              <i className="bi bi-arrow-up-right"></i>
            </a>

            {/* Mobile Toggle */}
            <button
              className={`mobile-toggle ${
                menuOpen ? "toggle-active" : ""
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

          </div>
        </div>
      </div>
    </nav>
     </div>
   )
 }
 
 export default Navbar
 