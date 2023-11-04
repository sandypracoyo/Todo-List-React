import React from "react";

export const ListTodo = ({ task, markCompleteTodo, deleteTodo, editTodo }) => {
  return (
    <div
      className={`${
        task.completed
          ? "max-w-lg p-2 mt-2 mb-1 rounded shadow border flex items-center bg-slate-200"
          : "max-w-lg p-2 mt-2 mb-1 rounded shadow border flex items-center"
      }`}
    >
      <p
        className={`${task.completed ? "line-through" : ""}`}
        onClick={() => markCompleteTodo(task.id)}
      >
        {task.task}
      </p>
      <div className="grow"></div>
      <button
        disabled={task.completed ? "disabled" : ""}
        className="inline-flex rounded-lg shadow bg-green-500 px-2 py-1 mr-2 text-sm text-center items-center hover:bg-green-600 text-slate-100 disabled:bg-green-200"
        onClick={() => editTodo(task.id)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-7"
        >
          <path
            fillRule="evenodd"
            d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <button
        className="inline-flex rounded-lg shadow bg-red-500 px-2 py-1 text-sm text-center items-center hover:bg-red-600 text-slate-100"
        onClick={() => deleteTodo(task.id)}
      >
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-7"
        >
          <path
            fillRule="evenodd"
            d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};
