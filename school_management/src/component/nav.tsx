import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";
// import award from ".";

export const Navbar = () => {
  return (
    <nav>
      <div>{/* <img src={award}></img> */}</div>
      <div className="list">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"details"}>Details</NavLink>
      </div>
    </nav>
  );
};
