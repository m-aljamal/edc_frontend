/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useSelector } from "react-redux";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/auth_actions";
function RightMenu(props) {
  const isAuth = useSelector(
    ({ auth_reducer }) => auth_reducer.isAuthenticated
  );
  console.log(props);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  const authLinks = (
    <Menu mode={props.mode}>
      <Menu.Item key="mail">
        <Link to="#!" onClick={handleLogout}>
          Logout
        </Link>
      </Menu.Item>
    </Menu>
  );

  const guestLinks = (
    <Menu mode={props.mode}>
      <Menu.Item key="mail">
        <Link to="/login">Login</Link>
      </Menu.Item>
      <Menu.Item key="app">
        <Link to="/signup">Signup</Link>
      </Menu.Item>
    </Menu>
  );

  return <>{isAuth ? authLinks : guestLinks}</>;
}

export default RightMenu;
