import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import { useFetchLoginCredentials } from "./useFetchLoginCredentials";

export const useLogin = () => {
  const { setUser } = useUserContext();

  const navigate = useNavigate();
  
  const login = async (username: string, password: string) => {
    const data = await useFetchLoginCredentials({ username, password });
    
    if (data) {
      setUser(data);
      navigate('/home');
    }
  }
  
  return { login }
}