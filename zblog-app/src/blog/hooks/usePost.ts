import { useEffect, useState } from "react"
import { fetchPost } from "../api/fetchPost";

// Custom hook to manage post
export const usePost = (postId: any) => {
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