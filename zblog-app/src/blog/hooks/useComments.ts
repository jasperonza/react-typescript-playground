import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchComments } from "../api/fetchComments";

export const useComments = () => {
  // React router params
  const { postId } = useParams();

  const [comments, setComments] = useState<any>(undefined);

  useEffect(() => {
    const getComments = async () => {
      const data: any = await fetchComments(postId);
      setComments(data);
    }

    getComments();
  }, []);

  return [comments, setComments] as const;
}