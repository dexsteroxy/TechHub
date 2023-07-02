import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navData } from "../data";
import ti from "../image/sir4.svg";
import bp from "../image/kuda.png";
import lt from "../image/andela.png";
import git from "../image/sir1.svg";
import fluter from "../image/sir3.svg";
import cool from "../image/cool.svg";
import ma from "../image/sir5.svg";
import lap from "../image/sir2.svg";
import logo from "../image/logo.svg";
import Menu from "./menu";
import Ul from "./ul";
import small from "../image/small.png";
import dot from "../image/dot.svg";
import About from "./About";
import NavBar from "../components/NavBar";

function Home() {
  const [isOPen, setIsOpen] = useState(false);
  return (
    <section className=" relative">
      <NavBar />
      <div className=" bg-pen lg:py-12 justify-center h-[800px] w-full  flex flex-col md:flex-row items-center  md:mx-auto space-y-0 md:space-y-0 lg:space-x-36">
        {/* left items */}
        <div className=" md:container lg:px-6 px-2  flex flex-col  md:w-1/2">
          <h4 className=" lg:text-[38px] text-[28px] md:mb-0 font-bold text-center md:text-left lg:mt-32">
            Start a career in tech with the right
            <span className=" text-book"> course</span> and
            <span className="text-book"> mentorship</span>
          </h4>
          <p className=" font-serif lg:text-[20px] font-medium mb-3 md:mb-0 text-[17px] text-center md:text-left mt-6">
            Techie Hub offers you the courses and mentorship you need to be on
            your way to an amazing new career.
          </p>
          <div className=" lg:mb-32  space-x-5 mb-52 justify-center md:justify-start lg:mt-10 mt-5 flex lg:space-x-3 md:space-x-6">
            {/* <NavLink
              className=" font-semibold bg-car rounded-md px-6 p-1 py-2 text-center text-white hover:bg-blue-900 transition-all duration-300 text-[13px]"
              style={({ isActive }) => {
                return isActive ? { color: "white" } : {};
              }}
              to="/register"
            >
              Register for free
            </NavLink> */}

            <NavLink
              className="btn relative inline-flex  px-6 py-2 items-center justify-start overflow-hidden transition-all bg-car rounded hover:bg-car group"
              to="/register"
            >
              {/* purple box */}
              <span className="w-0 h-0 rounded bg-blue-900 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
              <span className="w-full text-white transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                Register for free
              </span>
            </NavLink>

            <button className=" underline text-[13px] text-car font-semibold">
              Explore Courses
            </button>
          </div>
        </div>

        {/* right item */}
        <div className=" relative mt-32 md:mt-0 items-center ">
          {navData.map((me, i) => {
            return (
              <img
                src={me.home}
                key={i}
                className="-mt-20 h- lg:w-72 w-52"
              ></img>
            );
          })}

          <div className=" absolute lg:right-24 right-6 w-full">
            {navData.map((me, i) => {
              return (
                <img src={me.car} key={i} className=" w-52 md:w-full"></img>
              );
            })}
          </div>
        </div>
      </div>

      {/* stage2 */}
      <div className=" mt-[47px] mb-7 justify-center items-center flex text-center">
        <h5 className=" md:text-[22px] text-[14px] font-bold font-serif">
          Get mentored by tech veterans working with top companies
        </h5>
      </div>
      <marquee behaviour="" direction="right">
        <div className="flex space-x-12">
          <img src={ti}></img>
          <img src={bp} className="h-14 "></img>
          <img src={lt} className="h-14"></img>
          <img src={git} className="md:w-24"></img>
          <img src={fluter} className=""></img>
          <img src={cool} className=""></img>
          <img src={ma} className=""></img>
          <img src={lap} className=""></img>
          <img src={logo} className="w-24"></img>
        </div>
      </marquee>
      {/* next stage3 */}
      <div className=" bg-my border-t justify-center flex items-center">
        <div className=" bg-white mt-24 md:w-[500px] w-[300px] mb-40 shadow-md h-[180px] lg:h-[200px]  rounded-md ">
          <div className=" flex md:space-x-12 space-x-12">
            <div className="bg-book font-semibold text-[13px] md:text-[20px] pl-2 md:pl-16 pr-1 py-2 shadow-xl rounded-tl-md">
              Available courses
            </div>

            <div className="md:p-3 p-2 pl-4 md:pl-0 text-[13px] md:text-[20px]">
              Mentors
            </div>
          </div>
          <div className="flex  mt-[46px] justify-center">
            <div className=" border py-2  md:px-5 lg:space-x-8 flex">
              <Menu />
            </div>
            <div className=" border py-2 md:px-5 lg:space-x-8 flex">
              <button className=" font-semibold text-[13px] md:text-[20px]">
                Specification
              </button>
              <div className=" text-gray-300">
                <i className="fa-solid fa-chevron-up"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-my justify-center flex flex-col md:flex-row items-center px-6 m-auto space-y-0 md:space-y-0 lg:space-x-32">
        <div className=" container lg:px-6 mb-12 md:mb-0   flex flex-col  md:w-1/2  ">
          <div className=" bg-white lg:w-[700px] lg:h-[400px]  shadow-md">
            <div className=" p-6 space-x-2">
              <p className=" text-book font-serif font-semibold">Course</p>
              <p className=" font-serif mt-[40px] font-semibold">
                Introduction to tech
              </p>
              <p className="  text-[20px] mt-4">
                <span className=" mr-3  bg-car px-[12px] border rounded-full"></span>
                Beginner
              </p>
              <p className=" text-[18px] mt-6 font-sans">
                Take your first step into the world of tech. Introduction to
                tech will teach you all about the basics of tech and explain all
                the niches so you can pick one that best suits your personality.
              </p>
              <div className=" flex justify-around ">
                <button className=" text-[18px] text-center -mr-32 font-semibold bg-car rounded-md px-4 text-white hover:bg-blue-900 transition-all duration-300">
                  Enroll
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative lg:w-[400px] bg-white h-[400px] items-center shadow-md ">
          <div className="p-6">
            <p className=" text-book font-serif font-semibold">Mentorship</p>
            <p className=" font-serif mt-[40px] font-semibold">
              Introduction to tech
            </p>
          </div>
          <div className="flex -mt-7 p-6 space-x-3">
            <img src={small} className=" h-[73px] w-[70px]"></img>
            <div className="text-[16px] ">
              <p>John Doe</p>
              <p>Lorem ipsum lorem ipsum</p>
            </div>
          </div>
          <div>
            <p className=" text-[16px] font-semibold px-6 -mt-2">
              Happy to guide you in making that first choice of which tech path
              to follow.
            </p>
          </div>
          <div className=" flex space-x-4 mt-6 justify-end pr-7">
            <img src={dot}></img>
            <p className=" text-map text-[17px]">Available</p>
            <button className=" text-[18px] text-center  font-semibold bg-car rounded-md px-4 text-white hover:bg-blue-900 transition-all duration-300">
              book
            </button>
          </div>
        </div>
      </div>
      <div className=" hidden lg:flex space-x-[560px] bg-my">
        <div className="flex">
          <p className=" text-[17px] font-semibold px-10 mt-6 mb-40">
            Explore courses
          </p>
          <div className=" mt-6 mb-40">
            <i className="fa-solid fa-arrow-right fa-beat"></i>
          </div>
        </div>

        <div className=" hidden lg:flex">
          <p className=" text-[17px] font-semibold mt-6 mb-40">
            Explore courses
          </p>
          <div className=" mt-6 mb-40">
            <i className="fa-solid fa-arrow-right fa-beat"></i>
          </div>
        </div>
      </div>
      <About />
    </section>
  );
}

export default Home;
