
import { createBrowserRouter } from "react-router";
import { lazy } from "react";
import RouteSuspense from "@/components/common/RouteSuspense";

const Dashboard = lazy(() => import("../pages/Dashboard"));
const Inventory = lazy(() => import("../pages/Inventory"));
const ImportPage = lazy(() => import("../pages/Import"));
const Marketplace = lazy(() => import("../pages/Marketplace"));
const Geo = lazy(() => import("../pages/Geo"));
const Community = lazy(() => import("../pages/Community"));
const Deck = lazy(() => import("../pages/Deck"));
const Wishlist = lazy(() => import("../pages/Wishlist"));
const TradeMatching = lazy(() => import("../pages/TradeMatching"));
const Mainlayout = lazy(() => import("../layout/Mainlayout"));
const Notifications = lazy(() => import("../pages/Notifications"));
const InventoryDetails = lazy(() => import("../pages/InventoryDetails"));
const MarketplaceDetails = lazy(() => import("../pages/MarketplaceDetails"));
const MarketplaceSP = lazy(() => import("../pages/MarketplaceSP"));
const CommunityDetails = lazy(() => import("../pages/CommunityDetails"));
const Profile = lazy(() => import("../pages/Profile"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RouteSuspense>
        <Mainlayout />
      </RouteSuspense>
    ),
    children: [
      {
        index: true,
        element: (
          <RouteSuspense>
            <Dashboard />
          </RouteSuspense>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <RouteSuspense>
            <Dashboard />
          </RouteSuspense>
        ),
      },
      {
        path: "/inventory",
        element: (
          <RouteSuspense>
            <Inventory />
          </RouteSuspense>
        ),
      },
      {
        path: "/inventory/:id",
        element: (
          <RouteSuspense>
            <InventoryDetails />
          </RouteSuspense>
        ),
      },
      {
        path: "/import",
        element: (
          <RouteSuspense>
            <ImportPage />
          </RouteSuspense>
        ),
      },
      {
        path: "/marketplace",
        element: (
          <RouteSuspense>
            <Marketplace />
          </RouteSuspense>
        ),
      },
      {
        path: "/marketplace/:id",
        element: (
          <RouteSuspense>
            <MarketplaceDetails />
          </RouteSuspense>
        ),
      },
      {
        path: "/marketplace-seller-profile",
        element: (
          <RouteSuspense>
            <MarketplaceSP />
          </RouteSuspense>
        ),
      },
      {
        path: "/geo",
        element: (
          <RouteSuspense>
            <Geo />
          </RouteSuspense>
        ),
      },
      {
        path: "/community",
        element: (
          <RouteSuspense>
            <Community />
          </RouteSuspense>
        ),
      },
      {
        path: "/community/:id",
        element: (
          <RouteSuspense>
            <CommunityDetails />
          </RouteSuspense>
        ),
      },
      {
        path: "/deck",
        element: (
          <RouteSuspense>
            <Deck />
          </RouteSuspense>
        ),
      },
      {
        path: "/wishlist",
        element: (
          <RouteSuspense>
            <Wishlist />
          </RouteSuspense>
        ),
      },
      {
        path: "/trade-matching",
        element: (
          <RouteSuspense>
            <TradeMatching />
          </RouteSuspense>
        ),
      },
      {
        path: "/notifications",
        element: (
          <RouteSuspense>
            <Notifications />
          </RouteSuspense>
        ),
      },
      {
        path: "/profile",
        element: (
          <RouteSuspense>
            <Profile />
          </RouteSuspense>
        ),
      },
    ],
  },
]);