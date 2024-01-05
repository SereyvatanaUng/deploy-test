import { useState } from "react";

import "../index.css";
import "../styles/InputForm.css";

import { trimString } from "../utility/trimString";

function InputForm({ onAddTasks }) {
  const [title, setTitle] = useState("");

  // Take the value from input and assign to setTitle
  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  /*
    After pressing enter key or click the add button, it will generate a new task with id, status(completed) and title.
    Then set the input form to empty again.
   */
  const handleSubmit=(e)=> {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      completed: false,
      title: trimString(title),
    };
    onAddTasks(newTask);
    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        required
        type="text"
        placeholder="New Task..."
        value={title}
        onChange={handleChange}
        className="form--input"
      />
      <button className="form--button">
        <span>Add</span>
      </button>
    </form>
  );
}

export default InputForm;
