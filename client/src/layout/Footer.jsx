import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import fb from "../assets/fb.png";
import yt from "../assets/yt.png";
import git from "../assets/git.png";
import linkedin from "../assets/linkedin.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>MERN Authentication</h2>
          <p>Your ultimate guide to mastering the skills.</p>
        </div>
        <div className="footer-social">
          <h3>Follow Me</h3>
          <div className="social-icons">
            
            <Link
              to="https://www.linkedin.com/in/mohammed-afnan098/
"
              target="_blank"
              className="social-link"
            >
              <img src={linkedin} alt="LinkedIn" />
            </Link>
            <Link
              to="https://github.com/mdafnan3579
"
              target="_blank"
              className="social-link"
            >
              <img src={git} alt="GitHub" />
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Authentication. All Rights Reserved.</p>
        <p>Designed by Mohammed Afnan</p>
      </div>
    </footer>
  );
};

export default Footer;
