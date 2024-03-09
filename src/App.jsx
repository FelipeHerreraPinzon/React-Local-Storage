import { useState, useEffect } from 'react'
import './App.css'
import { TaskCreator } from './components/TaskCreator'

function App() {
  
  const [taskItems, setTasksItems] = useState([])

  useEffect(() => {
     let data =  localStorage.getItem('tasks')
     if(data){
      setTasksItems(JSON.parse(data))
     }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskItems))
  }, [ taskItems ])
  
  //alert(taskName)

  function createTask(taskName){
    //console.log(taskName)
    if (!taskItems.find(task => task.name === taskName)){
        setTasksItems([...taskItems, {name:taskName, done: false}])
    }

    
  }

  return (
    <>
      <TaskCreator createTask={createTask} title={30}/>

      <table>
        <thead>
           <tr>
            <th>Tasks</th>
           </tr>
        </thead>
        <tbody>
        {
            taskItems.map(task => (
           <tr key={task.name}>
              <td>{task.name}</td>
           </tr>
          ))
    }
        </tbody>
      </table>

    



    </>
  )
}

export default App
