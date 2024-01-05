import { useState, useEffect, useRef } from "react";

import "../index.css";
import "../styles/Task.css";

import { FiXCircle } from "react-icons/fi";
import { BsCheckSquareFill, BsXSquareFill } from "react-icons/bs";
import { BsCircle, BsCheckCircleFill } from "react-icons/bs";

import { trimString } from "../utility/trimString";

function Task({ task, onToggleTask, onDeleteTask, onEditTask }) {
  const [editing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editing]);

  const handleEditClick = () => {
    setEditing(true);
    setEditedTitle(task.title);
    setEditingTaskId(task.id);
  };

  const handleSaveClick = () => {
    setEditing(false);
    if (trimString(editedTitle) === task.title) return;
    /*
      The if statement below is to prevent the completed task go to progressing status if its title does not change anything.
    */
    if (trimString(editedTitle) === "") {
      setEditedTitle(task.title);
    } else if (editedTitle !== task.title) {
      onEditTask(task.id, {
        title: trimString(editedTitle),
        completed: false,
      });
    }
    setEditingTaskId(null); // Clear the task ID when exiting editing mode
  };

  // When the setEditing is false (press escape key), the title remains the same
  const handleCancelClick = () => {
    setEditing(false);
    setEditedTitle(task.title);
    setEditingTaskId(null);
  };

  return (
    <li
      className={
        task.completed && !editing
          ? " task task--complete title-complete "
          : "task"
      }
    >
      {/* 
        If variable editing is true, the task will turn into edit mode, otherwise, it remains the same.
      */}
      {editing && editingTaskId === task.id ? (
        <div className="task--edit">
          <input
            ref={inputRef}
            required
            type="text"
            value={editedTitle}
            placeholder="New title"
            onChange={(e) => setEditedTitle(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSaveClick();
              if (e.key === "Escape") handleCancelClick();
            }}
            className="task--input"
          />
          <div className="confirm-btn">
            <BsCheckSquareFill
              onClick={handleSaveClick}
              className="task__btn task__btn-edit"
            />
            <BsXSquareFill onClick={handleCancelClick} className="task__btn" />
          </div>
        </div>
      ) : (
        <>
          <div className="task__description">
            <div onClick={() => onToggleTask(task.id)}>
              {task.completed ? (
                <BsCheckCircleFill className="task__btn" />
              ) : (
                <BsCircle className="task__btn" />
              )}
            </div>
            <p onClick={handleEditClick} className="task__title">
              {task.title}
            </p>
          </div>
          <FiXCircle
            onClick={() => onDeleteTask(task.id)}
            className="task__btn"
          />
        </>
      )}
    </li>
  );
}

export default Task;
