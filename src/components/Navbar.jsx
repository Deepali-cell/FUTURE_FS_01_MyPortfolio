import { useState } from "react";
import "../css_files/Navbar.css";
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div id="navbar">
        <img src="/logo.png" alt="logo" id="logo" />

        <ul className="nav_list">
          <a href="#home">
            <li>Home</li>
          </a>
          <a href="#about">
            <li>About Me</li>
          </a>
          <a href="#recentcase">
            <li>Recent-Cases</li>
          </a>
          <a href="#testimonial">
            <li>Testimonials</li>
          </a>
          <a href="#experience">
            <li>Experience</li>
          </a>
          <a href="#education">
            <li>Education</li>
          </a>
          <a href="#skills">
            <li>Skills</li>
          </a>
          <a href="#contact">
            <li>Contact-Me</li>
          </a>
        </ul>

        <TiThMenu id="menuicon" onClick={() => setOpen(!open)} />
      </div>

      {/* Mobile Menu */}
      {open && (
        <div id="mobile_nav">
          <ul className="mobile_nav_list">
            <a href="#home">
              <li onClick={() => setOpen(false)}>Home</li>
            </a>
            <a href="#about">
              <li onClick={() => setOpen(false)}>About Me</li>
            </a>
            <a href="#recentcase">
              <li onClick={() => setOpen(false)}>Recent-Cases</li>
            </a>
            <a href="#testimonial">
              <li onClick={() => setOpen(false)}>Testimonials</li>
            </a>
            <a href="#experience">
              <li onClick={() => setOpen(false)}>Experience</li>
            </a>
            <a href="#education">
              <li onClick={() => setOpen(false)}>Education</li>
            </a>
            <a href="#skills">
              <li onClick={() => setOpen(false)}>Skills</li>
            </a>
            <a href="#contactme">
              <li onClick={() => setOpen(false)}>Contact-Me</li>
            </a>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
