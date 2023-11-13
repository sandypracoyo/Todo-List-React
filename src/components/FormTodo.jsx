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
    <form onSubmit={handleSubmit} className="flex md:flex-row flex-col md:justify-center items-center gap-2 mb-4">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        id="todo"
        placeholder="Add Your Todo.."
        className="px-3 py-2 w-3/4 rounded-lg border shadow placeholder:text-slate-300 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
      />
      <button
        type="submit"
        className="bg-blue-600 rounded-lg text-lg text-white px-3 py-2 hover:bg-blue-500 transition-all"
      >
        Add Todo
      </button>
    </form>
    // <form onSubmit={handleSubmit} className="flex md:flex-col justify-center flex-row mb-5 bg-slate-600">
    //   <label htmlFor="todo">
    //     <input
    //       type="text"
    //       className="px-3 py-2 mx-auto rounded-lg w-3/4 border shadow placeholder:text-slate-300 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
    //       placeholder="Add Your Todo.."
    //       value={value}
    //       onChange={(e) => setValue(e.target.value)}
    //       id="todo"
    //     />
    //     <button
    //       type="submit"
    //       className="bg-sky-500"
    //     >
    //       Add Todo
    //     </button>
    //   </label>
    // </form>
  );
};
