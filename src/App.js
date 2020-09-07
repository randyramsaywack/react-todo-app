import React, { useState, useEffect } from "react";
import { TextField, Button } from "@material-ui/core";
import Todo from "./Todo";
import { db } from "./firebase";
import firebase from "firebase";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(snapshot.docs.map((doc) => doc.data()));
        console.log(snapshot.docs.map((doc) => doc.data()));
      });
  }, [todos]);

  const timestamp = new Date().toLocaleString("en-US", {
    weekday: "short",
    month: "numeric",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const addTodo = (e) => {
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
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
          label="✅ Write todo here"
          variant="outlined"
        />
        <Button disabled={!input} onClick={addTodo} variant="outlined">
          Submit
        </Button>
      </form>

      {/* Render Todos here */}
      {todos.map((todo) => (
        <Todo
          key={todo.todo}
          todo={todo.todo}
          timestamp={new Date(todo.timestamp.seconds * 1000).toLocaleString(
            "en-US"
          )}
        />
      ))}
    </div>
  );
}

export default App;
