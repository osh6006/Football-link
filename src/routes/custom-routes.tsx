import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";

import App from "../App";
import Home from "../pages/after-login/home";
import ProtectedRoute from "./protected-route";
import AuthPage from "../pages/before-login/auth";
import ErrorPage from "../pages/error-page";

const CustomRoutes = () => {
  const userInfo = false;
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <ProtectedRoute userInfo={userInfo} />,
      children: [
        {
          path: "/",
          element: <App />,
          children: [{ path: "/home", element: <Home /> }],
        },
      ],
    },
  ];

  const routesForNotAuthenticatedOnly: RouteObject[] = [
    {
      path: "/auth",
      element: !userInfo ? <AuthPage /> : <ErrorPage />,
    },
  ];

  const router = createBrowserRouter([
    ...routes,
    ...routesForNotAuthenticatedOnly,
  ]);

  return <RouterProvider router={router} />;
};

export default CustomRoutes;
