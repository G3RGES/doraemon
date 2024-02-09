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
    <nv className="py-4">
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
            <ul className="center">
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
          <div className="flex flex-row items-center gap-6">
            <input
              className="hidden sm:block py-2 px-3 rounded-full bg-slate-200"
              type="text"
              placeholder="Search..."
            />
            <div className="bg-primary hover:bg-primary/80 p-3 rounded-full cursor-pointer">
              <FaSearch className="text-white text-sm" />
            </div>
            <div className="center navlink cursor-pointer">
              Eng
              <span className="">
                <MdArrowDropDown className="text-xl text-primary" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </nv>
  );
};

export default Navbar;
