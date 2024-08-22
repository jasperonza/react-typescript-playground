import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query"
import { fetchPost } from "../api/fetchPost";

export const usePostQuery = () => {
  const { postId } = useParams();

  const query = useQuery({
    queryKey: ['post'],
    queryFn: () => fetchPost(postId)
  });

  return {
    post: query.data,
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error
  }
}