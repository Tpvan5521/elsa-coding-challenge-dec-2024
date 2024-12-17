import { createBrowserRouter, Outlet } from "react-router-dom";
import { appUrlConfig } from "configs/app-url.config";
import {
  NotFoundScreen,
  InternalServerErrorScreen,
  LeaderBoardScreen,
  JoinScreen,
  GameScreen,
  ResultScreen,
} from "screens";
import { PrivateRoute } from "./PrivateRoute";
import { Layout } from "components/shared/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    errorElement: <InternalServerErrorScreen />,
    children: [
      {
        path: `${appUrlConfig.LEADER_BOARD}/:gameId`,
        element: (
          <PrivateRoute>
            <LeaderBoardScreen />
          </PrivateRoute>
        ),
      },
      {
        path: appUrlConfig.JOIN,
        element: <JoinScreen />,
      },
      {
        path: `${appUrlConfig.GAME}/:gameId`,
        element: <GameScreen />,
      },
      {
        path: `${appUrlConfig.RESULT}/:gameId`,
        element: <ResultScreen />,
      },
    ],
  },
  {
    path: "500",
    element: <InternalServerErrorScreen />,
  },
  {
    path: "*",
    element: <NotFoundScreen />,
  },
]);
