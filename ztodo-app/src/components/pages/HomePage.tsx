import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import AppLayout from "../layout/AppLayout";
import AppButton from "../app/AppButton";

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
        <div>Home page here</div>
        <AppButton onClick={handleLogout}>log out</AppButton>
      </AppLayout>
    </>
  )
}