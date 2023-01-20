import React from "react";
import { GiCheckMark } from "react-icons/gi";

const Service = () => {
  return (
    <div className="text-center my-10">
      <h6 className="text-xs">What I Offer</h6>
      <h2 className="text-xl mt-1 text-blue-500 font-medium">Services</h2>

      <div className="grid grid-cols-1 gap-4 mt-6">
        <div className="group w-5/6 mx-auto bg-blue-900 border-solid border-[1px] border-indigo-500 rounded-b-xl hover:bg-indigo-900 hover:text-GoldenPoppy ease-in-out duration-500 cursor-pointer">
          <div className="bg-indigo-500 p-8 rounded-b-[2rem] group-hover:bg-blue-600">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="text-left py-10">
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

        <div className="group w-5/6 my-6 mx-auto bg-blue-900 border-solid border-[1px] border-indigo-500 rounded-b-xl hover:bg-indigo-900 hover:text-GoldenPoppy ease-in-out duration-500 cursor-pointer">
          <div className="bg-indigo-500 p-8 rounded-b-[2rem] group-hover:bg-blue-600">
            <h3>Web Development</h3>
          </div>
          <ul className="text-left py-10">
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

        <div className="group w-5/6 mx-auto bg-blue-900 border-solid border-[1px] border-indigo-500 rounded-b-xl hover:bg-indigo-900 hover:text-GoldenPoppy ease-in-out duration-500 cursor-pointer">
          <div className="bg-indigo-500 p-8 rounded-b-[2rem] group-hover:bg-blue-600">
            <h3>Content Creation</h3>
          </div>
          <ul className="text-left py-10">
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
