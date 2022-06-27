import React from "react";

import "./MainPrice.css";

const MainPrice = (data) => {
  let dataTemp;
  if (data.professional !== undefined) {
    dataTemp = data.professional;
  } else {
    dataTemp = undefined;
  }
  if (data === "undefined" && dataTemp === undefined) {
    return (
      <div className="main-container">
        <h2 className="card-title">Loading...</h2>
        <p className="card-price">
          <span className="dollar-sign">$</span> Loading...
        </p>
        <p className="card-feature">Loading...</p>
        <p className="card-feature">Loading...</p>
        <p className="card-feature">Loading...</p>
        <hr className="button-border" />
        <button className="card-button">Loading...</button>
      </div>
    );
  } else {
    return (
      <div className="main-container">
        <h2 className="card-title">{dataTemp.name}</h2>
        <p className="card-price">
          <span className="dollar-sign">$</span> {dataTemp.price}
        </p>
        <p className="card-feature">{dataTemp.storage} Storage</p>
        <p className="card-feature">{dataTemp.users} Allowed</p>
        <p className="card-feature">Send up to {dataTemp.bandwidth}</p>
        <hr className="button-border" />
        <button className="card-button">
          {dataTemp.name ? "LEARN MORE" : "Loading..."}
        </button>
      </div>
    );
  }
};

export default MainPrice;
