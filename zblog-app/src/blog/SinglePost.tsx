import { usePost } from './hooks/usePost';
import { usePostQuery } from './hooks/usePostQuery';
import { ErrorState, Loading, NotFound } from '../components/utils/useQueryStates';
import AppCard from '../components/app/AppCard';
import AppLayout from '../components/layout/AppLayout';
import Comments from './Comments';

type Props = {}

export default function SinglePost({ }: Props) {
  // Render single post with different method(s)

  // ===============================================================
  // *** Method 1
  // *** Using custom hook with react hooks
  // const [post] = usePost();
  // ===============================================================

  // ===============================================================
  // *** Method 2
  // *** Using custom hook with tanstack library
  const { post, isLoading, isError, error } = usePostQuery();

  if (isLoading) {
    return <Loading />
  }

  if (isError) {
    return <ErrorState error={error as Error} />
  }

  if (!post) {
    return <NotFound />
  }

  // ===============================================================


  return (
    <>
      <AppLayout>
        <div>Single Post</div>
        {post &&
          <AppCard>
            {/* Title */}
            <h3>{post.title}</h3>

            {/* Body */}
            <p>{post.body}</p>

            {/* Reactions */}
            <div className='reactionsWrapper'>
              <span>Reactions: </span>
              <div className='reactionsChildrenWrapper'>
                <span>Likes: {post.reactions.likes}</span>
                <span>Dislikes: {post.reactions.dislikes}</span>
              </div>
            </div>

            {/* Views */}
            <div className='viewsWrapper'>
              <span>Views: {post.views}</span>
            </div>

            {/* Tags */}
            <div className='tagsWrapper'>
              <span>Tags: </span>
              {post.tags.map((tag: any, index: number) =>
                <span key={index}>{`#${tag}`}&nbsp;</span>
              )}
            </div>
          </AppCard>
        }

        {/* Comments */}
        <AppCard>
          <Comments />
        </AppCard>
      </AppLayout>
    </>
  )
}