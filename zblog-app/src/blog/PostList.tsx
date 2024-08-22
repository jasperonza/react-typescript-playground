import { Link } from 'react-router-dom';
import { initializePosts } from './hooks/usePosts';
import { usePostsQuery } from './hooks/usePostsQuery';
import { ErrorState, Loading, NotFound } from '../components/utils/useQueryStates';
import AppCard from '../components/app/AppCard';

type Props = {}

export default function PostList({ }: Props) {
  // Render data lists

  // ========================================================================
  // *** Method 1
  // *** Using react useState hook
  // const [posts] = initializePosts();
  // ========================================================================

  // ========================================================================
  // *** Method 2
  // *** Using tanstack library
  const { posts, isLoading, isError, error } = usePostsQuery();

  if (isLoading) {
    return <Loading />
  }

  if (isError) {
    return <ErrorState error={error as Error} />
  }

  if (!posts) {
    return <NotFound />
  }
  // ========================================================================

  return (
    <>
      {posts && posts.map((post: any) =>
        <AppCard key={post.id}>
          <ul>
            <li>{post.title}</li>
            <li>{post.body}</li>
            <li><Link to={`/post/${post.id}`}>View</Link></li>
          </ul>
        </AppCard>
      )}
    </>
  )
}