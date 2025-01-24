export default function TodoInput({
  handleAddTodo,
  inputValue,
  setInputValue,
}) {
  return (
    <header>
      <input
        value={inputValue}
        type="text"
        placeholder="Enter your task"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          handleAddTodo(inputValue);
          setInputValue("");
        }}
      >
        Add
      </button>
    </header>
  );
}
