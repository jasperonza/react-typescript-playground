import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const logout = () => {
    setUser();
    navigate('/login');
  }

  return { logout }
}