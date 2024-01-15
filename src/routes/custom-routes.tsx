import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";

import App from "../App";
import Home from "../pages/after-login/home";
import AuthPage from "../pages/before-login/auth-page";
import ErrorPage from "../pages/error-page";
import ProtectedRoute from "./protected-route";

const CustomRoutes = () => {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <App />
        </ProtectedRoute>
      ),
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/home",
          element: <Home />,
          children: [
            {
              path: "test",
              element: <div>test</div>,
            },
          ],
        },
      ],
    },
    {
      path: "/auth",
      element: <AuthPage />,
      errorElement: <ErrorPage />,
    },
  ];

  const router = createBrowserRouter([...routes]);

  return <RouterProvider router={router} />;
};

export default CustomRoutes;
