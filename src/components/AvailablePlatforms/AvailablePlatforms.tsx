import React from "react";
import "./AvailablePlatforms.css";

const Platform = (platform: string) => (
  <img className="Platform" src={`svg/${platform}.svg`} alt={""} />
);

interface AvailablePlatformsProps {
  platforms: string[];
}

export const AvailablePlatforms = (props: AvailablePlatformsProps) => (
  <div className="AvailablePlatforms">
    <label>Available Platforms</label>
    {props.platforms.sort().map((platform: string) => Platform(platform))}
  </div>
);
