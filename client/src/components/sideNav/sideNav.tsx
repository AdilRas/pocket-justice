import React, { useState, useEffect, Dispatch } from "react";
import { Menu, Button, AutoComplete } from "antd";
import "./sideNav.css";

import Icon, { HomeOutlined, ReadOutlined, TeamOutlined, MenuFoldOutlined, MenuUnfoldOutlined, LogoutOutlined } from '@ant-design/icons';
import image1 from "./blm_logo_grey.png"

const SideNav = (props: any) => {
  const [selected, setSelected] : [any, Dispatch<string[]>] = useState([""]);
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    const arr: string[] = [];
    arr.push(window.location.pathname.substr(1));
    setSelected(arr);
  }, []);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  }

  return (
    <div
      style={{
        width: `${collapsed ? "auto" : "256px"}`,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#001529",
      }}
    >
      <img src={image1} style={{width:"100px", height:"auto", paddingTop:"5%"}}/>
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          border: "none",
          backgroundColor: "#001529",
          paddingTop: 7,
        }}
      >
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
      </Button>
      <Menu
        onClick={props.handleNav}
        selectedKeys={selected}
        style={{ height: "100%", width: `100%`, margin: 0 }}
        mode="vertical"
        theme="dark"
        inlineCollapsed={collapsed}
      >
        <Menu.Item key="home" id="home" icon={<HomeOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="petitions" id="petitions" icon={<ReadOutlined />}>
          Petitions
        </Menu.Item>
        <Menu.Item key="about" id="about" icon={<TeamOutlined />}>
          About Us
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default SideNav;
