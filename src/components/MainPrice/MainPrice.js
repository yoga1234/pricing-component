import React from "react";

import "./MainPrice.css";

const MainPrice = () => {
  return (
    <div className="main-container">
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

export default MainPrice;
