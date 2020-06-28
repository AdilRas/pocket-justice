import React, { useState } from "react";
import logo from "./logo.svg";
import "./Filter.css";
import "antd/dist/antd.css";
import { Menu, Dropdown, message } from "antd";
import { DownOutlined } from "@ant-design/icons";

function Filter() {
  const [buttonText, setButtonText] = useState("Filter");
  const onClick = ({ key }: { key: any }) => {
    setButtonText(`${key}`);
  };

  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="Hot">Hot</Menu.Item>
      <Menu.Item key="Top">Top</Menu.Item>
      <Menu.Item key="New">New</Menu.Item>
    </Menu>
  );
  return (
    <Dropdown overlay={menu}>
      <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
        {buttonText} <DownOutlined />
      </a>
    </Dropdown>
  );
}

export default Filter;
