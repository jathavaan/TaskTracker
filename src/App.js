import {useState} from 'react'

import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

  
  function App() {
    const [showAddTask, setShowAddTask] = useState(false)
    
    const [tasks, setTasks] = useState([
      {
          id: 1,
          text: "Doctors appoitment",
          day: "Feb 5th at 2:30 pm",
          reminder: true
      },
      {
          id: 2,
          text: "Meeting at school",
          day: "Feb 6th at 1:30 pm",
          reminder: true
      },
      {
          id: 3,
          text: "Food shopping",
          day: "Feb 5th at 2:30 pm",
          reminder: false
      }
  ])

  // Add Tasks
  const addTask = (task) => {
    const id = Math.floor(Math.random * 10000 + 1)
    const newTask = {
      id, 
      ...task
    }

    setTasks([...tasks, newTask])
  }

  // Delete tasks
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      {
        tasks.length > 0 ? 
        <Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask}/> :
        <p>No tasks to show</p>
      }
    </div>
  );
}

export default App;
