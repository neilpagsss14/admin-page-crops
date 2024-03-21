import LogIn from "../pages/LogIn";
import Dashboard from "../pages/Dashboard";
import Checkpoint from "../pages/Checkpoint";
import Farmer from "../pages/Farmer";
import DashBoardLayout from "../Layout/DashboardLayout";
import Deliveries from "../pages/Deliveries";
import Analytics from "../pages/Analytics";
import Notification from "../pages/Notification";

export const publicRoutes = [
  {
    path: "/",
    element: <LogIn />,
  },
  {
    path: "/",
    element: <DashBoardLayout />,
    children: [
      {
        path: "/dashboard", // Absolute path for the home page
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/",
    element: <DashBoardLayout />,
    children: [
      {
        path: "/farmers",
        element: <Farmer />,
      },
    ],
  },
  {
    path: "/",
    element: <DashBoardLayout />,
    children: [
      {
        path: "/checkpoint",
        element: <Checkpoint />,
      },
    ],
  },
  {
    path: "/",
    element: <DashBoardLayout />,
    children: [
      {
        path: "/deliveries",
        element: <Deliveries />,
      },
    ],
  },
  {
    path: "/",
    element: <DashBoardLayout />,
    children: [
      {
        path: "/analytics",
        element: <Analytics />,
      },
    ],
  },
  {
    path: "/",
    element: <DashBoardLayout />,
    children: [
      {
        path: "/notification",
        element: <Notification />,
      },
    ],
  },
];
