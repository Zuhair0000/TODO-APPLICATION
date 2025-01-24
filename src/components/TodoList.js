import React from "react";
import TodoCard from "./TodoCard";

export default function TodoList({ todos, handleDelete, handleEdit }) {
  return (
    <ul className="main">
      {todos.map((todo, i) => (
        <TodoCard
          key={i}
          todo={todo}
          handleDelete={handleDelete}
          index={i}
          handleEdit={handleEdit}
        >
          <p>{todo}</p>
        </TodoCard>
      ))}
    </ul>
  );
}
