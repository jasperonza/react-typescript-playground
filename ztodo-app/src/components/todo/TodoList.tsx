import { useTodo } from './hooks/useTodo';
import { useTodoContext } from '../contexts/TodoContext';
import AppButton from '../app/AppButton';
import TodoListForm from './component/TodoListForm';
import TodoCompletedTasks from './component/TodoCompletedTasks';

export default function TodoList() {

  const { todos, buttonActiveIndex, isTodoListActive } = useTodoContext();

  const { useTodoEffect, handleEdit, deleteTodo, completeTodo, allTodoTaskCompleted } = useTodo();

  useTodoEffect(todos);

  return (
    <>

      <h3>Todo/s:</h3>

      {todos.length > 0 && allTodoTaskCompleted &&
        <p>All todo task/s is/are completed</p>
      }

      {todos.length > 0 ? todos.map((todo: any, index: number) => (
        <div key={todo.id}>

          {/* Show / hide todo/s list */}
          {isTodoListActive && !todo.isCompleted &&
            <ul>
              <li key={todo.id}>
                <div>{todo.id}</div>
                <div>{todo.title}</div>
                <div>{todo.description}</div>
                {buttonActiveIndex === index ?
                  null :
                  <div>
                    <AppButton type='button' onClick={() => handleEdit(index)} disabled={buttonActiveIndex !== null && buttonActiveIndex !== index}>Edit</AppButton>
                  </div>
                }
                <div>
                  <AppButton type='button' onClick={() => completeTodo(todo.id)} disabled={buttonActiveIndex !== null && buttonActiveIndex !== index}>Complete</AppButton>
                </div>
                <div>
                  <AppButton type='button' onClick={() => deleteTodo(todo.id)} disabled={buttonActiveIndex !== null && buttonActiveIndex !== index}>Delete</AppButton>
                </div>
              </li>
            </ul>
          }

          {/* Show / hide todo list update form */}
          {buttonActiveIndex === index ?
            <TodoListForm />
            : null
          }

        </div>
      )) :
        <p>Todo/s not found</p>
      }

      <h3>Completed task/s:</h3>
      <TodoCompletedTasks />
      {noCompletedTasks ? (
        <p>No todo task/s is/are completed</p>
      ) : (
        <TodoCompletedTasks />
      )}
    </>
  )
}