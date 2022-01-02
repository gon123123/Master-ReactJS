import React, { Component } from "react";
import "./Todoitem.css";
function TodoItem(props) {
  const { item } = props;
  let className = "TodoItem";
  if (item.isComplete) {
    className += " Todoitem-complete";
  }
  return (
    <div className={className}>
      <p>{props.item.title}</p>
    </div>
  );
}
export default TodoItem;
