import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../stores/auth-store";
import useAuth from "../hooks/use-auth";

interface IPrivateRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FunctionComponent<IPrivateRouteProps> = ({
  children,
}) => {
  useAuth();
  return <>{children}</>;
};

export default ProtectedRoute;
