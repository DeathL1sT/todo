import React, { useState } from "react";
import ListTodo from "./ListTodo";
import AddTodo from "./AddTodo";
import "./App.css";

let lastId = 1;

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) =>
    setTodos([...todos, { id: lastId++, name: todo, completed: false }]);

  const toggleTodo = (todo) =>
    setTodos(
      todos.map((t) =>
        t.id === todo.id ? { ...t, completed: !t.completed } : t
      )
    );

  return (
    <div className="app">
      <div className="header">TO DO Task</div>
      <ListTodo todos={todos} toggleTodo={toggleTodo} />
      <hr />
      <AddTodo addTodo={addTodo} />
    </div>
  );
}

export default App;
