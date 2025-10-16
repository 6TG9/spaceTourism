import React from "react";
import NavBar from "../Components/NavBar";

const HomePage = () => {
  return (
    <div className="homebg min-h-screen flex flex-col justify-between text-white overflow-hidden pb-12">
      <NavBar />

      {/* MAIN CONTENT */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 lg:px-40 mt-20 md:mt-40 space-y-16 md:space-y-0">
        {/* LEFT TEXT SECTION */}
        <div className="text-center md:text-left max-w-[500px]">
          <h3 className="text-[#D0D6F9] text-[16px] md:text-[28px] tracking-[2.7px] mb-4">
            SO, YOU WANT TO TRAVEL TO
          </h3>
          <h1 className="text-[80px] sm:text-[100px] md:text-[150px] font-serif mb-6">
            SPACE
          </h1>
          <p className="text-[#D0D6F9] text-[15px] sm:text-[18px] leading-relaxed">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        {/* RIGHT BUTTON SECTION */}
        <div className="flex justify-center md:justify-end">
          <div
            className="bg-white text-black flex items-center justify-center 
              w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[274px] md:h-[274px] 
              rounded-full cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            <h3 className="text-[20px] sm:text-[28px] font-semibold tracking-widest">
              EXPLORE
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
