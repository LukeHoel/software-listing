import React from "react";
import "./Navbar.css";
import { store } from "../../Store/Store";
import { ToggleMenuAction } from "../../Store/Actions";

export const Navbar = (props: any) => (
  <div className="Navbar">
    <i
      onClick={() => store.dispatch({ type: ToggleMenuAction })}
      className="MenuButton material-icons"
    >
      menu
    </i>
    <span className="Title">Software Listing</span>
    {props.children}
  </div>
);
