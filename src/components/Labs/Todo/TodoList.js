import React from "react";
import TodoItem from "./TodoItem";
import todos from "./todos.json";

const TodoList = () => {
  return(
    <ul>
      {
        todos.map(todo => { 
          return(<TodoItem todo={todo} key={todo.title}/>);
        })
      }
    </ul>
  );
}

export default TodoList;

