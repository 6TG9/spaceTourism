import React from "react";
import DestinationHead from "../Components/DestinationHead";
import NavBar from "../Components/NavBar";
import { NavLink } from "react-router-dom";
import moon from "../../public/images/Moon.png";
import PageTransition from "../Components/PageTransition";

const DestinationA = () => {
  return (
    <PageTransition>
      <div className="dest min-h-screen bg-[#0B0D17] text-white pb-12">
        <NavBar />
        <DestinationHead />

        {/* Main content */}
        <div
          className="
          flex flex-col items-center text-center mt-10 px-6
          md:flex-row md:items-center md:text-left md:mt-[80px] md:ml-[200px] md:gap-24 md:pb-[40px]
        "
        >
          {/* Moon image */}
          <img
            src={moon}
            alt="Moon"
            className="w-[170px] mb-8 md:w-[445px] md:mb-0"
          />

          {/* Text section */}
          <div className="flex flex-col items-center md:items-start">
            {/* Nav Tabs */}
            <div
              className="
              flex justify-center gap-6 text-[#D0D6F9] text-[14px] mb-6
              md:text-[16px] md:justify-between md:w-[285px] md:mb-0
            "
            >
              <NavLink
                to="/Destination-A"
                className={({ isActive }) =>
                  `pb-1 md:pb-2 ${
                    isActive
                      ? "border-b-2 md:border-b-4 border-white text-white"
                      : ""
                  }`
                }
                end
              >
                MOON
              </NavLink>
              <NavLink
                to="/Destination-B"
                className={({ isActive }) =>
                  `pb-1 md:pb-2 ${
                    isActive ? "border-b-2 border-white text-white" : ""
                  }`
                }
              >
                MARS
              </NavLink>
              <NavLink
                to="/Destination-C"
                className={({ isActive }) =>
                  `pb-1 md:pb-2 ${
                    isActive ? "border-b-2 border-white text-white" : ""
                  }`
                }
              >
                EUROPA
              </NavLink>
              <NavLink
                to="/Destination-D"
                className={({ isActive }) =>
                  `pb-1 md:pb-2 ${
                    isActive ? "border-b-2 border-white text-white" : ""
                  }`
                }
              >
                TITAN
              </NavLink>
            </div>

            {/* Title */}
            <h3
              className="
              text-[56px] md:text-[100px] text-[#FFFFFF] w-full md:w-[388px] mb-4 md:mb-0
            "
            >
              MOON
            </h3>

            {/* Description */}
            <p
              className="
              text-[15px] md:text-[18px] text-[#D0D6F9] max-w-[327px] md:w-[444px] leading-relaxed mb-8 md:mb-0
            "
            >
              See our planet as you’ve never seen it before. A perfect relaxing
              trip away to help regain perspective and come back refreshed.
              While you’re there, take in some history by visiting the Luna 2
              and Apollo 11 landing sites.
            </p>

            {/* Divider */}
            <div className="border-b border-[#FFFFFF79] opacity-50 w-[327px] md:w-[444px] my-8 md:my-[40px]"></div>

            {/* Stats */}
            <div
              className="
              flex flex-col gap-6 text-center md:flex-row md:gap-24 md:text-left
            "
            >
              <div>
                <p className="text-[#D0D6F9] text-[14px] md:text-[16px] tracking-widest">
                  AVG. DISTANCE
                </p>
                <p className="text-[#FFFFFF] text-[28px]">384,400 KM</p>
              </div>
              <div>
                <p className="text-[#D0D6F9] text-[14px] md:text-[16px] tracking-widest">
                  EST. TRAVEL TIME
                </p>
                <p className="text-[#FFFFFF] text-[28px]">3 DAYS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default DestinationA;
