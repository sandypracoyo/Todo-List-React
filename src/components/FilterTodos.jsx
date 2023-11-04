export const FilterTodos = ({ deleteAllTodos }) => {
  return (
    <nav className="mb-2 p-1 flex list-none">
      <li>
        <a href="" className="block pr-5 underline text-blue-700">
          All
        </a>
      </li>
      <li>
        <a href="" className="block pr-5 ">
          Done
        </a>
      </li>
      <li>
        <a href="" className="block ">
          Pending
        </a>
      </li>
      <li className="flex-grow"></li>
      <button
        onClick={() => deleteAllTodos()}
        className="bg-sky-500 rounded-lg px-5 py-2 -mt-1 text-slate-100 shadow hover:bg-sky-600 text-sm"
      >
        Clear All
      </button>
      <hr />
    </nav>
  );
};
