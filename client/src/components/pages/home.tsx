import React from "react";
import "./home.css";
import image1 from "./blm1.jpg";
import image2 from "./petition1.jpg";
import image3 from "./blm3.jpg";
import { Button } from "antd";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  function handleStart() {
    history.push("/petition");
  }
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div className="Pocketjustice">
        <p className="titletext-home">Pocket Justice</p>
        <p className="description-home">
          The power to find all you want to know about #BLM and other movements
          right in your pocket
        </p>
        <div className="title-button-home">
          <Button ghost shape="round" size="large" onClick={handleStart}>
            Start Now
          </Button>
        </div>
      </div>
      <div className="home-content">
        <div className="home-content-card1">
          <img className="home-content-image" src={image1} alt="" />
          <p className="home-content-text home-content-text-header">
            Take Action
          </p>
          <p className="home-content-text">
            Support petitions by raising awareness and knowledge about various
            movements.
          </p>
        </div>
        <div className="home-content-card2">
          <img className="home-content-image" src={image2} alt="" />
          <p className="home-content-text home-content-text-header">Impact</p>
          <p className="home-content-text">
            The BLM campaign and many other movements seek to provide a healthy
            environment for everyone.
          </p>
        </div>
        <div className="home-content-card3">
          <img className="home-content-image" src={image3} alt="" />
          <p className="home-content-text home-content-text-header">
            Did you know
          </p>
          <p className="home-content-text">
            #BLM was founded in 2013 and supporters have been fighting ever
            since.
          </p>
        </div>
      </div>
      <div className="home-footer">
        <p>
          "There comes a time when silence is betrayal" - Martin Luther King,
          Jr.
        </p>
      </div>
    </div>
  );
};
export default Home;
