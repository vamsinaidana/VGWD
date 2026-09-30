 
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import WhyVGWD from './components/WhyVGWD'
import Services from './components/Services'
import Process from './components/Process'
import Hero from './components/Hero'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import StartProject from './components/StartProject'
import Footer from './components/Footer'
import Team from './components/Team'
 

import { useState } from "react";









function App() {
   const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "app dark-mode" : "app light-mode"}>
       <Navbar   darkMode={darkMode}
        setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Services />
      <Process />
      <Projects />
      <Team />
       <WhyVGWD />
      <Testimonials />
      <Pricing />
      <FAQ />
      <StartProject />
      <Contact />
      <Footer />
    </div>
    
  )
}

export default App
