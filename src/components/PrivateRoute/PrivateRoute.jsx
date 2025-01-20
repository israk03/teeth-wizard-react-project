import React, { useContext } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import Loader from "../Loader/Loader";

export default function PrivateRoute({ children }) {
  const { user, loading } = useContext(authContext);
  if (loading) {
    return <Loader></Loader>;
  }
  if (!user) {
    return <Navigate to="/login"></Navigate>;
  }
  return children;
}
