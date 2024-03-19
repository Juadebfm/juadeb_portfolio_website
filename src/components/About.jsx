import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import JuadebgabrielCircle from "../assets/myself.jpg";
import ScrollDown from "../assets/scrollDown.png";


const About = () => {
  return (
    <section className="h-max py-[4rem] border-t border-juadeb_gray px-[6rem] relative">
      <div className="flex items-center justify-between">
        <span className="text-[#A9A9A9] capitalize">About me</span>
        <div className="flex items-center justify-center gap-8 text-[#A9A9A9]">
          <Link to="https://www.linkedin.com/in/juadebade/" target="_blank">
            <FaLinkedinIn
              size={30}
              className="cursor-pointer border border-[#a9a9a9] p-1 rounded-full hover:border-white hover:bg-white hover:text-main_bg duration-150 transition-all ease-in"
            />
          </Link>
          <Link
            to="https://web.facebook.com/profile.php?id=61557265640179"
            target="_blank"
          >
            <FaFacebookF
              size={30}
              className="cursor-pointer border border-[#a9a9a9] p-1 rounded-full hover:border-white hover:bg-white hover:text-main_bg duration-150 transition-all ease-in"
            />
          </Link>
          <Link to="https://www.instagram.com/juadebgabriel/" target="_blank">
            <IoLogoInstagram
              size={30}
              className="cursor-pointer border border-[#a9a9a9] p-1 rounded-full hover:border-white hover:bg-white hover:text-main_bg duration-150 transition-all ease-in"
            />
          </Link>
          <Link to="https://twitter.com/Juadeb1" target="_blank">
            <FaTwitter
              size={30}
              className="cursor-pointer border border-[#a9a9a9] p-1 rounded-full hover:border-white hover:bg-white hover:text-main_bg duration-150 transition-all ease-in"
            />
          </Link>
        </div>
      </div>
      <div className="mt-14 text-h3 leading-normal font-extralight">
        <p>
          Hi 👋, I am JuadebGabriel! I'm a UX-centered web developer with 4+
          years of software development experience, with the past 2 years spent
          honing my skills in enterprise-level software solutions, thereby
          developing efficient systems for businesses and startups.
        </p>
        <div className="flex items-center justify-between gap-[4rem] mt-8">
          <p className="w-[65%]">
            I understand the importance of a Pixel- perfect Website, pride
            myself on producing high-quality websites, and I'm comfortable
            working solo or as part of a team.
          </p>
          <div className="w-[35%] pl-16">
            <img
              src={JuadebgabrielCircle}
              alt="Myself"
              className="block w-full"
            />
          </div>
        </div>
      </div>
      <img
        src={ScrollDown}
        alt="Scroll Down"
        width={40}
        height={70}
        className="cursor-pointer absolute bottom-14 animate-bounce left-[6rem]"
      />
    </section>
  );
};

export default About;
