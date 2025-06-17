import React, { useContext, useState } from "react";
import profile_pics from "../assets/profile_pics.jpg";
import Taskpage from "../pages/Taskpage";
import { ThemeContext } from "../store/store";

const Navbar = () => {
  const [menu, setMenu] = useState(true);
  const { darkMode, DarkModeToggle } = useContext(ThemeContext);

  const handleMenu = () => {
    setMenu((prev) => !prev);
  };
  return (
    <>
      <div
        className={`fixed w-full flex flex-row gap-10 items-center justify-between border-b border-b-gray-200 py-4 px-5 z-20 ${
          darkMode ? "bg-[#1b1b1b] text-white" : "bg-white"
        }`}
      >
        <div
          onClick={handleMenu}
          className="block sm:hidden w-[20px] transition-all duration-500"
        >
          {menu ? (
            <i class="fa-solid fa-bars"></i>
          ) : (
            <i class="fa-solid fa-xmark"></i>
          )}
        </div>
        {/* <div></div> */}
        <div className="hidden sm:block">
          <p
            className={`font-bold text-2xl ${
              darkMode ? "text-white" : "text-[#313131]"
            }`}
          >
            SYNTAX
          </p>
        </div>
        <div className="flex-1 max-w-[600px]">
          <input
            className={`bg-gray-100 w-full py-2 px-2 rounded-md text-[16px] outline-none ${
              darkMode ? "text-black" : ""
            }`}
            type="text"
            placeholder="Search tasks..."
          />
        </div>
        <div className="flex items-center sm:gap-5 gap-2">
          <img
            className="w-[40px] h-[40px] rounded-full border border-blue-400 object-cover"
            src={profile_pics}
            alt="profile_pics"
          />
          {darkMode ? (
            <div className="w-[40px] h-[40px] flex items-center justify-center">
              <i onClick={DarkModeToggle} class="fa-solid fa-sun text-xl "></i>
            </div>
          ) : (
            <div className="w-[40px] h-[40px] flex items-center justify-center">
              <i onClick={DarkModeToggle} class="fa-solid fa-moon text-xl"></i>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
