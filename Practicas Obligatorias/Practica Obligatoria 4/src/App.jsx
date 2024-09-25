import './App.css'
import React, { useState } from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Comprar alimentos', completed: false },
    { id: 2, text: 'Hacer ejercicio', completed: false }
  ]);

  const addTask = (text) => {
    const newTask = {
      id: tasks.length + 1,
      text,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  const toggleCompleteTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <AddTask addTask={addTask} />
      <TaskList
        tasks={tasks}
        toggleCompleteTask={toggleCompleteTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;