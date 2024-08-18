import { useEffect } from "react";
import { toast } from "react-toastify";
import { useTodoContext } from "../../contexts/TodoContext";

export type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;

// Todo initial data
export const initialTodoData = [
  {
    id: 1,
    title: 'Todo',
    description: 'Complete existing todos',
    // firstName: 'Emilys',
    // lastName: 'Johnson',
    isCompleted: false
  }
];

export const useTodo = () => {

  // Todo context hook
  const { todos, setTodos, setButtonActiveIndex, setTodoUpdate, setIsTodoListActive } = useTodoContext();

  // =====================================================================================================================
  // *** Generate todo id
  // *** First method to generate todo id. But generateTodoId was not used at all.

  // const generateTodoId = () => {
  //   const initialTodoId = 1;

  //   if (initialTodoData.length > 0) {
  //     const todoArrayIndex = initialTodoData[initialTodoData.length - 1];
  //     const todoId = (todoArrayIndex.id + 1);

  //     return todoId;
  //   }

  //   return initialTodoId;
  // };
  // =====================================================================================================================

  // Create todo
  const createTodo = (newTodoData: any) => {
    setTodos((prevTodos: any) => {
      const newId = prevTodos.length ? Math.max(...prevTodos.map((todo: any) => todo.id)) + 1 : 1;
      const updatedTodos = [...prevTodos, { id: newId, ...newTodoData }];
      return updatedTodos;
    });
    toast.success('Todo created');
  }

  const completeTodo = (todoId: number) => {
    const status = { isCompleted: true };

    const todoIsComplete = todos.map((todo: any) => {
      if (todo.id === todoId) {
        return { ...todo, ...status };
      } else {
        return todo;
      }
    });

    setTodos(todoIsComplete);
    toast.success('Task completed');
  }

  // Update todo
  const updateTodo = (e: React.FormEvent<HTMLFormElement>, id: number, todoUpdate: any) => {
    e.preventDefault();

    const updatedTodos = todos.map((todo: any) => {
      if (todo.id === id) {
        // Merge the existing todo with the updated form data
        return { ...todo, ...todoUpdate };
      } else {
        return todo;
      }
    });

    setTodos(updatedTodos);
    setButtonActiveIndex(null);
    setIsTodoListActive(true);
    toast.info('Todo updated');
  }

  // Remove / delete todo
  const deleteTodo = (todoId: number) => {
    const data = todos.filter((todo: any) => todo.id !== todoId);
    setTodos(data);
    toast.error('Todo removed');
  }

  const useTodoEffect = (todos: any) => {
    useEffect(() => {
      if (todos.length === 0) return;
    }, [todos]);
  }

  const handleChange = (e: InputChangeEvent) => {
    const { name, value } = e.target;
    setTodoUpdate((prevState: any) => ({
      ...prevState, [name]: value
    })
    );
  }

  const handleEdit = (index: number) => {
    setButtonActiveIndex(index);
    setIsTodoListActive(false);
  }

  return { initialTodoData, createTodo, completeTodo, updateTodo, deleteTodo, useTodoEffect, handleChange, handleEdit }
}