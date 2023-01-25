import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiCodeigniter } from "react-icons/si";

const Experience = () => {
  return (
    <div className="text-center my-10 md:pt-0 md:pb-10">
      <h6 className="text-xs md:text-base">What Skill I Have</h6>
      <h2 className="text-xl mt-1 text-blue-500 font-bold md:text-2xl">
        My Exprience
      </h2>

      <div className="grid grid-cols-1 gap-4 mt-6 md:mt-10">
        <div className="group w-5/6 mx-auto bg-blue-900 border-solid border-[1px] border-indigo-500 rounded-2xl py-7 hover:bg-indigo-900 ease-in-out duration-500 md:w-2/3 md:py-10">
          <h3 className="text-lg">Frontend Development</h3>
          <div className="grid grid-cols-2 mt-8 gap-4">
            <article>
              <FaHtml5 className="inline-block mb-1 text-4xl ease-in-out duration-500 hover:scale-150 hover:text-orange-500" />
              <h4>HTML</h4>
            </article>
            <article>
              <FaCss3Alt className="inline-block mb-1 text-4xl ease-in-out duration-500 hover:scale-150 hover:text-blue-500" />
              <h4>CSS</h4>
            </article>
            <article>
              <SiJavascript className="inline-block mb-1 text-3xl ease-in-out duration-500 hover:scale-150 hover:text-yellow-500 active:text-yellow-500" />
              <h4>JavaScript</h4>
            </article>
            <article>
              <BsBootstrapFill className="inline-block mb-1 text-3xl ease-in-out duration-500 hover:scale-150 hover:text-purple-600" />
              <h4>Bootstrap</h4>
            </article>
            <article>
              <SiTailwindcss className="inline-block mb-1 text-3xl ease-in-out duration-500 hover:scale-150 hover:text-sky-500" />
              <h4>Tailwind</h4>
            </article>
            <article>
              <FaReact className="inline-block mb-1 text-3xl ease-in-out duration-500 hover:scale-150 hover:text-blue-700" />
              <h4>ReactJS</h4>
            </article>
          </div>
        </div>

        <div className="group w-5/6 mx-auto py-7 bg-blue-900 border-solid border-[1px] border-indigo-500 rounded-2xl hover:bg-indigo-900 ease-in-out duration-500 md:w-2/3 md:py-12 md:mt-6">
          <h3>Backend Development</h3>
          <div className="grid grid-cols-2 mt-8 gap-4">
            <article>
              <SiPhp className="inline-block mb-1 text-5xl ease-in-out duration-500 hover:scale-150 hover:text-indigo-500" />
              <h4>PHP</h4>
            </article>
            <article>
              {/* gradient for mysql */}
              <svg width="0" height="0">
                <linearGradient
                  id="mysql-gradient"
                  x1="25%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop stopColor="#00758f" offset="0%" />
                  <stop stopColor="#f29111" offset="100%" />
                </linearGradient>
              </svg>
              {/* end gradient for mysql */}
              <SiMysql className="inline-block mb-1 text-5xl ease-in-out duration-500 hover:scale-150 hover:fill-[url(#mysql-gradient)]" />
              <h4>MySQL</h4>
            </article>
            <article>
              <FaLaravel className="inline-block mb-1 text-3xl ease-in-out duration-500 hover:scale-150 hover:text-red-500" />
              <h4>Laravel</h4>
            </article>
            <article>
              <SiCodeigniter className="inline-block mb-1 text-3xl ease-in-out duration-500 hover:scale-150 hover:text-red-500" />
              <h4>Code Igniter</h4>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
