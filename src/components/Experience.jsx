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
import { SiLumen } from "react-icons/si";
import { SiJquery } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SiPostgresql } from "react-icons/si";
import { useState } from "react";

const Experience = () => {
  const [scales, setScales] = useState({
    icon1: 1,
    icon2: 1,
    icon3: 1,
    icon4: 1,
    icon5: 1,
    icon6: 1,
    icon7: 1,
    icon8: 1,
    icon9: 1,
    icon10: 1,
    icon11: 1,
    icon12: 1,
    icon13: 1,
    icon14: 1,
  });
  const [fills, setFills] = useState({
    icon1: 0,
    icon2: 0,
    icon3: 0,
    icon4: 0,
    icon5: 0,
    icon6: 0,
    icon7: 0,
    icon8: 0,
    icon9: 0,
    icon10: 0,
    icon11: 0,
    icon12: 0,
    icon13: 0,
    icon14: 0,
  });

  const colors = {
    icon1: "fill-orange-500",
    icon2: "fill-blue-500",
    icon3: "fill-yellow-500",
    icon4: "fill-purple-600",
    icon5: "fill-sky-500",
    icon6: "fill-blue-700",
    icon7: "fill-indigo-500",
    icon8: "fill-[url(#mysql-gradient)]",
    icon9: "text-red-500",
    icon10: "text-red-500",
    icon11: "text-[#F4645F]",
    icon12: "text-[#78CFF5]",
    icon13: "text-black",
    icon14: "text-[#31648C]",
  };

  const handleClick = (icon) => {
    // setScale(scale === 100 ? 150 : 100);
    // setBackground((background + 1) % colors.length);
    setScales({
      ...scales,
      [icon]: scales[icon] === "100" ? "150" : "100",
    });
    setFills({
      ...fills,
      [icon]: fills[icon] === colors[icon] ? "" : colors[icon],
    });
    console.log(scales[icon], fills[icon]);
  };

  return (
    <div className="text-center my-10 md:pt-0 md:pb-10">
      <h6 className="text-xs md:text-base llg:text-xs">What Skill I Have</h6>
      <h2 className="text-xl mt-1 text-blue-500 font-bold md:text-2xl">
        My Exprience
      </h2>

      <div className="grid grid-cols-1 gap-4 mt-6 llg:w-3/4 llg:grid-cols-2 llg:gap-8 llg:mx-auto lg:w-3/4 lg:grid-cols-2 lg:gap-8 lg:mx-auto lg:justify-around">
        <div className="group w-5/6 mx-auto bg-blue-900 border-solid border-[1px] border-indigo-500 rounded-2xl py-7 hover:bg-gradient-to-br hover:from-indigo-900 hover:to-fuchsia-900 ease-in-out duration-500 md:w-2/3 md:py-10 llg:w-full lg:w-full">
          <h3 className="text-lg">Frontend Development</h3>
          <div className="grid grid-cols-2 mt-8 gap-4 llg:gap-8 lg:gap-8">
            <article>
              <FaHtml5
                className={`inline-block mb-1 text-4xl ease-in-out duration-500 hover:scale-150 transform scale-${scales.icon1} ${fills.icon1} hover:text-orange-500 cursor-pointer`}
                onClick={() => handleClick("icon1")}
              />
              <h4>HTML</h4>
            </article>
            <article>
              <FaCss3Alt
                className={`inline-block mb-1 text-4xl ease-in-out duration-500 hover:scale-150 hover:text-blue-500 transform scale-${scales.icon2} ${fills.icon2} cursor-pointer`}
                onClick={() => handleClick("icon2")}
              />
              <h4>CSS</h4>
            </article>
            <article>
              <SiJavascript
                className={`inline-block mb-1 text-3xl ease-in-out duration-500 hover:scale-150 hover:text-yellow-500 transform scale-${scales.icon3} ${fills.icon3} cursor-pointer`}
                onClick={() => handleClick("icon3")}
              />
              <h4>JavaScript</h4>
            </article>
            <article>
              <BsBootstrapFill
                className={`inline-block mb-1 text-3xl ease-in-out duration-500 hover:scale-150 hover:text-purple-600 transform scale-${scales.icon4} ${fills.icon4} cursor-pointer`}
                onClick={() => handleClick("icon4")}
              />
              <h4>Bootstrap</h4>
            </article>
            <article>
              <SiTailwindcss
                className={`inline-block mb-1 text-3xl ease-in-out duration-500 hover:scale-150 hover:text-sky-500 transform scale-${scales.icon5} ${fills.icon5} cursor-pointer`}
                onClick={() => handleClick("icon5")}
              />
              <h4>TailwindCss</h4>
            </article>
            <article>
              <FaReact
                className={`inline-block mb-1 text-3xl ease-in-out duration-500 hover:scale-150 hover:text-blue-700 transform scale-${scales.icon6} ${fills.icon6} cursor-pointer`}
                onClick={() => handleClick("icon6")}
              />
              <h4>ReactJS</h4>
            </article>
            <article>
              <SiJquery
                className={`inline-block mb-1 text-3xl ease-in-out duration-500 hover:scale-150 hover:text-[#78CFF5] transform scale-${scales.icon12} ${fills.icon12} cursor-pointer`}
                onClick={() => handleClick("icon12")}
              />
              <h4>Jquery</h4>
            </article>
            <article>
              <TbBrandNextjs
                className={`inline-block mb-1 text-3xl ease-in-out duration-500 hover:scale-150 hover:text-black transform scale-${scales.icon13} ${fills.icon13} cursor-pointer`}
                onClick={() => handleClick("icon13")}
              />
              <h4>NextJS</h4>
            </article>
          </div>
        </div>

        <div className="group w-5/6 mx-auto py-7 bg-blue-900 border-solid border-[1px] border-indigo-500 rounded-2xl hover:bg-gradient-to-br hover:from-indigo-900 hover:to-fuchsia-900 ease-in-out duration-500 md:w-2/3 md:py-10 llg:w-full lg:w-full">
          <h3 className="text-lg">Backend Development</h3>
          <div className="grid grid-cols-2 mt-8 gap-4 llg:gap-8 lg:gap-8">
            <article className="-mt-2">
              <SiPhp
                className={`inline-block text-5xl ease-in-out duration-500 hover:scale-150 hover:text-indigo-500 transform scale-${scales.icon7} ${fills.icon7} cursor-pointer`}
                onClick={() => handleClick("icon7")}
              />
              <h4>PHP</h4>
            </article>
            <article>
              <SiCodeigniter
                className={`inline-block mb-1 text-3xl ease-in-out duration-500 hover:scale-150 hover:text-red-500 transform scale-${scales.icon10} ${fills.icon10} cursor-pointer`}
                onClick={() => handleClick("icon10")}
              />
              <h4>Code Igniter</h4>
            </article>
            <article>
              <FaLaravel
                className={`inline-block mb-1 text-3xl ease-in-out duration-500 hover:scale-150 hover:text-red-500 transform scale-${scales.icon9} ${fills.icon9} cursor-pointer`}
                onClick={() => handleClick("icon9")}
              />
              <h4>Laravel</h4>
            </article>
            <article>
              <SiLumen
                className={`inline-block mb-1 text-3xl ease-in-out duration-500 hover:scale-150 hover:text-[#F4645F] transform scale-${scales.icon11} ${fills.icon11} cursor-pointer`}
                onClick={() => handleClick("icon11")}
              />
              <h4>Lumen</h4>
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
              <SiMysql
                className={`inline-block mb-1 text-5xl ease-in-out duration-500 hover:scale-150 hover:fill-[url(#mysql-gradient)] transform scale-${scales.icon8} ${fills.icon8} cursor-pointer`}
                onClick={() => handleClick("icon8")}
              />
              <h4>MySQL</h4>
            </article>
            <article>
              <SiPostgresql
                className={`inline-block my-2 text-3xl ease-in-out duration-500 hover:scale-150 hover:fill-[#31648C] transform scale-${scales.icon14} ${fills.icon14} cursor-pointer`}
                onClick={() => handleClick("icon14")}
              />
              <h4>PostgreSQL</h4>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
