import React from 'react'
import NavBar from './NavBar';
import car from "../image/img2.png";
import freePik from '../img/freePik.svg';
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
import im1 from '../img/im1.png';

function Courses() {
  return (
    <section className=' bg-second'>
      <NavBar/>
      <div className="lg:w-[1020px] px-16 mt-12 flex items-center mx-auto h-[200px] mb-12 relative bg-gradient-to-r from-course to-black space-x-6 ">
            <img src={freePik} className="h-[200px] "></img>
            <p className=' text-[24px] font-medium text-white '>Not sure where to begin?</p> 
            <p className=' text-[24px] font-medium text-car underline'>Take a placement quiz</p>
          </div>

          <div className='mb-6 '>
            <h3 className=' font-bold text-[38px] pl-[126px]'>Course categories</h3>
          </div>
          <div className='flex space-x-5 py-4 pl-[126px] bg-white'>
          <NavLink
            className=" font-semibold hover:border-b-4 hover:text-black transition-all duration-300 hover:border-course text-cat text-[20px]"
            style={({ isActive }) => {
              return isActive ? { color: "blue" } : {};
            }}
            to="/courses/design"
          >
           Design
          </NavLink>

          <NavLink
            className="  font-semibold hover:border-b-4 hover:text-black transition-all duration-300 hover:border-course text-cat text-[20px] "
            style={({ isActive }) => {
              return isActive ? {   } : {};
            }}
            
          >
            Web Development
          </NavLink>




          <NavLink
            className="  font-semibold hover:border-b-4 hover:text-black transition-all duration-300 hover:border-course text-cat text-[20px] "
            style={({ isActive }) => {
              return isActive ? {  } : {};
            }}
            
          >
            App Development
          </NavLink>


          <NavLink
            className="  font-semibold hover:border-b-4 hover:text-black transition-all duration-300 hover:border-course text-cat text-[20px] "
            style={({ isActive }) => {
              return isActive ? {  } : {};
            }}
            
          >
            Dev OPs
          </NavLink>


          <NavLink
            className="  font-semibold hover:border-b-4 hover:text-black transition-all duration-300 hover:border-course text-cat text-[20px]"
            style={({ isActive }) => {
              return isActive ? {  } : {};
            }}
            
          >
            Data Analytics
          </NavLink>

          <NavLink
            className="  font-semibold hover:border-b-4 hover:text-black transition-all duration-300 hover:border-course text-cat text-[20px] "
            style={({ isActive }) => {
              return isActive ? {  } : {};
            }}
            
          >
            Project Management
          </NavLink>
          
          </div>
          <div className='pl-[126px] mt-8 mb-6'>
            <p className=' text-[19px] font-normal'>ddd dpdkclkds dkjcka aija aicjs dacaokca caji ia icjsakjc acacds dcoac dwaicuqif efid dudi dicd d cdic dicisauid vdivioa do doooovd vodioqc owf djchajo icjsk v eijciscjksc ijcskjcjs vidscjisc aicjisjcke vfivedvifv  aicidcjkdsacj dicdskc dsicuida dicusijd vdd</p>
          </div>












          <div className='px-32 mb-12'>


          <Swiper
              slidesPerView={4}
              spaceBetween={20}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper flex flex-col "
            >
              <SwiperSlide>
                <div className=" h-[220px]   transition-all duration-500 bg-white shadow-lg hov  w-[200px]  rounded-2xl">
                  <div className=''>
                  <img src={im1} alt="" className=" hover:object-cover  transition-all duration-500 rounded-lg w-40" />
                    <div>yyy</div>
                  </div>
                 
                 
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className=" h-[220px]  transition-all duration-500 bg-white shadow-lg hover:border  w-[200px]  rounded-2xl">
                  <div className=''>
                  <img src={im1} alt="" className=" hover:hidden transition-all duration-500 rounded-lg w-40" />
                    <div>yyy</div>
                  </div>
                 
                 
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className=" h-[220px]  transition-all duration-500 bg-white shadow-lg hover:border  w-[200px]  rounded-2xl">
                  <div className=''>
                  <img src={im1} alt="" className=" hover:hidden transition-all duration-500 rounded-lg w-40" />
                    <div>yyy</div>
                  </div>
                 
                 
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className=" h-[220px]  transition-all duration-500 bg-white shadow-lg hover:border  w-[200px]  rounded-2xl">
                  <div className=''>
                  <img src={im1} alt="" className=" hover:hidden transition-all duration-500 rounded-lg w-40" />
                    <div>yyy</div>
                  </div>
                 
                 
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className=" h-[220px]  transition-all duration-500 bg-white shadow-lg hover:border  w-[200px]  rounded-2xl">
                  <div className=''>
                  <img src={im1} alt="" className=" hover:hidden transition-all duration-500 rounded-lg w-40" />
                    <div>yyy</div>
                  </div>
                 
                 
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className=" h-[220px]  transition-all duration-500 bg-white shadow-lg hover:border  w-[200px]  rounded-2xl">
                  <div className=''>
                  <img src={im1} alt="" className=" hover:hidden transition-all duration-500 rounded-lg w-40" />
                    <div>yyy</div>
                  </div>
                 
                 
                </div>
              </SwiperSlide>
            
            </Swiper>
          </div>













    </section>
  
  )
}

export default Courses