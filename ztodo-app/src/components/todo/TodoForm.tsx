import { ChangeEvent, FormEvent, useState } from 'react';
import { useTodo } from './hooks/useTodo';
import AppCard from '../app/AppCard';
import AppInput from '../app/AppInput';
import AppButton from '../app/AppButton';

export default function TodoForm() {

  const { createTodo } = useTodo();

  const [newTodo, setNewTodo] = useState<any>({
    title: '',
    description: '',
    isCompleted: false
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewTodo((prevState: any) => ({
      ...prevState, [name]: value
    }));
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTodo(newTodo);
    setNewTodo({
      title: '',
      description: '',
      isCompleted: false,
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <AppCard>
          <h3>Create new todo</h3>
          {/* Todo title */}
          <label htmlFor="todoId">Title</label>
          <AppInput type='text' name='title' id='todoId' placeholder='Todo title' value={newTodo.title} onChange={handleChange} />

          {/* Todo description */}
          <label htmlFor="todoDescriptionId">Description</label>
          <AppInput type='text' name='description' id='todoDescriptionId' placeholder='Todo description' value={newTodo.description} onChange={handleChange} />

          {/* Todo button */}
          <AppButton>Create</AppButton>
        </AppCard>
      </form>
    </div>
  )
}