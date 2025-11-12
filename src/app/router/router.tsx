import { createBrowserRouter } from "react-router";
import Dashboard from "../pages/Dashboard";
import Inventory from "../pages/Inventory";
import ImportPage from "../pages/Import";
import Marketplace from "../pages/Marketplace";
import Geo from "../pages/Geo";
import Community from "../pages/Community";
import Deck from "../pages/Deck";
import Wishlist from "../pages/Wishlist";
import TradeMatching from "../pages/TradeMatching";
import Mainlayout from "../layout/Mainlayout";
import Notifications from "../pages/Notifications";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/inventory",
        element: <Inventory />,
      },
      {
        path: "/import",
        element: <ImportPage />,
      },
      {
        path: "/marketplace",
        element: <Marketplace />,
      },
      {
        path: "/geo",
        element: <Geo />,
      },
      {
        path: "/community",
        element: <Community />,
      },
      {
        path: "/deck",
        element: <Deck />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/trade-matching",
        element: <TradeMatching />,
      },
      {
        path: "/notifications",
        element: <Notifications />,
      },
    ],
  },
])