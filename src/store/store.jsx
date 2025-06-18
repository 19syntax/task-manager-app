import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [cancelNewTask, setCancelNewTask] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [task, setTask] = useState([]);

  const handleNewTask = () => {
    setCancelNewTask((prev) => !prev);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    const newTask = task.concat({ title, priority });

    setTitle("");
    setTask(newTask);
    handleNewTask(true);
  };
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  const DarkModeToggle = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        DarkModeToggle,
        task,
        handleChangeTitle,
        handleChangeDescription,
        title,
        priority,
        description,
        handleAddTask,
        setPriority,
        setDescription,
        handleNewTask,
        cancelNewTask,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
