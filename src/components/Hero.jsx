import React from "react";
import ReusableButton from "./ReusableButton";
import ScrollDown from "../assets/scrollDown.png";
const Hero = () => {
  return (
    <section className="px-[6rem]">
      <div className="h-[80vh] flex flex-col items-center justify-center gap-10">
        <div className="text-juadeb_gray text-h1 leading-tight">
          <div>
            Designing with{" "}
            <span className="text-white font-semibold">Purpose</span>
          </div>
          <div>
            Building Reusable{" "}
            <span className="text-white font-semibold">Value</span>
          </div>
        </div>
        <ReusableButton btnIcon="👋" btnText="Say Hi" className="rounded_btn" />
        <img
          src={ScrollDown}
          alt="Scroll Down"
          width={40}
          height={70}
          className="cursor-pointer absolute bottom-44 animate-bounce right-[6rem]"
        />
      </div>
    </section>
  );
};

export default Hero;
