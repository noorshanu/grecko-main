import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

function Hero() {
  return (
    <section className="relative z-10 overflow-hidden bg-[#9EFF00]">
      <div className="container-wrapper   pt-2 pb-0 lg:pt-0 lg:pb-6 lg:drop-shadow-[0_0_10rem_white]">
        <div className=" text-center mt-4 sm:mt-10">
          <h1 className="text-center text-[#000] text-4xl  sm:text-8xl font-potta  pb-2 txt-s">
            {" "}
            grecko-nft
          </h1>
          <p className=" font-potta text-lg sm:text-4xl mt-2">
          The Future of Hybrid Assets
          </p>

         
        </div>
        <div className="hidden sm:flex justify-between items-center mt-0 sm:mt-12 ">
          <img src="images/hero-img.png" alt="" className=" mt-4" />
         <div>
         <div className=" mt-4 flex flex-col sm:flex-row items-center gap-4 justify-center">
         
         <button className=" bg-[#fff] hover:bg-black  text-black hover:text-white font-potta text-xl sm:text-3xl rounded-full border-2 px-14 pt-2 pb-3 ">
           Buy Now
         </button>
       </div>
         <img src="images/hero-img1.png" alt="" className=" mx-auto" />
         <p className=" text-center font-semibold mt-4">Contract:40-4w8r4wreuihj3489ruterfkd</p>
         </div>
          <img src="images/hero-img2.png" alt="" className="-mt-2" />
        </div>
        <div className="block lg:hidden sm:hidden">
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              {" "}
              <img src="images/hero-img.png" alt="" className=" mx-auto" />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                src="images/hero-img1.png"
                alt=""
                className=" mx-auto"
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                src="images/hero-img2.png"
                alt=""
                className=" mx-auto"
              />
            </SwiperSlide>
          </Swiper>
          <div className=" flex flex-col justify-center">
          <button className=" bg-[#fff] hover:bg-black  text-black hover:text-white font-potta text-xl sm:text-3xl rounded-full border-2 px-14 pt-2 pb-3 w-[250px] mx-auto ">
           Buy Now
         </button>
         <div className=" flex justify-center gap-5 mt-6 ">
          <a
            href="https://t.me/garbagesol"
            target="_blank"
            className="  hover:bg-black  text-black hover:text-white bg-white rounded-full p-2 text-3xl "
          >
            {" "}
            <FaTelegramPlane />
          </a>

          <a
            href="https://twitter.com/GarbageSol"
            target="_blank"
            className=" hover:bg-black  text-black hover:text-white bg-white rounded-full p-2 text-3xl"
          >
            <FaTwitter />
          </a>
        </div>
        <p className=" text-center font-semibold mt-4">Contract:40-4w8r4wreuihj3489ruterfkd</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
