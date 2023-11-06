import { useState } from "react";

export const FilterTodos = ({ deleteAllTodos, filter }) => {
  const [navigations, setNavigations] = useState([
    {
      titleNav: "All",
      isActive: true,
    },
    {
      titleNav: "Done",
      isActive: false,
    },
    {
      titleNav: "Pending",
      isActive: false,
    },
  ]);

  const changeNavigation = (e, titleNav) => {
    e.preventDefault();
    setNavigations(
      navigations.map((nav) =>
        nav.titleNav === titleNav
          ? { ...nav, isActive: true }
          : { ...nav, isActive: false }
      )
    );
    filter(titleNav);
  };

  return (
    <div className="mb-2 p-1 flex list-none">
      {navigations.map((nav) => {
        return (
          <div key={nav.titleNav}>
            <li>
              <a
                href=""
                className={
                  nav.isActive
                    ? "block mr-5 border-b-2 border-blue-700 text-blue-700"
                    : "block mr-5"
                }
                onClick={(e) => changeNavigation(e, nav.titleNav)}
              >
                {nav.titleNav}
              </a>
            </li>
          </div>
        );
      })}
      <li className="flex-grow"></li>
      <button
        onClick={() => deleteAllTodos()}
        className="bg-sky-500 rounded-lg px-5 py-2 -mt-1 text-slate-100 shadow hover:bg-sky-600 text-sm"
      >
        Clear All
      </button>
      <hr />
    </div>
  );
};
