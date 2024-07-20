import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import { Todo } from '~/Interface/Todo';


interface TodoContextType {
  todos: Todo[];
  initTodo: () => void;
  createTodo: (newTodo: Todo) => void;
  editTodo: (editedTodo: Todo) => void;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
  toggleImportant: (id: string) => void;
  enableAllVisibility: (matachedTodos?: Todo[]) => void;
}

const defaultTodos: Todo[] = [
    {
      title: "Learn Nextjs",
      important: false,
      description: "This is the description for this todo",
      date: "2024-07-20",
      completed: true,
      id: "t1",
      visibility: true,
    },
    {
      title: "Create a Todo App",
      important: true,
      description: "This is the description for this todo",
      date: "2023-05-15",
      completed: true,
      id: "t2",
      visibility: true,
    },
    {
      title: "Publish it to Vercel",
      important: false,
      description: "This is the description for this todo",
      date: "2023-08-21",
      completed: false,
      id: "t3",
      visibility: true,
    }
  ];

const defaultContextValue: TodoContextType = {
  todos: defaultTodos,
  initTodo: () => { 
    // Implementation pending
  },
  createTodo: () => { 
    // Implementation pending
  },
  editTodo: () => { 
    // Implementation pending
  },
  removeTodo: () => {
    // Implementation pending
  },
  toggleTodo: () => {
    // Implementation pending
  },
  toggleImportant: () => {
    // Implementation pending
  },
  enableAllVisibility: () => {
    // Implementation pending
  }
};

const TodoContext = createContext<TodoContextType>(defaultContextValue);

export const TodoProvider = ({ children }: { children: ReactNode }) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const initTodo = (): void => {
        setTodos(defaultTodos);
    }

    const createTodo = (newTodo: Todo): void => {
        setTodos(prevTodos => [...prevTodos, newTodo]);
    }

    const editTodo = (editedTodo: Todo): void => {
        setTodos(prevTodos => 
            prevTodos.map(todo =>
                todo.id === editedTodo.id ?  editedTodo  : todo
            )
        );
    }

    const removeTodo = (id: string) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    };

    const toggleTodo = (id: string) => {
        setTodos(prevTodos => 
            prevTodos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const toggleImportant = (id: string) => {
        setTodos(prevTodos => 
            prevTodos.map(todo =>
                todo.id === id ? { ...todo, important: !todo.important } : todo
            )
        );
    };

    const enableAllVisibility = (matachedTodos?: Todo[]) => {
      setTodos(todos.map(todo => matachedTodos? 
        (matachedTodos.includes(todo)? 
          { ...todo, visibility: true } : 
          { ...todo, visibility: false }) 
        : 
        ({ ...todo, visibility: true })));
    };

    return (
        <TodoContext.Provider value={{ todos, initTodo, createTodo, editTodo, removeTodo, toggleTodo, toggleImportant, enableAllVisibility }}>
        {children}
        </TodoContext.Provider>
    );
};

export const useTodos = () => useContext(TodoContext);