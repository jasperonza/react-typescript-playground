import { toast } from "react-toastify";

export const fetchComments = async (postId: any) => {
  try {
    const response = await fetch(`https://dummyjson.com/posts/${postId}/comments`);

    const data = await response.json();

    if (!response.ok) {
      toast.error('Something went wrong.');
      return;
    }

    if (data.message) {
      toast.warn(data.message);
      return;
    }

    return data.comments;

  } catch (error) {
    console.log(error);
  }
}