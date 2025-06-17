import React, { useContext, useState } from "react";
import { ThemeContext } from "../store/store";

const Taskpage = ({ handleNewTask }) => {
  const [item, setItem] = useState("");
  const { darkMode, DarkModeToggle } = useContext(ThemeContext);
  return (
    <div className="z-20 fixed inset-0 backdrop-blur-xl flex items-center justify-center">
      <div
        className={`border-gray-400 border p-6 rounded-lg max-h-[90vh] sm:w-[600px] w-[90%] overflow-y-scroll scroll-auto ${
          darkMode ? "bg-[#1b1b1b] text-white" : ""
        }`}
      >
        <p className="text-center font-semibold text-[18px]">New Task</p>
        <form>
          <div className="my-3">
            <label className="font-medium text-md">Title:</label>
            <input
              className={` w-full px-3 py-2.5 outline-none rounded-md shadow-2xl ${
                darkMode ? "bg-[#313131]" : "bg-gray-200"
              }`}
              type="text"
              placeholder="Enter task title"
            />
          </div>
          <div className="my-3">
            <label className="font-medium text-md">Description:</label>
            <textarea
              className={`w-full min-h-[200px] px-3 py-2.5 outline-none rounded-md shadow-2xl ${
                darkMode ? "bg-[#313131]" : "bg-gray-200"
              }`}
              name=""
              id=""
              placeholder="Enter task description"
            ></textarea>
          </div>
          <div className="flex flex-row gap-4 my-3">
            <div>
              <label className="font-medium text-md">Due date:</label>
              <input
                className={`w-full px-3 py-2.5 outline-none rounded-md shadow-sm ${
                  darkMode ? "bg-[#313131]" : "bg-gray-200"
                }`}
                type="date"
                placeholder="Enter task title"
              />
            </div>
            <div>
              <label className="font-medium text-md">Estimate task:</label>
              <input
                className={`w-full px-3 py-2.5 outline-none rounded-md shadow-2xl ${
                  darkMode ? "bg-[#313131]" : "bg-gray-200"
                }`}
                type="time"
                placeholder="Enter task title"
              />
            </div>
          </div>
          <label className="font-medium mt-2">Priority:</label>
          <div
            className={` w-full px-2 py-1 outline-none rounded-md mt-1 flex flex-row justify-between gap-2 ${
              darkMode ? "bg-[#313131]" : "bg-gray-200"
            }`}
          >
            <div
              onClick={() => setItem("Low")}
              className={`cursor-pointer flex-1 hover:bg-[#b5cff8] hover:text-[#1b1b1b] font-semibold py-1 text-center rounded-md transition-all duration-500 ${
                item === "Low" ? "bg-[#b5cff8]" : ""
              }`}
            >
              Low
            </div>
            <div
              onClick={() => setItem("Medium")}
              className={`cursor-pointer flex-1 hover:bg-[#b5cff8] hover:text-[#1b1b1b] font-semibold py-1 text-center rounded-md transition-all duration-500 ${
                item === "Medium" ? "bg-[#b5cff8]" : ""
              }`}
            >
              Medium
            </div>
            <div
              onClick={() => setItem("High")}
              className={`cursor-pointer flex-1 hover:bg-[#b5cff8] hover:text-[#1b1b1b] font-semibold py-1 text-center rounded-md transition-all duration-500 ${
                item === "High" ? "bg-[#b5cff8]" : ""
              }`}
            >
              High
            </div>
          </div>
          <div className="flex flex-row justify-between items-center mt-4">
            <button
              onClick={handleNewTask}
              className="border rounded-md px-6 py-2 text-red-500 hover:bg-red-500 hover:text-white hover:border-red-500 font-semibold transition-all duration-500"
            >
              Cancel
            </button>
            <button className="border rounded-md px-6 py-2 text-green-500 hover:bg-green-500 hover:text-white hover:border-green-500 font-semibold transition-all duration-500">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Taskpage;
