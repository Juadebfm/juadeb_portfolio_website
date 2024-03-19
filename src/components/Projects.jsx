import React from "react";
import BusinessDay from "../assets/businessdayng.png";
import SCFN from "../assets/scfn.png";
import { Link } from "react-router-dom";
import ReusableButton from "./ReusableButton";
import { MdOutlineArrowOutward } from "react-icons/md";
import PluracodeLMS from "../assets/pluralcodelms.png";
import dcossassociates from "../assets/dcossassociates.png";

const Projects = () => {
  return (
    <section className="py-[5rem] px-[8rem]">
      <span className="text-[#A9A9A9] capitalize">Featured Projects</span>
      <div className="mt-8 text-h3 leading-normal font-extralight">
        <p className="w-[45%]">
          I craft digital solutions that reflects my passion and expertise in
          design and development.
        </p>
      </div>
      <div className="mt-20 grid grid-cols-2 place-items-center place-content-center gap-[7rem]">
        <Link
          to="https://bdfx-b6kl.vercel.app/"
          target="_blank"
          className="grayscale hover:grayscale-0 transition-all duration-200 ease-in-out"
        >
          <img
            src={BusinessDay}
            alt="Business Day"
            className="blur-[1px] hover:blur-none transition-all duration-200 ease-in-out"
          />
          <div className="mt-4 flex items-center justify-between">
            <p>Building Business Day FX Website (In Progress)</p>
            <ReusableButton
              btnText="View Project"
              btnIcon={<MdOutlineArrowOutward />}
              className="flex items-center justify-center gap-3 rounded_btn py-2 px-4 text-base"
            />
          </div>
        </Link>
        <Link
          to="https://scfn-luth-transplant.sicklecellfoundation.com/"
          target="_blank"
          className="grayscale hover:grayscale-0 transition-all duration-200 ease-in-out"
        >
          <img
            src={SCFN}
            alt="SCFN/LUTH/BMT"
            className="blur-[1px] hover:blur-none transition-all duration-200 ease-in-out"
          />
          <div className="mt-4 flex items-center justify-between">
            <p className="w-max">
              SCFN/LUTH/BMT Project Lagos State (Donation Web Application)
            </p>
            <ReusableButton
              btnText="View Project"
              btnIcon={<MdOutlineArrowOutward />}
              className="flex items-center justify-center gap-3 rounded_btn py-2 px-4 text-base"
            />
          </div>
        </Link>
      </div>
      <div className="mt-20 grid grid-cols-2 place-items-center place-content-center gap-[7rem]">
        <Link
          to="https://testlmssave.netlify.app/my-courses.html?courseid=1130&teachableid=2187604"
          target="_blank"
          className="grayscale hover:grayscale-0 transition-all duration-200 ease-in-out"
        >
          <img
            src={PluracodeLMS}
            alt="Pluralcode LMS"
            className="blur-[1px] hover:blur-none transition-all duration-200 ease-in-out"
          />
          <div className="mt-4 flex items-center justify-between">
            <p>
              Pluralcode Student Learning Platform (Internal Student Platform)
            </p>
            <ReusableButton
              btnText="View Project"
              btnIcon={<MdOutlineArrowOutward />}
              className="flex items-center justify-center gap-3 rounded_btn py-2 px-4 text-base"
            />
          </div>
        </Link>
        <Link
          to="https://www.dcossassociates.com/"
          target="_blank"
          className="grayscale hover:grayscale-0 transition-all duration-200 ease-in-out"
        >
          <img
            src={dcossassociates}
            alt="DCOSS Associates"
            className="blur-[1px] hover:blur-none transition-all duration-200 ease-in-out"
          />
          <div className="mt-4 flex items-center justify-between">
            <p className="w-max">
              DCOSS Associates LTD (Treasury Management Company Based In Lagos &
              Canada){" "}
            </p>
            <ReusableButton
              btnText="View Project"
              btnIcon={<MdOutlineArrowOutward />}
              className="flex items-center justify-center gap-3 rounded_btn py-2 px-4 text-base"
            />
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <ReusableButton
          btnText="Explore All The Projects"
          className="italic font-light text-base rounded_btn mt-20 rounded-none bg-juadeb_dark_gray/10 border-juadeb_gray"
        />
      </div>
    </section>
  );
};

export default Projects;
