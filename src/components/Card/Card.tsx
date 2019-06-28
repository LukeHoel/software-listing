import React from "react";
import "./Card.css";

export class Card extends React.Component {
  render = () => <div className="Card">{this.props.children}</div>;
}
