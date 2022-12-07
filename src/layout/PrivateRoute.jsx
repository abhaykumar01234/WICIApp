import { Navigate, useOutletContext } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useOutletContext();
  return isLoggedIn ? children : <Navigate to="/" />;
};
