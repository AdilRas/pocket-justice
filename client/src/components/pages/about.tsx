import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="aboutUs-page">
      <div className="aboutUs-header">
        <p>
          <span className="aboutUs-title">About Us</span>
        </p>
        <p className="aboutUs-description">
          Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
          Blah
        </p>
      </div>
      <div className="aboutUs-content">
        <div className="aboutUs-content-text">
            <h1>
                text
            </h1>
            <p>
                make this crap go to the bottom of the screen
            </p>
        </div>
        <div className="aboutUs-content-image">
            <h1>
                image
            </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
