import React from "react";
import DestinationHead from "../Components/DestinationHead";
import NavBar from "../Components/NavBar";
import { Link, NavLink } from "react-router-dom";

const DestinationC = () => {
  return (
    <div className="dest min-h-screen bg-[#0B0D17] text-white pb-12">
      <NavBar />
      <DestinationHead />
      <div
        className="flex flex-col items-center text-center mt-10 px-6
          md:flex-row md:items-center md:text-left md:mt-[80px] md:ml-[200px] md:gap-24 md:pb-[40px]"
      >
        <img
          src="/images/Europa.png"
          alt="Europa"
          className="w-[170px] mb-8 md:w-[445px] md:mb-0"
        />
        <div className="flex flex-col items-center md:items-start">
          <div
            className="flex justify-center gap-6 text-[#D0D6F9] text-[14px] mb-6
              md:text-[16px] md:justify-between md:w-[285px] md:mb-0"
          >
            <Link to="/Destination-A">MOON</Link>
            <Link to="/Destination-B">MARS</Link>
            <NavLink
              to="/Destination-C"
              className={({ isActive }) =>
                `pb-2 ${isActive ? "border-b-4 border-white text-white" : ""}`
              }
              end
            >
              EUROPA
            </NavLink>
            <Link to="/Destination-D">TITAN</Link>
          </div>
          <h3 className="text-[56px] md:text-[100px] text-[#FFFFFF] w-full md:w-[388px] mb-4 md:mb-0">
            EUROPA
          </h3>
          <p className="text-[15px] md:text-[18px] text-[#D0D6F9] max-w-[327px] md:w-[444px] leading-relaxed mb-8 md:mb-0">
            The smallest of the four Galilean moons orbiting Jupiter, Europa is
            a winter lover’s dream. With an icy surface, it’s perfect for a bit
            of ice skating, curling, hockey, or simple relaxation in your snug
            wintery cabin.
          </p>
          <div className="border-b border-[#FFFFFF79] opacity-50 w-[327px] md:w-[444px] my-8 md:my-[40px]"></div>
          <div className="flex flex-col gap-6 text-center md:flex-row md:gap-24 md:text-left">
            <div>
              <p className="text-[#D0D6F9] text-[14px] md:text-[16px] tracking-widest">
                AVG. DISTANCE
              </p>
              <p className="text-[#FFFFFF] text-[28px]">628 MIL. km</p>
            </div>
            <div>
              <p className="text-[#D0D6F9] text-[14px] md:text-[16px] tracking-widest">
                Est. travel time
              </p>
              <p className="text-[#FFFFFF] text-[28px]">3 years</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationC;
