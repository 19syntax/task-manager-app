import React from "react";
import { Route, Routes } from "react-router";
import { Dashboard, Taskpage } from "./assets/assets";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
