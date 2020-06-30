import React from "react";
import "./about.css";
import image from "./dyk.jpg";

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
          <h1 className="aboutUs-content-text-h1">How we began:</h1>
          <p className="aboutUs-content-text-p">
            Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
            Blah Blah Blah Blah Blah Blah Blah Blah
          </p>
          <h1 className="aboutUs-content-text-h1">Our product:</h1>
          <p className="aboutUs-content-text-p">
            Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
            Blah Blah Blah Blah Blah Blah Blah Blah
          </p>
          <h1 className="aboutUs-content-text-h1">Our experience:</h1>
          <p className="aboutUs-content-text-p">
            Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
            Blah Blah Blah Blah Blah Blah Blah Blah
          </p>
        </div>
        <div className="aboutUs-content-image">
          <div className="aboutUs-content-image-container">
            <img src={image} style={{ height: "500px", width:"auto" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
