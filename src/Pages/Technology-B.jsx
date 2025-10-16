import React from "react";
import TechHead from "../Components/TechHead";
import NavBar from "../Components/NavBar";
import { Link } from "react-router-dom";

const TechnologyB = () => {
  return (
    <div className="tech bg-[linear-gradient(183.98deg,_#201F2F_3.25%,_#151518_15.55%)] min-h-screen text-white overflow-hidden">
      <NavBar />
      <TechHead />
      <div className="flex flex-col md:flex-row items-center justify-center mt-[40px] pb-[60px] px-6 md:px-0 md:ml-[60px] md:gap-20 text-start">
        <div className="hidden md:flex flex-col gap-8 items-center justify-center">
          <Link
            to="/Technology-A"
            className="flex items-center justify-center border border-[#FFFFFFC7] text-[#FFFFFF] w-[60px] h-[60px] rounded-full text-[26px]"
          >
            1
          </Link>
          <Link
            to="/Technology-B"
            className="flex items-center justify-center border bg-[#FFFFFF] text-[#0B0D17] w-[60px] h-[60px] rounded-full text-[26px]"
          >
            2
          </Link>
          <Link
            to="/Technology-C"
            className="flex items-center justify-center border border-[#FFFFFFC7] text-[#FFFFFF] w-[60px] h-[60px] rounded-full text-[26px]"
          >
            3
          </Link>
        </div>
        <div className="flex flex-col items-start gap-6 mt-10 md:mt-0 w-full md:w-auto order-3 md:order-2">
          <p className="text-[#D0D6F9] text-[14px] md:text-[16px] uppercase tracking-[2px]">
            THE TERMINOLOGY…
          </p>
          <h2 className="text-[#FFFFFF] text-[28px] md:text-[50px] font-normal uppercase">
            SPACEPORT
          </h2>
          <p className="text-[#D0D6F9] text-[15px] md:text-[18px] leading-[25px] md:leading-[32px] w-full md:w-[454px]">
            A spaceport or cosmodrome is a site for launching (or receiving)
            spacecraft, by analogy to the seaport for ships or airport for
            aircraft. Based in the famous Cape Canaveral, our spaceport is
            ideally situated to take advantage of the Earth’s rotation for
            launch.
          </p>
        </div>
        <div className="w-full md:w-auto mb-6 md:mb-0 order-1 md:order-3">
          <img
            src="/images/SPACEPORT.jpg"
            alt=""
            className="w-full md:w-[500px] h-auto object-cover"
          />
        </div>
        <div className="flex md:hidden gap-6 mt-6 justify-center items-center w-full order-2">
          <Link
            to="/Technology-A"
            className="flex items-center justify-center border border-[#FFFFFFC7] text-[#FFFFFF] w-[50px] h-[50px] rounded-full text-[20px]"
          >
            1
          </Link>
          <Link
            to="/Technology-B"
            className="flex items-center justify-center border bg-[#FFFFFF] text-[#0B0D17] w-[50px] h-[50px] rounded-full text-[20px]"
          >
            2
          </Link>
          <Link
            to="/Technology-C"
            className="flex items-center justify-center border border-[#FFFFFFC7] text-[#FFFFFF] w-[50px] h-[50px] rounded-full text-[20px]"
          >
            3
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TechnologyB;
