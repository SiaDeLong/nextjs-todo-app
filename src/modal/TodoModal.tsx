

import { XMarkIcon } from "@heroicons/react/16/solid";
import { useState, useRef } from "react";
import { useModal } from "~/context/ModalContext";
import type { Todo } from "~/Interface/Todo";
import { motion } from "framer-motion"
import { useTodos } from "~/context/TodoContext";

const TodoModal: React.FC<{
  todo?: Todo;
  nameForm: string;
}> = ({ todo, nameForm }) => {

  const { createTodo, editTodo } = useTodos();

  const today: Date = new Date();
  let day: number = today.getDate();
  let month: number = today.getMonth() + 1;
  const year: number = today.getFullYear();
  if (day < 10) {
    day = +("0" + day);
  }
  if (month < 10) {
    month = +("0" + month);
  }

  const todayDate: string = year + "-" + month + "-" + day;
  const maxDate: string = year + 1 + "-" + month + "-" + day;

  const [description, setDescription] = useState<string>(() => {
    if (todo) {
      return todo.description;
    }
    return "";
  });
  const [title, setTitle] = useState<string>(() => {
    if (todo) {
      return todo.title;
    }
    return "";
  });
  const [date, setDate] = useState<string>(() => {
    if (todo) {
      return todo.date;
    }
    return todayDate;
  });
  const isTitleValid = useRef<boolean>(false);
  const isDateValid = useRef<boolean>(false);

  const [isImportant, setIsImportant] = useState<boolean>(() => {
    if (todo) {
      return todo.important;
    }
    return false;
  });

  const { closeTodoModal } = useModal();


  const addNewTodoHandler = (event: React.FormEvent): void => {
    event.preventDefault();

    isTitleValid.current = title.trim().length > 0;
    isDateValid.current = date.trim().length > 0;

    if (isTitleValid.current && isDateValid.current) {
      const newTodo: Todo = {
        title: title,
        description: description,
        date: date,
        completed: todo? todo.completed : false,
        important: isImportant,
        id: todo?.id ? todo.id : Date.now().toString(),
        visibility: true
      };

      nameForm === "Add a todo"? createTodo(newTodo) : editTodo(newTodo);
      closeTodoModal();
    }
  };
  return (
    <div
      className="xl:text-base sm:text-sm text-xs fixed bg-slate-600/[.2] w-full h-full z-40 grid place-items-center px-2 text-slate-600 dark:text-slate-200"
      onClick={closeTodoModal}
    >
      <motion.section
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="relative bg-slate-200 max-w-lg w-full rounded-lg p-3 sm:p-5 flex flex-col justify-start dark:bg-slate-900"
        onClick={(e) => e.stopPropagation()}>
        <button
          aria-label="close alert"
          className="absolute right-3 sm:right-4"
          onClick={closeTodoModal}
        >
          <XMarkIcon className="w-6 h-6" />
        </button>
        <h2 className="font-medium mb-5 text-lg md:text-2xl">{nameForm}</h2>
        <form
          className="flex flex-col stylesInputsField"
          onSubmit={addNewTodoHandler}
        >
          <label>
            Title
            <input
              type="text"
              placeholder="e.g, study for the test"
              required
              value={title}
              onChange={({ target }) => setTitle(target.value)}
              className="w-full"
            />
          </label>
          <label>
            Date
            <input
              type="date"
              className="w-full"
              value={date}
              required
              onChange={({ target }) => setDate(target.value)}
              min={todayDate}
              max={maxDate}
            />
          </label>
          <label>
            Description (optional)
            <textarea
              placeholder="e.g, study for the test"
              className="w-full"
              value={description}
              onChange={({ target }) => setDescription(target.value)}
            ></textarea>
          </label>
          <InputCheckbox
            isChecked={isImportant}
            setChecked={setIsImportant}
            label="Mark as important"
          />
          <button type="submit" className="btn mt-5">
            {nameForm}
          </button>
        </form>
      </motion.section>
    </div>
  );
};

export default TodoModal;

const InputCheckbox: React.FC<{
  label: string;
  isChecked: boolean;
  setChecked: (value: React.SetStateAction<boolean>) => void;
}> = ({ isChecked, setChecked, label }) => {
  return (
    <label className="mb-0 flex items-center cursor-pointer">
      <div className="mr-2 bg-slate-300/[.5] dark:bg-slate-800 w-5 h-5 rounded-full grid place-items-center border border-slate-300 dark:border-slate-700">
        {isChecked && (
          <span className="bg-violet-600 dark:bg-violet-800 w-2 h-2 block rounded-full"></span>
        )}
      </div>
      <span className="order-1 flex-1">{label}</span>
      <input
        type="checkbox"
        className="sr-only"
        checked={isChecked}
        onChange={() => setChecked((prev: boolean) => !prev)}
      />
    </label>
  );
};
