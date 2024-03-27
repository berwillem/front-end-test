import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <ul>
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/login">
        <li>Login</li>
      </Link>
      <Link to="/register">
        <li>Register</li>
      </Link>
      <Link to="/users">
        <li>Users</li>
      </Link>
    </ul>
  );
};

export default NavBar;
