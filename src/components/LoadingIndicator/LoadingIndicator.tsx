import React from "react";
import "./LoadingIndicator.css";

export const LoadingIndicator = (props: any) => (
  <div className="LoadingIndicator">
    <div className="LoadingBall First" />
    <div className="LoadingBall Second" />
    <div className="LoadingBall Third" />
  </div>
);
