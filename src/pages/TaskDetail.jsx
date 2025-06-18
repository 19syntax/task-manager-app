import React, { useContext } from "react";
import { ThemeContext } from "../store/store";
import { Navbar, Sidebar, Mainbar, Taskpage } from "../assets/assets";
import { useParams } from "react-router";

const TaskDetail = () => {
  const { darkMode, task } = useContext(ThemeContext);
  const { id } = useParams();
  const newDate = new Date();
  const creationDate = newDate.toDateString();

  return (
    <>
      <Navbar />
      <Sidebar />
      <div
        className={`sm:py-10 sm:px-10 px-3 py-3 absolute left-[15%] right-[2%] sm:right-[0] bottom-0 top-[10%] overflow-y-scroll overflow-x-hidden ${
          darkMode ? "bg-[#1b1b1b] text-white" : "bg-gray-100"
        }`}
      >
        <h2 className="font-bold sm:text-3xl py-5 text-[16px] ">
          {task[id].title}
        </h2>
        <div className="flex sm:flex-row flex-col  gap-3 sm:gap-10 sm:items-center items-start">
          <div
            className={`flex items-center  gap-2 text-sm text-center text-[#1b1b1b] font-semibold shadow-md py-1 px-6 rounded-full ${
              darkMode ? "bg-[#b5cff8] text-[#1b1b1b]" : ""
            }`}
          >
            <p className="w-2 h-2 bg-green-500 rounded-full"></p>
            <p className="text-sm">{task[id].priority}</p>
          </div>
          <div
            className={`flex items-center gap-2 text-sm text-center text-[#1b1b1b] font-semibold shadow-md py-1 px-6 rounded-full ${
              darkMode ? "bg-[#b5cff8] text-[#1b1b1b]" : ""
            }`}
          >
            <p className="font-semibold">Deadline:</p>
            <p>October 30, 2024</p>
          </div>
        </div>
        <div
          className={`sm:mt-12 mt-6 max-w-[700px] text-justify ${
            darkMode ? "border border-[#b5cff8] p-4 rounded-md" : ""
          }`}
        >
          <p className="mb-2 font-bold">Description:</p>
          <p className="text-sm">{task[id].description}</p>
        </div>
        <div className="max-w-[700px]  mt-20 flex items-center gap-2 text-sm text-center text-gray-500 font-semibold shadow-md py-1">
          <p className="font-semibold">Date Creation:</p>
          <p>{creationDate}</p>
        </div>
      </div>
    </>
  );
};

export default TaskDetail;
