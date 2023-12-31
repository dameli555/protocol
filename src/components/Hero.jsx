import React from "react";
import "./Hero.css";
import Video from "../asserts/video (2160p).mp4";

const Hero = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={Video} type="video/mp4" />
      </video>
      <div className="hero-text">
        <h1>Decentralized</h1>
        <h1>
          <span className="blue">Traiding</span>Protocol
        </h1>
        <p>
          Guaranteed liquidity traiding for millions of users and top Ethereum
          application
        </p>
        <div className="btn-group">
          <button className="btn">Use Defi</button>
          {/* <button className="btn btn-outline">Documentation</button> */}
          <button className="btn btn-outline">FAQ</button>
        </div>
      </div>
      <div className="bottom-text">
        <h2>Total Value Secured : $42,104,783,66,44</h2>
      </div>
    </div>
  );
};

export default Hero;
