import React from "react";
import "./Card.css";

export const Card = (props: any) => (
  <div
    className={`Card ${props.className || ""}`}
    style={props.style}
    onClick={props.onClick}
  >
    {props.children}
  </div>
);
