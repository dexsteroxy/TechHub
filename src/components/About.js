import React from "react";
import like from "../image/star.svg";
import settings from "../image/settings.svg";
import group1 from "../image/group1.png";
import subtract from "../image/subtract.svg";
import laptop from "../image/laptop.png";
import laugh from "../image/laugh.png";
import facebook from "../image/facebook.svg";
import twitter from "../image/twitter.svg";
import inst from "../image/inst.png";
import car from "../image/img2.png";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "../component/style.css";

// import required modules
import { Pagination, Navigation, HashNavigation } from "swiper";

function About() {
  return (
    <section className=" bg-kiss lg:h-[1030px] mt-20 md:mt-0  md:h-[1140px] h-[1200px]  mb-12 md:relative">
      <div>
        <img src={like} className=" shadow-book hidden md:block opacity-70 md:relative "></img>
        <div className=" md:absolute md:top-5">
          <h3 className="text-[40px] font-bold p-6 md:pl-16 md:mt-6 text-light">
            ABOUT US
          </h3>
          <div className=" md:relative  md:px-32 md:items-center md:justify-center md:p-6 p-3 md:mx-auto space-x-0 space-y-0 md:space-x-0">
            <p className=" text-light text-justify">
              Tech Hub is the #1 platform for any tech education. your one stop
              destination to equal yourself with tech Knowledge using our
              enriched courses at your disposal and access to mentoring sections
              to to better guild you, answer your questions and steer you in the
              right direction.
            </p>

            <div className=" md:relative">
              <p className=" text-light mt-8 text-justify">
                By offering courses and mentorship, Tech Hub has grown to over
                150,000 members from different countries, backgrounds and
                profession.
              </p>

              <p className=" text-light mt-8 text-justify">
                Through our directory and amazing feedback feature, we at Techie
                Hub research and discover amazing new ways of training and
                impacting knowledge by comparing courses and reading studednt
                review.
              </p>

              <p className=" text-light mt-8 text-justify">
                Get started today with Techie Hub and that dream career you
                desire.
              </p>
            </div>
          </div>
          <div>
            <h3 className=" justify-center flex items-center relative text-[40px] font-bold lg:mb-24 text-center md:mt-20 mt-6 mb-9 text-light">
              Why choose us
            </h3>
          </div>
















<div className="md:hidden">

          <Swiper
           slidesPerView={1}
           spaceBetween={20}
           pagination={{
             clickable: true,
           }}
           modules={[Pagination]}
           className="hidden "
          >
          <div className=" md:flex md:justify-center grid place-content-center lg:space-x-12 md:space-x-6 mb-[134px]  ">










<SwiperSlide>
            <div className=" mx-auto bg-light w-[306px] h-[303px] border border-black">
              <div className="p-6">
                <img src={settings} className=" animate-spin"></img>
                <h4 className=" font-semibold text-[24px] pt-4">
                  Certified Tutors
                </h4>
                <p className=" text-[16px] pt-7">
                  Take your first step into the world of tech. Introduction to
                  tech will teach you about the basics of tech and explain all
                </p>
              </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className=" mx-auto bg-light w-[306px]  h-[303px] border border-black">
              <div className="p-6">
                <img src={settings} className=" animate-spin"></img>
                <h4 className=" font-semibold text-[24px] pt-4">
                  Flexible Payment Plan
                </h4>
                <p className=" text-[16px] pt-7">
                  Take your first step into the world of tech. Introduction to
                  tech will teach you about the basics of tech and explain all
                </p>
              </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className=" bg-light mx-auto w-[306px] h-[303px] border border-black">
              <div className="p-6">
                <img src={settings} className=" animate-spin"></img>
                <h4 className=" font-semibold text-[24px] pt-4">
                  Self Paced Courses
                </h4>
                <p className=" text-[16px] pt-7">
                  Take your first step into the world of tech. Introduction to
                  tech will teach you about the basics of tech and explain all
                </p>
              </div>
            </div>
            </SwiperSlide>
          </div>

         

</Swiper>

         
</div>








          <div className=" hidden md:flex  md:justify-center  lg:space-x-12 md:space-x-6 mb-[134px]  ">











            <div className="  bg-light w-[306px] h-[303px] border border-black">
              <div className="p-6">
                <img src={settings} className=" animate-spin"></img>
                <h4 className=" font-semibold text-[24px] pt-4">
                  Certified Tutors
                </h4>
                <p className=" text-[16px] pt-7">
                  Take your first step into the world of tech. Introduction to
                  tech will teach you about the basics of tech and explain all
                </p>
              </div>
            </div>
           
            <div className="  bg-light w-[306px]  h-[303px] border border-black">
              <div className="p-6">
                <img src={settings} className=" animate-spin"></img>
                <h4 className=" font-semibold text-[24px] pt-4">
                  Flexible Payment Plan
                </h4>
                <p className=" text-[16px] pt-7">
                  Take your first step into the world of tech. Introduction to
                  tech will teach you about the basics of tech and explain all
                </p>
              </div>
            </div>
           
            <div className=" bg-light  w-[306px] h-[303px] border border-black">
              <div className="p-6">
                <img src={settings} className=" animate-spin"></img>
                <h4 className=" font-semibold text-[24px] pt-4">
                  Self Paced Courses
                </h4>
                <p className=" text-[16px] pt-7">
                  Take your first step into the world of tech. Introduction to
                  tech will teach you about the basics of tech and explain all
                </p>
              </div>
            </div>
          
          </div>

         












          <div className=" bg-second lg:h-[800px]">
            <div className=" text-center">
              <h2 className=" mt-20 md:mt-0  md:text-[45px] md:p-12 text-[24px] p-2 font-bold text-mum">
                Empowerment to build in-demand tech skills
              </h2>
            </div>

            <div className=" md:-mt-32 md:flex flex-col md:flex-row md:items-center  md:mx-auto  md:justify-center  space-y-0 md:space-y-0 md:space-x-32">
              {/* left items */}
              <div className="  mt-6 md:flex md:flex-col mb-48 md:mb-0  md:w-1/2">
                <div className=" relative flex  items-center  justify-center  ">
                  <img src={subtract} className=" md:ml-[400px]   md:w-[200px] w-[90px]"></img>

                  <div className=" absolute top-8 w-full ">
                    <img src={group1} className="md:w-[500px] w-[260px] md:mt-6 ml-5 md:ml-12"></img>
                  </div>
                </div>
              </div>
              <div className="md:pr-6 p-6 md:p-0">
                <p className=" text-ori md:mt-[280px] font-semibold text-[18px]">
                  GET GUIDANCE
                </p>
                <h3 className=" md:text-[32px] text-[20px] mt-8 font-bold text-black">
                  Mentors guide the way
                </h3>
                <p className=" text-[16px] text-justify mt-4 font-medium">
                  You may be starting a new career path in tech, but you don't
                  have to start this journey alone. Get access to our vibrant
                  mentors eager to coach you in the right direction every step
                  of the way.
                </p>
                <NavLink
              className="btn mt-8 hidden  relative md:inline-flex  px-6 py-2 items-center justify-start overflow-hidden transition-all bg-car rounded hover:bg-car group"
           
            >
              {/* purple box */}
              <span className="w-0 h-0 rounded bg-blue-900 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
              <span className="w-full text-white transition-colors duration-300 ease-in-out group-hover:text-white z-10">
               sign up for Mentorship
              </span>
            </NavLink>


            <NavLink
              className="btn mt-8 md:hidden  relative inline-flex  px-6 py-2 items-center justify-start overflow-hidden transition-all bg-car rounded hover:bg-car group"
           
            >
              {/* purple box */}
              <span className="w-0 h-0 rounded bg-blue-900 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
              <span className="w-full text-white transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                Mentorship
              </span>
            </NavLink>
              </div>
            </div>
          </div>


         

         





          {/* work on it responsive */}
          <div className=" bg-second hidden md:h-32 p-6 md:px-12 md:flex flex-col-reverse md:flex-row md:items-center  md:contain md:mx-auto space-y-0 md:space-y-0 md:space-x-3">
            {/* left items */}
            <div className=" md:w-1/2 mt-28 md:mt-24 md:ml-16">
              <p className=" text-ori font-semibold text-[18px]">EDUCATION</p>
              <h3 className=" md:text-[32px] text-[20px]  mt-8 font-bold text-black">
                Courses just for you
              </h3>
              <p className=" text-[16px] mt-4 font-medium text-justify ">
                All you have to do is pick a tech niche and select a course from
                our vast nest of courses.
                 We have enriched courses for different aspects of tech
                ranging from web development to product design courses.
              </p>
              <NavLink
              className="btn mt-8 hidden  relative md:inline-flex  px-6 py-2 items-center justify-start overflow-hidden transition-all bg-car rounded hover:bg-car group"
           
            >
              {/* purple box */}
              <span className="w-0 h-0 rounded bg-blue-900 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
              <span className="w-full text-white transition-colors duration-300 ease-in-out group-hover:text-white z-10">
               sign up for free
              </span>
            </NavLink>
            </div>

            {/* right item */}
            <div className=" relative md:mx-auto  items-center ">
              <img
                src={subtract}
                className=" md:ml-[250px] md:-mt-12 ml-40 md:w-[200px] w-[90px]"
              ></img>

              <div className=" absolute top-8 w-[400px]">
                <img src={laptop} className="md:lg:w-[500px] md:-mt-12 -mt-5 w-[260px]"></img>
              </div>
            </div>
          </div>








          

          <div className=" bg-second md:h-[800px] flex flex-col md:flex-row md:items-center  md:mx-auto  md:justify-center  space-y-0 md:space-y-0 md:space-x-32 p-6">
            {/* left items */}
            <div className="  mt-6 flex flex-col  md:w-1/2">
              <div className=" relative flex  items-center justify-center  ">
                <img src={subtract} className=" md:ml-[400px] md:w-[200px] w-[90px]"></img>

                <div className=" absolute top-8 w-full">
                  <img src={laugh} className="md:w-[500px] md:mt-6 w-[260px] md:ml-12"></img>
                </div>
              </div>
            </div>
            <div className="md:pr-6 ">
              <p className=" text-ori md:mt-[280px] mt-40  font-semibold text-[18px]">
                COMMUNITY
              </p>
              <h3 className=" text-[32px] mt-8 font-bold text-black">
                Peers of like minds
              </h3>
              <p className=" text-[16px] mt-4 font-medium">
                Find other people who are enrolled and learning with our
                platform. Brainstorm and share ideas with liked minded
                individuals, ask questions and stay in touch.
              </p>
              <div className=" flex mt-4  ">
                <img src={facebook} className="cursor-pointer hover:animate-bounce"></img>
                <img src={twitter} className="cursor-pointer hover:animate-bounce"></img>
                <img src={inst} className="cursor-pointer hover:animate-bounce"></img>
              </div>
            </div>
          </div>
          <div className=" bg-second text-second mb-32">
            .........
            <br />
            .............
          </div>

          <div className="lg:w-[900px] justify-center items-center mx-auto h-[300px] mb-12 bg-blac relative lg:bg-gradient-to-r from-tired to-black ">
            <img src={car} className="h-[300px]"></img>
          </div>
          <Footer/>
        </div>
      </div>
    </section>
  );
}

export default About;
