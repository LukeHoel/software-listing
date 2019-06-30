import React from "react";
import "./Menu.css";
import { SearchMenu } from "../SearchMenu/SearchMenu";
import { connect } from "react-redux";
import { State } from "../../Store/State";
interface MenuProps {
  children: any;
  menuOpen: boolean;
}
export const menuWidth = "200px";
const Menu = (props: any) => (
  // Offset to line up with navbar
  <div className="ContentOffset">
    <div className="Menu" style={{ width: props.menuOpen ? menuWidth : 0 }}>
      <SearchMenu />
    </div>
    <span className="Content">{props.children}</span>
  </div>
);
export default connect((state: State) => ({ menuOpen: state.menuOpen }))(Menu);
