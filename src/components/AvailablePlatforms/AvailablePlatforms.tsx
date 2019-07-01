import React from "react";
import "./AvailablePlatforms.css";

const Platform = (platform: string) => (
  <img className="Platform" src={`svg/${platform}.svg`} alt={""} />
);

export const AvailablePlatforms = (props: any) => (
  <div className="AvailablePlatforms">
    <label>Available Platforms</label>
    {props.platforms.map((platform: string) => Platform(platform))}
  </div>
);
