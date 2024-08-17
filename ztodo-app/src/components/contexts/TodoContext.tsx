import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { initialTodoData } from '../todo/hooks/useTodo';

type Props = PropsWithChildren;

// Todo create context
export const TodoContext = createContext<any | undefined>(undefined);

// Todo context provider
export function TodoContextProvider({ children }: Props) {
  // Todos initial state / data
  const [todos, setTodos] = useState<any>(initialTodoData);

  // Button active index state to show / hide update button
  const [buttonActiveIndex, setButtonActiveIndex] = useState<number | null>(null);

  // Update input for title and desscription state 
  const [todoUpdate, setTodoUpdate] = useState<any>(undefined);

  // Show / hide todo list when on edit mode
  const [isTodoListActive, setIsTodoListActive] = useState<boolean>(true);

  return (
    <TodoContext.Provider value={{ todos, setTodos, buttonActiveIndex, setButtonActiveIndex, todoUpdate, setTodoUpdate, isTodoListActive, setIsTodoListActive }}>
      {children}
    </TodoContext.Provider>
  )
}

// Custom hook to use TodoContext
export const useTodoContext = () => {
  const todos = useContext(TodoContext);

  if (todos === undefined) {
    throw new Error('useTodoContext must be used with TodoContext');
  }

  return todos;
}