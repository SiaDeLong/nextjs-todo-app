"use client";

import { useEffect } from "react";
import ProgressMenu from "~/component/ProgressSection/ProgressMenu";
import TodoSection from "~/component/TodoSection/TodoSection";
import { useModal } from "~/context/ModalContext";
import { useTodos } from "~/context/TodoContext";
import ConfirmDeleteModal from "~/modal/ConfirmDeleteModal";
import TodoModal from "~/modal/TodoModal";

export default function HomePage() {
  const { isTodoModalOpen, nameForm, todoToEdit, isConfirmDeleteModalOpen } = useModal();
  const { todos, initTodo} = useTodos();

  useEffect(() => {
    initTodo();
  }, []);

  return (
    <div>
      {isTodoModalOpen && (
        <TodoModal
          nameForm={nameForm ? nameForm : "Add a todo"}
          todo={todoToEdit ? todoToEdit : undefined} />
      )}
      {isConfirmDeleteModalOpen && (
        <ConfirmDeleteModal
        text="This todo will be deleted permanently." />
      )}
      <ProgressMenu />
      <TodoSection title={"All todos"} todos={todos} />
    </div>
  );
}