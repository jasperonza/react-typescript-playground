import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useQuery } from "@tanstack/react-query";
import { fetchUserTodos } from "../api/fetchUserTodos";

export const useTodoQuery = () => {
  // User data / context
  const { user } = useContext(UserContext);

  // Fetch user todo(s)
  const query = useQuery({
    queryKey: ['todo'],
    queryFn: () => fetchUserTodos(user.id)
  });

  return {
    userTodos: query.data,
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error
  }
}