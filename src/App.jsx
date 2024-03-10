import { useState, useEffect } from 'react'
import './App.css'
import { TaskCreator } from './components/TaskCreator'
import { TaskTable } from './components/TaskTable'
import { VisibilityControl } from './components/visibilityControl'

function App() {
  
  const [taskItems, setTasksItems] = useState([])
  const [showCompleted, setShowCompleted] = useState(false)

  useEffect(() => {
     let data =  localStorage.getItem('tasks')
     if(data){
      setTasksItems(JSON.parse(data))
     }
  }, []);

  const cleanTasks = () => {
     setTasksItems(taskItems.filter(task => !task.done))
     setShowCompleted(false)
  }

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

  const toggleTask = task => {
      setTasksItems(
        taskItems.map(t => (t.name == task.name) ? {...t, done: !t.done} : t)
      )
  }



  return (
    <>
      <TaskCreator createTask={createTask}/>
      
      <TaskTable tasks={taskItems} toggleTask={toggleTask}/>
      <br />

      <VisibilityControl 
      isChecked = {showCompleted}
        setShowCompleted={(checked) => setShowCompleted(checked)} 
        cleanTasks={cleanTasks} 
      />
      {
        showCompleted === true && (
          <TaskTable tasks={taskItems} toggleTask={toggleTask} showCompleted={showCompleted}/>
        )
      }
      
    </>
  )
}

export default App