import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

function LeftMenu(props) {
  return (
    <Menu mode={props.mode} style={{ display: "flex", alignItems: "center" }}>
      <Menu.Item key="home">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="camp">
        <Link to="/campaigns">Campaigns</Link>
      </Menu.Item>
    </Menu>
  );
}

export default LeftMenu;
