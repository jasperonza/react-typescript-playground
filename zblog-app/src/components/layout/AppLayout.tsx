import { PropsWithChildren } from "react";
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";
import AppNav from "./AppNav";
import { Link, useNavigate } from "react-router-dom";
import AppButton from "../app/AppButton";
import { useUserContext } from "../contexts/UserContext";

type Props = PropsWithChildren;

export default function AppLayout({ children }: Props) {
  const { setUser } = useUserContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser();
    navigate('/');
  }

  return (
    <>
      <div className="layoutWrapper">

        <AppHeader>
          <div>Some header here</div>
          <AppNav>
            <Link to={'/todo'}>Todo</Link>
            <AppButton onClick={handleLogout}>log out</AppButton>
          </AppNav>
        </AppHeader>

        <div className="contentWrapper">
          {children}
        </div>

        <AppFooter />
      </div>
    </>
  )
}