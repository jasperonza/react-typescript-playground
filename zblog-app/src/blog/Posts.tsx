import PostList from "./PostList";

type Props = {}

export default function Posts({ }: Props) {
  return (
    <>
      <div>
        <span>Posts</span>
        <PostList />
      </div>
    </>
  )
}