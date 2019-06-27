import React from "react";
import "./App.css";
import softwareList, { SoftwareDef } from "../Software/Software";
import software from "../../data/software.json";

const App = () => {
  return <div className="App">{softwareList(software)}</div>;
};
export default App;
