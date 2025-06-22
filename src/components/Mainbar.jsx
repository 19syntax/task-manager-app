import React, { useContext } from "react";
import profile_pics from "../assets/profile_pics.jpg";
import { ThemeContext } from "../store/store";
import { Link } from "react-router";

const Mainbar = () => {
  const { darkMode, DarkModeToggle, task, curDay, curMonth, handleDelete } =
    useContext(ThemeContext);

  return (
    <div
      className={`sm:py-10 sm:px-10 px-3 py-3 absolute left-[15%] right-[2%] sm:right-[0] bottom-0 top-[10%] overflow-y-scroll overflow-x-hidden ${
        darkMode ? "bg-[#1b1b1b] text-white" : ""
      }`}
    >
      {task.length < 1 ? (
        <div className="flex items-center justify-center sm:mt-10 text-gray-400">
          No Available task
        </div>
      ) : (
        <div className="grid sm:grid-cols-3 grid-rows-1 gap-5 pb-5">
          {task.map((item, index) => (
            <Link key={index} to={`/task/${index}`}>
              <div className="p-4 bg-[#b5cff8] text-[#1b1b1b] rounded-md w-full">
                <div className="flex justify-between">
                  <p
                    className={`py-1 px-4 rounded-full sm:px-5 uppercase ${
                      darkMode ? "bg-[#1b1b1b] text-white" : "bg-white"
                    }`}
                  >
                    {item.priority}
                  </p>
                  <i class="fa-solid fa-share-nodes"></i>
                </div>
                <h3 className="font-medium text-2xl py-4 max-w-[350px]">
                  {item.title}
                </h3>
                <span className="flex gap-3 items-center">
                  <i class="fa-solid fa-calendar-days"></i>{" "}
                  <span>
                    {curDay} {curMonth}
                  </span>
                </span>
                <div className="flex justify-between items-center mt-3">
                  <img
                    className="w-[40px] h-[40px] rounded-full border border-blue-400 object-cover"
                    src={profile_pics}
                    alt=""
                  />
                  <div className="flex gap-5">
                    <i class="fa-solid fa-pen-to-square cursor-pointer"></i>
                    <i
                      onClick={(e) => {
                        e.preventDefault();
                        handleDelete(index);
                      }}
                      class="fa-solid fa-trash cursor-pointer"
                    ></i>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Mainbar;
