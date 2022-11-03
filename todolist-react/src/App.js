import { useState, useEffect } from "react";

function App() {
  const [inputValue, setInputValue] = useState("")
  const [tasks, setTask] = useState([]);

  /* 
   useEffect is called when a component is created in web or
   when a specified variable value changes
  */
  useEffect(() => {
    const tasksStorage = localStorage.getItem("@tasks")
    if (tasksStorage) {
      setTask(JSON.parse(tasksStorage))
    }

    // return is called when components are dismantled
    return () => {
      alert("Disassembling elements")
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("@tasks", JSON.stringify(tasks))
  }, [tasks])

  function handleRegister(e) {
    if(inputValue == '') return;
    e.preventDefault();

    setTask([...tasks, inputValue])
    setInputValue('');
  }

  function clearTasks() {
    setTask([])
  }

  return (
    <div>
      <form onSubmit={handleRegister}>
        <label>Add a Taks</label><br />
        <input
          placeholder="task name"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        /><br />
        <button type="submit">Add</button>
      </form>
      <br />
      <br />

      <ul>
        {tasks.map(task => (<li key={task}>{task}</li>))}
      </ul>
      <button onClick={clearTasks}>Clear Tasks</button>
    </div>
  )
}

export default App;