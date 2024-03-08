import React from "react";
import Logo from "../assets/removepng_logo.png";
import { BsFillMenuButtonWideFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-8">
      <div className="flex items-center justify-center flex-col leading-none">
        <span className="font-leagueSpartan text-[25px]">
          Juadeb<span className="text-juadeb_light_gray">Gabriel</span>
          <span className="text-dot p-0">.</span>
        </span>
      </div>
      <BsFillMenuButtonWideFill size={25} className="cursor-pointer"/>
    </nav>
  );
};

export default Navbar;
