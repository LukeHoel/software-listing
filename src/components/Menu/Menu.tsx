import React from "react";
import "./Menu.css";
import { SearchMenu } from "../SearchMenu/SearchMenu";
interface MenuProps {
  children: any;
  menuOpen: boolean;
  menuItems: string[];
}
export const menuWidth = "200px";
export const Menu = (props: MenuProps) => (
  // Offset to line up with navbar
  <div className="ContentOffset">
    <div className="Menu" style={{ width: props.menuOpen ? menuWidth : 0 }}>
      <SearchMenu />
    </div>
    <span className="Content">{props.children}</span>
  </div>
);
