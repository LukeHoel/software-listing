import React from "react";
import "./Navbar.css";

export const Navbar = (props: any) => (
  <div className="Navbar">
    <span className="Title">Software Listing</span>
    {props.children}
  </div>
);
