/* eslint-disable no-unused-vars */
import React from "react";

// icons
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaArrowDown } from "react-icons/fa";

const HeroBottom = () => {
  return (
    <>
      {/* doraemon text background */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      z-0 w-full"
      >
        <h1
          className="text-6xl sm:text-[140px] md:text-[190px] font-bold
        text-center uppercase text-gray-300/25 "
        >
          Doraemon
        </h1>
      </div>

      {/* bottom section */}
      <div className="">
        <div className="">
          {/* first column */}
          {/* second column */}
          {/* third column */}
        </div>
      </div>
    </>
  );
};

export default HeroBottom;
