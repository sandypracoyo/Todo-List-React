import { useState } from "react";

export const FormTodo = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      addTodo(value);
      setValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-5">
      <label htmlFor="todo">
        <input
          type="text"
          className="px-3 py-2 rounded-lg w-3/4 border shadow placeholder:text-slate-300 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          placeholder="Add Your Todo.."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          id="todo"
        />
        <button
          type="submit"
          className="bg-sky-500 rounded-lg px-5 py-2 ml-2 text-slate-100 shadow hover:bg-sky-600 "
        >
          Add Todo
        </button>
      </label>
    </form>
  );
};
