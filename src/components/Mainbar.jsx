import React, { useContext } from "react";
import profile_pics from "../assets/profile_pics.jpg";
import { ThemeContext } from "../store/store";

const Mainbar = () => {
  const { darkMode, DarkModeToggle } = useContext(ThemeContext);
  return (
    <div
      className={`sm:py-10 sm:px-10 px-3 py-3 absolute left-[20%] right-[2%] sm:right-[0] bottom-0 top-[10%] overflow-y-scroll overflow-x-hidden ${
        darkMode ? "bg-[#1b1b1b] text-white" : ""
      }`}
    >
      <div className="grid sm:grid-cols-3 grid-rows-1 gap-5 pb-5">
        <div className="p-4 bg-[#b5cff8] text-[#1b1b1b] rounded-md w-full">
          <div className="flex justify-between">
            <p
              className={`py-1 px-4 rounded-full sm:px-5 ${
                darkMode ? "bg-[#1b1b1b] text-white" : "bg-white"
              }`}
            >
              High
            </p>
            <i class="fa-solid fa-share-nodes"></i>
          </div>
          <h3 className="font-medium text-2xl py-4 max-w-[350px]">
            March Dribble Shots Design.
          </h3>
          <span className="flex gap-3 items-center">
            <i class="fa-solid fa-calendar-days"></i> <span>16 Feb</span>
          </span>
          <div className="flex justify-between items-center mt-3">
            <img
              className="w-[40px] h-[40px] rounded-full border border-blue-400 object-cover"
              src={profile_pics}
              alt=""
            />
            <div className="flex gap-5">
              <i class="fa-solid fa-pen-to-square cursor-pointer"></i>
              <i class="fa-solid fa-trash cursor-pointer"></i>
            </div>
          </div>
        </div>

        {/* 2 */}
        <div className="p-4 bg-[#b5cff8] text-[#1b1b1b] rounded-md w-full">
          <div className="flex justify-between">
            <p
              className={`py-1 px-4 rounded-full sm:px-5 ${
                darkMode ? "bg-[#1b1b1b] text-white" : "bg-white"
              }`}
            >
              High
            </p>
            <i class="fa-solid fa-share-nodes"></i>
          </div>
          <h3 className="font-medium text-2xl py-4 max-w-[350px]">
            March Dribble Shots Design.
          </h3>
          <span className="flex gap-3 items-center">
            <i class="fa-solid fa-calendar-days"></i> <span>16 Feb</span>
          </span>
          <div className="flex justify-between items-center mt-3">
            <img
              className="w-[40px] h-[40px] rounded-full border border-blue-400 object-cover"
              src={profile_pics}
              alt=""
            />
            <div className="flex gap-5">
              <i class="fa-solid fa-pen-to-square cursor-pointer"></i>
              <i class="fa-solid fa-trash cursor-pointer"></i>
            </div>
          </div>
        </div>

        {/* 3 */}
        <div className="p-4 bg-[#b5cff8] text-[#1b1b1b] rounded-md w-full">
          <div className="flex justify-between">
            <p
              className={`py-1 px-4 rounded-full sm:px-5 ${
                darkMode ? "bg-[#1b1b1b] text-white" : "bg-white"
              }`}
            >
              High
            </p>
            <i class="fa-solid fa-share-nodes"></i>
          </div>
          <h3 className="font-medium text-2xl py-4 max-w-[350px]">
            March Dribble Shots Design.
          </h3>
          <span className="flex gap-3 items-center">
            <i class="fa-solid fa-calendar-days"></i> <span>16 Feb</span>
          </span>
          <div className="flex justify-between items-center mt-3">
            <img
              className="w-[40px] h-[40px] rounded-full border border-blue-400 object-cover"
              src={profile_pics}
              alt=""
            />
            <div className="flex gap-5">
              <i class="fa-solid fa-pen-to-square cursor-pointer"></i>
              <i class="fa-solid fa-trash cursor-pointer"></i>
            </div>
          </div>
        </div>
        {/* 4 */}
        <div className="p-4 bg-[#b5cff8] text-[#1b1b1b] rounded-md w-full">
          <div className="flex justify-between">
            <p
              className={`py-1 px-4 rounded-full sm:px-5 ${
                darkMode ? "bg-[#1b1b1b] text-white" : "bg-white"
              }`}
            >
              High
            </p>
            <i class="fa-solid fa-share-nodes"></i>
          </div>
          <h3 className="font-medium text-2xl py-4 max-w-[350px]">
            March Dribble Shots Design.
          </h3>
          <span className="flex gap-3 items-center">
            <i class="fa-solid fa-calendar-days"></i> <span>16 Feb</span>
          </span>
          <div className="flex justify-between items-center mt-3">
            <img
              className="w-[40px] h-[40px] rounded-full border border-blue-400 object-cover"
              src={profile_pics}
              alt=""
            />
            <div className="flex gap-5">
              <i class="fa-solid fa-pen-to-square cursor-pointer"></i>
              <i class="fa-solid fa-trash cursor-pointer"></i>
            </div>
          </div>
        </div>
        {/* 5 */}
        <div className="p-4 bg-[#b5cff8] text-[#1b1b1b] rounded-md w-full">
          <div className="flex justify-between">
            <p
              className={`py-1 px-4 rounded-full sm:px-5 ${
                darkMode ? "bg-[#1b1b1b] text-white" : "bg-white"
              }`}
            >
              High
            </p>
            <i class="fa-solid fa-share-nodes"></i>
          </div>
          <h3 className="font-medium text-2xl py-4 max-w-[350px]">
            March Dribble Shots Design.
          </h3>
          <span className="flex gap-3 items-center">
            <i class="fa-solid fa-calendar-days"></i> <span>16 Feb</span>
          </span>
          <div className="flex justify-between items-center mt-3">
            <img
              className="w-[40px] h-[40px] rounded-full border border-blue-400 object-cover"
              src={profile_pics}
              alt=""
            />
            <div className="flex gap-5">
              <i class="fa-solid fa-pen-to-square cursor-pointer"></i>
              <i class="fa-solid fa-trash cursor-pointer"></i>
            </div>
          </div>
        </div>

        {/* 6 */}
        <div className="p-4 bg-[#b5cff8] text-[#1b1b1b] rounded-md w-full">
          <div className="flex justify-between">
            <p
              className={`py-1 px-4 rounded-full sm:px-5 ${
                darkMode ? "bg-[#1b1b1b] text-white" : "bg-white"
              }`}
            >
              High
            </p>
            <i class="fa-solid fa-share-nodes"></i>
          </div>
          <h3 className="font-medium text-2xl py-4 max-w-[350px]">
            March Dribble Shots Design.
          </h3>
          <span className="flex gap-3 items-center">
            <i class="fa-solid fa-calendar-days"></i> <span>16 Feb</span>
          </span>
          <div className="flex justify-between items-center mt-3">
            <img
              className="w-[40px] h-[40px] rounded-full border border-blue-400 object-cover"
              src={profile_pics}
              alt=""
            />
            <div className="flex gap-5">
              <i class="fa-solid fa-pen-to-square cursor-pointer"></i>
              <i class="fa-solid fa-trash cursor-pointer"></i>
            </div>
          </div>
        </div>

        {/* 7 */}
        <div className="p-4 bg-[#b5cff8] text-[#1b1b1b] rounded-md w-full">
          <div className="flex justify-between">
            <p
              className={`py-1 px-4 rounded-full sm:px-5 ${
                darkMode ? "bg-[#1b1b1b] text-white" : "bg-white"
              }`}
            >
              High
            </p>
            <i class="fa-solid fa-share-nodes"></i>
          </div>
          <h3 className="font-medium text-2xl py-4 max-w-[350px]">
            March Dribble Shots Design.
          </h3>
          <span className="flex gap-3 items-center">
            <i class="fa-solid fa-calendar-days"></i> <span>16 Feb</span>
          </span>
          <div className="flex justify-between items-center mt-3">
            <img
              className="w-[40px] h-[40px] rounded-full border border-blue-400 object-cover"
              src={profile_pics}
              alt=""
            />
            <div className="flex gap-5">
              <i class="fa-solid fa-pen-to-square cursor-pointer"></i>
              <i class="fa-solid fa-trash cursor-pointer"></i>
            </div>
          </div>
        </div>

        {/* 8 */}
        <div className="p-4 bg-[#b5cff8] text-[#1b1b1b] rounded-md w-full">
          <div className="flex justify-between">
            <p
              className={`py-1 px-4 rounded-full sm:px-5 ${
                darkMode ? "bg-[#1b1b1b] text-white" : "bg-white"
              }`}
            >
              High
            </p>
            <i class="fa-solid fa-share-nodes"></i>
          </div>
          <h3 className="font-medium text-2xl py-4 max-w-[350px]">
            March Dribble Shots Design.
          </h3>
          <span className="flex gap-3 items-center">
            <i class="fa-solid fa-calendar-days"></i> <span>16 Feb</span>
          </span>
          <div className="flex justify-between items-center mt-3">
            <img
              className="w-[40px] h-[40px] rounded-full border border-blue-400 object-cover"
              src={profile_pics}
              alt=""
            />
            <div className="flex gap-5">
              <i class="fa-solid fa-pen-to-square cursor-pointer"></i>
              <i class="fa-solid fa-trash cursor-pointer"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainbar;
