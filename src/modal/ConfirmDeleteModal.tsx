import { XMarkIcon } from "@heroicons/react/16/solid";
import React from "react";
import { useModal } from "~/context/ModalContext";
import { useTodos } from "~/context/TodoContext";
import { motion } from "framer-motion"

const ConfirmDeleteModal: React.FC<{
  text: string;
}> = ({ text }) => {

  const { removeTodo } = useTodos();
  const { todoIdToDelete, closeConfirmDeleteModal } = useModal();

  const confirmAndCloseModal = () => {
    removeTodo(todoIdToDelete);
    closeConfirmDeleteModal();
  };

  return (
    <div
    className="absolute top-0 left-0 z-40 xl:text-base sm:text-sm text-xs bg-slate-600/[.2] w-full h-full grid place-items-center px-2 text-slate-600 dark:text-slate-200"
    onClick={closeConfirmDeleteModal}
    >
        <motion.section 
          className="relative bg-slate-200 max-w-lg w-full rounded-lg p-3 sm:p-5 flex flex-col justify-start dark:bg-slate-900"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
        <button
            aria-label="close alert"
            className="absolute right-3 sm:right-4"
            onClick={closeConfirmDeleteModal}
        >
            <XMarkIcon />
        </button>
        <h2 className="font-medium mb-5 text-lg md:text-2xl">Are you sure?</h2>
        <p className="text-slate-500">{text}</p>
        <div className="mt-7 ml-auto">
            <button onClick={closeConfirmDeleteModal}>Cancel</button>
            <button onClick={confirmAndCloseModal} className="btn ml-6">
            Confirm
            </button>
        </div>
        </motion.section>
    </div>
  );
};

export default ConfirmDeleteModal;
