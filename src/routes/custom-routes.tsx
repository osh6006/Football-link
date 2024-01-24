import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";

import App from "../App";
import AuthPage from "../pages/before-login/auth-page";
import ProtectedRoute from "./protected-route";
import ErrorPage from "../pages/error-page";
import HomePage from "../pages/after-login/home-page";
import RankPage from "../pages/after-login/rank-page";
import SchedulePage from "../pages/after-login/schedule-page";
import NewsPage from "../pages/after-login/news-page";

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
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/rank",
          element: <RankPage />,
        },
        {
          path: "/schedule",
          element: <SchedulePage />,
        },
        {
          path: "/news",
          element: <NewsPage />,
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
