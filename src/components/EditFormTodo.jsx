import { useState } from "react";

export const EditFormTodo = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      editTodo(value, task.id);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-row md:justify-center items-center gap-2 mb-4"
    >
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        id="todo"
        placeholder="Add Your Todo.."
        className="px-3 py-2 w-full rounded-lg border shadow placeholder:text-slate-300 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
      />
      <button
        type="submit"
        className="bg-blue-600 rounded-lg text-lg text-white px-3 py-2 hover:bg-blue-500 transition-all"
      >
        Edit
      </button>
    </form>
  );
};
