import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  // Function to format the date
  const formatDate = (date) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    const formattedDate = new Date(date).toLocaleDateString("en-US", options);

    // Splitting the formatted date to get day, month, and year
    const [day, month, year] = formattedDate.split(" ");

    // Function to add suffix to day
    const addSuffix = (day) => {
      const lastTwoDigits = parseInt(day.slice(-2));
      const lastDigit = parseInt(day.slice(-1));

      if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
        return day + "th";
      } else {
        switch (lastDigit) {
          case 1:
            return day + "st";
          case 2:
            return day + "nd";
          case 3:
            return day + "rd";
          default:
            return day + "th";
        }
      }
    };

    return `${month} ${day}, ${year}`;
  };

  // Get current date
  const currentDate = formatDate(new Date());

  return (
    <footer className="border-t border-juadeb_gray">
      <div className="flex items-center justify-between py-14 px-[6rem]">
        <div className="text-center mt-4 text-gray-500">
          @JuadebGabriel {currentDate}
        </div>
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
    </footer>
  );
};

export default Footer;
