 import React, { useEffect, useState } from "react";
 import { NavLink } from "react-router-dom";
 
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
          <a href="/" className="vgwd-logo img-fluid" onClick={closeMenu}>
            {/* <span className="logo-bracket">&lt;</span>
            <span className="logo-name">VGWD</span>
            <span className="logo-bracket">/&gt;</span> */}
             <img src="/logov.png" alt="VGWD Logo" />
          </a>

          {/* Desktop Navigation */}
          <div className={`vgwd-nav-links ${menuOpen ? "menu-open" : ""}`}>

            <NavLink to="/"  className="nav-link" onClick={closeMenu}>
              Home
            </NavLink>

            <NavLink to="/about"  className="nav-link" onClick={closeMenu}>
              About
            </NavLink>

            

             
             

            <NavLink to="/projects"  className="nav-link" onClick={closeMenu}>
              Projects
            </NavLink>

            <NavLink to="/team"  className="nav-link" onClick={closeMenu}>
               Team
            </NavLink>

            <NavLink to="/contact"  className="nav-link" onClick={closeMenu}>
              Contact
            </NavLink>
              <NavLink to="/startproject"  className="nav-link" onClick={closeMenu}>
              Start a Project
            </NavLink>
             <NavLink to="https://reviewsvgwd-wao2.vercel.app/"  className="nav-link" onClick={closeMenu}>
            Reviews
            </NavLink>

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
            <NavLink to="/startproject" className="nav-project-btn">
              Start a Project
              <i className="bi bi-arrow-up-right"></i>
            </NavLink>

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
 