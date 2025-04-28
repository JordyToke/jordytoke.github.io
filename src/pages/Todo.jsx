import React, { useState, useEffect } from "react";
import { NavLink } from "react-router";

export default function Todo() {
  // state tracks todo lists
  const [todoLists, setTodoLists] = useState({});

  useEffect((() => {
    const todos = localStorage.getItem("todos");
    if (todos) {
      setTodoLists()
    }
    // update todoLists from local storage
    setTodoLists(localStorage.getItem("todos"));
  }), [todoLists]);

  // generate list for each Todo ID in local storage
  const Todos = () => {
    if (todoLists) {
      // if todo lists exist in local storage
      // parse as JSON
      let todos = JSON.parse(todoLists);
      // map each todo list to a link/button
      todos = todos.map((todoList, key) => {
        <NavLink to={key}>{todoList.name}</NavLink>;
      });
      return <nav>{todos}</nav>;
    } else {
      // no todo lists exist in local storage
      // add option to create new todo list
      return (
        <button type="button" onClick={() => {
          const newTodo = {
            id: Date.now()
          };
          newTodo.name = window.prompt("What do you want to call your ToDo list: ", "newTodo") ?? "newTodo";
          localStorage.setItem("todos", JSON.stringify(newTodo));
        }}>
          Create new Todo List
        </button>
      );
    }
  };

  return (
    <>
      <h3>ToDo</h3>
      <Todos />
    </>
  );
}
