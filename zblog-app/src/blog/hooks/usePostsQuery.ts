import { useQuery } from "@tanstack/react-query"
import { fetchPosts } from "../api/fetchPosts";

export const usePostsQuery = () => {
  const query = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts
  });

  return {
    posts: query.data,
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error
  }
}