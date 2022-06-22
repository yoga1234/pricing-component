import React from "react";

import "./WhitePrice.css";

const WhitePrice = () => {
  return (
    <div className="white-container">
      <h2 className="card-title">Basic</h2>
      <p className="card-price">
        <span className="dollar-sign">$</span> 19.99
      </p>
      <p className="card-feature">500 GB Storage</p>
      <p className="card-feature">2 Users Allowed</p>
      <p className="card-feature">Send up to 3 GB</p>
      <hr className="button-border" />
      <button className="card-button">LEARN MORE</button>
    </div>
  );
};

export default WhitePrice;
