import { useTodoContext } from '../../contexts/TodoContext';

type Props = {}

export default function TodoCompletedTasks({ }: Props) {
  const { todos } = useTodoContext();

  return (
    <>
      {todos.length > 0 && todos.map((todo: any) => (
        <div key={todo.id}>
          {todo.isCompleted &&
            <ul>
              <li>{todo.id}</li>
              <li>{todo.title}</li>
              <li>{todo.description}</li>
            </ul>
          }
        </div>
      ))}
    </>
  )
}