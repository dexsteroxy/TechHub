import React from "react";
import candis from "../image/candis.png";
import settings from "../image/settings.svg";

function Welcome() {
  return (
    <section>
      <div className=" bg-kc h-[700px] justify-center flex flex-col md:flex-row items-center mx-auto space-y-0 md:space-y-0">
        {/* left items */}
        <div className=" contain px-6  flex flex-col  md:w-1/2">
          <div className=" mt-[200x]">
            <h4 className=" font-bold text-car text-[30px] ">
              Welcome David!
            </h4>
            <p className=" text-[18px] font-medium mt-3">
              Thank you for Registering on Techie Hub
            </p>
          </div>
          <div className=" mt-12">
            <img src={candis} className=" w-[300px] h-[320px]"></img>
          </div>
        </div>
        {/* right item */}
        <div className=" rounded-md bg-black shadow-2xl shadow-white flex space-x-6 items-center relative justify-center lg:w-[500px] lg:h-[400px] ">
          <h4 className=" text-white  absolute top-3  text-center p-8 font-bold text-[20px]">
            Select user type
          </h4>
          <div className=" bg-white p-3 cursor-pointer hover:shadow-md hover:shadow-white  w-[150px] h-[157px]">
            <img src={settings} className=" mx-auto animate-spin"></img>
            <h4 className=" mt-1 text-[18px] font-bold text-center">Trainee</h4>
            <p className=" mt-1 text-center text-[10px] font-medium">
              Get access to courses and mentorship programs
            </p>
          </div>
          <div className=" bg-white cursor-pointer hover:shadow-md p-3 w-[150px] h-[157px]">
          <img src={settings} className=" animate-spin mx-auto"></img>
            <h4 className=" mt-1 text-[18px] font-bold text-center">Mentor</h4>
            <p className=" mt-1 text-center text-[10px] font-medium">
              Get access to courses and mentorship programs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
