import { PencilIcon } from "@heroicons/react/16/solid";
import React from "react";
import { useModal } from "~/context/ModalContext";
import type { Todo } from '~/Interface/Todo';

const BtnEditTodo: React.FC<{ todo: Todo }> = ({ todo }) => {
  const { openTodoModal, setTitle, setTodo } = useModal();

  const openEditModal = () => {
    setTitle("Edit todo");
    setTodo(todo);
    openTodoModal();
  }

  return (
    <>
      <button
        title="edit todo"
        className="transition w-7 sm:w-8 h-6 sm:h-8 grid place-items-center dark:hover:text-slate-200 hover:text-slate-700"
        onClick={openEditModal}
      >
        <PencilIcon className="w-4 sm:w-5 h-4 sm:h-5" />
      </button>
    </>
  );
};

export default BtnEditTodo;
