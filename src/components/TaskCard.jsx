import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard(props) {
  const propTask = props;

  const {deleteTask} = useContext(TaskContext)

  return (
    <div className="bg-gray-800 text-white">
      <h1>{propTask.task.title}</h1>
      <h3>{propTask.task.description}</h3>
      <button onClick={() => deleteTask(propTask.task.id)}>Eliminar tarea</button>
    </div>
  );
}

export default TaskCard;
