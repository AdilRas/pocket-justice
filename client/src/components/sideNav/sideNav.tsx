import React, { useState } from "react";
import { Menu } from "antd";
import "./sideNav.css";

const SideNav = (props: any) => {
  // const [selected, setSelected] = useState("home");
  const fetchKey = () => {
    console.log(window.location.pathname);
    return [window.location.pathname];
  };
  return (
    <div>
      <Menu
        onClick={props.handleNav}
        selectedKeys={fetchKey()}
        style={{ width: 256 }}
        mode="inline"
        theme="dark"
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
