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
          <h1 className="text-center text-[#000] text-4xl  sm:text-7xl font-potta  pb-2 txt-s">
            {" "}
            Grecko-ERC404
          </h1>
          <p className=" font-potta text-lg sm:text-4xl mt-2">
          The Future of Hybrid Assets
          </p>

         
        </div>
        <div className="hidden sm:flex justify-between items-center mt-0 sm:mt-12 ">
          <img src="images/hero-img.png" alt="" className=" mt-[5%]" />
         <div>
         <img src="images/hero-img1.png" alt="" className=" mx-auto floating" />
         <div className=" mt-4 flex flex-col sm:flex-row items-center gap-4 justify-center">
         
         <a href="https://app.uniswap.org/tokens/ethereum/0x6a52dc99aac67b8f7b40b917d1c2bd396500a96b" target="_blank" className=" bg-[#fff] hover:bg-black  text-black hover:text-white font-potta text-xl sm:text-xl rounded-full border-2 px-14 pt-2 pb-3 mb-2 ">
           Buy Now
         </a>
         <a href="https://t.me/grecko404" className=" bg-[#fff] hover:bg-black  text-black hover:text-white font-potta text-xl sm:text-xl rounded-full border-2 px-14 pt-2 pb-3 mb-2 ">
           Join Telegram
         </a>
       
       </div>
       <a href="https://etherscan.io/address/0x6a52dc99aac67b8f7b40b917d1c2bd396500a96b" className=" text-center text-lg font-semibold px-2">Contract : 0x6a52dc99aac67b8f7b40b917d1c2bd396500a96b </a>
        
       <a href="https://" className=" text-center font-semibold pt-8"> </a>
         </div>
          <img src="images/hero-img2.png" alt="" className="-mt-[10%]" />
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
          <a href="https://app.uniswap.org/tokens/ethereum/0x6a52dc99aac67b8f7b40b917d1c2bd396500a96b" target="_blank" className=" bg-[#fff] hover:bg-black  text-black hover:text-white font-potta text-lg sm:text-3xl rounded-full border-2 px-8 pt-2 pb-3 w-[250px] mx-auto ">
        Buy Now
         </a>
         <div className=" flex justify-center gap-5 mt-6  mb-4">
          <a
            href="https://t.me/grecko404"
            target="_blank"
            className="  hover:bg-black  text-black hover:text-white bg-white rounded-full p-2 text-3xl "
          >
            {" "}
            <FaTelegramPlane />
          </a>

          <a
            href="https://twitter.com/Grecko404"
            target="_blank"
            className=" hover:bg-black  text-black hover:text-white bg-white rounded-full p-2 text-3xl"
          >
            <FaTwitter />
          </a>
        </div>
        <a href="https://etherscan.io/address/0x6a52dc99aac67b8f7b40b917d1c2bd396500a96b" className=" text-center text-xs font-semibold px-2">Contract : 0x6a52dc99aac67b8f7b40b917d1c2bd396500a96b </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
