import { useState } from "react";
import Task from "./Task";

import "../index.css";
import "../styles/DisplayTask.css";

import { BiSolidChevronDown } from "react-icons/bi";

const DisplayTask=({ tasks, onToggleTask, onDeleteTask, onEditTask })=> {
  const [taskVisibility, setTaskVisibility] = useState({
    showIncompleteTask: false,
    showCompleteTask: false,
  });

  /* 
    Function used as an onClick handler for toggling the visibility of tasks
  */
  const createToggleFunction = (taskStatus) => {
    return () => {
      setTaskVisibility((prevVisibility) => ({
        ...prevVisibility,
        // Toggled a specified task while the other tasks remain unchanged
        [taskStatus]: !prevVisibility[taskStatus],
      }));
    };
  };

  const toggleTaskVisibility1 = createToggleFunction("showIncompleteTask");
  const toggleTaskVisibility2 = createToggleFunction("showCompleteTask");

  // Destructuring taskVisibility to use these values directly in component
  const { showIncompleteTask, showCompleteTask } = taskVisibility;

  // Use filter to separate tasks into incompleteTasks and completeTasks
  const incompleteTasks = tasks.filter((task) => !task.completed);
  const completeTasks = tasks.filter((task) => task.completed);

  return (
    <main className="display-container">
      {/* 
        Show all progressing tasks
      */}
      <section className="status-container">
        <div className="status-bar">
          {/* 
            Toggle the icon to show or hide the progressing tasks 
          */}
          <div onClick={toggleTaskVisibility1} className="status-desc">
            <BiSolidChevronDown
              className={showIncompleteTask ? "close" : "open"}
            />
            <span>Progressing</span>
          </div>
          <span>{incompleteTasks.length}</span>
        </div>
        {/* 
          Show or hide tasks associate to the action of onClick above
        */}
        {!showIncompleteTask && (
          <ul className="tasks-container">
            {incompleteTasks.map((task) => (
              <Task
                key={task.id}
                task={task}
                onToggleTask={onToggleTask}
                onDeleteTask={onDeleteTask}
                onEditTask={onEditTask}
              />
            ))}
          </ul>
        )}
      </section>

      <section className="status-container">
        {/* 
          Show all completed tasks
        */}
        <div className="status-bar">
          {/* 
            Toggle the icon to show or hide the completed tasks 
          */}
          <div onClick={toggleTaskVisibility2} className="status-desc">
            <BiSolidChevronDown
              className={showCompleteTask ? "close" : "open"}
            />
            <span>Completed</span>
          </div>
          <span>{completeTasks.length}</span>
        </div>
        {/* 
          Show or hide tasks associate to the action of onClick above
        */}
        {!showCompleteTask && (
          <ul className="tasks-container">
            {completeTasks.map((task) => (
              <Task
                key={task.id}
                task={task}
                onToggleTask={onToggleTask}
                onDeleteTask={onDeleteTask}
                onEditTask={onEditTask}
              />
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}

export default DisplayTask;
