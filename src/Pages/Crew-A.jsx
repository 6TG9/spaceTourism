import React, { useState } from "react";
import CrewHead from "../Components/CrewHead";
import NavBar from "../Components/NavBar";

const crewData = [
  {
    role: "Commander",
    name: "Douglas Hurley",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    image: "/images/Douglas-crew.png",
  },
  {
    role: "Mission Specialist",
    name: "Mark Shuttleworth",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    image: "/images/Mark-crew.png",
  },
  {
    role: "Pilot",
    name: "Victor Glover",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    image: "/images/Victor-crew.png",
  },
  {
    role: "Flight Engineer",
    name: "Anousheh Ansari",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    image: "/images/Anousheh-crew.png",
  },
];

const CrewA = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="crew min-h-screen flex flex-col bg-[#0B0D17] text-white pb-12 overflow-hidden">
      <NavBar />
      <CrewHead />

      {/* MAIN CONTENT */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-[1200px] mx-auto px-6 md:px-16 mt-10 md:mt-0">
        {/* LEFT SECTION - TEXT + DESKTOP DOTS */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left mt-10 md:mt-0 md:w-1/2">
          <p className="text-[16px] md:text-[32px] text-[#FFFFFFC7] uppercase">
            {crewData[current].role}
          </p>
          <h2 className="text-[24px] md:text-[50px] font-normal uppercase mt-2">
            {crewData[current].name}
          </h2>
          <p className="text-[15px] md:text-[18px] text-[#D0D6F9] mt-4 leading-[25px] md:leading-[32px] md:w-[444px]">
            {crewData[current].bio}
          </p>

          {/* DOTS BELOW TEXT (DESKTOP ONLY) */}
          <div className="hidden md:flex gap-4 mt-12 justify-start">
            {crewData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-[10px] h-[10px] rounded-full transition-all duration-300 ${
                  idx === current ? "bg-white scale-110" : "bg-gray-500/50"
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* RIGHT SECTION - IMAGE + MOBILE DOTS */}
        <div className="flex flex-col items-center w-full md:w-1/2">
          <img
            src={crewData[current].image}
            alt={crewData[current].name}
            className="w-[250px] md:w-[500px] h-auto object-contain mt-5 md:mt-0"
          />

          {/* DOTS BELOW IMAGE (MOBILE ONLY) */}
          <div className="flex md:hidden gap-4 mt-8 justify-center">
            {crewData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-[10px] h-[10px] rounded-full transition-all duration-300 ${
                  idx === current ? "bg-white scale-110" : "bg-gray-500/50"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrewA;
