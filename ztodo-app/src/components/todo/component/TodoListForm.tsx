import { useTodoContext } from '../../contexts/TodoContext';
import { InputChangeEvent, useTodo } from '../hooks/useTodo';
import AppInput from '../../app/AppInput';
import AppButton from '../../app/AppButton';

type Props = {}

export default function TodoListForm({ }: Props) {
  const { todos, buttonActiveIndex, todoUpdate } = useTodoContext();

  const { useTodoEffect, handleChange, updateTodo } = useTodo();

  useTodoEffect(todos);

  return (
    <>
      {todos.length > 0 ? todos.map((todo: any, index: number) => (
        <div key={todo.id}>
          {!todo.isCompleted &&
            <ul>
              <li key={todo.id}>
                <div>{todo.id}</div>
                <div>
                  <AppInput defaultValue={todo.title} name='title' onChange={(e: InputChangeEvent) => handleChange(e)} disabled={buttonActiveIndex !== null && buttonActiveIndex !== index} />
                </div>
                <div>
                  <AppInput defaultValue={todo.description} name='description' onChange={(e: InputChangeEvent) => handleChange(e)} disabled={buttonActiveIndex !== null && buttonActiveIndex !== index} />
                </div>
                <div>
                  {buttonActiveIndex === index ?
                    <form onSubmit={(e) => updateTodo(e, todo.id, todoUpdate)}>
                      <AppButton type='submit'>Update</AppButton>
                    </form>
                    : null
                  }
                </div>
              </li>
            </ul>
          }
        </div>
      ))
        : null
      }
    </>
  )
}


