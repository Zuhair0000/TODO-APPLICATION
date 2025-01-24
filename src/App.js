import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {
  // let todos = [
  //   "Go to gym",
  //   "Eat more fruits and vegetables",
  //   "Pick up the kids from school",
  // ];

  const [todos, setTodos] = useState([
    "Go to gym",
    "Eat more fruits and vegetables",
    "Pick up the kids from school",
  ]);
  const [inputValue, setInputValue] = useState("");

  function handleAddTodo(newTodo) {
    setTodos([...todos, newTodo]);
  }

  function handleEdit(i) {
    setInputValue(todos[i]);
    handleDelete(i);
  }

  function handleDelete(i) {
    const newTodoList = todos.filter((todo, todoIndex) => todoIndex !== i);
    setTodos(newTodoList);
  }

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
