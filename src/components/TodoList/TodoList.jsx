import React from "react";
import Todo from "../Todo/Todo";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todos.map((todo, index) => (
        <Todo todo={todo} key={index}></Todo>
      ))}
    </div>
  );
};

export default TodoList;
