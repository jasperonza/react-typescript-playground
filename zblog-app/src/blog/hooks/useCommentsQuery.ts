import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchComments } from "../api/fetchComments";

export const useCommentsQuery = () => {
  // React router params
  const { postId } = useParams();

  // Tanstack query library
  const query = useQuery({
    queryKey: ['comments'],
    queryFn: () => fetchComments(postId)
  });

  return {
    comments: query.data,
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error
  }
}