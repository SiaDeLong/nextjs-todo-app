import React, { useState } from "react";
import TodoHeader from "./TodoHeader";
import { Todo } from "~/Interface/Todo";
import { useModal } from "~/context/ModalContext";
import TodoItem from "./TodoItem";

type Props = {
  title: string;
  todos: Todo[] | [];
};

const TodoSection: React.FC<Props> = ({ title, todos }) => {
    const { openTodoModal } = useModal();
    const [isListInView1, setIsListInView1] = useState<boolean>(false);

    const tasksTitle = `${title} (${todos.length} ${
        todos.length === 1 ? "todo" : "todos"
    })`;

    return (
        <main className=" pt-5 pb-8 sm:pb-16 px-3 md:px-8 md:w-full min-h-screen ml-auto xl:w-4/5">
            <TodoHeader />
            <section>
            <h1 className="font-medium my-5 text-center sm:text-left sm:my-8 md:text-2xl text-lg dark:text-slate-200">
                {tasksTitle}
            </h1>
            <ul
                className={`tasksList mt-4 grid gap-2 sm:gap-4 xl:gap-6 ${
                isListInView1
                    ? "grid-cols-1"
                    : "2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 items-end"
                }`}
            >
                {todos.map((todo) => (
                    todo.visibility?
                        <TodoItem key={todo.id} isListInView1={isListInView1} todo={todo} /> :
                        null
                    ))
                }
                <li>
                <button
                    onClick={openTodoModal}
                    className={`border-2 border-slate-300
                    text-slate-400 w-full rounded-lg
                    border-dashed transition hover:bg-slate-300
                    hover:text-slate-500
                    dark:border-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-300 ${
                        isListInView1 ? "h-20 sm:h-32" : "h-52 sm:h-64"
                    }`}
                >
                    Add new todo
                </button>
                </li>
            </ul>
            </section>
        </main>
    );
};

export default React.memo(TodoSection);

