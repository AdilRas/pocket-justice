import React from "react";
import "./home.css";
import image1 from "./blm1.jpg";
import image2 from "./petition1.jpg";
import image3 from "./blm3.jpg";
import { Row, Col, Button, Divider } from "antd";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  function handleStart() {
    history.push("/petition");
  }
  return (
    <div style={{ width: `100%`, justifyContent: "center", overflowY: "scroll", backgroundColor: `#e5e5e5`}}>
      <Row justify="center" align="middle" style={{ height: `40%` }}>
        <div className="Pocketjustice">
          <Col span={24}>
            <Row justify="center" align="middle">
              <Col span={24}>
                <p className="titletext-home">Pocket Justice</p>
              </Col>
            </Row>
            <Row justify="center" align="middle">
              <Col span={24}>
                <p className="description-home">
                  The power to find all you want to know about social justice movements
                  right in your pocket
                </p>
              </Col>
            </Row>
            <Row justify="center" align="middle">
              <Col span={24}>
                <div className="startbutton-home">
                  <Button ghost shape="round" size="large" onClick={handleStart}>
                    Start Now
                  </Button>
                </div>
              </Col>
            </Row>
          </Col>
        </div>
      </Row>
      <Row justify="center" align="middle" style={{ height: 'content', minHeight: "45%", backgroundColor: '#e5e5e5' }}>
        <Col>
          <div className="captioned-figure">
            <img className="home-content-image" src={image1} alt="" />
            <p className="figcaption home-content-text-header">
              Take Action
            </p>
            <p className="figcaption">
              Support petitions by raising awareness and knowledge about various
              movements.
            </p>
          </div>
        </Col>
        <Col>
          <div className="captioned-figure">
            <img className="home-content-image" src={image2} alt="" />
            <p className="figcaption home-content-text-header">Impact</p>
            <p className="figcaption">
              The BLM campaign and many other movements seek to provide a healthy
              environment for everyone.
            </p>
          </div>
        </Col>
        <Col>
          <div className="captioned-figure">
            <img className="home-content-image" src={image3} alt="" />
            <p className="figcaption home-content-text-header">
              Did you know
            </p>
            <p className="figcaption">
              #BLM was founded in 2013 and supporters have been fighting ever
              since.
            </p>
          </div>
        </Col>

      </Row>
      <Row justify="center" align="middle">
        <Col>
          <div className="home-footer">
            <q>
              There comes a time when silence is betrayal
            </q>
            <Divider><p style={{ fontSize: 18, margin: 0, padding: 0 }}>MLK, Jr.</p></Divider>
          </div>
        </Col>
        
      </Row>
      
    </div>
  );
};
export default Home;
