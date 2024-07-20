import React from "react";
import { Todo } from "~/Interface/Todo";
import BtnToggleCompleted from "./TodoAction/BtnToggleCompleted";
import { CalendarDaysIcon } from "@heroicons/react/16/solid";
import useDate from "~/hook/useDate";
import BtnDeleteTask from "./TodoAction/BtnDeleteTodo";
import BtnMarkAsImportant from "./TodoAction/BtnMarkAsImportant";
import BtnEditTask from "./TodoAction/BtnEditTask";

const TaskItem: React.FC<{ isListInView1: boolean; todo: Todo }> = ({
  isListInView1,
  todo,
}) => {

  const dateFormated = useDate(todo.date);

  return (
    <>
      <li key={todo.id}>
        {/* <Link
          to={`/dir/${todo.dir}`}
          title={todo.dir}
          className="ml-auto mr-4 w-min whitespace-nowrap overflow-hidden max-w-[10rem] text-center text-ellipsis bg-rose-200 text-rose-600 px-4 py-1 rounded-t-md transition dark:bg-slate-700 dark:text-slate-200 block hover:bg-rose-300 dark:hover:bg-rose-500"
        >
          {todo.dir}
        </Link> */}
        <article
          className={`bg-slate-100 rounded-lg p-3 sm:p-4 flex text-left transition hover:shadow-lg hover:shadow-slate-300 dark:bg-slate-800 dark:hover:shadow-transparent ${
            isListInView1 ? "flex-row sm:h-32" : "flex-col h-52 sm:h-64"
          }`}
        >
            <div className={`flex flex-col flex-1 ${isListInView1 ? "mr-6" : ""}`}>
            <div
                className={`flex items-center justify-between ${
                isListInView1 ? "mb-1" : "mb-2"
                }`}
            >
                <span className="block font-medium dark:text-slate-200">
                {todo.title}
                </span>
            </div>
            <p
                title={todo.description}
                className={`description mb-2 text-slate-500 dark:text-slate-500 ${
                isListInView1 ? "line-clamp-2 sm:line-clamp-1" : "line-clamp-3"
                }`}
            >
                {todo.description}
            </p>
            
            <time className="mt-auto flex w-full">
                <CalendarDaysIcon className="mr-2 w-4 sm:w-5" /> {dateFormated}
            </time>
            </div>
            <div
                className={`flex border-dashed border-slate-200 dark:border-slate-700/[.3] ${
                isListInView1 ? "items-center" : "border-t-2 w-full pt-4 mt-4"
                }`}
            >
                <BtnToggleCompleted
                todoCompleted={todo.completed}
                todoId={todo.id}
                isListInView1={isListInView1}
                />
                <BtnMarkAsImportant todoId={todo.id} todoImportant={todo.important} />
                <BtnDeleteTask todoId={todo.id} />
                <BtnEditTask todo={todo} />
            </div>
        </article>
      </li>
    </>
  );
};

export default React.memo(TaskItem);
