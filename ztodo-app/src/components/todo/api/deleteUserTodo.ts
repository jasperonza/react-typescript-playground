import { toast } from "react-toastify";

export const deleteUserTodo = async (todoId: number | undefined | null) => {
  // Remove / delete user todo
  try {
    const response = await fetch(`https://dummyjson.com/todos/${todoId}`, {
      method: 'DELETE',
    });

    const data = await response.json();

    if (!response.ok) {
      toast.error('Network connection error');
      return;
    }

    if (data.message) {
      toast.warn(data.message);
      return;
    }

    return data;

  } catch (error: any) {
    console.log(error);
  }
}