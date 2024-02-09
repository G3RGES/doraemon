/* eslint-disable no-unused-vars */
import React from "react";

// assets
import HeroImg from "../assets/dora-hero.png";
import HeroImg2 from "../assets/dora.png";
// import HeroBottom from "./HeroBottom";

// icons
import { FaStar, FaYoutube } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Hero = () => {
  return (
    <>
      <div className="min-h-[700px] center relative">
        <div className="container mt-12 sm:mt-0 pb-20 sm:pb-0 ">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0">
            {/* text content section */}
            <div
              className="space-y-3 md:space-y-7 flex flex-col justify-center text-center 
            sm:text-left px-10 sm:px-0"
            >
              <div className="" data-aos="fade-up">
                <h1 className=" text-4xl md:text-6xl font-bold">
                  Watch Now in
                </h1>
                <h1 className="text-primary text-6xl font-bold">3D</h1>
              </div>
              <p className="text-gray-500 text-sm font-semibold">
                The first full story in the Doraemon series was published in
                January 1970
              </p>
              <div className="mx-auto sm:mx-0">
                <button className="primary-btn center gap-2">
                  Play on
                  <span className="">
                    <FaYoutube className="text-2xl" />
                  </span>
                </button>
              </div>
            </div>
            {/* image content section */}
            <div className="relative">
              <img
                src={HeroImg}
                alt="doraemon"
                className="w-[180px] sm:w-[240px] lg:w-[340px] mx-auto relative z-30 "
              />
              <div
                className="absolute bottom-0 left-0 z-0 bg-black 
              w-[240px] h-[20px] blur-2xl mx-auto"
              ></div>
            </div>
            {/* review content section */}
            <div className=""></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
