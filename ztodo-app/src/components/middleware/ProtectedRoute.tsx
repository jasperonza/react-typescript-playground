import { useUserContext } from "../contexts/UserContext";
import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
  element: JSX.Element
}

export default function ProtectedRoute({ element }: ProtectedRouteProps) {
  const { user } = useUserContext();

  return user ? element : <Navigate to='/login' replace />
}