import React from "react";
export class SoftwareDef {
  name: string = "";
  source: string = "";
  link: string = "";
}

const software = (input: SoftwareDef) => (
  <div>
    <b>{input.name}</b>
    <a href={input.link}>{input.link}</a>
  </div>
);

const softwareList = (input: SoftwareDef[]) => (
  <div className="Software">{input.map(current => software(current))}</div>
);

export default softwareList;
