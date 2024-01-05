import { useEffect, useState } from "react";

import InputForm from "./InputForm";
import TodoTopic from "./TodoTopic";
import DisplayTask from "./DisplayTask";

import "../index.css";
import "../styles/App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Retrieve tasks from local storage
    const storedTasks = JSON.parse(
      localStorage.getItem("tasks") || JSON.stringify([])
    );
    // Set the state with the retrieved tasks
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    // Save the current tasks to local storage
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Function to add a task
  const handleAddTask = (task) => {
    setTasks((tasks) => [task, ...tasks]);
  };

  // Function to toggle a task to completed or progressing status
  const handleToggleTask = (id) => {
    setTasks((tasks) => {
      return tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      );
    });
  };

  // Function to delete a specific task by id
  const handleDeleteTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  // Function to take a specific task by its id and change the title
  const handleEditTask = (id, editedTask) => {
    const updatedTask = tasks.map((task) =>
      task.id === id ? { ...task, ...editedTask } : task
    );
    setTasks(updatedTask);
  };

  return (
    <div className="app-container">
      <header className="header">
        <TodoTopic />
        <InputForm onAddTasks={handleAddTask} />
      </header>
      <DisplayTask
        tasks={tasks}
        onToggleTask={handleToggleTask}
        onDeleteTask={handleDeleteTask}
        onEditTask={handleEditTask}
      />
      <footer></footer>
    </div>
  );
}

export default App;
