import React from "react";
import { Menu } from "antd";
import { FireOutlined, RiseOutlined, SettingOutlined } from "@ant-design/icons";

const TopNav = (props: any) => {
  
  return (
    <div>
      <Menu
        onClick={props.handleMenuClick}
        selectedKeys={[props.state]}
        mode="horizontal"
      >
        <Menu.Item key="hot" icon={<FireOutlined />}>
          Hot
        </Menu.Item>
        <Menu.Item key="new" icon={<SettingOutlined />}>
          New
        </Menu.Item>
        <Menu.Item key="top" icon={<RiseOutlined />}>
          Top
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default TopNav;
