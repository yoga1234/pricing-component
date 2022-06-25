import React from "react";

import "./WhitePrice.css";

const WhitePrice = (data) => {
  let dataTemp;
  if (data.basic !== undefined) {
    dataTemp = data.basic;
  } else if (data.master !== undefined) {
    dataTemp = data.master;
  } else {
    dataTemp = undefined;
  }
  console.log(dataTemp);
  if (data === "undefined" && dataTemp === undefined) {
    return (
      <div className="white-container">
        <h2 className="card-title">Loading</h2>
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
      <div className="white-container">
        <h2 className="card-title">{dataTemp.name}</h2>
        <p className="card-price">
          <span className="dollar-sign">$</span> {dataTemp.price}
        </p>
        <p className="card-feature">{dataTemp.storage} Storage</p>
        <p className="card-feature">{dataTemp.users} Allowed</p>
        <p className="card-feature">Send up to {dataTemp.bandwidth}</p>
        <hr className="button-border" />
        <button className="card-button">Loading...</button>
      </div>
    );
  }
};

export default WhitePrice;
