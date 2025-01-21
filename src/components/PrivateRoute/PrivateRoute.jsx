import React, { useContext } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Loader/Loader";

export default function PrivateRoute({ children }) {
  const { user, loading } = useContext(authContext);
  const location = useLocation();
  //   console.log(location);
  if (loading) {
    return <Loader></Loader>;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}
