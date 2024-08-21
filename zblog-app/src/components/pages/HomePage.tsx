import AppLayout from "../layout/AppLayout";
import Posts from "../../blog/Posts";

export default function HomePage() {
  // const { user, setUser } = useContext(UserContext);
  // console.log(user);

  return (
    <>
      <AppLayout>
        <div>Home page here</div>
        <Posts />
      </AppLayout>
    </>
  )
}