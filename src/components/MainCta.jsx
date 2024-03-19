import React from "react";
import { SlSocialLinkedin } from "react-icons/sl";
import { ImMail2 } from "react-icons/im";
import { Link } from "react-router-dom";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";

const MainCta = () => {
  return (
    <section className="flex items-center justify-between py-[4.5rem] px-[6rem]">
      <h2 className="text-[70px] leading-tight">
        Let’s <br /> Work Together -{" "}
      </h2>
      <div className="flex flex-col items-center justify-center gap-4">
        <Link to="https://www.linkedin.com/in/juadebade/" target="_blank">
          <button className="gap-6 w-[310px] h-[65px] flex items-center justify-center border border-juadeb_light_gray rounded-md bg-[#0072b1]">
            <SlSocialLinkedin className="w-[28px] h-[28px]" />
            <span className="text-[19px]">Hire On Linkedin</span>
          </button>
        </Link>
        <Link to="mailto:juadebgabriel@gmail.com">
          <button className="gap-6 w-[310px] h-[65px] flex items-center justify-center border border-juadeb_light_gray rounded-md">
            <ImMail2 className="w-[28px] h-[28px]"/>
            <span className="text-[19px]">Send A Mail</span>
          </button>
        </Link>
        <Link to="tel:+2347063116133">
          <button className="gap-6 w-[310px] h-[65px] flex items-center justify-center border border-juadeb_light_gray rounded-md">
            <BsFillTelephoneOutboundFill className="w-[28px] h-[28px]"/>
            <span className="text-[19px]">Call Me</span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default MainCta;
