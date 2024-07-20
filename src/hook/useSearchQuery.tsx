import { useEffect, useState } from "react";
import { useTodos } from "~/context/TodoContext";
import type { Todo } from "~/Interface/Todo";

const useSearchQuery = (searchQuery: string) => {
  const { todos } = useTodos();
  const [matchedTodos, setMatchedTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const filteredTodos = todos.filter((todo: Todo) => {
      return todo.title.toLowerCase().includes(searchQuery.toLowerCase());
    });
    if (searchQuery.trim().length) {
      setMatchedTodos(filteredTodos);
    } else {
      setMatchedTodos([]);
    }
  }, [searchQuery, todos]);

  return matchedTodos;
};

export default useSearchQuery;
