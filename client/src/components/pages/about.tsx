import React from "react";
import "./about.css";
import image from "./dyk.jpg";

const About = () => {
  return (
    <div className="aboutUs-page">
      <div className="aboutUs-header">
        <p className="aboutUs-title-container">
          <span className="aboutUs-title">The problem</span>
        </p>
        <p className="aboutUs-description">
          Social activism is more relevant than ever. Unfortunately, social
          distancing due to the COVID-19 restricts many potential avenues to
          push for reform. You can still make a difference through
          online petitions, but there is no centralized platform that show various 
          petitions from multiple categories and sources... until now.
        </p>
      </div>
      <div className="aboutUs-content">
        <div className="aboutUs-content-text">
          <h1 className="aboutUs-content-text-h1">
            Introducing Pocket Justice!
          </h1>
          <p className="aboutUs-content-text-p">
            Pocket Justice stores petitions from multiple popular sites in one place for your convenience! 
            Here you can find the newest and most popular petitions from around the web and quickly maximize your positive impact on society.
            

          </p>
          <h1 className="aboutUs-content-text-h1">The creators</h1>
          <p className="aboutUs-content-text-p">
            We're three computer science students from Texas A&M university who wanted to use technology to aid growing movements like BLM in some way.
            Adil Rasiyani (left) enjoys creating new things and playing badminton, James Wang (middle) is an avid web novel reader who is also the life of the party, and Nikhil Singh (right) likes to play freeze tag and do anything other than study.
          </p>
          <h1 className="aboutUs-content-text-h1">Contact us:</h1>
          <p className="aboutUs-content-text-p">
            Nikhil: nikhil.houston@tamu.edu
            <br/>
            James: james.wang@tamu.edu
            <br/>
            Adil: adil.rasiyani@tamu.edu
          </p>
        </div>
        <div className="aboutUs-content-image">
          <div className="aboutUs-content-image-container">
            <img
              src={image}
              style={{ height: "500px", width: "auto" }}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
