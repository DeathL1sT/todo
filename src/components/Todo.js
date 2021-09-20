import React from "react";
import "./Todo.css";
export default function Todo({ todo, toggleTodo }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={(e) => toggleTodo(todo)}
      />
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.name}
      </span>
    </li>
  );
}
