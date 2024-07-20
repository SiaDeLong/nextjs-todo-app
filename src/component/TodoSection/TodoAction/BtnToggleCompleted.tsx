import React from "react";
import { useTodos } from "~/context/TodoContext";

const BtnToggleCompleted: React.FC<{
  todoCompleted: boolean;
  todoId: string;
  isListInView1: boolean;
}> = ({ todoCompleted, todoId, isListInView1 }) => {

  const { toggleTodo } = useTodos();

  return (
    <button
      title={todoCompleted ? "mark as uncompleted" : "mark as completed"}
      className={`${
        todoCompleted
          ? "bg-emerald-200 text-emerald-800 "
          : "bg-amber-200 text-amber-800 "
      } ${isListInView1 ? "mr-4" : "mr-4 order-0"} rounded-full font-medium`}
      onClick={() => toggleTodo(todoId)}
    >
      <span className="block py-1 px-3 absolute invisible sm:static sm:visible">
        {todoCompleted ? "completed" : "uncompleted"}
      </span>
      <span className=" sm:hidden w-6 h-6 grid place-items-center">
        {/* {todoCompleted ? (
          <Check className="w-3 h-3" />
        ) : (
          <SvgX className="w-3 h-3" />
        )} */}
      </span>
    </button>
  );
};

export default React.memo(BtnToggleCompleted);
