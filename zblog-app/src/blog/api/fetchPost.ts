import { toast } from "react-toastify";

export const fetchPost = async (postId: any) => {
  try {
    const response = await fetch(`https://dummyjson.com/posts/${postId}`);

    const data = await response.json();

    if (!response.ok) {
      toast.error('Something went wrong');
      return;
    }

    if (data.message) {
      toast.warn(data.message);
      return;
    }

    return data;

  } catch (error) {
    console.log(error);
  }

}