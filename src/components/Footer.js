import React from "react";
import facebook from "../image/facebook.svg";
import twitter from "../image/twitter.svg";
import inst from "../image/inst.png";

function Footer() {
  return (
    <footer className="bg-haha">
      <div className="md:container mt-4 pt-16 flex flex-col-reverse justify-between md:px-6 px-3 py-10 md:mx-auto space-y-8 md:flex-row md:space-y-0">
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          <div className=" text-lala md:hidden mt-6">
            Copyright &copy; 2023, | All Right Reserved
          </div>

          <div className="mt-8">
            <h4 className=" text-[32px] font-normal text-white">
              <span className=" text-ori">T</span>echie Hub
            </h4>
            <p className="text-lala mt-12 text-[16px]">
              Learn with us anytime and
              <br /> anywhere.
            </p>
          </div>
        </div>

        <div className="flex justify-around md:space-x-32">
          <div className="flex flex-col space-y-3 text-lala text-[16px]">
            <h4 className=" mb-3 text-white font-semibold">COMPANY</h4>
            <a
              href="https://www.linkedin.com/feed/"
              target="blank"
              className="  text-lala hover:text-white transition-all duration-300"
            >
              Home
            </a>

            <a
              href="https://www.linkedin.com/feed/"
              target="blank"
              className=" hover:text-white transition-all duration-300"
            >
              About Us
            </a>

            <a
              href="https://www.linkedin.com/feed/"
              target="blank"
              className=" hover:text-white transition-all duration-300"
            >
              Categories
            </a>

            <a
              href="https://www.linkedin.com/feed/"
              target="blank"
              className=" hover:text-white transition-all duration-300"
            >
              Contact
            </a>

            <a
              href="https://www.linkedin.com/feed/"
              target="blank"
              className=" hover:text-white transition-all duration-300"
            >
              Blog
            </a>

          
          </div>

          <div className="flex flex-col space-y-3 text-lala text-[16px]">
            <h4 className=" mb-3 text-white font-semibold">SUPPORT</h4>
            <a
              href="#home"
              className=" hover:text-white hover:text-underline transition-all duration-300"
            >
              Contact
            </a>
            <a
              href="#"
              className=" hover:text-white hover:text-underline transition-all duration-300"
            >
              Help Center
            </a>
            <a
              href="#"
              className=" hover:text-white hover:text-underline transition-all duration-300"
            >
              Site Map
            </a>

            <a
              href="#"
              className=" hover:text-white hover:text-underline transition-all duration-300"
            >
              Privacy Policy
            </a>
          </div>

          <div className="lg:flex hidden flex-col space-y-3 text-lala text-[16px]">
            <h4 className=" mb-3 text-white font-semibold">TEACHING</h4>
            <a
              href="#home"
              className=" hover:text-white hover:text-underline transition-all duration-300"
            >
              Become a Mentor
            </a>
            <a
              href="#"
              className=" hover:text-white hover:text-underline transition-all duration-300"
            >
              Mentor Help Center
            </a>
          </div>
        </div>

        <div className="flex-flex-col justify-between">
          <div className="hidden text-maincolor md:block justify-center text-center mt-">
            <h4 className=" mb-3 text-white font-semibold">STAY CONNECTED</h4>
            <div className=" flex mt-4 ">
              <img src={facebook} className="cursor-pointer hover:animate-bounce"></img>
              <img src={twitter} className="cursor-pointer hover:animate-bounce"></img>
              <img src={inst} className="cursor-pointer hover:animate-bounce"></img>
            </div>
            <button
              type="button"
              className=" text-white text-[15px] bg-gradient-to-t border p-2 px-8 mt-12 text-center rounded-md from-gray-800 to-haha"
            >
              <i className="fa-solid fa-globe"></i> English{" "}
              <i className="fa-sharp fa-solid fa-caret-down fa-beat"></i>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
