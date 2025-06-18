import React, { useContext } from "react";
import { ThemeContext } from "../store/store";
import { Link } from "react-router";

const Sidebar = () => {
  const { darkMode, DarkModeToggle, handleNewTask } = useContext(ThemeContext);
  return (
    <div
      className={`border-r border-gray-200 fixed left-0 right-[85%] bottom-0 top-[10%] p-6 pl-5 ${
        darkMode ? "bg-[#1b1b1b] text-white" : "bg-white"
      }`}
    >
      <Link to="/">
        <div className="flex sm:gap-4 items-center  justify-center sm:justify-start  text-[16px]  hover:bg-gray-200 py-3 sm:px-3 w-full rounded-md transistion-all duration-500">
          <i class="fa-solid fa-house"></i>{" "}
          <span
            className={`font-medium ${
              darkMode ? "text-white" : "text-[#1b1b1b]"
            } hidden sm:block`}
          >
            HOME
          </span>
        </div>
      </Link>
      <div className="flex sm:gap-4 items-center justify-center sm:justify-start text-[16px] hover:bg-gray-200 py-3 sm:px-3 w-full my-3 rounded-md transistion-all duration-500">
        <i class="fa-solid fa-folder"></i>{" "}
        <span
          className={`font-medium ${
            darkMode ? "text-white" : "text-[#1b1b1b]"
          } hidden sm:block`}
        >
          FILE
        </span>
      </div>
      <div
        onClick={handleNewTask}
        className="flex sm:gap-4 items-center justify-center sm:justify-start text-[16px] hover:bg-gray-200 sm:py-3 sm:px-3 w-full my-3 rounded-md transistion-all duration-500"
      >
        <i class="fa-solid fa-circle-plus"></i>{" "}
        <span
          className={`font-medium ${
            darkMode ? "text-white" : "text-[#1b1b1b]"
          } hidden sm:block`}
        >
          NEW
        </span>
      </div>
      <div className="flex sm:gap-4 items-center justify-center sm:justify-start text-[16px] hover:bg-gray-200 py-3 sm:px-3 w-full my-3 rounded-md transistion-all duration-500">
        <i class="fa-solid fa-envelope"></i>{" "}
        <span
          className={`font-medium ${
            darkMode ? "text-white" : "text-[#1b1b1b]"
          } hidden sm:block`}
        >
          MESSAGE
        </span>
      </div>
      <div className="flex sm:gap-4 items-center justify-center sm:justify-start text-[16px] hover:bg-gray-200 py-3 sm:px-3 w-full my-3 rounded-md transistion-all duration-500">
        <i class="fa-solid fa-circle-user"></i>{" "}
        <span
          className={`font-medium ${
            darkMode ? "text-white" : "text-[#1b1b1b]"
          } hidden sm:block`}
        >
          SETTING
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
