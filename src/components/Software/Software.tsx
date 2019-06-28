import React from "react";
import "./Software.css";
import { Card } from "../Card/Card";
export class SoftwareDef {
  name: string = "";
  source: string = "";
  link: string = "";
  logo: string = "";
}
const software = (input: SoftwareDef) => (
  <Card>
    <div className="Header">
      <img src={`svg/${input.logo}`} alt={input.name} />
      <b>{input.name}</b>
    </div>
    <a href={input.link}>{input.link}</a>
  </Card>
);

const softwareList = (input: SoftwareDef[]) => (
  <div className="Software">{input.map(current => software(current))}</div>
);

export default softwareList;
