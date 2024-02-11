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
      <div className=" absolute bottom-0 right-0 w-full">
        <div className="grid sm:grid-cols-3 container">
          {/* first column */}

          <div className="hidden sm:block">
            <div className="font-semibold">
              <p className="text-gray-500 ">Sohag</p>
              <p className="text-sm text-primary">Egypt</p>
            </div>
            <div className="font-semibold">
              <p className="text-gray-500 ">11Feb, 2024</p>
            </div>
            <div></div>
          </div>

          {/* second column */}
          <div className="center">
            <span className="hidden sm:block">
              <FaArrowDown />
            </span>
          </div>

          {/* third column */}
          <div className="flex justify-center sm:justify-end mb-4">
            <div className="flex flex-row sm:flex-col gap-5">
              <div
                className="bg-white rounded-full p-2 
              shadow-md hover:scale-110 duration-200"
              >
                <IoIosArrowBack className="text-primary" />
              </div>
              <div
                className="bg-primary rounded-full p-2 
              shadow-md hover:scale-110 duration-200"
              >
                <IoIosArrowForward className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBottom;
