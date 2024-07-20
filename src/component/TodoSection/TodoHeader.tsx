import { Bars3BottomLeftIcon } from "@heroicons/react/16/solid";
import React from "react";
import { useModal } from "~/context/ModalContext";
import { useProgressMenu } from "~/context/ProgressMenuContext";
import SearchField from "./SearchField";

const TodoHeader: React.FC = () => {
    const { openTodoModal } = useModal();
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

    const todayDate =`${year}, ${monthName[month] ? monthName[month].slice(0, 3) : 'Unknown'} ${day
        .toString()
        .padStart(2, "0")}`;

    const dateTimeFormat = `${year}-${month.toString().padStart(2, "0")}-${day
        .toString()
        .padStart(2, "0")}}`;

    return (
        <header className="items-center grid grid-cols-[100fr_auto_1fr] gap-4 md:gap-0 md:flex-auto justify-between w-full pt-3">
        <SearchField />
        <div className="text-center">
            <button onClick={openProgressMenu} className="block xl:hidden">
                <Bars3BottomLeftIcon className="w-6 h-6" />
            </button>
            <span className="text-slate-600 dark:text-slate-200 uppercase font-bold text-sm block xl:hidden">
            To-do list
            </span>
            <time dateTime={dateTimeFormat}>{todayDate}</time>
        </div>
        <div className="flex flex-1">

            <button className="btn sm:static fixed bottom-3 right-3 z-10 sm:z-0 min-w-max shadow-lg shadow-slate-400  dark:shadow-slate-900 sm:shadow-transparent" 
                    onClick={openTodoModal}>
                Add new todo
            </button>
        </div>
        </header>
    );
};

export default TodoHeader;
