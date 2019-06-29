import React from "react";
import "./Menu.css";
import { search } from "../../utils/Search";
interface MenuProps {
  children: any;
  menuOpen: boolean;
  menuItems: string[];
}
const menuWidth = "200px";
export const Menu = (props: MenuProps) => (
  // Offset to line up with navbar
  <div className="ContentOffset">
    <div className="Menu" style={{ width: props.menuOpen ? menuWidth : 0 }}>
      {MenuContent(props.menuItems)}
    </div>
    <span className="Content">{props.children}</span>
  </div>
);
const MenuContent = (menuItems: string[]) => (
  <div className="MenuContent" style={{ width: menuWidth }}>
    <button onClick={() => search("debian/code")}>Search debian repos</button>
    {menuItems.map((menuItem: string) => (
      <div>{menuItem}</div>
    ))}
  </div>
);
