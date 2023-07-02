import React, { useState, useEffect } from "react";
import { navData } from "../data";
import { NavLink } from "react-router-dom";

function NavBar() {

  const [isActive, setIsActive] = useState(false);
  //nav mobile state
   const [navMobile, setNavMobile] = useState(false);
  //scroll event


  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <nav  className={`${
      isActive
        ? " h-[100px] lg:h-[100px] shadow-lg  "
        : " h-[80px] lg:h-[100px]"
    } fixed  border-b bg-white left-0 right-0 z-40 md:px-6 mx-w-[1920px]  md:w-full md:mx-auto transition-all duration-300`}>
      {/* flex container */}
      <div className=" flex items-center justify-between">
        {/* logo */}
        <div className="pt-2">
          {navData.map((detail, i) => {
            return <img src={detail.logo} key={i} alt="" className=""></img>;
          })}
        </div>
        {/* menu items */}
        <div className=" md:flex space-x-6 hidden">

          <form className=" md:flex md:items-center md:justify-center md:border rounded-md bg-kc text-gray-500 px-2 text-[16px]">
            
            <i className="fa-solid fa-magnifying-glass fa-shake"></i>

            <input
              type="text"
              className=" bg-kc outline-none rounded-md w-[380px] p-1 "
              placeholder="search course/mentor categories"
            ></input>
          </form>
          <NavLink
            className=" font-semibold "
            style={({ isActive }) => {
              return isActive ? { color: "blue" } : {};
            }}
            to="/"
          >
            Home
          </NavLink>

          

          <NavLink
            className=" font-semibold"
            style={({ isActive }) => {
              return isActive ? { color: "blue" } : {};
            }}
            to="/courses"
          >
            Courses
          </NavLink>

          <NavLink
            className=" font-semibold"
            style={({ isActive }) => {
              return isActive ? { color: "blue" } : {};
            }}
            to="/mentorship"
          >
            Mentorship
          </NavLink>
        </div>
        {/* <div className=" bg-me px-4 text-[18px] hidden lg:block ">
          <h4 className="  font-semibold">Eucharia Nneoma</h4>

          <div className=" lg:flex space-x-2 hidden">
            <p className="  text-[16px]">ieucharia43@gmail.com</p>
            <div className=" cursor-pointer">
              <i className="fa-solid fa-user-tie fa-beat"></i>
              <i className="fa-solid fa-chevron-up"></i>
            </div>
          </div>
        </div> */}
        <NavLink
          className=" font-semibold hidden -mt-1 md:block"
          style={({ isActive }) => {
            return isActive ? { color: "blue" } : {};
          }}
          to="/login"
        >
          login
        </NavLink>

        <NavLink
         className="btn relative hidden md:inline-flex p-1  px-4 py-1 items-center justify-start overflow-hidden transition-all bg-car rounded hover:bg-car group" to="/register">

         {/* purple box */}
         <span className="w-0 h-0 rounded bg-blue-900 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
         <span className="w-full text-white transition-colors duration-300 ease-in-out group-hover:text-white z-10">
          Register
         </span>
        
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
