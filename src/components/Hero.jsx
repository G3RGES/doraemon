/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

// assets
import HeroImg from "../assets/dora-hero.png";
import HeroImg2 from "../assets/dora.png";

// icons
import { FaStar, FaYoutube } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

// components
import HeroBottom from "./HeroBottom";

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <div className="min-h-[700px] center relative">
        <div className="container mt-12 sm:mt-0 pb-20 sm:pb-0 relative z-20">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0">
            {/* text content section */}
            <div
              className="space-y-3 md:space-y-7 flex flex-col justify-center text-center 
            sm:text-left px-10 sm:px-0"
            >
              <div className="" data-aos="fade-up">
                <h1
                  data-aos="fade-up"
                  className=" text-4xl md:text-6xl font-bold"
                >
                  Watch Now in
                </h1>
                <h1 className="text-primary text-6xl font-bold">3D</h1>
              </div>
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-gray-500 text-sm font-semibold"
              >
                The first full story in the Doraemon series was published in
                January 1970
              </p>
              <div
                data-aos="fade-up"
                data-aos-delay="400"
                className="mx-auto sm:mx-0"
              >
                <button
                  onClick={handlePlay}
                  className="primary-btn center gap-2"
                >
                  Play on
                  <span className="">
                    <FaYoutube className="text-2xl" />
                  </span>
                </button>
              </div>
            </div>
            {/* image content section */}
            <div data-aos="zoom-in" className="relative">
              <img
                src={HeroImg}
                alt="doraemon"
                className="w-[180px] sm:w-[240px] lg:w-[340px] mx-auto relative z-50 "
              />
              <div
                className="absolute bottom-0 left-0 z-0 bg-black 
              w-[260px] h-[20px] blur-2xl mx-auto"
              ></div>
            </div>
            {/* review content section */}
            <div
              data-aos="slide-left"
              className="sm:pl-16 md:pl-24 flex justify-center sm:justify-end"
            >
              <div className="flex items-center justify-end">
                <div className="space-y-4">
                  <img
                    className="w-full h-[105px] object-cover rounded-2xl shadow-md
                  hover:scale-110 duration-200 cursor-pointer"
                    src={HeroImg2}
                    alt="doraemon review"
                  />
                  <p className="text-sm flex items-center gap-2">
                    4.7{" "}
                    <span>
                      <FaStar className="text-primary" />
                    </span>
                  </p>
                  <p className="text-sm text-gray-400">
                    Bandai Figuartszero Doraemont
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Bottom Section */}
        <HeroBottom />
      </div>

      {/* video player */}
      {isPlaying && (
        <div
          className="absolute z-[9999] top-0 left-0 w-full h-full md:h-[800px] bg-black/70
         backdrop-blur-lg"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="bg-white m-3 p-5 rounded-lg shadow-md ">
              <div className="flex items-center justify-between pb-3">
                <h1 className="">Made By G3RGES</h1>
                <IoClose
                  className="text-3xl cursor-pointer hover:scale-110 duration-200"
                  onClick={handlePlay}
                />
              </div>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/pR48dXAp_N0?si=P2C41MddLGGzHE9d"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
