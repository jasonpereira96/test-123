import React from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar } from "@material-ui/core";
import "./Nav.css";
import logo from "./../logo.svg";

const Nav = () => {
  return (
    <div className="nav">
      <MenuIcon className="menu" />
      <Link to="/">
        <img src={logo} className="logo" alt="logo" />
      </Link>
      <Avatar
        alt="Remy Sharp"
        src="https://randomuser.me/api/portraits/med/women/76.jpg"
        className="nav-avatar"
      />
    </div>
  );
};

export default Nav;
