import React from "react";
import type { Todo } from '~/Interface/Todo';
import BtnToggleCompleted from "./TodoAction/BtnToggleCompleted";
import { CalendarDaysIcon } from "@heroicons/react/16/solid";
import useDate from "~/hook/useDate";
import BtnDeleteTodo from "./TodoAction/BtnDeleteTodo";
import BtnMarkAsImportant from "./TodoAction/BtnMarkAsImportant";
import BtnEditTodo from "./TodoAction/BtnEditTodo";
import { motion } from "framer-motion";
import { useModal } from "~/context/ModalContext";

const TodoItem: React.FC<{ isListInView1: boolean; todo: Todo }> = ({
  isListInView1,
  todo,
}) => {
  const dateFormated = useDate(todo.date);
  const date: Date = new Date();
  const year: number = date.getFullYear();
  const month: number = date.getMonth() + 1;
  const day: number = date.getDate();

  const todayDate = `${year}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}`;

  const { openTodoModal, setTitle, setTodo } = useModal();

  const openEditModal = () => {
    setTitle("Edit todo");
    setTodo(todo);
    openTodoModal();
  }

  return (
    <>
      <motion.li key={todo.id}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }} 
        transition={{ duration: 0.3 }}
        onClick={openEditModal}
        style={{ cursor: 'pointer' }}
      >
        <article
          className={`bg-slate-100 rounded-lg p-3 sm:p-4 flex text-left transition hover:shadow-lg hover:shadow-slate-300 dark:bg-slate-800 dark:hover:shadow-transparent ${isListInView1 ? "flex-row sm:h-32" : "flex-col h-52 sm:h-64"
            } ${todo.date === todayDate ? "bg-violet-600 text-slate-100 dark:bg-violet-800" : ""
            }`}
        >
          <div className={`flex flex-col flex-1 ${isListInView1 ? "mr-6" : ""}${todo.date === todayDate ? "border-violet-500 dark:border-violet-700" : ""}`}>
            <div
              className={`flex items-center justify-between ${isListInView1 ? "mb-1" : "mb-2"
                }`}
            >
              <span className="block font-medium dark:text-slate-200">
                {todo.title}
              </span>
            </div>
            <p
              title={todo.description}
              className={`description mb-2  ${isListInView1 ? "line-clamp-2 sm:line-clamp-1" : "line-clamp-3"
                } ${todo.date === todayDate ? "text-violet-300" : "text-slate-500 dark:text-slate-500"
                }`}
            >
              {todo.description}
            </p>

            <time className="mt-auto flex w-full">
              <CalendarDaysIcon className="mr-2 w-4 sm:w-5" /> {dateFormated}
            </time>
          </div>
          <div
            className={`flex border-dashed border-slate-200 dark:border-slate-700/[.3] ${isListInView1 ? "items-center" : "border-t-2 w-full pt-4 mt-4"
              } ${todo.date === todayDate ? "border-violet-500 dark:border-violet-700" : ""}`}
              onClick={(e) => e.stopPropagation()}
          >
            <BtnToggleCompleted
              todoCompleted={todo.completed}
              todoId={todo.id}
              isListInView1={isListInView1}
            />
            <BtnMarkAsImportant todoId={todo.id} todoImportant={todo.important} />
            <BtnDeleteTodo todoId={todo.id} />
            <BtnEditTodo todo={todo} />
          </div>
        </article>
      </motion.li>
    </>
  );
};

export default React.memo(TodoItem);
