import React from "react";
import { SlSocialLinkedin } from "react-icons/sl";
import { ImMail2 } from "react-icons/im";
import { Link } from "react-router-dom";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";

const MainCta = () => {
  return (
    <section className="flex items-center justify-between py-[5rem] px-[8rem]">
      <h2 className="text-[70px] leading-tight">
        Let’s <br /> Work Together -{" "}
      </h2>
      <div className="flex flex-col items-center justify-center gap-4">
        <Link to="https://www.linkedin.com/in/juadebade/" target="_blank">
          <button className="gap-6 w-[310px] h-[65px] flex items-center justify-center border border-juadeb_light_gray rounded-md bg-[#0072b1]">
            <SlSocialLinkedin className="w-[20px] h-[20px]" />
            <span className="text-[18px]">Linkedin</span>
          </button>
        </Link>
        <Link to="mailto:juadebgabriel@gmail.com">
          <button className="gap-6 w-[310px] h-[65px] flex items-center justify-center border border-juadeb_light_gray rounded-md bg-[#c71610]">
            <ImMail2 className="w-[20px] h-[20px]" />
            <span className="text-[18px]">Email</span>
          </button>
        </Link>
        <Link to="tel:+2347063116133">
          <button className="gap-6 w-[310px] h-[65px] flex items-center justify-center border border-juadeb_light_gray rounded-md bg-[#08851b]">
            <BsFillTelephoneOutboundFill className="w-[20px] h-[20px]" />
            <span className="text-[18px]">Phone</span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default MainCta;
