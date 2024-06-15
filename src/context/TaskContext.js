import React, { createContext, useState } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { id: tasks.length + 1, title: task.title, color: task.color, list: task.list }]);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask }}>
      {children}
    </TaskContext.Provider>
  );
};

//Eu honestamente n entendi mt bem como o context funciona ent eu meio q só peguei um e alterei pro nosso caso