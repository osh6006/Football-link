import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "../App";
import ErrorPage from "../pages/public-page/error-page";
import AuthPage from "../pages/public-page/auth-page";
import HomePage from "../pages/public-page/home-page";
import RankPage from "../pages/public-page/rank-page";
import NewsPage from "../pages/public-page/news-page";
import SchedulePage from "../pages/public-page/schedule-page";
import TeamRootPage from "pages/public-page/detail/team-root";

import LivePage from "pages/public-page/live-page";
import PredictPage from "pages/private-page/predict-page";
import TeamInfo from "pages/public-page/detail/team-info";
import TeamNews from "pages/public-page/detail/team-news";
import TeamSquad from "pages/public-page/detail/team-squad";
import PlayerInfo from "pages/public-page/detail/player-info";
import PlayerNews from "pages/public-page/detail/player-news";
import PlayerRootPage from "pages/public-page/detail/player-root";
import PlayerCareer from "pages/public-page/detail/player-career";
import TeamSchedule from "pages/public-page/detail/team-schedule";

import { protectedHomePage, protectedLoginPage } from "utils/auth";
import ResultPage from "pages/public-page/result-page";

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
          path: "/result/:matchId",
          element: <ResultPage />,
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
