import React, { useEffect } from "react";
import { GiCheckMark } from "react-icons/gi";

const Service = () => {
  // for title
  useEffect(() => {
    document.title = "Contact | Portfolio Dede Nurhadi Putra";
  }, []);

  return (
    <div className="text-center mt-10 mb-20 md:pt-2 md:pb-10 llg:mb-10 lg:mb-10 lg:mt-8">
      <h6 className="text-xs md:text-base llg:text-xs lg:text-xs">
        What I Offer
      </h6>
      <h2 className="text-xl mt-1 text-blue-500 font-bold md:text-2xl">
        Services
      </h2>

      <div className="grid grid-cols-1 gap-4 w-5/6 mt-6 mx-auto md:grid-cols-2 md:w-4/5 md:gap-10 md:mt-10 llg:grid-cols-3 llg:gap-6 llg:w-3/4 lg:grid-cols-3 lg:gap-6 lg:w-3/4 lg:mt-7">
        <div className="group bg-blue-900 border-solid border-[1px] border-indigo-500 rounded-b-xl hover:bg-indigo-900 hover:text-GoldenPoppy ease-in-out duration-500 cursor-pointer">
          <div className="bg-indigo-500 p-8 rounded-b-[2rem] group-hover:bg-blue-600 llg:p-6 lg:p-6">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="text-left py-10 llg:py-6 lg:py-6">
            <li className="flex gap-2 px-6 text-sm">
              <GiCheckMark className="inline-block mt-1" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li className="flex gap-2 px-6 pt-4 text-sm">
              <GiCheckMark className="inline-block mt-1" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li className="flex gap-2 px-6 pt-4 text-sm">
              <GiCheckMark className="inline-block mt-1" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li className="flex gap-2 px-6 pt-4 text-sm">
              <GiCheckMark className="inline-block mt-1" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li className="flex gap-2 px-6 pt-4 text-sm">
              <GiCheckMark className="inline-block mt-1" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li className="flex gap-2 px-6 pt-4 text-sm">
              <GiCheckMark className="inline-block mt-1" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
          </ul>
        </div>

        <div className="group my-6 bg-blue-900 border-solid border-[1px] border-indigo-500 rounded-b-xl hover:bg-indigo-900 hover:text-GoldenPoppy ease-in-out duration-500 cursor-pointer md:my-0">
          <div className="bg-indigo-500 p-8 rounded-b-[2rem] group-hover:bg-blue-600 llg:p-6 lg:p-6">
            <h3>Web Development</h3>
          </div>
          <ul className="text-left py-10 llg:py-6 lg:py-6">
            <li className="flex gap-2 px-6 text-sm">
              <GiCheckMark className="inline-block mt-1" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li className="flex gap-2 px-6 pt-4 text-sm">
              <GiCheckMark className="inline-block mt-1" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li className="flex gap-2 px-6 pt-4 text-sm">
              <GiCheckMark className="inline-block mt-1" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li className="flex gap-2 px-6 pt-4 text-sm">
              <GiCheckMark className="inline-block mt-1" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li className="flex gap-2 px-6 pt-4 text-sm">
              <GiCheckMark className="inline-block mt-1" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li className="flex gap-2 px-6 pt-4 text-sm">
              <GiCheckMark className="inline-block mt-1" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li className="flex gap-2 px-6 pt-4 text-sm">
              <GiCheckMark className="inline-block mt-1" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
          </ul>
        </div>

        <div className="group bg-blue-900 border-solid border-[1px] border-indigo-500 rounded-b-xl hover:bg-indigo-900 hover:text-GoldenPoppy ease-in-out duration-500 cursor-pointer">
          <div className="bg-indigo-500 p-8 rounded-b-[2rem] group-hover:bg-blue-600 llg:p-6 lg:p-6">
            <h3>Content Creation</h3>
          </div>
          <ul className="text-left py-10 llg:py-6 lg:py-6">
            <li className="flex gap-2 px-6 text-sm">
              <GiCheckMark className="inline-block mt-1" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li className="flex gap-2 px-6 pt-4 text-sm">
              <GiCheckMark className="inline-block mt-1" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li className="flex gap-2 px-6 pt-4 text-sm">
              <GiCheckMark className="inline-block mt-1" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li className="flex gap-2 px-6 pt-4 text-sm">
              <GiCheckMark className="inline-block mt-1" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li className="flex gap-2 px-6 pt-4 text-sm">
              <GiCheckMark className="inline-block mt-1" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li className="flex gap-2 px-6 pt-4 text-sm">
              <GiCheckMark className="inline-block mt-1" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Service;
