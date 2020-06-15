/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
function RightMenu(props) {
  return (
    <Menu mode={props.mode} >
      <Menu.Item key="mail">
        <Link to="/login">Login</Link>
      </Menu.Item>
      <Menu.Item key="app">
        <Link to="/signup">Signup</Link>
      </Menu.Item>
    </Menu>
  );
}

export default RightMenu;
