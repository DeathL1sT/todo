import React, { useState } from "react";
import "./AddTodo.css";
export default function AddTodo({ addTodo }) {
  const [todo, setTodo] = useState("");

  const submit = (e) => {
    e.preventDefault();

    if (todo === "") {
      return;
    }

    addTodo(todo);
    setTodo("");
  };

  return (
    <form onSubmit={submit}>
      <input
        className="input-task"
        type="text"
        placeholder="Add Todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}
