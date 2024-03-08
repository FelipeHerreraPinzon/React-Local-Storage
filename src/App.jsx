import { useState } from 'react'
import './App.css'
import { TaskCreator } from './components/TaskCreator'

function App() {
  
  const [taskItems, setTasksItems] = useState([
    {"name":'mi primer tarea', done:false},
    {"name":'mi segunda tarea', done:true},
    {"name":'mi tercera tarea', done:true},
    {"name":'mi cuarta tarea', done:false},
  ])

  function createTask(taskName){
    //console.log(taskName)
    if (!taskItems.find(task => task.name === taskName)){
        setTasksItems([...taskItems, {name:taskName, done: false}])
    }
    
    //alert(taskName)
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
