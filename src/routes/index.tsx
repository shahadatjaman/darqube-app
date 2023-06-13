import BattleChart from "../pages/battle__chart";
import Battles from "../pages/battles";
import Home from "../pages/home";
import Layout from "../pages/layout";
import Login from "../pages/login";
import Matching from "../pages/matching";
import Wins from "../pages/wins";

export const routes = [
  {
    path: "/",
    element: <Battles />,
  },
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "wins",
    element: <Wins />,
  },
  {
    path: "matching",
    element: <Matching />,
  },
  {
    path: "battle_chart",
    element: <BattleChart />,
  },
];
