import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [Menuon, setMenuon] = useState(false);

  const togglemenu = () => {
    setMenuon(!Menuon);
  };
  return (
    <div>
      <div className="flex justify-between p-7 items-center text-xl font-semibold shadow-lg">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <ul className="hidden md:flex space-x-10 items-center">
          <Link to="/about">
            <li className="hover:text-blue-500">About Us</li>
          </Link>

          <li className="hover:text-blue-500">Staff card</li>
          <li>
            <button className="ring-1 p-3 rounded-3xl bg-blue-500 text-white hover:bg-white hover:ring-1 hover:text-black cursor-pointer">
              <a href="https://my.novabeak.com/">Click to Invest</a>
            </button>
          </li>
        </ul>
        <div onClick={togglemenu} className="md:hidden">
          {Menuon ? <X size={45} /> : <Menu size={45} />}
        </div>
      </div>
      {/* mobile menu */}
      {Menuon && (
        <ul className="md:hidden absolute bg-[#f5faff] w-full  flex flex-col text-3xl font-semibold gap-3 pl-7 border-b-1 pb-5 mt-7 z-50">
          <Link to="/about">
            <li className="hover:text-blue-500">About Us</li>
          </Link>
          <li className="hover:text-blue-500">Staff card</li>
          <li>
            <button className="ring-1 p-2 rounded-3xl bg-blue-500 text-white hover:bg-white hover:ring-1 hover:text-black cursor-pointer">
              <a href="https://my.novabeak.com/">Click to Invest</a>
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
