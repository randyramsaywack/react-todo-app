import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import Todo from "./Todo";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const timestamp = new Date().toLocaleString("en-US", {
    weekday: "short",
    month: "numeric",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const addTodo = (e) => {
    setTodos([...todos, input]);
  };
  return (
    // BEM naming convention
    <div className="app">
      <header className="app__header">
        <h1>Randy's Todo App</h1>
      </header>

      {/* Create form here */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo();
          setInput("");
        }}
        className="app__header-form"
      >
        <TextField
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          id="outlined-basic"
          label="Enter todo here"
          variant="outlined"
        />
        <Button onClick={addTodo} variant="outlined">
          Submit
        </Button>
      </form>

      {/* Render Todos here */}
      {todos.map((todo) => (
        <Todo todo={todo} timestamp={timestamp} />
      ))}
    </div>
  );
}

export default App;
