import { addDoc, collection, getDocs, onSnapshot } from 'firebase/firestore';
import React, { createContext, useState,useEffect } from 'react';
import { firebase_db } from '../../FireBaseconfig';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  useEffect(()=>{
    busca()
  },[]);

  
 const busca = async()=>{
    const list = [];
    const taskref= collection(firebase_db,"task");
    const subscriber = onSnapshot(taskref,{
      next: (snapshot) =>{
        snapshot.docs.forEach((doc)=>{
         list.push({
          id: doc.id,
          ...doc.data()
         })
        });
        setTasks(list);
      }
    }) }
  

  const addTask = async (task) => {
   // setTasks([...tasks, { id: tasks.length + 1, title: task.title, color: task.color, list: task.list }]);
    const doc = await addDoc(collection(firebase_db,'task'),{title:task.title,color:task.color,list:task.list,done:false});
    console.log('Foi adicionado ',doc.firestore);
    busca();
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask,busca }}>
      {children}
    </TaskContext.Provider>
  );
};

//Eu honestamente n entendi mt bem como o context funciona ent eu meio q só peguei um e alterei pro nosso caso

/* 
const tasksnap = await getDocs(taskref);
    tasksnap.forEach((doc,data)=>{
       data = doc.data();
       setTasks([...tasks, { id: tasks.length + 1, title: data.title, color: data.color, list: data.list }]);
       console.log(tasks);
    })


*/