import { TodoContextProvider } from '../contexts/TodoContext';
import TodoForm from '../todo/TodoForm';
import Todos from '../todo/Todos';

type Props = {}

export default function TodoPage({ }: Props) {
  return (
    <>
      <TodoContextProvider>
        <div>TodoPage</div>
        <TodoForm />
        <Todos />
      </TodoContextProvider>
    </>
  )
}