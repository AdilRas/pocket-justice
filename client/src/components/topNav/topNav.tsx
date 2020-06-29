import React from "react";
import { Menu } from "antd";
import {
  FireFilled,
  RiseOutlined,
  AlertFilled,
} from "@ant-design/icons";

const TopNav = (props: any) => {
  return (
    <div>
      <Menu
        onClick={props.handleMenuClick}
        selectedKeys={[props.state]}
        mode="horizontal"
      >
        <Menu.Item key="new" id="new" icon={<AlertFilled />}>
          New
        </Menu.Item>

        <Menu.Item key="hot" id="hot" icon={<FireFilled />}>
          Hot
        </Menu.Item>

        <Menu.Item key="top" id="top" icon={<RiseOutlined />}>
          Top
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default TopNav;
