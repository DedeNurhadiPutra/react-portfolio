// icons
import { AiOutlineHome } from "react-icons/ai";
import { TfiUser } from "react-icons/tfi";
import { AiOutlineProject } from "react-icons/ai";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";

import React from "react";

const Nav = ({ activeSection }) => {
  return (
    <nav className="fixed bottom-2 inset-x-0 bg-blue-800 bg-opacity-20 w-max mx-auto p-3 z-[999] flex flex-row justify-between gap-2 rounded-full backdrop-blur-sm md:bottom-5 llg:p-2 lg:bottom-3">
      <button
        onClick={() => window.fullpage_api.moveTo("home", 1)}
        className={`nav-link p-2 md:p-3 rounded-full hover:bg-indigo-900 hover:bg-opacity-80 ${
          activeSection === "Home" ? "active" : ""
        }`}
      >
        <AiOutlineHome className="md:w-8 md:h-8 llg:w-4 llg:h-4 lg:w-6 lg:h-6" />
      </button>

      <button
        onClick={() => window.fullpage_api.moveTo("about", 2)}
        className={`nav-link p-2 md:p-3 rounded-full hover:bg-indigo-900 hover:bg-opacity-80 ${
          activeSection === "About" ? "active" : ""
        }`}
      >
        <TfiUser className="md:w-8 md:h-8 llg:w-4 llg:h-4 lg:w-6 lg:h-6" />
      </button>

      <button
        onClick={() => window.fullpage_api.moveTo(4)}
        className={`p-2 md:p-3 rounded-full hover:bg-indigo-900 hover:bg-opacity-80 ${
          activeSection === "Service" || activeSection === "Experience"
            ? "active"
            : ""
        }`}
      >
        <RiServiceLine className="md:w-8 md:h-8 llg:w-4 llg:h-4 lg:w-6 lg:h-6" />
      </button>

      <button
        onClick={() => window.fullpage_api.moveTo(5)}
        className={`p-2 md:p-3 rounded-full hover:bg-indigo-900 hover:bg-opacity-80 ${
          activeSection === "Portfolio" || activeSection === "Testimonial"
            ? "active"
            : ""
        }`}
      >
        <AiOutlineProject className="md:w-8 md:h-8 llg:w-4 llg:h-4 lg:w-6 lg:h-6" />
      </button>

      <button
        onClick={() => window.fullpage_api.moveTo(7)}
        className={`p-2 md:p-3 rounded-full hover:bg-indigo-900 hover:bg-opacity-80 ${
          activeSection === "Contact" || activeSection === "Footer"
            ? "active"
            : ""
        }`}
      >
        <BiMessageDetail className="md:w-8 md:h-8 llg:w-4 llg:h-4 lg:w-6 lg:h-6" />
      </button>
    </nav>
  );
};

export default Nav;
