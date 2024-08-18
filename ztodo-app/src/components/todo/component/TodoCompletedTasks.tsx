import { useTodoContext } from '../../contexts/TodoContext';

type Props = {}

export default function TodoCompletedTasks({ }: Props) {
  const { todos } = useTodoContext();

  return (
    <>
      {todos.length > 0 && todos.map((todo: any) => (
        <div key={todo.id}>
          <h3>Completed task/s:</h3>
          {todo.isCompleted ?
            <>
              <h3>Completed task/s</h3>
              <ul>
                <li>{todo.id}</li>
                <li>{todo.title}</li>
                <li>{todo.description}</li>
              </ul>
            </>
            : <p>No completed task/s yet</p>
          }
        </div>
      ))

      }
    </>
  )
}