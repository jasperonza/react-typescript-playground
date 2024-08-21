import { useEffect, useState } from 'react';
import { fetchPosts } from '../api/fetchPosts';

// Custom hook to manage posts state
export const initializePosts = () => {
  const [posts, setPosts] = useState<any>(null);

  useEffect(() => {
    const getPosts = async () => {
      const data = await fetchPosts();
      setPosts(data);
    }

    getPosts();
  }, []);

  return [posts, setPosts] as const;
};