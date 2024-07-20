"use client";

import { useEffect } from "react";
import ProgressMenu from "~/component/ProgressSection/ProgressMenu";
import TodoSection from "~/component/TodoSection/TodoSection";
import { useModal } from "~/context/ModalContext";
import { useTodos } from "~/context/TodoContext";
import TodoModal from "~/modal/TodoModal";

export default function HomePage() {
  const { isTodoModalOpen, nameForm, todoToEdit } = useModal();
  const { todos, initTodo, createTodo, editTodo } = useTodos();
   
  useEffect(() => {
    initTodo();
  }, []); 
  
  return (
    <div>
      {isTodoModalOpen && (
        <TodoModal
        nameForm={ nameForm? nameForm : "Add a todo" }
        todo={ todoToEdit? todoToEdit : undefined } 
        onConfirm={ todoToEdit? editTodo : createTodo } />
      )}
      <ProgressMenu />
      <TodoSection title={"All tasks"} todos={todos} />
    </div>
  );
}