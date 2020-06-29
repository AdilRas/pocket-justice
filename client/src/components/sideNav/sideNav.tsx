import React, { useState } from "react";
import { Menu } from "antd";
import "./sideNav.css";

const SideNav = (props: any) => {
  return (
    <div>
      <Menu
        onClick={props.handleNav}
        selectedKeys={[props.state]}
        style={{ width: 256 }}
        mode="inline"
      >
        <Menu.Item key="home" id="home">
          Home
        </Menu.Item>
        <Menu.Item key="petitions" id="petitions">
          Petitions
        </Menu.Item>
        <Menu.Item key="about" id="about">
          About Creators
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default SideNav;
