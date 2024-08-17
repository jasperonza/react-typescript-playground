import { useTodoContext } from "../contexts/TodoContext";

export type Event = React.ChangeEvent<HTMLInputElement>;

export const useHandleChange = () => {
  const { todos, setTodos } = useTodoContext();

  const handleChange = (e: Event, id: number) => {
    const { name, value } = e.target;
    setTodos(
      todos.map((todo: any) =>
        todo.id === id ? { ...todo, [name]: value } : todo
      )
    );
  }

  return { handleChange }
}