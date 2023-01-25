import React from "react";
import Me from "../assets/profile-4.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <div className="h-screen py-10 md:py-14">
      <h5 className="text-center">Get To Know</h5>
      <h2 className="text-center">About Me </h2>

      <div className="w-full grid grid-cols-1 gap-16 mt-10 md:pt-6">
        <div className="w-2/3 aspect-square rounded-3xl bg-gradient-to-b from-indigo-800 mx-auto md:w-72">
          <img
            src={Me}
            alt="About Me"
            className="w-full rounded-3xl bg-gradient-to-b from-blue-900 -rotate-12 hover:rotate-0 transition-transform duration-500 overflow-hidden"
          />
        </div>

        <div className="w-[90%] mx-auto mt-0 text-center">
          <div className="grid grid-cols-2 gap-4 text-center md:grid-cols-3">
            <article className="bg-blue-900 border-solid border-[1px] border-indigo-500 rounded-2xl p-8 hover:bg-indigo-900 hover:text-GoldenPoppy hover:transition hover:duration-500">
              <FaAward className="inline-block text-xl" />
              <h5>Experience</h5>
              <small>1+- Years Working</small>
            </article>

            <article className="bg-blue-900 border-solid border-[1px] border-indigo-500 rounded-2xl p-8 hover:bg-indigo-900 hover:text-GoldenPoppy hover:transition hover:duration-500">
              <FiUsers className="inline-block text-xl" />
              <h5>Clients</h5>
              <small>10+ Indonesia</small>
            </article>

            <article className="bg-blue-900 border-solid border-[1px] border-indigo-500 rounded-2xl p-8 hover:bg-indigo-900 hover:text-GoldenPoppy hover:transition hover:duration-500">
              <VscFolderLibrary className="inline-block text-xl" />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>

          <p className="text-justify py-2 md:pt-10 md:pb-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident,
            quidem porro quae quo maxime, illo repellendus ipsam reiciendis sed
            optio libero? Consequatur repellat voluptas, dolorem molestias enim
            facilis nobis harum!
          </p>

          <button
            onClick={() => window.fullpage_api.moveTo(7)}
            className="bg-GoldenPoppy p-2 mb-20 rounded-lg text-sm text-VampireBlack hover:text-Goldenrod hover:bg-transparent hover:border ease-linear duration-300 md:text-base md:p-4 llg:p-2 llg:text-sm xl:p-3"
          >
            Let's Talk
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
