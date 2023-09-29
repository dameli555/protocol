import React from "react";
import "./About.css";

const AboutCard = (props) => {
  return (
    <div>
      <div className="icon-container">{props.icon}</div>
      <h3>{props.heading}</h3>
      <p>{props.text} </p>
    </div>
  );
};

export default AboutCard;
