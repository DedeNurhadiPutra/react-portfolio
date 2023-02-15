import React from "react";

function Loader() {
  return (
    <div>
      {/* <div class="absolute top-0 left-0 flex items-center justify-center w-full h-full loader bg-ChineseBlack">
        <div class="text-3xl md:text-6xl loader-text">
          <h1 class="overflow-hidden">
            <span class="inline-block translate-y-full hide-text">
              Welcome to
            </span>
          </h1>
          <h1 class="overflow-hidden">
            <span class="inline-block pb-4 translate-y-full hide-text">
              My Creation.
            </span>
          </h1>
        </div>
      </div>
      <div class="fixed top-0 left-0 w-full h-full translate-y-full slider bg-GoldenPoppy"></div>
			<div class="out"> */}
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
