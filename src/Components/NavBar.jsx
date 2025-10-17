import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex w-[375px] sm:w-[729px] h-[96px] items-center gap-[40px] sm:pt-[40px] sm:pl-[55px] pl-[13.75px] justify-between sm:justify-normal relative">
      <img src="/public/images/Grou.svg" alt="" />

      {/* ====== Hamburger Menu (Mobile) ====== */}
      {!isOpen && (
        <img
          src="/public/images/Group.png"
          alt="menu"
          className="sm:hidden cursor-pointer w-[24px] h-[21px]"
          onClick={() => setIsOpen(true)}
        />
      )}

      {/* ====== Overlay (dark transparent background) ====== */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-[2px] z-20 sm:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* ====== Sidebar Dropdown Menu ====== */}
      <div
        className={`fixed top-0 right-0 h-full w-[254px] text-white z-30 transform transition-transform duration-300 ease-in-out sm:hidden 
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        style={{
          background:
            "linear-gradient(90deg, rgba(11,13,23,0.8) 0%, rgba(11,13,23,0.4) 100%)",
          backdropFilter: "blur(40px)",
        }}
      >
        {/* Close Button */}
        <div className="flex justify-end mt-8 pr-6">
          <img
            src="/public/images/cancellllll.png"
            alt="close"
            className="cursor-pointer w-[24px] h-[24px]"
            onClick={() => setIsOpen(false)}
          />
        </div>

        {/* Nav Links */}
        <div className="flex flex-col mt-16 pl-8 space-y-6 tracking-[2.7px]">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-3 text-[16px] ${
                isActive ? "text-white font-semibold" : "text-[#FFFFFFB3]"
              }`
            }
            end
          >
            <span className="font-bold">00</span> HOME
          </NavLink>

          <NavLink
            to="/Destination-A"
            className={({ isActive }) =>
              `flex items-center gap-3 text-[16px] ${
                isActive ? "text-white font-semibold" : "text-[#FFFFFFB3]"
              }`
            }
          >
            <span className="font-bold">01</span> DESTINATION
          </NavLink>

          <NavLink
            to="/Crew-A"
            className={({ isActive }) =>
              `flex items-center gap-3 text-[16px] ${
                isActive ? "text-white font-semibold" : "text-[#FFFFFFB3]"
              }`
            }
          >
            <span className="font-bold">02</span> CREW
          </NavLink>

          <NavLink
            to="/Technology-A"
            className={({ isActive }) =>
              `flex items-center gap-3 text-[16px] ${
                isActive ? "text-white font-semibold" : "text-[#FFFFFFB3]"
              }`
            }
          >
            <span className="font-bold">03</span> TECHNOLOGY
          </NavLink>
        </div>
      </div>

      {/* Desktop nav */}
      <div className="border w-[473px] border-[#FFFFFF79] opacity-50 h-[1px] relative z-10 hidden sm:block"></div>
      <div className="hidden sm:flex absolute left-[600px] bg-[#FFFFFF]/6 z-[2] backdrop-blur pr-[250px] pl-[100px] pt-[29px] items-center gap-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-1.5 pb-6 ${
              isActive ? "border-b-2 border-white" : ""
            }`
          }
          end
        >
          <p className="text-[12px] text-[#FFFFFF]">00</p>
          <p className="text-[12px] text-[#FFFFFF79]">HOME</p>
        </NavLink>
        <NavLink
          to="/Destination-A"
          className={({ isActive }) =>
            `flex items-center gap-1.5 pb-6 ${
              isActive ? "border-b-2 border-white" : ""
            }`
          }
        >
          <p className="text-[12px] text-[#FFFFFF]">01</p>
          <p className="text-[12px] text-[#FFFFFF79]">DESTINATION</p>
        </NavLink>
        <NavLink
          to="/Crew-A"
          className={({ isActive }) =>
            `flex items-center gap-1.5 pb-6 ${
              isActive ? "border-b-2 border-white" : ""
            }`
          }
        >
          <p className="text-[12px] text-[#FFFFFF]">02</p>
          <p className="text-[12px] text-[#FFFFFF79]">CREW</p>
        </NavLink>
        <NavLink
          to="/Technology-A"
          className={({ isActive }) =>
            `flex items-center gap-1.5 pb-6 ${
              isActive ? "border-b-2 border-white" : ""
            }`
          }
        >
          <p className="text-[12px] text-[#FFFFFF]">03</p>
          <p className="text-[12px] text-[#FFFFFF79]">TECHNOLOGY</p>
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
