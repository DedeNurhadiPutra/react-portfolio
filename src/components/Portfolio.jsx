import Project1 from "../assets/portfolio-1.png";
import Project2 from "../assets/portfolio-2.PNG";
import Project3 from "../assets/portfolio-3.PNG";

const data = [
  {
    id: 1,
    image: Project1,
    title: "ReactJs API Simple Web (Mobile View Only)",
    code: "https://github.com/DedeNurhadiPutra/react-cra-training",
    demo: "https://cra-api-test.netlify.app/",
  },
  {
    id: 2,
    image: Project2,
    title: "Perpustakaan (Final Project SanberCode)",
    code: "https://gitlab.com/DedeNurhadiPutra/final_project",
    demo: "https://library.denurhadiputra.my.id/",
  },
  {
    id: 3,
    image: Project3,
    title: "TogaMosal Prima Mandiri (Freelance)",
    code: "javascript.void(0)",
    demo: "https://togamosal.com/",
  },
  {
    id: 4,
    image:
      "https://shots.codepen.io/dedenurhadiputra/pen/NWgGLZR-512.jpg?version=1641977852",
    title: "D'Bakery Landing Page (FreeCodeCamp)",
    code: "https://codepen.io/dedenurhadiputra/pen/NWgGLZR",
    demo: "https://codepen.io/dedenurhadiputra/full/NWgGLZR",
  },
  {
    id: 5,
    image:
      "https://shots.codepen.io/dedenurhadiputra/pen/KKmRJKN-512.jpg?version=1628099000",
    title: "FCC: Tribute Page Sultan Baabullah (FreeCodeCamp)",
    code: "https://codepen.io/dedenurhadiputra/pen/KKmRJKN",
    demo: "https://codepen.io/dedenurhadiputra/full/KKmRJKN",
  },
  {
    id: 6,
    image:
      "https://dedenurhadiputra.github.io/Personal-Portfolio/img/ComingSoon.jpg",
    title: "Coming Soon",
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
        {data.map(({ id, image, title, code, demo }) => {
          return (
            <div
              key={id}
              className="text-left bg-[#202020] border-solid border-[1px] border-indigo-500 rounded-2xl py-7 hover:bg-blue-900 active:bg-blue-900 ease-in-out duration-500 md:h-[32rem] llg:py-6 llg:w-[98%] llg:h-[22rem] lg:py-6 lg:w-[98%] lg:h-[22rem] md:relative"
            >
              <img
                src={image}
                alt={title}
                className="mx-auto w-[85%] aspect-square object-cover rounded-2xl hover:scale-110 ease-in-out duration-500 llg:h-1/2 lg:h-1/2"
              />
              <div className="px-8">
                <p className="text-center py-6">{title}</p>
              </div>
              <div className="flex gap-2 px-6 md:absolute md:bottom-5">
                <a
                  href={code}
                  className="p-4 rounded-md border border-blue-500 hover:bg-blue-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 llg:p-3 llg:text-sm lg:p-3 lg:text-sm"
                  target="__blank"
                  onClick={(event) =>
                    code === "javascript.void(0)" ? event.preventDefault() : ""
                  }
                >
                  Code
                </a>
                <a
                  href={demo}
                  className="p-4 rounded-md border text-GoldenPoppy bg-blue-500 border-indigo-500 hover:bg-blue-600 hover:text-GoldenYellow active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 llg:p-3 llg:text-sm lg:p-3 lg:text-sm"
                  target="__blank"
                  onClick={(event) =>
                    demo === "javascript.void(0)" ? event.preventDefault() : ""
                  }
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
