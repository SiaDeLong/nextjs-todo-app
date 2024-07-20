import { XMarkIcon } from "@heroicons/react/16/solid";
import React from "react";
import { useModal } from "~/context/ModalContext";

const ConfirmDeleteModal: React.FC<{
  onConfirm: () => void;
  onClose: () => void;
  text: string;
}> = ({ onConfirm, onClose, text }) => {
  const confirmAndCloseModal = () => {
    onConfirm();
    closeConfirmDeleteModal();
  };

  const { closeConfirmDeleteModal } = useModal();

  return (
    <div
    className="absolute top-0 left-0 xl:text-base sm:text-sm text-xs bg-slate-600/[.2] w-full h-full z-40 grid place-items-center px-2 text-slate-600 dark:text-slate-200"
    onClick={closeConfirmDeleteModal}
    >
        <section className="relative bg-slate-200 max-w-lg w-full rounded-lg p-3 sm:p-5 flex flex-col justify-start dark:bg-slate-900">
        <button
            aria-label="close alert"
            className="absolute right-3 sm:right-4"
            onClick={onClose}
        >
            <XMarkIcon />
        </button>
        <h2 className="font-medium mb-5 text-lg md:text-2xl">Are you sure?</h2>
        <p className="text-slate-500">{text}</p>
        <div className="mt-7 ml-auto">
            <button onClick={onClose}>Cancel</button>
            <button onClick={confirmAndCloseModal} className="btn ml-6">
            Confirm
            </button>
        </div>
        </section>
    </div>
  );
};

export default ConfirmDeleteModal;
