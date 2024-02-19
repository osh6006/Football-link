import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";

import { checkAuthSports } from "utils/auth";

import App from "../App";
import AuthPage from "../pages/before-login/auth-page";
import ErrorPage from "../pages/error-page";
import HomePage from "../pages/after-login/home-page";
import RankPage from "../pages/after-login/rank-page";
import SchedulePage from "../pages/after-login/schedule-page";
import NewsPage from "../pages/after-login/news-page";
import SearchPage from "pages/after-login/search-page";
import TeamRootPage from "pages/after-login/football/team-root";

import TeamInfo from "pages/after-login/football/team-info";
import TeamNews from "pages/after-login/football/team-news";
import TeamSchedule from "pages/after-login/football/team-schedule";
import TeamSquad from "pages/after-login/football/team-squad";
import PlayerRootPage from "pages/after-login/football/player-root";
import PlayerInfo from "pages/after-login/football/player-info";
import PlayerNews from "pages/after-login/football/player-news";
import PlayerCareer from "pages/after-login/football/player-career";

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
          path: "/football/:leagueId/team/:teamId",
          element: <TeamRootPage />,
          errorElement: <ErrorPage />,
          children: [
            {
              path: "info",
              element: <TeamInfo />,
              errorElement: <ErrorPage />,
            },
            {
              path: "news",
              element: <TeamNews />,
              errorElement: <ErrorPage />,
            },
            {
              path: "schedule",
              element: <TeamSchedule />,
              errorElement: <ErrorPage />,
            },
            {
              path: "squad",
              element: <TeamSquad />,
              errorElement: <ErrorPage />,
            },
          ],
        },
        {
          path: "/player/football/:playerId",
          element: <PlayerRootPage />,
          errorElement: <ErrorPage />,
          children: [
            {
              path: "info",
              element: <PlayerInfo />,
              errorElement: <ErrorPage />,
            },
            {
              path: "news",
              element: <PlayerNews />,
              errorElement: <ErrorPage />,
            },
            {
              path: "career",
              element: <PlayerCareer />,
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
