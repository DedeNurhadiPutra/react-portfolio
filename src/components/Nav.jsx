// icons
import { AiOutlineHome } from "react-icons/ai";
import { TfiUser } from "react-icons/tfi";
import { AiOutlineProject } from "react-icons/ai";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";
import { useEffect, useState } from "react";

const Nav = () => {
  const [hideNavbar, setHideNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.body.scrollHeight;
      const scrollPosition = window.innerHeight + window.pageYOffset;
      if (scrollHeight - scrollPosition <= 10) {
        setHideNavbar(true);
      } else {
        setHideNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={hideNavbar ? "hide" : ""}>
      <nav className="fixed bottom-2 inset-x-0 bg-blue-800 bg-opacity-20 w-max mx-auto py-3 px-3 z-[999] flex flex-row justify-between gap-2 rounded-full backdrop-blur-sm">
        <button
          onClick={() => window.fullpage_api.moveTo(1)}
          className="p-2 rounded-full hover:bg-indigo-900 hover:bg-opacity-80"
        >
          <AiOutlineHome />
        </button>
        <button
          onClick={() => window.fullpage_api.moveTo(2)}
          className="p-2 rounded-full hover:bg-indigo-900 hover:bg-opacity-80"
        >
          <TfiUser />
        </button>
        <button
          onClick={() => window.fullpage_api.moveTo(4)}
          className="p-2 rounded-full hover:bg-indigo-900 hover:bg-opacity-80"
        >
          <AiOutlineProject />
        </button>
        <button
          onClick={() => window.fullpage_api.moveTo(5)}
          className="p-2 rounded-full hover:bg-indigo-900 hover:bg-opacity-80"
        >
          <RiServiceLine />
        </button>
        <button
          onClick={() => window.fullpage_api.moveTo(7)}
          className="p-2 rounded-full hover:bg-indigo-900 hover:bg-opacity-80"
        >
          <BiMessageDetail />
        </button>
      </nav>
    </div>
  );
};

export default Nav;
