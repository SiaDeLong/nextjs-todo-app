import { TrashIcon } from "@heroicons/react/16/solid";
import React from "react";
import { useModal } from "~/context/ModalContext";

const BtnDeleteTodo: React.FC<{ todoId: string }> = ({ todoId }) => {
  const { setTodoIdToDelete, openConfirmDeleteModal } = useModal();
  

  const openConfirmDelete = () => {
    setTodoIdToDelete(todoId);
    openConfirmDeleteModal();
  }

  return (
    <>
      <button
        onClick={openConfirmDelete}
        title="delete todo"
        className="ml-2 transition hover:text-slate-700 dark:hover:text-slate-200"
      >
        <TrashIcon className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
    </>
  );
};

export default React.memo(BtnDeleteTodo);
