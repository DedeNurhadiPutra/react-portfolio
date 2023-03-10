import ME from "../assets/profile-6.png";
import CTA from "./CTA";
import SocialMedia from "./SocialMedia";

const Home = () => {
  return (
    <div className="h-full mx-auto pt-6 overflow-hidden md:pt-48 md:w-4/5 md:h-screen cls:pt-16 llg:pt-0">
      <div className="my-0 text-center h-full">
        <h5 className="md:text-lg">Hello I'am</h5>
        <h1 className="text-2xl font-bold bg-gradient-to-r text-indigo-500 to-blue-800 md:pt-3 md:pb-1 md:text-4xl llg:pt-1 llg:text-2xl lg:text-xl">
          Dede Nurhadi Putra
        </h1>
        <h5 className="text-LightGray md:text-lg lg:text-base">
          Fullstack Developer
        </h5>
        <CTA />
        <SocialMedia />

        <div className="relative mt-10 mx-auto w-72 md:w-3/5 h-96 bg-gradient-to-b from-blue-800 rounded-t-full md:h-[35rem] llg:w-[16rem] llg:h-[20rem] llg:mt-[22px] lg:w-[30%] lg:h-[25rem]">
          <img src={ME} alt="me" className="w-full pt-7 object-cover" />
        </div>

        <a
          href="#contact"
          className="hidden md:inline-block md:absolute md:right-2 md:bottom-[4.5rem] md:rotate-90 md:font-light md:text-lg md:hover:text-GoldenPoppy ease-in-out duration-500 llg:text-sm llg:right-[-8px]"
        >
          ScrollDown <span className="md:relative md:top-[1px]">&gt;&gt;</span>
        </a>
      </div>
    </div>
  );
};

export default Home;
