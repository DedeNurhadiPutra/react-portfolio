import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="hidden md:flex md:flex-col md:items-center md:text-2xl md:gap-6 md:absolute md:left-14 md:bottom-8 md:after:content-[''] md:after:w-[1px] md:after:h-8 md:after:bg-GoldenYellow llg:text-lg llg:left-10">
      <a href="https:://linkedin.com" target="_blank" rel="noopener noreferrer">
        <BsLinkedin className="md:hover:fill-GoldenPoppy md:hover:scale-125 ease-in-out duration-500 " />
      </a>
      <a href="https:://github.com" target="_blank" rel="noopener noreferrer">
        <FaGithub className="md:hover:fill-GoldenPoppy md:hover:scale-125 ease-in-out duration-500 " />
      </a>
      <a href="https:://codepen.com" target="_blank" rel="noopener noreferrer">
        <FaCodepen className="md:hover:fill-GoldenPoppy md:hover:scale-125 ease-in-out duration-500 " />
      </a>
    </div>
  );
};

export default SocialMedia;
