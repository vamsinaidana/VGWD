
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollRevealHandler() {
  const location = useLocation();

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
      element.classList.remove("show");
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [location.pathname, location.hash]);

  return null;
}

export default ScrollRevealHandler;
