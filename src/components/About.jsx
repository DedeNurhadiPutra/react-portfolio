import Me from "../assets/profile-4.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <div className="h-screen py-10 md:py-14 lg:pt-16 lg:pb-0">
      <h5 className="text-center llg:text-xs lg:text-xs">Get To Know</h5>
      <h2 className="font-medium text-center llg:text-xl lg:text-xl">About Me</h2>

      <div className="w-full grid grid-cols-1 gap-16 mt-10 md:pt-6 llg:grid-cols-2 llg:gap-0 llg:w-[90%] llg:mx-auto lg:grid-cols-2 lg:gap-0 lg:w-[90%] lg:mx-auto lg:mt-14">
        <div className="w-2/3 mx-auto aspect-square rounded-3xl bg-gradient-to-b from-violet-900 md:w-72 llg:w-72 lg:w-72">
          <img src={Me} alt="About Me" className="w-full overflow-hidden transition-transform duration-500 rounded-3xl bg-gradient-to-b from-blue-900 -rotate-12 hover:rotate-0" />
        </div>

        <div className="w-[90%] mx-auto mt-0 text-center">
          <div className="grid grid-cols-2 gap-4 text-center md:grid-cols-3">
            <article className="bg-blue-900 border-solid border-[1px] border-indigo-500 rounded-2xl p-8 hover:bg-indigo-900 hover:text-GoldenPoppy hover:transition hover:duration-500 llg:p-6">
              <FaAward className="inline-block text-xl" />
              <h5>Experience</h5>
              <small>2 Years Working</small>
            </article>

            <article className="bg-blue-900 border-solid border-[1px] border-indigo-500 rounded-2xl p-8 hover:bg-indigo-900 hover:text-GoldenPoppy hover:transition hover:duration-500 llg:p-6">
              <FiUsers className="inline-block text-xl" />
              <h5>Clients</h5>
              <small>10+ Indonesia</small>
            </article>

            <article className="bg-blue-900 border-solid border-[1px] border-indigo-500 rounded-2xl p-8 hover:bg-indigo-900 hover:text-GoldenPoppy hover:transition hover:duration-500 llg:p-6">
              <VscFolderLibrary className="inline-block text-xl" />
              <h5>Projects</h5>
              <small>15+ Completed</small>
            </article>
          </div>

          <p className="py-2 text-justify md:pt-10 md:pb-8 llg:py-6 lg:py-6">
            Hey, my name is Dede Nurhadi Putra, I’m a Junior Fullstack web developer from Indonesia. I have a passion for all things technology, design, and music. I’m always
            curious to learn more when it comes to new technologies and creative coding.
          </p>

          <button
            onClick={() => window.fullpage_api.moveTo(7)}
            className="p-2 mb-20 text-sm duration-300 ease-linear rounded-lg bg-GoldenPoppy text-VampireBlack hover:text-Goldenrod hover:bg-transparent hover:border md:text-base md:p-4 llg:p-2 llg:text-sm lg:p-3"
          >
            Let's Talk
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
