import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";
import ColorPageComponent from './components/ColorPageComponent'
import "./styles.css";

export default function TodoApp() {
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      {/* Uncomment for Redux with Sagas, Connect API */}
      <ColorPageComponent />  

        {/* Uncomment for To Do List with Redux */}        
      {/* <AddTodo />
      <TodoList />
      <VisibilityFilters /> */}
      
    </div>
  );
}
