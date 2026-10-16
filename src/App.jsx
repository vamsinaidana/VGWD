
import { useState, useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import WhyVGWD from "./components/WhyVGWD";
import Services from "./components/Services";
import Process from "./components/Process";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import StartProject from "./components/StartProject";
import Footer from "./components/Footer";
import Team from "./components/Team";

function App() {
  // Dark mode state FIRST
  const [darkMode, setDarkMode] = useState(false);

  // Scroll reveal animation
  useEffect(() => {
    const elements = document.querySelectorAll(".scroll-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Routes
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
          <Hero />
          <About />
          <Services />
          <Process />
          <WhyVGWD />
          <Testimonials />
          <Pricing />
          <FAQ />
          <Footer />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
          <About />
          <Footer />
        </>
      ),
    },
    {
      path: "/projects",
      element: (
        <>
          <Navbar
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
          <Projects />
          <Footer />
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
          <Navbar
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
          <Contact />
          <Footer />
        </>
      ),
    },
    {
      path: "/startproject",
      element: (
        <>
          <Navbar
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
          <StartProject />
          <Footer />
        </>
      ),
    },
    {
      path: "/team",
      element: (
        <>
           
          <Team />
          <Footer />
        </>
      ),
    },
  ]);

  return (
    <div className={darkMode ? "app dark-mode" : "app light-mode"}>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
