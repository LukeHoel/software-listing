import React from "react";
import "./Menu.css";
import { SearchMenu } from "../SearchMenu/SearchMenu";

export default (props: any) => (
  // Offset to line up with navbar
  <div className="ContentOffset">
    <div className="Menu">
      <SearchMenu />
    </div>
    <span className="Content">{props.children}</span>
  </div>
);
