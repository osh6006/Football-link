import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../stores/auth-store";

interface IPrivateRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FunctionComponent<IPrivateRouteProps> = ({
  children,
}) => {
  const { userInfo } = useAuthStore();

  if (!userInfo) {
    return <Navigate to="/auth" replace />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
