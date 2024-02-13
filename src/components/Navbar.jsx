import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { Link } from "react-scroll";

import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <nav className="z-[100] bg-black  ">
        <div className="container-wrapper border-none sm:border-2 border-[#fff] bg-black h-14 lg:h-16 2xl:h-20 rounded-2xl flex justify-between lg:justify-normal lg:grid lg:grid-cols-[1fr_16rem_1fr] gap-8 items-center">
          <div className="items-center justify-between text-base font-medium text-white flex px-4 w-full sm:w-auto  sm:px-0 lg:flex">
          
              <img
                src="/images/logo.png"
                className="h-[40px] sm:h-auto w-auto "
                alt=""
              />
         
         <button
            className="text-2xl text-white flex lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <IoMenu />
          </button>
          </div>

        

          <div className="items-center justify-evenly text-base font-medium text-white hidden lg:flex">
          <div className=" flex justify-center gap-5 ">
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
          </div>
        </div>
      </nav>

      <div
        className={`fixed top-0 right-0 w-[16rem] h-screen z-[10000] bg-white border-l-4 border-primary pt-6 px-8 transition-all duration-300 ${
          sidebarOpen ? "translate-x-0" : "translate-x-[16rem]"
        }`}
      >
        <div className="flex items-center justify-between mb-8 z-50">
          <img src="/images/logo.png" className="w-full max-w-[9rem]" alt="" />

          <button className="text-black text-2xl" onClick={toggleSidebar}>
            <IoClose />
          </button>
        </div>

        <div className="space-y-5 flex flex-col text-left items-start text-black font-medium">
        <div className=" flex justify-center gap-5 ">
          <a
            href="https://t.me/grecko404"
            target="_blank"
            className="  hover:bg-black  text-black hover:text-white bg-white rounded-full p-2 text-4xl "
          >
            {" "}
            <FaTelegramPlane />
          </a>

          <a
            href="https://twitter.com/Grecko404"
            target="_blank"
            className=" hover:bg-black  text-black hover:text-white bg-white rounded-full p-2 text-4xl"
          >
            <FaTwitter />
          </a>
        </div>
        </div>
      </div>

      <div
        className={`black-screen z-[900] ${sidebarOpen ? "show" : ""}`}
        onClick={toggleSidebar}
      ></div>
    </>
  );
}

export default Navbar;
