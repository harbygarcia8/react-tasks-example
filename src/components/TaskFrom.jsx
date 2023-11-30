import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";


function TaskFrom() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const {createTask} = useContext(TaskContext)
    const handleSubmit = (e) => {
      e.preventDefault();
      createTask({
          title,
          description,
      })
      setTitle('')
      setDescription('')
    }

  return (


    <div>
      <form onSubmit={handleSubmit}> 
        <input 
            value={title}
            placeholder="Escribe tu tarea"  
            type="text"
            onChange={(event) => {setTitle(event.target.value)}}
        />
        <textarea
            value={description}
            placeholder="Escribe una descripción de la tarea"
            onChange={(event) => {setDescription(event.target.value)}}    
        ></textarea>
        <button>Guardar</button>
      </form>
    </div>
  );
}

export default TaskFrom;
