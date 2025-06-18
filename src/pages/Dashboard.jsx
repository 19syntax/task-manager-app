import React, { useContext } from "react";

import { Navbar, Sidebar, Mainbar, Taskpage } from "../assets/assets";
import { ThemeContext } from "../store/store";

const Dashboard = () => {
  const { cancelNewTask } = useContext(ThemeContext);
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Mainbar />
      {cancelNewTask ? <Taskpage /> : ""}
    </div>
  );
};

export default Dashboard;
