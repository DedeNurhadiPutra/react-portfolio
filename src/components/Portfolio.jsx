import React from "react";
import Project1 from "../assets/portfolio-1.png";
import Project2 from "../assets/portfolio-2.PNG";
import Project3 from "../assets/portfolio-3.PNG";
// import Project4 from "../assets/portfolio-4.png";

const data = [
  {
    id: 1,
    image: Project1,
    title: "ReactJs API Simple Web (Mobile View)",
    github: "https://github.com/DedeNurhadiPutra",
    demo: "https://github.com/DedeNurhadiPutra",
  },
  {
    id: 2,
    image: Project2,
    title: "ReactJs API Simple Web (Mobile View)",
    github: "https://github.com/DedeNurhadiPutra",
    demo: "https://github.com/DedeNurhadiPutra",
  },
  {
    id: 3,
    image: Project3,
    title: "ReactJs API Simple Web (Mobile View)",
    github: "https://github.com/DedeNurhadiPutra",
    demo: "https://github.com/DedeNurhadiPutra",
  },
  // {
  //   id: 4,
  //   image: Project4,
  //   title: "ReactJs API Simple Web (Mobile View)",
  //   github: "https://github.com/DedeNurhadiPutra",
  //   demo: "https://github.com/DedeNurhadiPutra"
  // }
];

const Portfolio = () => {
  return (
    <div className="text-center my-10">
      <h6 className="text-xs">My Recent Work</h6>
      <h2 className="text-2xl mt-1 text-blue-500 font-medium">Portfolio</h2>

      <div className="grid grid-cols-1 gap-4 mt-6">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <div
              key={id}
              className="w-5/6 mx-auto text-left bg-[#202020] border-solid border-[1px] border-indigo-500 rounded-2xl py-7 hover:bg-blue-900 ease-in-out duration-500"
            >
              <img
                src={image}
                alt={title}
                className="mx-auto w-[90%] rounded-2xl"
              />
              <p className="p-6">{title}</p>
              <div className="flex gap-2 px-6">
                <a
                  href={github}
                  className="p-4 rounded-md border border-blue-500 hover:bg-blue-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400"
                  target="__blank"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="p-4 rounded-md border text-GoldenPoppy bg-blue-500 border-indigo-500 hover:bg-blue-600 hover:text-GoldenYellow active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400"
                  target="__blank"
                >
                  Live Demo
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
