import { Bars3BottomLeftIcon } from "@heroicons/react/16/solid";
import React from "react";
import { useModal } from "~/context/ModalContext";
import { useProgressMenu } from "~/context/ProgressMenuContext";
import SearchField from "./SearchField";

const TodoHeader: React.FC = () => {
    const { setTitle, setTodo, openTodoModal } = useModal();
    const { openProgressMenu } = useProgressMenu();

    const date: Date = new Date();
    const year: number = date.getFullYear();
    const month: number = date.getMonth();
    const day: number = date.getDate();

    const monthName: string[] = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const todayDate = `${year}, ${monthName[month] ? monthName[month].slice(0, 3) : 'Unknown'} ${day
        .toString()
        .padStart(2, "0")}`;

    const dateTimeFormat = `${year}-${month.toString().padStart(2, "0")}-${day
        .toString()
        .padStart(2, "0")}}`;

    const addNewTodo = () => {
        setTitle("Add a todo");
        setTodo({
            title: '',
            description: '',
            date: '',
            completed: false,
            important: false,
            id: '',
            visibility: true
        });
        openTodoModal()
    }

    return (
        <header className="items-center grid grid-cols-[1fr_auto_1fr] gap-4 md:gap-0 md:flex">
            <button onClick={openProgressMenu} className="x-0 y-0 block xl:hidden">
                <Bars3BottomLeftIcon className="w-6 h-6 mr-2" />
            </button>
            <SearchField />
            <div className="flex-1 text-center sm:mr-0 md:mr-20 lg:mr-32 xl:mr-40 2xl:mr-48">
                <span className="text-slate-600 dark:text-slate-200 uppercase font-bold text-sm block xl:hidden">
                    To-do list
                </span>
                <time dateTime={dateTimeFormat}>{todayDate}</time>
            </div>
            <div className="">
                <button className="btn sm:static fixed bottom-3 right-3 z-10 sm:z-0 min-w-max shadow-lg shadow-slate-400  dark:shadow-slate-900 sm:shadow-transparent"
                    onClick={addNewTodo}>
                    Add new todo
                </button>
            </div>
        </header>
    );
};

export default TodoHeader;
