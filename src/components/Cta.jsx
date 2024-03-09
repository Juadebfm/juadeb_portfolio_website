import React from "react";
import Pluralcode from "../assets/pluralcodewhite.png";
import Dcoss from "../assets/dc.png";
import Blazetech from "../assets/Logov1.png"
import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <section className="border-y border-juadeb_gray  grid grid-cols-3">
      <Link to="https://pluralcode.institute/" target="_blank">
        <div className="border-r border-juadeb_gray px-[6rem] py-[4rem] flex flex-col items-center justify-center">
          <img src={Pluralcode} alt="Pluralcode" width={250} />
          <p className="mt-5 text-center text-[#484E53] text-[17px]">
            Frontend Developer & Project Lead - Oct 2022
          </p>
        </div>
      </Link>
      <Link to="https://pluralcode.institute/" target="_blank">
        <div className="border-r border-juadeb_gray px-[4.5rem] py-[3rem] flex flex-col items-center justify-center">
          <div className="w-full h-[100px] flex items-center justify-center gap-3">
            <img src={Dcoss} alt="Pluralcode" className="w-[80px] h-auto" />
            <span className="text-[30px] font-maven font-medium">
              DCOSS Associates
            </span>
          </div>
          <p className="text-center text-[#484E53] text-[17px]">
            Fullstack Web Developer & IT Officer - June 2022
          </p>
        </div>
      </Link>
      <Link to="https://pluralcode.institute/" target="_blank">
        <div className="px-[6rem] py-[4rem] flex flex-col items-center justify-center">
          <img src={Blazetech} alt="Pluralcode" width={250} />
          <p className="mt-5 text-center text-[#484E53] text-[17px]">
            Building A Software Solutions SAAS - Jan 2024
          </p>
        </div>
      </Link>
    </section>
  );
};

export default Cta;
