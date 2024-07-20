

import { useState, useEffect } from "react";
import { useTodos } from "~/context/TodoContext";
import type { Todo } from "~/Interface/Todo";

const useTodayTodos = (): Todo[] => {
  const { todos } = useTodos();
  const [todaysTodos, setTodaysTodos] = useState<Todo[]>([]);

  const date: Date = new Date();
  const year: number = date.getFullYear();
  const month: number = date.getMonth() + 1;
  const day: number = date.getDate();

  const dateTimeFormat = `${year}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}`;

  useEffect(() => {
    const filteredTodos: Todo[] = todos.filter(
      (todo: Todo) => todo.date === dateTimeFormat
    );
    setTodaysTodos(filteredTodos);
  }, [dateTimeFormat, todos]);
  return todaysTodos;
};

export default useTodayTodos;
