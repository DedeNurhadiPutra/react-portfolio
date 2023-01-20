import React, { useEffect } from "react";
import ME from "../assets/profile-6q.png";
import CTA from "./CTA";
import SocialMedia from "./SocialMedia";

const Home = () => {
  useEffect(() => {
    document.title = "Home | Portfolio Dede Nurhadi Putra";
  }, []);

  return (
    <div className="h-full pt-10 cls:pt-16 overflow-hidden">
      <div className="my-0 text-center h-full">
        <h5>Hello I'am</h5>
        <h1 className="text-2xl bg-gradient-to-r text-indigo-500 to-blue-800">
          Dede Nurhadi Putra
        </h1>
        <h5 className="text-LightGray">Fullstack Developer</h5>
        <CTA />
        <SocialMedia />

        <div className="relative mt-10 mx-auto w-72 h-96 bg-gradient-to-b from-blue-800 rounded-t-full">
          <img src={ME} alt="me" className="w-full pt-7 object-cover" />
        </div>

        <a
          href="#contact"
          className="hidden md:inline-block md:absolute md:right-0 md:bottom-16 md:rotate-90 md:font-light md:text-sm"
        >
          ScrollDown
        </a>
      </div>
    </div>
  );
};

export default Home;
