import { toast } from "react-toastify";

export const fetchUserTodos = async (id: number) => {
  // Fetch user todo(s)
  try {
    const response = await fetch(`https://dummyjson.com/users/${id}/todos`);

    const data = await response.json();

    if (!response.ok) {
      toast.error("Network connection error");
      return;
    }

    if (data.message) {
      toast.warn(data.message);
      return;
    }

    return data.todos;

  } catch (error: any) {
    console.log(error);
  }

}