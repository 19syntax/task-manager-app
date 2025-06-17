import React, { useState } from "react";

import { Navbar, Sidebar, Mainbar, Taskpage } from "../assets/assets";

const Dashboard = () => {
  const [cancelNewTask, setCancelNewTask] = useState(false);

  const handleNewTask = () => {
    setCancelNewTask((prev) => !prev);
  };

  return (
    <div>
      <Navbar />
      <Sidebar handleNewTask={handleNewTask} />
      <Mainbar />
      {cancelNewTask ? <Taskpage handleNewTask={handleNewTask} /> : ""}
    </div>
  );
};

export default Dashboard;
