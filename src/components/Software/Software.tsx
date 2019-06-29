import React from "react";
import "./Software.css";
import { Card } from "../Card/Card";
import { SoftwareDef } from "../../models/Software";
import { slideIn, enableScroll } from "../../utils/Animation";

const SoftwareList = (input: SoftwareDef[]) => (
  <div className="SoftwareList" style={enableScroll(input.length)}>
    {input.map((current, index) => Software(current, index))}
  </div>
);

export default SoftwareList;

const Software = (input: SoftwareDef, index: number) => (
  <Card class="Software" style={slideIn(index)}>
    <div className="Header">
      <img src={`svg/${input.logo}`} alt={input.name} />
      <b>{input.name}</b>
    </div>
    <p>{input.desc}</p>
    {/* <a href={input.link}>{input.link}</a> */}
  </Card>
);
