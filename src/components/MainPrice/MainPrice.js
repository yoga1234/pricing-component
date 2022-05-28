import React from "react";

import "./MainPrice";

const MainPrice = () => {
  return (
    <div className="white-container">
      <h2 className="card-title">Basic</h2>
      <p className="card-price">$ 19.99</p>
      <hr />
      <p className="card-feature">500 GB Storage</p>
      <p className="card-feature">2 Users Allowed</p>
      <p className="card-feature">Send up to 3 GB</p>
      <button className="card-button">LEARN MORE</button>
    </div>
  );
};

export default MainPrice;
