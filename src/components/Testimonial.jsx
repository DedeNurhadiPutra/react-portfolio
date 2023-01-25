import React from "react";
import Project1 from "../assets/portfolio-1.png";
import Project2 from "../assets/portfolio-2.PNG";
import Project3 from "../assets/portfolio-3.PNG";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";

const data = [
  {
    avatar: Project1,
    name: "Dede",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero hic reiciendis nam sunt voluptatem. Error eveniet voluptatibus nulla in perspiciatis voluptatem commodi saepe sed illum?",
  },
  {
    avatar: Project2,
    name: "Nurhadi",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod sapiente, cupiditate impedit culpa dolorum rem consequatur? Repellendus cumque, possimus tenetur esse, praesentium non inventore hic molestiae quaerat nulla maxime incidunt!",
  },
  {
    avatar: Project3,
    name: "Putra",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem unde fuga a sequi expedita aliquam asperiores veritatis tempora repudiandae alias.",
  },
];

const Testimonial = () => {
  return (
    <div className="text-center md:py-6">
      <h6 className="text-xs mt-1 md:text-base">My Recent Work</h6>
      <h2 className="text-2xl mt-1 text-blue-500 font-bold md:text-2xl">
        Testimonial
      </h2>

      <Swiper
        className="w-3/4 mt-6 h-full md:mt-10" // install Swiper modules
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide
              key={index}
              className="mx-auto border-solid border-[1px] bg-sky-800 border-indigo-500 rounded-2xl py-7 hover:bg-blue-900 ease-in-out duration-500 md:p-20 md:px-4"
            >
              <img
                src={avatar}
                alt={name}
                className="mx-auto w-20 aspect-square object-cover overflow-hidden rounded-full border-[0.4rem] border-blue-500 md:w-28"
              />
              <h3 className="pt-4 pb-2 md:text-lg md:py-6">{name}</h3>
              <div className="px-8">
                <q className="text-sm select-none md:text-base">{review}</q>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
