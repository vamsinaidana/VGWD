import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
  import App from './App.jsx'
 import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./css/navbar.css";
import "./css/hero.css";
import "./css/about.css";
import "./css/services.css";
import "./css/process.css";
import "./css/projects.css";
import "./css/whyvgwd.css";
import "./css/testimoials.css";
import "./css/pricing.css";
import "./css/faq.css";
import "./css/startproject.css";
import "./css/contact.css";
import "./css/footer.css";
 import "./index.css";
 import "./css/team.css";
 import "@fortawesome/fontawesome-free/css/all.min.css";
 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
