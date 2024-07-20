

import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { Todo } from '~/Interface/Todo';

interface ModalContextType {
  isTodoModalOpen: boolean;
  openTodoModal: () => void;
  closeTodoModal: () => void;
  isConfirmDeleteModalOpen: boolean;
  openConfirmDeleteModal: () => void;
  closeConfirmDeleteModal: () => void;
  todoIdToDelete: string;
  setTodoIdToDelete: (id: string) => void;
  nameForm: string;
  setTitle: (nameForm: string) => void;
  todoToEdit: Todo;
  setTodo: (todo: Todo) => void;
}

const defaultContextValue: ModalContextType = {
  isTodoModalOpen: false,
  openTodoModal: () => { 
    // Implementation pending
  }, 
  closeTodoModal: () => {
    // Implementation pending
  },
  isConfirmDeleteModalOpen: false,
  openConfirmDeleteModal: () => { 
    // Implementation pending
  }, 
  closeConfirmDeleteModal: () => {
    // Implementation pending
  },
  todoIdToDelete: "",
  setTodoIdToDelete: () => {
    // Implementation pending
  },
  nameForm: "Add a todo",
  setTitle: () => {
    // Implementation pending
  }, 
  todoToEdit: {
    title: '',
    description: '',
    date: '',
    completed: false,
    important: false,
    id: '',
    visibility: true
  },
  setTodo: () => {
    // Implementation pending
  }, 
};

const ModalContext = createContext<ModalContextType>(defaultContextValue);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isTodoModalOpen, setIsTodoModalOpen] = useState<boolean>(false);
  const [isConfirmDeleteModalOpen, setIsConfirmDeleteModalOpen] = useState<boolean>(false);
  const [todoIdToDelete, setTodoId] = useState<string>("");
  const [nameForm, setNameForm] = useState<string>("Add a todo");
  const [todoToEdit, setTodoToEdit] = useState<Todo>({
    title: '',
    description: '',
    date: '',
    completed: false,
    important: false,
    id: '',
    visibility: true
  });

  const setTitle = (nameForm: string) => setNameForm(nameForm);
  const setTodo = (todo: Todo) => setTodoToEdit(todo);
  const setTodoIdToDelete = (id: string) => setTodoId(id);

  const openTodoModal = () => setIsTodoModalOpen(true);
  const closeTodoModal = () => setIsTodoModalOpen(false);

  const openConfirmDeleteModal = () => setIsConfirmDeleteModalOpen(true);
  const closeConfirmDeleteModal = () => setIsConfirmDeleteModalOpen(false);

  return (
    <ModalContext.Provider value={{ isTodoModalOpen, openTodoModal, closeTodoModal, isConfirmDeleteModalOpen, openConfirmDeleteModal, closeConfirmDeleteModal, todoIdToDelete, setTodoIdToDelete, nameForm, setTitle, todoToEdit, setTodo}}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);