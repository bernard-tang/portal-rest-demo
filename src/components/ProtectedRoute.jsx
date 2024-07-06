import { Navigate } from "react-router-dom";
import { useAuth } from "../utils/authContext";

export const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn) {
    // user is not authenticated
    return <Navigate to="/Login" />;
  }
  return children;
};