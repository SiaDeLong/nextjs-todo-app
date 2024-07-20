

import { useEffect, useState } from "react";
import type { Todo } from "~/Interface/Todo";

interface Props {
  todos: Todo[];
  done: boolean;
}

const useCompletedTodos = (props: Props): { todos: Todo[] } => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const filteredTodos: Todo[] = props.todos.filter((todo: Todo) => {
      if (props.done) {
        return todo.completed;
      } else {
        return !todo.completed;
      }
    });
    setTodos(filteredTodos);
  }, [props.todos, props.done]);

  return { todos };
};

export default useCompletedTodos;
