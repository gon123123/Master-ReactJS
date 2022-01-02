import React, { Component } from "react";
import "./App.css";
import TodoItem from "./components/Todoitem.js";
function App() {
  const arrTodo = [
    { title: "mua bim bim", isComplete: true },
    { title: "di choi cong vien khung long" , isComplete: false},
    { title: "choi cong vien lan 2" , isComplete: true},
  ];
  return (
    <div className="App">
      {arrTodo.length > 0 &&
        arrTodo.map((item, index) => (
          <TodoItem key={index.toString()} item={item} />
        ))}
        {arrTodo.length === 0 && 'Nothing herre'}
    </div>
  );
}

export default App;
