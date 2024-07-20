import { TrashIcon } from "@heroicons/react/16/solid";
import React, { useState } from "react";
import { useTodos } from "~/context/TodoContext";
import ConfirmDeleteModal from "~/modal/ConfirmDeleteModal";

const BtnDeleteTask: React.FC<{ todoId: string }> = ({ todoId }) => {
  const [showModal, setIsModalShown] = useState<boolean>(false);
  const { removeTodo } = useTodos();

  const confirmDelete = () => {
    removeTodo(todoId);
  }

  return (
    <>
      {showModal && (
        <ConfirmDeleteModal
          onClose={() => setIsModalShown(false)}
          text="This todo will be deleted permanently."
          onConfirm={confirmDelete}
        />
      )}
      <button
        onClick={() => setIsModalShown(true)}
        title="delete todo"
        className="ml-2 transition hover:text-slate-700 dark:hover:text-slate-200"
      >
        <TrashIcon className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
    </>
  );
};

export default React.memo(BtnDeleteTask);
