import React from "react";
import "./Subscribe.css";

const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="content">
        <h2>Join our DEFI Community</h2>
        <form action="">
          <div className="form-container display-col">
            <input type="email" name="email" placeholder="Enter your email" />
            <button className="btn"> Sing Up</button>
          </div>
          <div className="form-container">
            <input type="checkbox" />{" "}
            <p>Yes, I agree to recive email communications from DEFI.</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
