import React from "react";

function Loader() {
  return (
    <div>
      <div className="fade-in">
        <div className="container">
          <div className="one common"></div>
          <div className="two common"></div>
          <div className="three common"></div>
          <div className="four common"></div>
          <div className="five common"></div>
          <div className="six common"></div>
          <div className="seven common"></div>
          <div className="eight common"></div>
        </div>
        <div className="bar">
          <div className="progress"></div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
