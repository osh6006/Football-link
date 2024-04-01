import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "../App";
import ErrorPage from "../pages/error-page";
import AuthPage from "../pages/before-login/auth-page";
import HomePage from "../pages/after-login/home-page";
import RankPage from "../pages/after-login/rank-page";
import NewsPage from "../pages/after-login/news-page";
import SearchPage from "pages/after-login/search-page";
import SchedulePage from "../pages/after-login/schedule-page";
import TeamRootPage from "pages/after-login/detail/team-root";

import LivePage from "pages/after-login/live-page";
import PredictPage from "pages/after-login/predict-page";
import TeamInfo from "pages/after-login/detail/team-info";
import TeamNews from "pages/after-login/detail/team-news";
import TeamSquad from "pages/after-login/detail/team-squad";
import PlayerInfo from "pages/after-login/detail/player-info";
import PlayerNews from "pages/after-login/detail/player-news";
import PlayerRootPage from "pages/after-login/detail/player-root";
import PlayerCareer from "pages/after-login/detail/player-career";
import TeamSchedule from "pages/after-login/detail/team-schedule";

import { protectedHomePage, protectedLoginPage } from "utils/auth";

const CustomRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      loader: async () => {
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
          path: "/predict",
          loader: async () => {
            const result = await protectedHomePage();
            return result;
          },
          element: <PredictPage />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/live",
          element: <LivePage />,
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
          path: "/football/:leagueId/player/:playerId",
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
      ],
    },

    {
      path: "/auth",
      loader: async () => {
        const result = await protectedLoginPage();
        return result;
      },
      element: <AuthPage />,
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default CustomRoutes;
