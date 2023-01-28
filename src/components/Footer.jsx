import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-GoldenPoppy h-44 p-1 text-center text-ChineseBlack md:h-72 md:pt-10 llg:h-64 llg:pt-8">
      <a href="#javascript" className="font-extrabold text-2xl md:text-3xl">
        Deryx
      </a>

      <div className="flex justify-center gap-4 my-3 md:my-6">
        <a
          href="https:://linkedin.com"
          className="text-2xl ease-in-out duration-500 hover:scale-150 hover:text-blue-900 md:text-3xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https:://github.com"
          className="text-2xl ease-in-out duration-500 hover:scale-150 hover:text-[#333] md:text-3xl"
        >
          <FaGithub />
        </a>
        <a
          href="https:://instagram.com"
          className="text-2xl ease-in-out duration-500 hover:scale-150 md:text-3xl"
        >
          {/* gradient for insta */}
          <svg width="0" height="0">
            <linearGradient
              id="insta-gradient"
              x1="25%"
              y1="100%"
              x2="100%"
              y2="0%"
            >
              <stop stopColor="#FFDC80" offset="0%" />
              <stop stopColor="#F77737" offset="25%" />
              <stop stopColor="#C13584" offset="50%" />
              <stop stopColor="#833AB4" offset="100%" />
            </linearGradient>
          </svg>
          {/* end gradient for insta */}
          <FaInstagram className="hover:fill-[url(#insta-gradient)]" />
        </a>
        <a
          href="https:://codepen.com"
          className="text-2xl ease-in-out duration-500 hover:scale-150 md:text-3xl"
        >
          <FaCodepen />
        </a>
      </div>

      <div>
        <small className="md:text-base">
          &copy; Deryx. All rights reserved.
        </small>
      </div>
    </div>
  );
};

export default Footer;
