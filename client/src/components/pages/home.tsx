import React, { useState, useEffect } from "react";
import "./home.css";
import image from "./dyk.jpg";
import { Button, Radio } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import history from "./hist";
const buttonClick = () => {
   history.push("/" + "petitions");
   window.location.reload();
 };
const Home = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div className="Pocketjustice">
        <p className="titletext-home">Pocket Justice</p>
        <p className="description-home">
          The power to find all you want to know about #BLM and other movements
          right in your pocket
        </p>
        <div className="title-button-home">
          <Button ghost shape="round" size="large" onClick={buttonClick}>
            Start Now
          </Button>
        </div>
      </div>
      <div className="Purpose">
        <div className="text">
          <p className="purposeTitle">Our purpose</p>
          <p className="purposeDesc">
            We look toward building a platform that furthers the awareness and
            accessibility that people have for...
          </p>
        </div>
        <div className="picture">
          <img src={image} />
        </div>
      </div>
    </div>
  );
};
export default Home;
