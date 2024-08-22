import { useQuery } from "@tanstack/react-query"
import { fetchPost } from "../api/fetchPost";

export const usePostQuery = () => {
  const query = useQuery({
    queryKey: ['post'],
    queryFn: fetchPost
  });

  return {
    post: query.data,
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error
  }
}