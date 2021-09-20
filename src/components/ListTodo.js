import React, { useState } from "react";
import Todo from "./Todo";
import "./ListTodo.css";
export default function ListTodo({ todos, toggleTodo }) {
  const [hideCompleted, setHideCompleted] = useState(false);

  const filteredTodos = hideCompleted
    ? todos.filter((todo) => !todo.completed)
    : todos;

  return (
    <React.Fragment>
      <div className="hide-completed">
        <input
          className="hide"
          type="checkbox"
          checked={hideCompleted}
          onChange={(e) => setHideCompleted(!hideCompleted)}
        />
        Hide Completed
      </div>
      <ul className="list-todo">
        {filteredTodos.map((todo) => (
          <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </React.Fragment>
  );
}
