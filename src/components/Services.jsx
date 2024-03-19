import React from "react";
import UI from "../assets/ui.png";
import Wordpress from "../assets/wordpress.png";
import { IoCodeSlash } from "react-icons/io5";
import { SiFigma } from "react-icons/si";
import Milestones from "../assets/port.png";

const Services = () => {
  return (
    <section className="py-[4.5rem] px-[6rem]">
      <span className="text-[#A9A9A9] capitalize">What Do I Do And How?</span>
      <div className="mt-8 text-h3 leading-normal font-extralight">
        <p className="w-[45%]">
          I love to craft functional solutions for unique problems. These are
          some skills I've picked up over my career.
        </p>
      </div>
      <div className="mt-20 w-full grid grid-cols-3 gap-20 place-items-stretch">
        <div className="border border-juadeb_gray flex flex-col items-start justify-end p-10 h-[344px] cursor-pointer hover:scale-[1.02] hover:shadow-md hover:shadow-juadeb_light_gray/25 transition-all duration-200 ease-in-out">
          <div className="mb-8 flex items-center justify-start">
            <img src={UI} alt="UI UX Design" className="w-[41px] h-[41px]" />
            <SiFigma className="w-[41px] h-[41px] text-juadeb_gray font-extralight" />
          </div>
          <span className="font-urbanist text-[28px] font-extralight">
            ui & ux design
          </span>
          <p className="mt-5 text-[#A9A9A9]">
            As a UI/UX designer, I specialize in creating beautiful, intuitive
            designs that make your website or application stand out.
          </p>
        </div>
        <div className="border border-juadeb_gray flex flex-col items-start justify-end p-10 h-[344px] cursor-pointer hover:scale-[1.02] hover:shadow-md hover:shadow-juadeb_light_gray/25 transition-all duration-200 ease-in-out">
          <img
            src={Wordpress}
            alt="UI UX Design"
            className="w-[41px] h-[41px] mb-8"
          />
          <span className="font-urbanist text-[28px] font-extralight">
            wordpress
          </span>
          <p className="mt-5 text-[#A9A9A9]">
            I offer custom web development services tailored to your unique
            needs. Whether you need a complete website build or just some
            updates to your existing site,
          </p>
        </div>
        <div className="border border-juadeb_gray flex flex-col items-start justify-end p-10 h-[344px] cursor-pointer hover:scale-[1.02] hover:shadow-md hover:shadow-juadeb_light_gray/25 transition-all duration-200 ease-in-out">
          <IoCodeSlash className="w-[41px] h-[41px] mb-8 text-juadeb_gray font-extralight" />
          <span className="font-urbanist text-[28px] font-extralight">
            Web Development
          </span>
          <p className="mt-5 text-[#A9A9A9]">
            As an experienced developer, I provide web development services that
            encompass website cloning, redesign, and a full website.
          </p>
        </div>
      </div>
      <div className="mt-20 p-14">
        <img src={Milestones} alt="Milestones" />
      </div>
    </section>
  );
};

export default Services;
