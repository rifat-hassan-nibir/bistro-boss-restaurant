/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";
import Skeleton from "../Components/Skeleton";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Skeleton></Skeleton>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoutes;
