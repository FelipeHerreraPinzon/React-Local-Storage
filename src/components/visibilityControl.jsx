export const VisibilityControl = ({isChecked, setShowCompleted, cleanTasks}) => {

    const handleDelete = () => {
        if(window.confirm("Seguro de eliminar Tarea ?")){
            cleanTasks()
        }
    }
    return(
    
     <div>
        <input type="checkbox" 
        checked={isChecked}
        onChange={(e) => setShowCompleted(e.target.checked)}
        />{" "}
        <label>Show Task Done</label>
        <button onClick={handleDelete}>
            Clear
        </button>
      </div>
    )
}