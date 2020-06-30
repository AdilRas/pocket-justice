import React, { useState, Dispatch } from "react";
import { Menu, Button } from "antd";
import "./sideNav.css";

import { HomeOutlined, ReadOutlined, TeamOutlined, MenuOutlined } from '@ant-design/icons';
import image1 from "./blm_logo_grey.png"
import { useHistory } from "react-router-dom";

const SideNav = (props: any) => {
  const [selected, setSelected] : [any, Dispatch<string[]>] = useState([window.location.pathname.substr(1)]);
  const [collapsed, setCollapsed] = useState(true);
  const history = useHistory();

  function handleNav(e: any) {
    history.push('/' + e.key);
    setSelected([e.key]);
  }

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  }
  const flexCenter: {
    display: string,
    justifyContent: string,
    alignItems: string
  } = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div
      style={{
        width: `${collapsed ? "auto" : "200px"}`,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#001529",
        alignItems: "center",
      }}
    >
      <img
        src={image1}
        style={{ width: "100px", height: "auto", paddingTop: "5%" }}
        alt=""
      />
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          border: "none",
          backgroundColor: "#001529",
          paddingTop: "7 0 0 0",
          margin: 0,
          width: "100%",
        }}
      >
        {React.createElement(MenuOutlined)}
      </Button>
      <Menu
        onClick={handleNav}
        selectedKeys={selected}
        style={{
          height: "100%",
          width: `100%`,
          margin: 0,
          padding: 0,
        }}
        mode="vertical"
        theme="dark"
        inlineCollapsed={collapsed}
      >
        <Menu.Item
          key="home"
          id="home"
          icon={<HomeOutlined />}
          style={flexCenter}
        >
          Home
        </Menu.Item>
        <Menu.Item
          key="petition"
          id="petition"
          icon={<ReadOutlined />}
          style={flexCenter}
        >
          Petitions
        </Menu.Item>
        <Menu.Item
          key="about"
          id="about"
          icon={<TeamOutlined />}
          style={flexCenter}
        >
          About Us
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default SideNav;
