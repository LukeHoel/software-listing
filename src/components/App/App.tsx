import React from "react";
import "./App.css";
import softwareList from "../Software/Software";
import software from "../../assets/json/software.json";

const App = () => {
  return <div className="App">{softwareList(software)}</div>;
};
export default App;
