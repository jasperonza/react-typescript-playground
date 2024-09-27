import { toast } from "react-toastify";

export const completeUserTodo = async (todoId: number | null | undefined) => {
  try {
    const response = await fetch(`https://dummyjson.com/todos/${todoId}`, {
      method: 'PUT', /* or PATCH */
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        completed: true,
      })
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

  } catch (error) {
    console.log(error)
  }
}