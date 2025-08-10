import React from "react";
import "../styles/Instructor.css";
import instructorImage from "../assets/profile.png";

const Instructor = () => {
  return (
    <div className="instructor-page">
      <div className="instructor-card">
        <div className="instructor-image">
          <img src={instructorImage} alt="Instructor" />
        </div>
        <div className="instructor-info">
          <h1>Mohammed Afnan</h1>
          <h4>Your Instructor</h4>
          <p>
            Hello! I'm Mohammed Afnan, a passionate full stack developer
            with a love for teaching and building scalable, robust applications.
            With years of experience in JavaScript, React, Node.js, Express, and
            MongoDB, I am dedicated to helping developers learn and grow their
            skills. Join me in this journey to master authentication 
          </p>
          <div className="social-links">
            <a
              href="https://github.com/mdafnan3579
"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mohammed-afnan098/
"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
