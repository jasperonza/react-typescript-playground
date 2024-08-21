import { useUserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { useMutation } from "@tanstack/react-query";
import fetchUser from "../../api/fetchUser";
import { toast } from "react-toastify";

type AuthCredentials = {
  username: string,
  password: string
}

// Query login credentials
export const useLoginQuery = (data: AuthCredentials) => {
  // Set user context
  const { setUser } = useUserContext();

  // React router
  const navigate = useNavigate();


  return useMutation({
    mutationFn: () => fetchUser(data),
    onSuccess: (data: any | string[] | undefined) => {
      if (data.message) {
        toast.error(data.message);
        return;
      }
      setUser(data);
      navigate('/home');
    },
    onError: (error: any | string[] | undefined) => {
      console.log(error);
    },
  });
}