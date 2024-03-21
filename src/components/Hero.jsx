import React, { useState } from "react";
import ReusableButton from "./ReusableButton";
import ScrollDown from "../assets/scrollDown.png";
import { Link } from "react-scroll";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
    // Prevent scrolling on the entire page when the modal is open
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setShowModal(false);
    // Allow scrolling on the entire page when the modal is closed
    document.body.style.overflow = "auto";
  };

  const handleModalClick = (e) => {
    // Prevent modal from closing when clicking inside it
    e.stopPropagation();
  };

  const handleOverlayClick = () => {
    // Close the modal when clicking outside of it
    handleCloseModal();
  };

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
        <button className="rounded_btn" onClick={handleButtonClick}>
          <ReusableButton btnIcon="👋" btnText="Say Hi" />
        </button>
        <Link to="about" spy={true} smooth={true} duration={500} offset={-70}>
          <img
            src={ScrollDown}
            alt="Scroll Down"
            width={40}
            height={70}
            className="cursor-pointer absolute bottom-44 animate-bounce right-[6rem]"
          />
        </Link>
      </div>
      {/* Modal for the form */}
      {showModal && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={handleOverlayClick}
        >
          <div
            className="bg-juadeb_dark_gray p-8 rounded-lg relative w-1/3"
            onClick={handleModalClick}
          >
            {/* Your form component goes here */}
            <div>
              <p className="text-h5 leading-normal font-extralight">
                <a href="tel:+2347063116133">Call</a> me now for faster
                response.
              </p>
            </div>
            {/* Close button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-0 right-0"
            >
              <IoIosCloseCircleOutline />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
