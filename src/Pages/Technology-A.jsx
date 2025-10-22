import React from "react";
import TechHead from "../Components/TechHead";
import NavBar from "../Components/NavBar";
import { Link } from "react-router-dom";
import bitapp from "../../public/images/bitapp.jpg";
import PageTransition from "../Components/PageTransition";

const TechnologyA = () => {
  return (
    <PageTransition>
        <div className="tech bg-[linear-gradient(183.98deg,_#201F2F_3.25%,_#151518_15.55%)] min-h-screen text-white overflow-hidden">
          <NavBar />
          <TechHead />

          {/* MAIN CONTAINER */}
          <div className="flex flex-col md:flex-row items-center justify-center mt-[40px] pb-[60px] px-6 md:px-0 md:ml-[60px] md:gap-20 text-start">
            {/* DESKTOP BUTTONS (LEFT SIDE) */}
            <div className="hidden md:flex flex-col gap-8 items-center justify-center">
              <Link
                to="/Technology-A"
                className="flex items-center justify-center border bg-[#FFFFFF] text-[#0B0D17] w-[60px] h-[60px] rounded-full text-[26px]"
              >
                1
              </Link>
              <Link
                to="/Technology-B"
                className="flex items-center justify-center border border-[#FFFFFFC7] text-[#FFFFFF] w-[60px] h-[60px] rounded-full text-[26px]"
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

            {/* TEXT CONTENT */}
            <div className="flex flex-col items-start gap-6 mt-10 md:mt-0 w-full md:w-auto order-3 md:order-2">
              <p className="text-[#D0D6F9] text-[14px] md:text-[16px] uppercase tracking-[2px]">
                THE TERMINOLOGY…
              </p>
              <h2 className="text-[#FFFFFF] text-[28px] md:text-[50px] font-normal uppercase">
                LAUNCH VEHICLE
              </h2>
              <p className="text-[#D0D6F9] text-[15px] md:text-[18px] leading-[25px] md:leading-[32px] w-full md:w-[454px]">
                A launch vehicle or carrier rocket is a rocket-propelled vehicle
                used to carry a payload from Earth's surface to space, usually
                to Earth orbit or beyond. Our WEB-X carrier rocket is the most
                powerful in operation. Standing 150 metres tall, it's quite an
                awe-inspiring sight on the launch pad!
              </p>
            </div>

            {/* IMAGE */}
            <div className="w-full md:w-auto mb-6 md:mb-0 order-1 md:order-3">
              <img
                src={bitapp}
                alt="Launch Vehicle"
                className="w-full md:w-[500px] h-auto object-cover"
              />
            </div>

            {/* MOBILE BUTTONS (BELOW IMAGE, CENTERED) */}
            <div className="flex md:hidden gap-6 mt-6 justify-center items-center w-full order-2">
              <Link
                to="/Technology-A"
                className="flex items-center justify-center border bg-[#FFFFFF] text-[#0B0D17] w-[50px] h-[50px] rounded-full text-[20px]"
              >
                1
              </Link>
              <Link
                to="/Technology-B"
                className="flex items-center justify-center border border-[#FFFFFFC7] text-[#FFFFFF] w-[50px] h-[50px] rounded-full text-[20px]"
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
    </PageTransition>
  );
};

export default TechnologyA;
