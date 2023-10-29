import Project1 from "../assets/portfolio-1.png";
import Project2 from "../assets/portfolio-2.PNG";
import Project3 from "../assets/portfolio-3.PNG";
import Project4 from "../assets/work-portfolio.PNG";
import PortfolioPDF from "../assets/portfolio.pdf";

const data = [
  {
    id: 1,
    image: Project1,
    title: "ReactJs API Simple Web (Mobile View Only)",
    desc: "This is my personal project when I learn ReactJs and how to consume API on front-end web.",
    list: ["ReactJs", "TailwindCSS"],
    code: "https://github.com/DedeNurhadiPutra/react-cra-training",
    demo: "https://cra-api-test.netlify.app/",
  },
  {
    id: 2,
    image: Project2,
    title: "Perpustakaan (Final Project SanberCode)",
    desc: "This is my Bootcamp final project in sanbercode which I did after following an online bootcamp for 1 month.",
    list: ["Laravel", "Bootstrap", "MySQL"],
    code: "https://gitlab.com/DedeNurhadiPutra/final_project",
    demo: "https://library.denurhadiputra.my.id/",
  },
  {
    id: 3,
    image: Project3,
    title: "TogaMosal Prima Mandiri (Freelance)",
    desc: "This is my first freelance project from CV. Klik on the client, which is to build a web company profile for the measurement company Togamosal.com.",
    list: ["Laravel", "JQuery", "Bootstrap."],
    code: "javascript.void(0)",
    demo: "https://togamosal.com/",
  },
  {
    id: 4,
    image:
      "https://shots.codepen.io/dedenurhadiputra/pen/NWgGLZR-512.jpg?version=1641977852",
    title: "D'Bakery Landing Page (FreeCodeCamp)",
    desc: "The  one of my online course projects at freeCodeCamp which I participated in for 1 month. Trying to make a responsive bakery website.",
    list: ["HTML", "CSS", "Bootstrap"],
    code: "https://codepen.io/dedenurhadiputra/pen/NWgGLZR",
    demo: "https://codepen.io/dedenurhadiputra/full/NWgGLZR",
  },
  {
    id: 5,
    image:
      "https://shots.codepen.io/dedenurhadiputra/pen/KKmRJKN-512.jpg?version=1628099000",
    title: "FCC: Tribute Page Sultan Baabullah (FreeCodeCamp)",
    desc: "One of my online course projects at freeCodeCamp which I participated in for 1 month. In this project, I didn't just learn to make web but I also learned about history from where I was born.",
    list: ["HTML", "CSS"],
    code: "https://codepen.io/dedenurhadiputra/pen/KKmRJKN",
    demo: "https://codepen.io/dedenurhadiputra/full/KKmRJKN",
  },
  {
    id: 6,
    image: Project4,
    title: "Work Portfolio",
    desc: "As a web developer, I have worked on a number of projects which have helped me build an impressive portfolio. Here are some of the projects I have worked on in the past.",
    list: [],
    code: "javascript.void(0)",
    demo: "javascript.void(0)",
  },
  {
    id: 7,
    image:
      "https://dedenurhadiputra.github.io/Personal-Portfolio/img/ComingSoon.jpg",
    title: "Coming Soon",
    desc: "Coming Soon...",
    list: [],
    code: "javascript.void(0)",
    demo: "javascript.void(0)",
  },
];

const Portfolio = () => {
  return (
    <div className="text-center mt-10 mb-20 md:pt-2 md:pb-10 llg:mb-10 lg:mb-14">
      <h6 className="text-xs md:text-base llg:text-xs lg:text-xs">
        My Recent Work
      </h6>
      <h2 className="text-2xl mt-1 text-blue-500 font-bold md:text-2xl">
        Portfolio
      </h2>

      <div className="grid grid-cols-1 gap-4 mt-6 w-5/6 mx-auto md:grid-cols-2 md:w-4/5 md:mt-10 llg:grid-cols-3 llg:w-3/4 llg:mt-6 llg:gap-5 lg:grid-cols-3 lg:w-3/4 lg:mt-6 lg:gap-5">
        {data.map((data) => {
          return (
            <div
              key={data.id}
              className={` ${
                data.id === 7 ? "text-center col-start-2" : "text-left"
              } bg-[#202020] border-solid border-[1px] border-indigo-500 rounded-2xl py-6 hover:bg-blue-900 active:bg-blue-900 ease-in-out duration-500 llg:py-4 llg:w-[98%] lg:py-4 lg:w-[98%] md:relative h-auto`}
            >
              <img
                src={data.image}
                alt={data.title}
                className="mx-auto w-[85%] aspect-square object-cover rounded-2xl hover:scale-110 ease-in-out duration-500 llg:h-[35%] lg:h-[35%]"
              />
              <div className="px-8">
                <p
                  className={`text-center pt-4 pb-3 ${
                    data.list.length < 1 ? "md:pb-10" : "md:pb-3"
                  }`}
                >
                  {data.title}
                </p>
              </div>
              <div
                className={`${
                  data.id === 7 ? "h-32" : ""
                } text-justify mx-auto w-[90%] py-3 px-4 my-3 border-solid border-[1px] border-indigo-900 rounded-2xl md:mb-20 xl:mb-2 2xl:-mb-80`}
              >
                <p className="indent-6 tracking-wide leading-tight">
                  {data.desc}
                </p>
                {data.list.length < 1 ? " " : <p>Tech stack : </p>}
                <ul>
                  {data.list.map((tech, index) => {
                    return (
                      <li key={index} className="list-disc list-inside mx-4">
                        {tech}
                      </li>
                    );
                  })}
                </ul>
              </div>
              {data.id === 6 ? (
                <div className="flex justify-center text-center">
                  <div className="md:absolute md:bottom-7 md:left-0 md:right-0 md:mx-auto mt-2">
                    <a
                      href={PortfolioPDF}
                      download
                      className="bg-transparent border border-indigo-600 hover:bg-indigo-600 hover:text-GoldenPoppy p-3 rounded-lg text-sm text-GoldenYellow ease-linear duration-300 md:text-lg md:p-4 llg:p-3 llg:text-sm lg:p-3 lg:text-sm"
                    >
                      Download Portfolio
                    </a>
                  </div>
                </div>
              ) : (
                <div className="flex gap-2 px-6 md:absolute md:bottom-5">
                  <a
                    href={data.code}
                    className="py-2 px-3 rounded-md border border-blue-500 hover:bg-blue-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 llg:p-3 llg:text-sm lg:p-3 lg:text-sm"
                    target="__blank"
                    onClick={(event) =>
                      data.code === "javascript.void(0)"
                        ? event.preventDefault()
                        : ""
                    }
                  >
                    Code
                  </a>
                  <a
                    href={data.demo}
                    className="py-2 px-3 rounded-md border text-GoldenPoppy bg-blue-500 border-indigo-500 hover:bg-blue-600 hover:text-GoldenYellow active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 llg:p-3 llg:text-sm lg:p-3 lg:text-sm"
                    target="__blank"
                    onClick={(event) =>
                      data.demo === "javascript.void(0)"
                        ? event.preventDefault()
                        : ""
                    }
                  >
                    Live Demo
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
