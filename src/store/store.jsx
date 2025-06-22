import React, { createContext, useState } from "react";
import { months } from "../assets/assets";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [cancelNewTask, setCancelNewTask] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [dueHour, setDueHour] = useState("");
  const [task, setTask] = useState([]);

  const d = new Date();
  const curDay = d.getDate();
  const curMonth = months[d.getMonth()];

  function persistDate(newList) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }

  const handleNewTask = () => {
    setCancelNewTask((prev) => !prev);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    const newTask = task.concat({ title, description, priority, dueHour });

    persistDate(newTask);
    setTitle("");
    setDescription("");
    setPriority("");
    setTask(newTask);
    handleNewTask(true);
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleDueHour = (e) => {
    setDueHour(e.target.value);
  };
  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  const DarkModeToggle = () => {
    setDarkMode((prev) => !prev);
  };

  function handleDelete(index) {
    const newTodoList = task.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    setTask(newTodoList);
    persistDate(newTodoList);
  }

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
        curDay,
        curMonth,
        dueHour,
        handleDelete,
        handleDueHour,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
