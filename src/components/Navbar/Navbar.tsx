import React from "react";
import "./Navbar.css";

export const Navbar = (props: any) => (
  <div className="Navbar">{props.children}</div>
);
export const MenuButton = (func: any) => (
  <i onClick={func} className="MenuButton material-icons">
    menu
  </i>
);
