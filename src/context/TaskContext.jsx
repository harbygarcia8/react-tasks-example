import { useState ,createContext, useEffect } from "react";
import { tasks as data } from "../models/tasks";

export const TaskContext = createContext();

export const TaskContextProvider = (props) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);


  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter(task => task.id !== taskId))
    console.log(taskId, tasks)
  }

  const propsInfo = props;
  return (
    <TaskContext.Provider 
      value={{
        tasks,
        createTask,
        deleteTask}}
      >
        {propsInfo.children}
      </TaskContext.Provider>
  );
};
