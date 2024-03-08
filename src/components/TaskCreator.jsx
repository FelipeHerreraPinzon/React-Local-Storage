import { useState } from 'react'

export const TaskCreator = ({createTask}) => {
 
  const [newTaskName, setnewTaskName] = useState('')

  const handleSubmit = (e) => {
     e.preventDefault();
     createTask(newTaskName)
     localStorage.setItem("tasks", newTaskName)
     setnewTaskName("")
  };

    return(
      <form onSubmit={handleSubmit}>
        <input type="text" 
        placeholder='Ingresa nueva tarea' 
        value={newTaskName}
        onChange={(e) => setnewTaskName(e.target.value)}
    />

        <button>Save</button>
      </form>
    )
}