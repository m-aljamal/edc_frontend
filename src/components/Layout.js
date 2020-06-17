import React from "react";
import NavBar from "./NavBar/NavBar";
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <ReactNotification/>
      {children}
    </div>
  );
};

export default Layout;
