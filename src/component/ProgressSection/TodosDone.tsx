import React from "react";
import useTodayTodos from "~/hook/useTodayTodos";
import useCompletedTodos from "~/hook/useCompletedTodos";
import { useTodos } from "~/context/TodoContext";
import { CheckIcon } from "@heroicons/react/16/solid";

const TodosDone: React.FC = () => {
  const todaysTodos = useTodayTodos();
  const { todos } = useTodos();
  const { todos: todayTodosDone } = useCompletedTodos({
    todos: todaysTodos,
    done: true,
  });
  const { todos: allTodosDone } = useCompletedTodos({
    todos: todos,
    done: true,
  });

  const percentageTodayTodos =
    (todayTodosDone.length * 100) / todaysTodos.length;

  const percentageAllTodos = (allTodosDone.length * 100) / todos.length;

  const todaysTodosToShow = todaysTodos.slice(0, 3);
  
  return (
    <>
      {todaysTodos.length !== 0 && (
        <div className="mt-8">
          <span className="flex justify-between mb-2">
            <span>Todos today</span> {todayTodosDone.length}/
            {todaysTodos.length}
          </span>
          <div className="barProgress">
            <div style={{ width: percentageTodayTodos + "%" }}></div>
          </div>
        </div>
      )}
      {todos.length !== 0 && (
        <div className="mt-6">
          <span className="flex justify-between mb-2">
            <span>All todos </span> {allTodosDone.length}/{todos.length}
          </span>
          <div className="barProgress">
            <div style={{ width: percentageAllTodos + "%" }}></div>
          </div>
        </div>
      )}

      {todaysTodos.length === 0 && (
        <span className="mt-6 block pt-4 border-t-slate-200 dark:border-t-slate-700/[.3] border-t-2">
          No todos today
        </span>
      )}

      {todaysTodos.length > 0 && (
        <div className="mt-8">
          <span className="mb-2 block">Today&apos;s todos</span>
          <ul>
            {todaysTodosToShow.map((todo) => (
              <li key={todo.id} className="py-2 pl-6 dark:text-slate-200 list-item">
                <span className="flex">
                  {todo.completed ? <CheckIcon className="w-6 h-6" /> : null} {todo.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default React.memo(TodosDone);
