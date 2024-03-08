import { useState } from 'react'
import './App.css'

function App() {
  const [newTaskName, setnewTaskName] = useState()

  return (
    <>
      <form onSubmit={() => alert('submiting')}>
        <input type="text" 
        placeholder='Ingresa nueva tarea' 
        onChange={(e) => setnewTaskName(e.target.value)}
        />

        <button onClick={()=>alert(newTaskName)}>Save</button>
      </form>
    </>
  )
}

export default App
