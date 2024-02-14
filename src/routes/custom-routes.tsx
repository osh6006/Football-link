import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";

import App from "../App";
import AuthPage from "../pages/before-login/auth-page";
import ErrorPage from "../pages/error-page";
import HomePage from "../pages/after-login/home-page";
import RankPage from "../pages/after-login/rank-page";
import SchedulePage from "../pages/after-login/schedule-page";
import NewsPage from "../pages/after-login/news-page";
import SearchPage from "pages/after-login/search-page";
import TeamRootPage from "pages/after-login/football/team-root";

import { checkAuthSports } from "utils/auth";

const CustomRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      loader: async () => {
        const { auth, hasSports } = await checkAuthSports();
        if (!auth || !hasSports) return redirect("/auth");
        return null;
      },
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/rank",
          element: <RankPage />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/schedule",
          element: <SchedulePage />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/news",
          element: <NewsPage />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/team",
          element: <TeamRootPage />,
          errorElement: <ErrorPage />,
          children: [
            {
              path: "news",
              element: <div>news</div>,
              errorElement: <ErrorPage />,
            },
            {
              path: "schedule",
              element: <div>schedule</div>,
              errorElement: <ErrorPage />,
            },
            {
              path: "lineup",
              element: <div>lineup</div>,
              errorElement: <ErrorPage />,
            },
            {
              path: "info",
              element: <div>info</div>,
              errorElement: <ErrorPage />,
            },
          ],
        },
        {
          path: "/search",
          element: <SearchPage />,
          errorElement: <ErrorPage />,
        },
      ],
    },

    {
      path: "/auth",
      loader: async () => {
        const { auth, hasSports } = await checkAuthSports();
        if (auth && hasSports) return redirect("/");
        return null;
      },
      element: <AuthPage />,
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default CustomRoutes;
