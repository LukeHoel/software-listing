import React from "react";
import "./Menu.css";
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
      {/* Extra element with same width as parent so we don't get squishing while minimizing */}
      <div className="MenuContent" style={{ width: menuWidth }}>
        {props.menuItems.map((menuItem: string) => (
          <div>{menuItem}</div>
        ))}
      </div>
    </div>
    <span className="Content">{props.children}</span>
  </div>
);
