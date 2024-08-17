import { useTodo } from './hooks/useTodo';
import { useTodoContext } from '../contexts/TodoContext';
import AppButton from '../app/AppButton';
import TodoListForm from './component/TodoListForm';

export default function TodoList() {

  const { todos, buttonActiveIndex, isTodoListActive } = useTodoContext();

  const { useTodoEffect, handleEdit, deleteTodo } = useTodo();

  useTodoEffect(todos);

  return (
    <>

      <h3>Todos:</h3>

      {todos.length > 0 ? todos.map((todo: any, index: number) => (
        <div key={todo.id}>

          {/* Show / hide todo/s list */}
          {isTodoListActive &&
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

    </>
  )
}