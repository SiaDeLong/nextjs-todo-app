import { StarIcon } from "@heroicons/react/16/solid";
import React from "react";
import { useTodos } from "~/context/TodoContext";

const BtnMarkAsImportant: React.FC<{
  todoId: string;
  todoImportant: boolean;
}> = ({ todoId, todoImportant }) => {
  const { toggleImportant } = useTodos();

  return (
    <button
      title={todoImportant ? "unmark as important" : "mark as important"}
      onClick={() => toggleImportant(todoId)}
      className="transition hover:text-slate-700 dark:hover:text-slate-200 ml-auto"
    >
      <StarIcon 
        className={`w-5 h-5 sm:w-6 sm:h-6 ${
          todoImportant ? "fill-rose-500 stroke-rose-500 " : "fill-none stroke-white stroke-2"
        }`}
      />
    </button>
  );
};

export default React.memo(BtnMarkAsImportant);
