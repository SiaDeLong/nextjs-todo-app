import { useState, useEffect } from "react";
import type { Todo } from "~/Interface/Todo";

const useSortTodos = (todos: Todo[]) => {
  const [sortedBy, setSortedBy] = useState<string>("");
  const [sortedTodos, setSortedTodos] = useState<Todo[]>(todos);

  useEffect(() => {
    const sortByDate = (order: "max-date" | "min-date"): Todo[] => {
      const toMillisseconds = (date: string) => Date.parse(date);
      const todosCopy = [...todos];
      const sorted = todosCopy.sort((todo1, todo2) => {
        const date1 = toMillisseconds(todo1.date);
        const date2 = toMillisseconds(todo2.date);

        if (date1 < date2) {
          return -1;
        }

        if (date1 > date2) {
          return 1;
        }

        return 0;
      });

      if (order === "min-date") {
        return sorted;
      }

      if (order === "max-date") {
        return sorted.reverse();
      }

      return todos;
    };

    const sortByCompletedStatus = (completed: boolean): Todo[] => {
      const todosCopy = [...todos];
      const sorted = todosCopy.sort((todo1) => {
        if (todo1.completed) {
          return -1;
        }
        return 0;
      });
      if (completed) {
        return sorted;
      }
      if (!completed) {
        return sorted.reverse();
      }
      return todos;
    };

    if (sortedBy === "min-date" || sortedBy === "max-date") {
      setSortedTodos(sortByDate(sortedBy));
    }
    if (sortedBy === "" || sortedBy === "order-added") {
      setSortedTodos(todos);
    }
    if (sortedBy === "completed-first") {
      setSortedTodos(sortByCompletedStatus(true));
    }
    if (sortedBy === "uncompleted-first") {
      setSortedTodos(sortByCompletedStatus(false));
    }
  }, [sortedBy, todos]);
  return { sortedBy, setSortedBy, sortedTodos };
};

export default useSortTodos;
