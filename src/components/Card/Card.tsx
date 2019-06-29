import React from "react";
import "./Card.css";

export const Card = (props: any) => (
  <div className={`Card ${props.class || ""}`} style={props.style}>
    {props.children}
  </div>
);
