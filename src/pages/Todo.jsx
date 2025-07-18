import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router";

const Todo = () => {
  // state tracks todo lists
  const [todoLists, setTodoLists] = useState(JSON.parse(localStorage.getItem("todos")) || []);

  // update local storage when todoLists are changed
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoLists));
  }, [todoLists]);

  // generate list for each Todo ID in local storage
  const Todos = () => {
    if (todoLists.length > 0) {
      /* If todo lists exist in local storage
      map each todo list to a link/button */
      const todos = todoLists.map((todoList) => {
        <NavLink to={todoList.id}>{todoList.name}</NavLink>;
      });
      console.log(todos);
      return <nav>{todos}</nav>;
    } else {
      /* If no todo lists exist in local storage
      add option to create new todo list */
      return (
        <button
          type="button"
          onClick={() => {
            const newTodo = {
              id: Date.now(),
            };
            newTodo.name = window.prompt("What do you want to call your ToDo list: ", "newTodo");
            
            setTodoLists((prevTodos) => [...prevTodos, newTodo]);
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
};

export default Todo;
