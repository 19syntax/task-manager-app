import React from "react";
import { Route, Routes } from "react-router";
import { Dashboard, TaskDetail, Taskpage } from "./assets/assets";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/task/:id" element={<TaskDetail />} />
      </Routes>
    </div>
  );
};

export default App;
