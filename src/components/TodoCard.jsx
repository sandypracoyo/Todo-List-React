import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FormTodo } from "./FormTodo";
import { ListTodo } from "./ListTodo";
import { EditFormTodo } from "./EditFormTodo";
import { FilterTodos } from "./FilterTodos";

export const TodoCard = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        task: todo,
        completed: false,
        isEditing: false,
        createdAt: new Date(),
        updatedAt: null,
      },
    ]);
  };

  const markCompleteTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, task, isEditing: !todo.isEditing, updatedAt: new Date() }
          : todo
      )
    );
  };

  const deleteAllTodo = () => {
    setTodos([]);
  };

  const showByFilter = (filter, todos) => {
    let dataTodos;
    if (filter === "All") {
      dataTodos = todos;
    } else if (filter === "Done") {
      dataTodos = todos.filter((todo) => todo.completed === true);
    } else if (filter === "Pending") {
      dataTodos = todos.filter((todo) => todo.completed === false);
    }

    return (
      <div>
        {dataTodos.map((todo) =>
          todo.isEditing ? (
            <EditFormTodo key={todo.id} editTodo={editTask} task={todo} />
          ) : (
            <ListTodo
              key={todo.id}
              task={todo}
              markCompleteTodo={markCompleteTodo}
              editTodo={editTodo}
              deleteTodo={deleteTodo}
            />
          )
        )}
      </div>
    );
  };

  return (
    <div className="max-w-lg mt-5 m-auto px-3 md:border md:rounded-xl md:shadow-md md-border-slate-200">
      <h3 className="text-slate-700 mb-3 text-center text-xl font-semibold">
        Todo List
      </h3>
      <FormTodo addTodo={addTodo} />
      {todos.length >= 1 ? (
        <FilterTodos deleteAllTodos={deleteAllTodo} filter={setFilter} />
      ) : null}
      {showByFilter(filter, todos)}
    </div>
  );
};
