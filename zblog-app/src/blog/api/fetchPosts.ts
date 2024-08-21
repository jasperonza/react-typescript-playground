import { toast } from "react-toastify";

// Fetch posts from api
export const fetchPosts = async () => {
  try {
    const response = await fetch('https://dummyjson.com/posts?limit=10');

    const data = await response.json();

    if (!response.ok) {
      toast.error('Something went wrong');
      return;
    }

    if (data.message) {
      toast.warn(data.message);
      return;
    }

    if (data.posts) {
      return data.posts;
    }

    return data;

  } catch (error) {
    console.log(error);
  }
}