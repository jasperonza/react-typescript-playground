import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import AppLayout from "../layout/AppLayout";
import AppButton from "../AppButton";

export default function HomePage() {
  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();
  // console.log(user)

  const handleLogout = () => {
    setUser();
    navigate('/');
  }

  return (
    <>
      <AppLayout>
        Home page here
        {user.token}
        <AppButton onClick={handleLogout}>log out</AppButton>
      </AppLayout>
    </>
  )
}