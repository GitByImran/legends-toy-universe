import React, { useContext } from "react";
import { AuthContext } from "../../authentication/provider/Provider";
import { Navigate, useLocation } from "react-router-dom";

const Protected = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return "wait";
  }
  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/login" replace />;
};

export default Protected;
