import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPost } from "../api/fetchPost";

// Custom hook to manage post
export const usePost = () => {
  // React router
  const { postId } = useParams();

  // Post state
  const [post, setPost] = useState<any>(undefined);

  useEffect(() => {
    const getPost = async () => {
      const data = await fetchPost(postId);
      setPost(data);
    }

    getPost();
  }, []);

  return [post, setPost] as const;
}