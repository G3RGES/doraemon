/* eslint-disable no-unused-vars */
import React from "react";

// icons
import { GiAtomicSlashes } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";

const MenuLinks = [
  {
    name: "Episodes",
    link: "#/",
  },
  {
    name: "Store",
    link: "#/store",
  },
  {
    name: "Toys",
    link: "#/toys",
  },
  {
    name: "3D videos",
    link: "#/videos",
  },
];

const Navbar = () => {
  return (
    <div className="">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* logo section */}
          <div className="flex flex-row items-center gap-4">
            <GiAtomicSlashes className="text-6xl text-primary" />
            <div className="flex flex-col text-2xl font-bold text-gray-600 leading-5">
              <span className="">Dora</span>
              <span className="">emon</span>
            </div>
          </div>

          {/* links section */}
          <div className="hidden md:block">
            <ul className="flex flex-row justify-center items-center gap-4">
              {MenuLinks.map((link, idx) => (
                <li key={idx} className="">
                  <a href={link.link} className="navlink">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* search section */}
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
