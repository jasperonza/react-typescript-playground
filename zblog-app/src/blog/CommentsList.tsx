import { useComments } from "./hooks/useComments";
import { useCommentsQuery } from "./hooks/useCommentsQuery";
import { ErrorState, Loading, NotFound } from "../components/utils/useQueryStates";

type Props = {}

export default function CommentsList({ }: Props) {
  // Render comments with different method(s)

  // ===================================================================
  // *** Method 1
  // *** Using custom hook with react hooks
  // const [comments, setComments] = useComments();
  // ===================================================================

  // ===================================================================
  // *** Method 2
  // *** Using custom hook with tasntack's useQuery
  const { comments, isLoading, isError, error } = useCommentsQuery();

  if (isLoading) {
    return <Loading />
  }

  if (isError) {
    return <ErrorState error={error as Error} />
  }

  if (!comments) {
    return <NotFound />
  }
  // ===================================================================

  return (
    <>
      <div>CommentsList</div>
      {comments && comments.map((comment: any) =>
        <div key={comment.id}>
          <div>{comment.body}</div>
          <div>Likes: {comment.likes}</div>
          <div>{comment.user.fullName}</div>
        </div>
      )}
    </>
  )
}