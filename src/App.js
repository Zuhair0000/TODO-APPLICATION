import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { useState, useEffect } from "react";

function App() {
  // let todos = [
  //   "Go to gym",
  //   "Eat more fruits and vegetables",
  //   "Pick up the kids from school",
  // ];

  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function persistTodos(newList) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }

  function handleAddTodo(newTodo) {
    persistTodos([...todos, newTodo]);
    setTodos([...todos, newTodo]);
  }

  function handleEdit(i) {
    setInputValue(todos[i]);
    handleDelete(i);
  }

  function handleDelete(i) {
    const newTodoList = todos.filter((todo, todoIndex) => todoIndex !== i);
    persistTodos(newTodoList);
    setTodos(newTodoList);
  }

  useEffect(() => {
    if (!localStorage) return;

    let localTodos = localStorage.getItem("todos");
    if (!localTodos) return;

    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, []);

  return (
    <>
      <>
        <TodoInput
          handleAddTodo={handleAddTodo}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
        <TodoList
          todos={todos}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </>
    </>
  );
}

export default App;
